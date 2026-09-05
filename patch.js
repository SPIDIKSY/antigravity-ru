/**
 * Google Antigravity 2.0 — Electron Core Patcher (Open Source)
 * Репозиторий: https://github.com/SPIDIKSY/antigravity-ru
 * 
 * Данный скрипт демонстрирует и применяет прозрачные патчи к распакованному
 * ядру app.asar Google Antigravity 2.0:
 * 
 * 1. languageServer.js  — подключение интерфейсного бандла web_bundle_ru
 * 2. menu.js            — рекурсивный перевод системного меню окна
 * 3. tray.js            — перевод контекстного меню и подсказок трея
 * 4. main.js            — перевод диалогов подтверждения выхода
 * 5. updater.js         — отключение фонового затирания русификации
 * 6. loadingOverlay.js  — перевод экрана предзагрузки («Загрузка Antigravity...»)
 * 7. wizardHtml.js      — перевод мастера первоначальной настройки
 */

const fs = require('fs');
const path = require('path');

function patchExtractedAsar(extractedDir) {
  if (!fs.existsSync(extractedDir)) {
    console.error(`[-] Ошибка: каталог не найден: ${extractedDir}`);
    process.exit(1);
  }

  console.log(`[*] Применение открытых патчей к ядру Antigravity 2.0: ${extractedDir}`);

  // 1. languageServer.js: перенаправление web_bundle на web_bundle_ru
  const lsPath = path.join(extractedDir, 'dist/languageServer.js');
  if (fs.existsSync(lsPath)) {
    let ls = fs.readFileSync(lsPath, 'utf8');
    const idx = ls.indexOf("'--enable_sidecars',");
    if (idx !== -1 && !ls.includes('web_bundle_ru')) {
      const closeBracket = ls.indexOf('];', idx);
      if (closeBracket !== -1) {
        ls = ls.slice(0, closeBracket + 2) + `
        const customWebBundlePath = electron_1.app.isPackaged
            ? path_1.default.join(process.resourcesPath, 'web_bundle_ru')
            : path_1.default.join(__dirname, '..', 'resources', 'web_bundle_ru');
        if (fs.existsSync(customWebBundlePath)) {
          args.push(\`--web_bundle_path=\${customWebBundlePath}\`);
        }` + ls.slice(closeBracket + 2);
        fs.writeFileSync(lsPath, ls, 'utf8');
        console.log('[+] dist/languageServer.js успешно пропатчен');
      }
    }
  }

  // 2. menu.js: рекурсивный перевод нативного меню Electron
  const menuPath = path.join(extractedDir, 'dist/menu.js');
  if (fs.existsSync(menuPath)) {
    let menu = fs.readFileSync(menuPath, 'utf8');
    menu = menu.replace("label: 'New Window'", "label: 'Новое окно'");
    menu = menu.replace("label: 'Docs'", "label: 'Документация'");

    const menuHook = 'hideDevTools(menu);';
    if (menu.includes(menuHook) && !menu.includes('MENU_TRANSLATIONS')) {
      const menuRepl = `hideDevTools(menu);
    const MENU_TRANSLATIONS = {
        'File': 'Файл',
        'Edit': 'Правка',
        'View': 'Вид',
        'Window': 'Окно',
        'Help': 'Справка',
        'Undo': 'Отменить',
        'Redo': 'Повторить',
        'Cut': 'Вырезать',
        'Copy': 'Копировать',
        'Paste': 'Вставить',
        'Paste and Match Style': 'Вставить с сохранением стиля',
        'Select All': 'Выделить всё',
        'Delete': 'Удалить',
        'Speech': 'Речь',
        'Start Speaking': 'Начать воспроизведение',
        'Stop Speaking': 'Остановить воспроизведение',
        'Reload': 'Перезагрузить',
        'Force Reload': 'Принудительная перезагрузка',
        'Toggle Full Screen': 'Полноэкранный режим',
        'Reset Zoom': 'Сбросить масштаб',
        'Zoom In': 'Увеличить',
        'Zoom Out': 'Уменьшить',
        'Minimize': 'Свернуть',
        'Close': 'Закрыть',
        'Close Window': 'Закрыть окно',
        'Quit': 'Выход'
    };
    function translateMenuItems(items) {
        if (!items) return;
        items.forEach(item => {
            if (item.label && MENU_TRANSLATIONS[item.label]) {
                item.label = MENU_TRANSLATIONS[item.label];
            }
            if (item.submenu && item.submenu.items) {
                translateMenuItems(item.submenu.items);
            }
        });
    }
    translateMenuItems(menu.items);`;

      menu = menu.replace('hideDevTools(menu);', menuRepl);
      fs.writeFileSync(menuPath, menu, 'utf8');
      console.log('[+] dist/menu.js успешно пропатчен');
    }
  }

  // 3. tray.js: системный трей
  const trayPath = path.join(extractedDir, 'dist/tray.js');
  if (fs.existsSync(trayPath)) {
    let tray = fs.readFileSync(trayPath, 'utf8');
    const trayTarget = "' running'";
    if (tray.includes(trayTarget) && !tray.includes('Запущено агентов')) {
      const lineStart = tray.lastIndexOf('(count > 0', tray.indexOf(trayTarget));
      const lineEnd = tray.indexOf("' running'", lineStart) + "' running'".length;
      if (lineStart !== -1 && lineEnd !== -1) {
        tray = tray.slice(0, lineStart) + "(count > 0 ? `Запущено агентов: ${count}` : 'Нет запущенных агентов')" + tray.slice(lineEnd);
        fs.writeFileSync(trayPath, tray, 'utf8');
        console.log('[+] dist/tray.js успешно пропатчен');
      }
    }
  }

  // 4. main.js: диалоги выхода
  const mainPath = path.join(extractedDir, 'dist/main.js');
  if (fs.existsSync(mainPath)) {
    let main = fs.readFileSync(mainPath, 'utf8');
    main = main.replace("label: 'No agents running'", "label: 'Нет запущенных агентов'");
    main = main.replace("label: `Open ${electron_1.app.getName()}`", "label: `Открыть ${electron_1.app.getName()}`");
    main = main.replace("label: 'Quit'", "label: 'Выход'");
    main = main.replace("buttons: ['Cancel', 'Quit']", "buttons: ['Отмена', 'Выход']");
    main = main.replace("title: 'Confirm Quit'", "title: 'Подтверждение выхода'");
    main = main.replace("message: 'Are you sure you want to quit?'", "message: 'Вы действительно хотите выйти?'");
    main = main.replace("detail: 'All running agents will be stopped.'", "detail: 'Все запущенные агенты будут остановлены.'");
    fs.writeFileSync(mainPath, main, 'utf8');
    console.log('[+] dist/main.js успешно пропатчен');
  }

  // 5. updater.js: отключение фонового автообновления
  const updaterPath = path.join(extractedDir, 'dist/updater.js');
  if (fs.existsSync(updaterPath)) {
    let upd = fs.readFileSync(updaterPath, 'utf8');
    const updFn = 'function checkForUpdates(isManual = false) {';
    if (upd.includes(updFn) && !upd.includes('if (!isManual) return;')) {
      upd = upd.replace(updFn, 'function checkForUpdates(isManual = false) {\n    if (!isManual) return;');
      fs.writeFileSync(updaterPath, upd, 'utf8');
      console.log('[+] dist/updater.js успешно пропатчен');
    }
  }

  // 6. loadingOverlay.js: экран предзагрузки
  const overlayPath = path.join(extractedDir, 'dist/loadingOverlay.js');
  if (fs.existsSync(overlayPath)) {
    let overlay = fs.readFileSync(overlayPath, 'utf8');
    overlay = overlay.replace('Loading Antigravity...', 'Загрузка Antigravity...');
    fs.writeFileSync(overlayPath, overlay, 'utf8');
    console.log('[+] dist/loadingOverlay.js успешно пропатчен');
  }

  // 7. wizardHtml.js: мастер первоначальной настройки
  const wizPath = path.join(extractedDir, 'dist/ideInstall/wizardHtml.js');
  if (fs.existsSync(wizPath)) {
    let wiz = fs.readFileSync(wizPath, 'utf8');
    wiz = wiz.replace('Install Antigravity', 'Установка Antigravity');
    wiz = wiz.replace('Installing...', 'Установка...');
    wiz = wiz.replace('Installation complete', 'Установка завершена');
    fs.writeFileSync(wizPath, wiz, 'utf8');
    console.log('[+] dist/ideInstall/wizardHtml.js успешно пропатчен');
  }

  console.log('[✓] Все патчи для Google Antigravity 2.0 успешно применены!');
}

if (require.main === module) {
  const targetDir = process.argv[2];
  if (!targetDir) {
    console.log('Использование: node patch.js <путь_к_распакованному_app_asar>');
    process.exit(1);
  }
  patchExtractedAsar(targetDir);
}

module.exports = { patchExtractedAsar };
