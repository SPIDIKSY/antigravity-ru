#!/usr/bin/env bash
# Antigravity 2.0 — Установщик русской локализации для macOS (Open Source)
# Репозиторий: https://github.com/SPIDIKSY/antigravity-ru

set -u

SUPPORTED_VERSIONS=("2.25.0" "2.26.0" "2.28.0" "2.29.0" "2.29.1" "2.31.0" "2.31.2" "2.32.1" "2.33.0" "2.34.0" "2.35.0")

INSTALL_MODE=false
UNINSTALL_MODE=false
NO_KILL=false
FORCE=false
REQUESTED_DIR=""

TEMP_DIR=""
TEMP_ZIP=""
SUDO_CMD=""

# Цвета для терминала (отключаются при перенаправлении вывода)
if [ -t 1 ]; then
    C_CYAN='\033[0;36m'
    C_GREEN='\033[0;32m'
    C_YELLOW='\033[0;33m'
    C_RED='\033[0;31m'
    C_GRAY='\033[0;90m'
    C_WHITE='\033[1;37m'
    C_RESET='\033[0m'
else
    C_CYAN='' C_GREEN='' C_YELLOW='' C_RED='' C_GRAY='' C_WHITE='' C_RESET=''
fi

cleanup() {
    if [ -n "$TEMP_DIR" ] && [ -d "$TEMP_DIR" ]; then
        rm -rf "$TEMP_DIR" 2>/dev/null || true
    fi
    if [ -n "$TEMP_ZIP" ] && [ -f "$TEMP_ZIP" ]; then
        rm -f "$TEMP_ZIP" 2>/dev/null || true
    fi
}
trap cleanup EXIT

print_usage() {
    cat <<EOF
Использование:
  ./install.sh [параметры]

Параметры:
  --install, -Install       Установить русификацию
  --uninstall, -Uninstall   Удалить русификацию и вернуть оригинал
  --no-kill, -NoKill        Не закрывать запущенный Antigravity автоматически
  --force, -Force           Установить самую новую локализацию при несовпадении версии
  --app-dir, -AppDir <путь> Путь к Antigravity.app или папке с ним
  -h, --help                Показать справку
EOF
}

while [ $# -gt 0 ]; do
    case "$1" in
        --install|-Install)
            INSTALL_MODE=true
            ;;
        --uninstall|-Uninstall)
            UNINSTALL_MODE=true
            ;;
        --no-kill|-NoKill)
            NO_KILL=true
            ;;
        --force|-Force)
            FORCE=true
            ;;
        --app-dir|-AppDir)
            if [ $# -lt 2 ]; then
                printf "${C_RED}[-] Ошибка: параметр %s требует указания пути.${C_RESET}\n" "$1"
                exit 1
            fi
            REQUESTED_DIR="$2"
            shift
            ;;
        --app-dir=*)
            REQUESTED_DIR="${1#--app-dir=}"
            ;;
        -h|--help)
            print_usage
            exit 0
            ;;
        *)
            printf "${C_YELLOW}[!] Неизвестный параметр: %s${C_RESET}\n" "$1"
            print_usage
            exit 1
            ;;
    esac
    shift
done

printf "${C_CYAN}==========================================================${C_RESET}\n"
printf "${C_GREEN}    Antigravity 2.0 (macOS) - Русская локализация (RU)    ${C_RESET}\n"
printf "${C_GRAY}     Репозиторий: https://github.com/SPIDIKSY/antigravity-ru${C_RESET}\n"
printf "${C_CYAN}==========================================================${C_RESET}\n\n"

if [ "$(uname -s)" != "Darwin" ]; then
    printf "${C_RED}[-] Ошибка: этот скрипт предназначен только для macOS.${C_RESET}\n"
    printf "    Для Windows используйте install.ps1.\n"
    exit 1
fi

normalize_app_bundle() {
    local p="$1"
    # Убираем пробелы, кавычки и завершающие слеши
    p="${p#"${p%%[![:space:]]*}"}"
    p="${p%"${p##*[![:space:]]}"}"
    p="${p#\"}" ; p="${p%\"}"
    p="${p#\'}" ; p="${p%\'}"
    while [ "${#p}" -gt 1 ] && [ "${p%/}" != "$p" ]; do
        p="${p%/}"
    done

    case "$p" in
        */Contents/MacOS/Antigravity) p="${p%/Contents/MacOS/Antigravity}" ;;
        */Contents/Resources) p="${p%/Contents/Resources}" ;;
        */Contents) p="${p%/Contents}" ;;
    esac

    if [ -d "$p/Antigravity.app" ]; then
        p="$p/Antigravity.app"
    fi
    printf '%s' "$p"
}

is_valid_app_bundle() {
    local bundle="$1"
    [ -n "$bundle" ] && [ -d "$bundle" ] && \
        [ -f "$bundle/Contents/Info.plist" ] && \
        [ -f "$bundle/Contents/Resources/app.asar" ]
}

find_app_bundle() {
    local candidate=""

    # 1. Пользовательский путь --app-dir
    if [ -n "$REQUESTED_DIR" ]; then
        candidate="$(normalize_app_bundle "$REQUESTED_DIR")"
        if is_valid_app_bundle "$candidate"; then
            printf '%s' "$candidate"
            return 0
        fi
    fi

    # 2. Стандартные папки приложений macOS
    for candidate in "/Applications/Antigravity.app" "$HOME/Applications/Antigravity.app"; do
        if is_valid_app_bundle "$candidate"; then
            printf '%s' "$candidate"
            return 0
        fi
    done

    # 3. Запущенный процесс Antigravity
    local proc_path=""
    proc_path="$(ps -axo comm= 2>/dev/null | grep -m1 'Antigravity\.app/Contents/MacOS/Antigravity$' || true)"
    if [ -n "$proc_path" ]; then
        candidate="$(normalize_app_bundle "$proc_path")"
        if is_valid_app_bundle "$candidate"; then
            printf '%s' "$candidate"
            return 0
        fi
    fi

    # 4. Поиск через Spotlight
    if command -v mdfind >/dev/null 2>&1; then
        local spotlight_path=""
        spotlight_path="$(mdfind "kMDItemCFBundleIdentifier == 'com.google.antigravity'" 2>/dev/null | head -n 1 || true)"
        if [ -n "$spotlight_path" ]; then
            candidate="$(normalize_app_bundle "$spotlight_path")"
            if is_valid_app_bundle "$candidate"; then
                printf '%s' "$candidate"
                return 0
            fi
        fi
    fi

    return 1
}

APP_BUNDLE="$(find_app_bundle || true)"

if [ -n "$REQUESTED_DIR" ] && [ "$APP_BUNDLE" != "$(normalize_app_bundle "$REQUESTED_DIR")" ]; then
    printf "${C_YELLOW}[!] Antigravity.app не найден по пути: %s${C_RESET}\n" "$REQUESTED_DIR"
fi

if [ -z "$APP_BUNDLE" ]; then
    printf "${C_YELLOW}[!] Не удалось найти Antigravity.app автоматически.${C_RESET}\n"
    printf "${C_GRAY}    Обычно приложение находится в /Applications/Antigravity.app${C_RESET}\n"
    if [ -t 0 ]; then
        printf "Введите путь к Antigravity.app: "
        read -r user_path
        APP_BUNDLE="$(normalize_app_bundle "$user_path")"
    fi
    if ! is_valid_app_bundle "$APP_BUNDLE"; then
        printf "${C_RED}[-] Ошибка: Antigravity.app не найден (%s). Прерывание.${C_RESET}\n" "${APP_BUNDLE:-пусто}"
        exit 1
    fi
fi

printf "${C_GREEN}[+] Найден Antigravity: %s${C_RESET}\n" "$APP_BUNDLE"

# 2. Определение режима работы
if [ "$INSTALL_MODE" = false ] && [ "$UNINSTALL_MODE" = false ]; then
    if [ ! -t 0 ]; then
        # Запуск через конвейер (curl ... | bash) — автоматическая установка
        INSTALL_MODE=true
    else
        echo ""
        printf "${C_YELLOW}Выберите действие:${C_RESET}\n"
        printf "${C_WHITE} [1] Установить русификацию (Рекомендуется)${C_RESET}\n"
        echo "     • Полный перевод интерфейса, системного меню, Dock и настроек."
        echo "     • Проекты, чаты, профиль и ключи API остаются нетронутыми."
        echo "     • Создаётся резервная копия оригинальных файлов и подписи."
        echo ""
        printf "${C_WHITE} [2] Удалить русификацию (Восстановить официальный оригинал)${C_RESET}\n"
        echo "     • Возвращает оригинальный app.asar и подпись Google."
        echo ""
        printf "${C_GRAY} [0] Отмена${C_RESET}\n"
        echo ""
        printf "Введите номер действия [1]: "
        read -r choice
        case "$choice" in
            2) UNINSTALL_MODE=true ;;
            0)
                printf "${C_YELLOW}[*] Отменено пользователем.${C_RESET}\n"
                exit 0
                ;;
            *) INSTALL_MODE=true ;;
        esac
    fi
fi

CONTENTS_DIR="$APP_BUNDLE/Contents"
RESOURCES_DIR="$CONTENTS_DIR/Resources"
INFO_PLIST="$CONTENTS_DIR/Info.plist"
MAIN_BIN="$CONTENTS_DIR/MacOS/Antigravity"
CODE_RESOURCES="$CONTENTS_DIR/_CodeSignature/CodeResources"

TARGET_ASAR="$RESOURCES_DIR/app.asar"
BACKUP_DIR="$RESOURCES_DIR/.antigravity_ru_backup"
LEGACY_BACKUP_ASAR="$RESOURCES_DIR/app.asar.original_backup"
TARGET_BUNDLE="$RESOURCES_DIR/web_bundle_ru"

# Проверка прав записи в бандл приложения
ensure_write_access() {
    if [ -w "$CONTENTS_DIR" ] && [ -w "$RESOURCES_DIR" ] && [ -w "$INFO_PLIST" ]; then
        SUDO_CMD=""
        return 0
    fi
    if [ "$(id -u)" -eq 0 ]; then
        SUDO_CMD=""
        return 0
    fi
    printf "${C_YELLOW}[*] Для изменения %s требуются права администратора (sudo)...${C_RESET}\n" "$APP_BUNDLE"
    if [ -t 0 ]; then
        sudo -v || { printf "${C_RED}[-] Не удалось получить права администратора.${C_RESET}\n"; exit 1; }
    elif [ -e /dev/tty ]; then
        sudo -v </dev/tty || { printf "${C_RED}[-] Не удалось получить права администратора.${C_RESET}\n"; exit 1; }
    else
        printf "${C_RED}[-] Ошибка: нет прав записи в %s и недоступен интерактивный ввод пароля sudo.${C_RESET}\n" "$APP_BUNDLE"
        exit 1
    fi
    SUDO_CMD="sudo"
}

run_priv() {
    if [ -n "$SUDO_CMD" ]; then
        sudo "$@"
    else
        "$@"
    fi
}

stop_antigravity() {
    if [ "$NO_KILL" = true ]; then
        printf "${C_GRAY}[*] Параметр --no-kill: пропуск закрытия процессов Antigravity.${C_RESET}\n"
        return 0
    fi
    if pgrep -x "Antigravity" >/dev/null 2>&1; then
        printf "${C_YELLOW}[*] Закрытие запущенных процессов Antigravity...${C_RESET}\n"
        osascript -e 'tell application "Antigravity" to quit' >/dev/null 2>&1 || true
        local timeout=10
        while pgrep -x "Antigravity" >/dev/null 2>&1 && [ "$timeout" -gt 0 ]; do
            sleep 0.5
            timeout=$((timeout - 1))
        done
        if pgrep -x "Antigravity" >/dev/null 2>&1; then
            pkill -9 -x "Antigravity" >/dev/null 2>&1 || true
            sleep 1
        fi
    fi
}

# --- РЕЖИМ УДАЛЕНИЯ (ВОССТАНОВЛЕНИЕ ОРИГИНАЛА) ---
if [ "$UNINSTALL_MODE" = true ]; then
    echo ""
    printf "${C_CYAN}[*] Восстановление оригинальной версии от Google...${C_RESET}\n"
    ensure_write_access
    stop_antigravity

    restored=false
    if [ -f "$BACKUP_DIR/app.asar" ]; then
        run_priv cp -pf "$BACKUP_DIR/app.asar" "$TARGET_ASAR"
        [ -f "$BACKUP_DIR/Info.plist" ] && run_priv cp -pf "$BACKUP_DIR/Info.plist" "$INFO_PLIST"
        [ -f "$BACKUP_DIR/Antigravity" ] && run_priv cp -pf "$BACKUP_DIR/Antigravity" "$MAIN_BIN"
        if [ -f "$BACKUP_DIR/CodeResources" ]; then
            run_priv mkdir -p "$CONTENTS_DIR/_CodeSignature"
            run_priv cp -pf "$BACKUP_DIR/CodeResources" "$CODE_RESOURCES"
        fi
        run_priv rm -rf "$BACKUP_DIR"
        restored=true
        printf "${C_GREEN}[+] Оригинальный app.asar и подпись Apple/Google полностью восстановлены.${C_RESET}\n"
    elif [ -f "$LEGACY_BACKUP_ASAR" ]; then
        run_priv cp -pf "$LEGACY_BACKUP_ASAR" "$TARGET_ASAR"
        restored=true
        printf "${C_GREEN}[+] Оригинальный app.asar восстановлен из резервной копии.${C_RESET}\n"
    else
        printf "${C_YELLOW}[!] Резервная копия не найдена. Файл app.asar не изменён.${C_RESET}\n"
    fi

    if [ -d "$TARGET_BUNDLE" ]; then
        run_priv rm -rf "$TARGET_BUNDLE"
        printf "${C_GREEN}[+] Каталог web_bundle_ru удалён.${C_RESET}\n"
    fi

    if [ "$restored" = true ] && command -v codesign >/dev/null 2>&1; then
        if run_priv codesign --verify --deep --strict "$APP_BUNDLE" >/dev/null 2>&1; then
            printf "${C_GREEN}[+] Проверка цифровой подписи пройдена успешно.${C_RESET}\n"
        fi
    fi

    echo ""
    printf "${C_GREEN}==========================================================${C_RESET}\n"
    printf "${C_GREEN}  Оригинальная версия Antigravity 2.0 восстановлена!      ${C_RESET}\n"
    printf "${C_GREEN}==========================================================${C_RESET}\n"
    exit 0
fi

# --- РЕЖИМ УСТАНОВКИ ---
echo ""
printf "${C_CYAN}[*] Подготовка к установке русификатора...${C_RESET}\n"

# Чтение версии установленного приложения до загрузки файлов
APP_VERSION="$(/usr/libexec/PlistBuddy -c "Print :CFBundleShortVersionString" "$INFO_PLIST" 2>/dev/null || true)"
if [ -z "$APP_VERSION" ]; then
    printf "${C_RED}[-] Не удалось определить версию Antigravity из Info.plist.${C_RESET}\n"
    exit 1
fi

CHOSEN_VERSION=""
for v in "${SUPPORTED_VERSIONS[@]}"; do
    if [ "$v" = "$APP_VERSION" ]; then
        CHOSEN_VERSION="$v"
        break
    fi
done

if [ -z "$CHOSEN_VERSION" ]; then
    printf "${C_YELLOW}[!] У вас Antigravity %s, а русификатор поддерживает версии: %s.${C_RESET}\n" "$APP_VERSION" "${SUPPORTED_VERSIONS[*]}"
    if [ "$FORCE" = false ]; then
        printf "${C_RED}[-] Установка отменена: файлы от другой версии могут сломать приложение.${C_RESET}\n"
        printf "${C_WHITE}    Обновите Antigravity или запустите установку с параметром --force:${C_RESET}\n"
        printf "${C_GRAY}    curl -fsSL https://raw.githubusercontent.com/SPIDIKSY/antigravity-ru/main/install.sh | bash -s -- --force${C_RESET}\n"
        exit 1
    fi
    CHOSEN_VERSION="${SUPPORTED_VERSIONS[${#SUPPORTED_VERSIONS[@]}-1]}"
    printf "${C_YELLOW}[*] Параметр --force: устанавливается набор для %s (самый новый доступный).${C_RESET}\n" "$CHOSEN_VERSION"
fi

# Поиск локальных ресурсов или загрузка с GitHub
SOURCE_DIR=""
SCRIPT_PATH="${BASH_SOURCE[0]:-}"
if [ -n "$SCRIPT_PATH" ] && [ -f "$SCRIPT_PATH" ]; then
    SCRIPT_DIR="$(cd "$(dirname "$SCRIPT_PATH")" && pwd)"
    if [ -f "$SCRIPT_DIR/resources/$CHOSEN_VERSION/app.asar" ]; then
        SOURCE_DIR="$SCRIPT_DIR"
    fi
fi
if [ -z "$SOURCE_DIR" ] && [ -f "$PWD/resources/$CHOSEN_VERSION/app.asar" ]; then
    SOURCE_DIR="$PWD"
fi

if [ -z "$SOURCE_DIR" ]; then
    printf "${C_CYAN}[*] Загрузка актуальных файлов локализации с GitHub...${C_RESET}\n"
    RELEASE_URL="https://github.com/SPIDIKSY/antigravity-ru/releases/download/v${CHOSEN_VERSION}/antigravity-ru-${CHOSEN_VERSION}.zip"
    FALLBACK_ZIP_URL="https://github.com/SPIDIKSY/antigravity-ru/archive/refs/heads/main.zip"
    TEMP_DIR="$(mktemp -d /tmp/antigravity_ru_XXXXXX)"
    TEMP_ZIP="${TEMP_DIR}.zip"

    printf "${C_GRAY}[*] Загрузка пакета v%s из GitHub Releases...${C_RESET}\n" "$CHOSEN_VERSION"
    if ! curl -fsSL "$RELEASE_URL" -o "$TEMP_ZIP" 2>/dev/null; then
        printf "${C_YELLOW}[!] Пакет релиза v%s не найден, загрузка полного репозитория...${C_RESET}\n" "$CHOSEN_VERSION"
        if ! curl -fsSL "$FALLBACK_ZIP_URL" -o "$TEMP_ZIP"; then
            printf "${C_RED}[-] Ошибка загрузки архива с GitHub.${C_RESET}\n"
            exit 1
        fi
    fi

    if ! unzip -q "$TEMP_ZIP" -d "$TEMP_DIR"; then
        printf "${C_RED}[-] Ошибка распаковки загруженного архива.${C_RESET}\n"
        exit 1
    fi

    if [ -f "$TEMP_DIR/resources/$CHOSEN_VERSION/app.asar" ]; then
        SOURCE_DIR="$TEMP_DIR"
    else
        for d in "$TEMP_DIR"/*; do
            if [ -d "$d" ] && [ -f "$d/resources/$CHOSEN_VERSION/app.asar" ]; then
                SOURCE_DIR="$d"
                break
            fi
        done
    fi

    if [ -z "$SOURCE_DIR" ] || [ ! -f "$SOURCE_DIR/resources/$CHOSEN_VERSION/app.asar" ]; then
        printf "${C_RED}[-] Не удалось обнаружить ресурсы для версии %s в загруженном архиве.${C_RESET}\n" "$CHOSEN_VERSION"
        exit 1
    fi
    printf "${C_GREEN}[+] Файлы успешно загружены.${C_RESET}\n"
fi

ensure_write_access
stop_antigravity

# 1. Резервная копия оригинального ядра и подписи Google
IS_CLEAN=false
if [ -f "$TARGET_ASAR" ] && ! LC_ALL=C grep -F -q "web_bundle_ru" "$TARGET_ASAR"; then
    IS_CLEAN=true
fi

if [ "$IS_CLEAN" = true ]; then
    printf "${C_CYAN}[*] Обнаружен чистый оригинальный app.asar, сохранение резервной копии...${C_RESET}\n"
    run_priv mkdir -p "$BACKUP_DIR"
    run_priv cp -pf "$TARGET_ASAR" "$BACKUP_DIR/app.asar"
    run_priv cp -pf "$INFO_PLIST" "$BACKUP_DIR/Info.plist"
    [ -f "$MAIN_BIN" ] && run_priv cp -pf "$MAIN_BIN" "$BACKUP_DIR/Antigravity"
    [ -f "$CODE_RESOURCES" ] && run_priv cp -pf "$CODE_RESOURCES" "$BACKUP_DIR/CodeResources"
    printf "${C_GREEN}[+] Резервная копия сохранена в .antigravity_ru_backup${C_RESET}\n"
elif [ -f "$BACKUP_DIR/app.asar" ] || [ -f "$LEGACY_BACKUP_ASAR" ]; then
    printf "${C_GRAY}[*] Резервная копия уже существует.${C_RESET}\n"
else
    printf "${C_YELLOW}[!] Внимание: текущий app.asar уже модифицирован, а резервная копия отсутствует. Откат будет невозможен.${C_RESET}\n"
fi

# 2. Копирование интерфейсного бандла web_bundle_ru
printf "${C_CYAN}[*] Копирование языкового бандла (web_bundle_ru для %s)...${C_RESET}\n" "$CHOSEN_VERSION"
if [ -d "$TARGET_BUNDLE" ]; then
    run_priv rm -rf "$TARGET_BUNDLE"
fi
run_priv cp -R "$SOURCE_DIR/resources/$CHOSEN_VERSION/web_bundle_ru" "$TARGET_BUNDLE"

# 3. Копирование русифицированного app.asar
printf "${C_CYAN}[*] Установка локализованного ядра Electron (app.asar для %s)...${C_RESET}\n" "$CHOSEN_VERSION"
run_priv cp -f "$SOURCE_DIR/resources/$CHOSEN_VERSION/app.asar" "$TARGET_ASAR"

# 4. Обновление ElectronAsarIntegrity в Info.plist (SHA-256 JSON-заголовка app.asar)
if /usr/libexec/PlistBuddy -c "Print :ElectronAsarIntegrity:Resources/app.asar:hash" "$INFO_PLIST" >/dev/null 2>&1; then
    ASAR_HEADER_HASH="$(/usr/bin/perl -e '
        open(my $fh, "<:raw", $ARGV[0]) or die $!;
        read($fh, my $hdr, 16) == 16 or die;
        my ($u1, $s1, $u2, $jlen) = unpack("V4", $hdr);
        read($fh, my $json, $jlen) == $jlen or die;
        print $json;
    ' "$TARGET_ASAR" | /usr/bin/shasum -a 256 | awk '{print $1}')"
    if [ -n "$ASAR_HEADER_HASH" ]; then
        run_priv /usr/libexec/PlistBuddy -c "Set :ElectronAsarIntegrity:Resources/app.asar:hash $ASAR_HEADER_HASH" "$INFO_PLIST"
    fi
fi

# 5. Снятие карантина (если был) и переподпись бандла ad-hoc с сохранением entitlements
printf "${C_CYAN}[*] Обновление цифровой подписи macOS (с сохранением прав доступа)...${C_RESET}\n"
run_priv xattr -dr com.apple.quarantine "$APP_BUNDLE" >/dev/null 2>&1 || true
if ! run_priv codesign --force --sign - --preserve-metadata=entitlements "$APP_BUNDLE" >/dev/null 2>&1; then
    printf "${C_RED}[-] Ошибка переподписи %s. Возможно, приложение заблокировано или не хватает прав.${C_RESET}\n" "$APP_BUNDLE"
    exit 1
fi

if ! run_priv codesign --verify --deep --strict "$APP_BUNDLE" >/dev/null 2>&1; then
    printf "${C_YELLOW}[!] Предупреждение: codesign --verify сообщил о расхождении подписи.${C_RESET}\n"
fi

echo ""
printf "${C_GREEN}==========================================================${C_RESET}\n"
printf "${C_GREEN}  Русификация Antigravity 2.0 (набор v%s) установлена!  ${C_RESET}\n" "$CHOSEN_VERSION"
printf "${C_GREEN}==========================================================${C_RESET}\n"
printf "${C_WHITE}• Все ваши проекты, чаты, сессии и ключи полностью сохранены.${C_RESET}\n"
printf "${C_WHITE}• Запустите Antigravity, чтобы начать работу на русском!${C_RESET}\n"
printf "${C_GRAY}• Для отката запустите скрипт с параметром --uninstall${C_RESET}\n"
echo ""
