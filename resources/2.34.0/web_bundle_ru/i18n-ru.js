/**
 * Antigravity 2.0 Comprehensive Russian Localization Engine
 * Автоматический перевод пользовательского интерфейса на русский язык.
 */
(function () {
  'use strict';

  const DICT = {
  // --- Context menu additions ---
  "Reveal in File Explorer": "Показать в проводнике",
  "Open in Cider": "Открыть в Cider",
  "Archive Project": "Архивировать проект",
  "Sort By": "Сортировка",
  "Open in SSH Host": "Открыть на SSH-сервере",

  // --- Antigravity 2.33.0 & 2.32.2 New UI Strings and HTTP Errors ---
  "Connect to SSH Host": "Подключиться к SSH-серверу",
  "Connect to SSH Host…": "Подключиться к SSH-серверу…",
  "Open SSH Host": "Открыть SSH-сервер",
  "SSH Host…": "SSH-сервер…",
  "Insert into main conversation": "Вставить в основной диалог",
  "Unarchive the main conversation to insert": "Разархивируйте основной диалог для вставки",
  "Promote subagent to Full View": "Развернуть подагента на весь экран",
  "Side Question": "Боковой вопрос",
  "Side Questions": "Боковые вопросы",
  "Nord": "Nord",
  "Tokyo Night": "Tokyo Night",
  "Everforest Light": "Everforest Светлая",
  "Everforest Dark": "Everforest Тёмная",
  "This site can’t be reached": "Не удаётся получить доступ к сайту",
  "This page isn’t working": "Страница не работает",
  "The server could not find the requested page.": "Серверу не удалось найти запрошенную страницу.",
  "The server is currently unable to handle this request.": "Сервер в данный момент не может обработать этот запрос.",
  "The server refused to connect.": "Сервер отклонил подключение.",
  "The server took too long to respond.": "Сервер слишком долго не отвечает.",
  "Bad request": "Некорректный запрос",
  "Bad Request": "Некорректный запрос",
  "HTTP error: Bad request": "Ошибка HTTP: Некорректный запрос (400)",
  "HTTP error: Too many requests": "Ошибка HTTP: Слишком много запросов (429)",
  "HTTP error: Forbidden": "Ошибка HTTP: Доступ запрещён (403)",
  "HTTP error: Internal server error": "Ошибка HTTP: Внутренняя ошибка сервера (500)",
  "HTTP error: Bad gateway": "Ошибка HTTP: Ошибка шлюза (502)",
  "HTTP error: Gateway timeout": "Ошибка HTTP: Время ожидания шлюза истекло (504)",
  "HTTP error: Not found": "Ошибка HTTP: Не найдено (404)",
  "HTTP error: Request timeout": "Ошибка HTTP: Время ожидания запроса истекло (408)",
  "Saved setup routine": "Сценарий настройки сохранён",
  "Open in settings": "Открыть в настройках",
  "Setting up environment": "Настройка окружения",

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
  "Only Unread": "Только непрочитанные",
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
  "Sign in": "Войти в аккаунт",
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
  "Accent": "Цвет акцента",
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
  "Delete MCP Server": "Удалить сервер MCP",
  "Fix with Agent": "Исправить с агентом",
  "See more in Plugins": "Подробнее в Плагинах",
  "See less in Plugins": "Скрыть в Плагинах",
  "Plugin update required": "Требуется обновление плагина",
  "Unnamed MCP Server": "Безымянный сервер MCP",
  "Managed by plugin": "Управляется плагином",
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
  // Уровень «усилия» модели в выборе модели
  "Low": "Низкий",
  "Medium": "Средний",
  "High": "Высокий",
  "Extra": "Очень высокий",
  "Max": "Максимальный",
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
  // Кнопка «Modified in N projects»: число и « projects» — отдельные куски текста, шаблон (\d+) projects их не видит.
  "projects": "проектах",
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
  "Connect to your managed Looker MCP server to explore data, run saved Looks, build dashboards, and validate LookML.": "Подключение к управляемому MCP-серверу Looker: исследование данных, запуск сохранённых отчётов Look, создание дашбордов и проверка LookML.",

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
  "Run all commands without restrictions.": "Выполнять все команды без ограничений.",
  "Waiting for user input": "Ожидание ответа пользователя",
  "Other (write your answer)": "Другое (свой вариант)",
  // Приставка перед «N вопросов» (сами вопросы — шаблон в rules.js)
  "Asking": "Задаёт",
  "Asked": "Задал",
  "Worktrees are available for Git repositories": "Рабочие деревья доступны для Git-репозиториев",
  "Worktrees are not available for this project": "Рабочие деревья недоступны для этого проекта",
  "Local Checkout": "Локально",
  // Настройки: встроенный браузер и субагент браузера
  "Built-in Browser": "Встроенный браузер",
  "External Browser": "Внешний браузер",
  "Configure link opening and built-in browser preferences.": "Настройка открытия ссылок и встроенного браузера.",
  "Side Panel Preview": "Предпросмотр в боковой панели",
  "Configure link opening and side panel preview preferences.": "Настройка открытия ссылок и предпросмотра в боковой панели.",
  "Open Links In": "Где открывать ссылки",
  "Choose where links open by default when clicked.": "Где по умолчанию открываются ссылки при нажатии.",
  "Browser Subagent": "Субагент браузера",
  // Хвост фразы «Configure the browser subagent. It requires Google Chrome to be installed…»
  "to be installed. The browser subagent can be invoked by typing /browser in the conversation input box.": "— установите его, если ещё нет. Субагент вызывается командой /browser в поле ввода.",
  // Горячие клавиши
  "New Tab": "Новая вкладка",
  "Reopen Closed Tab": "Открыть закрытую вкладку",
  "Move Conversation Up": "Переместить диалог вверх",
  "Move Conversation Down": "Переместить диалог вниз",
  "Navigation": "Навигация",
  "Conversation": "Диалог",
  "Layout Controls": "Управление панелями",
  // Меню ⋮ в чате и его подменю
  "Pin": "Закрепить",
  "Unpin": "Открепить",
  "Archive": "Архивировать",
  "Restore": "Восстановить",
  "Split": "Разделить",
  "Fork": "Ответвить",
  "Share": "Поделиться",
  "Split Right": "Разделить вправо",
  "Split Down": "Разделить вниз",
  "Replace with New": "Заменить новым",
  "Remove from Split": "Убрать из разделения",
  "Conversation Name": "Название диалога",
  "Mark Unread": "Отметить как непрочитанное",
  "Mark Read": "Отметить как прочитанное",
  // Вкладка артефакта (план агента task.md) и её меню
  "Task": "Задача",
  "Export Artifact": "Экспортировать артефакт",
  "Saved!": "Сохранено!",
  "Export as PDF": "Экспорт в PDF",
  "Toggle sidebar": "Показать/скрыть боковую панель",
  // Панель обзора
  "Review": "Проверка",
  "Customize Sections": "Настроить разделы",
  "Background Commands": "Фоновые команды",
  "Goals": "Цели",
  "Documents": "Документы",
  "Links": "Ссылки",
  "Modified Files": "Изменённые файлы",
  // Подсказка к квоте Argon приходит с сервера, текст взят со скриншота
  "For paid Pro plans, Argon quota is separate. Higher Argon quota (included as part of the larger Gemini quota bucket) is available on Ultra plans.": "На платных тарифах Pro квота Argon отдельная. Увеличенная квота Argon (в составе общей квоты Gemini) доступна на тарифах Ultra.",

  // --- Antigravity 2.29.0 New UI Strings ---
  // Боковые вопросы (Side questions)
  "Ask a side question without interrupting the main conversation": "Задать боковой вопрос, не прерывая основной диалог",
  "Stop side question": "Остановить боковой вопрос",
  "Stop Side Question": "Остановить боковой вопрос",
  "Failed to start side question": "Не удалось запустить боковой вопрос",
  "Failed to send side question": "Не удалось отправить боковой вопрос",
  "Promote to conversation": "Превратить в диалог",
  "Promote to Conversation": "Превратить в диалог",
  "Cannot promote while side question is running": "Нельзя превратить в диалог, пока выполняется боковой вопрос",
  "Cannot promote during Battle Mode — end the battle first": "Нельзя превратить в диалог в режиме битвы — сначала завершите битву",
  "Side Question": "Боковой вопрос",
  "Battle Mode": "Режим битвы",

  // Вкладки и панели
  "Close Tabs to the Left": "Закрыть вкладки слева",
  "Toggle Side Panel": "Показать/скрыть боковую панель",
  "Toggle Terminal Panel": "Показать/скрыть панель терминала",
  "Terminal Panel": "Панель терминала",
  "The aux pane is not supported here": "Боковая панель здесь не поддерживается",
  "UI Extension (SidePanel)": "Расширение интерфейса (боковая панель)",

  // Темы оформления
  "Legacy Dark": "Классическая тёмная",
  "Legacy Light": "Классическая светлая",

  // Автоматизации и расписание
  "Add schedule": "Добавить расписание",
  "Add trigger": "Добавить триггер",
  "Change schedule": "Изменить расписание",
  "Edit schedule and model": "Изменить расписание и модель",
  "Custom schedule": "Своё расписание",
  "Schedule type": "Тип расписания",
  "All runs": "Все запуски",
  "No runs yet": "Запусков пока нет",
  "Loading runs…": "Загрузка запусков…",
  "Last run": "Последний запуск",
  "Next run": "Следующий запуск",
  "No upcoming run.": "Нет запланированных запусков.",
  "Paused.": "На паузе.",
  "Paused. Resume it to schedule the next run.": "На паузе. Возобновите для планирования следующего запуска.",
  "How often": "Как часто",
  "Repeat every": "Повторять каждые",
  "Repeat unit": "Единица повтора",
  "Number of hours": "Количество часов",
  "Every day": "Каждый день",
  "Every hour": "Каждый час",
  "Every week": "Каждую неделю",
  "Every weekday": "Каждый будний день",
  "Day of the month": "День месяца",
  "Day of the week": "День недели",
  "When it runs": "Когда запускается",
  "When should it run?": "Когда запускать?",
  "When something happens": "Когда что-то происходит",
  "Where it runs": "Где запускается",
  "Where should it run?": "Где запускать?",
  "Runs a command": "Выполняет команду",
  "Runs as": "Запускается как",
  "Runs remotely": "Выполняется удалённо",
  "Remote only": "Только удалённо",
  "On a schedule": "По расписанию",
  "Creates a local automation that runs on this computer": "Создаёт локальную автоматизацию на этом компьютере",
  "Connect an account so the agent can run automations.": "Подключите аккаунт, чтобы агент мог запускать автоматизации.",
  "Run a prompt on a schedule, like a morning summary of yesterday's changes. Runs show up here.": "Запуск промпта по расписанию (например, утренняя сводка изменений за вчера). Запуски отображаются здесь.",
  "What should it do?": "Что должна делать?",
  "What should the agent do on each run?": "Что агент должен делать при каждом запуске?",
  "For example: Morning bug summary": "Например: Утренняя сводка багов",
  "For example: every morning, summarize new bugs assigned to me and anything that changed overnight.": "Например: каждое утро делать сводку новых багов, назначенных на меня, и ночных изменений.",
  "No instructions.": "Нет инструкций.",
  "Remove trigger": "Удалить триггер",
  "Search triggers…": "Поиск триггеров…",
  "Started during": "Начато во время",
  "Started from": "Запущено из",

  // Встроенный браузер (WebContentsView)
  "Address bar suggestions": "Подсказки адресной строки",
  "Search or enter a URL": "Поиск или ввод адреса",
  "Search tabs, files and more": "Поиск вкладок, файлов и др.",
  "Remove from history": "Удалить из истории",
  "Remove from history (Shift+Delete)": "Удалить из истории (Shift+Delete)",
  "Certificate is not valid": "Сертификат недействителен",
  "This site cannot provide a secure connection.": "Этот сайт не может обеспечить безопасное соединение.",
  "This site uses an unsupported TLS protocol or cipher suite.": "Этот сайт использует неподдерживаемый протокол TLS или набор шифров.",
  "Your connection to this site is not fully secure": "Подключение к этому сайту не полностью защищено",
  "Browser is currently being operated by this conversation in another Hub window": "Браузер сейчас управляется этим диалогом в другом окне Hub",
  "Browser steps": "Шаги браузера",
  "Using browser": "Используется браузер",
  "Using browser · Thinking…": "Используется браузер · Размышление…",
  "You're viewing a blank page": "Отображается пустая страница",
  "You're viewing a local or shared file": "Отображается локальный или общий файл",
  "CitC workspace paths cannot be used as a browser download directory": "Пути рабочего пространства CitC нельзя использовать как папку загрузок браузера",

  // Голосовой режим (Voice mode)
  "Voice mode": "Голосовой режим",
  "Voice mode in progress": "Идёт голосовой режим",
  "Voice transcript": "Расшифровка голоса",
  "Live transcript": "Живая расшифровка",
  "Listening. Ask anything.": "Слушаю. Спрашивайте что угодно.",
  "End Voice mode": "Завершить голосовой режим",
  "Microphone open timed out": "Время ожидания микрофона истекло",

  // Опросники и карточки
  "Collapse questionnaire": "Свернуть опросник",
  "Collapse Questionnaire": "Свернуть опросник",
  "Expand questionnaire": "Развернуть опросник",
  "Expand Questionnaire": "Развернуть опросник",
  "Next card": "Следующая карточка",
  "Previous card": "Предыдущая карточка",

  // Превью и медиа
  "Open Mermaid diagram preview": "Открыть предпросмотр диаграммы Mermaid",
  "Open image preview": "Открыть предпросмотр изображения",
  "Open video preview": "Открыть предпросмотр видео",
  "Failed to open media in a new tab:": "Не удалось открыть медиафайл в новой вкладке:",
  "Image exceeds the 20 MB maximum size": "Размер изображения превышает максимум 20 МБ",

  // Очередь сообщений
  "Couldn't edit queued message": "Не удалось изменить сообщение в очереди",
  "Removing the message from the queue…": "Удаление сообщения из очереди…",
  "It was already sent or couldn't be removed from the queue.": "Оно уже отправлено или его не удалось удалить из очереди.",

  // Разное и статус
  "Add filter": "Добавить фильтр",
  "Search filters…": "Поиск фильтров…",
  "Always on": "Всегда включено",
  "Announcements and tips": "Анонсы и подсказки",
  "Authentication required": "Требуется авторизация",
  "Change model": "Сменить модель",
  "Choose…": "Выбрать…",
  "Click to load": "Нажмите для загрузки",
  "Connect GitHub: Run gh auth login in a terminal": "Подключить GitHub: выполните gh auth login в терминале",
  "Conversation Unarchived": "Диалог разархивирован",
  "Conversation limit reached": "Достигнут лимит диалогов",
  "Daily conversation limit reached": "Достигнут дневной лимит диалогов",
  "Daily environment time used": "Использовано дневное время окружения",
  "Could not apply the selected permissions.": "Не удалось применить выбранные права.",
  "Could not start.": "Не удалось запустить.",
  "Create a project first.": "Сначала создайте проект.",
  "Document head unavailable": "Заголовок документа недоступен",
  "Hide earlier steps": "Скрыть предыдущие шаги",
  "Marketplace notice": "Уведомление Маркетплейса",
  "One or more, comma-separated": "Один или несколько через запятую",
  "Only for": "Только для",
  "Pull Requests": "Pull Requests",
  "Rate limited": "Превышен лимит запросов",
  "Remote agents are busy": "Удалённые агенты заняты",
  "Repository access required": "Требуется доступ к репозиторию",
  "Repository not accessible": "Репозиторий недоступен",
  "Request failed": "Запрос не удался",
  "Scrollable table": "Прокручиваемая таблица",
  "Shift+Delete": "Shift+Delete",
  "Thinking…": "Размышление…",
  "Token rejected": "Токен отклонён",
  "Too many environments running": "Запущено слишком много окружений",
  "Untrusted sidecar": "Недоверенный sidecar",
  "What can we get done today?": "Чем займёмся сегодня?",
  // Общие действия и кнопки
  "Accept all": "Принять все",
  "Reject all": "Отклонить все",
  "Delete all": "Удалить все",
  "Permanently delete": "Удалить навсегда",
  "Remove from list": "Удалить из списка",
  "Select all in": "Выбрать всё в",
  "Close downloads": "Закрыть загрузки",
  "Cancel download": "Отменить загрузку",
  "Open In": "Открыть в",
  "Show in folder": "Показать в папке",
  "Stop Task": "Остановить задачу",
  "Expand message": "Развернуть сообщение",
  "Copy transcript": "Скопировать стенограмму",
  "Copied transcript": "Стенограмма скопирована",
  "Copy gh auth login command": "Скопировать команду gh auth login",
  "Dismiss microphone warning": "Скрыть предупреждение о микрофоне",
  "Switch mic": "Сменить микрофон",

  // Встроенный браузер и WebContentsView
  "Allow remote debugging for this browser instance": "Разрешить удалённую отладку для этого окна браузера",
  "Folder where files downloaded in the built-in browser are saved.": "Папка, куда сохраняются файлы, скачанные во встроенном браузере.",
  "Download Location": "Место для загрузок",
  "Downloads, in progress": "Загрузки, выполняются",
  "No recent downloads": "Нет недавних загрузок",
  "Clear visited URLs and autocomplete suggestions from the built-in browser.": "Очистить историю переходов и подсказки автозаполнения во встроенном браузере.",
  "Clear visited URLs and autocomplete suggestions from side panel preview.": "Очистить историю переходов и подсказки автозаполнения в предпросмотре боковой панели.",
  "Browsing History": "История браузера",
  "Browser Use": "Использование браузера",
  "Password Prompt Blocked": "Запрос пароля заблокирован",
  "Password prompt blocked to prevent a Chrome Password Alert reset.": "Запрос пароля заблокирован во избежание сброса предупреждения о пароле Chrome.",
  "Attackers might be able to see the images you're looking at on this site and trick you by modifying them.": "Злоумышленники могут увидеть изображения, которые вы просматриваете на этом сайте, и подменить их.",
  "This page says": "Страница сообщает",
  "Pressing key": "Нажатие клавиши",
  "Switching tabs": "Переключение вкладок",

  // Голосовой режим и аудио
  "Start Voice mode": "Включить голосовой режим",
  "Mute Voice Mic": "Отключить микрофон голоса",
  "Mute Voice Speaker": "Отключить звук голоса",
  "Input device for voice mode and dictation.": "Устройство ввода для голосового режима и диктовки.",
  "Using system default microphone": "Используется системный микрофон по умолчанию",
  "No mic audio detected": "Звук с микрофона не обнаружен",
  "How loud Antigravity's voice is.": "Громкость голоса Antigravity.",
  "Voice speed": "Скорость голоса",
  "The voice used in Voice mode. Powered by Gemini Live.": "Голос, используемый в голосовом режиме. На базе Gemini Live.",
  "Powered by Gemini Live ·": "На базе Gemini Live ·",
  "Save audio recordings": "Сохранять аудиозаписи",
  "Delete all recordings?": "Удалить все записи?",
  "No recordings": "Нет записей",
  "Nothing said yet": "Пока ничего не сказано",
  "Clear and friendly": "Чёткий и дружелюбный",
  "Confident and clear": "Уверенный и чёткий",
  "Deep and velvety": "Глубокий и бархатный",
  "Light and precise": "Лёгкий и точный",
  "Warm and approachable": "Тёплый и открытый",
  "Warm and engaging": "Тёплый и выразительный",

  // Панели, вкладки и интерфейс
  "Bottom Panel": "Нижняя панель",
  "Next Side Panel Tab": "Следующая вкладка боковой панели",
  "Previous Side Panel Tab": "Предыдущая вкладка боковой панели",
  "Toggle Maximize Side Panel": "Развернуть/восстановить боковую панель",
  "Choose where terminal sessions appear.": "Выберите, где показывать сессии терминала.",
  "Terminal Placement": "Расположение терминала",
  "Chat Input": "Поле ввода чата",
  "Chat Width": "Ширина чата",
  "Enter to Send": "Отправка по Enter",
  "Send messages with the keyboard's Enter key instead of starting a new line.": "Отправлять сообщения клавишей Enter вместо переноса строки.",
  "Context and Quota Indicator": "Индикатор контекста и квоты",
  "Show how full the context window is next to the send button. Click it for a breakdown and to see your model quota.": "Показывать заполненность окна контекста рядом с кнопкой отправки. Нажмите, чтобы увидеть подробности и квоту модели.",
  "When it fills up, older turns are summarized to make room.": "При заполнении более старые реплики сжимаются, освобождая место.",
  "Conversation Steps": "Шаги диалога",
  "Choose how much detail is shown during a conversation.": "Выберите уровень подробностей во время диалога.",
  "Screen Reader Mode": "Режим программы экранного доступа",
  "Optimize the interface and terminal output for screen readers.": "Оптимизировать интерфейс и вывод терминала для программ экранного доступа.",
  "System UI": "Системный интерфейс",
  "Section header:": "Заголовок раздела:",
  "See less in Bundles": "Показывать меньше в наборах",
  "Antigravity Interactive HTML": "Интерактивный HTML Antigravity",
  "Mermaid diagram": "Диаграмма Mermaid",
  "Failed to render diagram": "Не удалось отрисовать диаграмму",

  // Диалоги и задачи
  "New Conversation Button": "Кнопка «Новый диалог»",
  "Which workspace the New Conversation button and keyboard shortcut start you in.": "В какой рабочей области вас запускает кнопка нового диалога и сочетание клавиш.",
  "Last Workspace": "Последняя рабочая область",
  "Reuse your last workspace.": "Использовать последнюю рабочую область повторно.",
  "Start without a workspace, for general questions.": "Начать без рабочей области для общих вопросов.",
  "Work in a New Worktree": "Работать в новом рабочем дереве",
  "Create a new workspace from your first message.": "Создать новую рабочую область из первого сообщения.",
  "Other conversation": "Другой диалог",
  "This Conversation": "Этот диалог",
  "Only this conversation uses this preset.": "Этот пресет используется только в этом диалоге.",
  "Conversation details unavailable": "Сведения о диалоге недоступны",
  "Conversation is not open in this Hub window": "Диалог не открыт в этом окне концентратора",
  "No conversation": "Нет диалога",
  "Background tasks and terminals agents left running, across all conversations.": "Фоновые задачи и терминалы, оставленные агентами во всех диалогах.",
  "Nothing is running right now": "Сейчас ничего не запущено",
  "Still running": "Всё ещё выполняется",
  "Couldn’t send. Try again.": "Не удалось отправить. Попробуйте снова.",

  // Проекты, Git, GitHub и Remote
  "Repo default": "По умолчанию для репозитория",
  "Uses your local clone,": "Использует ваш локальный клон,",
  "Clones this repo in a cloud environment": "Клонирует этот репозиторий в облачное окружение",
  "Runs in a cloud environment": "Запускается в облачном окружении",
  "Checking for a local clone": "Проверка наличия локального клона",
  "Keeps your checkout untouched": "Сохраняет ваше рабочее дерево нетронутым",
  "Only stored on your machine.": "Хранится только на вашем компьютере.",
  "Only GitHub repos are included in Remote": "В Remote включаются только репозитории GitHub",
  "Remote Projects": "Удалённые проекты",
  "Search Remote…": "Поиск в Remote…",
  "Failed to create remote project": "Не удалось создать удалённый проект",
  "Error: Artifacts from remote conversations are not available here.": "Ошибка: артефакты из удалённых диалогов здесь недоступны.",
  "Connect GitHub": "Подключить GitHub",
  "Connect GitHub with the GitHub plugin": "Подключите GitHub через плагин GitHub",
  "Authentication required for this GitHub host.": "Для этого узла GitHub требуется авторизация.",
  "Repository not accessible: grant the GitHub app access to this repository": "Репозиторий недоступен: предоставьте приложению GitHub доступ к этому репозиторию",
  "No access to this PR": "Нет доступа к этому PR",
  "Loading Repositories…": "Загрузка репозиториев…",
  "Loading branches…": "Загрузка веток…",
  "Search branches": "Поиск веток",
  "No branches found": "Ветки не найдены",
  "Couldn't load branches": "Не удалось загрузить ветки",
  "Not on a branch": "Не на ветке",
  "No commits yet": "Коммитов пока нет",
  "Open Remote Control": "Открыть Remote Control",
  "Cloud Permissions": "Права доступа в облаке",
  "Remote Permissions": "Удалённые права доступа",
  "Your Remote setting": "Ваша настройка Remote",
  "Your This Computer setting": "Ваша настройка «Этот компьютер»",
  "Configure what the agent can do in local and remote conversations.": "Настройте, что разрешено делать агенту в локальных и удалённых диалогах.",
  "Confirm the command is safe to run outside of the sandbox with full network and disk access.": "Подтвердите, что команду безопасно запускать вне песочницы с полным доступом к сети и диску.",
  "GitHub API rate limit exceeded. Try again shortly.": "Превышен лимит запросов к GitHub API. Повторите попытку позже.",
  "More cloud environments": "Больше облачных окружений",

  // Поиск, маркетплейс, правила, коннекторы
  "Browse rules": "Обзор правил",
  "Search workspace files": "Поиск файлов рабочей области",
  "Search workspace folders": "Поиск папок рабочей области",
  "Search conversations": "Поиск диалогов",
  "Recently opened": "Недавно открытые",
  "Browse Connectors": "Обзор коннекторов",
  "Search connectors": "Поиск коннекторов",
  "Loading connectors…": "Загрузка коннекторов…",
  "No connectors available in this project": "В этом проекте нет доступных коннекторов",
  "Browse MCP resources": "Обзор ресурсов MCP",
  "No resources available": "Нет доступных ресурсов",
  "Needs sign-in": "Требуется вход",
  "Explore other marketplace customizations": "Смотреть другие дополнения в Маркетплейсе",
  "Extension (Antigravity IDE)": "Расширение (Antigravity IDE)",
  "Turned off by your admin": "Отключено вашим администратором",
  "Instructions and tools": "Инструкции и инструменты",
  "Docs, Sheets, Slides, and folders": "Документы, Таблицы, Презентации и папки",
  "Search Google Drive": "Поиск на Google Диске",
  "Google Search": "Поиск Google",
  "Google Chat": "Google Chat",
  "Group Chat": "Групповой чат",
  "Not responding": "Не отвечает",

  // Тарифы и подписка Gemini
  "Choose a Subscription": "Выберите подписку",
  "Use Antigravity through your Gemini subscription.": "Используйте Antigravity через вашу подписку Gemini.",
  "Pay only for the tokens you use, billed through Gemini platform.": "Оплата только за использованные токены с расчётом через платформу Gemini.",

  // Одиночные элементы интерфейса и статусы
  "Downloads": "Загрузки",
  "Subscription": "Подписка",
  "Accessibility": "Специальные возможности",
  "Verbose": "Подробный",
  "Recordings": "Записи",
  "Unarchive": "Разархивировать",
  "Connectors": "Коннекторы",
  "Instructions": "Инструкции",
  "Paused": "На паузе",
  "Untitled": "Без названия",
  "Draft": "Черновик",
  "Merged": "Влит",
  "Closed": "Закрыт",

  // Расход и лимиты
  "Usage": "Расход",
  "Weekly limit": "Недельный лимит",
  "Daily limit": "Дневной лимит",
  "% left": "% осталось",
  "See Activity": "История расхода",
  "Get More AI Credits": "Получить кредиты AI",

  // Окна и управление интерфейсом
  "Minimize": "Свернуть",
  "Maximize": "Развернуть",
  "This Computer": "Этот компьютер",
  "Edit Conversation Title": "Изменить название диалога",

  // Статусы задач и шагов
  "Working": "Работаю",
  "Worked": "Работал",
  "Compacting": "Сжатие контекста",
  "Waiting for your approval": "Ждёт вашего подтверждения",
  "Running command": "Выполняется команда",
  "Exploring": "Изучаю",
  "Rejected": "Отклонено",
  "Canceled": "Отменено",
  "Interrupted": "Прервано",
  "Ran": "Выполнено",

  // Автоматизации (в родительном падеже для шаблонов «Пока нет …», «Нет … по запросу»)
  "automations": "автоматизаций",
  "scheduled tasks": "запланированных задач",
  "Add automation": "Добавить автоматизацию",
  "Add scheduled task": "Добавить запланированную задачу",
  "Refresh all credentials": "Обновить все учётные данные",
  "Sidecar feature is not available.": "Функция sidecar недоступна.",

  // Строка поиска (Find bar)
  "Find": "Найти",
  "No Results": "Нет результатов",
  "No results": "Нет результатов",
  "Match Case (Aa)": "Учитывать регистр (Aa)",
  "Match Case": "Учитывать регистр",
  "Match case": "Учитывать регистр",
  "Match Whole Word (ab)": "Слово целиком (ab)",
  "Match Whole Word": "Слово целиком",
  "Match whole word": "Слово целиком",
  "Use Regular Expression (.*)": "Использовать регулярные выражения (.*)",
  "Use Regular Expression": "Использовать регулярные выражения",
  "Use regular expression": "Использовать регулярные выражения",
  "Previous Match (Shift+Enter)": "Предыдущее совпадение (Shift+Enter)",
  "Next Match (Enter)": "Следующее совпадение (Enter)",
  "Previous match": "Предыдущее совпадение",
  "Next match": "Следующее совпадение",

  // Меню и управление diff
  "View Split Diff": "Раздельный вид diff",
  "View Stacked Diff": "Единый вид diff",
  "Hide Whitespace Changes": "Скрыть изменения пробелов",
  "Show Whitespace Changes": "Показать изменения пробелов",
  "Collapse Diffs": "Свернуть diff",
  "Expand Diffs": "Развернуть diff",
  "Viewing Diff": "Просмотр diff",
  "View File": "Просмотреть файл",

  // Контроль версий (Git)
  "Changes": "Изменения",
  "Commit": "Зафиксировать",
  "Amend": "Дополнить коммит",
  "Push": "Отправить",
  "Discard": "Отменить",
  "Commit staged changes": "Зафиксировать индексированные изменения",
  "Stage and commit all changes": "Индексировать и зафиксировать все изменения",
  "Amend staged changes into the current commit": "Дополнить текущий коммит индексированными изменениями",
  "Stage and amend all changes into the current commit": "Индексировать и дополнить текущий коммит всеми изменениями",
  "Describe your changes, or leave empty to auto-generate": "Опишите изменения или оставьте пустым для автогенерации",
  "Generating commit message...": "Генерация описания коммита...",
  "Failed to Generate Commit Message": "Не удалось сгенерировать описание коммита",
  "Committing...": "Фиксация изменений...",
  "Commit succeeded": "Коммит успешно создан",
  "Failed to Commit": "Не удалось зафиксировать",
  "Amending...": "Дополнение коммита...",
  "Amend succeeded": "Коммит успешно дополнен",
  "Failed to Amend": "Не удалось дополнить коммит",
  "Pushing...": "Отправка...",
  "Push succeeded": "Успешно отправлено",
  "Failed to Push": "Не удалось отправить",
  "No changes to amend": "Нет изменений для дополнения",
  "No commit to amend": "Нет коммита для дополнения",
  "No remote configured": "Удалённый репозиторий не настроен",
  "No commits to push": "Нет коммитов для отправки",
  "Resolve conflicts first": "Сначала разрешите конфликты",
  "Created a new branch on GitHub.": "Создана новая ветка на GitHub.",
  "Open a pull request": "Открыть pull request",
  "The branch was pushed to GitLab.": "Ветка отправлена в GitLab.",
  "Open a merge request": "Открыть merge request",
  "Created a new branch on Origin.": "Создана новая ветка в Origin.",
  "The change was pushed to Gerrit.": "Изменение отправлено в Gerrit.",
  "Open the change": "Открыть изменение",
  "The remote shared a link for this push.": "Удалённый сервер предоставил ссылку для этой отправки.",
  "Open link": "Открыть ссылку",

  // Выделение текста и всплывающие действия
  "Quote": "Цитировать",
  "Comment": "Комментировать",
  "Include unstaged changes": "Включить неиндексированные изменения",

  // Ошибки шагов агента и сервера
  "Error": "Ошибка",
  "Error:": "Ошибка:",
  "Error ID": "ID ошибки",
  "Error ID:": "ID ошибки:",
  "Full Error": "Полный текст ошибки",
  "There was a network issue connecting to the server, please try again.": "Произошла ошибка сети при подключении к серверу, повторите попытку.",
  "Unknown: There was a network issue connecting to the server, please try again.": "Неизвестная ошибка: произошла ошибка сети при подключении к серверу, повторите попытку.",
  "Error Unknown: There was a network issue connecting to the server, please try again.": "Ошибка: произошла ошибка сети при подключении к серверу, повторите попытку.",
  "The agent has encountered an internal error.": "Агент столкнулся с внутренней ошибкой.",
  "Invalid tool call": "Недопустимый вызов инструмента",
  "Error while editing": "Ошибка при изменении",
  "Error editing file": "Ошибка изменения файла",
  "Error while viewing": "Ошибка при просмотре",
  "Error viewing file": "Ошибка просмотра файла",
  "Error while editing notebook": "Ошибка при изменении блокнота",
  "Error editing notebook": "Ошибка изменения блокнота",
  "Error while reading notebook": "Ошибка при чтении блокнота",
  "Error reading notebook": "Ошибка чтения блокнота",
  "Error while running command": "Ошибка при выполнении команды",
  "Error while semantic searching": "Ошибка семантического поиска",
  "Error while analyzing directory": "Ошибка при анализе каталога",
  "Error while searching the web": "Ошибка поиска в интернете",
  "Error while running MCP tool": "Ошибка выполнения инструмента MCP",
  "Error during tool execution": "Ошибка при выполнении инструмента",

  // --- Antigravity 2.31.0 New UI Strings ---
  // Координаторы (Coordinators)
  "Coordinator": "Координатор",
  "Coordinators": "Координаторы",
  "New coordinator": "Новый координатор",
  "New Coordinator": "Новый координатор",
  "Create Coordinator": "Создать координатора",
  "Coordinator name": "Имя координатора",
  "Coordinator goal": "Цель координатора",
  "Coordinator settings": "Настройки координатора",
  "No coordinators": "Нет координаторов",
  "What should this coordinator accomplish?": "Что должен выполнять этот координатор?",
  "Couldn't create the coordinator. Try again.": "Не удалось создать координатора. Попробуйте снова.",

  // Боковые вопросы (Side questions)
  "Delete Side Question": "Удалить боковой вопрос",
  "Are you sure you want to delete this side question? This action cannot be undone.": "Вы уверены, что хотите удалить этот боковой вопрос? Это действие нельзя отменить.",
  "Failed to delete side question": "Не удалось удалить боковой вопрос",
  "Cannot promote a subagent's side question": "Нельзя превратить в диалог боковой вопрос субагента",
  "New Side Question": "Новый боковой вопрос",
  "Side Questions": "Боковые вопросы",
  "Send a message in the main conversation first to start a side question": "Сначала отправьте сообщение в основном диалоге, чтобы начать боковой вопрос",

  // Загрузки браузера и данные сайтов
  "Browser downloads": "Загрузки браузера",
  "Allow the browser agent to download a file?": "Разрешить агенту-браузеру скачать файл?",
  "Yes, allow this download": "Да, разрешить эту загрузку",
  "Download files": "Скачивание файлов",
  "Download from": "Скачать с",
  "Cookies and site data": "Файлы cookie и данные сайтов",
  "Clear cookies and site data": "Очистить файлы cookie и данные сайтов",
  "Clearing cookies and site data for": "Очистка файлов cookie и данных сайтов для",
  "Site data cleared for": "Данные сайта очищены для",
  "Could not clear site data for": "Не удалось очистить данные сайта для",
  "Back to safety": "Вернуться в безопасность",
  "Attackers might be trying to steal your information from": "Злоумышленники могут пытаться похитить ваши данные с",
  "Your connection is not private": "Подключение не защищено",

  // Микрофон и голос
  "Allow microphone access to start Voice": "Разрешите доступ к микрофону, чтобы включить голос",
  "Microphone blocked": "Микрофон заблокирован",
  "Microphone blocked in browser site settings.": "Микрофон заблокирован в настройках сайта в браузере.",
  "Microphone blocked in system settings.": "Микрофон заблокирован в настройках системы.",
  "Microphone blocked. Allow in": "Микрофон заблокирован. Разрешите в",
  "Microphone didn't respond.": "Микрофон не ответил.",
  "Microphone is in use or unavailable.": "Микрофон занят или недоступен.",
  "No microphone found. Connect one.": "Микрофон не найден. Подключите его.",
  "Your sign-in needs an update. Sign in again to use Voice.": "Требуется обновить вход. Войдите снова, чтобы использовать голос.",
  "Agent said": "Агент сказал",
  "You said": "Вы сказали",

  // Приветствия и онбординг
  "Hey there, what should we build today?": "Привет! Что будем создавать сегодня?",
  "Good to see you. What's next?": "Рад вас видеть. Что делаем дальше?",
  "Welcome back. Where should we pick up?": "С возвращением. С чего продолжим?",
  "Welcome to": "Добро пожаловать в",
  "A few things to know, and a couple settings to review.": "Несколько моментов, о которых стоит знать, и пара настроек для проверки.",
  "Let's tailor the experience for you. What best describes your work?": "Давайте настроим всё под вас. Что лучше всего описывает вашу работу?",
  "Built to help, not hurt": "Создано помогать, а не мешать",
  "You are in control": "Вы контролируете процесс",
  "Optimized for you": "Оптимизировано для вас",
  "Stay up to date.": "Будьте в курсе обновлений.",
  "Sign up for newsletters, tips and tricks, and other notifications about": "Подпишитесь на новости, советы и другие уведомления о",

  // Авторизация кодом
  "Authorization code": "Код авторизации",
  "Paste authorization code": "Вставить код авторизации",
  "Paste a code instead": "Вставить код вместо этого",
  "Submit code": "Отправить код",
  "Trouble signing in? Enter authorization code": "Проблемы со входом? Введите код авторизации",
  "Switched to authorization code sign-in": "Переключено на вход по коду авторизации",
  "Authorization code was rejected. Paste a fresh code and try again.": "Код авторизации отклонён. Вставьте актуальный код и попробуйте снова.",
  "Authorization code sign-in is unavailable in this version.": "Вход по коду авторизации недоступен в этой версии.",
  "Sign in in your browser, then paste the authorization code shown on the callback page.": "Войдите в браузере, а затем вставьте код авторизации со страницы подтверждения.",
  "Copied sign-in link to clipboard": "Ссылка для входа скопирована в буфер обмена",
  "Finish signing in in your browser.": "Завершите вход в браузере.",
  "Sign-in didn't finish. Try again.": "Вход не был завершён. Попробуйте снова.",
  "Account connection was not completed.": "Подключение аккаунта не завершено.",
  "You are logged in using environment credentials and cannot sign out from the application.": "Вы вошли с учётными данными окружения и не можете выйти из приложения.",

  // Интерфейс, фильтры и навигация
  "Chat Layout": "Макет чата",
  "Interface Layout": "Макет интерфейса",
  "Filter files": "Фильтровать файлы",
  "Filter files...": "Фильтровать файлы...",
  "Filter rows": "Фильтровать строки",
  "Filter rows...": "Фильтровать строки...",
  "Clear file filter": "Очистить фильтр файлов",
  "Clear row filter": "Очистить фильтр строк",
  "Find References": "Найти ссылки",
  "Close references": "Закрыть ссылки",
  "Open in tab": "Открыть во вкладке",
  "Open in full conversation": "Открыть в полном диалоге",
  "Keep Open": "Оставить открытым",
  "Choose icon and color": "Выбрать значок и цвет",
  "Dismiss suggestion": "Отклонить подсказку",
  "Missing a repository? Configure on GitHub": "Не хватает репозитория? Настройте на GitHub",
  "Network error. Check your connection and try again.": "Ошибка сети. Проверьте подключение и повторите попытку.",
  "Something went wrong.": "Что-то пошло не так.",
  "Waiting for your answer": "Ожидание вашего ответа",
  "Needs your approval": "Требуется ваше подтверждение",
  "Open Appearance": "Открыть «Внешний вид»",
  "Privacy Settings": "Настройки конфиденциальности",
  "System Settings": "Системные настройки",
  "Link Settings": "Настройки ссылок",
  "Project location": "Расположение проекта",
  "Inspect element to comment": "Выберите элемент для комментария",
  "Inspecting documentation, config, or issues...": "Проверка документации, настроек или задач...",
  "Google One Referral": "Реферальная программа Google One",
  "Invite a Friend": "Пригласить друга",
  "Invite now": "Пригласить",
  "Share your referral link with friends": "Поделитесь реферальной ссылкой с друзьями",
  "Gemini Flash Next": "Gemini Flash Next",

  // --- Antigravity 2.32.1 New UI Strings & Settings ---
  "Delete All Remote Agents Data?": "Удалить все данные удалённых агентов?",
  "Delete All Remote Agents Data": "Удалить все данные удалённых агентов",
  "Delete All Data": "Удалить все данные",
  "This permanently deletes all of your Remote Agents conversations, projects, scheduled tasks, connected plugins and settings, and stops any running remote agents. It can't be undone. Data in the desktop app and your Google account are not affected, and you can keep using Remote Agents afterwards.": "Это навсегда удалит все ваши диалоги, проекты, запланированные задачи, подключённые плагины и настройки удалённых агентов, а также остановит всех запущенных удалённых агентов. Действие нельзя отменить. Данные в приложении и вашем аккаунте Google не будут затронуты, и вы сможете продолжить пользоваться удалёнными агентами.",
  "Permanently delete your remote conversations, projects, scheduled tasks, connected plugins and settings. Data in the desktop app and your Google account are not affected.": "Навсегда удалить ваши удалённые диалоги, проекты, запланированные задачи, подключённые плагины и настройки. Данные в приложении и вашем аккаунте Google не будут затронуты.",
  "Receive product updates, tips, and promotions from Google Antigravity via email.": "Получать новости о продукте, советы и акции от Google Antigravity по электронной почте.",
  "New Conversation in Project": "Новый диалог в проекте",
  "Layout": "Макет",
  "Resources": "Ресурсы",
  "Saved": "Сохранено",
  "A bash script run in your cloud environment after cloning repositories (or configure interactively in chat with /env-setup).": "Bash-скрипт, выполняемый в облачном окружении после клонирования репозиториев (или настройте интерактивно в чате через /env-setup).",
  "Environment Setup Script": "Скрипт настройки окружения",
  "A host can't contain spaces.": "Имя хоста не может содержать пробелы.",
  "A password or secure field is on screen.": "На экране отображается поле пароля или защищённого ввода.",
  "Are you sure you want to delete this hook card?": "Удалить эту карточку хука?",
  "Back to all agents": "Ко всем агентам",
  "Blocked: file type not allowed": "Заблокировано: недопустимый тип файла",
  "Clone did not return a valid folder path.": "Клонирование не вернуло корректный путь к папке.",
  "Connect to SSH Host": "Подключиться к SSH-хосту",
  "Open SSH Host": "Открыть SSH-хост",
  "Couldn't load your SSH hosts": "Не удалось загрузить ваши SSH-хосты",
  "Couldn't load your SSH hosts. You can still type one.": "Не удалось загрузить SSH-хосты. Вы можете ввести адрес вручную.",
  "No hosts in ~/.ssh/config yet": "В ~/.ssh/config пока нет хостов",
  "No matching hosts": "Подходящие хосты не найдены",
  "Hidden hosts": "Скрытые хосты",
  "Hide from this list": "Скрыть из списка",
  "Show in the list again": "Снова показывать в списке",
  "Remove from Recent": "Удалить из недавних",
  "SSH Config": "Конфигурация SSH",
  "SSH Host": "SSH-хост",
  "SSH host": "SSH-хост",
  "Conversation link": "Ссылка на диалог",
  "Couldn't search files": "Не удалось выполнить поиск файлов",
  "Discard comment draft": "Удалить черновик комментария",
  "Resume comment draft": "Восстановить черновик комментария",
  "Resume 1 comment draft": "Восстановить 1 черновик комментария",
  "Reveal in Finder": "Показать в Finder",
  "Show in File Manager": "Показать в файловом менеджере",
  "Enable macOS Permissions": "Включить разрешения macOS",
  "macOS Permissions Ready": "Разрешения macOS настроены",
  "✓ macOS permissions granted": "✓ Разрешения macOS предоставлены",
  "1. Accessibility": "1. Универсальный доступ",
  "2. Screen Recording": "2. Запись экрана",
  "Allowed ✓": "Разрешено ✓",
  "Missing": "Нет доступа",
  "Waiting…": "Ожидание…",
  "Needs relaunch": "Нужен перезапуск",
  "Open System Settings ↗": "Открыть Настройки ↗",
  "Open ↗": "Открыть ↗",
  "Reopen ↗": "Открыть снова ↗",
  "Settings ↗": "Настройки ↗",
  "Relaunch ↻": "Перезапустить ↻",
  "Continue Task →": "Продолжить задачу →",
  "In System Settings, turn on ": "В «Системных настройках» включите ",
  ". If it isn't in the list, drag it in from the small window next to System Settings.": ". Если приложения нет в списке, перетащите его из небольшого окна рядом с «Системными настройками».",
  "In System Settings, click ": "В «Системных настройках» нажмите ",
  ", choose": ", выберите",
  ", then turn it on.": " и включите переключатель.",
  "Already on? Select ": "Уже включено? Выберите ",
  "drag it back in from the small window.": "перетащите его обратно из небольшого окна.",
  " and add it again.": " и добавьте заново.",
  "Relaunch the app once to activate Screen Recording.": "Перезапустите приложение, чтобы активировать запись экрана.",
  "Relaunches the app": "Перезапускает приложение",
  "Enable this plugin to manage its accounts.": "Включите этот плагин, чтобы управлять его аккаунтами.",
  "Enter always submits. This adds a second shortcut.": "Enter всегда отправляет сообщение. Это добавляет второе сочетание клавиш.",
  "Submit Prompt (Alternate to Enter)": "Отправить запрос (вместо Enter)",
  "Failed to download plugins:": "Не удалось скачать плагины:",
  "Failed to unarchive local project": "Не удалось разархивировать локальный проект",
  "File exceeds 512 KB table preview limit.": "Файл превышает лимит 512 КБ для предпросмотра таблицы.",
  "Table exceeds 100 columns.": "В таблице больше 100 столбцов.",
  "Filter agents": "Фильтровать агентов",
  "Filter resources...": "Фильтровать ресурсы...",
  "Focus this tile": "Сфокусироваться на этой плитке",
  "GitHub rejected `GH_TOKEN`. Update or unset it, then restart the app.": "GitHub отклонил `GH_TOKEN`. Обновите или удалите переменную и перезапустите приложение.",
  "GitHub: not signed in": "GitHub: вход не выполнен",
  "Hidden by policy": "Скрыто политикой",
  "Hidden by the preview policy.": "Скрыто политикой предпросмотра.",
  "This app is not allowed in previews.": "Это приложение запрещено для предпросмотра.",
  "This page is not allowed in previews.": "Эта страница запрещена для предпросмотра.",
  "The window title matches a privacy rule.": "Заголовок окна соответствует правилу конфиденциальности.",
  "Jump to Next Prompt": "К следующему запросу",
  "Jump to Previous Prompt": "К предыдущему запросу",
  "Learn more about": "Подробнее о",
  "MCP error": "Ошибка MCP",
  "MCP server error": "Ошибка сервера MCP",
  "View MCP servers": "Просмотреть серверы MCP",
  "No changes to amend": "Нет изменений для добавления в коммит",
  "No commits to push": "Нет коммитов для отправки",
  "Not on a branch": "Не в ветке",
  "Open on another device": "Открыть на другом устройстве",
  "Open on phone": "Открыть на телефоне",
  "Pick up this remote conversation on your phone or in any browser. Scan the QR code or open the link below.": "Продолжите этот удалённый диалог на телефоне или в любом браузере. Отсканируйте QR-код или откройте ссылку ниже.",
  "Pin / Unpin Conversation": "Закрепить / открепить диалог",
  "Resume this agent where it paused": "Продолжить работу агента с места остановки",
  "Run the app against a Linux environment. Connecting relaunches the app into the selected WSL distro.": "Запустить приложение в среде Linux. Подключение перезапустит его в выбранном дистрибутиве WSL.",
  "Windows Subsystem for Linux": "Подсистема Windows для Linux",
  "Show Details": "Показать подробности",
  "Stop all agents": "Остановить всех агентов",
  "Stop this agent": "Остановить агента",
  "Switch To": "Переключиться на",
  "The Hub sent an unexpected response.": "Концентратор вернул неожиданный ответ.",
  "This project was created for": "Этот проект создан для",
  "Toggle Word Wrap": "Переключить перенос строк",
  "Use Default": "Использовать по умолчанию",

  // --- Маркетплейс и описания плагинов ---
  "Featured": "Рекомендуемое",
  "Add": "Добавить",
  "Details": "Подробнее",
  "Connect to Google Workspace, including Docs, Sheets, Slides, Drive, Calendar, and Gmail.": "Подключение к Google Workspace: Документы, Таблицы, Презентации, Диск, Календарь и Gmail.",
  "Search, read, draft, and send emails in Gmail.": "Поиск, чтение, создание черновиков и отправка писем в Gmail.",
  "Build applications and shell workflows with the Gemini Interactions API, Decisions API, Live API, and Gemini API CLI, including text, image, video, and speech generation, managed agents, and real-time multimodal streaming.": "Создание приложений и скриптов с Gemini Interactions API, Decisions API, Live API и Gemini API CLI: генерация текста, изображений, видео и речи, управляемые агенты и потоковая работа в реальном времени.",
  "Develop ideas with context and review documents with fresh eyes.": "Развивайте идеи с учётом контекста и проверяйте документы свежим взглядом.",
  "Accept payments and grow your business. Stripe's official MCP server enables AI agents to manage customers, products, prices, payment links, invoices, subscriptions, and refunds, as well as search Stripe documentation.": "Приём платежей и развитие бизнеса. Официальный сервер MCP Stripe позволяет ИИ-агентам управлять клиентами, товарами, ценами, ссылками на оплату, счетами, подписками и возвратами, а также искать в документации Stripe.",
  "Query Arize AX projects, traces, datasets, and experiments from Antigravity, with skills for tracing, evals, and prompt optimization.": "Запросы к проектам, трассировкам, наборам данных и экспериментам Arize AX из Antigravity, а также навыки для трассировки, оценок и оптимизации промптов.",
  "Teamwork Graph CLI is Atlassian's agent-first interface to your entire work context: Jira issues, Confluence pages, Bitbucket PRs, along with your connected third-party data sources. Purpose-built for coding agents like Antigravity (terminal or desktop), and powered by Atlassian's context graph. Try: \"draft a Jira issue from this PR and link it to the epic.\" Run /twg-setup after install to connect Atlassian Teamwork Graph CLI to Antigravity.": "Teamwork Graph CLI — интерфейс Atlassian для агентов ко всему рабочему контексту: задачам Jira, страницам Confluence, пул-реквестам Bitbucket и подключённым сторонним источникам. Создан специально для агентов разработки вроде Antigravity. После установки выполните /twg-setup для подключения.",
  "Add Auth0 authentication to any app: login, MFA, SSO, Organizations, RBAC, custom domains, and branding. Debug auth errors and migrate from other providers.": "Добавьте аутентификацию Auth0 в любое приложение: вход, MFA, SSO, организации, RBAC, свои домены и брендинг. Отладка ошибок входа и миграция с других провайдеров.",
  "Build and deploy Base44 full-stack apps: CLI project management, JavaScript/TypeScript SDK development, and production troubleshooting skills.": "Создание и публикация full-stack приложений Base44: управление проектами через CLI, разработка на JavaScript/TypeScript SDK и диагностика сбоев в продакшене.",
  "Investigate incidents, check who's on call, and query logs, metrics, traces, errors and RUM in Better Stack. Build dashboards and manage uptime monitors.": "Разбор инцидентов, проверка дежурных и запросы логов, метрик, трассировок, ошибок и RUM в Better Stack. Создание дашбордов и управление мониторами доступности.",
  "Give your agent a real browser: navigate, click, type, screenshot, and extract data from any site, locally or on Browserbase cloud browsers.": "Дайте агенту настоящий браузер: переходы, клики, ввод текста, скриншоты и сбор данных с любых сайтов — локально или в облаке Browserbase.",
  "Create, edit, review, resize, and brand-check Canva designs with the Canva MCP server.": "Создание, редактирование, проверка и изменение размера дизайнов Canva с помощью сервера MCP Canva.",
  "Build, deploy and manage apps on Cloudflare Workers, storage and AI, with platform skills and the Cloudflare API through one MCP server.": "Создание, публикация и управление приложениями в Cloudflare Workers, хранилищах и ИИ через навыки платформы и Cloudflare API в одном сервере MCP.",
  "AI-powered code review, review-comment autofix, and repository configuration, powered by CodeRabbit.": "ИИ-ревью кода, автоисправление замечаний и настройка репозитория на базе CodeRabbit.",
  "Up-to-date documentation lookup. Pull version-specific documentation and code examples directly from source repositories into your coding agent's context.": "Поиск актуальной документации. Загружает документацию под конкретные версии и примеры кода прямо из исходных репозиториев в контекст агента.",
  "Use the official CrowdStrike-hosted MCP server to work across Falcon: detections, cases, threat intel, SIEM, hosts, vulnerabilities, cloud, and more.": "Официальный облачный сервер MCP CrowdStrike для работы с Falcon: инциденты, расследования, аналитика угроз, SIEM, хосты, уязвимости, облако и другое.",
  "Databricks skills for the CLI, Apps, Lakebase, Model Serving, Lakeflow Jobs, Spark Declarative Pipelines, Declarative Automation Bundles (DABs), and classic-to-serverless migration.": "Навыки Databricks для CLI, Apps, Lakebase, Model Serving, Lakeflow Jobs, Spark Declarative Pipelines, DABs и миграции на serverless.",
  "Use Datadog directly in Antigravity through a preconfigured Datadog MCP server. Query logs, metrics, traces, dashboards, and more through natural conversation. This plugin is in preview.": "Работа с Datadog прямо из Antigravity через преднастроенный сервер MCP Datadog: логи, метрики, трассировки и дашборды на естественном языке. Плагин в предварительной версии.",
  "Connect Antigravity to Dropbox to search, inspect, summarize, share, collect uploads, organize folders, and clean up files with confirmation for write actions.": "Подключите Antigravity к Dropbox для поиска, просмотра, сводок, обмена ссылками, сбора файлов и наведения порядка в папках с подтверждением изменений.",
  "Investigate production issues with real Dynatrace data: problems and root causes, logs, metrics, traces, and vulnerabilities, via skills and the MCP server.": "Расследование проблем в продакшене по реальным данным Dynatrace: причины сбоев, логи, метрики, трассировки и уязвимости через навыки и сервер MCP.",
  "Packaged workflows for SCA remediation, AI SAST triage, CI/CD posture, malware response, findings review, Endor Labs setup, and more.": "Готовые сценарии для устранения уязвимостей SCA, разбора AI SAST, проверки CI/CD, реагирования на вредоносный код и настройки Endor Labs.",
  "Turn Figma designs into production code, map components with Code Connect, and create or edit Figma files in Antigravity.": "Превращайте макеты Figma в готовый код, связывайте компоненты через Code Connect и создавайте или правьте файлы Figma в Antigravity.",
  "Query Grafana Cloud metrics, logs, traces and profiles, manage dashboards, alerts and incidents, and ask Grafana Assistant through the hosted MCP server.": "Запросы метрик, логов, трассировок и профилей Grafana Cloud, управление дашбордами, алертами и инцидентами, а также помощь Grafana Assistant через облачный сервер MCP.",
  "The AI notepad for meetings. Connect to your meeting history and use your conversation context to get things done.": "ИИ-блокнот для встреч. Подключите историю созвонов и используйте контекст обсуждений для выполнения задач.",
  "Build and debug pipelines, manage deployments, investigate security findings, and operate Harness with connected tools and reusable workflow skills.": "Создание и отладка пайплайнов, управление релизами, разбор проблем безопасности и работа с Harness через подключённые инструменты и готовые навыки.",
  "Respond to and investigate incidents, manage on-call schedules and escalations, and write runbooks and skills. Bundles the official incident.io MCP server.": "Реагирование и расследование инцидентов, управление графиками дежурств и эскалациями, написание инструкций. Включает официальный сервер MCP incident.io.",
  "Search Intercom conversations, contacts, and companies, spot support trends, and install the Intercom Messenger with secure identity verification.": "Поиск переписок, контактов и компаний в Intercom, анализ трендов поддержки и установка Intercom Messenger с безопасной проверкой подлинности.",
  "Connect your agent to invideo's AI-native video editor. It trims, grades and mixes on a real timeline while you watch every change land.": "Подключите агента к ИИ-видеоредактору invideo: он обрезает, корректирует цвет и сводит звук на реальной шкале времени прямо на ваших глазах.",
  "Search the web and read any page as clean markdown with Keenable, a search engine built for AI agents. Keyless: no signup or API key needed.": "Поиск в интернете и чтение страниц в чистом Markdown через Keenable — поисковик для ИИ-агентов. Без регистрации и API-ключей.",
  "Ask a question of the live web and get a table back. Keenable SELECT runs many searches, reads the pages and extracts the fields you need in one call. Sign in with a Keenable account.": "Задайте вопрос по живому вебу и получите готовую таблицу. Keenable SELECT выполняет серию поисков и извлекает нужные поля за один запрос. Требуется вход в аккаунт Keenable.",
  "Create, run and debug Leapwork Play tests and runlists, build agents, and hand work to Play's AI workflows, right from Antigravity.": "Создание, запуск и отладка тестов и списков прогона Leapwork Play, сборка агентов и передача задач в ИИ-процессы Play прямо из Antigravity.",
  "Real salaries and company levels from Levels.fyi: check if an offer is fair, compare offers, find jobs with pay shown and add your own salary.": "Реальные зарплаты и грейды компаний с Levels.fyi: оценка справедливости оффера, сравнение предложений, поиск вакансий с вилками и добавление своей зарплаты.",
  "The product development system for teams and agents. Manage issues, projects, and documents across your Linear workspace from Antigravity.": "Система разработки продуктов для команд и агентов. Управляйте задачами, проектами и документами в Linear прямо из Antigravity.",
  "Give your AI agent 600,000+ real app screens, and the skills to use them. Includes the Mobbin MCP and a skill that redesigns your screen from patterns real apps ship, in your own design system, with the references behind every change.": "Более 600 000 реальных экранов приложений для вашего агента и навыки работы с ними: Mobbin MCP и редизайн экранов по готовым паттернам в вашей дизайн-системе.",
  "Plan and track work in monday.com from Antigravity: create, update and assign items, write docs, and build forms that turn requests into items.": "Планирование и учёт задач в monday.com из Antigravity: создание и назначение элементов, работа с документами и формами.",
  "Official Antigravity plugin for MongoDB Atlas (hosted MCP Server + Skills). Connect to the MongoDB-hosted Atlas MCP server, explore data, manage collections, optimize queries, generate reliable code, implement best practices, develop advanced features, and more.": "Официальный плагин Antigravity для MongoDB Atlas (облачный сервер MCP и навыки): подключение к Atlas, просмотр данных, управление коллекциями и оптимизация запросов.",
  "Agent skills for Neo4j graph database — write Cypher queries, design graph models, use drivers, run imports, build GraphRAG pipelines, run GDS algorithms, and manage Aura instances.": "Навыки для графовой БД Neo4j: запросы Cypher, проектирование графовых моделей, драйверы, импорт, пайплайны GraphRAG, алгоритмы GDS и управление инстансами Aura.",
  "Build and deploy on Netlify: functions, edge functions, blobs, database, identity, forms, image CDN, caching, and AI Gateway, plus the Netlify MCP server.": "Разработка и публикация на Netlify: функции, edge-функции, хранилище, БД, аутентификация, формы, CDN изображений, кэширование, AI Gateway и сервер MCP Netlify.",
  "Connect Antigravity to your Notion workspace with the Notion MCP server, plus skills for research, documentation, meeting prep, specs, trackers, and project updates.": "Подключите Antigravity к Notion через сервер MCP и навыки для исследований, документации, подготовки встреч, спецификаций, трекеров и отчётов.",
  "Create and send proposals, quotes, and contracts for e-signature. Track signing progress and identify documents that need follow-up.": "Создание и отправка коммерческих предложений, смет и договоров на электронную подпись. Отслеживание статуса подписания.",
  "Search the live web and fetch page content with Parallel's hosted MCP server. Free access with no Parallel account, API key, or Parallel CLI required.": "Поиск в интернете и загрузка содержимого страниц через облачный сервер MCP Parallel. Бесплатно, без аккаунта, API-ключа и CLI.",
  "Agent plugin for PingOne multi-tenant. Includes skills and a remote MCP server that lets AI agents configure and monitor your PingOne environments.": "Плагин для мультиарендного PingOne: навыки и удалённый сервер MCP для настройки и мониторинга окружений PingOne силами ИИ-агентов.",
  "Equip Antigravity with specialized Postman skills for the complete API lifecycle. Discover, design, test, document, mock, monitor, and improve APIs through agent-friendly, filesystem-first workflows.": "Набор навыков Postman для полного жизненного цикла API: поиск, проектирование, тестирование, документирование, моки и мониторинг API.",
  "Set up Qodo, explore code and repository history, review local changes, and resolve pull-request findings directly from Antigravity.": "Настройка Qodo, исследование кода и истории репозитория, проверка локальных правок и исправление замечаний из пул-реквестов прямо в Antigravity.",
  "Deploy, configure, monitor, and troubleshoot apps, databases, and infrastructure on Railway from Antigravity with Railway's agent skill and hosted MCP server.": "Публикация, настройка, мониторинг и отладка приложений, баз данных и инфраструктуры на Railway из Antigravity через навыки и облачный сервер MCP.",
  "SEO workflows on live Semrush data: keyword research, site audits, backlinks, competitor, traffic and market analytics, PPC, and AI brand visibility.": "SEO-сценарии на живых данных Semrush: подбор ключевых слов, аудит сайтов, обратные ссылки, анализ конкурентов и трафика, PPC и видимость бренда для ИИ.",
  "Query your SentinelOne Singularity Console from Antigravity through a self-hosted, read-only Purple AI MCP server. Requires an active console deployment, your console URL, and an API token.": "Запросы к консоли SentinelOne Singularity из Antigravity через локальный сервер MCP Purple AI (только чтение). Требуются активная консоль, её URL и API-токен.",
  "Set up Sentry monitoring, investigate production errors, and configure alerts and releases with expert skills and live context from your Sentry projects.": "Настройка мониторинга Sentry, разбор ошибок в продакшене, настройка уведомлений и релизов с живым контекстом ваших проектов Sentry.",
  "Triage Exabeam New-Scale alerts and cases end to end: gather the evidence, map MITRE, reach a verdict, and record it behind an approval step.": "Полный разбор оповещений и инцидентов Exabeam New-Scale: сбор данных, сопоставление с MITRE, вынесение вердикта и запись с подтверждением.",
  "SonarQube is the AI code quality and security verification platform used by millions of developers to catch bugs, vulnerabilities, and leaked secrets. This plugin enforces those standards in the agent coding loop: 7,500+ distinct issue types, secrets scanning, agentic analysis, and quality gates across 40+ languages.": "Платформа проверки качества и безопасности кода SonarQube: поиск багов, уязвимостей и утечек секретов, более 7 500 типов проблем и контроль качества на 40+ языках прямо в цикле работы агента.",
  "Turn an idea into a website, dashboard, report, or small web tool you can share. Build it in chat or bring your own work, and publish it with Spacefast.": "Превратите идею в сайт, дашборд, отчёт или веб-инструмент, которым можно поделиться. Создавайте в чате и публикуйте через Spacefast.",
  "Official Supabase plugin for Antigravity with Supabase skills and MCP access for project management, database work, auth, storage, and Postgres best practices.": "Официальный плагин Supabase с навыками и доступом MCP для управления проектами, базами данных, аутентификацией, хранилищем и работы с Postgres.",
  "Make your coding agent a better engineer": "Сделайте вашего агента более сильным инженером",
  "Web search, content extraction, website crawling, URL discovery, and deep research for Antigravity via Tavily's hosted MCP server and skills.": "Веб-поиск, извлечение текста, обход сайтов, поиск URL и глубокое исследование через облачный сервер MCP и навыки Tavily.",
  "Official Trello plugin with the Trello MCP server and a skill for boards, lists, cards, checklists, Inbox, and Planner.": "Официальный плагин Trello с сервером MCP и навыком для досок, списков, карточек, чек-листов, Входящих и Планировщика.",
  "Unity's official plugin for Antigravity, with curated skills for game development, monetization, and performance optimization.": "Официальный плагин Unity для Antigravity с подобранными навыками по разработке игр, монетизации и оптимизации производительности.",
  "Build and deploy web apps and AI agents on Vercel with skills for Next.js, AI SDK, and cloud services, plus the official Vercel MCP server.": "Создание и публикация веб-приложений и ИИ-агентов на Vercel с навыками для Next.js, AI SDK, облачных сервисов и официальным сервером MCP Vercel.",
  "Investigate files, URLs, domains and IP addresses with VirusTotal threat intelligence, analysis and submission recovery.": "Проверка файлов, URL, доменов и IP-адресов с помощью аналитики угроз и отчётов VirusTotal.",
  "Search and read your Wispr Flow meeting notes, transcripts, scratchpad notes, and calendar events. Read-only access to your own account.": "Поиск и чтение заметок со встреч, расшифровок, черновиков и событий календаря Wispr Flow (только чтение вашего аккаунта).",
  "Build Wix apps and headless sites, and manage Wix stores, bookings, CMS and more, with Wix CLI skills and the official Wix MCP server.": "Создание приложений и headless-сайтов Wix, управление магазинами, бронированием и CMS с помощью навыков Wix CLI и официального сервера MCP Wix.",
  "Build, publish, and manage WordPress.com and Jetpack-connected sites. Draft posts, edit blocks, check traffic stats, moderate comments, and manage plugins.": "Создание, публикация и управление сайтами WordPress.com и Jetpack: черновики записей, редактирование блоков, статистика трафика, модерация комментариев и плагины.",
  "Connect 9,000+ apps to your AI workflow. Discover, enable, and execute Zapier actions and workflows directly from your client.": "Подключите более 9 000 приложений к ИИ-процессам. Находите, включайте и запускайте действия и сценарии Zapier прямо из клиента.",
  "Manage your Bigin CRM from Antigravity: review pipelines, find contacts and deals, log calls, plan follow-ups, and email customers.": "Управление Bigin CRM из Antigravity: просмотр воронок, поиск контактов и сделок, учёт звонков, планирование задач и переписка с клиентами.",
  "Build on Zoho CRM v8: REST API, Deluge functions, ClientScript, widgets, COQL and connections, with live CRM data through your Zoho MCP server.": "Разработка на Zoho CRM v8: REST API, функции Deluge, ClientScript, виджеты, COQL и подключения с живыми данными через сервер MCP Zoho.",
  "Zoho Desk plugin for Antigravity. Review, prioritize, and update Zoho Desk tickets directly from Antigravity through Zoho Desk MCP and includes a Ticket Prioritization Agent for triage and priority updates.": "Плагин Zoho Desk для Antigravity: просмотр, приоритизация и обновление тикетов через Zoho Desk MCP и встроенный агент сортировки обращений.",
  "Connect Zoho Projects to Antigravity to turn tasks and issues into working code. Access project context, investigate bugs, and update work items as you develop.": "Подключите Zoho Projects к Antigravity, чтобы превращать задачи и баги в готовый код с доступом к контексту проекта и обновлением статусов.",
  "Run Zoho Books from Antigravity: invoicing, bills, banking, journals, projects, items, taxes, customization and automation.": "Работа с Zoho Books из Antigravity: счета, оплаты, банк, журналы, проекты, товары, налоги, настройки и автоматизация.",
  "Open in Side Panel": "Открыть на боковой панели",
  "View Debug": "Просмотр отладки",

  // --- Настройки (Общие) и Swarm ---
  "Knowledge Work": "Работа со знаниями",
  "Simplified interface for research, writing, and everyday tasks.": "Упрощённый интерфейс для исследований, текстов и повседневных задач.",
  "Software Engineering": "Разработка ПО",
  "Full interface for coding, developer tools, and managing agents.": "Полный интерфейс для программирования, инструментов разработки и управления агентами.",
  "Remote": "Удалённо",
  "Controls permissions for remote conversations.": "Управляет разрешениями для удалённых диалогов.",
  "Voice": "Голос",
  "Change": "Изменить",
  "Microphone": "Микрофон",
  "System default": "По умолчанию (система)",
  "Swarm": "Рой агентов",
  "No swarm in this conversation": "В этом диалоге нет роя агентов",
  "Swarms started in this conversation appear here automatically, with their board, members and @mention graph. Start one with": "Запущенные в этом диалоге рои агентов появляются здесь автоматически со своей доской, участниками и графом @упоминаний. Запустите рой командой",
  "Watching for a swarm": "Ожидание роя агентов",
  "Message subagent, @ to mention, / for actions": "Сообщение субагенту, @ для контекста, / для команд",
  "Repo": "Репозиторий",
  "Environment": "Окружение",
  "Project Name": "Название проекта",
  "Archive Conversation": "Архивировать диалог"
};

  function formatTime(str) {
    if (!str) return '';
    // Точку в конце английской фразы убираем: иначе после «ч.» выходит «ч..».
    return str
      .replace(/\.$/, '')
      .replace(/less than a minute/gi, 'меньше минуты')
      .replace(/less than a second/gi, 'меньше секунды')
      .replace(/(\d+)\s+days?/gi, '$1 дн.')
      .replace(/(\d+)\s+hours?/gi, '$1 ч.')
      .replace(/(\d+)\s+minutes?/gi, '$1 мин.')
      .replace(/(\d+)\s+seconds?/gi, '$1 сек.');
  }

  // Окончание по числу: 1 вопрос, 3 вопроса, 5 вопросов.
  function plural(n, one, few, many) {
    const n10 = n % 10, n100 = n % 100;
    if (n10 === 1 && n100 !== 11) return one;
    if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return few;
    return many;
  }

  // Короткая длительность из интерфейса: «1d 21h», «2h 5m», «45s» → «1 д 21 ч», «2 ч 5 мин», «45 с».
  function shortDuration(str) {
    return str
      .replace(/(\d+)d\b/g, "$1 д")
      .replace(/(\d+)h\b/g, "$1 ч")
      .replace(/(\d+)m\b/g, "$1 мин")
      .replace(/(\d+)s\b/g, "$1 с");
  }

  // Куски сводки шагов агента: «Explored file, ran command, edited artifact».
  const STEP_SUMMARY_PARTS = {
    "explored": "просмотрено",
    "explored file": "просмотрен файл",
    "explored files": "просмотрены файлы",
    "explored artifact": "просмотрен артефакт",
    "explored artifacts": "просмотрены артефакты",
    "ran command": "выполнена команда",
    "ran commands": "выполнены команды",
    "edited": "изменено",
    "edited file": "изменён файл",
    "edited files": "изменены файлы",
    "edited artifact": "изменён артефакт",
    "edited artifacts": "изменены артефакты"
  };

  const MONTHS_GENITIVE = {
    January: "января", February: "февраля", March: "марта", April: "апреля",
    May: "мая", June: "июня", July: "июля", August: "августа",
    September: "сентября", October: "октября", November: "ноября", December: "декабря"
  };

  const ERROR_STATUS_PREFIXES = {
    "Canceled": "Отменено",
    "Unknown": "Неизвестная ошибка",
    "Invalid argument": "Недопустимый аргумент",
    "Deadline exceeded": "Превышено время ожидания",
    "Not found": "Не найдено",
    "Already exists": "Уже существует",
    "Permission denied": "Доступ запрещён",
    "Resource exhausted": "Ресурсы исчерпаны",
    "Failed precondition": "Условие не выполнено",
    "Aborted": "Прервано",
    "Out of range": "Вне диапазона",
    "Unimplemented": "Не реализовано",
    "Internal": "Внутренняя ошибка",
    "Unavailable": "Недоступно",
    "Data loss": "Потеря данных",
    "Unauthenticated": "Требуется авторизация"
  };

  const RULES = [
      // --- HTTP Errors & Status Codes (400, etc.) ---
      {
        regex: /^HTTP ERROR\s*(\d+)$/i,
        replace: function (m) {
          const code = m[1];
          const map = {
            '400': 'ОШИБКА HTTP 400 (Некорректный запрос)',
            '401': 'ОШИБКА HTTP 401 (Требуется авторизация)',
            '403': 'ОШИБКА HTTP 403 (Доступ запрещён)',
            '404': 'ОШИБКА HTTP 404 (Страница не найдена)',
            '405': 'ОШИБКА HTTP 405 (Метод не поддерживается)',
            '408': 'ОШИБКА HTTP 408 (Истекло время ожидания)',
            '413': 'ОШИБКА HTTP 413 (Слишком большой запрос)',
            '429': 'ОШИБКА HTTP 429 (Слишком много запросов)',
            '500': 'ОШИБКА HTTP 500 (Внутренняя ошибка сервера)',
            '502': 'ОШИБКА HTTP 502 (Ошибка шлюза)',
            '503': 'ОШИБКА HTTP 503 (Сервис недоступен)',
            '504': 'ОШИБКА HTTP 504 (Время ожидания шлюза истекло)'
          };
          return map[code] || ('ОШИБКА HTTP ' + code);
        }
      },
      {
        regex: /^(.*) could not find the requested page\.?$/i,
        replace: function (m) {
          return m[1] + ' не удалось найти запрошенную страницу.';
        }
      },
      {
        regex: /^(.*) is currently unable to handle this request\.?$/i,
        replace: function (m) {
          return m[1] + ' в данный момент не может обработать этот запрос.';
        }
      },
      {
        regex: /^(.*) refused to connect\.?$/i,
        replace: function (m) {
          return m[1] + ' отклонил подключение.';
        }
      },
      {
        regex: /^(.*) took too long to respond\.?$/i,
        replace: function (m) {
          return m[1] + ' слишком долго не отвечает.';
        }
      },

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
      regex: /^(\d+)\s+of\s+(\d+\+?)$/i,
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
    {
      regex: /^(\d+) questions?$/,
      replace: function (m) { return m[1] + " " + plural(+m[1], "вопрос", "вопроса", "вопросов"); }
    },
    // Одиночное «Edited» не трогаем: это слово есть и в других местах интерфейса.
    {
      regex: /^(?:Explored(?: files?| artifacts?)?|Ran commands?|Edited (?:files?|artifacts?))(?:, (?:ran commands?|edited(?: files?| artifacts?)?))*$/,
      replace: function (m) {
        const text = m[0].split(", ").map(function (part) { return STEP_SUMMARY_PARTS[part.toLowerCase()]; }).join(", ");
        return text.charAt(0).toUpperCase() + text.slice(1);
      }
    },
    // Время до сброса квоты: «Resets in 1d 21h», «Resets in <1m».
    {
      regex: /^Resets in (.+)$/,
      replace: function (m) {
        return "Сброс через " + shortDuration(m[1]);
      }
    },
    // Время работы агента: «Worked for 2h 5m».
    {
      regex: /^Worked for (\d.*)$/,
      replace: function (m) { return "Работал " + shortDuration(m[1]); }
    },
    // Подсказка у диалога в списке: «Updated 1:39», «Updated 5 окт., 1:39» (дата уже по-русски).
    {
      regex: /^Updated (\d.*)$/,
      replace: function (m) { return "Обновлено " + m[1]; }
    },
    // Подзаголовок настроек проекта: слово project/workspace подставляется в фразу.
    {
      regex: /^Manage (\S+) (folders|resources), agent settings, and permissions\.$/,
      replace: function (m) {
        const KIND = { project: "проекта", workspace: "рабочей области" };
        const what = m[2] === "folders" ? "папками" : "ресурсами";
        return "Управление " + what + " " + (KIND[m[1]] || m[1]) + ", настройками агента и разрешениями.";
      }
    },
    // Название лимита приходит с сервера: «Gemini 4 Argon Weekly Limit».
    {
      regex: /^(.+) Weekly Limit$/,
      replace: function (m) { return m[1] + " — недельный лимит"; }
    },
    // Короткое «сколько прошло» в списке диалогов: 6m, 17h, 19d. Регистр важен: «6M» — это не минуты.
    {
      regex: /^(\d+)(m|h|d|w|mo|y)$/,
      replace: function (m) {
        const UNITS = { m: "мин", h: "ч", d: "д", w: "нед", mo: "мес", y: "г" };
        return m[1] + " " + UNITS[m[2]];
      }
    },
    // Скрытие/показ предыдущих шагов браузера: «Show 1 earlier step», «Show 3 earlier steps».
    {
      regex: /^Show (\d+) earlier steps?$/i,
      replace: function (m) {
        const n = parseInt(m[1], 10);
        return "Показать " + (n === 1 ? "1 предыдущий шаг" : n + " " + plural(n, "предыдущий шаг", "предыдущих шага", "предыдущих шагов"));
      }
    },
    // Таймаут навигации в браузере: «Navigation timeout of 30000ms exceeded».
    {
      regex: /^Navigation timeout of (\d+)ms exceeded$/i,
      replace: function (m) {
        return "Превышено время ожидания перехода (" + m[1] + " мс)";
      }
    },
    // Приветствие в диалоге: «Hi Alex, what can we get done today?»
    {
      regex: /^Hi (.+), what can we get done today\?$/i,
      replace: function (m) { return "Привет, " + m[1] + "! Чем займёмся сегодня?"; }
    },
    // Длительность лимита: «5h limit», «1d limit», «30m limit»
    {
      regex: /^(\d+)([smhd]) limit$/i,
      replace: function (m) {
        const units = { s: "с", m: "мин", h: "ч", d: "д" };
        return "Лимит за " + m[1] + " " + (units[m[2].toLowerCase()] || m[2]);
      }
    },
    // Редактирование файла: «Editing main.js»
    {
      regex: /^Editing (.+)$/i,
      replace: function (m) { return "Редактирование " + m[1]; }
    },
    // Свёрнутое описание шага агента: «Ran check deployed assets»
    {
      regex: /^Ran (.+)$/i,
      replace: function (m) { return "Выполнено: " + m[1]; }
    },
    // Код завершения команды: «· Exited with code 1»
    {
      regex: /^[·\u00b7]?\s*Exited with code (-?\d+)$/i,
      replace: function (m) { return "· Код выхода " + m[1]; }
    },
    // Уведомление об изменении тарифа сторонних моделей (Claude)
    {
      regex: /^(.+) is now available on paid Pro and Ultra plans\. Third-party model access will no longer be available on your current plan starting on ([A-Z][a-z]+) (\d{1,2}), (\d{4})\.$/i,
      replace: function (m) {
        const month = MONTHS_GENITIVE[m[2]] || m[2];
        return m[1] + " теперь доступна на платных тарифах Pro и Ultra. Доступ к сторонним моделям на вашем текущем тарифе будет прекращён с " + m[3] + " " + month + " " + m[4] + " г.";
      }
    },
    // Пустой поиск по боковым панелям (автоматизации, запланированные задачи): «No automations matching your search»
    {
      regex: /^No (automations|scheduled tasks) matching your search$/i,
      replace: function (m) {
        const item = m[1].toLowerCase() === "automations" ? "автоматизаций" : "запланированных задач";
        return "Нет " + item + " по запросу";
      }
    },
    // Нет настроенных боковых панелей: «No automations configured.»
    {
      regex: /^No (automations|scheduled tasks) configured\.$/i,
      replace: function (m) {
        const item = m[1].toLowerCase() === "automations" ? "автоматизаций" : "запланированных задач";
        return "Нет настроенных " + item + ".";
      }
    },
    // Дифф изменений с веткой: «All changes since origin/main»
    {
      regex: /^All changes since (.+)$/i,
      replace: function (m) {
        if (DICT[m[0]]) return DICT[m[0]];
        return "Все изменения с " + m[1];
      }
    },
    // Публикация ветки в origin: «Publish feature to origin»
    {
      regex: /^Publish (.+) to origin$/i,
      replace: function (m) {
        return "Опубликовать " + m[1] + " в origin";
      }
    },
    // Ветка опубликована в origin: «Published feature to origin.»
    {
      regex: /^Published (.+) to origin\.$/i,
      replace: function (m) {
        return "Опубликовано " + m[1] + " в origin.";
      }
    },
    // Отправка коммитов: «Push 2 commits to origin/main»
    {
      regex: /^Push (\d+) commits? to (.+)$/i,
      replace: function (m) {
        return "Отправить " + m[1] + " коммит(ов) в " + m[2];
      }
    },
    // Коммиты отправлены: «Pushed 2 commits to origin/main.»
    {
      regex: /^Pushed (\d+) commits? to (.+)\.$/i,
      replace: function (m) {
        return "Отправлено " + m[1] + " коммит(ов) в " + m[2] + ".";
      }
    },
    // Отправлено в ветку: «Pushed to origin/main.»
    {
      regex: /^Pushed to (.+)\.$/i,
      replace: function (m) {
        return "Отправлено в " + m[1] + ".";
      }
    },
    // Коммит создан в ветке: «Committed to main.»
    {
      regex: /^Committed to (.+)\.$/i,
      replace: function (m) {
        return "Зафиксировано в " + m[1] + ".";
      }
    },
    // Коммит дополнен: «Amended commit on main.»
    {
      regex: /^Amended commit on (.+)\.$/i,
      replace: function (m) {
        return "Коммит дополнен в " + m[1] + ".";
      }
    },
    // Предупреждение о force push при дополнении уже отправленного коммита
    {
      regex: /^(.+)\. This commit is already pushed; amending will require a force push\.$/i,
      replace: function (m) {
        const prefix = DICT[m[1]] || m[1];
        return prefix + ". Этот коммит уже отправлен; для дополнения потребуется push с флагом force.";
      }
    },
    // Кнопка комментирования с горячей клавишей: «Comment (Ctrl+/)»
    {
      regex: /^Comment \((.+)\)$/,
      replace: function (m) {
        return "Комментировать (" + m[1] + ")";
      }
    },
    // Кнопка цитирования с горячей клавишей: «Quote (Ctrl+L)»
    {
      regex: /^Quote \((.+)\)$/,
      replace: function (m) {
        return "Цитировать (" + m[1] + ")";
      }
    },
    // Статистика diff в модалке коммита: «244 lines added, 0 lines removed»
    {
      regex: /^(\d+) lines? added, (\d+) lines? removed$/i,
      replace: function (m) {
        return "Добавлено строк: " + m[1] + ", удалено строк: " + m[2];
      }
    },
    // Сжатие контекста с длительностью: «Compacting · 1m 33s», «Compacting · 45s»
    {
      regex: /^Compacting\s*[·\u00b7]\s*(\d.*)$/i,
      replace: function (m) {
        return "Сжатие контекста · " + shortDuration(m[1]);
      }
    },
    // Время размышлений агента: «Thinking for 2s», «Thinking for 1m 5s»
    {
      regex: /^Thinking for (\d.*)$/i,
      replace: function (m) {
        return "Размышление " + shortDuration(m[1]);
      }
    },
    // ID ошибки: «Error ID: 894806b5-...» или «(Error ID: ...)»
    {
      regex: /^(?:Error ID:\s*|ID\s+ошибки:\s*)([a-f0-9-]+)$/i,
      replace: function (m) {
        return "ID ошибки: " + m[1];
      }
    },
    {
      regex: /^\(Error ID:\s*([a-f0-9-]+)\)$/i,
      replace: function (m) {
        return "(ID ошибки: " + m[1] + ")";
      }
    },
    // Ошибки gRPC и сервера с префиксом статуса: «Unknown: ...», «Error Unknown: ...»
    {
      regex: /^(?:Error\s+)?(Canceled|Unknown|Invalid argument|Deadline exceeded|Not found|Already exists|Permission denied|Resource exhausted|Failed precondition|Aborted|Out of range|Unimplemented|Internal|Unavailable|Data loss|Unauthenticated):\s*(.*)$/i,
      replace: function (m) {
        const kind = ERROR_STATUS_PREFIXES[m[1]] || m[1];
        const rest = m[2].trim();
        const translatedRest = (typeof DICT !== 'undefined' && DICT[rest]) ? DICT[rest] : rest;
        return kind + ": " + translatedRest;
      }
    },
    // Версия в верхнем меню: «Version 2.31.0»
    {
      regex: /^Version\s+(\d.*)$/i,
      replace: function (m) {
        return "Версия " + m[1];
      }
    },
    // Короткий подзаголовок настроек проекта/рабочей области (2.32.1+)
    {
      regex: /^Manage (\S+) (folders|resources) and settings\.$/,
      replace: function (m) {
        const KIND = { project: "проекта", workspace: "рабочей области" };
        const what = m[2] === "folders" ? "папками" : "ресурсами";
        return "Управление " + what + " " + (KIND[m[1]] || m[1]) + " и настройками.";
      }
    },
    {
      regex: /^(\d+) models? selected$/,
      replace: function (m) {
        return "Выбрано моделей: " + m[1];
      }
    },
    {
      regex: /^(\d+) hidden hosts?$/,
      replace: function (m) {
        const n = parseInt(m[1], 10);
        return n + " " + plural(n, "скрытый хост", "скрытых хоста", "скрытых хостов");
      }
    },
    {
      regex: /^(\d+) MCP servers? failed to start$/,
      replace: function (m) {
        return "Не удалось запустить серверы MCP: " + m[1];
      }
    },
    {
      regex: /^Are you sure you want to delete the hook "(.+)"\?$/,
      replace: function (m) {
        return "Удалить хук «" + m[1] + "»?";
      }
    },
    {
      regex: /^Created automation "(.+)"\.$/,
      replace: function (m) {
        return "Автоматизация «" + m[1] + "» создана.";
      }
    },
    {
      regex: /^See all \((\d+)\)$/,
      replace: function (m) {
        return "Показать все (" + m[1] + ")";
      }
    },
    {
      regex: /^See (less|more) in (.+)$/,
      replace: function (m) {
        return (m[1] === "less" ? "Свернуть в " : "Ещё в ") + m[2];
      }
    },
    {
      regex: /^Connected to (.+)$/,
      replace: function (m) {
        return "Подключено к " + m[1];
      }
    },
    {
      regex: /^Couldn't connect to (.+)$/,
      replace: function (m) {
        return "Не удалось подключиться к " + m[1];
      }
    },
    {
      regex: /^Hide (.+) from this list$/,
      replace: function (m) {
        return "Скрыть " + m[1] + " из списка";
      }
    },
    {
      regex: /^Remove (.+) from Recent$/,
      replace: function (m) {
        return "Удалить " + m[1] + " из недавних";
      }
    },
    {
      regex: /^Removed (.+) from Recent$/,
      replace: function (m) {
        return m[1] + " удалён из недавних";
      }
    },
    {
      regex: /^(\d+) folders? in this project could not be loaded because their locations are invalid\.$/,
      replace: function (m) {
        return "Не удалось загрузить папки проекта (" + m[1] + "): неверный путь.";
      }
    },
    {
      regex: /^Added MCP server "(.+)", but it failed to start: (.+)$/,
      replace: function (m) {
        return "Сервер MCP «" + m[1] + "» добавлен, но не запустился: " + m[2];
      }
    },
    {
      regex: /^(\d+) pinned conversations?$/,
      replace: function (m) {
        const n = parseInt(m[1], 10);
        return n + " " + plural(n, "закреплённый диалог", "закреплённых диалога", "закреплённых диалогов");
      }
    },
    // Относительное время «2m ago», «5h ago», «3d ago»
    {
      regex: /^(\d+)(s|m|h|d)\s+ago$/i,
      replace: function (m) {
        const units = { s: "с", m: "мин", h: "ч", d: "д" };
        return m[1] + " " + (units[m[2].toLowerCase()] || m[2]) + " назад";
      }
    },
    // Исчерпан 5-часовой лимит (Настройки → Модели)
    {
      regex: /^You have hit your 5-hour limit, so the weekly limit does not currently apply\. Your 5-hour limit will refresh in (.+?)\.?$/i,
      replace: function (m) {
        const t = formatTime(m[1]);
        return "Вы достигли 5-часового лимита, поэтому недельный лимит сейчас не применяется. 5-часовой лимит обновится через " + t + (t.endsWith(".") ? "" : ".");
      }
    },
    {
      regex: /^You have hit your 5-hour limit, it will refresh in (.+?)\. If on a supported paid plan, you can use AI credits in the interim\.?$/i,
      replace: function (m) {
        const t = formatTime(m[1]);
        return "Вы достигли 5-часового лимита, он обновится через " + t + (t.endsWith(".") ? "" : ".") + " На поддерживаемом платном тарифе вы можете пока использовать кредиты AI.";
      }
    },
    // Разрешения и уведомления macOS
    {
      regex: /^Relaunch (.+) to finish Screen Recording\.$/,
      replace: function (m) {
        return "Перезапустите " + m[1] + ", чтобы завершить настройку записи экрана.";
      }
    },
    {
      regex: /^(.+) needs (Accessibility|Screen Recording|both) to use your computer\.$/,
      replace: function (m) {
        const target = m[2] === "Accessibility" ? "доступ к «Универсальному доступу»" : (m[2] === "Screen Recording" ? "разрешение на «Запись экрана»" : "оба разрешения (Универсальный доступ и Запись экрана)");
        return m[1] + " требуется " + target + " для управления компьютером.";
      }
    },
    {
      regex: /^Can't access "(.+)"\. macOS privacy settings are blocking Antigravity from this location\. Allow Antigravity in System Settings > Privacy & Security > Files and Folders \(or Full Disk Access\)\.$/,
      replace: function (m) {
        return "Нет доступа к «" + m[1] + "». Настройки конфиденциальности macOS блокируют доступ Antigravity к этому расположению. Разрешите доступ в «Системные настройки» > «Конфиденциальность и безопасность» > «Файлы и папки» (или «Полный доступ к диску»).";
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

  const seenTextNodes = new WeakMap();

  function translateString(text) {
    if (typeof text !== 'string') return null;
    const trimmed = text.trim();
    if (!trimmed) return null;

    if (/[A-Za-z]/.test(trimmed)) {
      for (let i = 0; i < RULES.length; i++) {
        const match = trimmed.match(RULES[i].regex);
        if (match) {
          const startSpace = text.match(/^\s*/)[0];
          const endSpace = text.match(/\s*$/)[0];
          return startSpace + RULES[i].replace(match) + endSpace;
        }
      }
    }

    if (DICT[trimmed]) {
      const startSpace = text.match(/^\s*/)[0];
      const endSpace = text.match(/\s*$/)[0];
      return startSpace + DICT[trimmed] + endSpace;
    }

    return null;
  }

  function translateNode(node) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {
      const cur = node.nodeValue;
      if (!cur || seenTextNodes.get(node) === cur) return;
      if (isIgnored(node)) {
        seenTextNodes.set(node, cur);
        return;
      }
      const translated = translateString(cur);
      if (translated && translated !== cur) {
        node.nodeValue = translated;
        seenTextNodes.set(node, translated);
      } else {
        seenTextNodes.set(node, cur);
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

      // Модальное окно коммита: 6 текстовых узлов ["Commit ", c, " file", " ", "change(s)", " to"]
      if (node.tagName === 'SPAN' && node.childNodes && node.childNodes.length === 6) {
        const c0 = node.childNodes[0], c1 = node.childNodes[1], c2 = node.childNodes[2],
              c3 = node.childNodes[3], c4 = node.childNodes[4], c5 = node.childNodes[5];
        if (
          c0.nodeType === Node.TEXT_NODE &&
          c2.nodeType === Node.TEXT_NODE &&
          c4.nodeType === Node.TEXT_NODE &&
          c5.nodeType === Node.TEXT_NODE &&
          (c2.nodeValue === ' file' || (c2.nodeValue === ' ' && c5.nodeValue === ' в'))
        ) {
          const n = parseInt(c1.nodeValue, 10) || 0;
          const form =
            n % 10 === 1 && n % 100 !== 11
              ? 'изменённый файл'
              : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)
              ? 'изменённых файла'
              : 'изменённых файлов';
          if (c0.nodeValue !== 'Зафиксировать ') c0.nodeValue = 'Зафиксировать ';
          if (c2.nodeValue !== ' ') c2.nodeValue = ' ';
          if (c3.nodeValue !== '') c3.nodeValue = '';
          if (c4.nodeValue !== form) c4.nodeValue = form;
          if (c5.nodeValue !== ' в') c5.nodeValue = ' в';
          return;
        }
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

    translateNode(document.body || document.documentElement);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserver);
  } else {
    startObserver();
  }

  // Закрепление проектов (папок) вверху боковой панели.
  // Хранилище: постоянный файл app_storage.json через window.nativeStorage (не сбрасывается при смене аккаунта и портов)
  // + localStorage как быстрый синхронный кэш для первого кадра.
  // Формат записи: { id: string, ids: string[], uris: string[], name: string }
  // Позволяет находить и сохранять проект при смене аккаунта по пути к папке на диске и названию.
  (function initPinnedProjects() {
    const STORAGE_KEY = 'antigravity_ru_pinned_projects';
    const listeners = new Set();
    const projectRegistry = new Map();
    let cachedList = null;

    function normalizeUri(uri) {
      if (!uri || typeof uri !== 'string') return null;
      let s = uri.trim();
      try { s = decodeURIComponent(s); } catch {}
      s = s.replace(/\\/g, '/');
      s = s.replace(/^file:\/\/(localhost)?\/?/i, '');
      s = s.replace(/^\/+([a-zA-Z]:)/, '$1');
      s = s.replace(/\/+/g, '/');
      s = s.replace(/\/+$/, '');
      return s.toLowerCase();
    }

    function sanitizeList(raw) {
      if (!Array.isArray(raw)) return [];
      return raw.map((x) => {
        if (x && typeof x === 'object' && x.id) {
          const ids = Array.isArray(x.ids) ? x.ids.filter((id) => typeof id === 'string') : [];
          if (!ids.includes(x.id)) ids.push(x.id);
          return {
            id: x.id,
            ids: ids,
            uris: Array.isArray(x.uris) ? x.uris.filter((u) => typeof u === 'string') : [],
            name: typeof x.name === 'string' ? x.name : ''
          };
        }
        if (typeof x === 'string') {
          return { id: x, ids: [x], uris: [], name: '' };
        }
        return null;
      }).filter(Boolean);
    }

    function readList() {
      if (cachedList !== null) return cachedList;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        cachedList = sanitizeList(parsed);
      } catch {
        cachedList = [];
      }
      return cachedList;
    }

    function notifyListeners() {
      listeners.forEach((fn) => {
        try { fn(); } catch {}
      });
    }

    function writeList(list) {
      cachedList = list;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      } catch {}
      if (typeof window !== 'undefined' && window.nativeStorage && typeof window.nativeStorage.updateItems === 'function') {
        try {
          window.nativeStorage.updateItems({ [STORAGE_KEY]: list }).catch(() => {});
        } catch {}
      }
      notifyListeners();
    }

    // Фоновая гидратация из системного постоянного файла app_storage.json
    function hydrateFromNativeStorage() {
      if (typeof window === 'undefined' || !window.nativeStorage || typeof window.nativeStorage.getItems !== 'function') {
        return;
      }
      window.nativeStorage.getItems().then((items) => {
        if (items && Array.isArray(items[STORAGE_KEY])) {
          const fromDisk = sanitizeList(items[STORAGE_KEY]);
          if (fromDisk.length > 0 || (cachedList && cachedList.length === 0)) {
            cachedList = fromDisk;
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(fromDisk));
            } catch {}
            notifyListeners();
          }
        } else if (cachedList && cachedList.length > 0) {
          window.nativeStorage.updateItems({ [STORAGE_KEY]: cachedList }).catch(() => {});
        }
      }).catch(() => {});
    }

    if (typeof window !== 'undefined' && window.nativeStorage && typeof window.nativeStorage.onChanged === 'function') {
      try {
        window.nativeStorage.onChanged((changes) => {
          if (changes && STORAGE_KEY in changes) {
            const val = changes[STORAGE_KEY];
            const parsed = Array.isArray(val) ? sanitizeList(val) : [];
            cachedList = parsed;
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
            } catch {}
            notifyListeners();
          }
        });
      } catch {}
    }

    hydrateFromNativeStorage();
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hydrateFromNativeStorage);
      }
      setTimeout(hydrateFromNativeStorage, 150);
      setTimeout(hydrateFromNativeStorage, 600);
    }

    // Находит индекс записи в list по id / URI / имени.
    function findIndex(list, projectId, folderUris, name) {
      if (!Array.isArray(list)) return -1;
      const normUris = (folderUris || []).map(normalizeUri).filter(Boolean);
      const normName = name && typeof name === 'string' ? name.trim().toLowerCase() : '';

      // 1. Поиск по UUID (текущий или известный прошлый UUID этого же проекта)
      if (projectId) {
        for (let i = 0; i < list.length; i++) {
          const e = list[i];
          if (!e) continue;
          if (e.id === projectId) return i;
          if (Array.isArray(e.ids) && e.ids.includes(projectId)) return i;
        }
      }

      // 2. Поиск по нормализованному пути к папке (сохранение между разными аккаунтами)
      if (normUris.length > 0) {
        for (let i = 0; i < list.length; i++) {
          const e = list[i];
          if (!e || !e.uris || !e.uris.length) continue;
          const entryUris = e.uris.map(normalizeUri).filter(Boolean);
          const match = normUris.some((u) => entryUris.includes(u));
          if (match) return i;
        }
      }

      // 3. Поиск по точному имени проекта
      if (normName) {
        for (let i = 0; i < list.length; i++) {
          const e = list[i];
          if (!e || !e.name) continue;
          if (e.name.trim().toLowerCase() === normName) return i;
        }
      }

      return -1;
    }

    // Извлечение путей и названия из любого объекта проекта
    window.__ruGetProjectInfo = function(project) {
      if (!project) return null;
      const uris = [];
      function addUri(u) {
        if (!u) return;
        if (typeof u === 'string') {
          const trimmed = u.trim();
          if (trimmed && !uris.includes(trimmed)) uris.push(trimmed);
        } else if (typeof u === 'object') {
          if (typeof u.folderUri === 'string') addUri(u.folderUri);
          if (typeof u.uri === 'string') addUri(u.uri);
          if (u.type) {
            if (typeof u.type === 'string') addUri(u.type);
            if (u.type.case === 'folderUri' && typeof u.type.value === 'string') addUri(u.type.value);
            if (u.type.case === 'gitFolder' && u.type.value) {
              if (typeof u.type.value.folderUri === 'string') addUri(u.type.value.folderUri);
              if (typeof u.type.value === 'string') addUri(u.type.value);
            }
          }
        }
      }

      const resources = project.projectResources && Array.isArray(project.projectResources.resources)
        ? project.projectResources.resources : [];
      for (const r of resources) addUri(r);

      const envs = project.environments && Array.isArray(project.environments.environments)
        ? project.environments.environments : [];
      for (const env of envs) {
        const envRes = env && env.resources && Array.isArray(env.resources.resources) ? env.resources.resources : [];
        for (const r of envRes) addUri(r);
      }

      addUri(project.workspaceUri);
      addUri(project.folderUri);
      addUri(project.rootUri);
      addUri(project.path);
      if (Array.isArray(project.folderUris)) {
        for (const u of project.folderUris) addUri(u);
      }
      if (Array.isArray(project.workspaceUris)) {
        for (const u of project.workspaceUris) addUri(u);
      }

      const name = typeof project.name === 'string' ? project.name.trim() : '';
      const id = typeof project.id === 'string' ? project.id : '';
      const info = { id, uris, name };
      if (id) projectRegistry.set(id, info);
      return info;
    };

    window.__ruRegisterProject = function(project) {
      return window.__ruGetProjectInfo(project);
    };

    window.__ruRegisterProjects = function(projects) {
      if (!Array.isArray(projects)) return;
      for (const p of projects) {
        if (!p) continue;
        if (p.project) window.__ruGetProjectInfo(p.project);
        else if (p.id) window.__ruGetProjectInfo(p);
      }
    };

    window.__ruPinnedProjects = {
      isPinned(id, folderUris, name) {
        const cached = id ? projectRegistry.get(id) : null;
        const uris = folderUris || (cached && cached.uris);
        const pName = name || (cached && cached.name);
        return findIndex(readList(), id, uris, pName) !== -1;
      },
      toggle(id, folderUris, name) {
        if (!id) return;
        const cached = projectRegistry.get(id);
        const uris = folderUris || (cached && cached.uris) || [];
        const pName = name || (cached && cached.name) || '';
        const list = readList().slice();
        const idx = findIndex(list, id, uris, pName);
        if (idx === -1) {
          list.push({ id: id, ids: [id], uris: uris, name: pName });
        } else {
          list.splice(idx, 1);
        }
        writeList(list);
      },
      reorderFromList(orderedIds, uriMap) {
        if (!Array.isArray(orderedIds)) return;
        const list = readList();
        if (list.length <= 1) return;
        const map = uriMap || window.__ruProjectUriCache;
        const next = [];
        for (const id of orderedIds) {
          const info = (map && map.get ? map.get(id) : null) || projectRegistry.get(id);
          const idx = findIndex(list, id, info && info.uris, info && info.name);
          if (idx !== -1) {
            const entry = list[idx];
            if (!next.some((e) => e.id === entry.id)) next.push(entry);
          }
        }
        for (const entry of list) {
          if (!next.some((e) => e.id === entry.id)) next.push(entry);
        }
        if (next.length === list.length && next.some((e, i) => e.id !== list[i].id)) {
          writeList(next);
        }
      },
      sort(ids, uriMap) {
        if (!Array.isArray(ids) || ids.length <= 1) return ids;
        const list = readList();
        if (list.length === 0) return ids;
        const map = uriMap || window.__ruProjectUriCache;
        const pinned = [];
        const rest = [];
        for (const id of ids) {
          const info = (map && map.get ? map.get(id) : null) || projectRegistry.get(id);
          const idx = findIndex(list, id, info && info.uris, info && info.name);
          if (idx !== -1) pinned.push({ id: id, order: idx });
          else rest.push(id);
        }
        if (pinned.length === 0) return ids;
        pinned.sort((a, b) => a.order - b.order);
        return [...pinned.map((x) => x.id), ...rest];
      },
      orderGroups(groups, uriMapOrProjects) {
        if (!Array.isArray(groups)) return { pinned: [], unpinned: [] };
        if (Array.isArray(uriMapOrProjects)) {
          window.__ruRegisterProjects(uriMapOrProjects);
        }
        const list = readList();
        if (list.length === 0) return { pinned: [], unpinned: groups };
        const map = (uriMapOrProjects && typeof uriMapOrProjects.get === 'function')
          ? uriMapOrProjects
          : window.__ruProjectUriCache;
        const pinned = [];
        const unpinned = [];
        let listChanged = false;

        for (const g of groups) {
          if (!g || !g.id || g.id === 'standalone' || g.id === 'all' || g.id === 'outside-of-project') {
            unpinned.push(g);
            continue;
          }
          const info = (map && map.get ? map.get(g.id) : null) || projectRegistry.get(g.id);
          const folderUris = info && info.uris ? info.uris : [];
          const name = (info && info.name) || (g.label && typeof g.label === 'string' ? g.label : '');
          const idx = findIndex(list, g.id, folderUris, name);

          if (idx !== -1) {
            pinned.push({ group: g, order: idx });
            const entry = list[idx];
            let entryChanged = false;
            if (!Array.isArray(entry.ids)) {
              entry.ids = entry.id ? [entry.id] : [];
              entryChanged = true;
            }
            if (g.id && !entry.ids.includes(g.id)) {
              entry.ids.push(g.id);
              entryChanged = true;
            }
            if (g.id && entry.id !== g.id) {
              entry.id = g.id;
              entryChanged = true;
            }
            if (folderUris.length > 0) {
              if (!Array.isArray(entry.uris)) entry.uris = [];
              for (const u of folderUris) {
                if (!entry.uris.includes(u)) {
                  entry.uris.push(u);
                  entryChanged = true;
                }
              }
            }
            if (name && !entry.name) {
              entry.name = name;
              entryChanged = true;
            }
            if (entryChanged) listChanged = true;
          } else {
            unpinned.push(g);
          }
        }

        if (listChanged) {
          writeList(list);
        }
        pinned.sort((a, b) => a.order - b.order);
        return { pinned: pinned.map((x) => x.group), unpinned: unpinned };
      },
      subscribe(fn) {
        if (typeof fn !== 'function') return () => {};
        listeners.add(fn);
        return () => { listeners.delete(fn); };
      }
    };
  })();

  // =========================================================================
  // Подсистема управления пользовательскими промптами (Prompts Manager)
  // Хранилище: постоянный файл app_storage.json через window.nativeStorage
  // + localStorage как быстрый синхронный кэш для первого кадра.
  // =========================================================================
  (function initPromptsManager() {
    const STORAGE_KEY = 'antigravity_ru_prompts_v3';
    const OLD_STORAGE_KEYS = ['antigravity_ru_prompts_v2', 'antigravity_ru_prompts'];
    const listeners = new Set();
    let cachedPrompts = null;

    const DEFAULT_PROMPTS = [
      {
            "id": "prompt-auto-full",
            "title": "Режим: Полная автономная работа",
            "description": "Самостоятельное решение задачи до проверенного результата без промежуточных вопросов.",
            "tags": [
                  "Автономность",
                  "Разработка"
            ],
            "content": "Работай как самостоятельный senior-разработчик. Твоя задача — самостоятельно довести поставленную задачу до законченного, проверенного результата, не перекладывая промежуточные решения на пользователя.\n\n## 1. Изучение проекта\nПеред началом работы:\n- Изучи структуру проекта и назначение основных файлов.\n- Изучи README, документацию, конфигурации и существующие соглашения.\n- Определи используемые технологии, архитектуру и зависимости.\n- Найди существующие реализации, которые связаны с поставленной задачей.\n- Проверь текущее состояние Git и наличие незакоммиченных изменений.\n- Не перезаписывай и не удаляй чужие изменения.\n\n## 2. Планирование\n- Определи конечный результат задачи.\n- Разбей работу на последовательные этапы.\n- Выяви потенциальные риски и зависимости.\n- Выбери наиболее подходящее решение с учётом существующей архитектуры.\n- Не усложняй реализацию без необходимости.\n\n## 3. Самостоятельная реализация\n- Выполняй все необходимые действия самостоятельно.\n- Не запрашивай подтверждение очевидных технических решений.\n- Соблюдай существующие соглашения проекта.\n- Используй уже имеющиеся инструменты и зависимости, если они подходят.\n- Не создавай дублирующую функциональность.\n- Не изменяй несвязанные модули.\n- Не используй временные заглушки вместо полноценной реализации.\n- Не скрывай ошибки пустыми обработчиками, отключением проверок или подавлением исключений.\n\n## 4. Контроль качества\nПосле каждого значимого этапа:\n- Запускай соответствующие проверки.\n- Проверяй результат изменений.\n- Анализируй ошибки и устраняй их до перехода дальше.\n- Проверяй возможные побочные эффекты.\n- Не считай задачу выполненной только потому, что код написан.\n\nЕсли проверка невозможна, обязательно укажи причину.\n\n## 5. Принятие решений\nСамостоятельно принимай решения, если:\n- Они обратимы.\n- Не затрагивают критические данные.\n- Не нарушают публичные контракты.\n- Не требуют дополнительных бизнес-требований.\n\nОстанавливайся и задавай вопрос, если:\n- Не хватает критически важной информации.\n- Есть несколько существенно разных трактовок требований.\n- Действие может привести к потере данных.\n- Требуется доступ, разрешение или действие пользователя.\n- Решение может повлиять на production или внешние системы.\n\n## 6. Финальный отчёт\nПосле завершения предоставь отчёт:\n\n1. **Результат:** что было сделано.\n2. **Изменённые файлы:** список файлов и характер изменений.\n3. **Проверки:** команды, тесты и фактические результаты.\n4. **Проблемы:** что обнаружено и как исправлено.\n5. **Ограничения:** что не удалось проверить или реализовать.\n6. **Остаточные риски:** что потенциально требует дополнительного внимания.\n\nВАЖНО:\nНе заявляй об успешном выполнении без фактической проверки. Не выдумывай результаты команд, тестов и сборки. Доводи задачу до максимально возможного завершённого состояния.",
            "isBuiltin": true
      },
      {
            "id": "prompt-architectural-analysis",
            "title": "Режим: Архитектурный анализ и проектирование",
            "description": "Глубокий анализ задачи, варианты решений, оценка рисков и план до написания кода.",
            "tags": [
                  "Архитектура",
                  "Проектирование"
            ],
            "content": "Работай как Senior Software Architect. До написания какого-либо кода проведи глубокий анализ задачи и предложи обоснованное архитектурное решение.\n\nНа этом этапе ЗАПРЕЩЕНО изменять исходный код, конфигурации и структуру проекта.\n\n## 1. Исследование проекта\n- Изучи архитектуру и структуру проекта.\n- Проанализируй связанные модули и компоненты.\n- Изучи потоки данных, API, интерфейсы и зависимости.\n- Определи существующие архитектурные соглашения.\n- Найди ограничения, технический долг и потенциальные точки отказа.\n- Не делай выводов о системе без изучения соответствующих участков кода.\n\n## 2. Анализ требований\nРазложи задачу на:\n- Функциональные требования.\n- Нефункциональные требования.\n- Бизнес-ограничения.\n- Технические ограничения.\n- Скрытые зависимости.\n- Пограничные случаи (edge cases).\n- Возможные сценарии отказа.\n- Требования к совместимости и обратной совместимости.\n\nЕсли обнаружены неоднозначности, явно перечисли их.\n\n## 3. Варианты архитектуры\nПредложи 2–3 реалистичных варианта решения.\n\nДля каждого укажи:\n- Принцип работы.\n- Какие компоненты и файлы будут затронуты.\n- Преимущества.\n- Недостатки.\n- Сложность реализации.\n- Масштабируемость.\n- Производительность.\n- Риски внедрения.\n- Влияние на существующую архитектуру.\n\nНе предлагай искусственные альтернативы ради количества.\n\n## 4. Рекомендация\nВыбери наиболее подходящий вариант.\n\nОбоснуй выбор с учётом:\n- Текущей архитектуры.\n- Сложности сопровождения.\n- Надёжности.\n- Производительности.\n- Расширяемости.\n- Стоимости дальнейшей разработки.\n\nНе выбирай наиболее сложное решение, если более простое полностью закрывает требования.\n\n## 5. План реализации\nРазбей внедрение на независимые проверяемые этапы.\n\nДля каждого этапа укажи:\n- Цель.\n- Изменяемые компоненты.\n- Конкретные действия.\n- Зависимости от других этапов.\n- Критерии готовности.\n- Способ проверки.\n- Возможные риски.\n\nПродумай миграции данных, совместимость, тестирование и стратегию отката, если они применимы.\n\n## 6. Формат результата\nПредоставь структурированный архитектурный документ:\n\n1. Краткое описание задачи.\n2. Результаты исследования проекта.\n3. Выявленные проблемы и ограничения.\n4. Архитектурные варианты.\n5. Сравнение вариантов.\n6. Рекомендуемое решение.\n7. План реализации.\n8. Стратегия тестирования.\n9. Стратегия отката.\n10. Открытые вопросы и риски.\n\n## 7. Остановка и согласование\nПосле предоставления анализа ОСТАНОВИСЬ.\n\nНе начинай реализацию, не изменяй файлы и не запускай действия, изменяющие проект, пока пользователь явно не согласует выбранное решение.\n\nПосле согласования переходи к реализации строго по утверждённому плану.",
            "isBuiltin": true
      },
      {
            "id": "prompt-technical-audit",
            "title": "Режим: Технический аудит и безопасный рефакторинг",
            "description": "Поиск дефектов, утечек, race conditions и устранение без нарушения контрактов.",
            "tags": [
                  "Аудит",
                  "Качество кода"
            ],
            "content": "Работай как Senior Software Engineer, специализирующийся на качестве, надёжности и сопровождении программного обеспечения.\n\nЦель — обнаружить реальные проблемы в указанном модуле или файлах и устранить их без нарушения существующего поведения и контрактов.\n\n## 1. Первичное исследование\n- Изучи указанные файлы и их зависимости.\n- Найди все места использования исследуемого кода.\n- Изучи публичные интерфейсы, API и контракты вызовов.\n- Определи ожидаемое поведение.\n- Проверь существующие тесты.\n- Зафиксируй исходное состояние проекта.\n- До внесения изменений запусти доступные сборки и тесты.\n\n## 2. Технический аудит\nПроверь следующие категории:\n\n**Корректность:**\n- Логические ошибки.\n- Неверные условия и вычисления.\n- Некорректная обработка null, undefined и пустых значений.\n- Ошибки преобразования и валидации данных.\n- Проблемы с типами.\n\n**Надёжность:**\n- Необработанные исключения.\n- Некорректная обработка ошибок.\n- Race conditions.\n- Deadlocks.\n- Проблемы конкурентного доступа.\n- Утечки памяти и ресурсов.\n- Неправильное управление жизненным циклом объектов.\n\n**Архитектура:**\n- Нарушение принципов разделения ответственности.\n- Сильная связанность компонентов.\n- Дублирование логики.\n- Избыточная сложность.\n- Нарушение существующих архитектурных соглашений.\n\n**Производительность:**\n- Лишние вычисления.\n- Неэффективные циклы и запросы.\n- Избыточные обращения к хранилищу или API.\n- Проблемы с кешированием.\n- Потенциальные узкие места.\n\n**Безопасность:**\n- Небезопасная обработка пользовательских данных.\n- Проблемы авторизации и проверки доступа.\n- Утечки чувствительных данных.\n- Небезопасная работа с внешними входными данными.\n\n## 3. Классификация находок\nДля каждой проблемы укажи:\n- Файл и конкретное место.\n- Описание проблемы.\n- Условия её возникновения.\n- Потенциальные последствия.\n- Критичность: Critical / High / Medium / Low.\n- Рекомендуемый способ исправления.\n\nОтделяй подтверждённые дефекты от потенциальных рисков и субъективных замечаний по стилю.\n\n## 4. Рефакторинг\nПосле аудита:\n- Исправляй подтверждённые проблемы.\n- Удаляй действительно неиспользуемый код.\n- Устраняй дублирование.\n- Упрощай сложную логику без изменения её поведения.\n- Улучшай читаемость и поддерживаемость.\n- Сохраняй публичные API и контракты.\n- Не меняй несвязанные компоненты.\n- Не добавляй зависимости без необходимости.\n- Не выполняй рискованные миграции без согласования.\n\nЕсли изменение может нарушить совместимость, сначала остановись и объясни риск.\n\n## 5. Проверка результата\nПосле изменений:\n- Повтори исходные проверки.\n- Запусти соответствующие тесты.\n- Проверь затронутые сценарии.\n- Добавь тесты для исправленных дефектов, если это уместно.\n- Проверь отсутствие регрессий.\n- Сравни производительность до и после, если оптимизация была целью и существуют воспроизводимые измерения.\n\nНе называй оптимизацию успешной без измерений.\n\n## 6. Финальный отчёт\nПредоставь:\n\n1. Общую оценку состояния модуля.\n2. Список найденных проблем с критичностью.\n3. Список исправленных проблем.\n4. Список изменённых файлов.\n5. Что было отрефакторено.\n6. Результаты проверок до и после.\n7. Замеры производительности, если применимо.\n8. Оставшиеся проблемы и риски.\n\nНе создавай искусственные проблемы ради демонстрации активности. Если код качественный и исправления не нужны — прямо сообщи об этом.",
            "isBuiltin": true
      },
      {
            "id": "prompt-systematic-debugging",
            "title": "Режим: Системная отладка и поиск Root Cause",
            "description": "Воспроизведение, поиск первопричины, минимальное исправление и верификация.",
            "tags": [
                  "Отладка",
                  "Баги"
            ],
            "content": "Работай как Senior Debugging Engineer. Твоя задача — найти первопричину неисправности, доказать её и устранить проблему с минимальным риском побочных эффектов.\n\nГлавный принцип: НЕ МАСКИРУЙ СИМПТОМЫ. Исправляй причину возникновения ошибки.\n\n## 1. Сбор информации\n- Изучи описание проблемы.\n- Изучи stack trace, логи и сообщения об ошибках.\n- Найди соответствующий участок кода.\n- Проанализируй связанные функции, компоненты и зависимости.\n- Изучи историю последних изменений, если она доступна.\n- Определи условия, при которых возникает проблема.\n\nНе делай выводов только по тексту ошибки без анализа контекста.\n\n## 2. Воспроизведение\n- Попробуй воспроизвести проблему.\n- Определи минимальный сценарий её возникновения.\n- Зафиксируй фактическое поведение.\n- Сравни его с ожидаемым поведением.\n- Проверь, воспроизводится ли ошибка стабильно.\n\nЕсли воспроизвести проблему невозможно, зафиксируй это и используй доступные логи, тесты и статический анализ.\n\n## 3. Поиск первопричины\nИсследуй:\n- Неверные входные данные.\n- Ошибки бизнес-логики.\n- Нарушения контрактов между компонентами.\n- Ошибки асинхронного выполнения.\n- Race conditions.\n- Проблемы состояния и жизненного цикла.\n- Ошибки конфигурации.\n- Проблемы внешних API и зависимостей.\n- Ошибки обработки исключений.\n- Регрессии после предыдущих изменений.\n\nСформулируй конкретную гипотезу о root cause.\n\nОбязательно объясни причинно-следственную связь: почему именно эта ошибка приводит к наблюдаемому симптому.\n\n## 4. Проверка гипотезы\n- Выбери минимальный способ проверки.\n- При необходимости добавь временное логирование или диагностический тест.\n- Проверь гипотезу экспериментально.\n- Исключи альтернативные объяснения.\n- Не изменяй несколько независимых компонентов одновременно без необходимости.\n\n## 5. Исправление\n- Устрани подтверждённую первопричину.\n- Внеси минимально необходимое изменение.\n- Не добавляй костыли и искусственные обходные решения.\n- Не отключай проверки и обработку ошибок ради исчезновения симптома.\n- Не затрагивай несвязанную функциональность.\n- Сохраняй существующие API и контракты.\n- Добавь регрессионный тест, воспроизводящий исходную проблему.\n\n## 6. Верификация\nПосле исправления:\n- Повтори первоначальный сценарий воспроизведения.\n- Убедись, что ошибка больше не возникает.\n- Запусти соответствующие тесты.\n- Проверь сборку.\n- Проверь связанные сценарии на регрессии.\n- Удали временные диагностические изменения, если они больше не нужны.\n\nЕсли проверка не пройдена — продолжай исследование, не объявляй задачу выполненной.\n\n## 7. Финальный отчёт\nПредоставь:\n\n1. **Симптом:** что происходило.\n2. **Root cause:** настоящая причина проблемы.\n3. **Доказательство:** как была подтверждена гипотеза.\n4. **Исправление:** что именно изменено.\n5. **Файлы:** список изменённых файлов.\n6. **Регрессионные тесты:** что добавлено или изменено.\n7. **Проверки:** команды и фактические результаты.\n8. **Остаточные риски:** что ещё требует внимания.\n\nНе утверждай, что проблема устранена, если это не подтверждено проверкой.",
            "isBuiltin": true
      },
      {
            "id": "prompt-engineering-standard",
            "title": "Инженерный стандарт (Global Instructions)",
            "description": "Обязательные инженерные правила: факты важнее предположений, минимальный риск, критерии готовности.",
            "tags": [
                  "Стандарт",
                  "Инструкции"
            ],
            "content": "Ты работаешь как опытный автономный инженер. Твоя задача — не просто выполнять команды пользователя, а обеспечивать корректный, надёжный и проверяемый результат.\n\n## ОБЯЗАТЕЛЬНЫЕ ПРАВИЛА\n\n1. ФАКТЫ ВАЖНЕЕ ПРЕДПОЛОЖЕНИЙ.\nНе выдумывай содержимое файлов, результаты тестов, поведение системы и доступные возможности. Если что-то неизвестно — проверь или прямо обозначь неопределённость.\n\n2. СНАЧАЛА ИЗУЧЕНИЕ, ПОТОМ ДЕЙСТВИЯ.\nНе изменяй проект, пока не изучил относящийся к задаче контекст.\n\n3. СОХРАНЯЙ СУЩЕСТВУЮЩУЮ РАБОТУ.\nНе удаляй, не перезаписывай и не откатывай изменения пользователя без необходимости и согласования.\n\n4. МИНИМАЛЬНЫЙ РИСК.\nВыбирай самое простое решение, которое полностью удовлетворяет требованиям. Не усложняй архитектуру без обоснованной необходимости.\n\n5. НЕ ВЫХОДИ ЗА ГРАНИЦЫ ЗАДАЧИ.\nНе изменяй несвязанные файлы, модули, API и поведение системы.\n\n6. НЕ ИМИТИРУЙ РАБОТУ.\nСоздание кода не означает завершение задачи. Проверяй результат реальными командами и тестами.\n\n7. НЕ СКРЫВАЙ ПРОБЛЕМЫ.\nНе отключай тесты, линтеры, типизацию, проверки безопасности и обработку ошибок ради получения успешного результата.\n\n8. УВАЖАЙ ОГРАНИЧЕНИЯ.\nНе выполняй необратимые операции, опасные миграции, удаление данных и действия в production без явного разрешения.\n\n9. САМОСТОЯТЕЛЬНОСТЬ С РАЗУМНЫМИ ГРАНИЦАМИ.\nНе спрашивай разрешения на обычные технические действия. Задавай вопросы только тогда, когда отсутствие ответа может привести к неправильному, опасному или существенно отличающемуся результату.\n\n10. ПРОЗРАЧНОСТЬ.\nСообщай, что именно делаешь, какие решения принимаешь, что проверил и какие ограничения остались.\n\n## КРИТЕРИЙ ЗАВЕРШЕНИЯ\n\nЗадача считается выполненной только тогда, когда:\n- Требуемая функциональность реализована.\n- Изменения соответствуют архитектуре проекта.\n- Нет известных необработанных ошибок, вызванных изменениями.\n- Необходимые тесты и проверки пройдены.\n- Результат соответствует требованиям пользователя.\n- Все непроверенные моменты и ограничения явно обозначены.\n\nНикогда не подменяй фактический результат красивым отчётом.",
            "isBuiltin": true
      }
];

    function sanitizePrompts(raw) {
      if (!Array.isArray(raw)) return [];
      return raw.map((x) => {
        if (!x || typeof x !== 'object') return null;
        const id = typeof x.id === 'string' && x.id.trim() ? x.id : ('prompt-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6));
        const title = typeof x.title === 'string' && x.title.trim() ? x.title.trim() : 'Без названия';
        const description = typeof x.description === 'string' ? x.description.trim() : '';
        const content = typeof x.content === 'string' ? x.content : '';
        const tags = Array.isArray(x.tags)
          ? x.tags.map(t => String(t).trim()).filter(Boolean)
          : (typeof x.tags === 'string' ? x.tags.split(',').map(t => t.trim()).filter(Boolean) : []);
        const isBuiltin = !!x.isBuiltin;
        return { id, title, description, content, tags, isBuiltin };
      }).filter(Boolean);
    }

    function mergeWithUserPrompts(saved) {
      const userCustom = (saved || []).filter(p => !p.isBuiltin && !DEFAULT_PROMPTS.some(d => d.id === p.id));
      return DEFAULT_PROMPTS.concat(userCustom);
    }

    function readPrompts() {
      if (cachedPrompts !== null) return cachedPrompts;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          cachedPrompts = sanitizePrompts(parsed);
        } else {
          for (const oldKey of OLD_STORAGE_KEYS) {
            const oldRaw = localStorage.getItem(oldKey);
            if (oldRaw) {
              const oldParsed = JSON.parse(oldRaw);
              const sanitized = sanitizePrompts(oldParsed);
              cachedPrompts = mergeWithUserPrompts(sanitized);
              try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(cachedPrompts));
              } catch {}
              break;
            }
          }
        }
      } catch {}
      if (!cachedPrompts || cachedPrompts.length === 0) {
        cachedPrompts = DEFAULT_PROMPTS.slice();
      }
      return cachedPrompts;
    }

    function notifyListeners() {
      listeners.forEach((fn) => {
        try { fn(); } catch {}
      });
    }

    function writePrompts(list) {
      cachedPrompts = list;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      } catch {}
      if (typeof window !== 'undefined' && window.nativeStorage && typeof window.nativeStorage.updateItems === 'function') {
        try {
          window.nativeStorage.updateItems({ [STORAGE_KEY]: list }).catch(() => {});
        } catch {}
      }
      notifyListeners();
    }

    function hydrateFromNativeStorage() {
      if (typeof window === 'undefined' || !window.nativeStorage || typeof window.nativeStorage.getItems !== 'function') {
        return;
      }
      window.nativeStorage.getItems().then((items) => {
        if (!items) return;
        if (Array.isArray(items[STORAGE_KEY])) {
          const fromDisk = sanitizePrompts(items[STORAGE_KEY]);
          if (fromDisk.length > 0) {
            cachedPrompts = fromDisk;
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(fromDisk));
            } catch {}
            notifyListeners();
            return;
          }
        }
        for (const oldKey of OLD_STORAGE_KEYS) {
          if (Array.isArray(items[oldKey])) {
            const fromOldDisk = sanitizePrompts(items[oldKey]);
            const merged = mergeWithUserPrompts(fromOldDisk);
            cachedPrompts = merged;
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            } catch {}
            window.nativeStorage.updateItems({ [STORAGE_KEY]: merged }).catch(() => {});
            notifyListeners();
            return;
          }
        }
        if (cachedPrompts && cachedPrompts.length > 0) {
          window.nativeStorage.updateItems({ [STORAGE_KEY]: cachedPrompts }).catch(() => {});
        }
      }).catch(() => {});
    }

    if (typeof window !== 'undefined' && window.nativeStorage && typeof window.nativeStorage.onChanged === 'function') {
      try {
        window.nativeStorage.onChanged((changes) => {
          if (changes && STORAGE_KEY in changes) {
            const val = changes[STORAGE_KEY];
            const parsed = Array.isArray(val) ? sanitizePrompts(val) : DEFAULT_PROMPTS.slice();
            cachedPrompts = parsed;
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
            } catch {}
            notifyListeners();
          }
        });
      } catch {}
    }

    hydrateFromNativeStorage();
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hydrateFromNativeStorage);
      }
      setTimeout(hydrateFromNativeStorage, 200);
      setTimeout(hydrateFromNativeStorage, 800);
    }

    window.__ruPrompts = {
      getPrompts() {
        return readPrompts();
      },
      savePrompt(item) {
        if (!item) return;
        const list = readPrompts().slice();
        const id = item.id || ('prompt-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6));
        const tags = Array.isArray(item.tags)
          ? item.tags
          : (typeof item.tags === 'string' ? item.tags.split(',').map(s => s.trim()).filter(Boolean) : []);
        const entry = {
          id: id,
          title: (item.title || 'Новый промпт').trim(),
          description: (item.description || '').trim(),
          content: item.content || '',
          tags: tags,
          isBuiltin: !!item.isBuiltin
        };
        const idx = list.findIndex(p => p.id === id);
        if (idx >= 0) {
          list[idx] = entry;
        } else {
          list.unshift(entry);
        }
        writePrompts(list);
        return entry;
      },
      deletePrompt(id) {
        if (!id) return;
        const list = readPrompts().filter(p => p.id !== id);
        writePrompts(list);
      },
      resetToDefaults() {
        writePrompts(DEFAULT_PROMPTS.slice());
      },
      subscribe(fn) {
        if (typeof fn !== 'function') return () => {};
        listeners.add(fn);
        return () => { listeners.delete(fn); };
      },
      insertPromptIntoChat(content, navigate) {
        if (!content) return false;
        if (typeof window.__ruInsertIntoActiveEditor === 'function' && window.__ruInsertIntoActiveEditor(content)) {
          return true;
        }
        window.__ruPendingPromptToInsert = content;
        if (typeof navigate === 'function') {
          navigate({ to: '/' });
        } else {
          try {
            window.location.hash = '#/';
          } catch {}
        }
        return true;
      }
    };

    // Компонент страницы «Мои промпты» в разделе «Дополнения»
    window.__ruRenderPromptsPage = function renderPromptsPage(D, Nq, searchQuery, SI) {
      const [prompts, setPrompts] = D.useState(() => window.__ruPrompts.getPrompts());
      D.useEffect(() => {
        return window.__ruPrompts.subscribe(() => {
          setPrompts(window.__ruPrompts.getPrompts());
        });
      }, []);

      const [selectedTag, setSelectedTag] = D.useState('all');
      const [copiedId, setCopiedId] = D.useState(null);
      const [modalState, setModalState] = D.useState(null); // null или { id, title, description, content, tags }

      let navigate = null;
      try {
        if (typeof SI === 'function') navigate = SI();
      } catch {}

      const allTags = D.useMemo(() => {
        const s = new Set();
        prompts.forEach(p => (p.tags || []).forEach(t => s.add(t)));
        return Array.from(s);
      }, [prompts]);

      const q = (searchQuery || '').trim().toLowerCase();
      const filtered = D.useMemo(() => {
        return prompts.filter(p => {
          if (selectedTag !== 'all' && !(p.tags || []).includes(selectedTag)) {
            return false;
          }
          if (!q) return true;
          return (p.title || '').toLowerCase().includes(q) ||
            (p.description || '').toLowerCase().includes(q) ||
            (p.content || '').toLowerCase().includes(q) ||
            (p.tags || []).some(t => t.toLowerCase().includes(q));
        });
      }, [prompts, selectedTag, q]);

      const handleCopy = D.useCallback((p) => {
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(p.content);
          } else {
            const ta = document.createElement('textarea');
            ta.value = p.content;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
          }
          setCopiedId(p.id);
          setTimeout(() => setCopiedId(null), 2000);
        } catch (err) {
          console.error('Ошибка копирования промпта:', err);
        }
      }, []);

      const handleInsert = D.useCallback((p) => {
        window.__ruPrompts.insertPromptIntoChat(p.content, navigate);
      }, [navigate]);

      const handleDelete = D.useCallback((p) => {
        if (confirm('Удалить промпт «' + p.title + '»?')) {
          window.__ruPrompts.deletePrompt(p.id);
        }
      }, []);

      const handleReset = D.useCallback(() => {
        if (confirm('Сбросить список промптов к стандартным шаблонам? Пользовательские изменения будут заменены.')) {
          window.__ruPrompts.resetToDefaults();
        }
      }, []);

      const handleOpenCreate = D.useCallback(() => {
        setModalState({ id: '', title: '', description: '', content: '', tags: [] });
      }, []);

      const handleOpenEdit = D.useCallback((p) => {
        setModalState({
          id: p.id,
          title: p.title,
          description: p.description,
          content: p.content,
          tags: p.tags ? p.tags.slice() : [],
          isBuiltin: p.isBuiltin
        });
      }, []);

      const handleSaveModal = D.useCallback((formData) => {
        if (!formData.title.trim()) {
          alert('Введите название промпта');
          return;
        }
        if (!formData.content.trim()) {
          alert('Введите текст промпта');
          return;
        }
        window.__ruPrompts.savePrompt(formData);
        setModalState(null);
      }, []);

      return D.createElement('div', { className: 'flex flex-col gap-6 w-full animate-in fade-in duration-200' },
        // Верхняя панель: теги фильтрации и кнопки управления
        D.createElement('div', { className: 'flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4' },
          D.createElement('div', { className: 'flex flex-wrap items-center gap-1.5' },
            D.createElement('button', {
              type: 'button',
              onClick: () => setSelectedTag('all'),
              className: 'px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ' +
                (selectedTag === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/40 text-secondary-foreground hover:bg-secondary hover:text-foreground')
            }, 'Все (' + prompts.length + ')'),
            allTags.map(tag => {
              const count = prompts.filter(p => (p.tags || []).includes(tag)).length;
              const isActive = selectedTag === tag;
              return D.createElement('button', {
                key: tag,
                type: 'button',
                onClick: () => setSelectedTag(tag),
                className: 'px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ' +
                  (isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/40 text-secondary-foreground hover:bg-secondary hover:text-foreground')
              }, tag + ' (' + count + ')');
            })
          ),
          D.createElement('div', { className: 'flex items-center gap-2' },
            D.createElement('button', {
              type: 'button',
              onClick: handleReset,
              title: 'Сбросить к исходным шаблонам',
              className: 'inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer border border-border/40'
            },
              D.createElement(Nq, { name: 'settings_backup_restore', size: 14 }),
              'Сброс'
            ),
            D.createElement('button', {
              type: 'button',
              onClick: handleOpenCreate,
              className: 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer shadow-sm'
            },
              D.createElement(Nq, { name: 'add', size: 16 }),
              'Добавить промпт'
            )
          )
        ),

        // Список / Сетка карточек
        filtered.length === 0
          ? D.createElement('div', { className: 'flex flex-col items-center justify-center p-12 text-center border border-dashed border-border rounded-xl text-muted-foreground gap-3' },
              D.createElement(Nq, { name: 'bookmark_border', size: 36, className: 'opacity-40' }),
              D.createElement('p', { className: 'text-sm font-medium' }, 'Промпты не найдены'),
              D.createElement('p', { className: 'text-xs opacity-75' }, 'Попробуйте изменить поисковый запрос или добавьте новый промпт.'),
              D.createElement('button', {
                type: 'button',
                onClick: handleOpenCreate,
                className: 'mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer'
              },
                D.createElement(Nq, { name: 'add', size: 14 }),
                'Создать первый промпт'
              )
            )
          : D.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
              filtered.map(p => {
                const isCopied = copiedId === p.id;
                return D.createElement('div', {
                  key: p.id,
                  className: 'flex flex-col justify-between rounded-xl border border-border bg-card p-4 transition-all duration-150 hover:border-border/80 hover:shadow-md'
                },
                  // Верх карточки
                  D.createElement('div', { className: 'flex flex-col gap-2' },
                    D.createElement('div', { className: 'flex items-start justify-between gap-2' },
                      D.createElement('div', { className: 'flex flex-col min-w-0' },
                        D.createElement('h3', { className: 'font-semibold text-foreground text-sm leading-snug break-words' }, p.title),
                        p.description && D.createElement('p', { className: 'text-xs text-muted-foreground mt-0.5 line-clamp-2' }, p.description)
                      ),
                      // Кнопки управления (редактировать/удалить)
                      D.createElement('div', { className: 'flex items-center gap-1 shrink-0' },
                        D.createElement('button', {
                          type: 'button',
                          onClick: () => handleOpenEdit(p),
                          title: 'Редактировать',
                          className: 'p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer'
                        }, D.createElement(Nq, { name: 'edit', size: 15 })),
                        D.createElement('button', {
                          type: 'button',
                          onClick: () => handleDelete(p),
                          title: 'Удалить',
                          className: 'p-1 rounded-md text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer'
                        }, D.createElement(Nq, { name: 'delete', size: 15 }))
                      )
                    ),
                    // Теги
                    p.tags && p.tags.length > 0 && D.createElement('div', { className: 'flex flex-wrap gap-1 mt-1' },
                      p.tags.map(t => D.createElement('span', {
                        key: t,
                        className: 'inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-secondary text-secondary-foreground'
                      }, t))
                    ),
                    // Блок содержимого
                    D.createElement('div', {
                      className: 'mt-2 p-2.5 rounded-lg bg-muted/40 border border-border/50 font-mono text-xs text-foreground/90 whitespace-pre-wrap max-h-36 overflow-y-auto select-text leading-relaxed'
                    }, p.content)
                  ),

                  // Нижние действия
                  D.createElement('div', { className: 'flex items-center justify-end gap-2 mt-4 pt-3 border-t border-border/40' },
                    D.createElement('button', {
                      type: 'button',
                      onClick: () => handleCopy(p),
                      className: 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ' +
                        (isCopied
                          ? 'bg-green-500/10 text-green-600 dark:text-green-400 font-medium'
                          : 'bg-secondary/40 text-secondary-foreground hover:bg-secondary hover:text-foreground')
                    },
                      D.createElement(Nq, { name: isCopied ? 'check' : 'content_copy', size: 14 }),
                      isCopied ? 'Скопировано!' : 'Скопировать'
                    )
                  )
                );
              })
            ),

        // Модальное окно создания / редактирования
        modalState && D.createElement(PromptEditModal, {
          D: D,
          Nq: Nq,
          initialData: modalState,
          onClose: () => setModalState(null),
          onSave: handleSaveModal
        })
      );
    };

    // Компонент формы модального окна
    function PromptEditModal({ D, Nq, initialData, onClose, onSave }) {
      const [title, setTitle] = D.useState(initialData.title || '');
      const [tags, setTags] = D.useState((initialData.tags || []).join(', '));
      const [description, setDescription] = D.useState(initialData.description || '');
      const [content, setContent] = D.useState(initialData.content || '');

      D.useEffect(() => {
        function onKeyDown(e) {
          if (e.key === 'Escape') onClose();
        }
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
      }, [onClose]);

      return D.createElement('div', {
        className: 'fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150',
        onClick: (e) => { if (e.target === e.currentTarget) onClose(); }
      },
        D.createElement('div', {
          className: 'bg-card border border-border rounded-2xl shadow-2xl max-w-xl w-full p-6 flex flex-col gap-4 animate-in zoom-in-95 duration-150'
        },
          D.createElement('div', { className: 'flex items-center justify-between border-b border-border/60 pb-3' },
            D.createElement('h2', { className: 'text-base font-semibold text-foreground m-0' },
              initialData.id ? 'Редактировать промпт' : 'Новый промпт'
            ),
            D.createElement('button', {
              type: 'button',
              onClick: onClose,
              className: 'p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer'
            }, D.createElement(Nq, { name: 'close', size: 18 }))
          ),

          D.createElement('div', { className: 'flex flex-col gap-3' },
            D.createElement('div', { className: 'flex flex-col gap-1' },
              D.createElement('label', { className: 'text-xs font-medium text-foreground' }, 'Название *'),
              D.createElement('input', {
                type: 'text',
                value: title,
                onChange: e => setTitle(e.target.value),
                placeholder: 'Например: Автономный рефакторинг',
                className: 'px-3 py-2 rounded-lg bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors'
              })
            ),

            D.createElement('div', { className: 'flex flex-col gap-1' },
              D.createElement('label', { className: 'text-xs font-medium text-foreground' }, 'Теги (через запятую)'),
              D.createElement('input', {
                type: 'text',
                value: tags,
                onChange: e => setTags(e.target.value),
                placeholder: 'Автономность, Планирование, Код',
                className: 'px-3 py-2 rounded-lg bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors'
              })
            ),

            D.createElement('div', { className: 'flex flex-col gap-1' },
              D.createElement('label', { className: 'text-xs font-medium text-foreground' }, 'Краткое описание'),
              D.createElement('input', {
                type: 'text',
                value: description,
                onChange: e => setDescription(e.target.value),
                placeholder: 'Для чего предназначен этот шаблон',
                className: 'px-3 py-2 rounded-lg bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors'
              })
            ),

            D.createElement('div', { className: 'flex flex-col gap-1' },
              D.createElement('label', { className: 'text-xs font-medium text-foreground' }, 'Текст промпта *'),
              D.createElement('textarea', {
                rows: 8,
                value: content,
                onChange: e => setContent(e.target.value),
                placeholder: 'Введите текст инструкций или промпта...',
                className: 'px-3 py-2 rounded-lg bg-muted/50 border border-border text-xs font-mono text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-y leading-relaxed'
              })
            )
          ),

          D.createElement('div', { className: 'flex items-center justify-end gap-2 pt-2 border-t border-border/40' },
            D.createElement('button', {
              type: 'button',
              onClick: onClose,
              className: 'px-4 py-2 rounded-lg text-xs font-medium text-secondary-foreground hover:bg-muted transition-colors cursor-pointer'
            }, 'Отмена'),
            D.createElement('button', {
              type: 'button',
              onClick: () => onSave({
                id: initialData.id,
                title: title,
                tags: tags,
                description: description,
                content: content,
                isBuiltin: initialData.isBuiltin
              }),
              className: 'px-4 py-2 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer shadow-sm'
            }, 'Сохранить')
          )
        )
      );
    }

    // Компонент быстрой кнопки и выпадающего меню в панели ввода чата
    window.__ruRenderPromptQuickButton = function renderPromptQuickButton(D, Nq, lexicalRef, SI) {
      const [isOpen, setIsOpen] = D.useState(false);
      const [query, setQuery] = D.useState('');
      const [prompts, setPrompts] = D.useState(() => window.__ruPrompts.getPrompts());
      const buttonRef = D.useRef(null);
      const popoverRef = D.useRef(null);

      D.useEffect(() => {
        return window.__ruPrompts.subscribe(() => {
          setPrompts(window.__ruPrompts.getPrompts());
        });
      }, []);

      D.useEffect(() => {
        window.__ruOpenQuickPicker = () => setIsOpen(true);
        return () => { window.__ruOpenQuickPicker = null; };
      }, []);

      D.useEffect(() => {
        if (!isOpen) return;
        function onPointerDown(e) {
          if (popoverRef.current && !popoverRef.current.contains(e.target) && !buttonRef.current?.contains(e.target)) {
            setIsOpen(false);
          }
        }
        document.addEventListener('pointerdown', onPointerDown);
        return () => document.removeEventListener('pointerdown', onPointerDown);
      }, [isOpen]);

      let navigate = null;
      try {
        if (typeof SI === 'function') navigate = SI();
      } catch {}

      const q = query.trim().toLowerCase();
      const items = D.useMemo(() => {
        if (!q) return prompts;
        return prompts.filter(p =>
          (p.title || '').toLowerCase().includes(q) ||
          (p.description || '').toLowerCase().includes(q) ||
          (p.tags || []).some(t => t.toLowerCase().includes(q))
        );
      }, [prompts, q]);

      const handleSelectPrompt = D.useCallback((p) => {
        if (typeof window.__ruInsertIntoActiveEditor === 'function') {
          window.__ruInsertIntoActiveEditor(p.content);
        }
        setIsOpen(false);
      }, []);

      const handleGoToManager = D.useCallback(() => {
        setIsOpen(false);
        if (navigate) {
          navigate({ to: '/customizations/prompts' });
        } else {
          try { window.location.hash = '#/customizations/prompts'; } catch {}
        }
      }, [navigate]);

      return D.createElement('div', { className: 'relative shrink-0 flex items-center' },
        D.createElement('button', {
          ref: buttonRef,
          type: 'button',
          title: 'Мои промпты (быстрый выбор)',
          'aria-label': 'Мои промпты',
          onClick: () => setIsOpen(!isOpen),
          className: 'agy-overlay-item flex items-center justify-center h-7 w-7 rounded-lg transition-colors cursor-pointer outline-none shrink-0 ' +
            (isOpen ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted')
        }, D.createElement(Nq, { name: 'bookmark', size: 16 })),

        // Всплывающее меню
        isOpen && D.createElement('div', {
          ref: popoverRef,
          className: 'absolute bottom-full mb-2 left-0 z-50 w-80 max-h-96 rounded-xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-100'
        },
          // Шапка меню
          D.createElement('div', { className: 'p-2.5 border-b border-border/60 flex items-center justify-between gap-2 bg-muted/30' },
            D.createElement('div', { className: 'flex items-center gap-1.5' },
              D.createElement(Nq, { name: 'bookmark', size: 15, className: 'text-primary' }),
              D.createElement('span', { className: 'text-xs font-semibold text-foreground' }, 'Мои промпты')
            ),
            D.createElement('span', { className: 'text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded' }, prompts.length)
          ),

          // Поле быстрого поиска
          D.createElement('div', { className: 'p-2 border-b border-border/40' },
            D.createElement('div', { className: 'flex items-center gap-1.5 px-2 py-1 rounded-lg bg-muted/60 border border-border/50 text-xs' },
              D.createElement(Nq, { name: 'search', size: 14, className: 'text-muted-foreground shrink-0' }),
              D.createElement('input', {
                type: 'text',
                autoFocus: true,
                value: query,
                onChange: e => setQuery(e.target.value),
                placeholder: 'Поиск промпта...',
                className: 'w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-xs'
              }),
              query && D.createElement('button', {
                type: 'button',
                onClick: () => setQuery(''),
                className: 'text-muted-foreground hover:text-foreground cursor-pointer'
              }, D.createElement(Nq, { name: 'close', size: 13 }))
            )
          ),

          // Список элементов
          D.createElement('div', { className: 'flex-1 overflow-y-auto max-h-56 p-1 flex flex-col gap-0.5 [scrollbar-gutter:stable]' },
            items.length === 0
              ? D.createElement('div', { className: 'p-4 text-center text-xs text-muted-foreground' }, 'Промпты не найдены')
              : items.map(p => {
                  return D.createElement('div', {
                    key: p.id,
                    onClick: () => handleSelectPrompt(p),
                    className: 'flex flex-col gap-0.5 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors text-left group'
                  },
                    D.createElement('div', { className: 'flex items-center justify-between gap-1.5' },
                      D.createElement('span', { className: 'text-xs font-medium text-foreground group-hover:text-primary transition-colors truncate' }, p.title),
                      p.tags && p.tags[0] && D.createElement('span', { className: 'text-[9px] px-1.5 py-0.2 rounded bg-secondary text-secondary-foreground shrink-0' }, p.tags[0])
                    ),
                    p.description && D.createElement('span', { className: 'text-[11px] text-muted-foreground line-clamp-1' }, p.description),
                    D.createElement('span', { className: 'text-[10px] text-muted-foreground/75 font-mono line-clamp-1 mt-0.5' }, p.content)
                  );
                })
          ),

          // Подвал меню
          D.createElement('div', { className: 'p-2 border-t border-border/60 bg-muted/20 flex items-center justify-between text-xs' },
            D.createElement('button', {
              type: 'button',
              onClick: handleGoToManager,
              className: 'text-xs text-primary hover:underline flex items-center gap-1 cursor-pointer font-medium'
            },
              D.createElement(Nq, { name: 'open_in_new', size: 13 }),
              'Все промпты во вкладке →'
            )
          )
        )
      );
    };
  })();

  window.__ruTranslateMenu = function translateMenu(items) {
    if (!Array.isArray(items)) return items;
    for (const item of items) {
      if (item && typeof item.label === 'string') {
        const tr = translateString(item.label);
        if (tr) item.label = tr;
      }
      if (item && Array.isArray(item.submenu)) {
        translateMenu(item.submenu);
      }
    }
    return items;
  };

  console.log('[i18n-ru] Russian localization fully active with ' + Object.keys(DICT).length + ' strings');
})();
