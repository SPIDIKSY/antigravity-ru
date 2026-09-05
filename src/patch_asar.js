const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/vladv/.gemini/antigravity/scratch/stage_main/extracted';

// 1. languageServer.js: redirect web_bundle to web_bundle_ru
const lsPath = path.join(baseDir, 'dist/languageServer.js');
let ls = fs.readFileSync(lsPath, 'utf8');
const lsTarget = "'--enable_sidecars',";
const lsRepl = `'--enable_sidecars',
        ];
        const customWebBundlePath = electron_1.app.isPackaged
            ? path_1.default.join(process.resourcesPath, 'web_bundle_ru')
            : path_1.default.join(__dirname, '..', 'resources', 'web_bundle_ru');
        if (fs.existsSync(customWebBundlePath)) {
            args.push(\`--web_bundle_path=\${customWebBundlePath}\`);
        }
        return [`;

// Find '--enable_sidecars' and the closing ];
const idx = ls.indexOf("'--enable_sidecars',");
if (idx !== -1) {
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
    console.log('[OK] languageServer.js patched');
  }
}

// 2. menu.js: recursive menu translation
const menuPath = path.join(baseDir, 'dist/menu.js');
let menu = fs.readFileSync(menuPath, 'utf8');
menu = menu.replace("label: 'New Window'", "label: 'Новое окно'");
menu = menu.replace("label: 'Docs'", "label: 'Документация'");

const menuTarget = `    hideDevTools(menu);
    // Re-apply the menu so the change takes effect.
    electron_1.Menu.setApplicationMenu(menu);`;

const menuRepl = `    hideDevTools(menu);
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
    translateMenuItems(menu.items);
    electron_1.Menu.setApplicationMenu(menu);`;

if (menu.indexOf('hideDevTools(menu);') !== -1) {
  const hIdx = menu.indexOf('hideDevTools(menu);');
  const setIdx = menu.indexOf('electron_1.Menu.setApplicationMenu(menu);', hIdx);
  if (setIdx !== -1) {
    menu = menu.slice(0, hIdx) + menuRepl + menu.slice(setIdx + 'electron_1.Menu.setApplicationMenu(menu);'.length);
    fs.writeFileSync(menuPath, menu, 'utf8');
    console.log('[OK] menu.js patched');
  }
}

// 3. tray.js: translate tray strings
const trayPath = path.join(baseDir, 'dist/tray.js');
let tray = fs.readFileSync(trayPath, 'utf8');
const trayTarget = "' running'";
if (tray.includes(trayTarget)) {
  const lineStart = tray.lastIndexOf('(count > 0', tray.indexOf(trayTarget));
  const lineEnd = tray.indexOf("' running'", lineStart) + "' running'".length;
  if (lineStart !== -1 && lineEnd !== -1) {
    tray = tray.slice(0, lineStart) + "(count > 0 ? `Запущено агентов: ${count}` : 'Нет запущенных агентов')" + tray.slice(lineEnd);
    fs.writeFileSync(trayPath, tray, 'utf8');
    console.log('[OK] tray.js patched');
  }
}

// 4. main.js: translate exit dialogs (WITHOUT changing appName or userData!)
const mainPath = path.join(baseDir, 'dist/main.js');
let main = fs.readFileSync(mainPath, 'utf8');
main = main.replace("label: 'No agents running'", "label: 'Нет запущенных агентов'");
main = main.replace("label: `Open ${electron_1.app.getName()}`", "label: `Открыть ${electron_1.app.getName()}`");
main = main.replace("label: 'Quit'", "label: 'Выход'");
main = main.replace("buttons: ['Cancel', 'Quit']", "buttons: ['Отмена', 'Выход']");
main = main.replace("title: 'Confirm Quit'", "title: 'Подтверждение выхода'");
main = main.replace("message: 'Are you sure you want to quit?'", "message: 'Вы действительно хотите выйти?'");
main = main.replace("detail: 'All running agents will be stopped.'", "detail: 'Все запущенные агенты будут остановлены.'");
fs.writeFileSync(mainPath, main, 'utf8');
console.log('[OK] main.js patched');

// 5. updater.js: disable automatic update checks
const updaterPath = path.join(baseDir, 'dist/updater.js');
let upd = fs.readFileSync(updaterPath, 'utf8');
const updIdx = upd.indexOf('function checkForUpdates(isManual = false) {');
if (updIdx !== -1) {
  upd = upd.slice(0, updIdx) + 'function checkForUpdates(isManual = false) {\n    if (!isManual) return;\n' + upd.slice(updIdx + 'function checkForUpdates(isManual = false) {'.length);
  fs.writeFileSync(updaterPath, upd, 'utf8');
  console.log('[OK] updater.js patched');
}

// 6. wizardHtml.js: translate installer wizard
const wizPath = path.join(baseDir, 'dist/ideInstall/wizardHtml.js');
if (fs.existsSync(wizPath)) {
  let wiz = fs.readFileSync(wizPath, 'utf8');
  wiz = wiz.replace('Install Antigravity', 'Установка Antigravity');
  wiz = wiz.replace('Installing...', 'Установка...');
  wiz = wiz.replace('Installation complete', 'Установка завершена');
  fs.writeFileSync(wizPath, wiz, 'utf8');
  console.log('[OK] wizardHtml.js patched');
}

console.log('All patches for MAIN app applied cleanly!');
