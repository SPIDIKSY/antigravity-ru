/**
 * Antigravity 2.0 Comprehensive Russian Localization Engine
 * Автоматический перевод пользовательского интерфейса на русский язык.
 */
(function () {
  'use strict';

  const DICT = {
  // --- Antigravity 2.25.0 Translations & UI Updates ---
  // --- Extended 2.25.0 UI Strings (deep scan) ---
  // --- Antigravity 2.26.0 New UI Strings ---
  "Apps connected to your account": "Приложения, подключённые к аккаунту",
  "Connected apps": "Подключённые приложения",
  "Connect an account so the agent can use this app.": "Подключите аккаунт, чтобы агент мог использовать это приложение.",
  "Connected Google Drive and GitHub resources": "Подключённые ресурсы Google Диска и GitHub",
  "Loading apps...": "Загрузка приложений...",
  "No apps available.": "Нет доступных приложений.",
  "No apps connected yet. Connect one from Marketplace.": "Нет подключённых приложений. Подключите их в Маркетплейсе.",
  "No extensions available": "Нет доступных расширений",
  "No instances yet.": "Пока нет экземпляров.",
  "Currently installed": "Установлено сейчас",
  "On this computer": "На этом компьютере",
  "Plugins, skills and MCP servers installed here. They run locally.": "Установленные здесь плагины, навыки и серверы MCP. Выполняются локально.",
  "Files and resources in cloud workspaces": "Файлы и ресурсы в облачных рабочих областях",
  "Stored and mounted in your cloud environment": "Хранятся и монтируются в вашем облачном окружении",
  "Uploaded files and connected resources are mounted in your cloud environment.": "Загруженные файлы и подключённые ресурсы монтируются в вашем облачном окружении.",
  "Create a project whose conversations run remotely.": "Создать проект, диалоги которого выполняются удалённо.",
  "New Remote Project": "Новый удалённый проект",
  "Remote Control Instances": "Экземпляры удалённого управления",
  "Get started with Remote Control": "Начать работу с удалённым управлением",
  "Fork in Current Workspace": "Ответвить в текущей рабочей области",
  "Fork in New Workspace": "Ответвить в новой рабочей области",
  "Fork in Shared Workspace": "Ответвить в общей рабочей области",
  "Copy Image Address": "Скопировать адрес изображения",
  "Copy Link Address": "Скопировать адрес ссылки",
  "Copy Message": "Скопировать сообщение",
  "Open Image in New Tab": "Открыть изображение в новой вкладке",
  "Open Link in External Browser": "Открыть ссылку во внешнем браузере",
  "Open Link in New Tab": "Открыть ссылку в новой вкладке",
  "Sort and filter conversations": "Сортировка и фильтр диалогов",
  "Only Archived": "Только архивные",
  "Only Automations": "Только автоматизации",
  "Only Scheduled": "Только запланированные",
  "Cancel Questionnaire and Stop the Agent": "Отменить опрос и остановить агента",
  "Cannot revert a message sent while the agent was running": "Нельзя откатить сообщение, отправленное во время работы агента",
  "Failed to revert conversation": "Не удалось откатить диалог",
  "Toggle Status Bar": "Показать/скрыть строку состояния",
  "Search tabs, files, extensions, subagents, artifacts, tasks...": "Поиск вкладок, файлов, расширений, субагентов, артефактов, задач...",
  "Give Feedback": "Оставить отзыв",
  "Ask questions, report issues, and discuss features": "Задавайте вопросы, сообщайте об ошибках и обсуждайте функции",
  "Join the Google Chat space": "Присоединиться к пространству Google Chat",
  "Manage and delete your data anytime": "Управляйте данными и удаляйте их в любое время",
  "Google Antigravity Terms of Service": "Условия использования Google Antigravity",
  "Prohibited Use Policy": "Политика запрещённого использования",
  "Configuration parameters are required before this server can be started": "Перед запуском этого сервера необходимо указать параметры конфигурации",
  "This MCP server can no longer be configured.": "Этот сервер MCP больше нельзя настроить.",
  "Scroll turns down": "Прокрутить ответы вниз",
  "Scroll turns up": "Прокрутить ответы вверх",
  "Replace with": "Заменить на",
  "Paste new key": "Вставить новый ключ",
  "Unnamed Theme": "Безымянная тема",
  "Chief of Staff canvas": "Панель главного ассистента",
  "Connect to WSL": "Подключиться к WSL",
  "Reopen Locally": "Переоткрыть локально",
  "Authenticate": "Авторизоваться",
  "Connect": "Подключить",
  "Disconnect": "Отключить",
  "Online": "В сети",
  "Offline": "Не в сети",
  "Themes": "Темы",
  "Thumbnails": "Миниатюры",

  // --- Batch 2: buttons, dialogs, settings labels ---
  "Account connected.": "Аккаунт подключён.",
  "Authentication Required": "Требуется авторизация",
  "Authorization Required": "Требуется разрешение",
  "Business Account Sign In": "Вход с корпоративным аккаунтом",
  "Continue with Google": "Войти через Google",
  "Complete verification": "Завершить подтверждение",
  "A new version is available.": "Доступна новая версия.",
  "App update required": "Требуется обновление приложения",
  "App version": "Версия приложения",
  "Check for Updates": "Проверить обновления",
  "A group with this name already exists.": "Группа с таким именем уже существует.",
  "A project with this name already exists.": "Проект с таким именем уже существует.",
  "Advanced File Access": "Расширенный доступ к файлам",
  "Advanced Command Access": "Расширенный доступ к командам",
  "Advanced Web Access": "Расширенный доступ к сети",
  "Agent security mode": "Режим безопасности агента",
  "Agent always asks for review.": "Агент всегда запрашивает проверку.",
  "Agent will always ask to review in strict mode.": "В строгом режиме агент всегда запрашивает проверку.",
  "Ask before sensitive operations.": "Спрашивать перед чувствительными операциями.",
  "Automatically decide if commands run.": "Автоматически определять, выполнять ли команды.",
  "Automatically reproduce bugs, trace causes, test fixes.": "Автоматически воспроизводить ошибки, искать причины и проверять исправления.",
  "Always run": "Всегда выполнять",
  "All tools (*)": "Все инструменты (*)",
  "Allow sandboxed commands to make network requests.": "Разрешить сетевые запросы из изолированных команд.",
  "Allow creating issues and grant access to specific issues.": "Разрешить создание задач и доступ к конкретным задачам.",
  "Allow opening pull requests and grant access to specific PRs.": "Разрешить открытие pull request и доступ к конкретным PR.",
  "Browser actions": "Действия браузера",
  "Antigravity would like to use the browser.": "Antigravity запрашивает доступ к браузеру.",
  "Absolute path to the Chrome/Chromium executable": "Абсолютный путь к исполняемому файлу Chrome/Chromium",
  "Close (Esc)": "Закрыть (Esc)",
  "Close Other Tabs": "Закрыть другие вкладки",
  "Close Tabs to the Right": "Закрыть вкладки справа",
  "Command Palette": "Палитра команд",
  "Agent Hooks Configuration": "Настройка хуков агента",
  "Agent Script Command Configuration": "Настройка командных скриптов агента",
  "Add Hook Card": "Добавить карточку хука",
  "Conversation ID": "ID диалога",
  "Conversation Log": "Журнал диалога",
  "Click to view more": "Показать больше",
  "Active Skills": "Активные навыки",
  "Active Context Start": "Начало активного контекста",
  "Configure Branches": "Настроить ветки",
  "Configure GitHub access policies.": "Настройка политик доступа к GitHub.",
  "Change VCS in General settings, under Advanced": "Изменить VCS в Общих настройках (раздел Дополнительно)",
  "Artifact Comments": "Комментарии к артефакту",
  "Artifact Name": "Имя артефакта",
  "Artifact updated by agent": "Артефакт обновлён агентом",
  "Context Providers": "Провайдеры контекста",
  "Auto Pin": "Автозакрепление",
  "Auto (Preview)": "Авто (предпросмотр)",
  "Archived Only": "Только архивные",
  "By kind": "По типу",
  "By phase": "По фазе",
  "By step type": "По типу шага",
  "Choose Region": "Выбрать регион",
  "Choose a License": "Выбрать лицензию",
  "Choose between the Default and Project 4K experience.": "Выберите между стандартным режимом и Project 4K.",
  "Choose the experience that fits how you work.": "Выберите подходящий режим работы.",
  "Configured servers": "Настроенные серверы",
  "Cleared Count": "Очищено записей",
  "Collapse idle": "Свернуть неактивные",
  "Cancel Sending Message": "Отменить отправку сообщения",
  "Cancel Step": "Отменить шаг",
  "Configure workspace-specific permissions, resources, and customizations.": "Настройка разрешений, ресурсов и дополнений рабочей области.",
  "Configure the default width of markdown artifacts.": "Настроить ширину Markdown-артефактов по умолчанию.",
  "Commands and files these agents can use.": "Команды и файлы, доступные этим агентам.",
  "Commands the agent can run outside the sandbox in this workspace.": "Команды, разрешённые вне песочницы в этой рабочей области.",
  "Commands the agent can run outside the sandbox.": "Команды, разрешённые вне песочницы.",
  "Ask about your code or any topic, get clear answers.": "Задайте вопрос о коде или любой теме.",
  "(Optional) Tell us more or type your reason...": "(Необязательно) Расскажите подробнее или укажите причину...",
  "Agent Market Search Results": "Результаты поиска агентов",
  "AI Credits Used to Generate Response": "Использовано кредитов AI для ответа",
  "Chief of Staff Dashboard": "Панель главного ассистента",
  "Add Context": "Добавить контекст",
  "Add them to allow future interactions": "Добавьте их для дальнейшего взаимодействия",
  "Administrator access (UAC)": "Права администратора (UAC)",
  "Admin escalation": "Повышение привилегий",
  "Any error messages": "Сообщения об ошибках",
  "Any error messages seen when trying to log in": "Сообщения об ошибках при входе",
  "Any relevant information": "Любая полезная информация",
  "Attach Antigravity server logs": "Прикрепить логи сервера Antigravity",
  "Attach the trajectory ID to the feedback form": "Прикрепить ID траектории к отзыву",
  "Actual behavior": "Фактическое поведение",
  "Arguments Schema": "Схема аргументов",
  "Build with Google": "Создать с Google",
  "Console logs": "Логи консоли",
  "Console Telemetry": "Консольная телеметрия",
  "Ask the agent to diagnose and fix this server": "Попросить агента проверить и исправить этот сервер",
  "Agent can run": "Агент может выполнять",
  "Agent can": "Агент может",

  // Context menus
  "Open in new tab": "Открыть в новой вкладке",
  "Open in new Tab": "Открыть в новой вкладке",
  "Copy link": "Скопировать ссылку",
  "Copy Link": "Скопировать ссылку",
  "Copy value": "Скопировать значение",
  "Copy command": "Скопировать команду",
  "Copy error": "Скопировать ошибку",
  "View Diff": "Просмотр изменений",
  "Open File": "Открыть файл",
  "Open in Preview": "Открыть в просмотре",
  "Open in Remote Control": "Открыть в удалённом управлении",
  "Preview unavailable": "Предпросмотр недоступен",
  // Auth
  "Sign out": "Выйти из аккаунта",
  "Sign Out": "Выйти из аккаунта",
  "Sign in": "Войти в аккаунт",
  "Sign In": "Войти в аккаунт",
  "Setup required": "Требуется настройка",
  "Having trouble signing in?": "Проблемы со входом?",
  // Task management
  "Background Task": "Фоновая задача",
  "Background Task Output": "Вывод фоновой задачи",
  "Cancel Task": "Отменить задачу",
  "Queue Message": "Поставить в очередь",
  "Require Review": "Требует проверки",
  "Proceed in Sandbox": "Продолжить в песочнице",
  // Agent/permissions
  "Autonomous Mode": "Автономный режим",
  "Inherit Global": "Наследовать глобальные",
  "Permission Preset": "Набор разрешений",
  "Blocked by organization policy": "Заблокировано политикой организации",
  "Disabled by organization policy": "Отключено политикой организации",
  "Controls the actions the agent can take.": "Управление допустимыми действиями агента.",
  "Agent can scroll on browser pages to access more content.": "Агент может прокручивать страницы браузера для доступа к дополнительному содержимому.",
  "Read URLs": "Чтение URL",
  // Viewers and panels
  "File Viewer": "Просмотр файла",
  "Virtual File Viewer": "Просмотр виртуального файла",
  "Artifact Viewer": "Просмотр артефакта",
  "Browser Subagent Viewer": "Просмотр браузерного субагента",
  "Browser Task": "Задача браузера",
  "Custom View": "Настраиваемый вид",
  "Sidecar View": "Боковой вид",
  "Auxiliary Pane": "Боковая панель",
  // Conversations
  "Untitled Conversation": "Диалог без названия",
  "Copied to clipboard": "Скопировано в буфер обмена",
  "No description available.": "Описание недоступно.",
  "Submit Appeal": "Отправить апелляцию",
  "New Project": "Новый проект",
  "Canceled edit to": "Отменено редактирование:",
  "See less": "Свернуть",
  // Models
  "Auto (detected)": "Авто (определяется)",
  "Chief of Staff": "Главный ассистент",
  "Notification": "Уведомление",
  "Notifications": "Уведомления",
  "No notifications": "Нет уведомлений",
  // Status / errors
  "Request timed out": "Истекло время ожидания запроса",
  "Request aborted": "Запрос прерван",
  "Unknown Server": "Неизвестный сервер",
  "Unknown error": "Неизвестная ошибка",
  "No workspace window available": "Нет доступного окна рабочей области",
  "Failed to load plugins. Please try again.": "Не удалось загрузить плагины. Попробуйте ещё раз.",
  "Built In": "Встроенный",
  "Maximum number of attachments reached": "Достигнут максимум вложений",
  // VCS
  "Staged Changes": "Индексированные изменения",
  "Branch Changes": "Изменения ветки",
  // Google
  "Google Drive": "Google Диск",

  "Open File Search": "Поиск файлов",
  "Open file search": "Поиск файлов",
  "Previous Pane Tab": "Предыдущая вкладка",
  "Previous pane tab": "Предыдущая вкладка",
  "Next Pane Tab": "Следующая вкладка",
  "Next pane tab": "Следующая вкладка",
  "Toggle Maximize Auxiliary Pane": "Развернуть/свернуть боковую панель",
  "Toggle Overview Panel": "Показать/скрыть панель обзора",
  "Equalize Split Panes": "Выровнять разделители панелей",
  "Focus in Input Field": "Фокус в поле ввода",
  "Focus in input field": "Фокус в поле ввода",
  "Search Conversations": "Поиск диалогов",
  "Comment on Selection": "Комментировать выделенное",
  "Copy Conversation Markdown": "Скопировать диалог в Markdown",
  "Archive This Conversation": "Архивировать этот диалог",
  "Pin This Conversation": "Закрепить этот диалог",
  "Unpin This Conversation": "Открепить этот диалог",
  "Find in Conversation": "Найти в диалоге",
  "Cancel Generation": "Отменить генерацию",
  "Open Trajectory Debug View": "Открыть отладку траектории",
  "Copy Conversation ID": "Скопировать ID диалога",
  "Copy Trajectory ID": "Скопировать ID траектории",
  "Confirm Undo": "Подтверждение отмены",
  "Confirm undo": "Подтверждение отмены",
  "This undo action will not make any code changes.": "Это действие отмены не внесёт изменений в код.",
  "Confirming this undo action will make the following changes:": "Подтверждение этого действия отмены внесёт следующие изменения:",
  "Undo": "Отменить",
  "Confirm": "Подтвердить",
  "Accent": "Цвет акцента",
  "Preset": "Предустановка",
  "Default Light": "Стандартная Светлая",
  "Default Dark": "Стандартная Тёмная",
  "Atom One Light": "Atom One Светлая",
  "Atom One Dark": "Atom One Тёмная",
  "Model": "Модель",
  "View Usage": "Просмотр расхода",
  "View usage": "Просмотр расхода",
  "Unavailable": "Недоступно",
  "Remaining weekly quota": "Остаток недельного лимита",
  "Notice": "Уведомление",
  "Models within this group:": "Модели в этой группе:",
  "Gemini 4 Argon is currently available to Ultra and paid Pro plan subscribers.": "Gemini 4 Argon в настоящее время доступна только подписчикам Ultra и платного тарифа Pro.",
  "Explore the plugin marketplace": "Каталог плагинов",
  "Create a Plugin with the Agent": "Создать плагин с помощью агента",
  "Create plugin": "Создать плагин",
  "Add MCP Server": "Добавить сервер MCP",
  "Search MCP servers by name": "Поиск серверов MCP по имени",
  "Search for MCP servers to add to your configuration": "Поиск серверов MCP для добавления в конфигурацию",
  "Delete MCP Server": "Удалить сервер MCP",
  "Fix with Agent": "Исправить с агентом",
  "Plugins": "Плагины",
  "See more in Plugins": "Подробнее в Плагинах",
  "See less in Plugins": "Скрыть в Плагинах",
  "Plugin update required": "Требуется обновление плагина",
  "Unnamed MCP Server": "Безымянный сервер MCP",
  "Managed by plugin": "Управляется плагином",
  "Agent Edits": "Правки агента",
  "Custom Agents": "Пользовательские агенты",
  "MCP Servers": "Серверы MCP",
  "Agent Auto-Fix Lints": "Автоисправление ошибок линтера агентом",
  "Agent Non-Workspace File Access": "Доступ агента к файлам вне рабочей области",
  "Agent Host Address": "Адрес хоста агента",
  "Enable Sounds for Agent": "Звуковые эффекты для агента",
  "Enable Notifications for Agent": "Уведомления для агента",
  "Open Agent on Reload": "Открывать агента при перезагрузке",
  "Verbose Agent Chat": "Подробный чат агента",
  "Enable Browser Tools": "Включить инструменты браузера",
  "Update Available": "Доступно обновление",
  "Downloading Update": "Загрузка обновления",
  "Install Update": "Установить обновление",
  "Installing Update": "Установка обновления",
  "Mark All as Read": "Отметить все как прочитанные",
  "Mark This Conversation as Read": "Отметить этот диалог как прочитанный",
  "Mark This Conversation as Unread": "Отметить этот диалог как непрочитанный",
  "Rename This Conversation": "Переименовать этот диалог",
  "Move to New Group": "Переместить в новую группу",
  "Remove from Group": "Удалить из группы",
  "Staged Changes": "Индексированные изменения",
  "Branch Changes": "Изменения ветки",
  "NAVIGATION": "НАВИГАЦИЯ",
  "RECOMMENDED": "РЕКОМЕНДУЕТСЯ",
  "CONVERSATION": "ДИАЛОГ",

  "New Conversation": "Новый диалог",
  "New conversation": "Новый диалог",
  "Conversation History": "История диалогов",
  "Conversation history": "История диалогов",
  "Projects": "Проекты",
  "Scheduled Tasks": "Запланированные задачи",
  "Scheduled tasks": "Запланированные задачи",
  "Skills & Customizations": "Навыки и дополнения",
  "Skills & customizations": "Навыки и дополнения",
  "Customizations": "Дополнения",
  "Customization": "Дополнение",
  "Settings": "Настройки",
  "UI Plugins": "UI Плагины",
  "UI plugins": "UI Плагины",
  "Automations": "Автоматизации",
  "Recent Conversations": "Недавние диалоги",
  "Recent conversations": "Недавние диалоги",
  "Recent": "Недавние",
  "History": "История",
  "Running agents": "Запущенные агенты",
  "No agents running": "Нет запущенных агентов",
  "Open Settings": "Открыть настройки",
  "Global Settings": "Общие настройки",
  "Project Settings": "Настройки проекта",
  "Restart to Update": "Перезапуск для обновления",
  "Open IDE": "Открыть IDE",
  "Open in IDE": "Открыть в IDE",
  "Open Antigravity IDE": "Открыть Antigravity IDE",
  "Ask anything, @ to mention, / for actions": "Спросите о чём угодно, @ для контекста, / для команд",
  "File": "Файл",
  "Edit": "Редактировать",
  "View": "Вид",
  "Window": "Окно",
  "Help": "Справка",
  "Local": "Локально",
  "MCP Error": "Ошибка MCP",
  "Show all": "Показать все",
  "See all": "Показать все",
  "Not in Project": "Вне проекта",
  "Conversations": "Диалоги",
  "Shortcuts": "Горячие клавиши",
  "Provide Feedback": "Оставить отзыв",
  "Provide feedback": "Оставить отзыв",
  "Feedback": "Отзыв",
  "Pinned Conversations": "Закрепленные диалоги",
  "Other Conversations": "Другие диалоги",
  "Standalone Conversations": "Отдельные диалоги",
  "All Workspaces": "Все рабочие области",
  "Current Workspace": "Текущая рабочая область",
  "Workspaces": "Рабочие области",
  "Workspace": "Рабочая область",
  "Worktree": "Рабочее дерево",
  "Previous Worktrees": "Предыдущие рабочие деревья",
  "Add Workspace": "Добавить рабочую область",
  "New Workspace": "Новая рабочая область",
  "Archive Workspace": "Архивировать рабочую область",
  "Connect to Remote Workspace": "Подключиться к удаленной рабочей области",
  "Recent Remote Workspaces": "Недавние удаленные рабочие области",
  "Select Theme": "Выберите тему",
  "Select Antigravity Theme": "Выберите тему Antigravity",
  "Select Antigravityru Theme": "Выберите тему Antigravity",
  "Use theme to be imported with settings": "Использовать тему из импортированных настроек",
  "Light preview": "Светлая тема",
  "Dark preview": "Тёмная тема",
  "Light": "Светлая",
  "Dark": "Тёмная",
  "System": "Системная",
  "Inherit": "Как в системе",
  "Previous": "Назад",
  "Next": "Далее",
  "Get Started": "Начать",
  "Finish": "Завершить",
  "Skip": "Пропустить",
  "Continue": "Продолжить",
  "Back": "Назад",
  "Complete Setup": "Завершить настройку",
  "Reset Onboarding": "Сбросить настройку",
  "Account": "Аккаунт",
  "Permissions": "Разрешения",
  "General": "Общие",
  "Appearance": "Внешний вид",
  "Tab": "Таб",
  "Editor": "Редактор",
  "Browser": "Браузер",
  "Notifications": "Уведомления",
  "Models": "Модели",
  "App": "Приложение",
  "Application": "Приложение",
  "Project General": "Общие проекта",
  "Project Folders": "Папки проекта",
  "Project Agent": "Агент проекта",
  "Jetski Chat": "Чат",
  "Labs": "Лаборатория",
  "CitC Settings": "Настройки CitC",
  "Best of N": "Best of N",
  "Developer": "Разработчик",
  "Regroup Google3 Chats": "Перегруппировка чатов Google3",
  "Close Settings": "Закрыть настройки",
  "Manage Permissions": "Управление разрешениями",
  "Manage permissions": "Управление разрешениями",
  "Advanced Settings": "Дополнительные настройки",
  "Advanced": "Расширенные",
  "Preferences": "Параметры",
  "Open Preferences": "Открыть параметры",
  "Manage your plan, credentials, and general preferences.": "Управление тарифом, учетными данными и общими настройками.",
  "Manage Antigravity app settings.": "Управление настройками приложения Antigravity.",
  "Manage Antigravityru app settings.": "Управление настройками приложения Antigravity.",
  "Configure the agent's visual theme and display preferences.": "Настройка визуальной темы и отображения агента.",
  "Configure editor-specific behaviors and shortcuts.": "Настройка поведения редактора и сочетаний клавиш.",
  "Manage your notification preferences.": "Управление настройками уведомлений.",
  "Keyboard shortcuts for quick navigation and control.": "Сочетания клавиш для быстрой навигации и управления.",
  "Configure tab completion, suggestions, and navigation behavior.": "Настройка автодополнения по клавише Tab, подсказок и навигации.",
  "Configure agent execution, queued message delivery, and permissions.": "Настройка выполнения агента, доставки сообщений в очереди и разрешений.",
  "Manage fine-grained permissions for GitHub.": "Управление детальными разрешениями для GitHub.",
  "Developer-only tools. These settings are stored locally in this browser and do not affect other users.": "Инструменты для разработчиков. Эти настройки сохраняются локально в этом браузере.",
  "Try out early-stage features before they ship. These may change or be removed at any time.": "Попробуйте экспериментальные функции до их официального релиза.",
  "Manage settings specific to Google CitC workspaces development.": "Управление настройками рабочих областей Google CitC.",
  "Manage how Best of N sets up the workspaces its arms run in.": "Настройка рабочих пространств для режима Best of N.",
  "Prevent Sleep": "Предотвращать спящий режим",
  "Prevent the computer from sleeping while the app is running.": "Запретить спящий режим компьютера при работе приложения.",
  "Keep In Menu Bar": "Оставлять в области уведомлений",
  "Keep the app accessible from the menu bar and running in the background when all windows are closed.": "Оставлять приложение в системном трее и фоне при закрытии всех окон.",
  "Remote Control": "Удаленное управление",
  "Enable Remote Control": "Включить Remote Control",
  "Work with local agents from another device.": "Работа с локальными агентами с других устройств.",
  "Manage your conversations from the companion website.": "Управление диалогами через сопутствующий веб-сайт.",
  "Notification Settings": "Настройки уведомлений",
  "To modify notification settings, open your operating system's system preferences.": "Для изменения настроек уведомлений откройте параметры операционной системы.",
  "Open System Preferences": "Открыть системные настройки",
  "Automatic Check for Updates": "Автоматическая проверка обновлений",
  "Automatically prompt you to restart the app when a new update is available. When disabled, you can check for updates manually from the app menu.": "Предлагать перезапуск при наличии обновления. При отключении проверка вручную через меню.",
  "Nickname": "Псевдоним",
  "A nickname for identifying this application in the companion website. Changing this will restart the connection.": "Имя для идентификации этого приложения на сопутствующем веб-сайте.",
  "Device Name": "Имя устройства",
  "Enter device name...": "Введите имя устройства...",
  "Allow List Terminal Commands": "Список разрешенных команд терминала",
  "Deny List Terminal Commands": "Список запрещенных команд терминала",
  "Agent Auto-Fix Lints": "Автоисправление ошибок линтера агентом",
  "Give the agent awareness of lint errors created by its edits so it can fix them without explicit prompting.": "Информировать агента об ошибках линтера, вызванных его правками, для их автоматического исправления.",
  "Queued Messages": "Сообщения в очереди",
  "Configure when follow-up messages are sent.": "Настройка отправки последующих сообщений.",
  "Confirm Window Reload": "Подтверждать перезагрузку окна",
  "Enable Demo Mode (Beta)": "Включить демонстрационный режим (Бета)",
  "Explain and Fix in Current Conversation": "Объяснять и исправлять в текущем диалоге",
  "Strict Mode": "Строгий режим",
  "Enforce settings that prevent the agent from autonomously running targeted exploits and require human review for all agent actions. Visit antigravity.google/docs/strict-mode for details.": "Включение ограничений, требующих подтверждения пользователем всех действий агента.",
  "Agent Non-Workspace File Access": "Доступ агента к файлам вне рабочей области",
  "Allow the agent to automatically view and edit files outside the current workspace. Use with caution: this gives the agent access to additional potentially-relevant information, but also allows the agent to access credential files, secrets, and other files outside of the workspace that could be targeted in prompt injection attacks or other exploits by malicious actors.": "Разрешить агенту просматривать и редактировать файлы вне рабочей области. Используйте с осторожностью.",
  "Command Setup Script": "Скрипт подготовки команд",
  "A shell setup script run before every command the agent executes.": "Скрипт оболочки, выполняемый перед каждой командой агента.",
  "Enable Terminal Sandbox": "Включить песочницу терминала",
  "Run terminal commands with sandbox restrictions.": "Выполнять команды терминала с ограничениями песочницы.",
  "Sandbox Allow Network": "Разрешить сеть в песочнице",
  "Enable Shell Integration": "Включить интеграцию с оболочкой",
  "Use the IDE's shell integration to detect and report terminal command execution. When disabled, the agent uses its own shell. Restart the application for this to take effect.": "Интеграция с оболочкой IDE для отслеживания команд. При отключении используется встроенная оболочка агента. Требуется перезапуск.",
  "Terminal Command Auto Execution": "Автовыполнение команд терминала",
  "Agent Host Address": "Хост-адрес агента",
  "Review Policy": "Политика проверки",
  "Specifies the agent's behavior when asking for review on artifacts, which are documents it creates to enable a richer conversation experience.": "Определяет поведение агента при запросе проверки артефактов.",
  "Enable Sounds for Agent": "Включить звуковые сигналы",
  "Play a sound when the agent finishes generating a response.": "Звуковой сигнал при завершении генерации ответа агентом.",
  "Enable Notifications for Agent": "Включить уведомления агента",
  "Show browser notifications when your action is needed or execution finishes.": "Уведомления браузера при необходимости действий или завершении выполнения.",
  "Auto-Expand Changes Overview": "Автораскрытие обзора изменений",
  "Automatically expand the Changes Overview toolbar when the agent finishes generating a response.": "Автоматически раскрывать панель изменений при завершении ответа.",
  "Knowledge": "База знаний",
  "Let the agent access its knowledge base to inform its responses and automatically generate knowledge items in the background. Turning this off prevents the agent from accessing existing knowledge items, but doesn't delete them.": "Разрешить агенту обращаться к базе знаний и автоматически создавать записи в фоне.",
  "Auto-Open Edited Files": "Автоматически открывать измененные файлы",
  "Open files in the background if the agent creates or edits them": "Открывать созданные или измененные файлы в фоне",
  "Open Agent on Reload": "Открывать панель агента при перезагрузке",
  "Open the agent panel on window reload": "Открывать панель агента при перезагрузке окна",
  "Verbose Agent Chat": "Подробный чат агента",
  "Display and preserve intermediate thinking steps.": "Отображать и сохранять промежуточные шаги размышлений.",
  "Conversation Width": "Ширина диалога",
  "Configure the maximum width of the conversation panel.": "Настройка максимальной ширины панели диалога.",
  "Suggestions in Editor": "Подсказки в редакторе",
  "Show suggestions when typing in the editor": "Показывать подсказки при вводе в редакторе",
  "Tab to Jump": "Переход по Tab",
  "Predict the location of your next edit and navigate you there with a tab keypress.": "Предсказывать место следующей правки и переходить по клавише Tab.",
  "Tab to Import": "Импорт по Tab",
  "Quickly add and update imports with a tab keypress.": "Быстро добавлять и обновлять импорты по клавише Tab.",
  "Tab Speed": "Скорость подсказок Tab",
  "Set the speed of tab suggestions": "Скорость появления подсказок Tab",
  "Highlight After Accept": "Подсветка после принятия",
  "Highlight newly inserted text after accepting a Tab completion.": "Подсветка вставленного текста после применения автодополнения Tab.",
  "Tab Gitignore Access": "Доступ Tab к файлам .gitignore",
  "Allow Tab to view and edit the files in .gitignore. Use with caution if your .gitignore lists files containing credentials, secrets, or other sensitive information.": "Разрешить Tab просматривать файлы из .gitignore. Используйте осторожно, если там содержатся конфиденциальные данные.",
  "Enable Browser Tools": "Включить инструменты браузера",
  "Let the agent use browser tools to open URLs, read web pages, and interact with browser content. This gives the agent access to important (and often critical) knowledge and methods of validation, but any browser integration does increase exposure to external malicious parties for security exploits.": "Разрешить агенту открывать ссылки, читать веб-страницы и взаимодействовать с браузером.",
  "Browser Javascript Execution Policy": "Политика выполнения JavaScript в браузере",
  "Controls whether the agent can run custom JavaScript to automate complex browser actions.": "Разрешить агенту выполнять JavaScript для сложных действий в браузере.",
  "Chrome Binary Path": "Путь к исполняемому файлу Chrome",
  "Path to the Chrome/Chromium executable. Leave empty for auto-detection.": "Путь к исполняемому файлу Chrome/Chromium. Оставьте пустым для автоопределения.",
  "Browser User Profile Path": "Путь к профилю браузера",
  "Custom path for the browser user profile directory. Leave empty for default (~/.gemini/antigravity-browser-profile).": "Пользовательский путь к профилю браузера. По умолчанию (~/.gemini/antigravity-browser-profile).",
  "Browser CDP Port": "Порт CDP браузера",
  "Port number for Chrome DevTools Protocol remote debugging. Leave empty for default (9222).": "Порт для удаленной отладки Chrome DevTools Protocol. По умолчанию (9222).",
  "Show Selection Actions": "Действия с выделенным текстом",
  "Include Jetski Default Customizations": "Включить стандартные дополнения",
  "Include default customizations, such as default skills.": "Включать базовые навыки и правила по умолчанию.",
  "Enable Personal Customizations": "Включить персональные дополнения",
  "Layer your personal customizations (skills, rules, etc.) from your config on top of the active profile.": "Применять персональные дополнения (навыки, правила и др.) поверх активного профиля.",
  "Inline Actions": "Быстрые действия",
  "Show a floating notification card when background conversations need your input. Answer questions, approve commands, and grant permissions without leaving your current conversation. Share feedback at go/inline-actions-feedback.": "Отображать карточку уведомлений, когда фоновым задачам требуется подтверждение.",
  "Always Proceed": "Всегда продолжать",
  "Always Ask": "Всегда спрашивать",
  "Always ask": "Всегда спрашивать",
  "Ask First": "Сначала спросить",
  "Ask first": "Сначала спросить",
  "Request Review": "Запрашивать проверку",
  "Request review": "Запрашивать проверку",
  "Always allow": "Всегда разрешать",
  "Always Allow": "Всегда разрешать",
  "Allow Once": "Разрешить один раз",
  "Allow once": "Разрешить один раз",
  "Deny": "Запретить",
  "Approve": "Одобрить",
  "Reject": "Отклонить",
  "Allow": "Разрешить",
  "Action required": "Требуется действие",
  "Confirmation required to execute this step": "Требуется подтверждение для выполнения этого шага",
  "Permission Grants": "Выданные разрешения",
  "Access grants": "Предоставление доступа",
  "Access rules": "Правила доступа",
  "Network Access Rules": "Правила сетевого доступа",
  "File Access Rules": "Правила доступа к файлам",
  "Browser Actuation Rules": "Правила управления браузером",
  "Model Selection": "Выбор модели",
  "Select Model": "Выберите модель",
  "Default Model": "Модель по умолчанию",
  "Custom Model": "Пользовательская модель",
  "Custom Models": "Пользовательские модели",
  "Add Custom Model": "Добавить модель",
  "Add Model": "Добавить модель",
  "Edit Model": "Редактировать модель",
  "Model Quota": "Квота модели",
  "Model quota reached": "Квота модели исчерпана",
  "Recommended": "Рекомендуется",
  "Experimental": "Экспериментальная",
  "Experimental model. Click to provide feedback or opt out.": "Экспериментальная модель. Нажмите, чтобы оставить отзыв.",
  "Error Loading Models": "Ошибка загрузки моделей",
  "No Model Selected": "Модель не выбрана",
  "No Models Available": "Нет доступных моделей",
  "No models available": "Нет доступных моделей",
  "Type a message...": "Введите сообщение...",
  "Ask a question or provide instructions...": "Задайте вопрос или опишите задачу...",
  "Ask anything...": "Спросите о чём угодно...",
  "Reply to agent...": "Ответить агенту...",
  "Send a message...": "Отправить сообщение...",
  "Describe your task...": "Опишите вашу задачу...",
  "Enter a prompt for the agent to run...": "Введите задачу для агента...",
  "Attach files": "Прикрепить файлы",
  "Attach a screenshot (optional)": "Прикрепить снимок экрана (необязательно)",
  "Drop to add to Agent": "Перетащите, чтобы передать агенту",
  "Drop files here": "Перетащите файлы сюда",
  "Paste code here": "Вставьте код сюда",
  "Quote Selection": "Цитировать выделенное",
  "Add to Chat": "Добавить в чат",
  "Add to Chat/Quote": "Добавить в чат/цитировать",
  "Terminal: Add to Chat": "Терминал: добавить в чат",
  "Start Voice Recording": "Начать запись голоса",
  "Stop Voice Recording": "Остановить запись голоса",
  "Toggle Voice Recording": "Голосовой ввод",
  "Send": "Отправить",
  "Stop": "Остановить",
  "Thinking": "Размышления",
  "Thinking...": "Размышление...",
  "Generating...": "Генерация...",
  "Running...": "Выполняется...",
  "Running": "Выполняется",
  "Completed": "Завершено",
  "Failed": "Ошибка",
  "Cancelled": "Отменено",
  "Pending": "В ожидании",
  "Idle": "Ожидание",
  "Connected": "Подключено",
  "Disconnected": "Отключено",
  "Ready": "Готов",
  "In Progress": "В процессе",
  "Input required": "Требуется ввод",
  "Blocked on Your Input": "Ожидает вашего ввода",
  "Blocked, needs input": "Заблокировано, требуется ввод",
  "Copy thinking": "Копировать размышления",
  "Copy conversation markdown": "Копировать Markdown диалога",
  "Conversation copied as Markdown to clipboard": "Диалог скопирован в буфер обмена в формате Markdown",
  "Clear chat": "Очистить чат",
  "Continue Response": "Продолжить ответ",
  "Fork in current workspace": "Создать ответвление в текущей рабочей области",
  "Plan": "План",
  "Planning": "Планирование",
  "Proceed with Plan": "Выполнить план",
  "Artifacts": "Артефакты",
  "Subagents": "Субагенты",
  "Background Tasks": "Фоновые задачи",
  "Background tasks": "Фоновые задачи",
  "Files Changed": "Измененные файлы",
  "Files changed": "Изменённые файлы",
  "Terminals": "Терминалы",
  "Terminal": "Терминал",
  "Console": "Консоль",
  "Output": "Вывод",
  "Logs": "Логи",
  "Preview": "Предпросмотр",
  "Diff": "Различия",
  "Overview": "Обзор",
  "Timeline": "Хронология",
  "Stop Subagent": "Остановить субагента",
  "Stop All Subagents": "Остановить всех субагентов",
  "Cancel step": "Отменить шаг",
  "Cancel task": "Отменить задачу",
  "Cancel All Tasks": "Отменить все задачи",
  "Delete Terminal": "Закрыть терминал",
  "New Terminal Tab": "Новая вкладка терминала",
  "Close Terminal Tab": "Закрыть вкладку терминала",
  "Split Terminal": "Разделить терминал",
  "Creating terminal...": "Создание терминала...",
  "No active terminals": "Нет активных терминалов",
  "No subagents": "Нет субагентов",
  "No background tasks": "Нет фоновых задач",
  "No artifacts yet": "Пока нет артефактов",
  "No changes detected": "Изменений не обнаружено",
  "No file changes": "Нет изменений файлов",
  "No changes to review": "Нет изменений для проверки",
  "Uncommitted": "Незафиксированные",
  "Staged index changes and working tree changes": "Проиндексированные и рабочие изменения",
  "Agent Edits": "Изменения агента",
  "Files modified by the agent in this conversation": "Файлы, изменённые агентом в этом диалоге",
  "Branch": "Ветка",
  "All changes since the branch point": "Все изменения от точки ветвления",
  "Code Change Summary": "Сводка изменений кода",
  "Cancel": "Отмена",
  "Confirm": "Подтвердить",
  "Delete": "Удалить",
  "Save": "Сохранить",
  "Save Changes": "Сохранить изменения",
  "Save changes": "Сохранить изменения",
  "Close": "Закрыть",
  "Apply": "Применить",
  "Proceed": "Продолжить",
  "Proceed Anyway": "Все равно продолжить",
  "Run": "Запустить",
  "Rerun": "Перезапустить",
  "Restart": "Перезапустить",
  "Pause": "Пауза",
  "Resume": "Возобновить",
  "Retry": "Повторить",
  "Try Again": "Попробовать снова",
  "Try again": "Попробовать снова",
  "Copy": "Копировать",
  "Copied!": "Скопировано!",
  "Copied": "Скопировано",
  "Copy Content": "Копировать содержимое",
  "Copy File Name": "Копировать имя файла",
  "Copy File Path": "Копировать путь к файлу",
  "Copy Image": "Копировать изображение",
  "Copy Path": "Копировать путь",
  "Copy output": "Копировать вывод",
  "Copy debug info": "Копировать отладку",
  "Edit Config": "Редактировать конфигурацию",
  "Edit Comment": "Редактировать комментарий",
  "Clear": "Очистить",
  "Clear all": "Очистить всё",
  "Reset": "Сбросить",
  "Done": "Готово",
  "Open": "Открыть",
  "Open Folder": "Открыть папку",
  "Open Project": "Открыть проект",
  "Add Project": "Добавить проект",
  "Add Folder": "Добавить папку",
  "Create Project": "Создать проект",
  "Archive project": "Архивировать проект",
  "Delete project": "Удалить проект",
  "Delete Task": "Удалить задачу",
  "Delete Conversation": "Удалить диалог",
  "Archive this conversation": "Архивировать этот диалог",
  "Delete Permanently": "Удалить навсегда",
  "Select All": "Выделить всё",
  "Undo": "Отменить",
  "Redo": "Повторить",
  "Cut": "Вырезать",
  "Paste": "Вставить",
  "Refresh": "Обновить",
  "Reload": "Перезагрузить",
  "Reload Window": "Перезагрузить окно",
  "Dismiss": "Отклонить",
  "Got it": "Понятно",
  "Learn more": "Подробнее",
  "Learn more.": "Подробнее.",
  "Manage": "Управление",
  "Install": "Установить",
  "Installed": "Установлено",
  "Installing...": "Установка...",
  "Install IDE": "Установить IDE",
  "Download": "Скачать",
  "Download Diagnostics": "Скачать диагностику",
  "Upload": "Загрузить",
  "Expand All": "Развернуть всё",
  "Collapse All": "Свернуть всё",
  "Expand All Folders": "Развернуть все папки",
  "Collapse All Folders": "Свернуть все папки",
  "Submit": "Отправить",
  "Submitting...": "Отправка...",
  "Search...": "Поиск...",
  "Search tasks...": "Поиск задач...",
  "Search plugins...": "Поиск плагинов...",
  "Search automations...": "Поиск автоматизаций...",
  "Search conversations...": "Поиск диалогов...",
  "Search projects...": "Поиск проектов...",
  "Search settings...": "Поиск настроек...",
  "Search workspaces...": "Поиск рабочих областей...",
  "Search across files...": "Поиск по файлам...",
  "Type to search...": "Введите для поиска...",
  "Filter": "Фильтр",
  "Sort Conversations": "Сортировка диалогов",
  "Group By": "Группировать по",
  "Group By Project": "Группировать по проектам",
  "Group By Workspace": "Группировать по рабочим областям",
  "Open Keyboard Shortcuts": "Открыть список горячих клавиш",
  "Toggle Sidebar": "Скрыть/показать боковую панель",
  "Find in conversation": "Поиск в диалоге",
  "Toggle Model Selector": "Выбор модели",
  "Toggle Terminal": "Скрыть/показать терминал",
  "Toggle File Viewer": "Просмотр файлов",
  "Toggle Editor": "Скрыть/показать редактор",
  "Toggle Project Selector": "Выбор проекта",
  "Toggle Environment Selector": "Выбор окружения",
  "Toggle Auxiliary Pane": "Скрыть/показать доп. панель",
  "New Editor Window": "Новое окно редактора",
  "Close Tab": "Закрыть вкладку",
  "File Picker": "Выбор файла",
  "Open Command Palette": "Палитра команд",
  "Open Conversation Picker": "Выбор диалога",
  "Open Workspace Selector": "Выбор рабочей области",
  "Focus Input": "Фокус в поле ввода",
  "Zoom In": "Увеличить масштаб",
  "Zoom Out": "Уменьшить масштаб",
  "Reset Zoom": "Сбросить масштаб",
  "Find in Pane": "Поиск на панели",
  "Go Back": "Назад",
  "Go Forward": "Вперед",
  "Code Search": "Поиск по коду",
  "Open Commit Graph": "Граф коммитов",
  "Open Conversation History": "Открыть историю диалогов",
  "Open Conversation": "Открыть диалог",
  "Mark as Read": "Отметить как прочитанное",
  "Mark as Unread": "Отметить как непрочитанное",
  "Archive / Restore": "Архивировать / Восстановить",
  "Close (Escape)": "Закрыть (Escape)",
  "Next match (Enter)": "Следующее совпадение (Enter)",
  "Previous match (Shift+Enter)": "Предыдущее совпадение (Shift+Enter)",
  "Today": "Сегодня",
  "Yesterday": "Вчера",
  "Previous 7 Days": "За последние 7 дней",
  "Previous 30 Days": "За последние 30 дней",
  "Last 7 days": "За последние 7 дней",
  "Older": "Ранее",
  "Monday": "Понедельник",
  "Tuesday": "Вторник",
  "Wednesday": "Среда",
  "Thursday": "Четверг",
  "Friday": "Пятница",
  "Saturday": "Суббота",
  "Sunday": "Воскресенье",
  "Daily": "Ежедневно",
  "Weekly": "Еженедельно",
  "Hourly": "Ежечасно",
  "Something went wrong": "Что-то пошло не так",
  "Something went wrong!": "Что-то пошло не так!",
  "File not found": "Файл не найден",
  "Task not found": "Задача не найдена",
  "Failed to load conversation": "Не удалось загрузить диалог",
  "Failed to delete conversation": "Не удалось удалить диалог",
  "Failed to start conversation": "Не удалось начать диалог",
  "Failed to stop agent": "Не удалось остановить агента",
  "Connecting to language server...": "Подключение к языковому серверу...",
  "No internet. Agent features may not work.": "Нет подключения к Интернету. Функции агента могут не работать.",
  "No items found": "Ничего не найдено",
  "No results found.": "Результаты не найдены.",
  "No matching results": "Нет подходящих результатов",
  "No conversations yet": "Пока нет диалогов",
  "No tasks found": "Задачи не найдены",
  "No scheduled tasks": "Нет запланированных задач",
  "No projects found": "Проекты не найдены",
  "No projects created": "Проекты еще не созданы",
  "No folders added yet.": "Папки пока не добавлены.",
  "No workspaces found": "Рабочие области не найдены",
  "No workspaces open.": "Нет открытых рабочих областей.",
  "No skills available": "Навыки недоступны",
  "No skills loaded.": "Навыки не загружены.",
  "No plugins available": "Плагины недоступны",
  "No MCP servers installed": "Серверы MCP не установлены",
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
  "Configure allowed and denied paths for file reads and writes.": "Настройка разрешенных и запрещенных путей для чтения и записи файлов.",
  "Network Permissions": "Сетевые разрешения",
  "Configure allowed and denied URLs for reading.": "Настройка разрешенных и запрещенных URL для чтения.",
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
  "Configure default behaviors, skills, and MCP servers.": "Настройка поведения по умолчанию, навыков и серверов MCP.",
  "Token Usage": "Использование токенов",
  "The breakdown below shows token usage from customizations like skills, rules, and MCP. If the budget is exceeded, large customizations will be truncated automatically.": "Расход токенов на дополнения (навыки, правила, MCP). При превышении лимита крупные элементы автоматически усекаются.",
  "% of the customization budget is available.": "% бюджета дополнений доступно.",
  "Customization token budget exceeded. Large customizations will be truncated.": "Лимит токенов на дополнения превышен. Крупные элементы будут усечены.",
  "There are no customizations enabled.": "Дополнения не включены.",
  "Loading token usage...": "Загрузка расхода токенов...",
  "Rules": "Правила",
  "Skills": "Навыки",
  "Mcp Tools": "Инструменты MCP",
  "System Prompt": "Системный промпт",
  "tokens)": "токенов)",
  "tokens": "токенов",
  "token": "токен",
  "Hide breakdown": "Скрыть детали",
  "Default Customizations": "Дополнения по умолчанию",
  "Personal Customizations": "Персональные дополнения",
  "When enabled, the agent will include default customizations, including default skills.": "При включении агент будет использовать стандартные дополнения и навыки.",
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
  "Browser Settings": "Настройки браузера",
  "Configure the browser subagent. It requires": "Настройка субагента браузера. Требуется ",
  "to be installed.": "установленный в системе.",
  "The browser subagent can be invoked by typing /browser in the conversation input box.": "Субагента браузера можно вызвать командой /browser в поле ввода.",
  "Actuation Permissions": "Разрешения на управление",
  "Configure allowed and denied URLs for browser actuation.": "Настройка разрешенных и запрещенных URL для управления браузером.",
  "Browser Actuation Permissions": "Разрешения управления браузером",
  "Feature Disabled": "Функция отключена",
  "Access to the browser agent tools is blocked by your organization's admin controls policy.": "Доступ к инструментам браузера заблокирован политикой вашей организации.",
  "The browser subagent has been disabled by your administrator.": "Субагент браузера отключен вашим администратором.",
  "Organization Allowed Domains (Read-Only)": "Разрешенные домены организации (только чтение)",
  "Execute URLs": "Выполнение URL",
  "URLs the agent can actuate on in this workspace.": "URL, доступные для управления в этой рабочей области.",
  "URLs the agent can actuate on using the browser.": "URL для управления через браузер.",
  "Command and file access granted to the automation agents.": "Доступ к командам и файлам для агентов автоматизации.",
  "Override feature environment": "Переопределить окружение функций",
  "Operating System": "Операционная система",
  "Simulate running on a different OS.": "Симуляция работы в другой ОС.",
  "Host Environment": "Окружение хоста",
  "Simulate a different host (Electron, desktop or mobile Web, Extension, or remote control).": "Симуляция другого хоста (Electron, Web, расширение, Remote Control).",
  "User Type": "Тип пользователя",
  "Simulate a different user cohort (Google, External, Enterprise).": "Симуляция группы пользователей (Google, Внешние, Enterprise).",
  "Outside of folders file access policy": "Доступ к файлам вне рабочих папок",
  "Configures how the agent tries to access files outside of its working folders.": "Настройка доступа агента к файлам вне его рабочих папок.",
  "Controls whether terminal commands require your approval before running.": "Требуется ли ваше подтверждение перед выполнением команд терминала.",
  "Enable Sandbox Mode (Preview)": "Включить режим песочницы (предпросмотр)",
  "Restricts agent tools to a secure, isolated local sandbox.": "Ограничивает инструменты агента безопасной локальной песочницей.",
  "A shell setup script run before every command the agent executes in this project. Overrides the global script.": "Скрипт оболочки, выполняемый перед каждой командой в проекте. Переопределяет общий скрипт.",
  "Open files in the background if Agent creates or edits them": "Открывать созданные или измененные файлы в фоне",
  "Open Agent panel on window reload": "Открывать панель агента при перезагрузке окна",
  "A label for this computer when you connect from another device. Changing it reconnects.": "Имя этого компьютера при подключении с другого устройства.",
  "Continue your work from another device with Remote Control. Scan the QR code or open the link below.": "Продолжите работу с другого устройства через Remote Control. Отсканируйте QR-код или откройте ссылку.",
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
  "Folders": "Папки",
  "Uploads": "Загрузки",
  "New Worktree": "Новое рабочее дерево",
  "New worktree": "Новое рабочее дерево",
  "Clone current workspace into a new independent workspace": "Клонировать текущую рабочую область в новую независимую",
  "Run in your current workspace": "Запуск в текущей рабочей области",
  "Run in a new worktree": "Запуск в новом рабочем дереве",
  "Ask a quick question without interrupting the main conversation.": "Задать быстрый вопрос без прерывания основного диалога.",
  "Meta-agent for managing conversations": "Мета-агент для управления диалогами",
  "Team of subagents to do long running work": "Команда субагентов для длительных задач",
  "Workspace File Access": "Доступ к файлам рабочей области",
  "Workspace Command Access": "Доступ к командам рабочей области",
  "Workspace Web Access": "Веб-доступ рабочей области",
  "Search customizations...": "Поиск дополнений...",
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
  "You cannot sign out from Remote Control. Please sign out on your local application.": "Нельзя выйти через Remote Control. Выйдите в локальном приложении.",

  // --- 2.26.0: строки со скриншотов (выбор проекта, дополнения, автоматизации, история) ---
  "No Project": "Без проекта",
  "Search Projects": "Поиск проектов",
  "Search Recent Workspaces": "Поиск недавних рабочих областей",
  "Quick Start": "Быстрый старт",
  "Outside of Project": "Вне проекта",
  "Marketplace": "Маркетплейс",
  "No custom agents yet.": "Пользовательских агентов пока нет.",
  "Global": "Глобальный",
  "Create with Prompt": "Создать по запросу",
  "New": "Создать",
  "No automations configured.": "Автоматизации не настроены.",
  "No automations matching your search": "Нет автоматизаций по запросу",
  "This page is going away soon": "Эта страница скоро исчезнет",
  "Search conversations with": "Ищите диалоги через",
  "in the top left.": "в левом верхнем углу.",
  "View archived in the sidebar": "Архивные — в боковой панели",
  "View archived in the sidebar (": "Архивные — в боковой панели (",
  "menu)": "меню)",
  "menu).": "меню).",
  "Conversation Archived": "Диалог перенесён в архив",
  "now": "сейчас",

  // --- 2.26.0: палитра команд, боковая панель, меню отображения ---
  "Commands": "Команды",
  "Search for commands...": "Поиск команд...",
  "Open Project Picker": "Открыть выбор проекта",
  "Display Options": "Параметры отображения",
  "Create New Project": "Создать проект",
  "Project": "Проект",
  "Status": "Статус",
  "None": "Нет",
  "Last Updated": "Последнее обновление",
  "Last Prompt": "Последний запрос",
  "Sort Projects": "Сортировка проектов",
  "Sort Workspaces": "Сортировка рабочих областей",
  "Custom Order": "Свой порядок",
  "Display": "Отображение",
  "Show All": "Показать все",
  "Show Less": "Свернуть",
  "See more": "Показать ещё",

  // --- 2.26.0: настройки (общие, внешний вид, уведомления, проект) ---
  // "Type" в подсказке «Type / and select plan…» не переводится: та же строка — заголовок «Тип» в фильтрах.
  "Global Permissions": "Глобальные разрешения",
  "Configure global allowed and denied resource permissions.": "Настройка глобально разрешённых и запрещённых ресурсов.",
  "Modified in": "Изменено в",
  "Tool Permissions": "Разрешения инструментов",
  "Modify permissions for file, terminal, and MCP tools.": "Разрешения для файлов, терминала и MCP-инструментов.",
  "Modify permissions for file and terminal tools.": "Разрешения для файлов и терминала.",
  "Plan Review Policy": "Проверка планов",
  "Whether the agent asks you to review its documents.": "Просит ли агент проверить его документы.",
  "and select": "и выберите",
  "to have the agent generate a plan.": "чтобы агент составил план.",
  "Contrast": "Контраст",
  "Strong": "Высокий",
  "Show system notifications when your action is needed or the agent finishes.": "Системные уведомления, когда нужно ваше действие или агент закончил работу.",
  "Sound": "Звук",
  "Play a sound when your action is needed or the agent finishes.": "Звуковой сигнал, когда нужно ваше действие или агент закончил работу.",
  "Volume": "Громкость",
  "Set the volume of agent sounds.": "Громкость звуков агента.",
  "Permission Settings": "Настройки разрешений",
  "Also includes": "Также действуют",
  "when working": "при работе",
  "in this project": "в этом проекте",
  "in these conversations": "в этих диалогах",
  "tokens (": "токенов (",
  "Other Customizations": "Прочие дополнения",
  "The breakdown below shows token usage from customizations like rules, skills, and MCP. If a budget is exceeded, large rules are demoted to path pointers and large customizations are excluded automatically.": "Ниже — расход токенов на дополнения: правила, навыки и MCP. При превышении лимита крупные правила заменяются ссылками на файлы, а крупные дополнения автоматически отключаются.",

  // --- 2.26.0: Marketplace. Тексты приходят с сервера; оригиналы — в ~/.gemini/antigravity/cache/marketplaces/*/marketplace.json ---
  "Connect to Google Workspace, including Docs, Sheets, Slides, Drive, and Calendar.": "Подключение к Google Workspace: Документы, Таблицы, Презентации, Диск и Календарь.",
  "Build on Google's developer platforms, including Android, Chrome, Gemini, and Google Cloud.": "Разработка на платформах Google: Android, Chrome, Gemini и Google Cloud.",
  "This plugin provides a specialized suite of skills for data engineers and database practitioners working on Google Cloud. It acts as an expert assistant, allowing you to use natural language prompts in your preferred coding agent to architect complex data pipelines, transform data with dbt, write Spark and BigQuery SQL notebooks, and orchestrate end-to-end workflows across GCP's data ecosystem.": "Набор навыков для инженеров данных и специалистов по базам данных в Google Cloud. Помогает на естественном языке проектировать сложные конвейеры данных, преобразовывать данные с dbt, писать блокноты Spark и BigQuery SQL и управлять сквозными процессами в экосистеме данных GCP.",
  "Check availability, schedule events, and RSVP.": "Проверка занятости, планирование событий и ответы на приглашения.",
  "Read, draft, and edit docs.": "Чтение, написание и редактирование документов.",
  "Search, upload, download, and share files.": "Поиск, загрузка, скачивание файлов и общий доступ к ним.",
  "Read, write, and format spreadsheets.": "Чтение, запись и форматирование таблиц.",
  "Read, edit, and export presentations.": "Чтение, редактирование и экспорт презентаций.",
  "Core tools and knowledge required to develop for Android.": "Основные инструменты и знания для разработки под Android.",
  "Reliable automation, in-depth debugging, and performance analysis in Chrome using Chrome DevTools and Puppeteer": "Надёжная автоматизация, глубокая отладка и анализ производительности в Chrome с помощью Chrome DevTools и Puppeteer",
  "Prototype, build & run modern apps that users love with Firebase's backend, AI, and operational infrastructure.": "Прототипы, разработка и запуск современных приложений на бэкенде, ИИ и инфраструктуре Firebase.",
  "Using the Google Antigravity Python SDK to build AI agents": "Создание ИИ-агентов с помощью Google Antigravity Python SDK",
  "Search and retrieve official documentation across Google Cloud, Gemini, Android, Firebase, Flutter, and Web. Requires Google Cloud credentials (ADC) or an API key.": "Поиск официальной документации по Google Cloud, Gemini, Android, Firebase, Flutter и Web. Нужны учётные данные Google Cloud (ADC) или ключ API.",
  "Integration skill and tools for Google Maps Platform APIs": "Навык интеграции и инструменты для API Google Maps Platform",
  "Curated collection of agent skills for science tasks.": "Подборка навыков агента для научных задач.",
  "Build applications with the Gemini Interactions API and Live API, including text, image, video, and speech generation, managed agents, and real-time multimodal streaming.": "Создание приложений на Gemini Interactions API и Live API: генерация текста, изображений, видео и речи, управляемые агенты и мультимодальная потоковая передача в реальном времени.",
  "Google Cloud guidance for coding agents: first-project onboarding, authentication and credential selection, and safety-critical validation for gcloud CLI commands. Includes the Google Developer Knowledge MCP server for grounded, up-to-date Google Cloud documentation.": "Руководство по Google Cloud для агентов: первый проект, аутентификация и выбор учётных данных, проверка опасных команд gcloud CLI. Включает MCP-сервер Google Developer Knowledge с актуальной документацией Google Cloud.",
  "Keep your coding agent up to date with the latest web best practices.": "Держит агента в курсе актуальных практик веб-разработки.",
  "Official plugin for Dart and Flutter that installs Flutter/Dart Skills, Rules, Custom Agents, and Dart MCP server for building natively compiled, visually stunning applications for mobile, web, desktop, and embedded devices from a single codebase": "Официальный плагин Dart и Flutter: устанавливает навыки, правила и агентов Flutter/Dart и MCP-сервер Dart для нативных приложений под мобильные, веб, десктоп и встраиваемые устройства из одной кодовой базы",

  // --- 2.26.0: меню проекта, добавление контекста, слэш-команды, режимы разрешений ---
  "Copy Project Name": "Скопировать название проекта",
  "Copy Workspace Name": "Скопировать название рабочей области",
  "Show in File Explorer": "Показать в проводнике",
  "Delete Project": "Удалить проект",
  "Delete Workspace": "Удалить рабочую область",
  "Add context": "Добавить контекст",
  "Files": "Файлы",
  "Folder": "Папка",
  "Mentions": "Упоминания",
  "Actions": "Действия",
  "Extensions": "Расширения",
  "Run until the specified goal is completely finished.": "Работать, пока указанная цель не будет полностью достигнута.",
  "Compact the conversation now (summarize history to free up the context window).": "Сжать диалог сейчас (кратко пересказать историю, чтобы освободить контекстное окно).",
  "Run an instruction on a recurring schedule or as a one-time timer.": "Выполнять инструкцию по расписанию или один раз по таймеру.",
  "Invoke a browser agent for web tasks.": "Вызвать агента-браузер для веб-задач.",
  "Plan carefully before executing a task.": "Тщательно спланировать задачу перед выполнением.",
  "Interview me to align on a plan.": "Расспросить меня, чтобы согласовать план.",
  "Invoke a team of agents to autonomously tackle large projects.": "Вызвать команду агентов для самостоятельной работы над крупными проектами.",
  "Reflect on recent successes or corrections to capture reusable skills or rules.": "Разобрать недавние удачи и исправления и сохранить их как навыки или правила.",
  "Every command requires approval.": "Каждая команда требует подтверждения.",
  "Run all commands without restrictions.": "Выполнять все команды без ограничений."
};

  function formatTime(str) {
    if (!str) return '';
    return str
      .replace(/(\d+)\s+days?/gi, '$1 дн.')
      .replace(/(\d+)\s+hours?/gi, '$1 ч.')
      .replace(/(\d+)\s+minutes?/gi, '$1 мин.')
      .replace(/(\d+)\s+seconds?/gi, '$1 сек.');
  }

  const RULES = [
    {
      regex: /^Models within this group:\s*(.*)$/i,
      replace: function (m) { return "Модели в этой группе: " + m[1]; }
    },
    {
      regex: /^(.*)\s+is currently available to Ultra and paid Pro plan subscribers\.?$/i,
      replace: function (m) { return m[1] + " в настоящее время доступна только подписчикам Ultra и платного тарифа Pro."; }
    },
    {
      regex: /^This undo action will not make any code changes\.?$/i,
      replace: function (m) { return "Это действие отмены не внесёт изменений в код."; }
    },
    {
      regex: /^Confirming this undo action will make the following changes:?$/i,
      replace: function (m) { return "Подтверждение этого действия отмены внесёт следующие изменения:"; }
    },

    {
      regex: /^Select (.*) Theme$/i,
      replace: function (m) { return "Выберите тему Antigravity"; }
    },
    {
      regex: /^Manage (.*) app settings\.?$/i,
      replace: function (m) { return "Управление настройками приложения Antigravity."; }
    },
    {
      regex: /^Your Plan:\s*(.*)$/i,
      replace: function (m) { return "Ваш тариф: " + m[1]; }
    },
    {
      regex: /^When toggled on, .* will use your AI credits to fulfill model requests once you're out of model quota\..* will always use your model quota first before using AI credits\.$/i,
      replace: function (m) {
        return "При включении приложение будет использовать кредиты AI для выполнения запросов при исчерпании квоты моделей. В первую очередь всегда расходуется квота моделей.";
      }
    },
    {
      regex: /^Available AI Credits:\s*(.*)$/i,
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
      regex: /^You have used some of your weekly \.\.\.$/i,
      replace: function (m) { return "Часть недельного лимита израсходована..."; }
    },
    {
      regex: /^You have used some of your 5-hour \.\.\.$/i,
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
      regex: /^Choose a permission preset\..*$/i,
      replace: function (m) {
        return "Выберите готовую предустановку безопасности для агента.";
      }
    },
    {
      regex: /^Show\s+(\d+)\s+breakdowns?$/i,
      replace: function (m) { return "Подробнее (" + m[1] + ")"; }
    },
    {
      regex: /^No MCP servers found for "(.*)"$/i,
      replace: function (m) { return 'Не найдены серверы MCP по запросу "' + m[1] + '"'; }
    },
    {
      regex: /^See all \((\d+)\)$/i,
      replace: function (m) { return "Показать все (" + m[1] + ")"; }
    },
    {
      regex: /^When toggled on, .* collects usage data to help Google enhance performance and features\.?$/i,
      replace: function (m) {
        return "При включении данные об использовании отправляются в Google для улучшения работы и функций.";
      }
    },
    {
      regex: /^Receive product updates, tips, and promotions from Google .* via email\.?$/i,
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
      regex: /^Show all \((\d+)\)$/i,
      replace: function (m) { return "Показать все (" + m[1] + ")"; }
    },
    {
      regex: /^(\d+)\s+conversations?$/i,
      replace: function (m) { return m[1] + " диалог(ов)"; }
    },
    {
      regex: /^(\d+)\s+projects?$/i,
      replace: function (m) { return m[1] + " проект(ов)"; }
    },
    {
      regex: /^(\d+)\s+tasks?$/i,
      replace: function (m) { return m[1] + " задач(и)"; }
    },
    {
      regex: /^(\d+)\s+files? changed$/i,
      replace: function (m) { return "Изменено файлов: " + m[1]; }
    },
    {
      regex: /^(\d+)\s+agents? running$/i,
      replace: function (m) { return "Запущено агентов: " + m[1]; }
    },
    {
      regex: /^(\d+)\s+of\s+(\d+)$/i,
      replace: function (m) { return m[1] + " из " + m[2]; }
    },
    {
      regex: /^(\d+)\s+items?$/i,
      replace: function (m) { return m[1] + " эл."; }
    },
    {
      regex: /^(\d+) tools? enabled$/,
      replace: function (m) { return "Включено инструментов: " + m[1]; }
    },
    {
      regex: /^(\d+) tools? disabled$/,
      replace: function (m) { return "Отключено инструментов: " + m[1]; }
    },
    {
      regex: /^See (\d+) more$/,
      replace: function (m) { return "Ещё " + m[1]; }
    },
    {
      regex: /^Inherits your Global Permissions when working (.+)\.$/,
      replace: function (m) { return "Наследует глобальные разрешения при работе " + (DICT[m[1]] || m[1]) + "."; }
    },
    // Короткое «сколько прошло» в списке диалогов: 6m, 17h, 19d. Регистр важен: «6M» — это не минуты.
    {
      regex: /^(\d+)(m|h|d|w|mo|y)$/,
      replace: function (m) {
        const UNITS = { m: "мин", h: "ч", d: "д", w: "нед", mo: "мес", y: "г" };
        return m[1] + " " + UNITS[m[2]];
      }
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

    const startSpace = text.match(/^\s*/)[0];
    const endSpace = text.match(/\s*$/)[0];

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
      // INPUT и TEXTAREA в IGNORE_TAGS, чтобы не трогать набранный текст. Но их подсказки
      // (placeholder, title) переводить нужно, поэтому для полей проверяем только предков.
      const isField = node.tagName === 'INPUT' || node.tagName === 'TEXTAREA';
      if (isIgnored(isField ? node.parentElement : node)) return;

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
          if (['placeholder', 'title', 'aria-label', 'data-tooltip', 'data-title', 'data-tip'].includes(m.attributeName)) {
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
      attributeFilter: ['placeholder', 'title', 'aria-label', 'data-tooltip', 'data-title', 'data-tip']
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
