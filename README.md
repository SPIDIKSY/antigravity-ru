<div align="center">

# 🇷🇺 Русификатор Antigravity 2

**Полный перевод десктопного приложения Antigravity 2 (Windows) на русский язык**  
Интерфейс, все разделы настроек, профили безопасности, системные меню и панель изменений — в одну команду.

[![Antigravity Version](https://img.shields.io/badge/Antigravity-2.31.2-6366f1?style=for-the-badge&logo=google&logoColor=white)](https://github.com/SPIDIKSY/antigravity-ru)
[![Platform](https://img.shields.io/badge/Платформа-Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)](https://github.com/SPIDIKSY/antigravity-ru)
[![Translated](https://img.shields.io/badge/Перевод-1600%2B%20строк-10b981?style=for-the-badge)](https://github.com/SPIDIKSY/antigravity-ru)
[![License](https://img.shields.io/badge/Лицензия-MIT-f59e0b?style=for-the-badge)](https://github.com/SPIDIKSY/antigravity-ru/blob/main/LICENSE)

[![Telegram Chat](https://img.shields.io/badge/Наш%20Telegram--чат-Сообщить%20об%20ошибке%20%2F%20Обсуждение-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/spididyanty)

[**Быстрая установка**](#быстрая-установка-в-1-команду) • [**Скриншоты**](#скриншоты) • [**Что переведено**](#что-переведено) • [**Обновление и откат**](#управление-и-откат) • [**FAQ**](#часто-задаваемые-вопросы-faq) • [**Telegram**](https://t.me/spididyanty)

</div>

---

> [!TIP]
> **Нашли опечатку, баг или непереведённую кнопку?**  
> Кидайте скриншот или текст в наш Telegram-чат **[t.me/spididyanty](https://t.me/spididyanty)** — быстро поправим и добавим в обновление!

---

> [!IMPORTANT]
> **Поддерживаемые версии Antigravity:** `2.31.2`, `2.31.0`, `2.29.1`, `2.29.0`, `2.28.0`, `2.26.0`, `2.25.0`.
> Установщик автоматически определяет версию установленного Antigravity и выбирает подходящий набор файлов. В старых наборах доступен перевод возможностей того времени (например, цветные упоминания — начиная с 2.28.0).
> Если у вас другая версия — рекомендуется обновить Antigravity. Поставить набор 2.31.2 принудительно (на свой риск):
> `& ([scriptblock]::Create((irm https://raw.githubusercontent.com/SPIDIKSY/antigravity-ru/main/install.ps1))) -Force`

---

## Быстрая установка (в 1 команду)

Откройте **PowerShell** и выполните одну строку:

```powershell
irm https://raw.githubusercontent.com/SPIDIKSY/antigravity-ru/main/install.ps1 | iex
```

**Что сделает установщик за пару секунд:**
1. Найдёт установленный `Antigravity` на вашем ПК.
2. Создаст резервную копию оригинального файла `app.asar.original_backup`.
3. Скачает свежий языковой пакет с GitHub и применит русификацию.

После завершения просто **перезапустите Antigravity**.

> [!NOTE]
> **Ваши данные в полной безопасности:** проекты, история диалогов, ключи API, MCP-серверы и авторизация аккаунта Google не затрагиваются.

---

## Скриншоты

<div align="center">

### Главное окно
<img src="screenshots/main-window.png" alt="Главное окно" width="90%">

<br><br>

### Настройки (Общие и Поведение агента)
<img src="screenshots/settings-general.png" alt="Общие настройки" width="90%">

<br><br>

### Дополнения и Маркетплейс
<img src="screenshots/customizations.png" alt="Дополнения и Маркетплейс" width="90%">

</div>

---

## Что переведено

| Раздел | Детали перевода |
| :--- | :--- |
| **Все вкладки настроек** | Общие, Приложение, Внешний вид, Модели, Настройки проекта, Браузер (более **1150 фраз**). |
| **Диалог и агент** | Меню ⋮ диалога, панель обзора, вопросы агента, сводка шагов, время работы, план агента. |
| **Цветные упоминания** | Упоминания в поле ввода и пункты «Добавить контекст» окрашены по типу: файлы, диалоги, правила, команды, браузер. |
| **Дополнения и Маркетплейс** | Разделы «Маркетплейс» и «Установлено», описания плагинов Google, поиск и фильтры. |
| **Слэш-команды и меню** | Описания команд (`/goal`, `/plan`, `/schedule` и др.), меню проекта, добавление контекста, режимы разрешений. |
| **Безопасность и доступы** | Профили поведения агента, права на чтение и запись файлов, сетевой доступ, терминал и MCP. |
| **Расход токенов** | Статистика контекста на правила (`Rules`), навыки (`Skills`) и MCP-серверы с выпадающими списками. |
| **Контроль версий (Git)** | Незафиксированные файлы, изменения агента, переключение веток и статусы репозитория. |
| **Поиск и навигация** | Переведены все подсказки, фильтры и плейсхолдеры в строках поиска. |
| **Системные меню Windows** | Верхнее меню (`Файл`, `Правка`, `Вид`, `Окно`, `Справка`), иконка в трее, экран запуска и диалоги выхода. |
| **Защита от слёта** | Фоновое автообновление отключено, чтобы русификатор не сбрасывался сам по себе во время работы. |

---

## Управление и откат

### Как вернуть английский язык (Откат к оригиналу)

Откройте **PowerShell** и выполните одну строку (скачивать репозиторий не нужно):

```powershell
& ([scriptblock]::Create((irm https://raw.githubusercontent.com/SPIDIKSY/antigravity-ru/main/install.ps1))) -Uninstall
```
Оригинальный `app.asar` мгновенно восстановится из резервной копии.

### Что делать, когда выйдет новая версия Antigravity

1. Обновите Antigravity вручную через меню приложения: фоновое автообновление при установленном русификаторе отключено.
2. Снова выполните команду в PowerShell:
   ```powershell
   irm https://raw.githubusercontent.com/SPIDIKSY/antigravity-ru/main/install.ps1 | iex
   ```

<details>
<summary><b>Установка вручную через Git (для разработчиков)</b></summary>
<br>

Если вы хотите склонировать репозиторий локально и запускать установщик вручную. Поддерживаются как стандартный **Windows PowerShell 5.1** (`powershell`), так и **PowerShell 7** (`pwsh`):

```bash
git clone https://github.com/SPIDIKSY/antigravity-ru.git
cd antigravity-ru

# Обычная установка
powershell -ExecutionPolicy Bypass -Command "& ([scriptblock]::Create((Get-Content install.ps1 -Raw -Encoding UTF8))) -Install"

# Установка без принудительного закрытия запущенных окон Antigravity
powershell -ExecutionPolicy Bypass -Command "& ([scriptblock]::Create((Get-Content install.ps1 -Raw -Encoding UTF8))) -Install -NoKill"

# Удаление русификации
powershell -ExecutionPolicy Bypass -Command "& ([scriptblock]::Create((Get-Content install.ps1 -Raw -Encoding UTF8))) -Uninstall"
```
</details>

<details>
<summary><b>Открытый исходный код: какие файлы ядра меняет патчер</b></summary>
<br>

В репозитории нет закрытых бинарников: установщик копирует готовые файлы из `resources\<версия>\`, а `app.asar` — обычный архив, который можно распаковать и проверить. Какие строки меняются, показывает скрипт `patch.js` (установщик его не запускает, последний раз он обновлялся для версии 2.26.0):

| Файл ядра | Что именно меняет русификатор |
| :--- | :--- |
| `dist/languageServer.js` | Подключает языковой бандл с русским переводом интерфейса |
| `dist/menu.js` | Переводит верхнее системное меню окна |
| `dist/tray.js` | Переводит контекстное меню в трее и счётчик активных агентов |
| `dist/main.js` | Переводит диалоги подтверждения выхода |
| `dist/updater.js` | Отключает принудительные фоновые автообновления |
| `dist/loadingOverlay.js` | Переводит экран запуска («Загрузка Antigravity...») |
| `dist/ideInstall/wizardHtml.js` | Переводит мастер первоначальной настройки |

Кроме `app.asar`, в папку `web_bundle_ru` кладётся копия веб-интерфейса с тремя изменениями: подключён `i18n-ru.js` (словарь перевода), в `index.html` добавлены стили (цвета упоминаний), в `main.js` — правильные окончания в «N вопросов» и метки типа у упоминаний для этих цветов.

</details>

---

## Часто задаваемые вопросы (FAQ)

<details open>
<summary><b>Как поставить русский язык в Antigravity?</b></summary>
Откройте PowerShell и выполните: <code>irm https://raw.githubusercontent.com/SPIDIKSY/antigravity-ru/main/install.ps1 | iex</code>.
</details>

<br>

<details open>
<summary><b>Слетят ли мои проекты, чаты или аккаунт после установки?</b></summary>
<b>Нет.</b> Русификатор меняет только текст интерфейса и не трогает пользовательскую папку с настройками, историей и сессиями.
</details>

<br>

<details open>
<summary><b>Помогает ли русификатор обойти региональные ограничения?</b></summary>
<b>Нет.</b> Это исключительно перевод интерфейса программы. Для работы с моделями в неподдерживаемых регионах по-прежнему необходим рабочий прокси или VPN.
</details>
