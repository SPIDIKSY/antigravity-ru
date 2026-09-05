const fs = require('fs');

const baseScript = fs.readFileSync('C:/Users/vladv/.gemini/antigravity/scratch/build_comprehensive_i18n.js', 'utf8');

// Extract base dictionary
const baseDictMatch = baseScript.match(/const DICTIONARY = (\{[\s\S]*?\n\};)/);
let baseDict = {};
if (baseDictMatch) {
  baseDict = eval('(' + baseDictMatch[1].slice(0, -1) + ')');
}

const NEW_ENTRIES = {
  // === КВОТА И ИСПОЛЬЗОВАНИЕ МОДЕЛЕЙ (MODELS & USAGE) ===
  "Models & Usage": "Модели и использование",
  "Manage your model quota and credits.": "Управление квотой моделей и кредитами.",
  "Your Plan:": "Ваш тариф:",
  "Your Plan: Google AI Pro": "Ваш тариф: Google AI Pro",
  "You can upgrade to a Google AI Ultra plan to receive higher rate limits.": "Вы можете перейти на тариф Google AI Ultra для получения более высоких лимитов.",
  "Upgrade": "Улучшить тариф",
  "Model Credits": "Кредиты на модели",
  "Enable AI Credit Overages": "Разрешить перерасход кредитов AI",
  "Gemini Models": "Модели Gemini",
  "Claude and GPT models": "Модели Claude и GPT",
  "Weekly Limit Remaining": "Остаток недельного лимита",
  "Five Hour Limit Remaining": "Остаток лимита на 5 часов",
  "No quota information available.": "Информация о квоте недоступна.",
  "Refresh quota and credits data": "Обновить данные о квоте и кредитах",

  // === ВЫПОЛНЕНИЕ И НАСТРОЙКИ АГЕНТА (GENERAL / EXECUTION) ===
  "Execution": "Выполнение",
  "Queue": "В очередь",
  "Send Immediately": "Отправлять сразу",
  "Keyboard shortcuts": "Горячие клавиши",
  "Agent Settings": "Настройки агента",
  "Security Preset": "Предустановка безопасности",
  "Choose a predefined security preset for the agent. This controls terminal auto-execution policy, and file access policy.": "Выберите готовую предустановку безопасности для агента. Это определяет политику автоматического выполнения команд терминала и доступа к файлам.",
  "Turbo Mode": "Режим Турбо",
  "Turbo": "Турбо",
  "Learn more about Turbo mode": "Подробнее о режиме Турбо",
  "Agent Behavior": "Поведение агента",
  "Artifact Review Policy": "Политика проверки артефактов",
  "Specifies Agent's behavior when asking for review on artifacts, which are documents it creates to enable a richer conversation experience.": "Определяет поведение агента при запросе проверки артефактов.",
  "File Permissions": "Разрешения для файлов",
  "File Access Rules": "Правила доступа к файлам",
  "Configure allowed and denied paths for file reads and writes.": "Настройка разрешенных и запрещенных путей для чтения и записи файлов.",
  "Network Permissions": "Сетевые разрешения",
  "Network Access Rules": "Правила сетевого доступа",
  "Configure allowed and denied URLs for reading.": "Настройка разрешенных и запрещенных URL для чтения.",

  // === РАЗРЕШЕНИЯ ТЕРМИНАЛА И ИНСТРУМЕНТОВ (TERMINAL & TOOLING) ===
  "Terminal & Tooling Permissions": "Разрешения терминала и инструментов",
  "Terminal Commands": "Команды терминала",
  "Configure allowed terminal commands.": "Настройка разрешенных команд терминала.",
  "Commands Outside Sandbox": "Команды вне песочницы",
  "Configure allowed commands outside the sandbox.": "Настройка разрешенных команд вне песочницы.",
  "MCP Tools": "Инструменты MCP",
  "Configure external tools via Model Context Protocol.": "Настройка внешних инструментов через Model Context Protocol (MCP).",
  "Allow/deny specific terminal commands.": "Разрешить или запретить конкретные команды терминала.",
  "Allow/deny agent command execution outside the sandbox.": "Разрешить или запретить выполнение команд агента вне песочницы.",
  "External tools the agent can call via Model Context Protocol.": "Внешние инструменты, которые агент может вызывать через MCP.",
  "Allow/deny agent read access to specific files or directories.": "Разрешить или запретить чтение указанных файлов или папок.",
  "Allow/deny agent write access to specific files or directories.": "Разрешить или запретить запись в указанные файлы или папки.",
  "Allow/deny agent read access to specific URLs or domains.": "Разрешить или запретить чтение указанных URL или доменов.",
  "Allow/deny agent browser actuation access to specific URLs.": "Разрешить или запретить управление браузером на указанных URL.",

  // === ВНЕШНИЙ ВИД И ЦВЕТОВЫЕ СХЕМЫ (APPEARANCE) ===
  "Chat Settings": "Настройки чата",
  "Default": "По умолчанию",
  "Narrow": "Узкая",
  "Wide": "Широкая",
  "Theme": "Тема",
  "Light Theme": "Светлая тема",
  "Dark Theme": "Тёмная тема",
  "Preset": "Предустановка",
  "Default Light": "Стандартная светлая",
  "Default Dark": "Стандартная тёмная",
  "Background": "Цвет фона",
  "Foreground": "Цвет текста",
  // === ПРЕДУСТАНОВКИ БЕЗОПАСНОСТИ (SECURITY PRESETS & PERMISSIONS) ===
  "Requires manual review for all terminal commands and file accesses outside of the working folders.": "Запрос подтверждения для всех команд и доступа к файлам вне рабочих папок.",
  "Full machine": "Полный доступ к системе",
  "Machine": "Система",
  "All terminal commands require review. The agent can read or write to any file in the machine.": "Все команды требуют подтверждения. Чтение и запись любых файлов на компьютере.",
  "Turbo mode": "Режим Турбо",
  "Disables all safety barriers for maximal iteration velocity.": "Отключает барьеры безопасности для максимальной скорости работы.",
  "Custom": "Пользовательский",
  "Manually customize individual settings.": "Ручная настройка отдельных параметров.",
  "Inherit General": "Использовать общие",
  "Inherits your General settings when working in this project.": "Использовать общие настройки при работе в этом проекте.",
  "Useful for typical development with an emphasis on security. It prioritizes safety over speed by requiring manual approval for all terminal commands and files outside the project directory.": "Оптимально для стандартной разработки. Приоритет безопасности: требует подтверждения для всех команд терминала и файлов вне каталога проекта.",
  "Useful for tasks that require file access across your full machine. The agent has full read and write access to all local files, but all proposed terminal commands require manual review and approval before running.": "Для задач с доступом ко всем файлам системы. Полный доступ на чтение/запись файлов, команды терминала требуют подтверждения.",
  "A high-risk mode that disables all safety barriers. The agent operates with full system access, auto-executes all terminal commands, and reads or writes to all local files without review prompts.": "Режим повышенного риска без ограничений. Агент выполняет команды терминала и работает с файлами без запросов подтверждения.",

  // === НАСТРОЙКИ КАСТОМИЗАЦИИ И РАСХОД ТОКЕНОВ (CUSTOMIZATIONS & TOKEN USAGE) ===
  "Configure default behaviors, skills, and MCP servers.": "Настройка поведения по умолчанию, навыков и серверов MCP.",
  "Token Usage": "Использование токенов",
  "The breakdown below shows token usage from customizations like skills, rules, and MCP. If the budget is exceeded, large customizations will be truncated automatically.": "Расход токенов на настройки (навыки, правила, MCP). При превышении лимита крупные элементы автоматически усекаются.",
  "% of the customization budget is available.": "% бюджета настроек доступно.",
  "Customization token budget exceeded. Large customizations will be truncated.": "Лимит токенов на настройки превышен. Крупные элементы будут усечены.",
  "There are no customizations enabled.": "Настройки не включены.",
  "Loading token usage...": "Загрузка расхода токенов...",
  "Rules": "Правила",
  "Skills": "Навыки",
  "Mcp Tools": "Инструменты MCP",
  "System Prompt": "Системный промпт",
  "tokens)": "токенов)",
  "tokens": "токенов",
  "token": "токен",
  "Hide breakdown": "Скрыть детали",
  "Default Customizations": "Настройки по умолчанию",
  "Personal Customizations": "Персональные настройки",
  "Include Jetski Default Customizations": "Включить стандартные настройки",
  "When enabled, the agent will include default customizations, including default skills.": "При включении агент будет использовать стандартные настройки и навыки.",
  "Enable Personal Customizations": "Включить персональные настройки",
  "Layer your personal customizations (skills, rules, etc.) from your config on top of the active profile.": "Применять персональные настройки (навыки, правила и др.) поверх активного профиля.",
  "Plugins": "Плагины",
  "Build With Google Plugins": "Плагины Build With Google",
  "Browse and enable plugins from the Build With Google catalog.": "Просмотр и включение плагинов из каталога Build With Google.",
  "Customize": "Настроить",
  "Hooks": "Хуки",
  "Manage Hooks": "Управление хуками",
  "Configure hooks that run on agent lifecycle events.": "Настройка хуков для событий жизненного цикла агента.",
  "Search for MCP servers to add to your configuration": "Поиск серверов MCP для добавления в конфигурацию",
  "MCP Install Error:": "Ошибка установки MCP:",
  "Skills Configuration Error:": "Ошибка конфигурации навыков:",
  "MCP Configuration Error:": "Ошибка конфигурации MCP:",
  "Clear search": "Очистить поиск",
  "Customize Global Skills": "Настроить общие навыки",
  "Custom Agents": "Пользовательские агенты",
  "MCP Servers": "Серверы MCP",
  "Installed Skills": "Установленные навыки",
  "Installed MCP Servers": "Установленные серверы MCP",
  "Add MCP Servers": "Добавить серверы MCP",
  "Manage Skills": "Управление навыками",

  // === БРАУЗЕР (BROWSER SETTINGS & ACTUATION) ===
  "Browser Settings": "Настройки браузера",
  "Configure the browser subagent. It requires": "Настройка субагента браузера. Требуется ",
  "to be installed.": "установленный в системе.",
  "The browser subagent can be invoked by typing /browser in the conversation input box.": "Субагента браузера можно вызвать командой /browser в поле ввода.",
  "Actuation Permissions": "Разрешения на управление",
  "Configure allowed and denied URLs for browser actuation.": "Настройка разрешенных и запрещенных URL для управления браузером.",
  "Browser Actuation Rules": "Правила управления браузером",
  "Browser Actuation Permissions": "Разрешения управления браузером",
  "Feature Disabled": "Функция отключена",
  "Access to the browser agent tools is blocked by your organization's admin controls policy.": "Доступ к инструментам браузера заблокирован политикой вашей организации.",
  "The browser subagent has been disabled by your administrator.": "Субагент браузера отключен вашим администратором.",
  "Organization Allowed Domains (Read-Only)": "Разрешенные домены организации (только чтение)",
  "Execute URLs": "Выполнение URL",
  "Allow/deny agent browser actuation access to specific URLs.": "Разрешить или запретить управление браузером на указанных URL.",
  "Controls whether the agent can run custom JavaScript to automate complex browser actions.": "Разрешить агенту выполнять JavaScript для сложных действий в браузере.",
  "Path to the Chrome/Chromium executable. Leave empty for auto-detection.": "Путь к исполняемому файлу Chrome/Chromium. Оставьте пустым для автоопределения.",
  "Custom path for the browser user profile directory. Leave empty for default (~/.gemini/antigravity-browser-profile).": "Пользовательский путь к профилю браузера. По умолчанию (~/.gemini/antigravity-browser-profile).",
  "Port number for Chrome DevTools Protocol remote debugging. Leave empty for default (9222).": "Порт для удаленной отладки Chrome DevTools Protocol. По умолчанию (9222).",
  "URLs the agent can actuate on in this workspace.": "URL, доступные для управления в этой рабочей области.",
  "URLs the agent can actuate on using the browser.": "URL для управления через браузер.",

  // === ДОПОЛНИТЕЛЬНЫЕ НАСТРОЙКИ И ОПИСАНИЯ ===
  "Inline Actions": "Быстрые действия",
  "Access grants": "Предоставление доступа",
  "Command and file access granted to the automation agents.": "Доступ к командам и файлам для агентов автоматизации.",
  "Enable Remote Control": "Включить Remote Control",
  "Work with local agents from another device.": "Работа с локальными агентами с других устройств.",
  "Override feature environment": "Переопределить окружение функций",
  "Operating System": "Операционная система",
  "Simulate running on a different OS.": "Симуляция работы в другой ОС.",
  "Host Environment": "Окружение хоста",
  "Simulate a different host (Electron, desktop or mobile Web, Extension, or remote control).": "Симуляция другого хоста (Electron, Web, расширение, Remote Control).",
  "User Type": "Тип пользователя",
  "Simulate a different user cohort (Google, External, Enterprise).": "Симуляция группы пользователей (Google, Внешние, Enterprise).",
  "Outside of folders file access policy": "Доступ к файлам вне рабочих папок",
  "Configures how the agent tries to access files outside of its working folders.": "Настройка доступа агента к файлам вне его рабочих папок.",
  "Terminal Command Auto Execution": "Автовыполнение команд терминала",
  "Controls whether terminal commands require your approval before running.": "Требуется ли ваше подтверждение перед выполнением команд терминала.",
  "Enable Sandbox Mode (Preview)": "Включить режим песочницы (предпросмотр)",
  "Restricts agent tools to a secure, isolated local sandbox.": "Ограничивает инструменты агента безопасной локальной песочницей.",
  "Command Setup Script": "Скрипт подготовки команд",
  "A shell setup script run before every command the agent executes in this project. Overrides the global script.": "Скрипт оболочки, выполняемый перед каждой командой в проекте. Переопределяет общий скрипт.",
  "A shell setup script run before every command the agent executes.": "Скрипт оболочки, выполняемый перед каждой командой агента.",
  "Run terminal commands with sandbox restrictions.": "Выполнять команды терминала с ограничениями песочницы.",
  "Use the IDE's shell integration to detect and report terminal command execution. When disabled, the agent uses its own shell. Restart the application for this to take effect.": "Интеграция с оболочкой IDE для отслеживания команд. При отключении используется встроенная оболочка агента. Требуется перезапуск.",
  "Play a sound when the agent finishes generating a response.": "Звуковой сигнал при завершении генерации ответа агентом.",
  "Show browser notifications when your action is needed or execution finishes.": "Уведомления браузера при необходимости действий или завершении выполнения.",
  "Automatically expand the Changes Overview toolbar when the agent finishes generating a response.": "Автоматически раскрывать панель изменений при завершении ответа.",
  "Open files in the background if the agent creates or edits them": "Открывать созданные или измененные файлы в фоне",
  "Open files in the background if Agent creates or edits them": "Открывать созданные или измененные файлы в фоне",
  "Open the agent panel on window reload": "Открывать панель агента при перезагрузке окна",
  "Open Agent panel on window reload": "Открывать панель агента при перезагрузке окна",
  "Display and preserve intermediate thinking steps.": "Отображать и сохранять промежуточные шаги размышлений.",
  "Configure the maximum width of the conversation panel.": "Настройка максимальной ширины панели диалога.",
  "Show suggestions when typing in the editor": "Показывать подсказки при вводе в редакторе",
  "Predict the location of your next edit and navigate you there with a tab keypress.": "Предсказывать место следующей правки и переходить по клавише Tab.",
  "Quickly add and update imports with a tab keypress.": "Быстро добавлять и обновлять импорты по клавише Tab.",
  "Set the speed of tab suggestions": "Скорость появления подсказок Tab",
  "Highlight newly inserted text after accepting a Tab completion.": "Подсветка вставленного текста после применения автодополнения Tab.",
  "Allow Tab to view and edit the files in .gitignore. Use with caution if your .gitignore lists files containing credentials, secrets, or other sensitive information.": "Разрешить Tab просматривать файлы из .gitignore. Используйте осторожно, если там содержатся конфиденциальные данные.",
  "Prevent the computer from sleeping while the app is running.": "Запретить спящий режим компьютера при работе приложения.",
  "Keep the app accessible from the menu bar and running in the background when all windows are closed.": "Оставлять приложение в системном трее и фоне при закрытии всех окон.",
  "Automatically prompt you to restart the app when a new update is available. When disabled, you can check for updates manually from the app menu.": "Предлагать перезапуск при наличии обновления. При отключении проверка вручную через меню.",
  "Manage your plan, credentials, and general preferences.": "Управление тарифом, учетными данными и общими настройками.",
  "A label for this computer when you connect from another device. Changing it reconnects.": "Имя этого компьютера при подключении с другого устройства.",
  "Continue your work from another device with Remote Control. Scan the QR code or open the link below.": "Продолжите работу с другого устройства через Remote Control. Отсканируйте QR-код или откройте ссылку.",
  "Configure the agent's visual theme and display preferences.": "Настройка визуальной темы и отображения агента.",
  "Manage how Best of N sets up the workspaces its arms run in.": "Настройка рабочих пространств для режима Best of N.",
  "Paths the agent can read inside this workspace.": "Пути, доступные агенту для чтения в этой рабочей области.",
  "Paths the agent can modify inside this workspace.": "Пути, доступные агенту для изменения в этой рабочей области.",
  "Terminal commands the agent can execute in this workspace.": "Команды терминала, разрешенные в этой рабочей области.",
  "URLs the agent can read or open in this workspace.": "URL, доступные для чтения или открытия в этой рабочей области.",
  "Paths the agent can read.": "Пути, доступные для чтения.",
  "Paths the agent can modify.": "Пути, доступные для изменения.",
  "Terminal commands the agent can execute.": "Команды терминала для выполнения.",
  "URLs the agent can read or open in the browser.": "URL для чтения или открытия в браузере.",
  "When enabled, sandboxed commands are allowed to make network requests.": "Разрешить сетевые запросы для изолированных команд.",
  "When enabled, Agent will use IDE's shell integration to detect and report terminal command execution.": "Использовать интеграцию с оболочкой IDE для отслеживания выполнения команд.",
  "Allows the agent to access files outside of your current workspace.": "Разрешить агенту доступ к файлам вне текущей рабочей области.",
  "When enabled, Agent is given awareness of lint errors created by its edits and may fix them without explicit user prompting.": "Агент будет отслеживать ошибки линтера и исправлять их автоматически.",
  "When enabled, the agent will be able to access past conversations to inform its responses.": "Агент сможет обращаться к прошлым диалогам для формирования ответов.",
  "When enabled, the agent will be able to access its knowledge base to inform its responses and automatically generate knowledge items in the background.": "Агент сможет использовать базу знаний и дополнять её в фоне.",
  "When enabled, 'Explain and Fix' actions will continue in the current conversation instead of starting a new one.": "Действия «Объяснить и исправить» продолжат текущий диалог вместо создания нового.",
  "When enabled, Antigravity will play a sound when Agent finishes generating a response.": "Звуковой сигнал при завершении генерации ответа.",
  "When enabled, the Changes Overview toolbar will automatically expand when Agent finishes generating a response.": "Автоматически раскрывать панель изменений при завершении ответа.",
  "Accept Step": "Принять шаг",
  "Reject Step": "Отклонить шаг",
  "Open Launchpad": "Открыть Launchpad",
  "Split Conversation Vertically": "Разделить диалог по вертикали",
  "Split Conversation Horizontally": "Разделить диалог по горизонтали",
  "Go Back in Pane": "Назад в панели",
  "Go Forward in Pane": "Вперед в панели",
  "Complete Onboarding Step": "Завершить шаг настройки",
  "Select Next Conversation": "Следующий диалог",
  "Select Previous Conversation": "Предыдущий диалог",
  "Restart Main Language Server": "Перезапустить языковой сервер",
  "Previous Aux Pane Tab": "Предыдущая вкладка",
  "Next Aux Pane Tab": "Следующая вкладка",
  "Open in Code Search": "Открыть в поиске кода",
  "Add inline comment": "Добавить комментарий",
  "Updater": "Обновление",
  "Experimental Features": "Экспериментальные функции",
  "Workspace Settings": "Настройки рабочей области",
  "Danger Zone": "Опасная зона",
  "Standalone Terminals": "Отдельные терминалы",
  "Terminals": "Терминалы",
  "Folders": "Папки",
  "Artifacts": "Артефакты",
  "Background Tasks": "Фоновые задачи",
  "Files Changed": "Измененные файлы",
  "Subagents": "Субагенты",
  "Uploads": "Загрузки",
  "New Worktree": "Новое рабочее дерево",
  "New worktree": "Новое рабочее дерево",
  "Clone current workspace into a new independent workspace": "Клонировать текущую рабочую область в новую независимую",
  "Run in your current workspace": "Запуск в текущей рабочей области",
  "Run in a new worktree": "Запуск в новом рабочем дереве",
  "Ask a quick question without interrupting the main conversation.": "Задать быстрый вопрос без прерывания основного диалога.",
  "Meta-agent for managing conversations": "Мета-агент для управления диалогами",
  "Team of subagents to do long running work": "Команда субагентов для длительных задач",
  "Advanced Settings": "Дополнительные настройки",
  "Best of N": "Best of N",
  "Workspace File Access": "Доступ к файлам рабочей области",
  "Workspace Command Access": "Доступ к командам рабочей области",
  "Workspace Web Access": "Веб-доступ рабочей области",

  // === ПОДПИСИ, ПОДСКАЗКИ И ПЛЕЙСХОЛДЕРЫ (PLACEHOLDERS & SIGNATURES) ===
  "Search customizations...": "Поиск настроек...",
  "Search flags": "Поиск флагов",
  "Search all convos...": "Поиск по всем диалогам...",
  "Enter file or directory path...": "Введите путь к файлу или папке...",
  "Enter tool name or server...": "Введите имя инструмента или сервера...",
  "Enter URL pattern...": "Введите шаблон URL...",
  "Enter directory path...": "Введите путь к папке...",
  "Paste auth code": "Вставьте код авторизации",
  "Please list the steps to reproduce the issue": "Опишите шаги для воспроизведения проблемы",
  "Type absolute path or navigate folders...": "Введите путь или выберите папку...",
  "New hook name": "Имя нового хука",
  "Add recent remote workspace": "Добавить недавнюю рабочую область",
  "Search MCP servers by name": "Поиск серверов MCP по имени",
  "Select branch": "Выберите ветку",
  "Enter project name...": "Введите имя проекта...",
  "Prompt to execute on schedule...": "Промпт для выполнения по расписанию...",
  "Search steps...": "Поиск шагов...",
  "Edit comment": "Редактировать комментарий",
  "Delete comment": "Удалить комментарий",
  "Describe the plugin you want and let the agent build it": "Опишите нужный плагин, и агент создаст его",
  "Unstage change": "Убрать из индекса",
  "Stage change": "Индексировать изменение",
  "Discard unstaged changes": "Отменить неиндексированные изменения",
  "Send Now": "Отправить сейчас",
  "More Actions": "Другие действия",
  "More actions": "Другие действия",
  "Command Center": "Командный центр",
  "Rename": "Переименовать",
  "Open in Notebook View": "Открыть в виде блокнота",

  // === ВКЛАДКА АККАУНТ И УСЛОВИЯ (ACCOUNT & TOS) ===
  "Enable Telemetry": "Телеметрия",
  "Marketing Emails": "Рассылка новостей",
  "Sign Out": "Выйти",
  "Signing Out...": "Выход...",
  "Sign In": "Войти",
  "Not Signed In": "Вход не выполнен",
  "By using this app, you agree to its": "Используя приложение, вы принимаете",
  "Terms of Service": "Условия использования",
  "Privacy Notice": "Уведомление о конфиденциальности",
  "Google Privacy Policy": "Политика конфиденциальности Google",
  "Email": "Электронная почта",
  "You cannot sign out from Remote Control. Please sign out on your local application.": "Нельзя выйти через Remote Control. Выйдите в локальном приложении."
};

// Merge new entries into baseDict
const mergedDict = Object.assign({}, baseDict, NEW_ENTRIES);
console.log('Total merged dictionary entries:', Object.keys(mergedDict).length);

const fullCode = `/**
 * Antigravity 2.0 Comprehensive Russian Localization Engine
 * Автоматический перевод пользовательского интерфейса на русский язык.
 */
(function () {
  'use strict';

  const DICT = ${JSON.stringify(mergedDict, null, 2)};

  function formatTime(str) {
    if (!str) return '';
    return str
      .replace(/(\\d+)\\s+days?/gi, '$1 дн.')
      .replace(/(\\d+)\\s+hours?/gi, '$1 ч.')
      .replace(/(\\d+)\\s+minutes?/gi, '$1 мин.')
      .replace(/(\\d+)\\s+seconds?/gi, '$1 сек.');
  }

  const RULES = [
    {
      regex: /^Select (.*) Theme$/i,
      replace: function (m) { return "Выберите тему Antigravity"; }
    },
    {
      regex: /^Manage (.*) app settings\\.?$/i,
      replace: function (m) { return "Управление настройками приложения Antigravity."; }
    },
    {
      regex: /^Your Plan:\\s*(.*)$/i,
      replace: function (m) { return "Ваш тариф: " + m[1]; }
    },
    {
      regex: /^When toggled on, .* will use your AI credits to fulfill model requests once you're out of model quota\\..* will always use your model quota first before using AI credits\\.$/i,
      replace: function (m) {
        return "При включении приложение будет использовать кредиты AI для выполнения запросов при исчерпании квоты моделей. В первую очередь всегда расходуется квота моделей.";
      }
    },
    {
      regex: /^Available AI Credits:\\s*(.*)$/i,
      replace: function (m) { return "Доступно кредитов AI: " + m[1]; }
    },
    {
      regex: /^You have used some of your weekly limit, it will fully refresh in (.*)$/i,
      replace: function (m) {
        return "Часть недельного лимита израсходована, полное обновление через " + formatTime(m[1]);
      }
    },
    {
      regex: /^You have used some of your 5-hour limit, it will fully refresh in (.*)$/i,
      replace: function (m) {
        return "Часть 5-часового лимита израсходована, полное обновление через " + formatTime(m[1]);
      }
    },
    {
      regex: /^You have used some of your weekly \\.\\.\\.$/i,
      replace: function (m) { return "Часть недельного лимита израсходована..."; }
    },
    {
      regex: /^You have used some of your 5-hour \\.\\.\\.$/i,
      replace: function (m) { return "Часть 5-часового лимита израсходована..."; }
    },
    {
      regex: /^Learn more about (.*)$/i,
      replace: function (m) {
        const item = m[1].trim();
        if (item.toLowerCase() === 'turbo mode') return "Подробнее о режиме Турбо";
        return "Подробнее о " + item;
      }
    },
    {
      regex: /^Choose a permission preset\\..*$/i,
      replace: function (m) {
        return "Выберите готовую предустановку безопасности для агента.";
      }
    },
    {
      regex: /^Show\\s+(\\d+)\\s+breakdowns?$/i,
      replace: function (m) { return "Подробнее (" + m[1] + ")"; }
    },
    {
      regex: /^No MCP servers found for "(.*)"$/i,
      replace: function (m) { return 'Не найдены серверы MCP по запросу "' + m[1] + '"'; }
    },
    {
      regex: /^See all \\((\\d+)\\)$/i,
      replace: function (m) { return "Показать все (" + m[1] + ")"; }
    },
    {
      regex: /^When toggled on, .* collects usage data to help Google enhance performance and features\\.?$/i,
      replace: function (m) {
        return "При включении данные об использовании отправляются в Google для улучшения работы и функций.";
      }
    },
    {
      regex: /^Receive product updates, tips, and promotions from Google .* via email\\.?$/i,
      replace: function (m) {
        return "Получать обновления, советы и акции от Google по электронной почте.";
      }
    },
    {
      regex: /^Sign in to use (.*)!$/i,
      replace: function (m) {
        return "Войдите, чтобы использовать " + m[1] + "!";
      }
    },
    {
      regex: /^Show all \\((\\d+)\\)$/i,
      replace: function (m) { return "Показать все (" + m[1] + ")"; }
    },
    {
      regex: /^(\\d+)\\s+conversations?$/i,
      replace: function (m) { return m[1] + " диалог(ов)"; }
    },
    {
      regex: /^(\\d+)\\s+projects?$/i,
      replace: function (m) { return m[1] + " проект(ов)"; }
    },
    {
      regex: /^(\\d+)\\s+tasks?$/i,
      replace: function (m) { return m[1] + " задач(и)"; }
    },
    {
      regex: /^(\\d+)\\s+files? changed$/i,
      replace: function (m) { return "Изменено файлов: " + m[1]; }
    },
    {
      regex: /^(\\d+)\\s+agents? running$/i,
      replace: function (m) { return "Запущено агентов: " + m[1]; }
    },
    {
      regex: /^(\\d+)\\s+of\\s+(\\d+)$/i,
      replace: function (m) { return m[1] + " из " + m[2]; }
    },
    {
      regex: /^(\\d+)\\s+items?$/i,
      replace: function (m) { return m[1] + " эл."; }
    }
  ];

  const IGNORE_TAGS = new Set([
    'SCRIPT', 'STYLE', 'CODE', 'PRE', 'TEXTAREA', 'INPUT'
  ]);

  function isIgnored(node) {
    if (!node) return true;
    let el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    while (el) {
      if (IGNORE_TAGS.has(el.tagName)) return true;
      if (
        el.classList &&
        (el.classList.contains('token') ||
         el.classList.contains('prism') ||
         el.classList.contains('monaco-editor') ||
         el.classList.contains('cm-editor') ||
         el.classList.contains('xterm'))
      ) {
        return true;
      }
      if (el.getAttribute && el.getAttribute('data-notranslate') !== null) {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }

  function translateString(text) {
    if (typeof text !== 'string') return null;
    const trimmed = text.trim();
    if (!trimmed) return null;

    const startSpace = text.match(/^\\s*/)[0];
    const endSpace = text.match(/\\s*$/)[0];

    for (let i = 0; i < RULES.length; i++) {
      const match = trimmed.match(RULES[i].regex);
      if (match) {
        return startSpace + RULES[i].replace(match) + endSpace;
      }
    }

    if (DICT[trimmed]) {
      return startSpace + DICT[trimmed] + endSpace;
    }

    return null;
  }

  function translateNode(node) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {
      if (isIgnored(node)) return;
      const translated = translateString(node.nodeValue);
      if (translated && translated !== node.nodeValue) {
        node.nodeValue = translated;
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (isIgnored(node)) return;

      if (node.hasAttribute('placeholder')) {
        const trans = translateString(node.getAttribute('placeholder'));
        if (trans) node.setAttribute('placeholder', trans);
      }
      if (node.hasAttribute('title')) {
        const trans = translateString(node.getAttribute('title'));
        if (trans) node.setAttribute('title', trans);
      }
      if (node.hasAttribute('aria-label')) {
        const trans = translateString(node.getAttribute('aria-label'));
        if (trans) node.setAttribute('aria-label', trans);
      }

      for (let child = node.firstChild; child; child = child.nextSibling) {
        translateNode(child);
      }
    }
  }

  try {
    const origNodeValueDesc = Object.getOwnPropertyDescriptor(Node.prototype, 'nodeValue');
    if (origNodeValueDesc && origNodeValueDesc.set) {
      const origSet = origNodeValueDesc.set;
      Object.defineProperty(Node.prototype, 'nodeValue', {
        get: origNodeValueDesc.get,
        set: function (val) {
          if (this.nodeType === Node.TEXT_NODE && typeof val === 'string' && !isIgnored(this)) {
            const trans = translateString(val);
            if (trans) val = trans;
          }
          return origSet.call(this, val);
        },
        configurable: true,
        enumerable: true
      });
    }

    const origTextContentDesc = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent');
    if (origTextContentDesc && origTextContentDesc.set) {
      const origTextSet = origTextContentDesc.set;
      Object.defineProperty(Node.prototype, 'textContent', {
        get: origTextContentDesc.get,
        set: function (val) {
          if (typeof val === 'string' && !isIgnored(this)) {
            const trans = translateString(val);
            if (trans) val = trans;
          }
          return origTextSet.call(this, val);
        },
        configurable: true,
        enumerable: true
      });
    }
  } catch (e) {
    console.warn('[i18n-ru] Hook setup error:', e);
  }

  function startObserver() {
    const observer = new MutationObserver((mutations) => {
      for (let i = 0; i < mutations.length; i++) {
        const m = mutations[i];
        if (m.type === 'childList') {
          for (let j = 0; j < m.addedNodes.length; j++) {
            translateNode(m.addedNodes[j]);
          }
        } else if (m.type === 'characterData') {
          translateNode(m.target);
        } else if (m.type === 'attributes') {
          if (['placeholder', 'title', 'aria-label'].includes(m.attributeName)) {
            const val = m.target.getAttribute(m.attributeName);
            const trans = translateString(val);
            if (trans && trans !== val) {
              m.target.setAttribute(m.attributeName, trans);
            }
          }
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['placeholder', 'title', 'aria-label']
    });

    setInterval(() => {
      translateNode(document.body);
    }, 200);

    translateNode(document.body || document.documentElement);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserver);
  } else {
    startObserver();
  }

  console.log('[i18n-ru] Russian localization fully active with ' + Object.keys(DICT).length + ' strings');
})();
`;

const p1 = 'C:/Users/vladv/AppData/Local/Programs/antigravity_ru/resources/web_bundle_ru/i18n-ru.js';
const p2 = 'C:/Users/vladv/.gemini/antigravity_ru_backup/web_bundle_ru/i18n-ru.js';
const p3 = 'C:/Users/vladv/AppData/Local/Programs/antigravity/resources/web_bundle_ru/i18n-ru.js';

fs.writeFileSync(p1, fullCode, 'utf8');
fs.writeFileSync(p2, fullCode, 'utf8');
fs.writeFileSync(p3, fullCode, 'utf8');
console.log('Successfully deployed ultimate i18n engine with', Object.keys(mergedDict).length, 'entries!');
