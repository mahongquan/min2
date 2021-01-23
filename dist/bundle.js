(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var languages = {"ar":{"name":"Arabic","identifier":"ar","translations":{"addToDictionary":null,"pictureInPicture":null,"openInNewTab":"فتح الرابط في علامة تبويب جديدة","openInNewPrivateTab":"فتح الرابط في التصفح المتخفي","saveLinkAs":null,"viewImage":"مشاهدة الصورة","openImageInNewTab":"فتح الصورة في علامة تبويب جديدة","openImageInNewPrivateTab":"فتح الصورة في التصفح المتخفي","saveImageAs":"حفظ الصورة باسم","searchWith":"%s بحث مع","copyLink":"نسخ الرابط","copyEmailAddress":null,"selectAll":null,"undo":null,"redo":null,"cut":null,"copy":"نسخ","paste":"لصق","goBack":"الرجوع الى الوراء","goForward":"تقدم للامام","inspectElement":"تدقيق العنصر","pasteAndGo":null,"DDGAnswerSubtitle":"جواب","suggestedSite":"الموقع المقترح","resultsFromDDG":"DuckDuckGo نتائج من","taskN":"%n مهمة","showMoreBangs":null,"viewSettings":"عرض الاعدادات","takeScreenshot":"خذ لقطة شاشة","clearHistory":"مسح السجل","enableBlocking":null,"disableBlocking":null,"clearHistoryConfirmation":null,"switchToTask":"تحويل الى مهام","createTask":"انشاء مهمة","closeTask":null,"moveToTask":"نقل التبويب الى المهام","nameTask":null,"addBookmark":null,"searchBookmarks":"البحث عن الإشارات","bookmarksAddTag":null,"bookmarksSimilarItems":null,"searchHistory":"البحث عن السجل","importBookmarks":null,"exportBookmarks":null,"runUserscript":null,"openMenu":"فتح القائمة","enterReaderView":"دخول وضع القراءة","exitReaderView":"خروج وضع القراءة","newTabLabel":"تبويب جديدة","connectionNotSecure":"اتصالك مع هدا الموقع غير محمي.","searchbarPlaceholder":"ابحث او ادخل الرابط","privateTab":"تبويب متخفي","newTabAction":"تبويب جديدة","viewTasks":"عرض المهام","newTask":"مهمة جديدة","defaultTaskName":" %n مهمة رقم","taskDeleteWarning":{"unsafeHTML":null},"returnToTask":null,"taskDescriptionTwo":null,"taskDescriptionThree":null,"searchInPage":"ابحث في الصفحة","findMatchesSingular":"مطابق %t من i%","findMatchesPlural":"مطابق %t من i%","isFocusMode":"أنت في وضع التركيز.","closeDialog":"تم","focusModeExplanation1":null,"focusModeExplanation2":null,"timeRangeJustNow":"الآن","timeRangeMinutes":"قبل عدة دقائق","timeRangeHour":"قبل عدة ساعات","timeRangeToday":null,"timeRangeYesterday":null,"timeRangeWeek":"في الاسبوع الماضي","timeRangeMonth":"في الشهر الماضي","timeRangeYear":"في السنة الماضية","timeRangeLongerAgo":"قديما","crashErrorTitle":"حدث خطأ ما.","crashErrorSubtitle":"حدثت مشكلة أثناء عرض هذه الصفحة.","errorPagePrimaryAction":"اعد المحاولة","serverNotFoundTitle":"الخادم غير موجود","serverNotFoundSubtitle":"لم يستطيع الحصول على هذا الموقع Min","archiveSearchAction":"archive.org البحث في","sslErrorTitle":"هذا الموقع لا يوجد ","sslErrorMessage":"لا يستطيع الاتصال الامن مع هذا الموقع Min","dnsErrorTitle":"الموقع غير موجود","dnsErrorMessage":"حدث خطأ في DNS","offlineErrorTitle":"انت خارج الاتصال","offlineErrorMessage":"اعد الاتصال مع الانترنيت تم اعد المحاولة","genericConnectionFail":"لا يستطيع الاتصال مع الموقع Min","sslTimeErrorMessage":" لا يستطيع الاتصال الامن مع هذا الموقع تأكد من ان التوقيت صحيح Min","addressInvalidTitle":"هذا العنوان غير صحيح","genericError":"حدث خطأ ما","phishingErrorTitle":"هذا الموقع يمكن ان يضرك","phishingErrorMessage":"هذا الموقع يمكن ان يحاول ان يسرق معلوماتك الشخصية . كلمات مرور و معلوماتك البنكية","phishingErrorVisitAnyway":"متابعة على اية حال","phishingErrorLeave":"مغادرة الموقع","multipleInstancesErrorMessage":"حدث خطأ. الرجاء إغلاق أي نوافد مفتوحة أخرى وإعادة تشغيل Min","sessionRestoreErrorTitle":"حدث خطأ ما","sessionRestoreErrorExplanation":"لم نستطيع اعادة فتح التبويبات المحفوظة بشكل صحيح","sessionRestoreErrorBackupInfo":" %l حفظنا نسخة احتياطية لمعلوماتك. وسوف تجدها في المسار التالي","sessionRestoreErrorLinkInfo":{"unsafeHTML":"<a href=\"https://github.com/minbrowser/min\" target=\"_blank\">هنا</a> ادا ظهر لك \"هذا المشكل مرة اخرى.قم بفتح مشكلة "},"settingsPreferencesHeading":"تفضيلات","settingsRestartRequired":"قم بأعادة تشغيل المتصفح لتطبيق هده التغيرات","settingsPrivacyHeading":"منع المحتوى","settingsContentBlockingLevel0":"السماح لجميع الاعلانات و المتعقبين","settingsContentBlockingLevel1":"حظر اعلانات الطرف التالت و المتعقبين","settingsContentBlockingLevel2":"حظر جميع الاعلانات و المتعقبين","settingsContentBlockingExceptions":"سيظل مسموحًا بعرض الاعلانات على هده المواقع","settingsBlockScriptsToggle":"منع السكريبت","settingsBlockImagesToggle":"منع الصور","settingsBlockedRequestCount":{"unsafeHTML":null},"settingsCustomizeFiltersLink":null,"settingsAppearanceHeading":"تفضيلات","settingsEnableDarkMode":null,"settingsDarkModeNever":null,"settingsDarkModeNight":null,"settingsDarkModeAlways":null,"settingsSiteThemeToggle":null,"settingsShowDividerToggle":null,"settingsAdditionalFeaturesHeading":"مميزات اضافية","settingsUserscriptsToggle":"تمكين سكريبت المستخدم","settingsSeparateTitlebarToggle":null,"settingsOpenTabsInForegroundToggle":null,"settingsUserscriptsExplanation":{"unsafeHTML":"يمكن سكريبت المستخدم من  تغير سلوك المواقع - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">معرفة المزيد</a>."},"settingsUserAgentToggle":null,"settingsUpdateNotificationsToggle":null,"settingsSearchEngineHeading":"محرك بحث","settingsDefaultSearchEngine":"اختر محرك بحث اساسي","settingsDDGExplanation":"كمحرك بحث اساسي لرؤية النتائج الآنية في مربع البحث DuckDuckGo ","customSearchEngineDescription":"%s غير كلمة البحث ب","settingsKeyboardShortcutsHeading":"اختصار لوحة مفاتيح","settingsKeyboardShortcutsHelp":"اسعمل الفاصلة للفصل بين الاختصارات","settingsProxyHeading":null,"settingsNoProxy":null,"settingsManualProxy":null,"settingsAutomaticProxy":null,"settingsProxyRules":null,"settingsProxyBypassRules":null,"settingsProxyConfigurationURL":null,"appMenuFile":"ملف","appMenuNewTab":"تبويب جديد","appMenuDuplicateTab":"تبويب مكررة","appMenuNewPrivateTab":"التصفح الخفي","appMenuNewTask":"مهمة جديدة","appMenuSavePageAs":"حفظ الصفحة باسم","appMenuPrint":"طباعة","appMenuEdit":"تعديل","appMenuUndo":"تراجع","appMenuRedo":"اعادة","appMenuCut":"قص","appMenuCopy":"نسخ","appMenuPaste":"لصق","appMenuSelectAll":"تحديد الكل","appMenuFind":"بحث","appMenuView":"مشاهدة","appMenuZoomIn":"تكبير","appMenuZoomOut":"تصغير","appMenuActualSize":"حجم حقيقي","appMenuFullScreen":"ملء الشاشة","appMenuFocusMode":"وضع التركيز","appMenuBookmarks":"اشارة","appMenuHistory":"سجل","appMenuDeveloper":"مطور","appMenuReloadBrowser":"اعادة تحميل المتصفح","appMenuInspectBrowser":"فحص المتصفح","appMenuInspectPage":"فحص الصفحة","appMenuWindow":"نافذة","appMenuMinimize":"تصغير","appMenuClose":"اغلاق","appMenuAlwaysOnTop":null,"appMenuHelp":"مساعدة","appMenuKeyboardShortcuts":"اختصار لوحة مفاتيح","appMenuReportBug":"الابلاغ عن الخطأ","appMenuTakeTour":"خذ جولة","appMenuViewGithub":"GitHub مشاهدة قي","appMenuAbout":"%n حول","appMenuPreferences":"تفضيلات","appMenuServices":"خدمات","appMenuHide":"%n اخفاء","appMenuHideOthers":"اخفاء الباقي","appMenuShowAll":"عرض الكل","appMenuQuit":"%n انهاء","appMenuBringToFront":"جلب الكل الى المقدمة","PDFPageCounter":{"unsafeHTML":"page <input type='text'/> of <span id='total'></span>"},"buttonReaderSettings":null,"buttonReaderLightTheme":null,"buttonReaderSepiaTheme":null,"buttonReaderDarkTheme":null,"openReaderView":null,"autoRedirectBannerReader":null,"buttonReaderRedirectYes":null,"buttonReaderRedirectNo":null,"articleReaderView":null,"downloadCancel":"الغاء","downloadStateCompleted":"تم بنجاح","downloadStateFailed":"فشل","updateNotificationTitle":null}},"bg":{"name":"Bulgarian","identifier":"bg","translations":{"addToDictionary":"Добави към Речник","pictureInPicture":"Картина в картина","openInNewTab":"Отваряне в нов раздел","openInNewPrivateTab":"Отваряне в нов поверителен раздел","saveLinkAs":"Запазване на препратка като...","viewImage":"Преглед на изображението","openImageInNewTab":"Отваряне на изображението в нов раздел","openImageInNewPrivateTab":"Отваряне на изображението в нов поверителен раздел","saveImageAs":"Запазване на изображението като","searchWith":"Търсене с %s","copyLink":"Копиране на препратка","copyEmailAddress":"Копиране на имейл адрес","selectAll":"Избиране на всичко","undo":"Връщане обратно","redo":"Отиване напред","cut":"Изрязване","copy":"Копиране","paste":"Поставяне","goBack":"Връщане една страница назад","goForward":"Отиване една страница напред","inspectElement":"Изследване на елемента","pasteAndGo":"Поставяне и посещаване","DDGAnswerSubtitle":"Отговор","suggestedSite":"Предложен сайт","resultsFromDDG":"Резултати от DuckDuckGo","taskN":"Задача %n","showMoreBangs":"Показване на повече","viewSettings":"Преглед на настройките","takeScreenshot":"Правене на екранна снимка","clearHistory":"Изчистване на цялата история","enableBlocking":"Активиране на блокиране на съдържание за този сайт","disableBlocking":"Деактивиране на блокиране на съдържание за този сайт","clearHistoryConfirmation":"Изчистване на цялата история и данни за сърфиране?","switchToTask":"Превключване към задача","createTask":"Създай задача","closeTask":"Затвори задача","moveToTask":"Премести този раздел в задача","nameTask":"Наименувай тази задача","addBookmark":"Отмятане на страница","searchBookmarks":"Търсене на отметки","bookmarksAddTag":"Добавяне на таг...","bookmarksSimilarItems":"Подобни елементи","searchHistory":"История на търсенията","importBookmarks":"Внасяне на отметки от HTML файл","exportBookmarks":"Изнасяне на отметки","runUserscript":"Изпълняване на потребителски скрипт","openMenu":"Отваряне на меню","enterReaderView":"Влизане в изглед на четене","exitReaderView":"Излизане от изглед на четене","newTabLabel":"Нов раздел","connectionNotSecure":"Връзката Ви с този уеб сайт не е защитена.","searchbarPlaceholder":"Потърсете или въведете адрес","privateTab":"Поверителен раздел","newTabAction":"Отваряне на нов раздел","viewTasks":"Преглеждане на задачи","newTask":"Отваряне на нова задача","defaultTaskName":"Задача %n","taskDeleteWarning":{"unsafeHTML":"Задачата е изтрита. <a>Върни обратно?</a>"},"returnToTask":"Връщане към предишната задача","taskDescriptionTwo":"%t и %t","taskDescriptionThree":"%t, %t, и още %n","searchInPage":"Търсене във страницата","findMatchesSingular":"%i от %t съвпадение","findMatchesPlural":"%i от %t съвпадения","isFocusMode":"Вие сте в режим на фокусиране.","closeDialog":"Добре","focusModeExplanation1":"В режим на фокусиране не може да създавате нови раздели или да превключвате задачи.","focusModeExplanation2":"Може да излезете от режим на фокусиране, като премахнете отметката на \"режим фокусиране\" в менюто за изглед.","timeRangeJustNow":"Току що","timeRangeMinutes":"Преди няколко минути","timeRangeHour":"През изминалия час","timeRangeToday":"Днес","timeRangeYesterday":"Вчера","timeRangeWeek":"През изминалата седмица","timeRangeMonth":"През изминалия месец","timeRangeYear":"През изминалата година","timeRangeLongerAgo":"Много отдавна","crashErrorTitle":"Нещо се обърка.","crashErrorSubtitle":"Възникна проблем при показването на тази страница.","errorPagePrimaryAction":"Опитайте отново","serverNotFoundTitle":"Сървърът не е намерен","serverNotFoundSubtitle":"Min не успя да намери този уеб сайт.","archiveSearchAction":"Търсене в archive.org","sslErrorTitle":"Този уеб сайт не е наличен","sslErrorMessage":"Min не успя да се свърже сигурно с този уеб сайт.","dnsErrorTitle":"Уеб сайтът не е намерен","dnsErrorMessage":"Възникна DNS грешка.","offlineErrorTitle":"Вие сте офлайн","offlineErrorMessage":"Свържете се отново с интернет и опитайте пак.","genericConnectionFail":"Min не успя да се свърже към уеб сайта.","sslTimeErrorMessage":"Min не успя да се свърже сигурно с този уеб сайт. Моля уверете се, че часовникът на Вашият компютър е настроен правилно.","addressInvalidTitle":"Този адрес е невалиден.","genericError":"Възникна грешка","phishingErrorTitle":"Този сайт може да Ви навреди.","phishingErrorMessage":"Този уеб сайт може да се опитва да открадне Вашата личната информация, като пароли или банкова информация.","phishingErrorVisitAnyway":"Продължаване въпреки риска","phishingErrorLeave":"Напускане на сайта","multipleInstancesErrorMessage":"Възникна грешка. Моля затворете всякакви други инстанции и рестартирайте Min.","sessionRestoreErrorTitle":"Възникна грешка","sessionRestoreErrorExplanation":"Вашите запазени раздели не можаха да бъдат възстановени правилно.","sessionRestoreErrorBackupInfo":"Запазили сме резервно копие на Вашите данни на това място: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Ако тази грешка продължи да се появява, моля отворете нов проблем <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">тук</a>."},"settingsPreferencesHeading":"Предпочитания","settingsRestartRequired":"Трябва да рестартирате браузъра, за да бъдат приложени промените.","settingsPrivacyHeading":"Блокиране на съдържание","settingsContentBlockingLevel0":"Разрешаване на всички реклами и преследвачи","settingsContentBlockingLevel1":"Блокиране на реклами и преследвачи от трети лица","settingsContentBlockingLevel2":"Блокиране на всички реклами и преследвачи","settingsContentBlockingExceptions":"Реклами ще бъдат позволени на тези уеб сайтове:","settingsBlockScriptsToggle":"Блокиране на скриптове","settingsBlockImagesToggle":"Блокиране на изображения","settingsBlockedRequestCount":{"unsafeHTML":"Досега Min е блокирал <strong></strong> реклами и тракери."},"settingsCustomizeFiltersLink":"Персонализирайте филтрите","settingsAppearanceHeading":"Изглед","settingsEnableDarkMode":"Активиране на тъмен режим:","settingsDarkModeNever":"Никога","settingsDarkModeNight":"През нощта","settingsDarkModeAlways":"Винаги","settingsSiteThemeToggle":"Активиране на теми на сайтове","settingsAdditionalFeaturesHeading":"Допълнителни функции","settingsUserscriptsToggle":"Активиране на потребителски скриптове","settingsSeparateTitlebarToggle":"Използване на отделна лента със заглавието","settingsOpenTabsInForegroundToggle":"Отваряне на нови раздели на преден план","settingsUserscriptsExplanation":{"unsafeHTML":"Потребителските скриптове Ви позволяват да промените поведението на уеб сайтове - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">научете повече</a>."},"settingsUserAgentToggle":"Използване на персонализиран потребителски агент","settingsUpdateNotificationsToggle":"Автоматично проверяване за актуализации","settingsSearchEngineHeading":"Търсачки","settingsDefaultSearchEngine":"Изберете търсачка по подразбиране:","settingsDDGExplanation":"Поставете DuckDuckGo като търсачка по подразбиране, за да получавате моментални отговори в лентата за търсене.","customSearchEngineDescription":"Заменете думата за търсене със %s","settingsKeyboardShortcutsHeading":"Комбинации от клавиши","settingsKeyboardShortcutsHelp":"Използвайте запетаи, за да разделите множество комбинации за клавиши.","settingsProxyHeading":"Мрежов посредник","settingsNoProxy":"Без мрежов посредник","settingsManualProxy":"Ръчна настройка","settingsAutomaticProxy":"Автоматична настройка","settingsProxyRules":"Правила на мрежовия посредник:","settingsProxyBypassRules":"Без мрежов посредник за:","settingsProxyConfigurationURL":"Адрес за конфигурация","appMenuFile":"Файл","appMenuNewTab":"Нов раздел","appMenuDuplicateTab":"Дупликиране на раздела","appMenuNewPrivateTab":"Нов поверителен раздел","appMenuNewTask":"Нова задача","appMenuSavePageAs":"Запазване на страницата като","appMenuPrint":"Отпечатване","appMenuEdit":"Редактиране","appMenuUndo":"Връщане обратно","appMenuRedo":"Отиване напред","appMenuCut":"Изрязване","appMenuCopy":"Копиране","appMenuPaste":"Поставяне","appMenuSelectAll":"Избиране на всичко","appMenuFind":"Търсене","appMenuView":"Изглед","appMenuZoomIn":"Увеличаване на мащаб","appMenuZoomOut":"Намаляване на мащаб","appMenuActualSize":"Нулиране на мащабирането","appMenuFullScreen":"Цял екран","appMenuFocusMode":"Режим на фокусиране","appMenuBookmarks":"Отметки","appMenuHistory":"История","appMenuDeveloper":"Разработчик","appMenuReloadBrowser":"Презареди браузър","appMenuInspectBrowser":"Изследване на браузър","appMenuInspectPage":"Изследване на страница","appMenuWindow":"Прозорец","appMenuMinimize":"Минимизиране","appMenuClose":"Затваряне","appMenuAlwaysOnTop":"Винаги най-отгоре","appMenuHelp":"Помощ","appMenuKeyboardShortcuts":"Комбинации за клавиши","appMenuReportBug":"Докладване на проблем","appMenuTakeTour":"Направете обиколка","appMenuViewGithub":"Вижте в GitHub","appMenuAbout":"Относно %n","appMenuPreferences":"Предпочитания","appMenuServices":"Услуги","appMenuHide":"Скрий %n","appMenuHideOthers":"Скрий други","appMenuShowAll":"Покажи всички","appMenuQuit":"Излизане от %n","appMenuBringToFront":"Извеждане на всички отпред","PDFPageCounter":{"unsafeHTML":"страница <input type='text'/> от <span id='total'></span>"},"buttonReaderSettings":"Настройки на четец","buttonReaderLightTheme":"Светла","buttonReaderSepiaTheme":"Сепия","buttonReaderDarkTheme":"Тъмна","openReaderView":"Винаги отваряй в режим на четене","autoRedirectBannerReader":"Винаги отваряй статии от този сайт в режим на четене?","buttonReaderRedirectYes":"Да","buttonReaderRedirectNo":"Не","articleReaderView":"Оригинална статия","downloadCancel":"Отказ","downloadStateCompleted":"Завършено","downloadStateFailed":"Провалено","updateNotificationTitle":"Налична е нова версия на Min","settingsPasswordAutoFillHeadline":"Автоматично попълване на пароли","settingsSelectPasswordManager":"Изберете един от поддържаните мениджъри на пароли:","keychainViewPasswords":"Виж запазени пароли","passwordManagerSetupHeading":"Завършете настройване на %p да попълва пароли","passwordManagerSetupStep1":{"unsafeHTML":"Първо, <a id='password-manager-setup-link'></a> и го извлечете за Вашата система."},"passwordManagerInstallerSetup":{"unsafeHTML":"Изтеглете <a id='password-manager-setup-link-installer'></a> и плъзнете файла в полето отдолу:"},"passwordManagerSetupLink":"изтеглете %p CLI инструмента","passwordManagerSetupLinkInstaller":"%p CLI инсталатор","passwordManagerSetupStep2":"След това плъзнете уреда в полето отдолу:","passwordManagerSetupDragBox":"Плъзнете уреда тук","passwordManagerSetupInstalling":"Инсталиране...","passwordManagerSetupSignIn":"Впишете се във Вашия мениджър на пароли, за да започнете употребата на автоматично попълване. Вашите пълномощия няма да се съхраняват никъде в Min.","disableAutofill":"Деактивиране на автоматично попълване на пароли","passwordManagerSetupUnlockError":"Неуспешно отключване на хранилището за пароли: ","passwordManagerSetupRetry":"Уверете се, че използвате правилния файл и въвеждате правилна парола. Може да пробвате отново, като пак плъзнете уреда тук.","passwordManagerUnlock":"Въведете Вашата %p главна парола, за да отключите хранилището за пароли:","passwordCaptureSavePassword":"Запази парола за %s?","passwordCaptureSave":"Запази","passwordCaptureDontSave":"Не запазвай","savedPasswordsHeading":"Запазени пароли","savedPasswordsEmpty":"Няма запазени пароли.","deletePassword":"Изтрий парола за %s?","loginPromptTitle":"Впишете се в %h (%r)","dialogConfirmButton":"Потвърждаване","dialogSkipButton":"Отказване","username":"Потребителско име","email":"Имейл","password":"Парола","secretKey":"Таен ключ"}},"bn":{"name":"বাংলা","identifier":"bn","translations":{"addToDictionary":"অভিধানে যুক্ত করুন","pictureInPicture":"ছবিতে ছবি","openInNewTab":"নতুন ট্যাবে খুলুন","openInNewPrivateTab":"নতুন ব্যক্তিগত ট্যাবে খুলুন","saveLinkAs":"লিঙ্ক সঞ্চিত করুন...","viewImage":"ভিউ ইমেজ","openImageInNewTab":"চিত্রটি নতুন ট্যাবে খুলুন","openImageInNewPrivateTab":"নতুন ব্যক্তিগত ট্যাবে চিত্র খুলুন","saveImageAs":"ইমেজ সেভ করুন এভাবে","searchWith":"%s এর সাথে অনুসন্ধান করুন","copyLink":"লিংক কপি করুন","copyEmailAddress":"ইমেল ঠিকানা অনুলিপি করুন","selectAll":"সমস্ত নির্বাচন করুন","undo":"পূর্বাবস্থায় ফেরা","redo":"আবার করুন","cut":"কাট","copy":"কপি","paste":"প্রতিলেপন","goBack":"ফিরে যাও","goForward":"সামনে আগান","inspectElement":"এলিমেন্ট পরিদর্শন করুন","pasteAndGo":"পেস্ট করুন এবং যান","DDGAnswerSubtitle":"উত্তর","suggestedSite":"প্রস্তাবিত সাইট","resultsFromDDG":"ডকডকলহ থেকে ফলাফল","taskN":"টাস্ক%n","showMoreBangs":"আরো দেখুন","viewSettings":"সেটিংস দেখুন","takeScreenshot":"একটি স্ক্রিনশট নিন","clearHistory":"সমস্ত ইতিহাস সাফ করুন","enableBlocking":"এই সাইটের জন্য সামগ্রী ব্লকিং সক্ষম করুন","disableBlocking":"এই সাইটের জন্য সামগ্রী ব্লকিং অক্ষম করুন","clearHistoryConfirmation":"সমস্ত ইতিহাস এবং ব্রাউজিং ডেটা সাফ করবেন?","switchToTask":"টাস্কে স্যুইচ করুন","createTask":"একটি টাস্ক তৈরি করুন","closeTask":"একটি কাজ বন্ধ করুন","moveToTask":"একটি টাস্ক এই ট্যাব সরান","nameTask":"এই কার্যটির নাম দিন","addBookmark":"বুকমার্কে সংযুক্তকরন","searchBookmarks":"বুকমার্কগুলি অনুসন্ধান করুন","bookmarksAddTag":"ট্যাগ যুক্ত করুন ...","bookmarksSimilarItems":"অনুরূপ আইটেম","searchHistory":"অনুসন্ধানের ইতিহাস","importBookmarks":"এইচটিএমএল ফাইল থেকে বুকমার্কগুলি আমদানি করুন","exportBookmarks":"রপ্তানি বুকমার্ক","openMenu":"খুলুন মেনু","runUserscript":"ইউজার স্ক্রিপ্ট চালান","enterReaderView":"রিডার ভিউ লিখুন","exitReaderView":"রিডার ভিউ প্রস্থান করুন","newTabLabel":"নতুন ট্যাব","connectionNotSecure":"এই ওয়েবসাইটে আপনার সংযোগ নিরাপদ নয়।","searchbarPlaceholder":"অনুসন্ধান করুন বা ঠিকানা লিখুন","privateTab":"ব্যক্তিগত ট্যাব","newTabAction":"নতুন ট্যাব","viewTasks":"কাজগুলি দেখুন","newTask":"ত্যে","defaultTaskName":"টাস্ক%n","taskDeleteWarning":{"unsafeHTML":"কার্য মোছা হয়েছে <a>Undo?</a>"},"returnToTask":"আপনার আগের কাজে ফিরে যান","taskDescriptionTwo":"%t এবং %t","taskDescriptionThree":"%t, %t, and %n আরও","searchInPage":"পৃষ্ঠা অনুসন্ধান করুন","findMatchesSingular":"%i এর %t টি মিল","findMatchesPlural":"%i এর %t মিলগুলি","isFocusMode":"আপনি ফোকাস মোডে আছেন","closeDialog":"ঠিক আছে","focusModeExplanation1":"ফোকাস মোডে, বর্তমান ট্যাব ছাড়া সব ট্যাব লুকানো আছে এবং আপনি নতুন ট্যাব তৈরি করতে পারবেন না","focusModeExplanation2":"আপনি ভিউ মেনুতে \"ফোকাস মোড\" অনির্ধারণ করে ফোকাস মোডটি ত্যাগ করতে পারেন।","timeRangeJustNow":"এক্ষুনি","timeRangeMinutes":"কিছু মিনিট আগে","timeRangeHour":"অতীত ঘন্টার মধ্যে","timeRangeToday":"আজ","timeRangeYesterday":"গতকাল","timeRangeWeek":"গত সপ্তাহে","timeRangeMonth":"গত মাসে","timeRangeYear":"গত বছর","timeRangeLongerAgo":"দীর্ঘ আগে","crashErrorTitle":"কিছু ভুল হয়েছে.","crashErrorSubtitle":"এই পৃষ্ঠাটি প্রদর্শন করার সময় একটি সমস্যা ঘটেছে।","errorPagePrimaryAction":"আবার চেষ্টা কর","serverNotFoundTitle":"সার্ভার পাচ্ছে না","serverNotFoundSubtitle":"Min এই ওয়েবসাইটটি খুঁজে পাওয়া যায়নি।","archiveSearchAction":"Archive.org এ অনুসন্ধান করুন","sslErrorTitle":"এই ওয়েবসাইটটি উপলব্ধ নয়","sslErrorMessage":"Min এই ওয়েবসাইট থেকে নিরাপদে সংযোগ করতে পারে নি।","dnsErrorTitle":"ওয়েবসাইট খুঁজে পাওয়া যায় নি","dnsErrorMessage":"একটি DNS ত্রুটি ঘটেছে","offlineErrorTitle":"আপনি অফলাইনে","offlineErrorMessage":"ইন্টারনেট থেকে পুনরায় সংযোগ করুন এবং আবার চেষ্টা করুন।","genericConnectionFail":"Min ওয়েবসাইট সংযোগ করতে পারে না।","sslTimeErrorMessage":"Min এই ওয়েবসাইট থেকে নিরাপদে সংযোগ করতে পারে নি। দয়া করে নিশ্চিত করুন যে আপনার কম্পিউটারের ঘড়ি সঠিকভাবে সেট করা আছে।","addressInvalidTitle":"এই ঠিকানাটি অবৈধ।","genericError":"একটি ত্রুটি ঘটেছে","phishingErrorTitle":"এই সাইটটি আপনাকে ক্ষতি করতে পারে।","phishingErrorMessage":"এই ওয়েবসাইট আপনার ব্যক্তিগত তথ্য, যেমন পাসওয়ার্ড বা ব্যাংকিং তথ্য চুরি করার চেষ্টা করা হতে পারে।","phishingErrorVisitAnyway":"যাইহোক সাইট পরিদর্শন করুন","phishingErrorLeave":"এই সাইটটি ছেড়ে দিন","multipleInstancesErrorMessage":"একটি ত্রুটি ঘটেছে. অন্য কোনও খোলা দৃষ্টান্ত বন্ধ করুন এবং Min পুনরায় আরম্ভ করুন।","sessionRestoreErrorTitle":"একটি ত্রুটি ঘটেছে","sessionRestoreErrorExplanation":"আপনার সংরক্ষিত ট্যাবগুলি সঠিকভাবে পুনরুদ্ধার করা যাবে না।","sessionRestoreErrorBackupInfo":"আমরা এই অবস্থানে আপনার ডেটা ব্যাকআপ সংরক্ষণ করেছি:%l","sessionRestoreErrorLinkInfo":{"unsafeHTML":"যদি এই ত্রুটিটি ঘটতে থাকে তবে দয়া করে একটি নতুন সমস্যা <a href=\"https://github.com/minbrowser/min\" target=\"_blank\"> এখানে </a> খুলুন।"},"settingsPreferencesHeading":"পছন্দসমূহ","settingsRestartRequired":"আপনি এই পরিবর্তনগুলি প্রয়োগ করতে পুনরায় শুরু করতে হবে।","settingsPrivacyHeading":"সামগ্রী ব্লকিং","settingsContentBlockingLevel0":"সমস্ত বিজ্ঞাপন এবং ট্র্যাকারকে মঞ্জুরি দিন","settingsContentBlockingLevel1":"তৃতীয় পক্ষের বিজ্ঞাপন এবং ট্র্যাকারদের ব্লক করুন","settingsContentBlockingLevel2":"সমস্ত বিজ্ঞাপন এবং ট্র্যাকারদের ব্লক করুন","settingsContentBlockingExceptions":"এই ওয়েবসাইটগুলিতে এখনও বিজ্ঞাপনের অনুমতি দেওয়া হবে:","settingsBlockScriptsToggle":"স্ক্রিপ্ট ব্লক করুন","settingsBlockImagesToggle":"ইমেজ ব্লক করুন","settingsBlockedRequestCount":{"unsafeHTML":"এখনও অবধি, Min <strong></strong> বিজ্ঞাপন এবং ট্র্যাকারদের অবরুদ্ধ করেছে"},"settingsCustomizeFiltersLink":"ফিল্টারগুলি কাস্টমাইজ করুন","settingsAppearanceHeading":"চেহারা","settingsEnableDarkMode":"ডার্কমোড সক্ষম করুন:","settingsDarkModeNever":"কখনই","settingsDarkModeNight":"রাতে","settingsDarkModeAlways":"সর্বদা","settingsSiteThemeToggle":"সাইটের থিম সক্ষম করুন","settingsAdditionalFeaturesHeading":"অতিরিক্ত বৈশিষ্ট্য","settingsUserscriptsToggle":"ব্যবহারকারী স্ক্রিপ্ট সক্রিয় করুন","settingsShowDividerToggle":"ট্যাবগুলির মধ্যে বিভাজক দেখান","settingsSeparateTitlebarToggle":"পৃথক শিরোনাম বার ব্যবহার করুন","settingsOpenTabsInForegroundToggle":"অগ্রভাগে নতুন ট্যাবগুলি খুলুন","settingsUserscriptsExplanation":{"unsafeHTML":"ব্যবহারকারীর স্ক্রিপ্ট আপনাকে ওয়েবসাইটের আচরণ পরিবর্তন করার অনুমতি দেয় - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\"> আরও শিখুন </a>"},"settingsUserAgentToggle":"একটি কাস্টম ব্যবহারকারী এজেন্ট ব্যবহার করুন","settingsUpdateNotificationsToggle":"স্বয়ংক্রিয়ভাবে আপডেটগুলির জন্য পরীক্ষা করুন","settingsSearchEngineHeading":"খোঁজ যন্ত্র","settingsDefaultSearchEngine":"একটি ডিফল্ট অনুসন্ধান ইঞ্জিন চয়ন করুন:","settingsDDGExplanation":"Searchbar এ তাত্ক্ষণিক উত্তর দেখতে ডিফল্ট অনুসন্ধান ইঞ্জিন হিসাবে DuckDuckGo সেট করুন।","customSearchEngineDescription":"অনুসন্ধানটি%s এর সাথে প্রতিস্থাপন করুন","settingsKeyboardShortcutsHeading":"কীবোর্ড শর্টকাটগুলি","settingsKeyboardShortcutsHelp":"একাধিক শর্টকাট পৃথক করার জন্য কমা ব্যবহার করুন।","settingsProxyHeading":"প্রক্সি","settingsNoProxy":"প্রক্সি না","settingsManualProxy":"ম্যানুয়াল কনফিগারেশন","settingsAutomaticProxy":"স্বয়ংক্রিয় কনফিগারেশন","settingsProxyRules":"প্রক্সি বিধি:","settingsProxyBypassRules":"এর জন্য কোনও প্রক্সি নেই:","settingsProxyConfigurationURL":"কনফিগারেশন ইউআরএল","appMenuFile":"ফাইল","appMenuNewTab":"নতুন ট্যাব","appMenuDuplicateTab":"ডুপ্লিকেট ট্যাব","appMenuNewPrivateTab":"নতুন ব্যক্তিগত ট্যাব","appMenuNewTask":"ত্যে","appMenuSavePageAs":"যেমন পৃষ্ঠা সংরক্ষণ","appMenuPrint":"ছাপা","appMenuEdit":"সম্পাদন করা","appMenuUndo":"বাতিল করা","appMenuRedo":"পুনরায় করা","appMenuCut":"কাটা","appMenuCopy":"কপি","appMenuPaste":"প্রতিলেপন","appMenuSelectAll":"সব নির্বাচন করুন","appMenuFind":"আবিষ্কার","appMenuView":"দৃশ্য","appMenuZoomIn":"প্রসারিত করো","appMenuZoomOut":"ছোট করা","appMenuActualSize":"সঠিক আকার","appMenuFullScreen":"পূর্ণ পর্দা","appMenuFocusMode":"ফোকাস মোড","appMenuBookmarks":"বুকমার্ক","appMenuHistory":"ইতিহাস","appMenuDeveloper":"বিকাশকারী","appMenuReloadBrowser":"ব্রাউজার পুনরায় লোড করুন","appMenuInspectBrowser":"ব্রাউজার পরিদর্শন করুন","appMenuInspectPage":"পৃষ্ঠা পরিদর্শন করুন","appMenuWindow":"জানলা","appMenuMinimize":"কমান","appMenuClose":"ঘনিষ্ঠ","appMenuAlwaysOnTop":"সর্বদা শীর্ষে","appMenuHelp":"সাহায্য করুন","appMenuKeyboardShortcuts":"কীবোর্ড শর্টকাটগুলি","appMenuReportBug":"একটি বাগ রিপোর্ট করুন","appMenuTakeTour":"ঘুরে আসা","appMenuViewGithub":"GitHub এ দেখুন","appMenuAbout":"প্রায়%n","appMenuPreferences":"পছন্দসমূহ","appMenuServices":"সার্ভিস","appMenuHide":"%n লুকান","appMenuHideOthers":"অন্যদের লুকান","appMenuShowAll":"সব দেখাও","appMenuQuit":"%n ছাড়ুন","appMenuBringToFront":"সব থেকে সামনে আনুন","PDFPageCounter":{"unsafeHTML":"<span id = 'total'> </ span> এর <input type = 'text' /> পৃষ্ঠা"},"buttonReaderSettings":"পাঠক সেটিংস","buttonReaderLightTheme":"আলো","buttonReaderSepiaTheme":"সেপিয়া","buttonReaderDarkTheme":"অন্ধকার","openReaderView":"সর্বদা পাঠক দর্শনে খোলা","autoRedirectBannerReader":"পাঠক দর্শনে সর্বদা এই সাইট থেকে নিবন্ধগুলি খুলবেন?","buttonReaderRedirectYes":"হ্যাঁ","buttonReaderRedirectNo":"না","articleReaderView":"মূল নিবন্ধ","downloadCancel":"বাতিল","downloadStateCompleted":"সমাপ্ত","downloadStateFailed":"ব্যর্থ হয়েছে","updateNotificationTitle":"নূন্যতম একটি নতুন সংস্করণ উপলব্ধ"}},"cs":{"name":"Česky","identifier":"cs","translations":{"addToDictionary":"Přidat do slovníku","pictureInPicture":"Obraz v obraze","openInNewTab":"Otevřít v nové kartě","openInNewPrivateTab":"Otevřít v nové soukromé kartě","saveLinkAs":"Uložit odkaz jako...","viewImage":"Zobrazit obrázek","openImageInNewTab":"Otevřít obrázek v nové kartě","openImageInNewPrivateTab":"Otevřít obrázek v nové soukromé kartě","saveImageAs":"Uložit obrázek jako","searchWith":"Vyhledávat pomocí %s","copyLink":"Kopírovat odkaz","copyEmailAddress":"Kopírovat e-mailovou adresu","selectAll":"Označit vše","undo":"Zpět","redo":"Znovu","cut":"Vyjmout","copy":"Kopírovat","paste":"Vložit","goBack":"Jít zpět","goForward":"Jít dopředu","inspectElement":"Prozkoumat prvek","pasteAndGo":"Vložit a přejít","DDGAnswerSubtitle":"Odpověď","suggestedSite":"Doporučené stránky","resultsFromDDG":"Výsledky z DuckDuckGo","taskN":"Dimenze %n","showMoreBangs":"Zobrazit více","viewSettings":"Zobrazit nastavení","takeScreenshot":"Pořídit snímek obrazovky","clearHistory":"Vymazat celou historii","enableBlocking":"Zapnout blokování obsahu pro tuto stránku","disableBlocking":"Vypnout blokování obsahu pro tuto stránku","clearHistoryConfirmation":"Vymazat historii a data o prohlížení?","switchToTask":"Skočit do dimenze","createTask":"Vytvořit dimenzi","closeTask":"Zavřít dimenzi","moveToTask":"Přesunout tuto kartu do dimenze","nameTask":"Pojmenovat dimenzi","addBookmark":"Přidat záložku","searchBookmarks":"Vyhledávat záložky","bookmarksAddTag":"Přidat štítek...","bookmarksSimilarItems":"Podobné položky","searchHistory":"Prohledat historii","importBookmarks":"Importovat záložky z HTML souboru","exportBookmarks":"Exportovat záložky","runUserscript":"Spustit uživatelský skript","openMenu":"Otevřít menu","enterReaderView":"Otevřít režim čtení","exitReaderView":"Zavřít režim čtení","newTabLabel":"Nová karta","connectionNotSecure":"Vaše připojení k této stránce není zabezpečené.","searchbarPlaceholder":"Vyhledávejte nebo zadejte adresu","privateTab":"Soukromá karta","newTabAction":"Nová karta","viewTasks":"Zobrazit dimenze","newTask":"Nová dimenze","defaultTaskName":"Dimenze %n","taskDeleteWarning":{"unsafeHTML":"Dimenze uzavřena. <a>Zpět?</a>"},"returnToTask":"Vrátit se do předchozí dimenze","taskDescriptionTwo":"%t a %t","taskDescriptionThree":"%t, %t, a více (%n)","searchInPage":"Vyhledávat na stránce","findMatchesSingular":"%i z %t výsledku","findMatchesPlural":"%i z %t výsledků","isFocusMode":"Jste v režimu zaměření.","closeDialog":"OK","focusModeExplanation1":"V režimu zaměření nemůžete přepínat záložky nebo měnit dimenze.","focusModeExplanation2":"Můžete opustit režim zaměření odškrtnutím \"režim zaměření\" v menu zobrazení.","timeRangeJustNow":"Právě teď","timeRangeMinutes":"Před pár minutami","timeRangeHour":"Před hodinou","timeRangeToday":"Dnes","timeRangeYesterday":"Včera","timeRangeWeek":"Před týdnem","timeRangeMonth":"Před měsícem","timeRangeYear":"Před rokem","timeRangeLongerAgo":"Před více než rokem","crashErrorTitle":"Něco se pokazilo.","crashErrorSubtitle":"Během zobrazování této stránky došlo k potížím.","errorPagePrimaryAction":"Zkusit znovu","serverNotFoundTitle":"Server nenalezen","serverNotFoundSubtitle":"Prohlížeč Min nemůže najít tuto webovou stránku.","archiveSearchAction":"Vyhledávat na archive.org","sslErrorTitle":"Tato webová stránka není dostupná","sslErrorMessage":"Prohlížeč Min nemůže s touto stránkou navázat zabezpečené spojení.","dnsErrorTitle":"Webová stránka nenalezena","dnsErrorMessage":"Došlo k chybě DNS.","offlineErrorTitle":"Jste offline","offlineErrorMessage":"Připojte se k internetu a zkuste to znovu.","genericConnectionFail":"Prohlížeč Min se nemůže připojit k této webové adrese.","sslTimeErrorMessage":"Prohlížeč Min nemůže s touto stránkou navázat zabezpečené spojení. Prosím zkontrolujte, zda máte v počítači správně nastavený čas.","addressInvalidTitle":"Tato adresa je neplatná.","genericError":"Vyskytla se chyba","phishingErrorTitle":"Tyto stránky by vám mohly ublížit.","phishingErrorMessage":"Tyto webové stránky se mohou pokusit ukrást vaše osobní údaje, například hesla nebo bankovní informace.","phishingErrorVisitAnyway":"Přesto stránky navštívit","phishingErrorLeave":"Opustit tyto stránky","multipleInstancesErrorMessage":"Vyskytla se chyba. Prosím zavřete všechny ostatní spuštěné instance a restartujte Min.","sessionRestoreErrorTitle":"Vyskytla se chyba","sessionRestoreErrorExplanation":"Vaše uložené karty nelze správně obnovit.","sessionRestoreErrorBackupInfo":"Zálohu vašich dat jsme uložili na tomto místě: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Pokud se tato chyba opakuje, založte prosím nový problém <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">zde</a>."},"settingsPreferencesHeading":"Nastavení","settingsRestartRequired":"Pro použití změn musíte restartovat aplikaci.","settingsPrivacyHeading":"Blokování obsahu","settingsContentBlockingLevel0":"Povolit všechny reklamy a trackery","settingsContentBlockingLevel1":"Blokovat reklamy třetích stran a trackery","settingsContentBlockingLevel2":"Blokovat všechny reklamy a trackery","settingsContentBlockingExceptions":"Udělit výjimku pro zobrazování reklam těmto webům:","settingsBlockScriptsToggle":"Blokovat skripty","settingsBlockImagesToggle":"Blokovat obrázky","settingsBlockedRequestCount":{"unsafeHTML":"Dosud Min zablokoval <strong></strong> reklam a trackerů."},"settingsCustomizeFiltersLink":"Přizpůsobit filtry","settingsAppearanceHeading":"Vzhled","settingsEnableDarkMode":"Vynutit tmavý režim:","settingsDarkModeNever":"Nikdy","settingsDarkModeNight":"Pouze v noci","settingsDarkModeAlways":"Vždy","settingsSiteThemeToggle":"Povolit motiv webu","settingsAdditionalFeaturesHeading":"Další funkce","settingsUserscriptsToggle":"Povolit uživatelské skripty","settingsShowDividerToggle":"Zobrazit ohraničení otevřených karet","settingsSeparateTitlebarToggle":"Použít systémové záhlaví okna","settingsOpenTabsInForegroundToggle":"Ihned přepínat na nově otevřené karty","settingsUserscriptsExplanation":{"unsafeHTML":"Uživatelské skripty umožňují upravit chování webových stránek - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">více informací</a>."},"settingsUserAgentToggle":"Použít vlastní user agent","settingsUpdateNotificationsToggle":"Automaticky kontrolovat aktualizace","settingsSearchEngineHeading":"Vyhledávač","settingsDefaultSearchEngine":"Zvolte si výchozí vyhledávač:","settingsDDGExplanation":"Nastavte DuckDuckGo jako výchozí vyhledávač pro zobrazování okamžitých odpovědí ve vyhledávacím panelu.","customSearchEngineDescription":"Hledaný výraz nahraďte %s","settingsKeyboardShortcutsHeading":"Klávesové zkratky","settingsKeyboardShortcutsHelp":"Používejte čárky pro oddělení klávesových zkratek.","settingsProxyHeading":"Proxy","settingsNoProxy":"Nepoužívat proxy","settingsManualProxy":"Ruční konfigurace","settingsAutomaticProxy":"Automatická konfigurace","settingsProxyRules":"Pravidla proxy:","settingsProxyBypassRules":"Nepoužívat proxy pro:","settingsProxyConfigurationURL":"Konfigurační adresa URL","appMenuFile":"Soubor","appMenuNewTab":"Nová karta","appMenuDuplicateTab":"Duplikovat kartu","appMenuNewPrivateTab":"Nová soukromá karta","appMenuNewTask":"Nová dimenze","appMenuSavePageAs":"Uložit stránku jako","appMenuPrint":"Tisk","appMenuEdit":"Úpravy","appMenuUndo":"Krok zpět","appMenuRedo":"Krok vpřed","appMenuCut":"Vyjmout","appMenuCopy":"Kopírovat","appMenuPaste":"Vložit","appMenuSelectAll":"Označit vše","appMenuFind":"Najít","appMenuView":"Zobrazení","appMenuZoomIn":"Přiblížit","appMenuZoomOut":"Oddálit","appMenuActualSize":"Skutečná velikost","appMenuFullScreen":"Celá obrazovka","appMenuFocusMode":"Režim zaměření","appMenuBookmarks":"Záložky","appMenuHistory":"Historie","appMenuDeveloper":"Nástroje pro vývojáře","appMenuReloadBrowser":"Znovu načíst prohlížeč","appMenuInspectBrowser":"Prozkoumat prohlížeč","appMenuInspectPage":"Prozkoumat stránku","appMenuWindow":"Okno","appMenuMinimize":"Minimalizovat","appMenuClose":"Zavřít","appMenuAlwaysOnTop":"Vždy nahoře","appMenuHelp":"Nápověda","appMenuKeyboardShortcuts":"Klávesové zkratky","appMenuReportBug":"Nahlásit chybu","appMenuTakeTour":"Otevřít průvodce","appMenuViewGithub":"Zobrazit na GitHubu","appMenuAbout":"O aplikaci %n","appMenuPreferences":"Nastavení","appMenuServices":"Služby","appMenuHide":"Skrýt %n","appMenuHideOthers":"Skrýt ostatní","appMenuShowAll":"Zobrazit vše","appMenuQuit":"Ukončit %n","appMenuBringToFront":"Přenést vše do popředí","PDFPageCounter":{"unsafeHTML":"Strana <input type='text'/> z <span id='total'></span>"},"buttonReaderSettings":"Nastavení čtečky","buttonReaderLightTheme":"Světlé","buttonReaderSepiaTheme":"Sépie","buttonReaderDarkTheme":"Tmavé","openReaderView":"Vždy otevírat v režimu čtení","autoRedirectBannerReader":"Otevírat články z této stránky vždy v režimu čtení?","buttonReaderRedirectYes":"Ano","buttonReaderRedirectNo":"Ne","articleReaderView":"Původní článek","downloadCancel":"Ukončit","downloadStateCompleted":"Dokončeno","downloadStateFailed":"Selhalo","updateNotificationTitle":"Je dostupná nová verze Min","settingsPasswordAutoFillHeadline":"Automatické vkládání hesla","settingsSelectPasswordManager":"Vyberte jeden z podporovaných správců hesel:","keychainViewPasswords":"Zobrazit uložená hesla","passwordManagerSetupHeading":"Dokončete nastavení %p pro použití automatického vkládání","passwordManagerSetupStep1":{"unsafeHTML":"Nejprve <a id='password-manager-setup-link'></a> a rozbalte archiv pro váš systém."},"passwordManagerInstallerSetup":{"unsafeHTML":"Stáhněte <a id='password-manager-setup-link-installer'></a> a přetáhněte soubor do pole níže:"},"passwordManagerSetupLink":"stáhněte %p CLI nástroj","passwordManagerSetupLinkInstaller":"%p CLI instalátor","passwordManagerSetupStep2":"Pak přetáhněte nástroj do pole níže:","passwordManagerSetupDragBox":"Přetáhněte nástroj sem","passwordManagerSetupInstalling":"Probíhá instalace...","passwordManagerSetupSignIn":"Přihlaste se do vašeho správce hesel, abyste mohli začít používat automatické vkládání. Vaše přihlašovací údaje nebudou v prohlížeči Min nikde uchovány.","disableAutofill":"Vypnout automatické vkládání","passwordManagerSetupUnlockError":"Selhalo odemčení úložiště hesel: ","passwordManagerSetupRetry":"Ujistěte se, že používáte správný soubor a zadáváte heslo správně. Můžete postup opakovat přetažením nástroje sem.","passwordManagerUnlock":"Zadejte %p hlavní heslo pro odemčení úložiště hesel:","passwordCaptureSavePassword":"Uložit heslo pro %s?","passwordCaptureSave":"Uložit","passwordCaptureDontSave":"Neukládat","savedPasswordsHeading":"Uložená hesla","savedPasswordsEmpty":"Žádná uložená hesla","deletePassword":"Odstranit heslo pro %s?","loginPromptTitle":"Přihlášení do %h (%r)","dialogConfirmButton":"Potvrdit","dialogSkipButton":"Ukončit","username":"Uživatelské jméno","email":"E-mail","password":"Heslo","secretKey":"Tajný klíč"}},"de":{"name":"Deutsch","identifier":"de","translations":{"addToDictionary":"Ins Wörterbuch hinzufügen","pictureInPicture":"Bild in Bild","openInNewTab":"Link in neuem Tab öffnen","openInNewPrivateTab":"Link in neuem Inkognito-Tab öffnen","saveLinkAs":"Link speichern als...","viewImage":"Bild anzeigen","openImageInNewTab":"Bild in neuem Tab öffnen","openImageInNewPrivateTab":"Bild in neuem Inkognito-Tab öffnen","saveImageAs":"Bild speichern als","searchWith":"Suche mit %s","copyLink":"Link kopieren","copyEmailAddress":"E-Mail-Adresse kopieren","selectAll":"Alles auswählen","undo":"Rückgängig machen","redo":"Wiederherstellen","cut":"Ausschneiden","copy":"Kopieren","paste":"Einfügen","goBack":"Gehe zurück","goForward":"Gehe vorwärts","inspectElement":"Element untersuchen","pasteAndGo":"Einfügen und los","DDGAnswerSubtitle":"Antwort","suggestedSite":"Vorgeschlagene Seite","resultsFromDDG":"Ergebnisse von DuckDuckGo","taskN":"Aufgabe %n","showMoreBangs":"Mehr anzeigen","viewSettings":"Einstellungen anzeigen","takeScreenshot":"Screenshot erstellen","clearHistory":"Verlauf komplett löschen","enableBlocking":"Blockierung von Seitenelemente auf dieser Seite aktivieren","disableBlocking":"Blockierung von Seitenelemente auf dieser Seite aufheben","clearHistoryConfirmation":"Verlauf und Browsingdaten komplett löschen?","switchToTask":"Aufgabe wechseln","createTask":"Aufgabe erstellen","closeTask":"Aufgabe schließen","moveToTask":"Verschiebe diesen Tab zu einer Aufgabe","nameTask":"Benenne diese Aufgabe","addBookmark":"Zu Lesezeichen hinzufügen","searchBookmarks":"Lesezeichen durchsuchen","bookmarksAddTag":"Schlagwort hinzufügen...","bookmarksSimilarItems":"Ähnliche Einträge","searchHistory":"Verlauf durchsuchen","importBookmarks":"Lesezeichen von HTML Datei importieren","exportBookmarks":"Lesezeichen exportieren","runUserscript":"Nutzerskript ausführen","openMenu":"Menü öffnen","enterReaderView":"Leseansicht öffnen","exitReaderView":"Leseansicht verlassen","newTabLabel":"Neuer Tab","connectionNotSecure":"Die Verbindung zu dieser Webseite ist nicht sicher.","searchbarPlaceholder":"Suchen oder Adresse eingeben","privateTab":"Privater Tab","newTabAction":"Neuen Tab öffnen","viewTasks":"Aufgaben anzeigen","newTask":"Neue Aufgabe","defaultTaskName":"Aufgabe %n","taskDeleteWarning":{"unsafeHTML":"Aufgabe gelöscht. <a>Rückgängig machen?</a>"},"returnToTask":"Zur vorherigen Aufgabe zurückkehren","taskDescriptionTwo":"%t und %t","taskDescriptionThree":"%t, %t, und %n mehr","searchInPage":"In Seite suchen","findMatchesSingular":"%i von %t Übereinstimmung","findMatchesPlural":"%i von %t Übereinstimmungen","isFocusMode":"Fokus-Modus ist eingeschaltet.","closeDialog":"OK","focusModeExplanation1":"Im Fokus-Modus kann man keine neuen Tabs erstellen oder die Aufgabe wechseln.","focusModeExplanation2":"Man kann den Fokus-Modus verlassen, indem man \"Fokus-Modus\" in der Menü Ansicht auswählt.","timeRangeJustNow":"Gerade eben","timeRangeMinutes":"Vor einigen Minuten","timeRangeHour":"Vor einer Stunde","timeRangeToday":"Heute","timeRangeYesterday":"Gestern","timeRangeWeek":"Letzte Woche","timeRangeMonth":"Letzten Monat","timeRangeYear":"Letztes Jahr","timeRangeLongerAgo":"Vor langer Zeit","crashErrorTitle":"Etwas ging schief.","crashErrorSubtitle":"Bei der Anzeige der Seite trat ein Problem auf.","errorPagePrimaryAction":"Erneut versuchen","serverNotFoundTitle":"Server nicht gefunden","serverNotFoundSubtitle":"Min konnte diese Webseite nicht finden.","archiveSearchAction":"Suche auf archive.org","sslErrorTitle":"Diese Webseite ist nicht verfügbar","sslErrorMessage":"Min konnte keine sichere Verbindung mit dieser Webseite aufbauen.","dnsErrorTitle":"Webseite nicht gefunden","dnsErrorMessage":"Es trat ein DNS-Fehler auf.","offlineErrorTitle":"Sie sind offline","offlineErrorMessage":"Wieder mit dem Internet verbinden und erneut versuchen.","genericConnectionFail":"Min konnte sich nicht mit dieser Webseite verbinden.","sslTimeErrorMessage":"Min konnte keine sichere Verbindung mit dieser Webseite aufbauen. Bitte stellen Sie sicher, dass Ihre Computeruhr korrekt eingestellt ist.","addressInvalidTitle":"Diese Adresse ist ungültig.","genericError":"Es trat ein Fehler auf","phishingErrorTitle":"Diese Seite könnte Schaden anrichten.","phishingErrorMessage":"Diese Webseite könnte versuchen, persönliche Informationen wie Passwörter und Bankdaten zu stehlen.","phishingErrorVisitAnyway":"Seite trotzdem besuchen","phishingErrorLeave":"Seite verlassen","multipleInstancesErrorMessage":"Ein Fehler ist aufgetreten. Bitte schließe alle anderen offenen Instanzen und starte Min neu.","sessionRestoreErrorTitle":"Es trat ein Fehler auf","sessionRestoreErrorExplanation":"Die gespeicherten Tabs konnten nicht wiederhergestellt werden.","sessionRestoreErrorBackupInfo":"Wir haben ein Backup Ihrer Daten hier gespeichert: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Falls dieser Fehler wiederholt auftritt, bitte <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">hier</a> eine neue Fehlermeldung eröffnen."},"settingsPreferencesHeading":"Einstellungen","settingsRestartRequired":"Ein Neustart ist erforderlich um die Änderungen zu übernehmen.","settingsPrivacyHeading":"Blockierung von Seitenelementen","settingsContentBlockingLevel0":"Alle Werbeanzeigen und Aktivitätsverfolgungen erlauben","settingsContentBlockingLevel1":"Werbeanzeigen und Aktivitätsverfolgungen von Drittanbietern blockieren","settingsContentBlockingLevel2":"Alle Werbeanzeigen und Aktivitätsverfolgungen blockieren","settingsContentBlockingExceptions":"Werbeanzeigen werden auf diesen Webseiten weiterhin erlaubt:","settingsBlockScriptsToggle":"Scripte blockieren","settingsBlockImagesToggle":"Bilder blockieren","settingsBlockedRequestCount":{"unsafeHTML":"Bis jetzt hat Min <strong></strong> Werbeanzeigen und Aktivitätsverfolgungen blockiert."},"settingsCustomizeFiltersLink":"Filter anpassen","settingsAppearanceHeading":"Aussehen","settingsEnableDarkMode":"Dunkelmodus einschalten:","settingsDarkModeNever":"Nie","settingsDarkModeNight":"In der Nacht","settingsDarkModeAlways":"Immer","settingsSiteThemeToggle":"Seitenabhängiges Aussehen aktivieren","settingsAdditionalFeaturesHeading":"Zusätzliche Funktionen","settingsUserscriptsToggle":"Benutzerdefinierte Skripte aktivieren","settingsShowDividerToggle":"Trennwand zwischen Tabs anzeigen","settingsSeparateTitlebarToggle":"Seperate Titelleiste nutzen","settingsOpenTabsInForegroundToggle":"Neue Tabs im Vordergrund öffnen","settingsUserscriptsExplanation":{"unsafeHTML":"Benutzerdefinierte Skripte erlauben es das Verhalten von Webseiten zu modifizieren - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\"> mehr dazu.</a>."},"settingsUserAgentToggle":"Benutzerdefiniertes Benutzer-Agent nutzen","settingsUpdateNotificationsToggle":"Automatisch nach Aktualisierungen überprüfen","settingsSearchEngineHeading":"Suchmaschine","settingsDefaultSearchEngine":"Standardsuchmaschine auswählen:","settingsDDGExplanation":"DuckDuckGo als Standardsuchmaschine einstellen, um sofort Vorschläge in der Suchleiste zu erhalten.","customSearchEngineDescription":"Ersetze den Suchbegriff mit %s","settingsKeyboardShortcutsHeading":"Tastaturkürzel","settingsKeyboardShortcutsHelp":"Nutze Kommata um mehrere Kürzel zu setzen.","settingsProxyHeading":"Proxy","settingsNoProxy":"Kein Proxy","settingsManualProxy":"Manuelle Konfiguration","settingsAutomaticProxy":"Automatisch Konfigurieren lassen","settingsProxyRules":"Proxy-Regeln:","settingsProxyBypassRules":"Kein Proxy nutzen für:","settingsProxyConfigurationURL":"Konfigurations Adresse","appMenuFile":"Datei","appMenuNewTab":"Neuer Tab","appMenuDuplicateTab":"Tab duplizieren","appMenuNewPrivateTab":"Neuer privater Tab","appMenuNewTask":"Neue Aufgabe","appMenuSavePageAs":"Seite speichern als","appMenuPrint":"Drucken","appMenuEdit":"Ändern","appMenuUndo":"Rückgängig","appMenuRedo":"Wiederherstellen","appMenuCut":"Ausschneiden","appMenuCopy":"Kopieren","appMenuPaste":"Einfügen","appMenuSelectAll":"Alles auswählen","appMenuFind":"Finden","appMenuView":"Ansicht","appMenuZoomIn":"Hinein zoomen","appMenuZoomOut":"Heraus zoomen","appMenuActualSize":"Tatsächliche Größe","appMenuFullScreen":"Vollbild","appMenuFocusMode":"Fokus-Modus","appMenuBookmarks":"Lesezeichen","appMenuHistory":"Verlauf","appMenuDeveloper":"Entwickler","appMenuReloadBrowser":"Browser neu laden","appMenuInspectBrowser":"Browser überprüfen","appMenuInspectPage":"Seite überprüfen","appMenuWindow":"Fenster","appMenuMinimize":"Minimieren","appMenuClose":"Schließen","appMenuAlwaysOnTop":"Immer im Vordergrund","appMenuHelp":"Hilfe","appMenuKeyboardShortcuts":"Tastaturkürzel","appMenuReportBug":"Fehler melden","appMenuTakeTour":"Eine Tour starten","appMenuViewGithub":"Auf GitHub ansehen","appMenuAbout":"Über %n","appMenuPreferences":"Einstellungen","appMenuServices":"Dienste","appMenuHide":"Verstecke %n","appMenuHideOthers":"Andere verstecken","appMenuShowAll":"Alle anzeigen","appMenuQuit":"Beende %n","appMenuBringToFront":"Alle nach vorne bringen","PDFPageCounter":{"unsafeHTML":"Seite <input type='text'/> von <span id='total'></span>"},"buttonReaderSettings":"Leseeinstellungen","buttonReaderLightTheme":"Hell","buttonReaderSepiaTheme":"Sepia","buttonReaderDarkTheme":"Dunkel","openReaderView":"Immer in Leseransicht öffnen","autoRedirectBannerReader":"Artikel von dieser Seite immer in Leseransicht öffnen?","buttonReaderRedirectYes":"Ja","buttonReaderRedirectNo":"Nein","articleReaderView":"Ursprünglicher Artikel","downloadCancel":"Abbrechen","downloadStateCompleted":"Abgeschlossen","downloadStateFailed":"Fehlgeschlagen","updateNotificationTitle":"Eine neue Version von Min ist verfügbar","settingsPasswordAutoFillHeadline":"Passwort Automatisch Ausfüllen","settingsSelectPasswordManager":"Wähle eines der unterstützten Passwortmanager:","keychainViewPasswords":"Gespeicherte Zugangsdaten anzeigen","passwordManagerSetupHeading":"Beende die Konfiguration von %p um die automatische Ausfüll Funktion zu nutzen","passwordManagerSetupStep1":{"unsafeHTML":"Als erstes, <a id='password-manager-setup-link'></a> und extrahiere es auf dein System."},"passwordManagerInstallerSetup":{"unsafeHTML":"Lade <a id='password-manager-setup-link-installer'></a> herunter und ziehe die Datei unten in die Box:"},"passwordManagerSetupLink":"Lade die %p Befehlszeilenschnittstelle herunter","passwordManagerSetupLinkInstaller":"Die %p Befehlzeilenschnittstelle Installationsprogramm","passwordManagerSetupStep2":"Ziehe danach das Programm in die untere Box:","passwordManagerSetupDragBox":"Ziehe das Programm hierher","passwordManagerSetupInstalling":"Installiere...","passwordManagerSetupSignIn":"Melde dich in dein Passwortmanager ein um die automatische Ausfüll Funktion zu nutzen. Deine Zugangsdaten werden nirgendwo in Min gepspeichert.","disableAutofill":"Automatische Ausfüll Funktion deaktivieren","passwordManagerSetupUnlockError":"Beim Entsperren des Passwortmanagers ist ein Fehler aufgetreten:","passwordManagerSetupRetry":"Stelle sicher, dass die richtige Datei genutzt und das richtige Passwort eingegeben wurde. Ziehe das Programm wieder hierher, um es noch mal zu versuchen.","passwordManagerUnlock":"Gebe dein %p Hauptkennwort ein, um dein Passwortmanager zu entsperren:","passwordCaptureSavePassword":"Zugangsdaten für %s speichern?","passwordCaptureSave":"Speichern","passwordCaptureDontSave":"Nicht speichern","savedPasswordsHeading":"Gespeicherte Passwörter","savedPasswordsEmpty":"Keine gespeicherte Passwörter","deletePassword":"Zugangsdaten für %s löschen?","loginPromptTitle":"Bei %h (%r) anmelden","dialogConfirmButton":"Bestätigen","dialogSkipButton":"Abbrechen","username":"Benutzername","email":"E-Mail","password":"Passwort","secretKey":"Geheimschlüssel"}},"en-US":{"name":"English (United States)","identifier":"en-US","translations":{"addToDictionary":"Add to Dictionary","pictureInPicture":"Picture in Picture","openInNewTab":"Open in New Tab","openInNewPrivateTab":"Open in New Private Tab","saveLinkAs":"Save Link As...","viewImage":"View Image","openImageInNewTab":"Open Image in New Tab","openImageInNewPrivateTab":"Open Image in New Private Tab","saveImageAs":"Save Image As","searchWith":"Search with %s","copyLink":"Copy Link","copyEmailAddress":"Copy Email Address","selectAll":"Select All","undo":"Undo","redo":"Redo","cut":"Cut","copy":"Copy","paste":"Paste","goBack":"Go Back","goForward":"Go Forward","inspectElement":"Inspect Element","pasteAndGo":"Paste and Go","DDGAnswerSubtitle":"Answer","suggestedSite":"Suggested site","resultsFromDDG":"Results from DuckDuckGo","taskN":"Task %n","showMoreBangs":"Show more","viewSettings":"View Settings","takeScreenshot":"Take a Screenshot","clearHistory":"Clear All History","enableBlocking":"Enable content blocking for this site","disableBlocking":"Disable content blocking for this site","clearHistoryConfirmation":"Clear all history and browsing data?","switchToTask":"Switch to Task","createTask":"Create a Task","closeTask":"Close a Task","moveToTask":"Move this tab to a task","nameTask":"Name this task","addBookmark":"Add bookmark","searchBookmarks":"Search bookmarks","bookmarksAddTag":"Add tag...","bookmarksSimilarItems":"Similar items","searchHistory":"Search history","importBookmarks":"Import bookmarks from HTML file","exportBookmarks":"Export bookmarks","runUserscript":"Run userscript","openMenu":"Open menu","enterReaderView":"Enter reader view","exitReaderView":"Exit reader view","newTabLabel":"New Tab","connectionNotSecure":"Your connection to this website is not secure.","searchbarPlaceholder":"Search or enter address","privateTab":"Private tab","newTabAction":"New Tab","viewTasks":"View Tasks","newTask":"New Task","defaultTaskName":"Task %n","taskDeleteWarning":{"unsafeHTML":"Task deleted. <a>Undo?</a>"},"returnToTask":"Return to your previous task","taskDescriptionTwo":"%t and %t","taskDescriptionThree":"%t, %t, and %n more","searchInPage":"Search in Page","findMatchesSingular":"%i of %t match","findMatchesPlural":"%i of %t matches","isFocusMode":"You're in Focus Mode.","closeDialog":"OK","focusModeExplanation1":"In focus mode, you can't create new tabs or switch tasks.","focusModeExplanation2":"You can leave focus mode by unchecking \"focus mode\" in the view menu.","timeRangeJustNow":"Just now","timeRangeMinutes":"A few minutes ago","timeRangeHour":"In the past hour","timeRangeToday":"Today","timeRangeYesterday":"Yesterday","timeRangeWeek":"In the past week","timeRangeMonth":"In the past month","timeRangeYear":"In the past year","timeRangeLongerAgo":"Longer ago","crashErrorTitle":"Something went wrong.","crashErrorSubtitle":"A problem has occurred while displaying this page.","errorPagePrimaryAction":"Try again","serverNotFoundTitle":"Server not found","serverNotFoundSubtitle":"Min couldn't find this website.","archiveSearchAction":"Search on archive.org","sslErrorTitle":"This website is not available","sslErrorMessage":"Min couldn't connect securely to this website.","dnsErrorTitle":"Website not found","dnsErrorMessage":"A DNS error occurred.","offlineErrorTitle":"You are offline","offlineErrorMessage":"Reconnect to the internet and try again.","genericConnectionFail":"Min couldn't connect to the website.","sslTimeErrorMessage":"Min couldn't connect securely to this website. Please make sure your computer's clock is set correctly.","addressInvalidTitle":"This address is invalid.","genericError":"An error occurred","phishingErrorTitle":"This site could harm you.","phishingErrorMessage":"This website could be trying to steal your personal information, such as passwords or banking information.","phishingErrorVisitAnyway":"Visit site anyway","phishingErrorLeave":"Leave this site","multipleInstancesErrorMessage":"An error occurred. Please close any other open instances and restart Min.","sessionRestoreErrorTitle":"An error occurred","sessionRestoreErrorExplanation":"Your saved tabs couldn't be restored correctly.","sessionRestoreErrorBackupInfo":"We've saved a backup of your data at this location: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"If this error continues to occur, please open a new issue <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">here</a>."},"settingsPreferencesHeading":"Preferences","settingsRestartRequired":"You need to restart to apply these changes.","settingsPrivacyHeading":"Content Blocking","settingsContentBlockingLevel0":"Allow all ads and trackers","settingsContentBlockingLevel1":"Block third-party ads and trackers","settingsContentBlockingLevel2":"Block all ads and trackers","settingsContentBlockingExceptions":"Ads will still be allowed on these websites:","settingsBlockScriptsToggle":"Block scripts","settingsBlockImagesToggle":"Block images","settingsBlockedRequestCount":{"unsafeHTML":"So far, Min has blocked <strong></strong> ads and trackers."},"settingsCustomizeFiltersLink":"Customize filters","settingsAppearanceHeading":"Appearance","settingsEnableDarkMode":"Enable dark mode:","settingsDarkModeNever":"Never","settingsDarkModeNight":"At night","settingsDarkModeAlways":"Always","settingsSiteThemeToggle":"Enable site theme","settingsAdditionalFeaturesHeading":"Additional Features","settingsUserscriptsToggle":"Enable user scripts","settingsShowDividerToggle":"Show divider between tabs","settingsSeparateTitlebarToggle":"Use separate title bar","settingsOpenTabsInForegroundToggle":"Open new tabs in the foreground","settingsUserscriptsExplanation":{"unsafeHTML":"User scripts allow you to modify the behavior of websites - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">learn more</a>."},"settingsUserAgentToggle":"Use a custom user agent","settingsUpdateNotificationsToggle":"Automatically check for updates","settingsSearchEngineHeading":"Search Engine","settingsDefaultSearchEngine":"Choose a default search engine:","settingsDDGExplanation":"Set DuckDuckGo as the default search engine to see instant answers in the searchbar.","customSearchEngineDescription":"Replace the search term with %s","settingsKeyboardShortcutsHeading":"Keyboard Shortcuts","settingsKeyboardShortcutsHelp":"Use commas to separate multiple shortcuts.","settingsProxyHeading":"Proxy","settingsNoProxy":"No Proxy","settingsManualProxy":"Manual Configuration","settingsAutomaticProxy":"Automatic Configuration","settingsProxyRules":"Proxy rules:","settingsProxyBypassRules":"No proxy for:","settingsProxyConfigurationURL":"Configuration URL","appMenuFile":"File","appMenuNewTab":"New Tab","appMenuDuplicateTab":"Duplicate Tab","appMenuNewPrivateTab":"New Private Tab","appMenuNewTask":"New Task","appMenuSavePageAs":"Save Page As","appMenuPrint":"Print","appMenuEdit":"Edit","appMenuUndo":"Undo","appMenuRedo":"Redo","appMenuCut":"Cut","appMenuCopy":"Copy","appMenuPaste":"Paste","appMenuSelectAll":"Select All","appMenuFind":"Find","appMenuView":"View","appMenuZoomIn":"Zoom In","appMenuZoomOut":"Zoom Out","appMenuActualSize":"Actual Size","appMenuFullScreen":"Full Screen","appMenuFocusMode":"Focus Mode","appMenuBookmarks":"Bookmarks","appMenuHistory":"History","appMenuDeveloper":"Developer","appMenuReloadBrowser":"Reload Browser","appMenuInspectBrowser":"Inspect Browser","appMenuInspectPage":"Inspect Page","appMenuWindow":"Window","appMenuMinimize":"Minimize","appMenuClose":"Close","appMenuAlwaysOnTop":"Always on Top","appMenuHelp":"Help","appMenuKeyboardShortcuts":"Keyboard Shortcuts","appMenuReportBug":"Report a Bug","appMenuTakeTour":"Take a Tour","appMenuViewGithub":"View on GitHub","appMenuAbout":"About %n","appMenuPreferences":"Preferences","appMenuServices":"Services","appMenuHide":"Hide %n","appMenuHideOthers":"Hide Others","appMenuShowAll":"Show All","appMenuQuit":"Quit %n","appMenuBringToFront":"Bring All to Front","PDFPageCounter":{"unsafeHTML":"page <input type='text'/> of <span id='total'></span>"},"buttonReaderSettings":"Reader Settings","buttonReaderLightTheme":"Light","buttonReaderSepiaTheme":"Sepia","buttonReaderDarkTheme":"Dark","openReaderView":"Always open in reader view","autoRedirectBannerReader":"Always open articles from this site in reader view?","buttonReaderRedirectYes":"Yes","buttonReaderRedirectNo":"No","articleReaderView":"Original Article","downloadCancel":"Cancel","downloadStateCompleted":"Completed","downloadStateFailed":"Failed","updateNotificationTitle":"A new version of Min is available","settingsPasswordAutoFillHeadline":"Password Auto-Fill","settingsSelectPasswordManager":"Choose one of the supported password managers:","keychainViewPasswords":"View saved passwords","passwordManagerSetupHeading":"Finish setting up %p to use Autofill","passwordManagerSetupStep1":{"unsafeHTML":"First, <a id='password-manager-setup-link'></a> and extract it for your system."},"passwordManagerInstallerSetup":{"unsafeHTML":"Download <a id='password-manager-setup-link-installer'></a> and drag the file into the box below:"},"passwordManagerSetupLink":"download the %p CLI tool","passwordManagerSetupLinkInstaller":"the %p CLI installer","passwordManagerSetupStep2":"Then drag the tool into the box below:","passwordManagerSetupDragBox":"Drag the tool here","passwordManagerSetupInstalling":"Installing...","passwordManagerSetupSignIn":"Sign in to your password manager to start using autofill. Your credentials won't be stored anywhere inside Min.","disableAutofill":"Disable Autofill","passwordManagerSetupUnlockError":"Failed to unlock the password store: ","passwordManagerSetupRetry":"Make sure you're using the right file and entering a correct password. You can retry by dragging the tool here again.","passwordManagerUnlock":"Enter your %p master password to unlock the password store:","passwordCaptureSavePassword":"Save password for %s?","passwordCaptureSave":"Save","passwordCaptureDontSave":"Don't save","savedPasswordsHeading":"Saved passwords","savedPasswordsEmpty":"No saved passwords.","deletePassword":"Delete password for %s?","loginPromptTitle":"Sign in to %h (%r)","dialogConfirmButton":"Confirm","dialogSkipButton":"Cancel","username":"Username","email":"Email","password":"Password","secretKey":"Secret key"}},"es":{"name":"Spanish","identifier":"es","translations":{"addToDictionary":null,"pictureInPicture":null,"openInNewTab":"Abrir en una nueva pestaña","openInNewPrivateTab":"Abrir en una nueva pestaña privada","saveLinkAs":null,"viewImage":"Ver imagen","openImageInNewTab":"Abrir imagen en una nueva pestaña","openImageInNewPrivateTab":"Abrir imagen en una nueva pestaña privada","saveImageAs":"Guardar imagen como","searchWith":"Buscar con %s","copyLink":"Copiar enlace","copyEmailAddress":null,"selectAll":null,"undo":null,"redo":null,"cut":null,"copy":"Copiar","paste":"Pegar","goBack":"Ir atrás","goForward":"Ir adelante","inspectElement":"Inspeccionar elemento","pasteAndGo":null,"DDGAnswerSubtitle":"Respuesta","suggestedSite":"Sitio sugerido","resultsFromDDG":"Resultados de DuckDuckGo","taskN":"Tarea %n","showMoreBangs":null,"viewSettings":"Ver ajustes","takeScreenshot":"Hacer una captura de pantalla","clearHistory":"Limpiar todo el historial","enableBlocking":null,"disableBlocking":null,"clearHistoryConfirmation":null,"switchToTask":"Cambiar a la tarea","createTask":"Crear una tarea","closeTask":null,"moveToTask":"Mover esta pestaña a una tarea","nameTask":null,"addBookmark":null,"searchBookmarks":"Buscar marcadores","bookmarksAddTag":null,"bookmarksSimilarItems":null,"searchHistory":null,"importBookmarks":null,"exportBookmarks":null,"runUserscript":null,"openMenu":null,"enterReaderView":"Entrar en la vista de lectura","exitReaderView":"Salir de la vista de lectura","newTabLabel":"Nueva pestaña","connectionNotSecure":"Tu conexión con este sitio web no es segura.","searchbarPlaceholder":"Buscar o introducir dirección","privateTab":"Pestaña privada","newTabAction":"Nueva pestaña","viewTasks":"Ver tareas","newTask":"Nueva tarea","defaultTaskName":"Tarea %n","taskDeleteWarning":{"unsafeHTML":null},"returnToTask":null,"taskDescriptionTwo":null,"taskDescriptionThree":null,"searchInPage":"Buscar en la página","findMatchesSingular":"%i de %t coincidencia","findMatchesPlural":"%i de %t coinicidencias","isFocusMode":"Estás en el modo de enfoque.","closeDialog":"Aceptar","focusModeExplanation1":null,"focusModeExplanation2":null,"timeRangeJustNow":null,"timeRangeMinutes":null,"timeRangeHour":null,"timeRangeToday":null,"timeRangeYesterday":null,"timeRangeWeek":null,"timeRangeMonth":null,"timeRangeYear":null,"timeRangeLongerAgo":null,"crashErrorTitle":"Algo salió mal.","crashErrorSubtitle":"Se ha producido un problema al mostrar este sitio web.","errorPagePrimaryAction":"Inténtalo de nuevo","serverNotFoundTitle":"Servidor no encontrado","serverNotFoundSubtitle":"Min no puede encontrar esta sitio web.","archiveSearchAction":"Buscar en archive.org","sslErrorTitle":"Esta página web no está disponible","sslErrorMessage":"Min no pudo conectarse de forma segura a este sitio web.","dnsErrorTitle":"Sitio web no encontrado","dnsErrorMessage":"Se ha producido un error de DNS.","offlineErrorTitle":"Estás desconectado","offlineErrorMessage":"Vuelva a conectarse a Internet e inténtelo de nuevo.","genericConnectionFail":"Min no pudo conectarse al sitio web.","sslTimeErrorMessage":"Min no pudo conectarse de forma segura a este sitio web. Por favor asegúrese de que el reloj de su ordenador está configurado correctamente.","addressInvalidTitle":"Esta dirección no es válida.","genericError":"Ha ocurrido un error","phishingErrorTitle":"Este sitio podría dañarte.","phishingErrorMessage":"Este sitio web podría estar tratando de robar su información personal, como contraseñas o información bancaria.","phishingErrorVisitAnyway":"Visitar este sitio de todos modos","phishingErrorLeave":"Salir de este sitio","multipleInstancesErrorMessage":null,"sessionRestoreErrorTitle":"Ha ocurrido un error","sessionRestoreErrorExplanation":"Tus pestañas guardadas no se pudieron restaurar correctamente.","sessionRestoreErrorBackupInfo":"Hemos guardado una copia de seguridad de sus datos en esta ubicación: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Si este error continúa, abra un nuevo reporte <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">aquí</a>."},"settingsPreferencesHeading":"Preferencias","settingsRestartRequired":"Debe reiniciar para aplicar estos cambios.","settingsPrivacyHeading":"Bloqueo de contenido","settingsContentBlockingLevel0":null,"settingsContentBlockingLevel1":null,"settingsContentBlockingLevel2":null,"settingsContentBlockingExceptions":null,"settingsBlockScriptsToggle":"Bloquear scripts","settingsBlockImagesToggle":"Bloquear imágenes","settingsBlockedRequestCount":{"unsafeHTML":null},"settingsCustomizeFiltersLink":null,"settingsAppearanceHeading":"Apariencia","settingsEnableDarkMode":"Habilitar modo oscuro:","settingsDarkModeNever":"Nunca","settingsDarkModeNight":"Por la noche","settingsDarkModeAlways":"Siempre","settingsSiteThemeToggle":null,"settingsAdditionalFeaturesHeading":null,"settingsUserscriptsToggle":null,"settingsShowDividerToggle":null,"settingsSeparateTitlebarToggle":null,"settingsOpenTabsInForegroundToggle":null,"settingsUserscriptsExplanation":null,"settingsUserAgentToggle":null,"settingsUpdateNotificationsToggle":null,"settingsSearchEngineHeading":"Motor de búsqueda","settingsDefaultSearchEngine":"Elija un motor de búsqueda predeterminado:","settingsDDGExplanation":"Establezca DuckDuckGo como motor de búsqueda predeterminado para ver respuestas instantáneas en la barra de búsqueda.","customSearchEngineDescription":null,"settingsKeyboardShortcutsHeading":"Atajos de teclado","settingsKeyboardShortcutsHelp":null,"settingsProxyHeading":null,"settingsNoProxy":null,"settingsManualProxy":null,"settingsAutomaticProxy":null,"settingsProxyRules":null,"settingsProxyBypassRules":null,"settingsProxyConfigurationURL":null,"appMenuFile":"Archivo","appMenuNewTab":"Nueva pestaña","appMenuDuplicateTab":null,"appMenuNewPrivateTab":"Nueva pestaña privada","appMenuNewTask":"Nueva tarea","appMenuSavePageAs":"Guardar página como","appMenuPrint":"Imprimir","appMenuEdit":"Editar","appMenuUndo":"Deshacer","appMenuRedo":"Rehacer","appMenuCut":"Cortar","appMenuCopy":"Copiar","appMenuPaste":"Pegar","appMenuSelectAll":"Seleccionar todo","appMenuFind":"Buscar","appMenuView":"Ver","appMenuZoomIn":"Ampliar","appMenuZoomOut":"Reducir","appMenuActualSize":"Tamaño real","appMenuFullScreen":"Pantalla completa","appMenuFocusMode":"Modo de enfoque","appMenuBookmarks":null,"appMenuHistory":null,"appMenuDeveloper":"Desarrollador","appMenuReloadBrowser":"Recargar navegador","appMenuInspectBrowser":"Inspeccionar navegador","appMenuInspectPage":"Inspeccionar página","appMenuWindow":"Ventana","appMenuMinimize":"Minimizar","appMenuClose":"Cerrar","appMenuAlwaysOnTop":null,"appMenuHelp":"Ayuda","appMenuKeyboardShortcuts":"Atajos de teclado","appMenuReportBug":"Reportar un error","appMenuTakeTour":"Hacer una visita guiada","appMenuViewGithub":"Ver en GitHub","appMenuAbout":"Sobre %n","appMenuPreferences":"Preferencias","appMenuServices":"Servicios","appMenuHide":"Ocultar %n","appMenuHideOthers":"Ocultar otros","appMenuShowAll":"Mostrar todos","appMenuQuit":"Salir de %n","appMenuBringToFront":"Traer todo al frente","PDFPageCounter":null,"buttonReaderSettings":null,"buttonReaderLightTheme":null,"buttonReaderSepiaTheme":null,"buttonReaderDarkTheme":null,"openReaderView":null,"autoRedirectBannerReader":null,"buttonReaderRedirectYes":null,"buttonReaderRedirectNo":null,"articleReaderView":null,"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null,"updateNotificationTitle":null}},"fa":{"name":"Persian","identifier":"fa","translations":{"addToDictionary":null,"pictureInPicture":null,"openInNewTab":"باز کردن در برگه جدید","openInNewPrivateTab":"باز کردن در برگه خصوصی جدید","saveLinkAs":null,"viewImage":"نمایش تصویر","openImageInNewTab":"باز کردن تصویر در برگه جدید","openImageInNewPrivateTab":"باز کردن تصویر در برگه خصوصی جدید","saveImageAs":"ذخیره تصویر","searchWith":"جستجو با %s","copyLink":"کپی لینک","copyEmailAddress":null,"selectAll":null,"undo":null,"redo":null,"cut":null,"copy":"کپی","paste":"چسباندن","goBack":"عقب","goForward":"جلو","inspectElement":"وارسی","pasteAndGo":null,"DDGAnswerSubtitle":"پاسخ","suggestedSite":"سایت پیشنهادی","resultsFromDDG":"نتایج از DuckDuckGo","taskN":"وظیفه %n","showMoreBangs":null,"viewSettings":"نمایش تنظیمات","takeScreenshot":"عکس گرفتن از صفحه","clearHistory":"حذف تاریخچه مرورگر","enableBlocking":null,"disableBlocking":null,"clearHistoryConfirmation":null,"switchToTask":"تغییر به وظیفه","createTask":"ایجاد وظیفه جدید","closeTask":null,"moveToTask":"انتقال این برگه به یک وظیفه","nameTask":null,"addBookmark":null,"searchBookmarks":"جستجوی نشانک ها","bookmarksAddTag":null,"bookmarksSimilarItems":null,"searchHistory":"جستجوی تاریخچه","importBookmarks":null,"exportBookmarks":null,"runUserscript":null,"openMenu":"باز کردن منو","enterReaderView":"ورود به حالت خواندن","exitReaderView":"خروج از حالت خواندن","newTabLabel":"برگه جدید","connectionNotSecure":"ارتباط شما با این سایت امن نیست.","searchbarPlaceholder":"جستجو کنید یا آدرس سایت را وارد کنید","privateTab":"برگه خصوصی","newTabAction":"برگه جدید","viewTasks":"نمایش وظایف","newTask":"وظیفه جدید","defaultTaskName":"وظیفه %n","taskDeleteWarning":{"unsafeHTML":null},"returnToTask":null,"taskDescriptionTwo":null,"taskDescriptionThree":null,"searchInPage":"جستجو در صفحه","findMatchesSingular":"%i از %t نتیجه","findMatchesPlural":"%i از %t نتیجه","isFocusMode":"شما در حالت تمرکز هستید","closeDialog":"تایید","focusModeExplanation1":null,"focusModeExplanation2":null,"timeRangeJustNow":"همین الان","timeRangeMinutes":"دقایقی پیش","timeRangeHour":"ساعتی پیش","timeRangeToday":null,"timeRangeYesterday":null,"timeRangeWeek":"هفته پیش","timeRangeMonth":"ماه پیش","timeRangeYear":"سال پیش","timeRangeLongerAgo":"خیلی وقت پیش","crashErrorTitle":"مشکلی پیش آمد.","crashErrorSubtitle":"مشکلی هنگام نمایش این صفحه پیش آمد.","errorPagePrimaryAction":"تلاش دوباره","serverNotFoundTitle":"سرور یافت نشد","serverNotFoundSubtitle":"مرورگر قادر به پیدا کردن این سایت نیست.","archiveSearchAction":"جستجو در archive.org","sslErrorTitle":"این سایت در دسترس نیست","sslErrorMessage":"مرورگر قادر به ایجاد ارتباط امن با سایت نیست.","dnsErrorTitle":"سایتی یافت نشد","dnsErrorMessage":"خطای DNS.","offlineErrorTitle":"شما آفلاین هستید","offlineErrorMessage":"لطفا به اینترت متصل شده و دوباره تلاش کنید.","genericConnectionFail":"مرورگر قادر به اتصال به این سایت نیست.","sslTimeErrorMessage":"مرورگر قادر به ایجاد ارتباط امن با سایت نیست. لطفا مطمئن شوید که ساعت رایانه شما به درستی تنظیم شده است.","addressInvalidTitle":"آدرس اشتباه است.","genericError":"خطایی رخ داد","phishingErrorTitle":"این سایت خطرناک است.","phishingErrorMessage":"این سایت ممکن است اطلاعات شخصی شما از جمله رمز عبور و اطلاعات بانکی شما را به سرقت ببرد.","phishingErrorVisitAnyway":"نمایش سایت","phishingErrorLeave":"خروج از سایت","multipleInstancesErrorMessage":"خطایی رخ داد. لطفا مرورگر را به صورت کامل بسته و دوباره باز کنید.","sessionRestoreErrorTitle":"خطایی رخ داد","sessionRestoreErrorExplanation":"برگه های ذخیره شده شما به درستی بازیابی نشدند.","sessionRestoreErrorBackupInfo":"ما یک کپی از داده های شما را در این آدرس ذخیره کرده ایم: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"اگر این خطا همواره رخ می دهد لطفا یک تیکت جدید در <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">اینجا</a> باز کنید."},"settingsPreferencesHeading":"تنظیمات","settingsRestartRequired":"جهت اعمال تغییرات شما می بایست مرورگر را دوباره باز کنید.","settingsPrivacyHeading":"مسدود سازی","settingsContentBlockingLevel0":null,"settingsContentBlockingLevel1":null,"settingsContentBlockingLevel2":null,"settingsContentBlockingExceptions":null,"settingsBlockScriptsToggle":"مسدود کردن اسکریپت ها","settingsBlockImagesToggle":"مسدود کردن تصاویر","settingsBlockedRequestCount":{"unsafeHTML":null},"settingsCustomizeFiltersLink":null,"settingsAppearanceHeading":"ظاهر","settingsEnableDarkMode":null,"settingsDarkModeNever":null,"settingsDarkModeNight":null,"settingsDarkModeAlways":null,"settingsSiteThemeToggle":null,"settingsAdditionalFeaturesHeading":"امکانات اضافه","settingsUserscriptsToggle":"فعال کردن اسکریپت های کاربر","settingsShowDividerToggle":null,"settingsSeparateTitlebarToggle":null,"settingsOpenTabsInForegroundToggle":null,"settingsUserscriptsExplanation":{"unsafeHTML":"اسکریپت های کاربر این اجازه را به شما می دهند تا رفتار سایت ها را تغییر دهید - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">اطلاعات بیشتر</a>."},"settingsUserAgentToggle":null,"settingsUpdateNotificationsToggle":null,"settingsSearchEngineHeading":"موتور جستجو","settingsDefaultSearchEngine":"انتخاب موتور جستجوی پیش فرض:","settingsDDGExplanation":"DuckDuckGo را به عنوان موتور جستجوی پیش فرض تنظیم کنید تا در نوار جستجو نتایج آنی ببینید.","customSearchEngineDescription":"تعویض عبارت جستجو شده با %s","settingsKeyboardShortcutsHeading":"میانبرهای صفحه کلید","settingsKeyboardShortcutsHelp":"از ویرگول جهت جدا کردن میانبرها استفاده کنید.","settingsProxyHeading":null,"settingsNoProxy":null,"settingsManualProxy":null,"settingsAutomaticProxy":null,"settingsProxyRules":null,"settingsProxyBypassRules":null,"settingsProxyConfigurationURL":null,"appMenuFile":"پرونده","appMenuNewTab":"برگه جدید","appMenuDuplicateTab":"برگه تکراری","appMenuNewPrivateTab":"برگه خصوصی جدید","appMenuNewTask":"وظیفه جدید","appMenuSavePageAs":"ذخیره صفحه","appMenuPrint":"جاپ","appMenuEdit":"ویرایش","appMenuUndo":"لغو آخرین دستور","appMenuRedo":"تکرار آخرین دستور","appMenuCut":"برش","appMenuCopy":"کپی","appMenuPaste":"چسباندن","appMenuSelectAll":"انتخاب همه","appMenuFind":"جستجو","appMenuView":"نمایش","appMenuZoomIn":"بزرگ نمایی","appMenuZoomOut":"کوچک نمایی","appMenuActualSize":"اندازه واقعی","appMenuFullScreen":"تمام صفحه","appMenuFocusMode":"حالت تمرکز","appMenuBookmarks":"نشانک ها","appMenuHistory":"تاریخچه","appMenuDeveloper":"توسعه دهنده","appMenuReloadBrowser":"بازنگری مرورگر","appMenuInspectBrowser":"وارسی مرورگر","appMenuInspectPage":"وارسی صفحه","appMenuWindow":"پنجره","appMenuMinimize":"کوچک نمایی","appMenuClose":"بستن","appMenuAlwaysOnTop":null,"appMenuHelp":"راهنما","appMenuKeyboardShortcuts":"میانبرهای صفحه کلید","appMenuReportBug":"گزارش اشکالات نرم افزاری","appMenuTakeTour":"تور آموزشی","appMenuViewGithub":"نمایش در گیت هاب","appMenuAbout":"درباره %n","appMenuPreferences":"تنظیمات","appMenuServices":"سرویس ها","appMenuHide":"مخفی کردن %n","appMenuHideOthers":"مخفی کردن بقیه","appMenuShowAll":"نمایش همه","appMenuQuit":"خروج از %n","appMenuBringToFront":"نمایش همه","PDFPageCounter":{"unsafeHTML":"صفحه <input type='text'/> از <span id='total'></span>"},"buttonReaderSettings":null,"buttonReaderLightTheme":null,"buttonReaderSepiaTheme":null,"buttonReaderDarkTheme":null,"openReaderView":null,"autoRedirectBannerReader":null,"buttonReaderRedirectYes":null,"buttonReaderRedirectNo":null,"articleReaderView":null,"downloadCancel":null,"downloadStateCompleted":null,"downloadStateFailed":null,"updateNotificationTitle":null}},"fr":{"name":"Français","identifier":"fr","translations":{"addToDictionary":"Ajouter au dictionnaire","pictureInPicture":"Mini lecteur","openInNewTab":"Ouvrir dans un nouvel onglet","openInNewPrivateTab":"Ouvrir dans un onglet de navigation privée","saveLinkAs":"Enregistrer le lien sous","viewImage":"Voir l'image","openImageInNewTab":"Ouvrir l'image dans un nouvel onglet","openImageInNewPrivateTab":"Ouvrir l'image dans un onglet de navigation privée","saveImageAs":"Enregistrer l'image sous","searchWith":"Rechercher avec %s","copyLink":"Copier le lien","copyEmailAddress":"Copier l'adresse e-mail","selectAll":"Tout sélectionner","undo":"Annuler","redo":"Rétablir","cut":"Couper","copy":"Copier","paste":"Coller","goBack":"Retour","goForward":"Avancer","inspectElement":"Inspecter l'élément","pasteAndGo":"Coller et suivre","DDGAnswerSubtitle":"Réponse","suggestedSite":"Site suggéré","resultsFromDDG":"Résultats de DuckDuckGo","taskN":"Tâche %n","showMoreBangs":"Afficher plus de bangs","viewSettings":"Voir les réglages","takeScreenshot":"Prendre une capture d'écran","clearHistory":"Vider l'historique","enableBlocking":"Activer le blocage","disableBlocking":"Désactiver le blocage","clearHistoryConfirmation":"Effacer toutes les données d'historique et de navigation ?","switchToTask":"Changer de tâche","createTask":"Créer une tâche","closeTask":"Fermer cette tâche","moveToTask":"Déplacer cette tâche à cet onglet","nameTask":"Nommer la tâche","addBookmark":"Ajouter un marque-page","searchBookmarks":"Rechercher des signets","bookmarksAddTag":"Ajouter une étiquette de marque-page","bookmarksSimilarItems":"Éléments similaires","searchHistory":"Rechercher dans l'historique","importBookmarks":"Importer les marque-pages","exportBookmarks":"Exporter les marque-pages","runUserscript":"Exécuter un script d'utilisateur","openMenu":"Ouvrir le menu","enterReaderView":"Entrer en mode lecteur","exitReaderView":"Sortir du mode lecteur","newTabLabel":"Nouvel onglet","connectionNotSecure":"Votre connexion n'est pas sécurisée.","searchbarPlaceholder":"Recherchez et entrez une adresse","privateTab":"Onglet privé","newTabAction":"Ajouter un onglet","viewTasks":"Voir les tâches","newTask":"Ouvrir une nouvelle tâche","defaultTaskName":"Tâche %n","taskDeleteWarning":{"unsafeHTML":"Tâche supprimée. <a>Annuler ?</a>"},"returnToTask":"Revenir à la tâche précédente","taskDescriptionTwo":"%t et %t","taskDescriptionThree":"%t, %t, et %n","searchInPage":"Rechercher dans la page","findMatchesSingular":"Occurence %i parmi %t correspondance","findMatchesPlural":"Occurence %i parmi %t correspondances","isFocusMode":"Vous êtes en mode Focus.","closeDialog":"D'accord","focusModeExplanation1":"En mode focus vous ne pouvez créer de nouvel onglet ni changer de tâche","focusModeExplanation2":"Vous pouvez quitter le mode Focus en décochant \"Mode Focus\" dans le menu","timeRangeJustNow":"À l'instant","timeRangeMinutes":"Il y a quelques minutes","timeRangeHour":"Il y a quelques heures","timeRangeToday":"Aujourd'hui","timeRangeYesterday":"Hier","timeRangeWeek":"Cette semaine","timeRangeMonth":"Ce mois-ci","timeRangeYear":"Cette année","timeRangeLongerAgo":"Il y a plus longtemps","crashErrorTitle":"Il y a eu un problème.","crashErrorSubtitle":"Il y a eu un problème en affichant cette page.","errorPagePrimaryAction":"Essayer encore","serverNotFoundTitle":"Serveur non trouvé","serverNotFoundSubtitle":"Min ne peut pas trouver ce site internet.","archiveSearchAction":"Rechercher sur archive.org","sslErrorTitle":"Ce site n'est pas disponible","sslErrorMessage":"Min ne peut pas établir une connexion sécurisée avec ce site.","dnsErrorTitle":"Site non trouvé","dnsErrorMessage":"Il y a eu un problème DNS avec ce site.","offlineErrorTitle":"Vous êtes hors-ligne","offlineErrorMessage":"Reconnectez-vous à internet et réessayez.","genericConnectionFail":"Min ne peut pas se connecter à ce site internet.","sslTimeErrorMessage":"Min ne peux pas établir une connexion sécurisée avec ce site. Merci de vérifier que votre horloge est bien réglée.","addressInvalidTitle":"Cette adresse est invalide.","genericError":"Il y a une erreur","phishingErrorTitle":"Ce site pourrait vous nuire.","phishingErrorMessage":"Ce site peux essayer de vous dérober vos informations personnelles, comme un mot de passe ou des informations bancaires","phishingErrorVisitAnyway":"Visiter quand même","phishingErrorLeave":"Quitter ce site","multipleInstancesErrorMessage":"Une erreur a été rencontrée. Veuillez fermer les autres fenêtres et relancer Min.","sessionRestoreErrorTitle":"Il y a eu une erreur","sessionRestoreErrorExplanation":"Vos onglets sauvegardés n'ont pas pu être restaurés correctement.","sessionRestoreErrorBackupInfo":"Nous avons enregistrés une sauvegarde de vos données à cette endroit : %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Si cette erreur continue à se produire, merci d'ouvrir un ticket : <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">ici</a>."},"settingsPreferencesHeading":"Préférences","settingsRestartRequired":"Vous devrez redémarrer le navigateur pour appliquer les changements.","settingsPrivacyHeading":"Contenu bloqué","settingsContentBlockingLevel0":"Autoriser toutes les publicités et traqueurs","settingsContentBlockingLevel1":"Bloquer les publicités et traqueurs tiers","settingsContentBlockingLevel2":"Bloquer toutes les publicités et traqueurs","settingsContentBlockingExceptions":"Les publicités resteront activées sur les sites suivants :","settingsBlockScriptsToggle":"Scripts bloqués","settingsBlockImagesToggle":"Images bloquées","settingsBlockedRequestCount":{"unsafeHTML":"À ce jour, Min a bloqué <strong></strong> publicités et pisteurs"},"settingsCustomizeFiltersLink":"Paramétrer les filtres","settingsAppearanceHeading":"Apparence","settingsEnableDarkMode":"Activer le mode nuit:","settingsDarkModeNever":"Jamais","settingsDarkModeNight":"La nuit","settingsDarkModeAlways":"Toujours","settingsSiteThemeToggle":"Activer le thème du site","settingsAdditionalFeaturesHeading":"Fonctionnalités supplémentaires","settingsUserscriptsToggle":"Activer les scripts personnalisés","settingsShowDividerToggle":"Afficher un séparateur entre les onglets","settingsSeparateTitlebarToggle":"Afficher une barre de titre séparée","settingsOpenTabsInForegroundToggle":"Ouvrir les nouveaux onglets en arrière-plan","settingsUserscriptsExplanation":{"unsafeHTML":"Les scripts personnalisés vous permettent de modifier le comportement des pages web - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">en savoir plus (en anglais)</a>."},"settingsUserAgentToggle":"Utiliser un user-agent particulier","settingsUpdateNotificationsToggle":"Vérifier automatiquement pour des mises à jour","settingsSearchEngineHeading":"Moteur de recherche","settingsDefaultSearchEngine":"Choisir un moteur de recherche par défaut :","settingsDDGExplanation":"Définir DuckDuckGo comme moteur de recherche par défaut pour voir instantanément des résulats dans la barre de recherche.","customSearchEngineDescription":"Remplacer la recherche par %s","settingsKeyboardShortcutsHeading":"Raccourcis clavier","settingsKeyboardShortcutsHelp":"Séparer les raccourcis claviers multiples par une virgule.","settingsProxyHeading":"Proxy","settingsNoProxy":"Pas de proxy","settingsManualProxy":"Configuration manuelle","settingsAutomaticProxy":"Configuration automatique","settingsProxyRules":"Règles de proxy","settingsProxyBypassRules":"Pas de proxy pour :","settingsProxyConfigurationURL":"URL de configuration","appMenuFile":"Fichier","appMenuNewTab":"Nouvel onglet","appMenuDuplicateTab":"Dupliquer l'onglet","appMenuNewPrivateTab":"Nouvel onglet de navigation privée","appMenuNewTask":"Nouvelle tâche","appMenuSavePageAs":"Enregistrer la page sous","appMenuPrint":"Imprimer","appMenuEdit":"Editer","appMenuUndo":"Retour","appMenuRedo":"Avancer","appMenuCut":"Couper","appMenuCopy":"Copier","appMenuPaste":"Coller","appMenuSelectAll":"Tout sélectionner","appMenuFind":"Trouver","appMenuView":"Voir","appMenuZoomIn":"Zoom avant","appMenuZoomOut":"Zoom arrière","appMenuActualSize":"Taille actuelle","appMenuFullScreen":"Plein écran","appMenuFocusMode":"Mode focus","appMenuBookmarks":"Signets","appMenuHistory":"Historique","appMenuDeveloper":"Développeur","appMenuReloadBrowser":"Recharger le navigateur","appMenuInspectBrowser":"Inspecter le contenu","appMenuInspectPage":"Inspecter la page","appMenuWindow":"Fenêtre","appMenuMinimize":"Réduire","appMenuClose":"Fermer","appMenuAlwaysOnTop":"Toujours en premier","appMenuHelp":"Aide","appMenuKeyboardShortcuts":"Raccourcis claviers","appMenuReportBug":"Reporter un problème","appMenuTakeTour":"Faire un tour","appMenuViewGithub":"Voir sur GitHub","appMenuAbout":"À propos de %n","appMenuPreferences":"Préférences","appMenuServices":"Services","appMenuHide":"Cacher %n","appMenuHideOthers":"Cacher les autres","appMenuShowAll":"Montrer tout","appMenuQuit":"Quitter %n","appMenuBringToFront":"Tout mettre à l'avant","PDFPageCounter":{"unsafeHTML":"page <input type='text'/> sur <span id='total'></span>"},"buttonReaderSettings":"Réglages de lecture","buttonReaderLightTheme":"Clair","buttonReaderSepiaTheme":"Sepia","buttonReaderDarkTheme":"Sombre","openReaderView":"Toujours ouvrir en mode lecture","autoRedirectBannerReader":"Toujours ouvrir les articles de ce site en mode lecture ?","buttonReaderRedirectYes":"Oui","buttonReaderRedirectNo":"Non","articleReaderView":"Article original","downloadCancel":"Annuler","downloadStateCompleted":"Complété","downloadStateFailed":"Échoué","updateNotificationTitle":"Une nouvelle version de Min est disponible","settingsPasswordAutoFillHeadline":"Remplissage automatique des mots de passe","settingsSelectPasswordManager":"Choisissez l'un des gestionnaires de mots de passe acceptés :","keychainViewPasswords":"Voir les mots de passe enregistrés","passwordManagerSetupHeading":"Finir de régler %p pour utiliser le remplissage automatique","passwordManagerSetupStep1":{"unsafeHTML":"Premièrement, <a id='password-manager-setup-link'></a> puis l'extraire pour votre système."},"passwordManagerInstallerSetup":{"unsafeHTML":"Télécharger <a id='password-manager-setup-link-installer'></a> puis glisser le fichier dans le cadre ci-dessous :"},"passwordManagerSetupLink":"Télécharger l'outil d'interface en ligne de commande (CLI) de %p","passwordManagerSetupLinkInstaller":"L'installateur de CLI %p","passwordManagerSetupStep2":"Puis cliquer-glisser l'outil dans le cadre ci-dessous :","passwordManagerSetupDragBox":"Déposer l'outil ici","passwordManagerSetupInstalling":"En cours d'installation...","passwordManagerSetupSignIn":"Connectez-vous à votre gestionnaire de mots de pass pour commencer à utiliser le remplissage automatique. Vos informations de connexion ne seront jamais stockées par Min.","disableAutofill":"Désactiver le remplissage automatique","passwordManagerSetupUnlockError":"Échec d'ouverture de la bibliothèque de mots passe : ","passwordManagerSetupRetry":"Assurez-vous d'utiliser le bon fichier et d'entrer le bon mot de passe. Vous pouvez réessayer en déposant à nouveau l'outil ici.","passwordManagerUnlock":"Entrez votre mot de passe maître %p pour débloquer la bibliothèque de mots de passe :","passwordCaptureSavePassword":"Enregistrer le mot de passe pour %s?","passwordCaptureSave":"Enregistrer","passwordCaptureDontSave":"Ne pas enregistrer","savedPasswordsHeading":"Mots de passe enregistrés","savedPasswordsEmpty":"Pas de mots de passe enregistrés.","deletePassword":"Supprimer le mot de passe pour %s?","loginPromptTitle":"Connectez-vous à %h (%r)","dialogConfirmButton":"Confirmer","dialogSkipButton":"Annuler","username":"Nom d'utilisateur","email":"Adresse mail","password":"Mot de passe","secretKey":"Clé privée"}},"hu":{"name":"Hungarian (Hungary)","identifier":"hu","translations":{"addToDictionary":null,"pictureInPicture":null,"openInNewTab":"Megnyitás új fülön","openInNewPrivateTab":"Megnyitás új privát fülön","saveLinkAs":null,"viewImage":"Kép megtekintése","openImageInNewTab":"Kép megnyitása új fülön","openImageInNewPrivateTab":"Kép megnyitása új privát fülön","saveImageAs":"Kép mentése másként","searchWith":"Keresés %s keresővel","copyLink":"Hivatkozás másolás","copyEmailAddress":null,"selectAll":null,"undo":null,"redo":null,"cut":null,"copy":"Másolás","paste":"Beillesztés","goBack":"Vissza lépés","goForward":"Előre lépés","inspectElement":"Részletek megtekintése","pasteAndGo":null,"DDGAnswerSubtitle":"Válasz","suggestedSite":"Ajánlott oldal","resultsFromDDG":"Válaszok a DuckDuckGo-ról","taskN":"Feladat %n","showMoreBangs":null,"viewSettings":"Beállítások megtekintése","takeScreenshot":"Képernyőkép készitése","clearHistory":"Összes történet törlés","enableBlocking":null,"disableBlocking":null,"clearHistoryConfirmation":null,"switchToTask":"Feladat váltása","createTask":"Feladat létrehozás","closeTask":null,"moveToTask":"Tedd a fület feladatba","nameTask":null,"addBookmark":null,"searchBookmarks":"Könyvjelző keresés","bookmarksAddTag":null,"bookmarksSimilarItems":null,"searchHistory":"Keresési előzmények","importBookmarks":null,"exportBookmarks":null,"runUserscript":null,"openMenu":"Menü megnyitása","enterReaderView":"Lépj be az olvasó nézetbe","exitReaderView":"Kilépés az olvasó nézetből","newTabLabel":"Új fül","connectionNotSecure":"A kapcsolat ezzel az oldalal nem biztonságos.","searchbarPlaceholder":"Keresés vagy írja be a címet","privateTab":"Privát fül","newTabAction":"Új fül","viewTasks":"Feladat megtekintése","newTask":"Új feladat","defaultTaskName":"Feladat %n","taskDeleteWarning":{"unsafeHTML":null},"returnToTask":null,"taskDescriptionTwo":null,"taskDescriptionThree":null,"searchInPage":"Keresés az oldalon","findMatchesSingular":"%i a %t találat","findMatchesPlural":"%i a %t találatok","isFocusMode":"Most fókusz módban van.","closeDialog":"OK","focusModeExplanation1":null,"focusModeExplanation2":null,"timeRangeJustNow":"Idő intervalum, éppen most","timeRangeMinutes":"Idő intervalum, perc","timeRangeHour":"Idő intervalum, óra","timeRangeToday":null,"timeRangeYesterday":null,"timeRangeWeek":"Idő intervalum, hét","timeRangeMonth":"Idő intervalum, hónap","timeRangeYear":"Idő intervalum, év","timeRangeLongerAgo":"Idő intervalum, még régebbi","crashErrorTitle":"Ismeretlen hiba történt.","crashErrorSubtitle":"Hiba lépet fel az oldal menyitásákor.","errorPagePrimaryAction":"Próbálja újra","serverNotFoundTitle":"A szerver nem található","serverNotFoundSubtitle":"A Min nem találja a kért oldalt.","archiveSearchAction":"Keresés az archive.org-on","sslErrorTitle":"Ez az oldal nem elérhető","sslErrorMessage":"A Min nem tudott biztonságosan kapcsolódni az oldalhoz.","dnsErrorTitle":"Az oldal nem található","dnsErrorMessage":"DNS hiba történt.","offlineErrorTitle":"Nincs hálózati kapcsolat","offlineErrorMessage":"Kapcsolódjon az internethez és próbálja újra.","genericConnectionFail":"A Min nem tudta betölteni az oldalt.","sslTimeErrorMessage":"A Min nem tudott kapcsolódni biztonságosan az oldalhoz. Kérem ellenőrizze a számitógép óra beállítását.","addressInvalidTitle":"A cím hibás.","genericError":"Hiba lépett fel","phishingErrorTitle":"Ez az oldal ártalmas lehet.","phishingErrorMessage":"Ez az oldal személjes adatokat próbál lopni, mint. pl. a jelszavakat, vagy bankolási információkat.","phishingErrorVisitAnyway":"Megtekintés és oldal betöltése","phishingErrorLeave":"Hadja el az oldalt","multipleInstancesErrorMessage":"Hiba lépett fel, kérlek zárd be az összes böngészőt ablakot, és indítsd újra a Min böngészőt","sessionRestoreErrorTitle":"Egy hiba lépett fel","sessionRestoreErrorExplanation":"A mentett fület nem sikerült helyreállítani.","sessionRestoreErrorBackupInfo":"Egy biztonsági mentést készitettünk: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Ha a probléma nem múlik el, <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">itt nyisson</a> egy hibajelentést."},"settingsPreferencesHeading":"Beállítások","settingsRestartRequired":"Újra kell inditani, hogy a változások életbe lépjenek.","settingsPrivacyHeading":"Tartalom tiltása","settingsContentBlockingLevel0":null,"settingsContentBlockingLevel1":null,"settingsContentBlockingLevel2":null,"settingsContentBlockingExceptions":null,"settingsBlockScriptsToggle":"Szkriptek tiltása","settingsBlockImagesToggle":"Képek tiltása","settingsBlockedRequestCount":{"unsafeHTML":null},"settingsCustomizeFiltersLink":null,"settingsAppearanceHeading":"Megjelenés","settingsEnableDarkMode":"Kapcsolja be a sötét nézetet:","settingsDarkModeNever":null,"settingsDarkModeNight":null,"settingsDarkModeAlways":null,"settingsSiteThemeToggle":null,"settingsAdditionalFeaturesHeading":"További beállítások","settingsUserscriptsToggle":"Felhasználói szkriptek","settingsShowDividerToggle":null,"settingsSeparateTitlebarToggle":null,"settingsOpenTabsInForegroundToggle":null,"settingsUserscriptsExplanation":"Felhasználói szkript magyarázat","settingsUserAgentToggle":null,"settingsUpdateNotificationsToggle":null,"settingsSearchEngineHeading":"Keresőmotor","settingsDefaultSearchEngine":"Válasza ki az alap keresőmotort:","settingsDDGExplanation":"Állitsa be a DuckDuckGo keresőmotort, hogy lássa a válaszokat a keresősorban.","customSearchEngineDescription":null,"settingsKeyboardShortcutsHeading":"Billentyű kombinációk","settingsKeyboardShortcutsHelp":"Használj több kombináció megadásához.","settingsProxyHeading":null,"settingsNoProxy":null,"settingsManualProxy":null,"settingsAutomaticProxy":null,"settingsProxyRules":null,"settingsProxyBypassRules":null,"settingsProxyConfigurationURL":null,"appMenuFile":"Fájl","appMenuNewTab":"Új fül","appMenuDuplicateTab":"Fül duplikálása","appMenuNewPrivateTab":"Új privát fül","appMenuNewTask":"Új feladat","appMenuSavePageAs":"Oldal mentése másként","appMenuPrint":"Nyomtatás","appMenuEdit":"Szerkeszt","appMenuUndo":"Viszaállít","appMenuRedo":"Újra","appMenuCut":"Kivágás","appMenuCopy":"Másolás","appMenuPaste":"Beillesztés","appMenuSelectAll":"Mindent kiválaszt","appMenuFind":"Keresés","appMenuView":"Nézet","appMenuZoomIn":"Nagyitás","appMenuZoomOut":"Kicsinyítés","appMenuActualSize":"Eredeti méret","appMenuFullScreen":"Teljes képernyő","appMenuFocusMode":"Fókusz mód","appMenuBookmarks":"Könyvjelzők","appMenuHistory":"Régebben látogatott oldalak","appMenuDeveloper":"Fejlesztő","appMenuReloadBrowser":"Böngésző újratöltése","appMenuInspectBrowser":"Böngésző ellenőrzése","appMenuInspectPage":"Oldal ellenőrzése","appMenuWindow":"Ablak","appMenuMinimize":"Minimalizálás","appMenuClose":"Bezárás","appMenuAlwaysOnTop":null,"appMenuHelp":"Segitség","appMenuKeyboardShortcuts":"Billentyű kombinációk","appMenuReportBug":"Hiba jelentése","appMenuTakeTour":"Túra megtekintése","appMenuViewGithub":"Megtekint GitHubon","appMenuAbout":"A termékről %n","appMenuPreferences":"Beállítások","appMenuServices":"Szolgáltatások","appMenuHide":"Elrejtés %n","appMenuHideOthers":"Többi elrejtése","appMenuShowAll":"Mindent mutat","appMenuQuit":"Kilépés %n","appMenuBringToFront":"Mindent előtérbe hoz","PDFPageCounter":{"unsafeHTML":"oldal <input type='text'/> ből <span id='total'></span>"},"buttonReaderSettings":null,"buttonReaderLightTheme":null,"buttonReaderSepiaTheme":null,"buttonReaderDarkTheme":null,"openReaderView":null,"autoRedirectBannerReader":null,"buttonReaderRedirectYes":null,"buttonReaderRedirectNo":null,"articleReaderView":null,"downloadCancel":"Mégsem","downloadStateCompleted":"Letöltés sikeresen befejeződött","downloadStateFailed":"Letöltés nem sikerült","updateNotificationTitle":null}},"it":{"name":"Italiano","identifier":"it","translations":{"addToDictionary":null,"pictureInPicture":null,"openInNewTab":"Apri in nuova scheda","openInNewPrivateTab":"Apri in nuova scheda privata","saveLinkAs":null,"viewImage":"Visualizza immagine","openImageInNewTab":"Apri immagine in nuova scheda","openImageInNewPrivateTab":"Apri immagine in nuova scheda privata","saveImageAs":"Salva immagine con nome","searchWith":"Cerca con %s","copyLink":"Copia Link","copyEmailAddress":null,"selectAll":"Seleziona Tutto","undo":"Annulla","redo":"Ripeti","cut":"Taglia","copy":"Copia","paste":"Incolla","goBack":"Indietro","goForward":"Avanti","inspectElement":"Ispeziona elemento","pasteAndGo":null,"DDGAnswerSubtitle":"Risposta","suggestedSite":"Sito suggerito","resultsFromDDG":"Risultati di DuckDuckGo","taskN":"Task %n","showMoreBangs":"Mostra di più","viewSettings":"Vedi Impostazioni","takeScreenshot":"Cattura Screenshot","clearHistory":"Svuota la cronologia","enableBlocking":null,"disableBlocking":null,"clearHistoryConfirmation":"Cancellare tutti i dati di navigazione?","switchToTask":"Passa a Task","createTask":"Crea un Task","closeTask":"Chiudi un Task","moveToTask":"Sposta questa scheda in un task","nameTask":"Dai un nome a questo task","addBookmark":null,"searchBookmarks":"Cerca nei Preferiti","bookmarksAddTag":null,"bookmarksSimilarItems":null,"searchHistory":"Cerca nella cronologia","importBookmarks":null,"exportBookmarks":"Esporta Preferiti","runUserscript":null,"openMenu":"Apri menu","enterReaderView":"Entra in Modalità Lettura","exitReaderView":"Esci dalla Modalità Lettura","newTabLabel":"Nuova scheda","connectionNotSecure":"La tua connessione a questo sito non è sicura..","searchbarPlaceholder":"Cerca o inserisci indirizzo","privateTab":"Scheda privata","newTabAction":"Nuova scheda","viewTasks":"Mostra Task","newTask":"Nuovo Task","defaultTaskName":"Task %n","taskDeleteWarning":{"unsafeHTML":"Task eliminato. <a>Annullare?</a>"},"returnToTask":"Torna al task precedente","taskDescriptionTwo":"%t , %t","taskDescriptionThree":"%t, %t, e altri %n","searchInPage":"Cerca nella pagina","findMatchesSingular":"%i su %t risultato","findMatchesPlural":"%i su %t risultati","isFocusMode":"Sei in Modalità Focus.","closeDialog":"OK","focusModeExplanation1":null,"focusModeExplanation2":null,"timeRangeJustNow":"Proprio ora","timeRangeMinutes":"Pochi minuti fa","timeRangeHour":"Quest'ora","timeRangeToday":"Oggi","timeRangeYesterday":"Ieri","timeRangeWeek":"Questa settimana","timeRangeMonth":"Questo mese","timeRangeYear":"Quest'anno","timeRangeLongerAgo":"Longer ago","crashErrorTitle":"Qualcosa non ha funzionato.","crashErrorSubtitle":"Si è verificato un errore nella visualizzazione di questa pagina.","errorPagePrimaryAction":"Riprova","serverNotFoundTitle":"Server non trovato","serverNotFoundSubtitle":"Min non è riuscito a trovare il server.","archiveSearchAction":"Cerca su archive.org","sslErrorTitle":"Questo sito non è disponibile","sslErrorMessage":"Min non ha potuto stabilire una connessione sicura con questo sito.","dnsErrorTitle":"Sito non trovato","dnsErrorMessage":"Si è verificato un errore DNS.","offlineErrorTitle":"Sei offline","offlineErrorMessage":"Riconnettiti ad Internet e riprova.","genericConnectionFail":"Min non ha potuto connettersi a questo sito.","sslTimeErrorMessage":"Min non ha potuto stabilire una connessione sicura con questo sito. Assicurati che l'orologio di questo computer sia impostato correttamente.","addressInvalidTitle":"Questo indirizzo non è valido.","genericError":"Si è verificato un errore","phishingErrorTitle":"Questo sito è pericoloso.","phishingErrorMessage":"Questo sito potrebbe cercare di rubare i tuoi dati sensibili, come password o credenziali bancarie.","phishingErrorVisitAnyway":"Visita sito comunque","phishingErrorLeave":"Portami via da questo sito","multipleInstancesErrorMessage":"Si è verificato un errore. Chiudi ogni altra instanza e riavvia Min.","sessionRestoreErrorTitle":"Si è verificato un errore","sessionRestoreErrorExplanation":"Impossibile recuperare le schede precedentemente aperte.","sessionRestoreErrorBackupInfo":"Min ha salvato un backup dei tuoi dati in: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Se questo errore persiste, apri un nuovo issue <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">qui</a>."},"settingsPreferencesHeading":"Impostazioni","settingsRestartRequired":"Devi riavviare Min per applicare queste modifiche.","settingsPrivacyHeading":"Blocco contenuti","settingsContentBlockingLevel0":"Autorizza Pubblicità e tracker","settingsContentBlockingLevel1":"Blocca Pubblicità e tracker di terze parti","settingsContentBlockingLevel2":"Blocca tutte le pubblicità e i tracker","settingsContentBlockingExceptions":"Consenti pubblicità sui seguenti siti:","settingsBlockScriptsToggle":"Blocca script","settingsBlockImagesToggle":"Blocca immagini","settingsBlockedRequestCount":{"unsafeHTML":null},"settingsCustomizeFiltersLink":null,"settingsAppearanceHeading":"Aspetto","settingsEnableDarkMode":"Abilita dark mode:","settingsDarkModeNever":null,"settingsDarkModeNight":null,"settingsDarkModeAlways":null,"settingsSiteThemeToggle":"Abilita tema adattivo (si adatta al sito)","settingsAdditionalFeaturesHeading":"Funzionalità aggiuntive","settingsUserscriptsToggle":"Abilita script definiti dall'utente","settingsShowDividerToggle":null,"settingsSeparateTitlebarToggle":null,"settingsOpenTabsInForegroundToggle":null,"settingsUserscriptsExplanation":{"unsafeHTML":"Gli script definiti dall'utente ti permettono di modificare il comportamento dei siti - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">scopri di più</a>."},"settingsUserAgentToggle":null,"settingsUpdateNotificationsToggle":"Controlla automaticamente la presenza di aggiornamenti","settingsSearchEngineHeading":"Motore di ricerca","settingsDefaultSearchEngine":"Scegli un motore di ricerca predefinito:","settingsDDGExplanation":"Imposta DuckDuckGo come motore di ricerca predefinito per vedere risposte istantanee nella barra di ricerca.","customSearchEngineDescription":"Sostituisci il termine di ricerca con %s","settingsKeyboardShortcutsHeading":"Scorciatoie da tastiera","settingsKeyboardShortcutsHelp":"Utilizza una virgola per separare scorciatoie multiple.","settingsProxyHeading":null,"settingsNoProxy":null,"settingsManualProxy":null,"settingsAutomaticProxy":null,"settingsProxyRules":null,"settingsProxyBypassRules":null,"settingsProxyConfigurationURL":null,"appMenuFile":"File","appMenuNewTab":"Nuova scheda","appMenuDuplicateTab":"Duplica scheda","appMenuNewPrivateTab":"Nuova scheda privata","appMenuNewTask":"Nuovo task","appMenuSavePageAs":"Salva pagina con nome","appMenuPrint":"Stampa","appMenuEdit":"Modifica","appMenuUndo":"Annulla","appMenuRedo":"Ripeti","appMenuCut":"Taglia","appMenuCopy":"Copia","appMenuPaste":"Incolla","appMenuSelectAll":"Seleziona tutto","appMenuFind":"Trova","appMenuView":"Vista","appMenuZoomIn":"Aumenta zoom","appMenuZoomOut":"Riduci zoom","appMenuActualSize":"Dimensioni reali","appMenuFullScreen":"Schermo Intero","appMenuFocusMode":"Modalità Focus","appMenuBookmarks":"Preferiti","appMenuHistory":"Cronologia","appMenuDeveloper":"Sviluppo","appMenuReloadBrowser":"Ricarica browser","appMenuInspectBrowser":"Ispeziona browser","appMenuInspectPage":"Ispeziona pagina","appMenuWindow":"Finestra","appMenuMinimize":"Minimizza","appMenuClose":"Chiudi","appMenuAlwaysOnTop":null,"appMenuHelp":"Aiuto","appMenuKeyboardShortcuts":"Scorciatoie da tastiera","appMenuReportBug":"Segnala un bug","appMenuTakeTour":"Fai un tour","appMenuViewGithub":"Vedi su GitHub","appMenuAbout":"A proposito di %n","appMenuPreferences":"Preferenze","appMenuServices":"Servizi","appMenuHide":"Nascondi %n","appMenuHideOthers":"Nascondi altre","appMenuShowAll":"Mostra tutte","appMenuQuit":"Esci da %n","appMenuBringToFront":"Porta avanti","PDFPageCounter":{"unsafeHTML":"pagina <input type='text'/> su <span id='total'></span>"},"buttonReaderSettings":null,"buttonReaderLightTheme":null,"buttonReaderSepiaTheme":null,"buttonReaderDarkTheme":null,"openReaderView":null,"autoRedirectBannerReader":null,"buttonReaderRedirectYes":null,"buttonReaderRedirectNo":null,"articleReaderView":null,"downloadCancel":"Annulla","downloadStateCompleted":"Completato","downloadStateFailed":"Fallito","updateNotificationTitle":"Una nuova versione di Min è disponibile"}},"ja":{"name":"日本語","identifier":"ja","translations":{"addToDictionary":"辞書に追加","pictureInPicture":"ピクチャーインピクチャー","openInNewTab":"新規タブで開く","openInNewPrivateTab":"新規プライベートタブで開く","saveLinkAs":"リンクを名前を付けて保存...","viewImage":"画像を表示","openImageInNewTab":"画像を新規タブで開く","openImageInNewPrivateTab":"画像を新規プライベートタブで開く","saveImageAs":"画像を別名で保存","searchWith":"%s で検索","copyLink":"リンクをコピー","copyEmailAddress":"メールアドレスをコピー","selectAll":"すべて表示する","undo":"アンドゥ","redo":"やり直し","cut":"カット","copy":"コピー","paste":"ペースト","goBack":"戻る","goForward":"進む","inspectElement":"要素を検証","pasteAndGo":"貼り付けて移動","DDGAnswerSubtitle":"インスタントアンサー","suggestedSite":"おすすめサイト","resultsFromDDG":"DuckDuckGoからの結果","taskN":"タスク %n","showMoreBangs":"すべて表示する","viewSettings":"設定を表示","takeScreenshot":"スクリーンショットを撮る","clearHistory":"すべての履歴をクリア","enableBlocking":"このサイトのコンテンツブロックを有効にする","disableBlocking":"このサイトのコンテンツブロックを無効にする","clearHistoryConfirmation":"履歴をクリアしてもよろしいですか？","switchToTask":"タスクに切り替える","createTask":"タスクを作成","closeTask":"タスクを閉じる","moveToTask":"このタブをタスクに移動","nameTask":"このタスクの名前","addBookmark":"ブックマークを追加","searchBookmarks":"ブックマークを検索","bookmarksAddTag":"タグを追加...","bookmarksSimilarItems":"類似アイテム","searchHistory":"検索履歴","importBookmarks":"HTMLファイルからブックマークをインポートする","exportBookmarks":"ブックマークをエクスポート","runUserscript":"ユーザースクリプトを実行","openMenu":"メニューを開く","enterReaderView":"リーダービューを開始","exitReaderView":"リーダービューを終了","newTabLabel":"新しいタブ","connectionNotSecure":"このウェブサイトへの接続は保護されていません。","searchbarPlaceholder":"検索ワードまたはアドレスを入力","privateTab":"プライベートタブ","newTabAction":"新規タブを開く","viewTasks":"タスクを表示","newTask":"新規タスク","defaultTaskName":"タスク %n","taskDeleteWarning":{"unsafeHTML":"タスクは削除されます。 <a>キャンセル?</a>"},"returnToTask":"前のタスクに戻る","taskDescriptionTwo":"％tと％t","taskDescriptionThree":"％t, ％t, ％n以上","searchInPage":"ページ内を検索","findMatchesSingular":"%t 件中 %i 件目","findMatchesPlural":"%t 件中 %i 件目","isFocusMode":"フォーカスモード中です","closeDialog":"OK","focusModeExplanation1":"フォーカスモードでは、新しいタブを作成したり、タスクを切り替えたりすることはできません。","focusModeExplanation2":"表示メニューの「フォーカスモード」のチェックを外すと、フォーカスモードを終了できます。","timeRangeJustNow":"ちょうど今","timeRangeMinutes":"数分前に","timeRangeHour":"過去1時間に","timeRangeToday":"今日","timeRangeYesterday":"昨日","timeRangeWeek":"先週","timeRangeMonth":"先月","timeRangeYear":"昨年は","timeRangeLongerAgo":"ずっと前","crashErrorTitle":"予期しない問題が発生しました","crashErrorSubtitle":"ページの表示中に問題が発生しました。","errorPagePrimaryAction":"再試行する","serverNotFoundTitle":"サーバーが見つかりません","serverNotFoundSubtitle":"Minはこのウェブサイトを見つけることができませんでした。","archiveSearchAction":"archive.orgで検索する","sslErrorTitle":"このウェブサイトは利用できません","sslErrorMessage":"Minはこのウェブサイトとの安全な接続を行えませんでした。","dnsErrorTitle":"ウェブサイトが見つかりません","dnsErrorMessage":"DNSエラーが発生しました。","offlineErrorTitle":"オフラインです","offlineErrorMessage":"インターネットに再接続してからもう一度お試しください。","genericConnectionFail":"Minはウェブサイトに接続できませんでした。","sslTimeErrorMessage":"Minはこのウェブサイトとの安全な接続を行えませんでした。お使いのコンピューターの時刻が正しく設定されているか確認してください。","addressInvalidTitle":"このアドレスは無効です。","genericError":"エラーが発生しました","phishingErrorTitle":"このサイトは安全ではない可能性があります。","phishingErrorMessage":"このウェブサイトは、あなたのパスワードや口座情報などの個人情報を盗もうとしている可能性があります。","phishingErrorVisitAnyway":"それでもこのサイトを訪問する","phishingErrorLeave":"このサイトから離れる","multipleInstancesErrorMessage":"エラーが発生しました。 他の開いているインスタンスを閉じてMinを再起動してください。","sessionRestoreErrorTitle":"エラーが発生しました","sessionRestoreErrorExplanation":"保存したタブを正しく復元できませんでした。","sessionRestoreErrorBackupInfo":"次の場所にデータのバックアップを保存しました: %l","sessionRestoreErrorLinkInfo":{"unsafeHTML":"もしこのエラーが立て続けに発生する場合は、<a href=\"https://github.com/minbrowser/min\" target=\"_blank\">こちら</a>から新しいissueを開いてください。"},"settingsPreferencesHeading":"環境設定","settingsRestartRequired":"これらの変更を適用するには再起動が必要です。","settingsPrivacyHeading":"コンテンツブロッカー","settingsContentBlockingLevel0":"すべての広告とトラッカーを許可します","settingsContentBlockingLevel1":"第三者の広告やトラッカーをブロックする","settingsContentBlockingLevel2":"すべての広告とトラッカーをブロックする","settingsContentBlockingExceptions":"これらのウェブサイトでは広告は引き続き許可されます:","settingsBlockScriptsToggle":"スクリプトをブロック","settingsBlockImagesToggle":"画像をブロック","settingsBlockedRequestCount":{"unsafeHTML":"これまでのところ、Minは<strong></strong>の広告とトラッカーをブロックしています。"},"settingsCustomizeFiltersLink":"フィルターをカスタマイズする","settingsAppearanceHeading":"外観","settingsEnableDarkMode":"ダークモードを使用:","settingsDarkModeNever":"決して","settingsDarkModeNight":"夜に","settingsDarkModeAlways":"常に","settingsSiteThemeToggle":"サイトテーマを有効にする","settingsAdditionalFeaturesHeading":"追加機能","settingsUserscriptsToggle":"ユーザースクリプトを有効にする","settingsShowDividerToggle":"タブ間の仕切りを表示","settingsSeparateTitlebarToggle":"別のタイトルバーを使用する","settingsOpenTabsInForegroundToggle":"フォアグラウンドで新しいタブを開く","settingsUserscriptsExplanation":{"unsafeHTML":"ユーザースクリプトを使用して、Webサイトの動作を変更できます -  <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">詳細</a>。"},"settingsUserAgentToggle":"カスタムユーザーエージェントを使用する","settingsUpdateNotificationsToggle":"アップデートを自動的に確認する","settingsSearchEngineHeading":"検索エンジン","settingsDefaultSearchEngine":"デフォルトの検索エンジン:","settingsDDGExplanation":"検索バーにインスタントアンサーを表示するには、DuckDuckGoをデフォルトの検索エンジンに設定してください。","customSearchEngineDescription":"検索語を％sに置き換えます","settingsKeyboardShortcutsHeading":"キーボードショートカット","settingsKeyboardShortcutsHelp":"カンマ区切りで複数のショートカットを登録できます。","settingsProxyHeading":"プロキシ","settingsNoProxy":"プロキシなし","settingsManualProxy":"手動設定","settingsAutomaticProxy":"自動構成","settingsProxyRules":"プロキシルール：","settingsProxyBypassRules":"プロキシなし：","settingsProxyConfigurationURL":"構成URL","appMenuFile":"ファイル","appMenuNewTab":"新規タブ","appMenuDuplicateTab":"重複タブ","appMenuNewPrivateTab":"新規プライベートタブ","appMenuNewTask":"新規タスク","appMenuSavePageAs":"ページを別名で保存","appMenuPrint":"プリント","appMenuEdit":"編集","appMenuUndo":"取り消す","appMenuRedo":"やり直す","appMenuCut":"カット","appMenuCopy":"コピー","appMenuPaste":"ペースト","appMenuSelectAll":"すべて選択","appMenuFind":"検索","appMenuView":"表示","appMenuZoomIn":"拡大","appMenuZoomOut":"縮小","appMenuActualSize":"実際のサイズ","appMenuFullScreen":"フルスクリーン","appMenuFocusMode":"フォーカスモード","appMenuBookmarks":"ブックマーク","appMenuHistory":"歴史","appMenuDeveloper":"開発","appMenuReloadBrowser":"ブラウザを再読み込み","appMenuInspectBrowser":"ブラウザを検証","appMenuInspectPage":"ページを検証","appMenuWindow":"ウインドウ","appMenuMinimize":"最小化","appMenuClose":"閉じる","appMenuAlwaysOnTop":"常にトップに","appMenuHelp":"ヘルプ","appMenuKeyboardShortcuts":"キーボードショートカット","appMenuReportBug":"バグを報告","appMenuTakeTour":"ツアーを見る","appMenuViewGithub":"GitHubで表示","appMenuAbout":"%nについて","appMenuPreferences":"環境設定","appMenuServices":"サービス","appMenuHide":"%nを隠す","appMenuHideOthers":"ほかを隠す","appMenuShowAll":"すべてを表示","appMenuQuit":"%nを終了","appMenuBringToFront":"すべてを最前面に移動","PDFPageCounter":{"unsafeHTML":"<span id='total'></span> ページ中 <input type='text'/> ページ目"},"buttonReaderSettings":"読み取りモードの設定","buttonReaderLightTheme":"光","buttonReaderSepiaTheme":"セピア","buttonReaderDarkTheme":"闇","openReaderView":"常にリーダーモードで開く","autoRedirectBannerReader":"このサイトの記事を常にリーダーモードで開きますか？","buttonReaderRedirectYes":"はい","buttonReaderRedirectNo":"いいえ","articleReaderView":"原著","downloadCancel":"キャンセル","downloadStateCompleted":"完了しました","downloadStateFailed":"フェイル","updateNotificationTitle":"Minの新しいバージョンが利用可能です。","settingsPasswordAutoFillHeadline":"パスワードの自動入力","settingsSelectPasswordManager":"サポートされているパスワードマネージャのいずれかを選択します。","keychainViewPasswords":"保存したパスワードを表示する","passwordManagerSetupHeading":"自動入力を使用するための％pの設定を完了してください","passwordManagerSetupStep1":{"unsafeHTML":"最初に <a id='password-manager-setup-link'></a> 、システムに展開します。"},"passwordManagerInstallerSetup":{"unsafeHTML":"<a id='password-manager-setup-link-installer'></a>をダウンロードして、ファイルを下のボックスにドラッグします。"},"passwordManagerSetupLink":"％p CLIツールをダウンロード","passwordManagerSetupLinkInstaller":"％pインストーラーCLI","passwordManagerSetupStep2":"次に、ツールを下のボックスにドラッグします。","passwordManagerSetupDragBox":"ここにツールをドラッグ","passwordManagerSetupInstalling":"インストールしています...","passwordManagerSetupSignIn":"パスワードマネージャーにログインして、自動入力の使用を開始します。 資格情報はMin内のどこにも保存されません。","disableAutofill":"自動入力を無効にする","passwordManagerSetupUnlockError":"パスワードストアのロック解除に失敗しました： ","passwordManagerSetupRetry":"正しいファイルを使用し、正しいパスワードを入力していることを確認してください。 ここにツールをもう一度ドラッグすると、再試行できます。","passwordManagerUnlock":"％pマスターパスワードを入力して、パスワードストアのロックを解除します。","passwordCaptureSavePassword":"％sのパスワードを保存しますか？","passwordCaptureSave":"保存する","passwordCaptureDontSave":"保存しないで","savedPasswordsHeading":"保存されたパスワード","savedPasswordsEmpty":"保存されたパスワードはありません。","deletePassword":"％sのパスワードを削除しますか？","loginPromptTitle":"％hにサインイン（％r）","dialogConfirmButton":"確認する","dialogSkipButton":"キャンセル","username":"ユーザー名","email":"Eメール","password":"パスワード","secretKey":"秘密鍵"}},"ko":{"name":"한국어","identifier":"ko","translations":{"addToDictionary":"사전에 추가","pictureInPicture":"화면 속 화면(Picture in Picture)","openInNewTab":"새 작업","openInNewPrivateTab":"새 개인 작업","saveLinkAs":"다른 이름으로 저장","viewImage":"그림 보기","openImageInNewTab":"새 작업에서 그림 열기","openImageInNewPrivateTab":"새 개인 작업에서 그림 열기","saveImageAs":"그림을 다른 이름으로 저장","searchWith":"%s에서 검색","copyLink":"주소 복사","copyEmailAddress":"전자우편주소 복사","selectAll":"전체선택","undo":"되돌리기","redo":"재실행","cut":"오리기","copy":"복사하기","paste":"붙여넣기","goBack":"뒤로","goForward":"앞으로","inspectElement":"요소 검사","pasteAndGo":"붙여넣기 및 이동","DDGAnswerSubtitle":"응답","suggestedSite":"제안 누리집","resultsFromDDG":"덕덕고(DuckDuckGo) 검색 결과","taskN":"작업장 %n","showMoreBangs":"더 보기","viewSettings":"설정","takeScreenshot":"갈무리","clearHistory":"기록 삭제","enableBlocking":"이 누리집에 콘텐츠 차단 활성","disableBlocking":"이 누리집에 콘텐츠 차단 비활성","clearHistoryConfirmation":"모든 기록 및 통신망 사용 정보를 삭제 하시겠습니까?","switchToTask":"작업장 변경","createTask":"작업장 생성","closeTask":"작업장 닫기","moveToTask":"작업장으로 작업 이동","nameTask":"작업장 이름","addBookmark":"즐겨찾기 추가","searchBookmarks":"즐겨찾기 검색","bookmarksAddTag":"꼬리표 추가...","bookmarksSimilarItems":"비슷한 항목","searchHistory":"기록 검색","importBookmarks":"즐겨찾기 목록 가져오기","exportBookmarks":"즐겨찾기 목록 내보내기","runUserscript":"사용자 명령(스크립트) 실행","openMenu":"도구 일람","enterReaderView":"읽기 지원","exitReaderView":"읽기 지원 종료","newTabLabel":"새 작업","connectionNotSecure":"이 누리집에 대한 연결이 안전하지 않습니다.","searchbarPlaceholder":"주소 검색 또는 입력","privateTab":"개인 작업","newTabAction":"새 작업","viewTasks":"작업장 보기","newTask":"새 작업장","defaultTaskName":"작업장 %n","taskDeleteWarning":{"unsafeHTML":"작업장을 제거했습니다. <a>되돌릴까요?</a>"},"returnToTask":"이전 작업장으로 돌아가기","taskDescriptionTwo":"%t 그리고 %t","taskDescriptionThree":"%t, %t, 그리고 %n개의 작업","searchInPage":"여기서 검색","findMatchesSingular":"%t 의 %i 일치","findMatchesPlural":"%t 의 %i 일치","isFocusMode":"집중 지원 상태입니다.","closeDialog":"닫기","focusModeExplanation1":"집중 지원 상태에서는 새 작업을 열거나 다른 작업으로 전환할 수 없습니다.","focusModeExplanation2":"보기 범주에서 \"집중 지원\"을 선택 해제하여 집중 지원을 종료할 수 있습니다.","timeRangeJustNow":"방금","timeRangeMinutes":"몇분 전","timeRangeHour":"몇시간 전","timeRangeToday":"오늘","timeRangeYesterday":"어제","timeRangeWeek":"지난 주","timeRangeMonth":"지난 달","timeRangeYear":"작년","timeRangeLongerAgo":"오래전","crashErrorTitle":"문제가 발생했습니다.","crashErrorSubtitle":"이 문서를 표시하는 동안 문제가 발생했습니다.","errorPagePrimaryAction":"다시 시도","serverNotFoundTitle":"제공되는 연결망을 찾을 수 없습니다","serverNotFoundSubtitle":"누리집을 찾을 수 없습니다.","archiveSearchAction":"archive.org 에서 검색","sslErrorTitle":"누리집을 사용할 수 없습니다.","sslErrorMessage":"안전한 연결을 할 수 없습니다.","dnsErrorTitle":"누리집을 찾을 수 없습니다.","dnsErrorMessage":"DNS 오류가 발생했습니다.","offlineErrorTitle":"통신망에 연결되지 않은 상태입니다.","offlineErrorMessage":"통신망에 재연결 후에, 다시 시도해주세요.","genericConnectionFail":"누리집에 연결할 수 없습니다.","sslTimeErrorMessage":"안전한 연결을 할 수 없습니다. 사용 장비의 시간 설정을 확인해주세요.","addressInvalidTitle":"유효하지 않은 주소입니다.","genericError":"오류 발생","phishingErrorTitle":"유해한 누리집입니다.","phishingErrorMessage":"이 누리집에서는 암호 또는 은행 정보와 같은 개인 정보가 도용될 수 있습니다.","phishingErrorVisitAnyway":"(그럼에도 불구하고) 들어가기","phishingErrorLeave":"나가기","multipleInstancesErrorMessage":"오류가 발생했습니다. 다른 창을 종료 후 재실행해주세요.","sessionRestoreErrorTitle":"오류 발생","sessionRestoreErrorExplanation":"저장된 작업 자료를 정상적으로 복원할 수 없습니다.","sessionRestoreErrorBackupInfo":"복원용 작업 자료 저장위치: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"오류가 계속 발생하면 <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">문의</a> 바랍니다."},"settingsPreferencesHeading":"환경설정","settingsRestartRequired":"변경 사항을 적용하려면 다시 시작해야 합니다.","settingsPrivacyHeading":"내용물 차단","settingsContentBlockingLevel0":"모든 광고와 추적 허용","settingsContentBlockingLevel1":"타사 광고와 추적 차단","settingsContentBlockingLevel2":"모든 광고와 추적 차단","settingsContentBlockingExceptions":"다음의 누리집에서 광고 허용","settingsBlockScriptsToggle":"명령(스크립트) 차단","settingsBlockImagesToggle":"그림 차단","settingsBlockedRequestCount":{"unsafeHTML":"지금까지 민(Min)은 <strong></strong> 광고 및 추적기를 차단했습니다."},"settingsCustomizeFiltersLink":"사용자 정의 필터","settingsAppearanceHeading":"외형","settingsEnableDarkMode":"어두운 외형(Dark Mode) 사용:","settingsDarkModeNever":"사용하지 않음","settingsDarkModeNight":"밤에만 사용","settingsDarkModeAlways":"항상 사용","settingsSiteThemeToggle":"누리집 색상 주제 사용","settingsAdditionalFeaturesHeading":"추가 기능","settingsUserscriptsToggle":"사용자 명령(스크립트) 사용","settingsShowDividerToggle":"작업 사이에 구분선 표시","settingsSeparateTitlebarToggle":"제목 표시줄과 도구 표시줄 사용","settingsOpenTabsInForegroundToggle":"작업을 열 때 전면(Foreground)으로 열기","settingsUserscriptsExplanation":{"unsafeHTML":"사용자 명령(스크립트)을 사용하면 누리집의 행동을 수정할 수 있습니다. - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">더보기</a>."},"settingsUserAgentToggle":"사용자 정의 에이전트(UserAgent) 사용","settingsUpdateNotificationsToggle":"판올림 자동 확인","settingsSearchEngineHeading":"검색 도구","settingsDefaultSearchEngine":"기본 검색 도구:","settingsDDGExplanation":"덕덕고(DuckDuckGo)를 기본 검색 도구로 설정하여 검색 창에서 바로 검색해 보세요.","customSearchEngineDescription":"검색어 변경: %s","settingsKeyboardShortcutsHeading":"단축키","settingsKeyboardShortcutsHelp":"여러 개의 단축키는 쉼표로 구분됩니다.","settingsProxyHeading":"프록시","settingsNoProxy":"사용하지 않음","settingsManualProxy":"수동 설정","settingsAutomaticProxy":"자동 설정","settingsProxyRules":"프록시 규칙:","settingsProxyBypassRules":"다음에서 프록시를 사용하지 않음:","settingsProxyConfigurationURL":"URL 설정","appMenuFile":"작업","appMenuNewTab":"새 작업","appMenuDuplicateTab":"작업 복제","appMenuNewPrivateTab":"새 개인 작업","appMenuNewTask":"새 작업장","appMenuSavePageAs":"문서를 다른 이름으로 저장","appMenuPrint":"인쇄","appMenuEdit":"편집","appMenuUndo":"되돌리기","appMenuRedo":"재실행","appMenuCut":"오려두기","appMenuCopy":"복사하기","appMenuPaste":"붙여넣기","appMenuSelectAll":"전체 선택","appMenuFind":"찾기","appMenuView":"보기","appMenuZoomIn":"확대","appMenuZoomOut":"축소","appMenuActualSize":"실제 크기","appMenuFullScreen":"전체 화면","appMenuFocusMode":"집중 지원","appMenuBookmarks":"즐겨찾기","appMenuHistory":"기록","appMenuDeveloper":"개발자","appMenuReloadBrowser":"새로고침","appMenuInspectBrowser":"검사","appMenuInspectPage":"문서 검사","appMenuWindow":"창","appMenuMinimize":"최소화","appMenuClose":"닫기","appMenuAlwaysOnTop":"상단에 고정","appMenuHelp":"도움말","appMenuKeyboardShortcuts":"단축키","appMenuReportBug":"오류 전송","appMenuTakeTour":"둘러보기","appMenuViewGithub":"깃허브 방문","appMenuAbout":"%n 정보","appMenuPreferences":"환경설정","appMenuServices":"서비스","appMenuHide":"%n 숨기기","appMenuHideOthers":"다른것 숨기기","appMenuShowAll":"모두 보기","appMenuQuit":"%n 종료","appMenuBringToFront":"맨 앞으로","PDFPageCounter":{"unsafeHTML":"전체 <span id='total'></span> 쪽 중 <input type='text'/> 쪽"},"buttonReaderSettings":"읽기 지원 설정","buttonReaderLightTheme":"밝게","buttonReaderSepiaTheme":"흑갈색","buttonReaderDarkTheme":"어둡게","openReaderView":"항상 읽기 지원으로 열기","autoRedirectBannerReader":"이 누리집의 문서를 항상 읽기 지원으로 여시겠습니까?","buttonReaderRedirectYes":"네","buttonReaderRedirectNo":"아니오","articleReaderView":"원본 문서","downloadCancel":"취소","downloadStateCompleted":"완료됨","downloadStateFailed":"실패함","updateNotificationTitle":"새롭게 판올림된 민(Min) 사용 가능","settingsPasswordAutoFillHeadline":"비밀번호 자동완성","settingsSelectPasswordManager":"지원하는 비밀번호 관리자 중에서 하나를 선택하세요:","keychainViewPasswords":"저장된 비밀번호 표시","passwordManagerSetupHeading":"자동완성을 사용하려면 %p 설정을 완료하세요.","passwordManagerSetupStep1":{"unsafeHTML":"우선, <a id='password-manager-setup-link'></a>를 방문해 시스템에 내려받으세요."},"passwordManagerInstallerSetup":{"unsafeHTML":"<a id='password-manager-setup-link-installer'></a> 설치 파일을 내려받고 아래 박스 안에 끌어다 놓습니다:"},"passwordManagerSetupLink":"%p CLI 도구를 내려받으세요.","passwordManagerSetupLinkInstaller":"%p CLI 설치 프로그램","passwordManagerSetupStep2":"그 다음 도구를 아래 박스 안에 끌어다 놓습니다:","passwordManagerSetupDragBox":"도구를 여기에 끌어다 놓으세요.","passwordManagerSetupInstalling":"설치하는 중...","passwordManagerSetupSignIn":"자동완성을 사용하려면 비밀번호 관리자에 로그인하세요. 귀하의 자격증명은 민(Min)의 그 어디에도 저장되지 않습니다.","disableAutofill":"자동완성 비활성화","passwordManagerSetupUnlockError":"비밀번호 저장소를 여는데 실패했습니다: ","passwordManagerSetupRetry":"올바른 파일과 비밀번호를 사용하세요. 도구를 여기로 다시 끌어다 놓고 재시도할 수 있습니다.","passwordManagerUnlock":"비밀번호 저장소 사용을 위해 %p 비밀번호를 입력하세요:","passwordCaptureSavePassword":"%s 비밀번호를 저장할까요?","passwordCaptureSave":"저장","passwordCaptureDontSave":"저장하지 않음","savedPasswordsHeading":"저장된 비밀번호","savedPasswordsEmpty":"저장된 비밀번호 없음","deletePassword":"%s 비밀번호를 삭제할까요?","loginPromptTitle":"%h (%r)로 로그인","dialogConfirmButton":"확인","dialogSkipButton":"취소","username":"사용자 이름","email":"전자우편주소(E-Mail)","password":"비밀번호","secretKey":"비밀 보안 키"}},"lt":{"name":"Lietuvių","identifier":"lt","translations":{"addToDictionary":null,"pictureInPicture":null,"openInNewTab":"Atverti naujoje kortelėje","openInNewPrivateTab":"Atverti naujoje privačioje kortelėje","saveLinkAs":null,"viewImage":"Rodyti paveikslą","openImageInNewTab":"Atverti paveikslą naujoje kortelėje","openImageInNewPrivateTab":"Atverti paveikslą naujoje privačioje kortelėje","saveImageAs":"Įrašyti paveikslą kaip","searchWith":"Ieškoti naudojant %s","copyLink":"Kopijuoti nuorodą","copyEmailAddress":null,"selectAll":null,"undo":null,"redo":null,"cut":null,"copy":"Kopijuoti","paste":"Įdėti","goBack":"Grįžti","goForward":"Pirmyn","inspectElement":"Ištirti elementą","pasteAndGo":null,"DDGAnswerSubtitle":"Atsakymas","suggestedSite":"Siūloma svetainė","resultsFromDDG":"Rezultatai iš DuckDuckGo","taskN":"Užduotis %n","showMoreBangs":null,"viewSettings":"Rodyti nustatymus","takeScreenshot":"Padaryti ekrano kopiją","clearHistory":"Išvalyti visą istoriją","enableBlocking":null,"disableBlocking":null,"clearHistoryConfirmation":null,"switchToTask":"Perjungti į užduotį","createTask":"Sukurti užduotį","closeTask":null,"moveToTask":"Perkelti šią kortelę į užduotį","nameTask":null,"addBookmark":null,"searchBookmarks":"Ieškoti adresyno įrašų","bookmarksAddTag":null,"bookmarksSimilarItems":null,"searchHistory":"Ieškoti istorijos","importBookmarks":null,"exportBookmarks":null,"runUserscript":null,"openMenu":"Atverti meniu","enterReaderView":"Įeiti į skaitymo rodinį","exitReaderView":"Išeiti iš skaitymo rodinio","newTabLabel":"Nauja kortelė","connectionNotSecure":"Jūsų ryšys su šia svetaine nėra saugus.","searchbarPlaceholder":"Atlikite paiešką arba įveskite adresą","privateTab":"Privatii kortelė","newTabAction":"Nauja kortelė","viewTasks":"Rodyti užduotis","newTask":"Nauja užduotis","defaultTaskName":"Užduotis %n","taskDeleteWarning":{"unsafeHTML":null},"returnToTask":null,"taskDescriptionTwo":null,"taskDescriptionThree":null,"searchInPage":"Ieškoti puslapyje","findMatchesSingular":"%i iš %t atitikmens","findMatchesPlural":"%i iš %t atitikmenų","isFocusMode":"Jūs esate susitelkimo veiksenoje.","closeDialog":"Gerai","focusModeExplanation1":null,"focusModeExplanation2":null,"timeRangeJustNow":"Ką tik","timeRangeMinutes":"Prieš kelias minutes","timeRangeHour":"Per pastarąją valandą","timeRangeToday":null,"timeRangeYesterday":null,"timeRangeWeek":"Per pastarąją savaitę","timeRangeMonth":"Per pastarąjį mėnesį","timeRangeYear":"Per pastaruosius metus","timeRangeLongerAgo":"Dar seniau","crashErrorTitle":"Kažkas nutiko.","crashErrorSubtitle":"Atsirado problemų, atvaizduojant šį puslapį.","errorPagePrimaryAction":"Bandyti dar kartą","serverNotFoundTitle":"Serveris nerastas","serverNotFoundSubtitle":"Min nepavyko rasti šios internetinės svetainės.","archiveSearchAction":"Ieškoti ties archive.org","sslErrorTitle":"Ši internetinė svetainė yra neprieinama","sslErrorMessage":"Min nepavyko saugiai prisijungti prie šios internetinės svetainės.","dnsErrorTitle":"Internetinė svetainė nerasta","dnsErrorMessage":"Įvyko DNS klaida.","offlineErrorTitle":"Jūs esate atsijungę","offlineErrorMessage":"Iš naujo prisijunkite prie interneto ir bandykite dar kartą.","genericConnectionFail":"Min nepavyko prisijungti prie internetinės svetainės.","sslTimeErrorMessage":"Min nepavyko saugiai prisijungti prie šios internetinės svetainės. Įsitikinkite, kad jūsų kompiuterio laikrodis yra nustatytas teisingai.","addressInvalidTitle":"Šis adresas yra neteisingas.","genericError":"Įvyko klaida","phishingErrorTitle":"Ši svetainė gali jums pakenkti.","phishingErrorMessage":"Gali būti, kad ši svetainė bando pavogti jūsų asmeninę informaciją, tokią kaip slaptažodžiai ar banko informacija.","phishingErrorVisitAnyway":"Vis tiek apsilankyti svetainėje","phishingErrorLeave":"Išeiti iš šios svetainės","multipleInstancesErrorMessage":"Įvyko klaida. Užverkite bet kokius kitus atvertus egzempliorius ir paleiskite Min iš naujo.","sessionRestoreErrorTitle":"Įvyko klaida","sessionRestoreErrorExplanation":"Nepavyko teisingai atkurti jūsų įrašytų kortelių.","sessionRestoreErrorBackupInfo":"Įrašėme atsarginę jūsų duomenų kopiją šioje vietoje: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Jei ši klaida atsiranda ir toliau, tuomet praneškite apie problemą <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">čia</a>."},"settingsPreferencesHeading":"Nuostatos","settingsRestartRequired":"Norėdami taikyti šiuos pakeitimus, turite paleisti programą iš naujo.","settingsPrivacyHeading":"Turinio blokavimas","settingsContentBlockingLevel0":"Leisti visas reklamas ir seklius","settingsContentBlockingLevel1":"Blokuoti trečiųjų šalių reklamas ir seklius","settingsContentBlockingLevel2":"Blokuoti visas reklamas ir seklius","settingsContentBlockingExceptions":"Reklamos vis dar bus leidžiamos šiose svetainėse:","settingsBlockScriptsToggle":"Blokuoti scenarijus","settingsBlockImagesToggle":"Blokuoti paveikslus","settingsBlockedRequestCount":{"unsafeHTML":null},"settingsCustomizeFiltersLink":null,"settingsAppearanceHeading":"Išvaizda","settingsEnableDarkMode":"Įjungti tamsią veikseną: ","settingsDarkModeNever":null,"settingsDarkModeNight":null,"settingsDarkModeAlways":null,"settingsSiteThemeToggle":null,"settingsAdditionalFeaturesHeading":"Papildomos ypatybės","settingsUserscriptsToggle":"Įjungti naudotojo scenarijus","settingsShowDividerToggle":null,"settingsSeparateTitlebarToggle":null,"settingsOpenTabsInForegroundToggle":null,"settingsUserscriptsExplanation":{"unsafeHTML":"Naudotojo scenarijai leidžia jums modifikuoti internetinių svetainių elgseną - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">sužinokite daugiau</a>."},"settingsUserAgentToggle":null,"settingsUpdateNotificationsToggle":"Automatiškai tikrinti ar yra atnaujinimų","settingsSearchEngineHeading":"Paieškos sistema","settingsDefaultSearchEngine":"Pasirinkite numatytąją paieškos sistemą:","settingsDDGExplanation":"Nustatykite DuckDuckGo kaip numatytąją paieškos sistemą, norėdami paieškos juostoje matyti greitus atsakymus.","customSearchEngineDescription":"Pakeiskite paieškos žodį į %s","settingsKeyboardShortcutsHeading":"Spartieji klavišai","settingsKeyboardShortcutsHelp":"Naudokite kablelius, norėdami atskirti kelis sparčiuosius klavišus.","settingsProxyHeading":null,"settingsNoProxy":null,"settingsManualProxy":null,"settingsAutomaticProxy":null,"settingsProxyRules":null,"settingsProxyBypassRules":null,"settingsProxyConfigurationURL":null,"appMenuFile":"Failas","appMenuNewTab":"Nauja kortelė","appMenuDuplicateTab":"Dubliuoti kortelę","appMenuNewPrivateTab":"Nauja privati kortelė","appMenuNewTask":"Nauja užduotis","appMenuSavePageAs":"Įrašyti puslapį kaip","appMenuPrint":"Spausdinti","appMenuEdit":"Taisa","appMenuUndo":"Atšaukti","appMenuRedo":"Grąžinti","appMenuCut":"Iškirpti","appMenuCopy":"Kopijuoti","appMenuPaste":"Įdėti","appMenuSelectAll":"Žymėti viską","appMenuFind":"Rasti","appMenuView":"Rodinys","appMenuZoomIn":"Didinti","appMenuZoomOut":"Mažinti","appMenuActualSize":"Faktinis dydis","appMenuFullScreen":"Visas ekranas","appMenuFocusMode":"Susitelkimo veiksena","appMenuBookmarks":"Adresynas","appMenuHistory":"Istorija","appMenuDeveloper":"Kūrėjas","appMenuReloadBrowser":"Įkelti naršyklę iš naujo","appMenuInspectBrowser":"Ištirti naršyklę","appMenuInspectPage":"Ištirti puslapį","appMenuWindow":"Langas","appMenuMinimize":"Suskleisti","appMenuClose":"Užverti","appMenuAlwaysOnTop":null,"appMenuHelp":"Žinynas","appMenuKeyboardShortcuts":"Spartieji klavišai","appMenuReportBug":"Pranešti apie klaidą","appMenuTakeTour":"Susipažinti su programa","appMenuViewGithub":"Rodyti GitHub svetainėje","appMenuAbout":"Apie %n","appMenuPreferences":"Nuostatos","appMenuServices":"Tarnybos","appMenuHide":"Slėpti %n","appMenuHideOthers":"Slėpti kitus","appMenuShowAll":"Rodyti visus","appMenuQuit":"Išeiti iš %n","appMenuBringToFront":"Perkelti visus į priekį","PDFPageCounter":{"unsafeHTML":"puslapis <input type='text'/> iš <span id='total'></span>"},"buttonReaderSettings":null,"buttonReaderLightTheme":null,"buttonReaderSepiaTheme":null,"buttonReaderDarkTheme":null,"openReaderView":null,"autoRedirectBannerReader":null,"buttonReaderRedirectYes":null,"buttonReaderRedirectNo":null,"articleReaderView":null,"downloadCancel":"Atsisakyti","downloadStateCompleted":"Užbaigtas","downloadStateFailed":"Nepavyko","updateNotificationTitle":"Yra prieinama nauja Min versija"}},"pl":{"name":"Polski","identifier":"pl","translations":{"addToDictionary":"Dodaj do słownika","pictureInPicture":"Obraz w obrazie","openInNewTab":"Otwórz w nowej karcie","openInNewPrivateTab":"Otwórz w nowej karcie prywatnej","saveLinkAs":"Zapisz link jako...","viewImage":"Zobacz grafikę","openImageInNewTab":"Otwórz grafikę w nowej karcie","openImageInNewPrivateTab":"Otwórz grafikę w nowej karcie prywatnej","saveImageAs":"Zapisz grafikę jako","searchWith":"Szukaj %s","copyLink":"Kopiuj link","copyEmailAddress":"Skopiuj adres e-mail","selectAll":"Zaznacz wszystko","undo":"Cofnij","redo":"Przywróć","cut":"Wytnij","copy":"Kopiuj","paste":"Wklej","goBack":"Cofnij","goForward":"Dalej","inspectElement":"Sprawdź element","pasteAndGo":"Wklej i idź","DDGAnswerSubtitle":"Odpowiedź","suggestedSite":"Sugerowana strona","resultsFromDDG":"Wyniki z DuckDuckGo","taskN":"Zadanie %n","showMoreBangs":"Pokaż więcej","viewSettings":"Wyświetl Ustawienia","takeScreenshot":"Zrób zrzut ekranu","clearHistory":"Wyczyść całą historię","enableBlocking":"Włącz blokowanie treści dla tej witryny","disableBlocking":"Wyłącz blokowanie treści dla tej witryny","clearHistoryConfirmation":"Czy wyczyścić całą historię i dane przeglądania?","switchToTask":"Przełącz na zadanie","createTask":"Utwórz zadanie","closeTask":"Zamknij zadanie","moveToTask":"Przenieś tę kartę do zadania","nameTask":"Nazwij to zadanie","addBookmark":"Dodaj zakładkę","searchBookmarks":"Zakładki wyszukiwania","bookmarksAddTag":"Dodaj znacznik...","bookmarksSimilarItems":"Podobne pozycje","searchHistory":"Historia wyszukiwania","importBookmarks":"Importuj zakładki z pliku HTML","exportBookmarks":"Eksportuj zakładki","runUserscript":"Uruchom skrypt użytkownika","openMenu":"Otwórz menu","enterReaderView":"Otwórz widok czytnika","exitReaderView":"Zamknij widok czytnika","newTabLabel":"Nowa karta","connectionNotSecure":"Twoje połączenie z tą witryną nie jest bezpieczne.","searchbarPlaceholder":"Wyszukaj lub wprowadź adres","privateTab":"Nowa karta prywatna","newTabAction":"Nowa karta","viewTasks":"Wyświetl zadania","newTask":"Nowe zadanie","defaultTaskName":"Zadanie %n","taskDeleteWarning":{"unsafeHTML":"Zadanie usunięte. <a>Cofnąć?</a>"},"returnToTask":"Wróć do poprzedniego zadania","taskDescriptionTwo":"%t i %t","taskDescriptionThree":"%t, %t i %n więcej","searchInPage":"Wyszukaj na stronie","findMatchesSingular":"%i z %t dopasowania","findMatchesPlural":"%i z %t dopasowań","isFocusMode":"Jesteś w trybie ostrości.","closeDialog":"OK","focusModeExplanation1":"W trybie ustawiania ostrości nie można tworzyć nowych kart ani przełączać zadań.","focusModeExplanation2":"Możesz wyjść z trybu ustawiania ostrości, usuwając zaznaczenie \"tryb ustawiania ostrości\" w menu widoku.","timeRangeJustNow":"Przed chwilą","timeRangeMinutes":"Kilka minut temu","timeRangeHour":"W ciągu ostatniej godziny","timeRangeToday":"Dzisiaj","timeRangeYesterday":"Wczoraj","timeRangeWeek":"W poprzednim tygodniu","timeRangeMonth":"W poprzednim miesiącu","timeRangeYear":"W poprzednim roku","timeRangeLongerAgo":"Wcześniej","crashErrorTitle":"Coś poszło nie tak.","crashErrorSubtitle":"Wystąpił problem podczas wyświetlania tej strony.","errorPagePrimaryAction":"Spróbuj ponownie","serverNotFoundTitle":"Nie znaleziono serwera","serverNotFoundSubtitle":"Min nie może znaleźć tej witryny.","archiveSearchAction":"Wyszukaj na archive.org","sslErrorTitle":"Ta strona internetowa jest niedostępna","sslErrorMessage":"Min nie można bezpiecznie połączyć się z tą witryną.","dnsErrorTitle":"Nie znaleziono strony","dnsErrorMessage":"Wystąpił błąd DNS.","offlineErrorTitle":"Jesteś poza siecią","offlineErrorMessage":"Połącz się z Internetem i spróbuj ponownie.","genericConnectionFail":"Min nie może połączyć się z witryną.","sslTimeErrorMessage":"Min nie może bezpiecznie połączyć się z tą witryną. Upewnij się, że zegar komputera jest ustawiony prawidłowo.","addressInvalidTitle":"Ten adres jest nieprawidłowy.","genericError":"Wystąpił błąd","phishingErrorTitle":"Ta strona nie jest bezpieczna.","phishingErrorMessage":"Ta strona może próbować wykraść twoje dane osobowe, takie jak hasła lub informacje bankowe.","phishingErrorVisitAnyway":"Odwiedź stronę mimo to","phishingErrorLeave":"Opuść tę stronę","multipleInstancesErrorMessage":"Wystąpił błąd. Zamknij wszystkie inne otwarte wystąpienia i uruchom ponownie Min.","sessionRestoreErrorTitle":"Wystąpił błąd","sessionRestoreErrorExplanation":"Nie można przywrócić poprawnie zapisanych kart.","sessionRestoreErrorBackupInfo":"W tej lokalizacji zapisaliśmy kopię zapasową danych: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Jeśli błąd nadal występuje, otwórz nowy problem <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">tutaj</a>."},"settingsPreferencesHeading":"Preferencje","settingsRestartRequired":"Musisz ponownie uruchomić, aby zastosować te zmiany.","settingsPrivacyHeading":"Blokowanie treści","settingsContentBlockingLevel0":"Zezwalaj na wszystkie reklamy i śledzenie","settingsContentBlockingLevel1":"Blokuj reklamy i śledzenie innych firm","settingsContentBlockingLevel2":"Zablokuj wszystkie reklamy i śledzenie","settingsContentBlockingExceptions":"Zezwalaj na reklamy w tych witrynach:","settingsBlockScriptsToggle":"Zablokuj skrypty","settingsBlockImagesToggle":"Zablokuj obrazy","settingsBlockedRequestCount":{"unsafeHTML":"Jak dotąd Min zablokował reklamy i moduły śledzące w ilości: <strong></strong>."},"settingsCustomizeFiltersLink":"Dostosuj filtry","settingsAppearanceHeading":"Wygląd","settingsEnableDarkMode":"Włącz tryb ciemny:","settingsDarkModeNever":"Nigdy","settingsDarkModeNight":"W nocy","settingsDarkModeAlways":"Zawsze","settingsSiteThemeToggle":"Włącz motyw witryny","settingsAdditionalFeaturesHeading":"Dodatkowe funkcje","settingsUserscriptsToggle":"Włącz skrypty użytkownika","settingsShowDividerToggle":"Pokaż linię rozdzielającą między zakładkami","settingsSeparateTitlebarToggle":"Użyj osobnego paska tytułu","settingsOpenTabsInForegroundToggle":"Otwórz nowe karty na pierwszym planie","settingsUserscriptsExplanation":{"unsafeHTML":"Skrypty użytkownika pozwalają modyfikować zachowanie stron internetowych - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">learn more</a>."},"settingsUserAgentToggle":"Użyj niestandardowego klienta użytkownika","settingsUpdateNotificationsToggle":"Automatycznie sprawdź dostępność aktualizacji","settingsSearchEngineHeading":"Wyszukiwarka","settingsDefaultSearchEngine":"Wybierz domyślną wyszukiwarkę:","settingsDDGExplanation":"Ustaw DuckDuckGo jako domyślną wyszukiwarkę, aby zobaczyć błyskawiczne odpowiedzi na pasku wyszukiwania.","customSearchEngineDescription":"Zamień wyszukiwane hasło na %s","settingsKeyboardShortcutsHeading":"Skróty klawiszowe","settingsKeyboardShortcutsHelp":"Użyj przecinków, aby oddzielić wiele skrótów.","settingsProxyHeading":"Serwer proxy","settingsNoProxy":"Brak serwera proxy","settingsManualProxy":"Konfiguracja ręczna","settingsAutomaticProxy":"Konfiguracja automatyczna","settingsProxyRules":"Zasady serwera proxy:","settingsProxyBypassRules":"Brak serwera proxy dla:","settingsProxyConfigurationURL":"Adres URL konfiguracji","appMenuFile":"Plik","appMenuNewTab":"Nowa karta","appMenuDuplicateTab":"Powielona karta","appMenuNewPrivateTab":"Nowa karta prywatna","appMenuNewTask":"Nowe zadanie","appMenuSavePageAs":"Zapisz stronę jako","appMenuPrint":"Drukuj","appMenuEdit":"Edytuj","appMenuUndo":"Cofnij","appMenuRedo":"Ponów","appMenuCut":"Wytnij","appMenuCopy":"Kopiuj","appMenuPaste":"Wklej","appMenuSelectAll":"Zaznacz wszystko","appMenuFind":"Znajdź","appMenuView":"Widok","appMenuZoomIn":"Powiększ","appMenuZoomOut":"Pomniejsz","appMenuActualSize":"Rzeczywisty rozmiar","appMenuFullScreen":"Pełen ekran","appMenuFocusMode":"Tryb ostrości","appMenuBookmarks":"Zakładki","appMenuHistory":"Historia","appMenuDeveloper":"Programista","appMenuReloadBrowser":"Załaduj ponownie","appMenuInspectBrowser":"Zbadaj przeglądarkę","appMenuInspectPage":"Zbadaj stronę","appMenuWindow":"Okno","appMenuMinimize":"Minimalizuj","appMenuClose":"Zamknij","appMenuAlwaysOnTop":"Zawsze na górze","appMenuHelp":"Pomoc","appMenuKeyboardShortcuts":"Skróty klawiszowe","appMenuReportBug":"Zgłoś błąd","appMenuTakeTour":"Otwórz przewodnik","appMenuViewGithub":"Zobacz na GitHub","appMenuAbout":"O %n","appMenuPreferences":"Preferencje","appMenuServices":"Usługi","appMenuHide":"Ukryj %n","appMenuHideOthers":"Ukryj pozostałe","appMenuShowAll":"Pokaż wszystko","appMenuQuit":"Zamknij %n","appMenuBringToFront":"Umieść wszystko na wierzchu","PDFPageCounter":{"unsafeHTML":"strona <input type='text'/> z <span id='total'></span>"},"buttonReaderSettings":"Ustawienia czytnika","buttonReaderLightTheme":"Jasny","buttonReaderSepiaTheme":"Sepia","buttonReaderDarkTheme":"Ciemny","openReaderView":"Zawsze otwieraj w widoku czytnika","autoRedirectBannerReader":"Czy zawsze otwierać artykuły z tej witryny w widoku czytelnika?","buttonReaderRedirectYes":"Tak","buttonReaderRedirectNo":"Nie","articleReaderView":"Oryginalny artykuł","downloadCancel":"Anuluj pobieranie","downloadStateCompleted":"Pobieranie zakończone","downloadStateFailed":"Błąd pobierania","updateNotificationTitle":"Dostępna jest nowa wersja Min","settingsPasswordAutoFillHeadline":"Autouzupełnianie hasła","settingsSelectPasswordManager":"Wybierz jeden z obsługiwanych menedżerów haseł:","keychainViewPasswords":"Wyświetl zapisane hasła","passwordManagerSetupHeading":"Zakończ konfigurowanie %p aby korzystać z autouzupełniania","passwordManagerSetupStep1":{"unsafeHTML":"Najpierw, <a id='password-manager-setup-link'></a> i wypakuj go dla swojego systemu."},"passwordManagerInstallerSetup":{"unsafeHTML":"Pobierz <a id='password-manager-setup-link-installer'></a> i przeciągnij plik do pola poniżej:"},"passwordManagerSetupLink":"pobierz %p narzędzie wiersza poleceń","passwordManagerSetupLinkInstaller":"instalator wiersza poleceń %p","passwordManagerSetupStep2":"Następnie przeciągnij narzędzie do pola poniżej:","passwordManagerSetupDragBox":"Przeciągnij narzędzie tutaj","passwordManagerSetupInstalling":"Instalowanie...","passwordManagerSetupSignIn":"Zaloguj się do menedżera haseł, aby rozpocząć korzystanie z autouzupełniania. Twoje dane uwierzytelniające nie będą przechowywane nigdzie w Min.","disableAutofill":"Wyłącz autouzupełnianie","passwordManagerSetupUnlockError":"nie udało się odblokować przechowalni haseł: ","passwordManagerSetupRetry":"Upewnij się, że używasz właściwego pliku i wpisujesz poprawne hasło. Możesz spróbować ponownie, przeciągając tutaj narzędzie.","passwordManagerUnlock":"Wprowadź główne hasło %p, aby odblokować przechowalnię haseł:","passwordCaptureSavePassword":"Zapisać hasło dla %s?","passwordCaptureSave":"Zapisz","passwordCaptureDontSave":"Nie zapisuj","savedPasswordsHeading":"Zapisane hasła","savedPasswordsEmpty":"Brak zapisanych haseł.","deletePassword":"Usunąć hasło dla %s?","loginPromptTitle":"Zaloguj się do %h (%r)","dialogConfirmButton":"Potwierdź","dialogSkipButton":"Anuluj","username":"Nazwa Użytkownika","email":"Email","password":"Hasło","secretKey":"Sekretny klucz"}},"pt-BR":{"name":"Português (Brasil)","identifier":"pt-BR","translations":{"addToDictionary":"Adicionar ao dicionário","pictureInPicture":"Picture in picture","openInNewTab":"Abrir em uma nova aba","openInNewPrivateTab":"Abrir em uma nova aba privada","saveLinkAs":"Salvar link como...","viewImage":"Ver imagem","openImageInNewTab":"Abrir imagem em uma nova aba","openImageInNewPrivateTab":"Abrir imagem em uma nova aba privada","saveImageAs":"Salvar imagem como","searchWith":"Pesquisar no %s","copyLink":"Copiar link","copyEmailAddress":"Copiar endereço de email","selectAll":"Selecionar tudo","undo":"Desfazer","redo":"Refazer","cut":"Recortar","copy":"Copiar","paste":"Colar","goBack":"Voltar","goForward":"Avançar","inspectElement":"Inspecionar elemento","pasteAndGo":"Colar e ir","DDGAnswerSubtitle":"Resposta","suggestedSite":"Site sugerido","resultsFromDDG":"Resultados do DuckDuckGo","taskN":"Tarefa %n","showMoreBangs":"Mostrar mais...","viewSettings":"Ver configurações","takeScreenshot":"Capturar tela","clearHistory":"Limpar histórico","enableBlocking":"Ativar bloqueio de conteúdo para este site","disableBlocking":"Desativar bloqueio de conteúdo para este site","clearHistoryConfirmation":"Limpar todo o histórico e dados de navegação?","switchToTask":"Trocar para a tarefa","createTask":"Criar tarefa","closeTask":"Fechar tarefa","moveToTask":"Mover esta aba para uma tarefa","nameTask":"Nomear tarefa","addBookmark":"Adicionar favorito","searchBookmarks":"Buscar nos favoritos","bookmarksAddTag":"Adicionar tag","bookmarksSimilarItems":"Itens semelhantes","searchHistory":"Buscar no histórico","importBookmarks":"Importar favoritos do arquivo HTML","exportBookmarks":"Exportar favoritos","runUserscript":"Executar script do usuário","openMenu":"Menu","enterReaderView":"Modo leitura","exitReaderView":"Sair do modo leitura","newTabLabel":"Nova aba","connectionNotSecure":"Sua conexão com este site não é segura.","searchbarPlaceholder":"Busque ou digite um endereço","privateTab":"Aba privada","newTabAction":"Nova aba","viewTasks":"Ver tarefas","newTask":"Nova Tarefa","defaultTaskName":"Tarefa %n","taskDeleteWarning":{"unsafeHTML":"Tarefa deletada! <a> desfazer?</a>"},"returnToTask":"Retornar a sua tarefa anterior","taskDescriptionTwo":"%t e %t","taskDescriptionThree":"%t e %t, mais %n","searchInPage":"Buscar na página","findMatchesSingular":"Ocorrência %i de %t","findMatchesPlural":"Ocorrência %i de %t","isFocusMode":"Você está no modo concentração.","closeDialog":"OK","focusModeExplanation1":"No modo concentração, você não pode criar novas guias ou alternar tarefas.","focusModeExplanation2":"Você pode sair do modo concentração desmarcando \"Modo concentração\" no menu - Visualizar .","timeRangeJustNow":"Agora mesmo","timeRangeMinutes":"Há alguns minutos atrás","timeRangeHour":"Na última hora","timeRangeToday":"Hoje","timeRangeYesterday":"Ontem","timeRangeWeek":"Semana passada","timeRangeMonth":"Mês passado","timeRangeYear":"Ano passado","timeRangeLongerAgo":"Há mais de um ano","crashErrorTitle":"Ocorreu algo de errado.","crashErrorSubtitle":"Erro ao carregar esta página.","errorPagePrimaryAction":"Tentar novamente","serverNotFoundTitle":"Servidor não encontrado","serverNotFoundSubtitle":"O min não conseguiu localizar este site","archiveSearchAction":"Buscar em archive.org","sslErrorTitle":"Site indisponível","sslErrorMessage":"O min não conseguiu se conectar de uma maneira segura a este site.","dnsErrorTitle":"Site não localizado","dnsErrorMessage":"Ocorreu um erro de DNS.","offlineErrorTitle":"Você está off-line","offlineErrorMessage":"Reconecte-se à Internet e tente novamente.","genericConnectionFail":"O min não conseguiu se conectar ao site.","sslTimeErrorMessage":"O min não conseguiu se conectar de uma maneira segura a este site. Por favor, verifique se o relógio do computador está correto.","addressInvalidTitle":"Endereço inválido.","genericError":"Ocorreu um erro","phishingErrorTitle":"Este site é perigoso.","phishingErrorMessage":"Este website pode estar tentando roubar suas informações pessoais, como senhas ou detalhes bancários.","phishingErrorVisitAnyway":"Visitar site mesmo assim","phishingErrorLeave":"Sair deste site","multipleInstancesErrorMessage":"Um erro foi detectado, por favor, feche todas as instâncias abertas e reinicie o Min","sessionRestoreErrorTitle":"Ocorreu um erro","sessionRestoreErrorExplanation":"Suas abas salvas não puderam ser restauradas corretamente.","sessionRestoreErrorBackupInfo":"Nós salvamos um backup dos seus dados em: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Se este erro continuar ocorrendo, por favor, abra um novo chamado <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">aqui</a>."},"settingsPreferencesHeading":"Preferências","settingsRestartRequired":"Você precisa reiniciar o navegador para aplicar estas mudanças.","settingsPrivacyHeading":"Bloqueio de conteúdo","settingsContentBlockingLevel0":"Permitir todos os anúncios e rastreadores","settingsContentBlockingLevel1":"Bloquear anúncios e rastreadores de terceiros","settingsContentBlockingLevel2":"Bloquear todos os anúncios e rastreadores","settingsContentBlockingExceptions":"Permitir anúncios nos sites:","settingsBlockScriptsToggle":"Bloquear scripts","settingsBlockImagesToggle":"Bloquear imagens","settingsBlockedRequestCount":{"unsafeHTML":"Até agora, o Min bloqueou <strong> </strong> anúncios e rastreadores."},"settingsCustomizeFiltersLink":"Personalizar filtros","settingsAppearanceHeading":"Aparência","settingsEnableDarkMode":"Habilitar modo dark:","settingsDarkModeNever":"Nunca","settingsDarkModeNight":"À noite","settingsDarkModeAlways":"Sempre","settingsSiteThemeToggle":"Habilitar mudanças de cores na barra de endereços","settingsAdditionalFeaturesHeading":"Recursos adicionais","settingsUserscriptsToggle":"Habilitar scripts do usuário","settingsShowDividerToggle":"Mostrar divisória entre as guias","settingsSeparateTitlebarToggle":"Usar a barra de título separada","settingsOpenTabsInForegroundToggle":"Abrir novas guias em primeiro plano","settingsUserscriptsExplanation":{"unsafeHTML":"Scripts do usuário permitem modificar o comportamento do site - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">Saiba mais</a>."},"settingsUserAgentToggle":"Usar agente de usuário personalizado","settingsUpdateNotificationsToggle":"Verificar atualizações automaticamente","settingsSearchEngineHeading":"Serviço de busca","settingsDefaultSearchEngine":"Escolha o serviço de busca padrão:","settingsDDGExplanation":"Defina DuckDuckGo como o serviço padrão de buscas para ver respostas instantâneas na barra de busca.","customSearchEngineDescription":"Substituir o serviço de pesquisa por %s","settingsKeyboardShortcutsHeading":"Teclas de atalho","settingsKeyboardShortcutsHelp":"Use vírgulas para separar vários atalhos.","settingsProxyHeading":"Proxy","settingsNoProxy":"Não usar Proxy","settingsManualProxy":"Configuração Manual","settingsAutomaticProxy":"Configuração Automática","settingsProxyRules":"Regras de proxy:","settingsProxyBypassRules":"Sem proxy para:","settingsProxyConfigurationURL":"Configuração de URL","appMenuFile":"Arquivo","appMenuNewTab":"Nova aba","appMenuDuplicateTab":"Duplicar aba atual","appMenuNewPrivateTab":"Nova aba privada","appMenuNewTask":"Nova tarefa","appMenuSavePageAs":"Salvar página como","appMenuPrint":"Imprimir","appMenuEdit":"Editar","appMenuUndo":"Desfazer","appMenuRedo":"Refazer","appMenuCut":"Recortar","appMenuCopy":"Copiar","appMenuPaste":"Colar","appMenuSelectAll":"Selecionar tudo","appMenuFind":"Buscar na página","appMenuView":"Visualizar","appMenuZoomIn":"Ampliar","appMenuZoomOut":"Reduzir","appMenuActualSize":"Tamanho original","appMenuFullScreen":"Tela cheia","appMenuFocusMode":"Modo concentração","appMenuBookmarks":"Favoritos","appMenuHistory":"Histórico","appMenuDeveloper":"Desenvolvedor","appMenuReloadBrowser":"Recarregar navegador","appMenuInspectBrowser":"Inspecionar navegador","appMenuInspectPage":"Inspecionar página","appMenuWindow":"Janela","appMenuMinimize":"Minimizar","appMenuClose":"Fechar","appMenuAlwaysOnTop":"Sempre no topo","appMenuHelp":"Ajuda","appMenuKeyboardShortcuts":"Teclas de atalho","appMenuReportBug":"Informar um problema","appMenuTakeTour":"Tour pelo Min","appMenuViewGithub":"Ver no GitHub","appMenuAbout":"Sobre o %n","appMenuPreferences":"Preferências","appMenuServices":"Serviços","appMenuHide":"Esconder %n","appMenuHideOthers":"Esconder o resto","appMenuShowAll":"Mostrar tudo","appMenuQuit":"Sair do %n","appMenuBringToFront":"Trazer tudo para a frente","PDFPageCounter":{"unsafeHTML":"página <input type='text'/> de <span id='total'></span>"},"buttonReaderSettings":"Configurações do modo leitura","buttonReaderLightTheme":"Claro","buttonReaderSepiaTheme":"Sepia ","buttonReaderDarkTheme":"Escuro","openReaderView":"Sempre abrir em modo leitura","autoRedirectBannerReader":"Sempre abrir artigos deste site em modo leitura?","buttonReaderRedirectYes":"Sim","buttonReaderRedirectNo":"Não","articleReaderView":"Artigo original","downloadCancel":"Cancelar","downloadStateCompleted":"Concluído","downloadStateFailed":"Falhou","updateNotificationTitle":"Uma nova versão do Min está disponível","settingsPasswordAutoFillHeadline":"Preenchimento automático de senhas","settingsSelectPasswordManager":"Escolha um gerenciadoror de senhas suportado:","keychainViewPasswords":null,"passwordManagerSetupHeading":"Conclua a configuração de %p para usar o preenchimento automático","passwordManagerSetupStep1":{"unsafeHTML":"Primeiro, <a id='password-manager-setup-link'></a> e extraia-o para o seu sistema."},"passwordManagerInstallerSetup":{"unsafeHTML":"Baixe <a id='password-manager-setup-link-installer'></a> e arraste o arquivo para a caixa abaixo:"},"passwordManagerSetupLink":"Faça o download %p CLI tool","passwordManagerSetupLinkInstaller":"o %p CLI installer","passwordManagerSetupStep2":"Em seguida, arraste a ferramenta para a caixa abaixo:","passwordManagerSetupDragBox":"Arraste a ferramenta aqui","passwordManagerSetupInstalling":"Instalando ...","passwordManagerSetupSignIn":"Entre no seu gerenciador de senhas para começar a usar o preenchimento automático. Suas credenciais não serão armazenadas em nenhum lugar do Min.","disableAutofill":"Desativar preenchimento automático","passwordManagerSetupUnlockError":"Falha ao desbloquear o armazenamento de senhas:","passwordManagerSetupRetry":"Verifique se você está usando o arquivo certo e digitando a senha correta. Você pode tentar novamente arrastando a ferramenta aqui.","passwordManagerUnlock":"Digite sua senha mestre %p para desbloquear o armazenamento de senhas:","passwordCaptureSavePassword":null,"passwordCaptureSave":null,"passwordCaptureDontSave":null,"savedPasswordsHeading":null,"savedPasswordsEmpty":null,"deletePassword":null,"loginPromptTitle":"Fazer login em %h (%r)","dialogConfirmButton":"Confirmar","dialogSkipButton":"Cancelar","username":"Nome de usuário","email":"Email","password":"Senha","secretKey":"Chave secreta"}},"pt-PT":{"name":"Portuguese (Portugal)","identifier":"pt-PT","translations":{"addToDictionary":"Adicionar ao dicionário","pictureInPicture":"Picture in Picture","openInNewTab":"Abrir em novo separador","openInNewPrivateTab":"Abrir em novo separador privado","saveLinkAs":"Guardar ligação como","viewImage":"Ver imagem","openImageInNewTab":"Abrir imagem em novo separador","openImageInNewPrivateTab":"Abrir imagem em novo separador privado","saveImageAs":"Guardar imagem como","searchWith":"Pesquisar com %s","copyLink":"Copiar ligação","copyEmailAddress":"Copiar endereço de e-mail","selectAll":"Selecionar tudo","undo":"Desfazer","redo":"Refazer","cut":"Cortar","copy":"Copiar","paste":"Colar","goBack":"Recuar","goForward":"Avançar","inspectElement":"Inspecionar elemento","pasteAndGo":"Colar e ir","DDGAnswerSubtitle":"Resposta","suggestedSite":"Site sugerido","resultsFromDDG":"Resultados em DuckDuckGo","taskN":"Tarefa %n","showMoreBangs":"Mostrar mais","viewSettings":"Ver definições","takeScreenshot":"Obter captura de ecrã","clearHistory":"Limpar todo o histórico","enableBlocking":"Ativar bloqueio de conteúdo para este site","disableBlocking":"Desativar bloqueio de conteúdo para este site","clearHistoryConfirmation":"Limpar histórico e dados de navegação?","switchToTask":"Trocar para a tarefa","createTask":"Criar tarefa","closeTask":"Fechar tarefa","moveToTask":"Mover este separador para uma tarefa","nameTask":"Dar nome a esta tarefa","addBookmark":"Adicionar marcador","searchBookmarks":"Pesquisar nos marcadores","bookmarksAddTag":"Adicionar etiqueta","bookmarksSimilarItems":"Itens semelhantes","searchHistory":"Pesquisar no histórico","importBookmarks":"Importar marcadores de ficheiro HTML","exportBookmarks":"Exportar marcadores","runUserscript":"Executar script","openMenu":"Abrir menu","enterReaderView":"Ativar modo de leitura","exitReaderView":"Desativar modo de leitura","newTabLabel":"Novo separador","connectionNotSecure":"A ligação a este site não é segura.","searchbarPlaceholder":"Pesquisar ou digitar endereço","privateTab":"Separador privado","newTabAction":"Novo separador","viewTasks":"Ver tarefas","newTask":"Nova tarefa","defaultTaskName":"Tarefa %n","taskDeleteWarning":{"unsafeHTML":"Tarefa eliminada. <a>Desfazer</a>?"},"returnToTask":"Retornar à tarefa anterior","taskDescriptionTwo":"%t e %t","taskDescriptionThree":"%t, %t e %n mais","searchInPage":"Pesquisar na página","findMatchesSingular":"%i de %t ocorrência","findMatchesPlural":"%i de %t ocorrências","isFocusMode":"Está no modo de foco.","closeDialog":"OK","focusModeExplanation1":"No modo de foco, não é possível abrir novos separadores nem trocar de tarefas.","focusModeExplanation2":"Pode sair do modo de foco desmarcando a opção \"Modo de foco\" existente no menu Ver.","timeRangeJustNow":"Agora mesmo","timeRangeMinutes":"Há alguns minutos","timeRangeHour":"Na última hora","timeRangeToday":"Hoje","timeRangeYesterday":"Ontem","timeRangeWeek":"Na última semana","timeRangeMonth":"No último mês","timeRangeYear":"No último ano","timeRangeLongerAgo":"Mais antigo","crashErrorTitle":"Algo errado aconteceu.","crashErrorSubtitle":"Ocorreu um erro ao tentar mostrar esta página.","errorPagePrimaryAction":"Tentar novamente","serverNotFoundTitle":"Servidor não encontrado","serverNotFoundSubtitle":"O Min não conseguiu encontrar este site.","archiveSearchAction":"Pesquisar em archive.org","sslErrorTitle":"Este site não está disponível","sslErrorMessage":"O Min não conseguiu estabelecer uma ligação segura a este site.","dnsErrorTitle":"Site não encontrado","dnsErrorMessage":"Ocorreu um erro de DNS.","offlineErrorTitle":"Está no modo off-line","offlineErrorMessage":"Ative o modo on-line e tente novamente.","genericConnectionFail":"O Min não conseguiu estabelecer a ligação ao site.","sslTimeErrorMessage":"O Min não conseguiu estabelecer uma ligação segura a este site. Verifique se a hora do computador está correta.","addressInvalidTitle":"Este endereço não é válido.","genericError":"Ocorreu um erro","phishingErrorTitle":"Este site pode ser perigoso.","phishingErrorMessage":"Este site pode estar a tentar obter informações pessoais, tais como palavras-passe ou dados bancários.","phishingErrorVisitAnyway":"Aceder na mesma","phishingErrorLeave":"Sair do site","multipleInstancesErrorMessage":"Ocorreu um erro. Feche todas as instâncias e reinicie o navegador.","sessionRestoreErrorTitle":"Ocorreu um erro","sessionRestoreErrorExplanation":"Não foi possível restaurar os separadores guardados.","sessionRestoreErrorBackupInfo":"Criámos um backup dos seus dados em: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Se este erro persistir, crie um relatório de erro <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">aqui</a>."},"settingsPreferencesHeading":"Preferências","settingsRestartRequired":"Tem que reiniciar o navegador para aplicar as alterações.","settingsPrivacyHeading":"Bloqueio de conteúdo","settingsContentBlockingLevel0":"Permitir todos os anúncios e 'trackers'","settingsContentBlockingLevel1":"Bloquear anúncios e trackers de terceiros","settingsContentBlockingLevel2":"Bloquear todos os anúncios e 'trackers'","settingsContentBlockingExceptions":"Permitir anúncios nestes sites:","settingsBlockScriptsToggle":"Bloquear scripts","settingsBlockImagesToggle":"Bloquear imagens","settingsBlockedRequestCount":{"unsafeHTML":"Até agora, Min bloqueou <strong></strong> anúncios e rastreadores."},"settingsCustomizeFiltersLink":"Personalizar filtros","settingsAppearanceHeading":"Aparência","settingsEnableDarkMode":"Ativar modo escuro:","settingsDarkModeNever":"Nunca","settingsDarkModeNight":"De noite","settingsDarkModeAlways":"Sempre","settingsSiteThemeToggle":"Ativar tema do site","settingsAdditionalFeaturesHeading":"Outras funcionalidades","settingsUserscriptsToggle":"Ativar scripts de utilizador","settingsShowDividerToggle":"Mostrar divisor entre os separadores","settingsSeparateTitlebarToggle":"Utilizar barra de título separada","settingsOpenTabsInForegroundToggle":"Abrir novos separadores em primeiro plano","settingsUserscriptsExplanation":{"unsafeHTML":"Os scripts permitem-lhe alterar o comportamento dos sites - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">Saber mais</a>."},"settingsUserAgentToggle":"Utilizar agente de utilizador personalizado","settingsUpdateNotificationsToggle":"Procurar atualizações automaticamente","settingsSearchEngineHeading":"Motor de pesquisa","settingsDefaultSearchEngine":"Escolha o motor de pesquisa padrão:","settingsDDGExplanation":"Defina DuckDuckGo como motor de pesquisa padrão para poder obter sugestões imediatas na barra de pesquisa.","customSearchEngineDescription":"Substituir termo de pesquisa por %s","settingsKeyboardShortcutsHeading":"Teclas de atalho","settingsKeyboardShortcutsHelp":"Utilize vírgulas para separar os diversos atalhos","settingsProxyHeading":"Proxy","settingsNoProxy":"Sem proxy","settingsManualProxy":"Configuração manual","settingsAutomaticProxy":"Configuração automática","settingsProxyRules":"Regras do proxy:","settingsProxyBypassRules":"Não usar proxy para:","settingsProxyConfigurationURL":"URL de configuração","appMenuFile":"Ficheiro","appMenuNewTab":"Novo separador","appMenuDuplicateTab":"Duplicar separador","appMenuNewPrivateTab":"Novo separador privado","appMenuNewTask":"Nova tarefa","appMenuSavePageAs":"Guardar página como","appMenuPrint":"Imprimir","appMenuEdit":"Editar","appMenuUndo":"Desfazer","appMenuRedo":"Refazer","appMenuCut":"Cortar","appMenuCopy":"Copiar","appMenuPaste":"Colar","appMenuSelectAll":"Selecionar tudo","appMenuFind":"Localizar","appMenuView":"Ver","appMenuZoomIn":"Ampliar","appMenuZoomOut":"Reduzir","appMenuActualSize":"Tamanho real","appMenuFullScreen":"Ecrã completo","appMenuFocusMode":"Modo de foco","appMenuBookmarks":"Marcadores","appMenuHistory":"Histórico","appMenuDeveloper":"Programador","appMenuReloadBrowser":"Recarregar navegador","appMenuInspectBrowser":"Inspecionar navegador","appMenuInspectPage":"Inspecionar página","appMenuWindow":"Janela","appMenuMinimize":"Minimizar","appMenuClose":"Fechar","appMenuAlwaysOnTop":"Sempre na frente","appMenuHelp":"Ajuda","appMenuKeyboardShortcuts":"Teclas de atalho","appMenuReportBug":"Reporte de erros","appMenuTakeTour":"Visão geral","appMenuViewGithub":"Ver em GitHub","appMenuAbout":"Acerca de %n","appMenuPreferences":"Preferências","appMenuServices":"Serviços","appMenuHide":"Ocultar %n","appMenuHideOthers":"Ocultar outras","appMenuShowAll":"Mostrar tudo","appMenuQuit":"Sair de %n","appMenuBringToFront":"Trazer tudo para a frente","PDFPageCounter":{"unsafeHTML":"página <input type='text'/> de <span id='total'></span>"},"buttonReaderSettings":"Definições do leitor","buttonReaderLightTheme":"Claro","buttonReaderSepiaTheme":"Sépia","buttonReaderDarkTheme":"Escuro","openReaderView":"Abrir sempre no modo de leitura","autoRedirectBannerReader":"Abrir todo os artigos deste site no modo de leitura?","buttonReaderRedirectYes":"Sim","buttonReaderRedirectNo":"Não","articleReaderView":"Artigo original","downloadCancel":"Cancelar","downloadStateCompleted":"Terminada","downloadStateFailed":"Falhada","updateNotificationTitle":"Está disponível uma uma nova versão","settingsPasswordAutoFillHeadline":"Preenchimento automático de palavras-passe","settingsSelectPasswordManager":"Escolha uma das seguintes aplicações:","keychainViewPasswords":"Ver palavras-passe guardadas","passwordManagerSetupHeading":"Terminar configuração de %p para usar o preenchimento automático","passwordManagerSetupStep1":{"unsafeHTML":"Primeiro, <a id='password-manager-setup-link'></a> e extraia para o seu sistema."},"passwordManagerInstallerSetup":{"unsafeHTML":"Descarregue <a id='password-manager-setup-link-installer'></a> e arraste o ficheiro para a caixa abaixo:"},"passwordManagerSetupLink":"descarregue a ferramenta CLI %p","passwordManagerSetupLinkInstaller":"o instalador da ferramenta %p CLI","passwordManagerSetupStep2":"Depois, arraste a ferramenta para a caixa abaixo:","passwordManagerSetupDragBox":"Arraste a ferramenta para aqui","passwordManagerSetupInstalling":"A instalar...","passwordManagerSetupSignIn":"Inicie sessão no gestor de palavras-passe para utilizar o preenchimento automático. As suas credenciais não serão guardadas no Min.","disableAutofill":"Desativar preenchimento automático","passwordManagerSetupUnlockError":"Falha ao desbloquear: ","passwordManagerSetupRetry":"Certifique-se de que está a utilizar o ficheiro e a palavra-passe corretas. Pode tentar novamente arrastando a ferramenta para aqui.","passwordManagerUnlock":"Digite a palavra-passe mestre para %p para desbloquear o armazenamento de palavras-passe:","passwordCaptureSavePassword":"Guardar palavras passe para %s?","passwordCaptureSave":"Sim","passwordCaptureDontSave":"Não","savedPasswordsHeading":"Palavras-passe guardadas","savedPasswordsEmpty":"Não há palavras-passe guardadas","deletePassword":"Eliminar palavra-passe para %s?","loginPromptTitle":"Iniciar sessão em %h (%r)","dialogConfirmButton":"Confirmar","dialogSkipButton":"Cancelar","username":"Nome de utilizador","email":"E-mail","password":"Palavra-passe","secretKey":"Chave secreta"}},"ru":{"name":"Русский","identifier":"ru","translations":{"addToDictionary":"Добавить в словарь","pictureInPicture":"Картинка в Картинке","openInNewTab":"Открыть в новой вкладке","openInNewPrivateTab":"Открыть в приватной вкладке","saveLinkAs":"Сохранить ссылку как...","viewImage":"Показать изображение","openImageInNewTab":"Открыть изображение в новой вкладке","openImageInNewPrivateTab":"Открыть изображение в приватной вкладке","saveImageAs":"Сохранить изображение как...","searchWith":"Искать в %s","copyLink":"Копировать ссылку","copyEmailAddress":"Копировать адрес электронной почты","selectAll":"Выделить все","undo":"Отменить","redo":"Повторить","cut":"Вырезать","copy":"Копировать","paste":"Вставить","goBack":"Назад","goForward":"Вперёд","inspectElement":"Инспектировать элемент","pasteAndGo":"Вставить и перейти","DDGAnswerSubtitle":"Ответ","suggestedSite":"Предложенный сайт","resultsFromDDG":"Результаты из DuckDuckGo","taskN":"Задача %n","showMoreBangs":"Показать больше","viewSettings":"Открыть настройки","takeScreenshot":"Сделать скриншот","clearHistory":"Очистить историю","enableBlocking":"Включить блокировку контента для этого сайта","disableBlocking":"Отключить блокировку контента для этого сайта","clearHistoryConfirmation":"Вы действительно хотите очистить историю?","switchToTask":"Переключиться на задачу","createTask":"Создать задачу","closeTask":"Закрыть задачу","moveToTask":"Переместить эту вкладку в задачу","nameTask":"Название этой задачи","addBookmark":"Добавить закладку","searchBookmarks":"Искать в закладках","bookmarksAddTag":"Добавить тег","bookmarksSimilarItems":"Похожие","searchHistory":"Искать в истории","importBookmarks":"Импортировать закладки","exportBookmarks":"Экспортировать закладки","runUserscript":"Запустить пользовательский скрипт","openMenu":"Открыть меню","enterReaderView":"Включить режим чтения","exitReaderView":"Выключить режим чтения","newTabLabel":"Новая вкладка","connectionNotSecure":"Соединение с этим сайтом небезопасно.","searchbarPlaceholder":"Использовать поиск или ввести адрес","privateTab":"Приватная вкладка","newTabAction":"Новая вкладка","viewTasks":"Показать задачи","newTask":"Новая задача","defaultTaskName":"Задача %n","taskDeleteWarning":{"unsafeHTML":"Задача удалена. <a>Отменить?</a>"},"returnToTask":"Вернуться к предыдущей задаче","taskDescriptionTwo":"%t и %t","taskDescriptionThree":"%t, %t, и %n больше","searchInPage":"Найти на странице","findMatchesSingular":"%i из %t","findMatchesPlural":"%i из %t","isFocusMode":"Вы в режиме фокусировки","closeDialog":"OK","focusModeExplanation1":"В режиме фокусировки вы не можете создавать новые вкладки или переключать задачи.","focusModeExplanation2":"Вы можете выйти из режима фокусировки, сняв флажок с \"режим фокусировки\" в меню просмотра.","timeRangeJustNow":"Только что","timeRangeMinutes":"Несколько минут назад","timeRangeHour":"Час назад","timeRangeToday":"Сегодня","timeRangeYesterday":"Вчера","timeRangeWeek":"На прошлой неделе","timeRangeMonth":"В прошлом месяце","timeRangeYear":"В прошлом году","timeRangeLongerAgo":"Давно","crashErrorTitle":"Что-то пошло не так.","crashErrorSubtitle":"При попытке отобразить эту страницу возникла ошибка.","errorPagePrimaryAction":"Попробовать снова","serverNotFoundTitle":"Сервер не найден","serverNotFoundSubtitle":"Min не смог найти этот сайт.","archiveSearchAction":"Искать в archive.org","sslErrorTitle":"Сайт недоступен","sslErrorMessage":"Min не смог безопасно соединиться с этим сайтом.","dnsErrorTitle":"Сайт не найден","dnsErrorMessage":"Произошла ошибка DNS.","offlineErrorTitle":"Отсутствует соединение с Интернетом","offlineErrorMessage":"Восстановите соединение и попробуйте снова.","genericConnectionFail":"Min не смог соединиться с сайтом.","sslTimeErrorMessage":"Min не смог безопасно соединиться с этим сайтом. Убедитесь, что ваши системные часы настроены правильно.","addressInvalidTitle":"Некорректный адрес.","genericError":"Произошла ошибка","phishingErrorTitle":"Этот сайт может вам навредить.","phishingErrorMessage":"Этот сайт может попытаться украсть ваши личные данные, такие как пароли и банковские данные.","phishingErrorVisitAnyway":"Все равно посетить сайт","phishingErrorLeave":"Уйти с сайта","multipleInstancesErrorMessage":"Произошла ошибка. Пожалуйста, закройте все другие открытые экземпляры и перезапустите Min.","sessionRestoreErrorTitle":"Произошла ошибка","sessionRestoreErrorExplanation":"Ваши сохранённые вкладки не могут быть корректно восстановлены.","sessionRestoreErrorBackupInfo":"Мы сохранили резервную копию ваших данных по этому адресу: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Если эта ошибка продолжает появляться, пожалуйста, сообщите о ней <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">сюда</a>."},"settingsPreferencesHeading":"Настройки","settingsRestartRequired":"Для применения этих изменений необходимо перезапустить браузер.","settingsPrivacyHeading":"Блокирование содержимого","settingsContentBlockingLevel0":"Разрешить всю рекламу и трекеры","settingsContentBlockingLevel1":"Блокировать стороннюю рекламу и трекеры","settingsContentBlockingLevel2":"Блокировать всю рекламу и трекеры","settingsContentBlockingExceptions":"Реклама по-прежнему будет разрешена на этих сайтах:","settingsBlockScriptsToggle":"Блокировать скрипты","settingsBlockImagesToggle":"Блокировать изображения","settingsBlockedRequestCount":{"unsafeHTML":"На данный момент Min заблокировал <strong></strong> объявлений и трекеров"},"settingsCustomizeFiltersLink":"Настроить фильтры","settingsAppearanceHeading":"Внешний вид","settingsEnableDarkMode":"Использовать темную тему:","settingsDarkModeNever":"Нет","settingsDarkModeNight":"Только ночью","settingsDarkModeAlways":"Всегда","settingsSiteThemeToggle":"Использовать тему сайта","settingsAdditionalFeaturesHeading":"Дополнительные возможности","settingsUserscriptsToggle":"Пользовательские скрипты","settingsShowDividerToggle":"Показывать разделитель между вкладками","settingsSeparateTitlebarToggle":"Использовать разделитель заголовка","settingsOpenTabsInForegroundToggle":"Открывать новые вкладки на переднем плане","settingsUserscriptsExplanation":{"unsafeHTML":"Пользовательские скрипты позволяют изменять поведение сайтов - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">узнать больше</a>."},"settingsUserAgentToggle":"Использовать пользовательский user agent","settingsUpdateNotificationsToggle":"Автоматически проверять наличие обновлений","settingsSearchEngineHeading":"Поиск","settingsDefaultSearchEngine":"Выберите поисковую систему по умолчанию:","settingsDDGExplanation":"Чтобы видеть мгновенные ответы в строке поиска, установите DuckDuckGo поисковиком по умолчанию.","customSearchEngineDescription":"Заменить поисковый термин на %s","settingsKeyboardShortcutsHeading":"Горячие клавиши","settingsKeyboardShortcutsHelp":"Используйте запятые для разделения нескольких горячих клавиш.","settingsProxyHeading":"Прокси","settingsNoProxy":"Без прокси","settingsManualProxy":"Ручная настройка","settingsAutomaticProxy":"Автоматическая настройка","settingsProxyRules":"Правила прокси:","settingsProxyBypassRules":"Не использовать прокси для:","settingsProxyConfigurationURL":"URL конфигурации","appMenuFile":"Файл","appMenuNewTab":"Новая вкладка","appMenuDuplicateTab":"Дублировать","appMenuNewPrivateTab":"Новая приватная вкладка","appMenuNewTask":"Новая задача","appMenuSavePageAs":"Сохранить страницу как...","appMenuPrint":"Печать","appMenuEdit":"Правка","appMenuUndo":"Отменить","appMenuRedo":"Повторить","appMenuCut":"Вырезать","appMenuCopy":"Копировать","appMenuPaste":"Вставить","appMenuSelectAll":"Выделить всё","appMenuFind":"Найти","appMenuView":"Вид","appMenuZoomIn":"Увеличить масштаб","appMenuZoomOut":"Уменьшить масштаб","appMenuActualSize":"Масштаб 100%","appMenuFullScreen":"Полноэкранный режим","appMenuFocusMode":"Режим фокусировки","appMenuBookmarks":"Закладки","appMenuHistory":"История","appMenuDeveloper":"Разработка","appMenuReloadBrowser":"Перезагрузить браузер","appMenuInspectBrowser":"Инспектировать браузер","appMenuInspectPage":"Инспектировать страницу","appMenuWindow":"Окно","appMenuMinimize":"Свернуть","appMenuClose":"Закрыть","appMenuAlwaysOnTop":"Всегда поверх всех окон","appMenuHelp":"Помощь","appMenuKeyboardShortcuts":"Горячие клавиши","appMenuReportBug":"Сообщить об ошибке","appMenuTakeTour":"Экскурсия по браузеру","appMenuViewGithub":"Мы на GitHub","appMenuAbout":"О %n","appMenuPreferences":"Настройки","appMenuServices":"Услуги","appMenuHide":"Скрыть %n","appMenuHideOthers":"Скрыть остальное","appMenuShowAll":"Показать всё","appMenuQuit":"Выйти из %n","appMenuBringToFront":"Переместить всё на передний план","PDFPageCounter":{"unsafeHTML":"страница <input type='text'/> из <span id='total'></span>"},"buttonReaderSettings":"Настройки режима чтения","buttonReaderLightTheme":"Светлый","buttonReaderSepiaTheme":"Сепия","buttonReaderDarkTheme":"Темный","openReaderView":"Всегда открывать в режиме чтения","autoRedirectBannerReader":"Всегда открывать статьи с этого сайта в режиме чтения?","buttonReaderRedirectYes":"Да","buttonReaderRedirectNo":"Нет","articleReaderView":"Оригинальная статья","downloadCancel":"Отменить","downloadStateCompleted":"Завершено","downloadStateFailed":"Не удалось","updateNotificationTitle":"Доступна новая версия Min","settingsPasswordAutoFillHeadline":"Автоматическое заполнение пароля","settingsSelectPasswordManager":"Выберите один из поддерживаемых менеджеров паролей:","keychainViewPasswords":"Просмотр сохраненных паролей","passwordManagerSetupHeading":"Завершить настройку %p для использования автозаполнения","passwordManagerSetupStep1":{"unsafeHTML":"Во-первых, <a id='password-manager-setup-link'></a> и извлеките его для вашей системы."},"passwordManagerInstallerSetup":{"unsafeHTML":"Загрузите <a id= 'password-manager-setup-link-installer'>< / a> и перетащите файл в поле ниже:"},"passwordManagerSetupLink":"загрузите инструмент CLI %p","passwordManagerSetupLinkInstaller":"CLI установщик для %p","passwordManagerSetupStep2":"Затем перетащите инструмент в поле ниже:","passwordManagerSetupDragBox":"Перетащите инструмент сюда","passwordManagerSetupInstalling":"Установка...","passwordManagerSetupSignIn":"Войдите в свой менеджер паролей, чтобы начать использовать автозаполнение. Ваши учетные данные не будут храниться где-либо внутри Min.","disableAutofill":"Отключить автозаполнение","passwordManagerSetupUnlockError":"Не удалось разблокировать хранилище паролей: ","passwordManagerSetupRetry":"Убедитесь, что вы используете правильный файл и вводите правильный пароль. Вы можете повторить попытку, перетащив инструмент сюда еще раз.","passwordManagerUnlock":"Введите свой мастер-пароль %p, чтобы разблокировать хранилище паролей:","passwordCaptureSavePassword":"Сохранить пароль для %s?","passwordCaptureSave":"Сохранить","passwordCaptureDontSave":"Не сохранять","savedPasswordsHeading":"Сохраненные пароли","savedPasswordsEmpty":"Нет сохраненных паролей.","deletePassword":"Удалить пароль для %s?","loginPromptTitle":"Войти на %s (%h)","dialogConfirmButton":"Подтвердить","dialogSkipButton":"Отмена","username":"Имя пользователя","email":"Электронная почта","password":"Пароль","secretKey":"Секретный ключ"}},"tr":{"name":"Turkish (Turkey)","identifier":"tr","translations":{"addToDictionary":"Sözlüğe Ekle","pictureInPicture":"Resim İçinde Resim","openInNewTab":"Yeni Pencerede Aç","openInNewPrivateTab":"Yeni Özel Sekmede Aç","saveLinkAs":"Linki Farklı Kaydet","viewImage":"Resmi Göster","openImageInNewTab":"Resmi Yeni Sekmede Aç","openImageInNewPrivateTab":"Resmi Yeni Özel Sekmede Aç","saveImageAs":"Resmi Farklı Kaydet","searchWith":"%s ile ara","copyLink":"Linki Kopyala","copyEmailAddress":"E-Posta Adresini Kopyala","selectAll":"Hepsini Seç","undo":"Geri","redo":"İleri","cut":"Kes","copy":"Kopyala","paste":"Yapıştır","goBack":"Geri Git","goForward":"İleri Git","inspectElement":"Öğeyi İncele","pasteAndGo":"Yapıştır ve Git","DDGAnswerSubtitle":"Cevap","suggestedSite":"Önerilen site","resultsFromDDG":"DuckDuckGo'dan sonuçlar","taskN":"Görev %n","showMoreBangs":"Daha fazla göster","viewSettings":"Görünüm Ayarları","takeScreenshot":"Ekran Görüntüsü Al","clearHistory":"Tüm Geçmişi Temizle","enableBlocking":"Bu site için içerik engellemeyi etkinleştir","disableBlocking":"Bu site için içerik engellemeyi devre dışı bırak","clearHistoryConfirmation":"Tüm geçmişi ve tarama verilerini silmek istiyor musunuz?","switchToTask":"Göreve Geç","createTask":"Görev Oluştur","closeTask":"Görevi Kapat","moveToTask":"Bu sekmeyi bir göreve taşı","nameTask":"Bu görevi adlandır","addBookmark":"Yer imlerine Ekle","searchBookmarks":"Yer imlerini ara","bookmarksAddTag":"Etiket Ekle","bookmarksSimilarItems":"Benzer Olanlar","searchHistory":"Arama Geçmişi","importBookmarks":"Yer imlerini HTML dosyasından içe aktar","exportBookmarks":"Yer imlerini dışa aktar","runUserscript":"Kullanıcı betiklerini çalıştır","openMenu":"Menüyü Aç","enterReaderView":"Okuyucu görünümüne girin","exitReaderView":"Okuyucu görünümünden çıkın","newTabLabel":"Yeni Sekme","connectionNotSecure":"Bu web sitesine yapmış olduğunuz bağlantı güvenli değil.","searchbarPlaceholder":"Arayın veya adres girin","privateTab":"Özel sekme","newTabAction":"Yeni Sekme","viewTasks":"Görevleri Görüntüle","newTask":"Yeni Görev","defaultTaskName":"Görev %n","taskDeleteWarning":{"unsafeHTML":"Görev silindi. <a>Geri?</a>"},"returnToTask":"Önceki göreve geri dön","taskDescriptionTwo":"%t ve %t","taskDescriptionThree":"%t, %t ve %n fazlası","searchInPage":"Sayfada Ara","findMatchesSingular":"%t eşleşmeden %i i","findMatchesPlural":"%t eşleşmeden %i i","isFocusMode":"Odak Modundasınız.","closeDialog":"Tamam","focusModeExplanation1":"Odak modunda yeni sekme açamaz ya da görevler arasında geçiş yapamazsınız.","focusModeExplanation2":"Odak modundan çıkmak için görünüm menüsünden \"odak modu\" tikini kaldırabilirsiniz.","timeRangeJustNow":"Şu anda","timeRangeMinutes":"Birkaç dakika önce","timeRangeHour":"Son bir saat içinde","timeRangeToday":"Bugün","timeRangeYesterday":"Dün","timeRangeWeek":"Geçtiğimiz hafta","timeRangeMonth":"Geçtiğimiz ay","timeRangeYear":"Geçtiğimiz yıl","timeRangeLongerAgo":"Çok uzun zaman önce","crashErrorTitle":"Bir şeyler yanlış gitti.","crashErrorSubtitle":"Bu sayfayı görüntülerken bir sorun oluştu.","errorPagePrimaryAction":"Tekrar deneyin","serverNotFoundTitle":"Sunucu bulunamadı","serverNotFoundSubtitle":"Min bu web sitesini bulamadı.","archiveSearchAction":"archive.org'da ara","sslErrorTitle":"Bu web sitesi mevcut değildir","sslErrorMessage":"Min bu siteye güvenli bir şekilde bağlanamadı.","dnsErrorTitle":"Web sitesi bulunamadı","dnsErrorMessage":"Bir DNS hatası oluştu.","offlineErrorTitle":"Çevrimdışısınız","offlineErrorMessage":"İnternete yeniden bağlanın ve tekrar deneyin.","genericConnectionFail":"Min web sitesine bağlanılamadı.","sslTimeErrorMessage":"Min bu siteye güvenli bir şekilde bağlanamadı. Lütfen bilgisayarınızın saat ayarının doğru olduğundan emin olun.","addressInvalidTitle":"Bu adres geçersiz.","genericError":"Bir hata oluştu","phishingErrorTitle":"Bu site size zarar verebilir.","phishingErrorMessage":"Bu web sitesi parola veya banka bilgileri gibi kişisel bilgilerinizi çalmaya çalışıyor olabilir.","phishingErrorVisitAnyway":"Siteyi yine de ziyaret et","phishingErrorLeave":"Bu siteden ayrıl","multipleInstancesErrorMessage":"Bir hata oluştu. Lütfen açık olan tüm Min'leri kapatıp yeniden başlatın.","sessionRestoreErrorTitle":"Bir hata oluştu","sessionRestoreErrorExplanation":"Kaydedilen sekmeleriniz doğru bir şekilde geri yüklenemedi.","sessionRestoreErrorBackupInfo":"Verilerinizin bir yedeğini bu konumda kaydettik: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Bu hata olmaya devam ederse, lütfen <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">buradan</a> yeni bir sorun başlığı açın."},"settingsPreferencesHeading":"Tercihler","settingsRestartRequired":"Bu değişiklikleri uygulamak için yeniden başlatmanız gerekiyor.","settingsPrivacyHeading":"İçerik Engelleme","settingsContentBlockingLevel0":"Tüm reklamlar ve iz sürücülere izin ver","settingsContentBlockingLevel1":"Üçüncü parti reklamları ve iz sürücüleri engelle","settingsContentBlockingLevel2":"Tüm reklamları ve iz sürücüleri engelle","settingsContentBlockingExceptions":"Bu websitelerinde reklamlara izin verildi","settingsBlockScriptsToggle":"Scriptleri engelle","settingsBlockImagesToggle":"Resimleri engelle","settingsBlockedRequestCount":{"unsafeHTML":"Min şimdiye kadar, <strong></strong> reklam ve takipçi engelledi."},"settingsCustomizeFiltersLink":"Filtreleri özelleştir","settingsAppearanceHeading":"Görünüm","settingsEnableDarkMode":"Koyu modu etkinleştir:","settingsDarkModeNever":"Asla","settingsDarkModeNight":"Geceleyin","settingsDarkModeAlways":"Her zaman","settingsSiteThemeToggle":"Site temasını etkinleştir","settingsAdditionalFeaturesHeading":"Ek Özellikler","settingsUserscriptsToggle":"Kullanıcı betiklerini etkinleştir","settingsShowDividerToggle":"Sekmeler arasında ayırıcı göster","settingsSeparateTitlebarToggle":"Ayrılmış başlık çubuğu kullan","settingsOpenTabsInForegroundToggle":"Yeni sekmeleri önplanda aç","settingsUserscriptsExplanation":{"unsafeHTML":"Kullancı betikleri size websitelerinin davranışını değiştirmenize izin verir - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">daha fazla bilgi için</a>."},"settingsUserAgentToggle":"Özel kullanıcı aracısı kullan","settingsUpdateNotificationsToggle":"Güncelleştirmeleri otomatik olarak denetle","settingsSearchEngineHeading":"Arama Motoru","settingsDefaultSearchEngine":"Bir varsayılan arama motoru seçin:","settingsDDGExplanation":"Arama çubuğundaki anlık yanıtları görmek için DuckDuckGo’yu varsayılan arama motoru olarak ayarlayın.","customSearchEngineDescription":"Arama terimini %s ile değiştir","settingsKeyboardShortcutsHeading":"Klavye Kısayolları","settingsKeyboardShortcutsHelp":"Birden çok kısayolu ayırmak için virgül kullanın.","settingsProxyHeading":"Vekil Sunucu","settingsNoProxy":"Vekil Sunucu Yok","settingsManualProxy":"Elle Vekil Sunucu","settingsAutomaticProxy":"Otomatik Konfigürasyon","settingsProxyRules":"Vekil sunucu kuralları:","settingsProxyBypassRules":"Vekil sunucu kullanılmasın:","settingsProxyConfigurationURL":"Konfigürasyon Adresi","appMenuFile":"Dosya","appMenuNewTab":"Yeni Sekme","appMenuDuplicateTab":"Sekmeyi Çoğalt","appMenuNewPrivateTab":"Yeni Özel Sekme","appMenuNewTask":"Yeni Görev","appMenuSavePageAs":"Sayfayı Farklı Kaydet","appMenuPrint":"Yazdır","appMenuEdit":"Düzenle","appMenuUndo":"Geri","appMenuRedo":"İleri","appMenuCut":"Kes","appMenuCopy":"Kopyala","appMenuPaste":"Yapıştır","appMenuSelectAll":"Tümünü Seç","appMenuFind":"Bul","appMenuView":"Görünüm","appMenuZoomIn":"Yakınlaştır","appMenuZoomOut":"Uzaklaştır","appMenuActualSize":"Gerçek Boyut","appMenuFullScreen":"Tam Ekran","appMenuFocusMode":"Odak Modu","appMenuBookmarks":"Yer İmleri","appMenuHistory":"Geçmiş","appMenuDeveloper":"Geliştirici","appMenuReloadBrowser":"Tarayıcıyı Yeniden Yükle","appMenuInspectBrowser":"Tarayıcıyı İncele","appMenuInspectPage":"Sayfayı İncele","appMenuWindow":"Pencere","appMenuMinimize":"Küçült","appMenuClose":"Kapat","appMenuAlwaysOnTop":"Her Zaman Üstte","appMenuHelp":"Yardım","appMenuKeyboardShortcuts":"Klavye Kısayolları","appMenuReportBug":"Hata Bildir","appMenuTakeTour":"Tur atın","appMenuViewGithub":"GitHub'da Göster","appMenuAbout":"%n Hakkında","appMenuPreferences":"Seçenekler","appMenuServices":"Servisler","appMenuHide":"%n i Gizle","appMenuHideOthers":"Diğerlerini Gizle","appMenuShowAll":"Tümünü Göster","appMenuQuit":"%n Çıkış","appMenuBringToFront":"Tümünü Öne Getir","PDFPageCounter":{"unsafeHTML":"<span id='total'></span> sayfanın <input type='text'/> i"},"buttonReaderSettings":"Okuyucu Ayarları","buttonReaderLightTheme":"Açık","buttonReaderSepiaTheme":"Sepya","buttonReaderDarkTheme":"Koyu","openReaderView":"Her zaman okuyucu görünümünde aç","autoRedirectBannerReader":"Bu sitedeki makaleler her zaman okuyucu görünümünde açılsın mı?","buttonReaderRedirectYes":"Evet","buttonReaderRedirectNo":"Hayır","articleReaderView":"Orjinal Makale","downloadCancel":"İptal","downloadStateCompleted":"Tamamlandı","downloadStateFailed":"Başarısız oldu","updateNotificationTitle":"Min'in yeni bir sürümü mevcut","settingsPasswordAutoFillHeadline":"Parola Otomatik Doldurma","settingsSelectPasswordManager":"Desteklenen parola yöneticilerinden birini seçin:","keychainViewPasswords":"Kayıtlı parolaları pöster","passwordManagerSetupHeading":"Otomatik Doldur kullanabilmek için %p kurulumunu tamamlayın","passwordManagerSetupStep1":{"unsafeHTML":"İlk olarak, <a id='password-manager-setup-link'></a> ve ve arşivden çıkartın."},"passwordManagerInstallerSetup":{"unsafeHTML":"<a id='password-manager-setup-link-installer'></a> indirin ve dosyayı aşağıdaki kutucuğa sürükleyip bırakın:"},"passwordManagerSetupLink":"%p CLI aracını indir ","passwordManagerSetupLinkInstaller":"%p CLI yükleyicisi","passwordManagerSetupStep2":"Ardından aracı aşağıdaki kutucuğa sürükleyip bırakın:","passwordManagerSetupDragBox":"Aracı buraya sürükleyin","passwordManagerSetupInstalling":"Yükleniyor...","passwordManagerSetupSignIn":"Otomatik dolduru kullanabilmek için parola yöneticinize giriş yapın. Kimlik bilgileriniz Min içerisinde bir yere kaydedilmeyecektir.","disableAutofill":"Otomatik Dolduru Devre Dışı Bırak","passwordManagerSetupUnlockError":"Parola kayıtlarının kilidi açılamadı: ","passwordManagerSetupRetry":"Doğru dosyayı kullandığınızdan ve geçerli parolayı girdiğinizden emin olun. Dosyayı buraya sürükleyerek tekrar deneyebilirsniz.","passwordManagerUnlock":"Parola kayıtlarınızın kilidini açmak için %p ana parolasını girin:","passwordCaptureSavePassword":"% için parola kaydedilsin mi?","passwordCaptureSave":"Kaydet","passwordCaptureDontSave":"Kaydetme","savedPasswordsHeading":"Kaıtlı Parolalar","savedPasswordsEmpty":"Kaydedilmiş parola yok.","deletePassword":"% için parola silinsin mi?","loginPromptTitle":"Giriş yapın %h (%r)","dialogConfirmButton":"Onayla","dialogSkipButton":"İptal","username":"Kullanıcı Adı","email":"E-Posta","password":"Parola","secretKey":"Gizli anahtar"}},"uk":{"name":"Українська","identifier":"uk","translations":{"addToDictionary":"Додати до словника","pictureInPicture":"Зображення в зображенні","openInNewTab":"Відкрити в новій вкладці","openInNewPrivateTab":"Відкрити в приватній вкладці","saveLinkAs":"Зберегти посилання як...","viewImage":"Переглянути зображення","openImageInNewTab":"Відкрити зображення в новій вкладці","openImageInNewPrivateTab":"Відкрити зображення в приватній вкладці","saveImageAs":"Зберегти зображення як...","searchWith":"Шукати з %s","copyLink":"Копіювати посилання","copyEmailAddress":"Копіювати адресу електронної пошти","selectAll":"Вибрати все","undo":"Скасувати","redo":"Повторити","cut":"Вирізати","copy":"Копіювати","paste":"Вставити","goBack":"Назад","goForward":"Вперед","inspectElement":"Дослідити елемент","pasteAndGo":"Вставити та перейти","DDGAnswerSubtitle":"Відповідь","suggestedSite":"Запропонований сайт","resultsFromDDG":"Результати із DuckDuckGo","taskN":"Завдання %n","showMoreBangs":"Показати більше","viewSettings":"Показати налаштування","takeScreenshot":"Зробити знімок екрану","clearHistory":"Очистити історію","enableBlocking":"Увімкнути блокування вмісту для цього сайту","disableBlocking":"Вимкнути блокування вмісту для цього сайту","clearHistoryConfirmation":"Очистити всю історію та дані веб-перегляду?","switchToTask":"Перейти до завдання","createTask":"Створити завдання","closeTask":"Закрити завдання","moveToTask":"Перемістіть цю вкладку до завдання","nameTask":"Назвіть це завдання","addBookmark":"Додати закладку","searchBookmarks":"Шукати в закладках","bookmarksAddTag":"Додати мітку...","bookmarksSimilarItems":"Подібні елементи","searchHistory":"Шукати в історії","importBookmarks":"Імпортувати закладки","exportBookmarks":"Експортувати закладки","runUserscript":"Запустити скрипт користувача","openMenu":"Відкрити меню","enterReaderView":"Перейти в режим читання","exitReaderView":"Вийти з режиму читання","newTabLabel":"Нова вкладка","connectionNotSecure":"Ваше з'єднання з цим веб-сайтом не захищене.","searchbarPlaceholder":"Пошуковий запит чи адреса","privateTab":"Приватна вкладка","newTabAction":"Нова вкладка","viewTasks":"Переглянути завдання","newTask":"Нове завдання","defaultTaskName":"Завдання %n","taskDeleteWarning":{"unsafeHTML":"Завдання видалено. <a>Скасувати?</a>"},"returnToTask":"Повернутися до попереднього завдання","taskDescriptionTwo":"%t і %t","taskDescriptionThree":"%t, %t, і ще %n","searchInPage":"Знайти на сторінці","findMatchesSingular":"%i з %t входження","findMatchesPlural":"%i з %t входжень","isFocusMode":"Ви в режимі фокусування","closeDialog":"OK","focusModeExplanation1":"У режимі фокусування не можна створювати нові вкладки або перемикати завдання.","focusModeExplanation2":"Ви можете залишити режим фокусування, знявши позначку \"режим фокусування\" в меню перегляду.","timeRangeJustNow":"Зараз","timeRangeMinutes":"Кілька хвилин тому","timeRangeHour":"Годину тому","timeRangeToday":"Сьогодні","timeRangeYesterday":"Вчора","timeRangeWeek":"Тиждень тому","timeRangeMonth":"Місяць тому","timeRangeYear":"У минулому році","timeRangeLongerAgo":"Давно","crashErrorTitle":"Щось пішло не так.","crashErrorSubtitle":"Виникла проблема при відображенні цієї сторінки.","errorPagePrimaryAction":"Спробувати знову","serverNotFoundTitle":"Сервер не знайдений","serverNotFoundSubtitle":"Min не зміг знайти цей веб-сайт.","archiveSearchAction":"Пошук на archive.org","sslErrorTitle":"Сайт недоступний","sslErrorMessage":"Min не зміг безпечно з'єднатися з цим сайтом.","dnsErrorTitle":"Сайт не знайдено","dnsErrorMessage":"Сталася помилка DNS.","offlineErrorTitle":"Не вдалося встановити з'єднання з Інтернетом","offlineErrorMessage":"Підключіться до Інтернету та повторіть спробу.","genericConnectionFail":"Min не вдалося підключитися до веб-сайту.","sslTimeErrorMessage":"Мін не може надійно підключитися до цього веб-сайту. Переконайтеся, що годинник комп'ютера встановлено правильно.","addressInvalidTitle":"Недійсна адреса.","genericError":"Виникла помилка","phishingErrorTitle":"Цей сайт може вам зашкодити.","phishingErrorMessage":"Цей веб-сайт може намагатися викрасти вашу особисту інформацію, наприклад, паролі чи банківську інформацію.","phishingErrorVisitAnyway":"Все одно відвідати сайт","phishingErrorLeave":"Залишити цей сайт","multipleInstancesErrorMessage":"Виникла помилка. Закрийте інші відкриті екземпляри та перезапустіть Min.","sessionRestoreErrorTitle":"Виникла помилка","sessionRestoreErrorExplanation":"Ваші збережені вкладки не можуть бути відновлені правильно.","sessionRestoreErrorBackupInfo":"Ми зберегли резервну копію даних у цьому місці: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Якщо ця помилка продовжує з'являтися, будь ласка, повідомте про неї <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">сюди</a>."},"settingsPreferencesHeading":"Налаштування","settingsRestartRequired":"Щоб застосувати ці зміни, потрібно перезапустити програму.","settingsPrivacyHeading":"Блокування вмісту","settingsContentBlockingLevel0":"Дозволити всю рекламу та стеження","settingsContentBlockingLevel1":"Блокувати сторонню рекламу та стеження","settingsContentBlockingLevel2":"Блокувати всю рекламу та стеження","settingsContentBlockingExceptions":"Дозволити рекламу на цих сайтах:","settingsBlockScriptsToggle":"Блокувати скрипти","settingsBlockImagesToggle":"Блокувати зображення","settingsBlockedRequestCount":{"unsafeHTML":"Наразі Min заблокував <strong></strong> реклам і трекерів."},"settingsCustomizeFiltersLink":"Налаштувати фільтри","settingsAppearanceHeading":"Зовнішній вигляд","settingsDarkModeToggle":"Увімкнути темний режим","settingsEnableDarkMode":"Увімкнути темний режим: ","settingsDarkModeNever":"Ніколи","settingsDarkModeNight":"Вночі","settingsDarkModeAlways":"Завжди","settingsSiteThemeToggle":"Увімкнути тему сайту","settingsAdditionalFeaturesHeading":"Додаткові можливості","settingsUserscriptsToggle":"Увімкнути скрипти користувача","settingsShowDividerToggle":"Показувати роздільник між вкладками","settingsSeparateTitlebarToggle":"Використовувати окремий рядок заголовка","settingsOpenTabsInForegroundToggle":"Відкривати нові вкладки на передньому плані","settingsUserscriptsExplanation":{"unsafeHTML":"Скрипти користувача дозволяють змінювати поведінку веб-сайтів - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">дізнатися більше</a>."},"settingsUserAgentToggle":"Використовувати власний агент користувача","settingsUpdateNotificationsToggle":"Автоматично перевіряти наявність оновлень","settingsSearchEngineHeading":"Пошукова система","settingsDefaultSearchEngine":"Виберіть типову пошукову систему:","settingsDDGExplanation":"Встановіть DuckDuckGo як типову пошукову систему, щоб побачити миттєві відповіді на панелі пошуку.","customSearchEngineDescription":"Замініть пошуковий запит на %s","settingsKeyboardShortcutsHeading":"Сполучення клавіш","settingsKeyboardShortcutsHelp":"Використовуйте коми, щоб розділити декілька сполучень клавіш.","settingsProxyHeading":"Проксі","settingsNoProxy":"Без проксі","settingsManualProxy":"Ручна конфігурація","settingsAutomaticProxy":"Автоматична конфігурація","settingsProxyRules":"Правила проксі:","settingsProxyBypassRules":"Не використовувати проксі для:","settingsProxyConfigurationURL":"URL конфігурації","appMenuFile":"Файл","appMenuNewTab":"Нова вкладка","appMenuDuplicateTab":"Дублювати вкладку","appMenuNewPrivateTab":"Нова приватна вкладка","appMenuNewTask":"Нове завдання","appMenuSavePageAs":"Зберегти сторінку як","appMenuPrint":"Друк","appMenuEdit":"Редагувати","appMenuUndo":"Скасувати","appMenuRedo":"Повернути","appMenuCut":"Вирізати","appMenuCopy":"Копіювати","appMenuPaste":"Вставити","appMenuSelectAll":"Вибрати все","appMenuFind":"Знайти","appMenuView":"Вигляд","appMenuZoomIn":"Збільшити","appMenuZoomOut":"Зменшити","appMenuActualSize":"Реальний розмір","appMenuFullScreen":"Повноекранний режим","appMenuFocusMode":"Режим фокусування","appMenuBookmarks":"Закладки","appMenuHistory":"Історія","appMenuDeveloper":"Розробник","appMenuReloadBrowser":"Перезавантажити браузер","appMenuInspectBrowser":"Дослідити браузер","appMenuInspectPage":"Дослідити сторінку","appMenuWindow":"Вікно","appMenuMinimize":"Згорнути","appMenuClose":"Закрити","appMenuAlwaysOnTop":"Завжди поверх усіх вікон","appMenuHelp":"Допомога","appMenuKeyboardShortcuts":"Сполучення клавіш","appMenuReportBug":"Повідомити про помилку","appMenuTakeTour":"Знайомство з Min","appMenuViewGithub":"Переглянути на GitHub","appMenuAbout":"Про %n","appMenuPreferences":"Налаштування","appMenuServices":"Сервіси","appMenuHide":"Приховати %n","appMenuHideOthers":"Приховати інші","appMenuShowAll":"Показати все","appMenuQuit":"Вийти з %n","appMenuBringToFront":"Все на передній план","PDFPageCounter":{"unsafeHTML":"сторінка <input type='text'/> з <span id='total'></span>"},"buttonReaderSettings":"Налаштування режиму читання","buttonReaderLightTheme":"Світлий","buttonReaderSepiaTheme":"Сепія","buttonReaderDarkTheme":"Темний","openReaderView":"Завжди відкривати в режимі читання","autoRedirectBannerReader":"Завжди відкривати статті з цього сайту в режимі читання?","buttonReaderRedirectYes":"Так","buttonReaderRedirectNo":"Ні","articleReaderView":"Оригінальна стаття","downloadCancel":"Скасувати","downloadStateCompleted":"Завершено","downloadStateFailed":"Невдача","updateNotificationTitle":"Доступна нова версія Min","settingsPasswordAutoFillHeadline":"Автозаповнення пароля","settingsSelectPasswordManager":"Виберіть один із підтримуваних менеджерів паролів:","keychainViewPasswords":"Переглянути збережені паролі","passwordManagerSetupHeading":"Завершіть налаштування %p щоб використовувати автозаповнення","passwordManagerSetupStep1":{"unsafeHTML":"Спочатку <a id='password-manager-setup-link'></a> і розпакуйте його для Вашої системи."},"passwordManagerInstallerSetup":{"unsafeHTML":"Завантажте <a id='password-manager-setup-link-installer'></a> і перетягніть файл у поле нижче:"},"passwordManagerSetupLink":"завантажте інструмент CLI %p","passwordManagerSetupLinkInstaller":"встановлювач CLI %p","passwordManagerSetupStep2":"Потім перетягніть інструмент у поле нижче:","passwordManagerSetupDragBox":"Перетягніть інструмент сюди","passwordManagerSetupInstalling":"Встановлення...","passwordManagerSetupSignIn":"Увійдіть до менеджера паролів, щоб почати використовувати автозаповнення. Ваші облікові дані не зберігатимуться ніде в межах Min.","disableAutofill":"Вимкнути автозаповнення","passwordManagerSetupUnlockError":"Не вдалося розблокувати сховище паролів: ","passwordManagerSetupRetry":"Переконайтеся, що використовуєте правильний файл та ввели правильний пароль. Ви можете повторити спробу, перетягнувши сюди інструмент ще раз.","passwordManagerUnlock":"Введіть головний пароль %p, щоб розблокувати сховище паролів:","passwordCaptureSavePassword":"Зберегти пароль для %s?","passwordCaptureSave":"Зберегти","passwordCaptureDontSave":"Не зберігати","savedPasswordsHeading":"Збережені паролі","savedPasswordsEmpty":"Немає збережених паролів.","deletePassword":"Видалити пароль для %s?","loginPromptTitle":"Увійти на %h (%r)","dialogConfirmButton":"Підтвердити","dialogSkipButton":"Скасувати","username":"Ім'я користувача","email":"Електронна пошта","password":"Пароль","secretKey":"Секретний ключ"}},"uz":{"name":"Uzbek","identifier":"uz","translations":{"addToDictionary":null,"pictureInPicture":"Rasmda rasm","openInNewTab":"Havolani yangi varaqda ochish","openInNewPrivateTab":"Havolani yangi maxfiy oynada ochish","saveLinkAs":null,"viewImage":"Rasmni ko'rish","openImageInNewTab":"Rasmni yangi varaqda ochish","openImageInNewPrivateTab":"Rasmni yangi maxfiy varaqda ochish","saveImageAs":"Rasmni saqlash","searchWith":"%s bilan izlash","copyLink":"Havoladan nusxa olish","copyEmailAddress":null,"selectAll":"Barchasini tanlash","undo":"Bekor qilish","redo":"Qayta qilish","cut":"Kesish","copy":"Nusxa olish","paste":"Qo'yish","goBack":"Ortga qaytish","goForward":"","inspectElement":"Elementni kuzatish","pasteAndGo":null,"DDGAnswerSubtitle":"Javob","suggestedSite":"Taklif qilingan sahifa","resultsFromDDG":"DuckDuckGo dan javoblar","taskN":"Vazifa %n","showMoreBangs":"Ko'proq ko'rsatish","viewSettings":"Sozlamarni ko'rish","takeScreenshot":"Skrinshot olish","clearHistory":"Barcha tarixni o'chirish","enableBlocking":"Ushbu sahifaga kontent bloklashni yoqish","disableBlocking":"Ushbu sahifaga kontent bloklashni o'chirish","clearHistoryConfirmation":"Barcha tarix va ma'lumotlar o'chirilsinmi?","switchToTask":"Boshqa vazifaga o'tish","createTask":"Yangi vazifa","closeTask":"Vazifani yopish","moveToTask":"Ushbu varaqni vazifa o'tkazish","nameTask":"Vazifaga nom berish","addBookmark":"Xatcho'pga qo'shish","searchBookmarks":"Xatcho'plarni izlash","bookmarksAddTag":"Teg qo'shish...","bookmarksSimilarItems":"Bir xil elementlar","searchHistory":"Tarixdan qidirish","importBookmarks":"Xatcho'plarni HTML fayldan import qilish","exportBookmarks":"Xatcho'plarni export qilish","runUserscript":null,"openMenu":"Menyuni ochish","enterReaderView":"O'quvchi ko'rinishiga kirish","exitReaderView":"O'quvchi ko'rinishidan chiqish","newTabLabel":"Yangi varaq","connectionNotSecure":"Bu sahifa bilan aloqa xavfsiz emas","searchbarPlaceholder":"Qidirin yoki manzilni kiriting","privateTab":"Maxfiy varaq","newTabAction":"Yangi varaq","viewTasks":"Vazifalarni ko'rish","newTask":"Yangi vazfa","defaultTaskName":"Vazifa %n","taskDeleteWarning":{"unsafeHTML":"Vazifa o'chirildi. <a>Bekor qilasizmi?</a>"},"returnToTask":"Oldingi vazifaga qaytish","taskDescriptionTwo":"%t va %t","taskDescriptionThree":"%t, %t, va yana %n","searchInPage":"Sahifadan qidirish","findMatchesSingular":"%i dan %t topildi","findMatchesPlural":"%i dan %t topildi","isFocusMode":"Siz Fokus Rejimidasiz","closeDialog":"OK","focusModeExplanation1":null,"focusModeExplanation2":null,"timeRangeJustNow":"Hozirgina","timeRangeMinutes":"Bir necha daqiqa oldin","timeRangeHour":"O'tgan soatda","timeRangeToday":"Bugun","timeRangeYesterday":"Kecha","timeRangeWeek":"O'tgan hafta","timeRangeMonth":"O'tgan oy","timeRangeYear":"O'tgan yil","timeRangeLongerAgo":"Ancha oldin","crashErrorTitle":"Nimadir noto'g'ro bajarildi.","crashErrorSubtitle":"Muammo shu sahifani ko'rsatayotganda sodir build.","errorPagePrimaryAction":"Yana urinib ko'ring","serverNotFoundTitle":"Server topilmadi","serverNotFoundSubtitle":"Min bu sahifani topa olmadi.","archiveSearchAction":"archive.org da qidirish","sslErrorTitle":"Bu sahifa mabjud emas","sslErrorMessage":"Min bu sahifaga xavfsiz ulana olmadi.","dnsErrorTitle":"Sahifa topilmadi","dnsErrorMessage":"DNS muammo yuz berdi","offlineErrorTitle":"Siz oflaynsiz","offlineErrorMessage":"Internetga qayta ulaning va yana urinib ko'ring.","genericConnectionFail":"Min sahifaga ulana olamadi.","sslTimeErrorMessage":"Min bu sahifaga xavfsiz ulana olmadi. Iltimos, kompyuter soati to'g'ri sozlanganiga ishonch hosil qiling.","addressInvalidTitle":"Bu manzil yaroqsiz.","genericError":"Muammo yuz berdi","phishingErrorTitle":"Bu sahifa sizga ziyon yetkazishi mumkin.","phishingErrorMessage":"Ushbu sahifa sizning shaxsiy ma'lumotlaringizni, masalan, parollar yoki bank ma'lumotlarini o'g'irlashga urinayotgan bo'lishi mumkin.","phishingErrorVisitAnyway":"Baribir sahifaga kirish","phishingErrorLeave":"Sahifani tark etish","multipleInstancesErrorMessage":"Muammo yuz berdi. Iltimos, barcha ochiq namunalarni yopib Minni qaytadan oching.","sessionRestoreErrorTitle":"Muammo yuz berdi","sessionRestoreErrorExplanation":"Sizning saqlangan varaqlaringizni to'g'ri tiklab bo'lmadi","sessionRestoreErrorBackupInfo":"Biz sizning ma'lumotlaringizni ushbu manzilga saqlab qo'yganmiz: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Agar bu muammo yuz berishni davom etsa, iltimos yangi masala oching <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">here</a>."},"settingsPreferencesHeading":"Parametlar","settingsRestartRequired":"Ozgarishlar qo'llanishi uchun qayta ishga tushirishingiz kerak.","settingsPrivacyHeading":"Kontent Bloklash","settingsContentBlockingLevel0":"Barcha reklama va kuzatuvchilarga ruxsat berish","settingsContentBlockingLevel1":"Uchini-partiya reklama va kuzatuvchilarni bloklash","settingsContentBlockingLevel2":"Barcha reklama va kuzatuvchilarni bloklash","settingsContentBlockingExceptions":"Reklamalar ushbu sahifalarda ruxsat beriladi:","settingsBlockScriptsToggle":"Skriptlarni bloklash","settingsBlockImagesToggle":"Rasmlarni bloklash","settingsBlockedRequestCount":{"unsafeHTML":null},"settingsCustomizeFiltersLink":null,"settingsEnableDarkMode":"Ko'rinish:","settingsDarkModeNever":null,"settingsDarkModeNight":null,"settingsDarkModeAlways":null,"settingsDarkModeToggle":"Qorong'u rejimini yoqish","settingsSiteThemeToggle":"Sahifa mavzusini yoqish","settingsAdditionalFeaturesHeading":"Qo'shimcha xususiyatlar","settingsUserscriptsToggle":"Foydalanuvchi skriptlarini yoqish","settingsShowDividerToggle":null,"settingsSeparateTitlebarToggle":"Alohida sarlavha paneli ishlatish","settingsOpenTabsInForegroundToggle":null,"settingsUserscriptsExplanation":{"unsafeHTML":"Foydalanuvchi skriptlari sahifa ishlashini o'zgartirishga yordam beradi - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">qo'shimcha ma'lumot</a>."},"settingsUserAgentToggle":"Maxsus foydalanvuchi agentidan foydalanish","settingsUpdateNotificationsToggle":" Yangilanishlarni avtomatik ravishda tekshirish","settingsSearchEngineHeading":"Qidiruv Tizimi","settingsDefaultSearchEngine":"Standart qidiruv tizimini tanlang:","settingsDDGExplanation":"Qidiruv panelida tezkor javoblarni ko'rish uchun DuckDuckGo ni standart qidiruv tizimi sifatida o'rnating.","customSearchEngineDescription":"Qidiruv so'zini %s bilan almashtirish","settingsKeyboardShortcutsHeading":"Klaviatura yorliqlari","settingsKeyboardShortcutsHelp":"Yorliqlarni vergul bilan ajrating.","settingsProxyHeading":null,"settingsNoProxy":null,"settingsManualProxy":null,"settingsAutomaticProxy":null,"settingsProxyRules":null,"settingsProxyBypassRules":null,"settingsProxyConfigurationURL":null,"appMenuFile":"Fayl","appMenuNewTab":"Yangi varaq","appMenuDuplicateTab":"Duplikat varaq","appMenuNewPrivateTab":"Yangi maxfiy varaq","appMenuNewTask":"Yangi vazifa","appMenuSavePageAs":"Sahifani saqlash","appMenuPrint":"Chop etish","appMenuEdit":"O'zgartirish","appMenuUndo":"Bekor qilish","appMenuRedo":"Qayta qilish","appMenuCut":"Kesish","appMenuCopy":"Nusxa olish","appMenuPaste":"Qo'yish","appMenuSelectAll":"Barchasini tanlash","appMenuFind":"Izlash","appMenuView":"Ko'rinish","appMenuZoomIn":"Kattalashtirish","appMenuZoomOut":"Kichiklashtirish","appMenuActualSize":"Haqiqiy hajmi","appMenuFullScreen":"To'liq ekran","appMenuFocusMode":"Fokus Rejimi","appMenuBookmarks":"Xatcho'plar","appMenuHistory":"Tarix","appMenuDeveloper":"Dasturchi","appMenuReloadBrowser":"Brauzerni qayta ochish","appMenuInspectBrowser":"Brauzerni kuzatish","appMenuInspectPage":"Sahifani kuzatish","appMenuWindow":"Oyna","appMenuMinimize":"Kichraytirish","appMenuClose":"Yopish","appMenuAlwaysOnTop":"Har doim tepada","appMenuHelp":"Yordam","appMenuKeyboardShortcuts":"Klaviatura yorliqlari","appMenuReportBug":"Xato haqida xabar berish","appMenuTakeTour":"Sayohat qilish","appMenuViewGithub":"GitHub-da ko'rish","appMenuAbout":"%n haqida","appMenuPreferences":"Parametlar","appMenuServices":"Xizmatlar","appMenuHide":"%n berkitish","appMenuHideOthers":"Boshqalarni yashirin","appMenuShowAll":"Barchasini ko'rsatish","appMenuQuit":"%n chiqish","appMenuBringToFront":"Barchasini oldinga olib kelish","PDFPageCounter":{"unsafeHTML":"Sahifa <input type='text'/> of <span id='total'></span>"},"buttonReaderSettings":null,"buttonReaderLightTheme":null,"buttonReaderSepiaTheme":null,"buttonReaderDarkTheme":null,"openReaderView":null,"autoRedirectBannerReader":null,"buttonReaderRedirectYes":null,"buttonReaderRedirectNo":null,"articleReaderView":null,"downloadCancel":"Bekor qilish","downloadStateCompleted":"Yakunlangan","downloadStateFailed":"Muvaffaqiyatsiz","updateNotificationTitle":"Minning yangi versiyasi mavjud","settingsPasswordAutoFillHeadline":"Parolni avtomatik to'ldirish","settingsSelectPasswordManager":"Parol menejerlardan birini tanlang:","keychainViewPasswords":null,"passwordManagerSetupHeading":"Avtomatik to'ldirishni ishlatish uchun %p ni sozlashni tugating","passwordManagerSetupStep1":{"unsafeHTML":" Birinchi, <a id='password-manager-setup-link'></a> va o'z tizimingizga chiqarib oling."},"passwordManagerSetupLink":"%p CLI vositasini yuklab oling","passwordManagerSetupStep2":"Keyin vositani quyidagi maydonchaga torting:","passwordManagerSetupDragBox":"Vositani bu yerga torting","passwordManagerSetupInstalling":"O'rnatilmoqda...","passwordManagerSetupSignIn":"Avtomatik to'ldirishni ishlatish uchun parol menejeringiz tizimiga kiring. Sizning ma'lumotlaringiz Minni hech qanday joyida saqlanmaydi.","disableAutofill":"Avtomatik to'ldirishni o'chirish","passwordManagerSetupUnlockError":"Parollar do'konini ochish muvaffaqiyatsiz bo'ldi: ","passwordManagerSetupRetry":"To'g'ri fayl va parol kiritayotganingizga ishonch hosil qiling. Qayta urinib ko'rish uchun vositani bu yerga torting.","passwordManagerUnlock":"Parol do'konini ochish uchun usta parolni kiriting:","passwordCaptureSavePassword":null,"passwordCaptureSave":null,"passwordCaptureDontSave":null,"savedPasswordsHeading":null,"savedPasswordsEmpty":null,"deletePassword":null,"loginPromptTitle":"%h (%r) tizimiga kirish","dialogConfirmButton":"Tasdiqlash","dialogSkipButton":"Bekor qilish","username":"Foydalanuvchi ismi","email":"Elektron pochta","password":"Parol","secretKey":"Maxfiy kalit"}},"vi":{"name":"Tiếng Việt","identifier":"vi","translations":{"addToDictionary":null,"pictureInPicture":null,"openInNewTab":"Mở trong tab mới","openInNewPrivateTab":"Mở trong tab riêng tư mới","saveLinkAs":null,"viewImage":"Xem ảnh","openImageInNewTab":"Mở ảnh trong tab mới","openImageInNewPrivateTab":"Mở ảnh trong tab riêng tư mới","saveImageAs":"Lưu ảnh thành","searchWith":"Tìm kiếm với %s","copyLink":"Chép liên kết","copyEmailAddress":null,"selectAll":"Chọn tất cả","undo":"Hoàn tác","redo":"Làm lại","cut":"Cắt","copy":"Chép","paste":"Dán","goBack":"Đi lại trang trước","goForward":"Đi tiếp trang sau","inspectElement":"Kiểm tra thành phần","pasteAndGo":null,"DDGAnswerSubtitle":"Câu trả lời","suggestedSite":"Trang web đề xuất","resultsFromDDG":"Kết quả từ DuckDuckGo","taskN":"Quá trình %n","showMoreBangs":"Xem hơn","viewSettings":"Xem cài đặt","takeScreenshot":"Chụp màn hình","clearHistory":"Xóa lịch sử","enableBlocking":null,"disableBlocking":null,"clearHistoryConfirmation":"Xóa các lịch sử và dữ liệu duyệt?","switchToTask":"Đổi sang quá trình","createTask":"Tạo quá trình","closeTask":"Kết thúc quá trình","moveToTask":"Chuyển tab này sang quá trình khác","nameTask":"Ghi tên quá trình này","addBookmark":"Đánh dấu trang này","searchBookmarks":"Tìm kiếm trong trang web đánh dấu","bookmarksAddTag":"Thêm thẻ","bookmarksSimilarItems":"Các mục tương tự","searchHistory":"Tìm kiếm trong lịch sử","importBookmarks":"Nhập dấu trang từ tệp HTML","exportBookmarks":"Xuất dấu trang","runUserscript":null,"openMenu":"Mở menu","enterReaderView":"Vào chế độ đọc ngôn","exitReaderView":"Thoát chế độ đọc ngôn","newTabLabel":"Tab mới","connectionNotSecure":"Kết nối đến trang web này không có an toàn.","searchbarPlaceholder":"Tìm kiếm hoặc nhập địa chỉ","privateTab":"Tab riêng tư","newTabAction":"Mở tab mới","viewTasks":"Xem quá trình","newTask":"Tao quá trình","defaultTaskName":"Quá trình %n","searchInPage":"Tìm kiếm trong trang","findMatchesSingular":"%i của %t","findMatchesPlural":"%i của %t","isFocusMode":"Bạn trong chế độ tập trung.","closeDialog":"OK","focusModeExplanation1":null,"focusModeExplanation2":null,"timeRangeJustNow":"Vừa nãy","timeRangeMinutes":"Vài phút trước","timeRangeHour":"Trong giờ trước","timeRangeToday":"Hôm nay","timeRangeYesterday":"Hôm qua","timeRangeWeek":"Trong tuần trước","timeRangeMonth":"Trong tháng trước","timeRangeYear":"Trong năm trước","timeRangeLongerAgo":"Lâu hơn","crashErrorTitle":"Có gì không ổn.","crashErrorSubtitle":"Đã xảy ra sự cố khi hiển thị trang web này.","errorPagePrimaryAction":"Thử lại","serverNotFoundTitle":"Không tìm thấy máy chủ","serverNotFoundSubtitle":"Min không có thể tìm trang web này.","archiveSearchAction":"Tìm kiếm trên archive.org","sslErrorTitle":"Trang web này không có sẵn","sslErrorMessage":"Min không có thể kết nối an toàn đến trang web này.","dnsErrorTitle":"Không tìm thấy trang web","dnsErrorMessage":"Đã xảy ra lỗi DNS.","offlineErrorTitle":"Bạn đang ngoại tuyến","offlineErrorMessage":"Kết nối lại với internet và thử lại.","genericConnectionFail":"Min không có thể kết nối với trang web.","sslTimeErrorMessage":"Min không có thể kết nối an toàn đến trang web này. Hãy kiểm tra đồng hồ máy tính của bạn bị đật đúng.","addressInvalidTitle":"Địa chỉ này không hợp lệ.","genericError":"Đã xảy ra lỗi","phishingErrorTitle":"Trang web này có thể bị nguy hiểm.","phishingErrorMessage":"Trang web này có thể cố gắng ăn cắp thông tin cá nhân của bạn, ví dụ: mật khẩu hoặc thông tin ngân hàng.","phishingErrorVisitAnyway":"Vẫn truy cập","phishingErrorLeave":"Rời trang web này","multipleInstancesErrorMessage":"Đã xảy ra lỗi. Hãy thoát trường hợp khác đang mở và khởi chạy Min lại.","sessionRestoreErrorTitle":"Đã xảy ra lỗi","sessionRestoreErrorExplanation":"Tab bạn đã lưu không thể khôi phục được.","sessionRestoreErrorBackupInfo":"Chúng tôi sao lưu một bản sao dữ liệu của bạn tại đây: %l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"Nếu lỗi này vẫn còn xảy ra, hãy tạo báo cáo về lỗi mới <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">tại đây</a>."},"settingsPreferencesHeading":"Cài đặt","settingsRestartRequired":"Bạn cần khởi chạy lại để áp dụng các thay đổi.","settingsPrivacyHeading":"Lời chận nội dung","settingsContentBlockingLevel0":"Cho phép các quảng cáo và bộ theo dõi","settingsContentBlockingLevel1":"Chận các quảng cáo và bộ theo dõi bên thứ ba","settingsContentBlockingLevel2":"Chận các quảng cáo và bộ theo dõi","settingsContentBlockingExceptions":"Quảng cáo vẫn còn cho phép trên trang web này:","settingsBlockScriptsToggle":"Chận mã script","settingsBlockImagesToggle":"Chận ảnh","settingsBlockedRequestCount":{"unsafeHTML":null},"settingsCustomizeFiltersLink":null,"settingsAppearanceHeading":"Giao diện","settingsEnableDarkMode":"Bật chế độ tối:","settingsDarkModeNever":null,"settingsDarkModeNight":null,"settingsDarkModeAlways":null,"settingsSiteThemeToggle":"Bật chủ đề trang","settingsAdditionalFeaturesHeading":"Đặc tính hơn","settingsUserscriptsToggle":"Bật mã script người dùng","settingsShowDividerToggle":null,"settingsSeparateTitlebarToggle":null,"settingsOpenTabsInForegroundToggle":null,"settingsUserscriptsExplanation":{"unsafeHTML":"Mã script người dùng có thể cho bạn thay đổi hành vi trang web - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">biết thêm</a>."},"settingsUserAgentToggle":null,"settingsUpdateNotificationsToggle":"Tự động kiểm tra cập nhật","settingsSearchEngineHeading":"Công cụ tìm kiếm","settingsDefaultSearchEngine":"Chọn công cụ tìm kiếm mặc định:","settingsDDGExplanation":"Đặt DuckDuckGo thành công cụ tìm kiếm mặc định để xem câu trả lời ngay trong thanh tìm kiếm.","customSearchEngineDescription":"Thay thế thuật ngữ tìm kiếm bằngwith %s","settingsKeyboardShortcutsHeading":"Phím tắt","settingsKeyboardShortcutsHelp":"Sử dụng dấu phẩy để phân tách phím tắt khác nhau.","settingsProxyHeading":null,"settingsNoProxy":null,"settingsManualProxy":null,"settingsAutomaticProxy":null,"settingsProxyRules":null,"settingsProxyBypassRules":null,"settingsProxyConfigurationURL":null,"appMenuFile":"Tệp","appMenuNewTab":"Tab Mới","appMenuDuplicateTab":"Nhân bản Tab","appMenuNewPrivateTab":"Tab riêng tư mới","appMenuNewTask":"Quá trình mới","appMenuSavePageAs":"Lưu trang thành","appMenuPrint":"In","appMenuEdit":"Sửa","appMenuUndo":"Hoàn tác","appMenuRedo":"Làm lại","appMenuCut":"Cắt","appMenuCopy":"Chép","appMenuPaste":"Dán","appMenuSelectAll":"Chọn tất cả","appMenuFind":"Tìm kiếm trong trang","appMenuView":"Xem","appMenuZoomIn":"Phóng to","appMenuZoomOut":"Thu nhỏ","appMenuActualSize":"Cỡ thường","appMenuFullScreen":"Toàn màn hình","appMenuFocusMode":"Chế độ tập trung","appMenuBookmarks":"Trang đã đánh dấu","appMenuHistory":"Lịch sử","appMenuDeveloper":"Phát triển","appMenuReloadBrowser":"Tải lại bộ duyệt","appMenuInspectBrowser":"Mở bộ kiểm tra cho bộ duyệt","appMenuInspectPage":"Mở bộ kiểm tra cho trang","appMenuWindow":"Cửa sổ","appMenuMinimize":"Cực tiểu hóa","appMenuClose":"Đóng","appMenuAlwaysOnTop":"Luôn hiện trên đầu","appMenuHelp":"Trợ giúp","appMenuKeyboardShortcuts":"Phím tắt","appMenuReportBug":"Báo cáo lỗi","appMenuTakeTour":"Đi tham quan","appMenuViewGithub":"Xem trên GitHub","appMenuAbout":"Giới thiệu về %n","appMenuPreferences":"Cài đặt","appMenuServices":"Dịch vụ","appMenuHide":"Ẩn %n","appMenuHideOthers":"Ẩn các mục khác","appMenuShowAll":"Hiển thị tất cả","appMenuQuit":"Thoát %n","appMenuBringToFront":"Đưa tất cả trên trước","PDFPageCounter":{"unsafeHTML":"trang <input type='text'/> của <span id='total'></span>"},"buttonReaderSettings":null,"buttonReaderLightTheme":null,"buttonReaderSepiaTheme":null,"buttonReaderDarkTheme":null,"openReaderView":null,"autoRedirectBannerReader":null,"buttonReaderRedirectYes":null,"buttonReaderRedirectNo":null,"articleReaderView":null,"downloadCancel":"Hủy","downloadStateCompleted":"Hoàn tất","downloadStateFailed":"Thất bại","updateNotificationTitle":"Phiên bản mới cho Min có sẵn"}},"zh-CN":{"name":"中文 (简体中文)","identifier":"zh-CN","translations":{"addToDictionary":null,"pictureInPicture":null,"openInNewTab":"在新标签页打开","openInNewPrivateTab":"在新隐私标签页中打开","saveLinkAs":null,"viewImage":"查看图片","openImageInNewTab":"在新标签页中打开图片","openImageInNewPrivateTab":"在新的隐私标签页中打开图片","saveImageAs":"图片另存为","searchWith":"在 %s 中搜索","copyLink":"复制链接","copyEmailAddress":null,"selectAll":"全选","undo":"撤销","redo":"重做","cut":"剪切","copy":"复制","paste":"粘贴","goBack":"后退","goForward":"前进","inspectElement":"查看元素","pasteAndGo":null,"DDGAnswerSubtitle":"搜索结果","suggestedSite":"建议站点","resultsFromDDG":"DuckDuckGo 返回的结果","taskN":"标签组 %n","showMoreBangs":"显示更多","viewSettings":"查看设置界面","takeScreenshot":"截图","clearHistory":"清除所有历史记录","enableBlocking":null,"disableBlocking":null,"clearHistoryConfirmation":"是否清除所有历史记录？","switchToTask":"切换到标签组列表","closeTask":"关闭标签组","createTask":"新建标签组","moveToTask":"以当前标签页创建一个新的标签组","nameTask":"命名标签组","addBookmark":"增加书签","searchBookmarks":"搜索书签内容","bookmarksAddTag":"新增标签","bookmarksSimilarItems":"近似项目","searchHistory":"搜索历史","importBookmarks":"自HTML文件导入书签","exportBookmarks":"导出书签","runUserscript":null,"openMenu":"开启菜单","enterReaderView":"进入阅读模式","exitReaderView":"退出阅读模式","newTabLabel":"新标签页","connectionNotSecure":"你与此站点建立的连接并不安全。","searchbarPlaceholder":"输入搜索内容或网站地址","privateTab":"隐私标签页","newTabAction":"新建标签页","viewTasks":"查看标签组","newTask":"新建标签组","defaultTaskName":"标签组 %n","taskDeleteWarning":{"unsafeHTML":"标签组已删除 <a>恢复？</a>"},"returnToTask":"返回上一个标签组","taskDescriptionTwo":"%t 和 %t","taskDescriptionThree":"%t, %t, 和其他%n个标签","searchInPage":"搜索当前页","findMatchesSingular":"%i/%t","findMatchesPlural":"%i/%t","isFocusMode":"当前处于焦点模式","closeDialog":"确定","focusModeExplanation1":null,"focusModeExplanation2":null,"timeRangeJustNow":"几秒前","timeRangeMinutes":"几分钟前","timeRangeHour":"几小时前","timeRangeToday":"今天","timeRangeYesterday":"昨天","timeRangeWeek":"几星期前","timeRangeMonth":"几个月前","timeRangeYear":"几年前","timeRangeLongerAgo":"很久以前","crashErrorTitle":"发生故障。","crashErrorSubtitle":"渲染页面时，发生错误。","errorPagePrimaryAction":"重试","serverNotFoundTitle":"未找到服务器","serverNotFoundSubtitle":"Min 无法找到当前地址的服务器。","archiveSearchAction":"从 archive.org 搜索内容","sslErrorTitle":"当前站点是无效的","sslErrorMessage":"Min 不能与当前站点建立安全连接。","dnsErrorTitle":"站点未找到","dnsErrorMessage":"发生 DNS 错误。","offlineErrorTitle":"您处于离线状态","offlineErrorMessage":"重新连接网络并重试。","genericConnectionFail":"Min 无法连接到站点。","sslTimeErrorMessage":"Min 无法安全地连接到当前站点。请确保您的电脑时钟是否正确。","addressInvalidTitle":"无效的地址。","genericError":"发生错误","phishingErrorTitle":"这是一个危险网站。","phishingErrorMessage":"这个站点可能会窃取您的个人信息，如密码或银行信息。","phishingErrorVisitAnyway":"继续访问","phishingErrorLeave":"离开","multipleInstancesErrorMessage":"发生错误。请关闭其他视窗并重启 Min 浏览器","sessionRestoreErrorTitle":"发生错误","sessionRestoreErrorExplanation":"您保存的标签页未能正确恢复。","sessionRestoreErrorBackupInfo":"我们将您的数据备份保存在：%l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"如果持续发生此错误，请在<a href=\"https://github.com/minbrowser/min\" target=\"_blank\">此处</a>报告错误信息。"},"settingsPreferencesHeading":"设置","settingsRestartRequired":"您需要重启以应用这些修改","settingsPrivacyHeading":"隐私设置","settingsContentBlockingLevel0":"允许所有广告和追踪者","settingsContentBlockingLevel1":"禁止第三方广告和追踪者","settingsContentBlockingLevel2":"禁止所有广告和追踪者","settingsContentBlockingExceptions":"下列站点的广告将被允许","settingsBlockScriptsToggle":"阻止脚本运行","settingsBlockImagesToggle":"阻止加载图片","settingsBlockedRequestCount":{"unsafeHTML":null},"settingsCustomizeFiltersLink":null,"settingsAppearanceHeading":"外观","settingsEnableDarkMode":null,"settingsDarkModeNever":null,"settingsDarkModeNight":null,"settingsDarkModeAlways":null,"settingsSiteThemeToggle":"启用网站主题","settingsAdditionalFeaturesHeading":"其他功能","settingsUserscriptsToggle":"允许使用者指令","settingsShowDividerToggle":null,"settingsSeparateTitlebarToggle":null,"settingsOpenTabsInForegroundToggle":null,"settingsUserscriptsExplanation":{"unsafeHTML":"使用者指令允许您改变网站行为 - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">查看更多</a>."},"settingsUserAgentToggle":null,"settingsUpdateNotificationsToggle":"自动检查更新","settingsSearchEngineHeading":"搜索引擎","settingsDefaultSearchEngine":"选择默认的搜索引擎:","settingsDDGExplanation":"将 DuckDuckGo 设为默认的搜索引擎可以直接在搜索栏查看搜索结果。","customSearchEngineDescription":"将搜索字符串以 %s 代替","settingsKeyboardShortcutsHeading":"快捷键","settingsKeyboardShortcutsHelp":"用逗号分隔多个快捷键","settingsProxyHeading":null,"settingsNoProxy":null,"settingsManualProxy":null,"settingsAutomaticProxy":null,"settingsProxyRules":null,"settingsProxyBypassRules":null,"settingsProxyConfigurationURL":null,"appMenuFile":"文件","appMenuNewTab":"新标签页","appMenuDuplicateTab":"复制标签页","appMenuNewPrivateTab":"新的隐私标签页","appMenuNewTask":"新标签组","appMenuSavePageAs":"页面另存为","appMenuPrint":"打印","appMenuEdit":"编辑","appMenuUndo":"复原","appMenuRedo":"重做","appMenuCut":"剪切","appMenuCopy":"复制","appMenuPaste":"粘贴","appMenuSelectAll":"全选","appMenuFind":"查找","appMenuView":"查看","appMenuZoomIn":"放大","appMenuZoomOut":"缩小","appMenuActualSize":"实际大小","appMenuFullScreen":"全屏","appMenuFocusMode":"焦点模式","appMenuBookmarks":"书签","appMenuHistory":"历史","appMenuDeveloper":"开发","appMenuReloadBrowser":"重新加载浏览器","appMenuInspectBrowser":"切换开发人员工具","appMenuInspectPage":"查看页面元素","appMenuWindow":"窗口","appMenuMinimize":"最小化","appMenuClose":"关闭","appMenuAlwaysOnTop":"前置显示","appMenuHelp":"帮助","appMenuKeyboardShortcuts":"快捷键","appMenuReportBug":"报告 Bug","appMenuTakeTour":"使用手册","appMenuViewGithub":"GitHub","appMenuAbout":"关于 %n","appMenuPreferences":"设置","appMenuServices":"服务","appMenuHide":"隐藏 %n","appMenuHideOthers":"隐藏其它","appMenuShowAll":"全部显示","appMenuQuit":"退出 %n","appMenuBringToFront":"前置所有窗口","PDFPageCounter":{"unsafeHTML":"<input type='text'/> / <span id='total'></span> 页"},"buttonReaderSettings":null,"buttonReaderLightTheme":null,"buttonReaderSepiaTheme":null,"buttonReaderDarkTheme":null,"openReaderView":null,"autoRedirectBannerReader":null,"buttonReaderRedirectYes":null,"buttonReaderRedirectNo":null,"articleReaderView":null,"downloadCancel":"取消","downloadStateCompleted":"已完成","downloadStateFailed":"失败","updateNotificationTitle":"已有新的Min版本","settingsPasswordAutoFillHeadline":"密码自动填充","settingsSelectPasswordManager":"选择一个支持的密码管理器：","keychainViewPasswords":null,"passwordManagerSetupHeading":"完成 %p 中的设置以使用自动填充","passwordManagerSetupStep1":{"unsafeHTML":"首先, 访问 <a id='password-manager-setup-link'></a> 并解压到你的系统中。"},"passwordManagerInstallerSetup":null,"passwordManagerSetupLink":"下载 %p 中的CLI工具","passwordManagerSetupLinkInstaller":null,"passwordManagerSetupStep2":"然后把工具拖动到下面的框中：","passwordManagerSetupDragBox":"把工具拖动到这里","passwordManagerSetupInstalling":"安装中...","passwordManagerSetupSignIn":"登录密码管理器以使用自动填充。你的凭证不会在Min内存储。","disableAutofill":"关闭自动填充","passwordManagerSetupUnlockError":"解锁密码存储区失败：","passwordManagerSetupRetry":"请确认你使用了正确的文件和密码。你可以再次把工具拖到这里并重试。","passwordManagerUnlock":"输入 %p 主密码来解锁密码存储区：","passwordCaptureSavePassword":null,"passwordCaptureSave":null,"passwordCaptureDontSave":null,"savedPasswordsHeading":null,"savedPasswordsEmpty":null,"deletePassword":null,"loginPromptTitle":null,"dialogConfirmButton":"确认","dialogSkipButton":"取消","username":null,"email":"邮箱","password":"密码","secretKey":null}},"zh-TW":{"name":"中文 (繁體中文)","identifier":"zh-TW","translations":{"addToDictionary":"加入字典","pictureInPicture":"子母畫面","openInNewTab":"在新分頁中開啟","openInNewPrivateTab":"在新無痕頁面中開啟","saveLinkAs":"另存連結為...","viewImage":"查看圖片","openImageInNewTab":"在新分頁中開啟圖片","openImageInNewPrivateTab":"在新無痕頁面中開啟圖片","saveImageAs":"儲存圖片","searchWith":"以 %s 搜尋","copyLink":"複製連結","copyEmailAddress":"複製電子郵件地址","selectAll":"全選","undo":"復原","redo":"重做","cut":"剪下","copy":"複製","paste":"貼上","goBack":"上一頁","goForward":"下一頁","inspectElement":"檢查元素","pasteAndGo":"貼上並前往","DDGAnswerSubtitle":"搜尋結果","suggestedSite":"建議網站","resultsFromDDG":"來自 DuckDuckGo 的結果","taskN":"工作 %n","showMoreBangs":"顯示更多","viewSettings":"查看設定","takeScreenshot":"螢幕截圖","clearHistory":"清除所有歷史","enableBlocking":"啟用內容過濾","disableBlocking":"關閉內容過濾","clearHistoryConfirmation":"是否清除所有歷史？","switchToTask":"切換至工作","createTask":"新增工作","closeTask":"關閉工作","moveToTask":"移動至工作","nameTask":"命名工作","addBookmark":"加入書籤","searchBookmarks":"搜尋書籤","bookmarksAddTag":"新增標籤","bookmarksSimilarItems":"相似項目","searchHistory":"搜尋歷史","importBookmarks":"自 HTML 檔案匯入書籤","exportBookmarks":"匯出書籤","runUserscript":"執行使用者指令","openMenu":"打開選單","enterReaderView":"進入閱讀模式","exitReaderView":"退出閱讀模式","newTabLabel":"新分頁","connectionNotSecure":"此網站不安全","searchbarPlaceholder":"搜尋或輸入網址","privateTab":"無痕分頁","newTabAction":"新增分頁","viewTasks":"查看工作","newTask":"新增工作","defaultTaskName":"工作 %n","taskDeleteWarning":{"unsafeHTML":"工作已刪除 <a>復原</a>"},"returnToTask":"還原上次的工作","taskDescriptionTwo":"%t 和 %t","taskDescriptionThree":"%t，%t，和其他%n個分頁","searchInPage":"在頁面中尋找","findMatchesSingular":"%i / %t","findMatchesPlural":"%i / %t","isFocusMode":"已進入專心模式","closeDialog":"確定","focusModeExplanation1":"在專注模式，你將無法新增分頁或切換工作。","focusModeExplanation2":"您可以取消勾選「選單 > 檢視 > 專心模式」退出專心模式。","timeRangeJustNow":"剛剛","timeRangeMinutes":"幾分鐘前","timeRangeHour":"幾小時前","timeRangeToday":"今天","timeRangeYesterday":"昨天","timeRangeWeek":"幾星期前","timeRangeMonth":"幾個月前","timeRangeYear":"幾年前","timeRangeLongerAgo":"很久以前","crashErrorTitle":"出了一些問題","crashErrorSubtitle":"顯示此頁面時發生了一些問題","errorPagePrimaryAction":"重試","serverNotFoundTitle":"找不到伺服器","serverNotFoundSubtitle":"Min 找不到這個網站","archiveSearchAction":"在 archive.org 上搜尋","sslErrorTitle":"這個網站不存在","sslErrorMessage":"Min 無法與此網站建立安全連線","dnsErrorTitle":"找不到這個網站","dnsErrorMessage":"發生 DNS 錯誤","offlineErrorTitle":"沒有網際網路連線","offlineErrorMessage":"重新連線至網路再試一次","genericConnectionFail":"Min 無法連線至這個網站","sslTimeErrorMessage":"Min 無法安全地連線到此網站，請確認時間是否設定正確","addressInvalidTitle":"網址錯誤","genericError":"發生了一些問題","phishingErrorTitle":"這個網站可能有危險","phishingErrorMessage":"這個網站可能會駭取你的個人資料，像是密碼和銀行資訊","phishingErrorVisitAnyway":"還是繼續","phishingErrorLeave":"離開","multipleInstancesErrorMessage":"發生了一些問題，請關閉其他分頁然後重新啟動 Min","sessionRestoreErrorTitle":"發生錯誤","sessionRestoreErrorExplanation":"上次瀏覽的分頁無法回復","sessionRestoreErrorBackupInfo":"我們將您的資料備份儲存在：%l.","sessionRestoreErrorLinkInfo":{"unsafeHTML":"如果持續發生此錯誤，請至<a href=\"https://github.com/minbrowser/min\" target=\"_blank\">此頁面</a>報告錯誤"},"settingsPreferencesHeading":"設定","settingsRestartRequired":"重新啟動以套用變更","settingsPrivacyHeading":"隱私設定","settingsContentBlockingLevel0":"允許所有廣告與追蹤器","settingsContentBlockingLevel1":"阻止第三方廣告與追蹤器","settingsContentBlockingLevel2":"阻止所有廣告與追蹤器","settingsContentBlockingExceptions":"不要在這些網站阻擋廣告：","settingsBlockScriptsToggle":"阻擋 JavaScript 腳本運行","settingsBlockImagesToggle":"阻擋圖片","settingsBlockedRequestCount":{"unsafeHTML":"到目前為止，Min 已經封鎖了 <strong></strong> 個廣告和追蹤器"},"settingsCustomizeFiltersLink":"自訂過濾器","settingsAppearanceHeading":"外觀","settingsEnableDarkMode":"啟用深色模式：","settingsDarkModeNever":"永不","settingsDarkModeNight":"於晚上開啟","settingsDarkModeAlways":"永遠","settingsSiteThemeToggle":"啟用網站主題","settingsAdditionalFeaturesHeading":"其他功能","settingsUserscriptsToggle":"允許使用者指令","settingsShowDividerToggle":null,"settingsSeparateTitlebarToggle":"分割標題列","settingsOpenTabsInForegroundToggle":"在前景開啟新分頁","settingsUserscriptsExplanation":{"unsafeHTML":"使用者指令允許您改變網站的行為 - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">查看更多</a>."},"settingsUserAgentToggle":"使用自訂使用者代理","settingsUpdateNotificationsToggle":"自動檢查更新","settingsSearchEngineHeading":"搜索引擎","settingsDefaultSearchEngine":"選擇預設的搜索引擎：","settingsDDGExplanation":"將 DuckDuckGo 設為預設的搜索引擎可以直接在網址欄查看搜尋結果","customSearchEngineDescription":"將搜尋字串以 %s 取代","settingsKeyboardShortcutsHeading":"快速鍵","settingsKeyboardShortcutsHelp":"以逗號分割多個快速鍵","settingsProxyHeading":"Proxy","settingsNoProxy":"無","settingsManualProxy":"手動設定","settingsAutomaticProxy":"自動設定","settingsProxyRules":"位址：","settingsProxyBypassRules":"不要在以下位址使用 Proxy，以逗號隔開：","settingsProxyConfigurationURL":"Proxy 設置位址：","appMenuFile":"檔案","appMenuNewTab":"新分頁","appMenuDuplicateTab":"複製分頁","appMenuNewPrivateTab":"新無痕分頁","appMenuNewTask":"新工作","appMenuSavePageAs":"另存網頁","appMenuPrint":"列印","appMenuEdit":"編輯","appMenuUndo":"復原","appMenuRedo":"重做","appMenuCut":"剪下","appMenuCopy":"複製","appMenuPaste":"貼上","appMenuSelectAll":"全選","appMenuFind":"尋找","appMenuView":"檢視","appMenuZoomIn":"放大","appMenuZoomOut":"縮小","appMenuActualSize":"原始大小","appMenuFullScreen":"全螢幕","appMenuFocusMode":"專心模式","appMenuBookmarks":"書籤","appMenuHistory":"歷史","appMenuDeveloper":"偵錯","appMenuReloadBrowser":"重新載入瀏覽器","appMenuInspectBrowser":"切換開發人員工具","appMenuInspectPage":"檢查網頁元素","appMenuWindow":"視窗","appMenuMinimize":"最小化","appMenuClose":"關閉","appMenuAlwaysOnTop":"顯示在最上方","appMenuHelp":"說明","appMenuKeyboardShortcuts":"快速鍵","appMenuReportBug":"提交 Bug","appMenuTakeTour":"導覽","appMenuViewGithub":"查看 GitHub","appMenuAbout":"關於 %n","appMenuPreferences":"設定","appMenuServices":"服務","appMenuHide":"隱藏 %n","appMenuHideOthers":"隱藏其他","appMenuShowAll":"顯示全部","appMenuQuit":"結束 %n","appMenuBringToFront":"顯示所有視窗","PDFPageCounter":{"unsafeHTML":"<input type='text'/> / <span id='total'></span> 頁"},"buttonReaderSettings":"閱讀器設定","buttonReaderLightTheme":"亮色","buttonReaderSepiaTheme":"棕褐色","buttonReaderDarkTheme":"深色","openReaderView":"永遠在閱讀器中開啟","autoRedirectBannerReader":"自動在此網站的文章開啟閱讀器？","buttonReaderRedirectYes":"是","buttonReaderRedirectNo":"否","articleReaderView":"原始文章","downloadCancel":"取消","downloadStateCompleted":"已完成","downloadStateFailed":"失敗","updateNotificationTitle":"已有新版本","settingsPasswordAutoFillHeadline":"自動填入密碼","settingsSelectPasswordManager":"選擇支援的密碼管理器：","keychainViewPasswords":null,"passwordManagerSetupHeading":"設定 %p","passwordManagerSetupStep1":{"unsafeHTML":"請先<a id='password-manager-setup-link'></a> 並解壓縮。"},"passwordManagerInstallerSetup":{"unsafeHTML":"下載 <a id='password-manager-setup-link-installer'></a> 並將檔案拖曳至下方："},"passwordManagerSetupLink":"下載 %p CLI Tool","passwordManagerSetupLinkInstaller":"the %p CLI Installer","passwordManagerSetupStep2":"然後將檔案拖曳至下方：","passwordManagerSetupDragBox":"將檔案拖至此處","passwordManagerSetupInstalling":"正在安裝...","passwordManagerSetupSignIn":"登入你的密碼管理器並開始使用自動填入。您的資訊不會被存入 Min。","disableAutofill":"取消","passwordManagerSetupUnlockError":"無法登入密碼儲存庫。","passwordManagerSetupRetry":"請確認您拖入正確的檔案並輸入正確的密碼。您可以將檔案拖入以重試。","passwordManagerUnlock":"輸入你的 %p 主密碼以解鎖密碼庫：","passwordCaptureSavePassword":null,"passwordCaptureSave":null,"passwordCaptureDontSave":null,"savedPasswordsHeading":null,"savedPasswordsEmpty":null,"deletePassword":null,"loginPromptTitle":"登入 %h (%r)","dialogConfirmButton":"確認","dialogSkipButton":"取消","username":"使用者名稱","email":"Email","password":"密碼","secretKey":"Secret key"}}};
/* provides helper functions for using localized strings */

/*
translations are compiled into here by running "npm run build" in this format

var languages = {
    en-US: {name: "English (United States), identifier: "en-US", translations: {...}}
}

*/

function getCurrentLanguage () {
  // TODO add a setting to change the language to something other than the default

  var language = 'en-US' // default

  if (typeof navigator !== 'undefined') { // renderer process
    language = navigator.language
  } else if (typeof app !== 'undefined') { // main process
    language = app.getLocale()
  } else {
    // nothing worked, fall back to default
  }

  return language
}

var userLanguage = null

function l (stringId) {
  if (!userLanguage) {
    userLanguage = getCurrentLanguage()
  }

  var userBaseLanguage = userLanguage.split('-')[0] // examples: es-419 -> es, nl-BE -> nl

  // get the translated string for the given ID

  // try an exact match for the user language
  if (languages[userLanguage] && languages[userLanguage].translations[stringId] && languages[userLanguage].translations[stringId].unsafeHTML !== null) {
    return languages[userLanguage].translations[stringId]
    // try a match for the base language, if the language code is for a particular region
  } else if (languages[userBaseLanguage] && languages[userBaseLanguage].translations[stringId] && languages[userBaseLanguage].translations[stringId].unsafeHTML !== null) {
    return languages[userBaseLanguage].translations[stringId]
  } else {
    // fallback to en-US
    return languages['en-US'].translations[stringId]
  }
}

/* for static HTML pages
insert a localized string into all elements with a [data-string] attribute
set the correct attributes for all elements with a [data-label] attribute
set the value attribute for all elements with a [data-value] attribute
 */

if (typeof document !== 'undefined') {
  document.querySelectorAll('[data-string]').forEach(function (el) {
    var str = l(el.getAttribute('data-string'))
    if (typeof str === 'string') {
      el.textContent = str
    } else if (str && str.unsafeHTML && el.hasAttribute('data-allowHTML')) {
      el.innerHTML = str.unsafeHTML
    }
  })
  document.querySelectorAll('[data-label]').forEach(function (el) {
    var str = l(el.getAttribute('data-label'))
    if (typeof str === 'string') {
      el.setAttribute('title', str)
      el.setAttribute('aria-label', str)
    } else {
      throw new Error('invalid data-label value: ' + str)
    }
  })
  document.querySelectorAll('[data-value]').forEach(function (el) {
    var str = l(el.getAttribute('data-value'))
    if (typeof str === 'string') {
      el.setAttribute('value', str)
    } else {
      throw new Error('invalid data-value value: ' + str)
    }
  })

}
if (typeof window !== 'undefined') {
  window.l = l
  window.userLanguage = userLanguage
  window.getCurrentLanguage = getCurrentLanguage
}
;
const TaskList  = require("tabState/task.js")

function initializeTabState () {
  window.tasks = new TaskList()
  window.tabs = undefined
}

initializeTabState()
;
window.globalArgs = {}

process.argv.forEach(function (arg) {
  if (arg.startsWith('--')) {
    var key = arg.split('=')[0].replace('--', '')
    var value = arg.split('=')[1]
    globalArgs[key] = value
  }
})

window.electron = window.require('electron')
window.fs = window.require('fs')
window.EventEmitter = window.require('events')
window.ipc = electron.ipcRenderer
window.remote = electron.remote
window.Dexie = require('dexie')

if (navigator.platform === 'MacIntel') {
  document.body.classList.add('mac')
  window.platformType = 'mac'
} else if (navigator.platform === 'Win32') {
  document.body.classList.add('windows')
  window.platformType = 'windows'
} else {
  document.body.classList.add('linux')
  window.platformType = 'linux'
}

if (navigator.maxTouchPoints > 0) {
  document.body.classList.add('touch')
}

/* add classes so that the window state can be used in CSS */
ipc.on('enter-full-screen', function () {
  document.body.classList.add('fullscreen')
})

ipc.on('leave-full-screen', function () {
  document.body.classList.remove('fullscreen')
})

ipc.on('maximize', function () {
  document.body.classList.add('maximized')
})

ipc.on('unmaximize', function () {
  document.body.classList.remove('maximized')
})

// https://remysharp.com/2010/07/21/throttling-function-calls

window.throttle = function (fn, threshhold, scope) {
  threshhold || (threshhold = 250)
  var last,
    deferTimer
  return function () {
    var context = scope || this

    var now = +new Date()
    var args = arguments
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

// https://remysharp.com/2010/07/21/throttling-function-calls

window.debounce = function (fn, delay) {
  var timer = null
  return function () {
    var context = this
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

window.empty = function (node) {
  var n
  while (n = node.firstElementChild) {
    node.removeChild(n)
  }
}

/* prevent a click event from firing after dragging the window */

window.addEventListener('load', function () {
  var isMouseDown = false
  var isDragging = false
  var distance = 0

  document.body.addEventListener('mousedown', function () {
    isMouseDown = true
    isDragging = false
    distance = 0
  })

  document.body.addEventListener('mouseup', function () {
    isMouseDown = false
  })

  var dragHandles = document.getElementsByClassName('windowDragHandle')

  for (var i = 0; i < dragHandles.length; i++) {
    dragHandles[i].addEventListener('mousemove', function (e) {
      if (isMouseDown) {
        isDragging = true
        distance += Math.abs(e.movementX) + Math.abs(e.movementY)
      }
    })
  }

  document.body.addEventListener('click', function (e) {
    if (isDragging && distance >= 10.0) {
      e.stopImmediatePropagation()
      isDragging = false
    }
  }, true)
})

require('navbar/tabActivity.js').initialize()
require('navbar/tabColor.js').initialize()
require('navbar/goBackButton.js').initialize()
require('downloadManager.js').initialize()
require('webviewMenu.js').initialize()
require('contextMenu.js').initialize()
require('menuRenderer.js').initialize()
require('defaultKeybindings.js').initialize()
require('pdfViewer.js').initialize()
require('autofillSetup.js').initialize()
require('passwordManager/passwordManager.js').initialize()
require('passwordManager/passwordCapture.js').initialize()
require('passwordManager/passwordViewer.js').initialize()
require('util/theme.js').initialize()
require('userscripts.js').initialize()

// default searchbar plugins

require('searchbar/placesPlugin.js').initialize()
require('searchbar/instantAnswerPlugin.js').initialize()
require('searchbar/openTabsPlugin.js').initialize()
require('searchbar/bangsPlugin.js').initialize()
require('searchbar/searchSuggestionsPlugin.js').initialize()
require('searchbar/placeSuggestionsPlugin.js').initialize()
require('searchbar/updateNotifications.js').initialize()
require('searchbar/restoreTaskPlugin.js').initialize()
require('searchbar/bookmarkManager.js').initialize()
require('searchbar/developmentModeNotification.js').initialize()
;
var settings = require('util/settings/settings.js')

if (settings.get('useSeparateTitlebar') === true) {
  document.body.classList.add('separate-titlebar')
}

var windowIsMaximized = false
var windowIsFullscreen = false

var captionMinimize =
  document.querySelector('.windows-caption-buttons .caption-minimise, body.linux .titlebar-linux .caption-minimise')

var captionMaximize =
  document.querySelector('.windows-caption-buttons .caption-maximize, body.linux .titlebar-linux .caption-maximize')

var captionRestore =
  document.querySelector('.windows-caption-buttons .caption-restore, body.linux .titlebar-linux .caption-restore')

var captionClose =
  document.querySelector('.windows-caption-buttons .caption-close, body.linux .titlebar-linux .caption-close')

var linuxClose = document.querySelector('#linux-control-buttons #close-button')
var linuxMinimize = document.querySelector('#linux-control-buttons #minimize-button')
var linuxMaximize = document.querySelector('#linux-control-buttons #maximize-button')

function updateCaptionButtons () {
  if (window.platformType === 'windows') {
    if (windowIsMaximized || windowIsFullscreen) {
      captionMaximize.hidden = true
      captionRestore.hidden = false
    } else {
      captionMaximize.hidden = false
      captionRestore.hidden = true
    }
  }
}

if (window.platformType === 'windows') {
  updateCaptionButtons()

  captionMinimize.addEventListener('click', function (e) {
    remote.getCurrentWindow().minimize()
  })

  captionMaximize.addEventListener('click', function (e) {
    remote.getCurrentWindow().maximize()
  })

  captionRestore.addEventListener('click', function (e) {
    if (windowIsFullscreen) {
      remote.getCurrentWindow().setFullScreen(false)
    } else {
      remote.getCurrentWindow().unmaximize()
    }
  })

  captionClose.addEventListener('click', function (e) {
    remote.getCurrentWindow().close()
  })
}

ipc.on('maximize', function (e) {
  windowIsMaximized = true
  updateCaptionButtons()
})
ipc.on('unmaximize', function (e) {
  windowIsMaximized = false
  updateCaptionButtons()
})
ipc.on('enter-full-screen', function (e) {
  windowIsFullscreen = true
  updateCaptionButtons()
})
ipc.on('leave-full-screen', function (e) {
  windowIsFullscreen = false
  updateCaptionButtons()
})

if (window.platformType === 'linux') {
  linuxClose.addEventListener('click', function (e) {
    remote.getCurrentWindow().close()
  })
  linuxMaximize.addEventListener('click', function (e) {
    if (windowIsFullscreen) {
      remote.getCurrentWindow().setFullScreen(false)
    } else if (windowIsMaximized) {
      remote.getCurrentWindow().unmaximize()
    } else {
      remote.getCurrentWindow().maximize()
    }
  })
  linuxMinimize.addEventListener('click', function (e) {
    remote.getCurrentWindow().minimize()
  })
}
;
var bangsPlugin = require('searchbar/bangsPlugin.js')

/* list of the available custom !bangs */
var webviews = require('webviews.js')
var browserUI = require('browserUI.js')
var focusMode = require('focusMode.js')
var searchbar = require('searchbar/searchbar.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var places = require('places/places.js')
var urlParser = require('util/urlParser.js')
var { db } = require('util/database.js')
var formatRelativeDate = require('util/relativeDate.js')
var contentBlockingToggle = require('navbar/contentBlockingToggle.js')

bangsPlugin.registerCustomBang({
  phrase: '!settings',
  snippet: l('viewSettings'),
  isAction: true,
  fn: function (text) {
    webviews.update(tabs.getSelected(), 'file://' + __dirname + '/pages/settings/index.html')
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!back',
  snippet: l('goBack'),
  isAction: true,
  fn: function (text) {
    webviews.callAsync(tabs.getSelected(), 'goBack')
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!forward',
  snippet: l('goForward'),
  isAction: true,
  fn: function (text) {
    webviews.callAsync(tabs.getSelected(), 'goForward')
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!screenshot',
  snippet: l('takeScreenshot'),
  isAction: true,
  fn: function (text) {
    setTimeout(function () { // wait so that the view placeholder is hidden
      ipc.send('saveViewCapture', { id: tabs.getSelected() })
    }, 400)
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!clearhistory',
  snippet: l('clearHistory'),
  isAction: true,
  fn: function (text) {
    if (confirm(l('clearHistoryConfirmation'))) {
      places.deleteAllHistory()
      /* It's important not to delete data from file:// here, since that would also remove internal browser data (such as bookmarks) */
      remote.session.defaultSession.clearStorageData({ origin: 'http://' })
        .then(function () {
          remote.session.defaultSession.clearStorageData({ origin: 'https://' })
        })
    }
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!enableblocking',
  snippet: l('enableBlocking'),
  isAction: true,
  fn: function (text) {
    contentBlockingToggle.enableBlocking(tabs.get(tabs.getSelected()).url)
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!disableblocking',
  snippet: l('disableBlocking'),
  isAction: true,
  fn: function (text) {
    contentBlockingToggle.disableBlocking(tabs.get(tabs.getSelected()).url)
  }
})

// returns a task with the same name or index ("1" returns the first task, etc.)
function getTaskByNameOrNumber (text) {
  const textAsNumber = parseInt(text)

  return tasks.find((task, index) => (task.name && task.name.toLowerCase() === text) || index + 1 === textAsNumber
  )
}

bangsPlugin.registerCustomBang({
  phrase: '!task',
  snippet: l('switchToTask'),
  isAction: false,
  fn: function (text) {
    /* disabled in focus mode */
    if (focusMode.enabled()) {
      focusMode.warn()
      return
    }

    text = text.toLowerCase()

    // no task was specified, show all of the tasks
    if (!text) {
      taskOverlay.show()
      return
    }

    var task = getTaskByNameOrNumber(text)

    if (task) {
      browserUI.switchToTask(task.id)
    }
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!newtask',
  snippet: l('createTask'),
  isAction: true,
  fn: function (text) {
    /* disabled in focus mode */
    if (focusMode.enabled()) {
      focusMode.warn()
      return
    }

    taskOverlay.show()

    setTimeout(function () {
      browserUI.addTask()
      if (text) {
        tasks.getSelected().name = text
      }
    }, 600)
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!movetotask',
  snippet: l('moveToTask'),
  isAction: false,
  fn: function (text) {
    /* disabled in focus mode */
    if (focusMode.enabled()) {
      focusMode.warn()
      return
    }

    // remove the tab from the current task

    var currentTab = tabs.get(tabs.getSelected())
    tabs.destroy(currentTab.id)

    // make sure the task has at least one tab in it
    if (tabs.count() === 0) {
      tabs.add()
    }

    var newTask = getTaskByNameOrNumber(text)

    if (newTask) {
      newTask.tabs.add(currentTab, { atEnd: true })
    } else {
      // create a new task with the given name
      var newTask = tasks.get(tasks.add(undefined, tasks.getIndex(tasks.getSelected().id) + 1))
      newTask.name = text

      newTask.tabs.add(currentTab)
    }

    browserUI.switchToTask(newTask.id)
    browserUI.switchToTab(currentTab.id)
    taskOverlay.show()

    setTimeout(function () {
      taskOverlay.hide()
    }, 600)
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!closetask',
  snippet: l('closeTask'),
  isAction: false,
  fn: function (text) {
    var currentTask = tasks.getSelected()
    var taskToClose

    if (text) {
      taskToClose = getTaskByNameOrNumber(text)
    } else {
      taskToClose = tasks.getSelected()
    }

    if (taskToClose) {
      browserUI.closeTask(taskToClose.id)
      if (currentTask.id === taskToClose.id) {
        taskOverlay.show()
        setTimeout(function () {
          taskOverlay.hide()
        }, 600)
      }
    }
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!nametask',
  snippet: l('nameTask'),
  isAction: false,
  fn: function (text) {
    tasks.getSelected().name = text
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!history',
  snippet: l('searchHistory'),
  isAction: false,
  showSuggestions: function (text, input, event) {
    places.searchPlaces(text, function (results) {
      searchbarPlugins.reset('bangs')

      var lastRelativeDate = '' // used to generate headings

      results.sort(function (a, b) {
        // order by last visit
        return b.lastVisit - a.lastVisit
      }).slice(0, 250).forEach(function (result, index) {
        var thisRelativeDate = formatRelativeDate(result.lastVisit)
        if (thisRelativeDate !== lastRelativeDate) {
          searchbarPlugins.addHeading('bangs', { text: thisRelativeDate })
          lastRelativeDate = thisRelativeDate
        }
        searchbarPlugins.addResult('bangs', {
          title: result.title,
          secondaryText: urlParser.getSourceURL(result.url),
          fakeFocus: index === 0 && text,
          url: result.url,
          delete: function () {
            places.deleteHistory(result.url)
          },
          showDeleteButton: true
        })
      })
    }, { limit: Infinity })
  },
  fn: function (text) {
    if (!text) {
      return
    }
    places.searchPlaces(text, function (results) {
      if (results.length !== 0) {
        results = results.sort(function (a, b) {
          return b.lastVisit - a.lastVisit
        })
        searchbar.openURL(results[0].url, null)
      }
    }, { limit: Infinity })
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!importbookmarks',
  snippet: l('importBookmarks'),
  isAction: true,
  fn: function () {
    var filePath = electron.remote.dialog.showOpenDialogSync({
      filters: [
        { name: 'HTML files', extensions: ['htm', 'html'] }
      ]
    })
    if (!filePath) {
      return
    }
    fs.readFile(filePath[0], 'utf-8', function (err, data) {
      if (err || !data) {
        console.warn(err)
        return
      }
      var tree = new DOMParser().parseFromString(data, 'text/html')
      var bookmarks = Array.from(tree.getElementsByTagName('a'))
      bookmarks.forEach(function (bookmark) {
        var url = bookmark.getAttribute('href')
        if (!url || (!url.startsWith('http:') && !url.startsWith('https:') && !url.startsWith('file:'))) {
          return
        }

        var data = {
          title: bookmark.textContent,
          isBookmarked: true
        }
        try {
          data.lastVisit = parseInt(bookmark.getAttribute('add_date')) * 1000
        } catch (e) {}
        var parent = bookmark.parentElement
        while (parent != null) {
          if (parent.children[0] && parent.children[0].tagName === 'H3') {
            data.tags = [parent.children[0].textContent.replace(/\s/g, '-')]
            break
          }
          parent = parent.parentElement
        }
        places.updateItem(url, data)
      })
    })
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!exportbookmarks',
  snippet: l('exportBookmarks'),
  isAction: true,
  fn: function () {
    // build the tree structure
    var root = document.createElement('body')
    var heading = document.createElement('h1')
    heading.textContent = 'Bookmarks'
    root.appendChild(heading)
    var innerRoot = document.createElement('dl')
    root.appendChild(innerRoot)

    var folderRoot = document.createElement('dt')
    innerRoot.appendChild(folderRoot)
    var folderHeading = document.createElement('h3')
    folderHeading.textContent = 'Min Bookmarks'
    folderRoot.appendChild(folderHeading)
    var folderBookmarksList = document.createElement('dl')
    folderRoot.appendChild(folderBookmarksList)

    db.places.each(function (item) {
      if (item.isBookmarked) {
        var itemRoot = document.createElement('dt')
        var a = document.createElement('a')
        itemRoot.appendChild(a)
        folderBookmarksList.appendChild(itemRoot)

        a.href = urlParser.getSourceURL(item.url)
        a.setAttribute('add_date', Math.round(item.lastVisit / 1000))
        a.textContent = item.title
        // Chrome will only parse the file if it contains newlines after each bookmark
        var textSpan = document.createTextNode('\n')
        folderBookmarksList.appendChild(textSpan)
      }
    }).then(function () {
      // save the result
      var savePath = electron.remote.dialog.showSaveDialogSync({ defaultPath: 'bookmarks.html' })
      window.require('fs').writeFileSync(savePath, root.outerHTML)
    })
  }
})

bangsPlugin.registerCustomBang({
  phrase: '!addbookmark',
  snippet: l('addBookmark'),
  fn: function (text) {
    var url = tabs.get(tabs.getSelected()).url
    if (url) {
      places.updateItem(url, {
        isBookmarked: true,
        tags: (text ? text.split(/\s/g).map(t => t.replace('#', '').trim()) : [])
      })
    }
  }
})
;
var webviews = require('webviews.js')
var keybindings = require('keybindings.js')
var browserUI = require('browserUI.js')
var tabBar = require('navbar/tabBar.js')
var tabEditor = require('navbar/tabEditor.js')
var focusMode = require('focusMode.js')
var modalMode = require('modalMode.js')
var keyboardNavigationHelper = require('util/keyboardNavigationHelper.js')

const createTaskContainer = require('taskOverlay/taskOverlayBuilder.js')

var taskContainer = document.getElementById('task-area')
var taskSwitcherButton = document.getElementById('switch-task-button')
var addTaskButton = document.getElementById('add-task')
var addTaskLabel = addTaskButton.querySelector('span')
var taskOverlayNavbar = document.getElementById('task-overlay-navbar')

taskSwitcherButton.title = l('viewTasks')
addTaskLabel.textContent = l('newTask')

taskSwitcherButton.addEventListener('click', function () {
  taskOverlay.toggle()
})

addTaskButton.addEventListener('click', function (e) {
  browserUI.switchToTask(tasks.add())
  taskOverlay.hide()
})

taskOverlayNavbar.addEventListener('click', function () {
  taskOverlay.hide()
})

var dragula = require('dragula')

window.taskOverlay = {
  overlayElement: document.getElementById('task-overlay'),
  isShown: false,
  tabDragula: dragula({
    direction: 'vertical',
    mirrorContainer: document.getElementById('task-overlay'),
    moves: function (el, source, handle, sibling) {
      // trying to click buttons can cause them to be dragged by accident, so disable dragging on them
      var n = handle
      while (n) {
        if (n.tagName === 'BUTTON') {
          return false
        }
        n = n.parentElement
      }
      return true
    }
  }),
  taskDragula: dragula({
    direction: 'vertical',
    mirrorContainer: document.getElementById('task-overlay'),
    containers: [taskContainer],
    moves: function (el, source, handle, sibling) {
      // ignore drag events that come from a tab element, since they will be handled by the other dragula instance
      // also ignore inputs, since using them as drag handles breaks text selection
      var n = handle
      while (n) {
        if (n.classList.contains('task-tab-item') || n.tagName === 'INPUT') {
          return false
        }
        n = n.parentElement
      }
      return true
    }
  }),
  show: function () {
    /* disabled in focus mode */
    if (focusMode.enabled()) {
      focusMode.warn()
      return
    }

    webviews.requestPlaceholder('taskOverlay')

    document.body.classList.add('task-overlay-is-shown')

    tabEditor.hide()

    this.isShown = true
    taskSwitcherButton.classList.add('active')

    this.tabDragula.containers = [addTaskButton]
    empty(taskContainer)

    // show the task elements
    tasks.forEach(function (task, index) {
      const el = createTaskContainer(task, index)

      taskContainer.appendChild(el)
      taskOverlay.tabDragula.containers.push(el.getElementsByClassName('task-tabs-container')[0])
    })

    // scroll to the selected element and focus it

    var currentTabElement = document.querySelector('.task-tab-item[data-tab="{id}"]'.replace('{id}', tasks.getSelected().tabs.getSelected()))

    // un-hide the overlay
    this.overlayElement.hidden = false

    if (currentTabElement) {
      currentTabElement.classList.add('fakefocus')
      currentTabElement.focus()
    }
  },

  hide: function () {
    if (this.isShown) {
      this.isShown = false
      this.overlayElement.hidden = true

      // wait until the animation is complete to remove the tab elements
      setTimeout(function () {
        if (!taskOverlay.isShown) {
          empty(taskContainer)
          webviews.hidePlaceholder('taskOverlay')
        }
      }, 250)

      this.tabDragula.containers = []

      document.body.classList.remove('task-overlay-is-shown')

      // close any tasks that are pending deletion

      var pendingDeleteTasks = document.body.querySelectorAll('.task-container.deleting')
      for (var i = 0; i < pendingDeleteTasks.length; i++) {
        browserUI.closeTask(pendingDeleteTasks[i].getAttribute('data-task'))
      }

      // if the current tab has been deleted, switch to the most recent one

      if (!tabs.getSelected()) {
        var mostRecentTab = tabs.get().sort(function (a, b) {
          return b.lastActivity - a.lastActivity
        })[0]

        if (mostRecentTab) {
          browserUI.switchToTab(mostRecentTab.id)
        }
      }

      taskSwitcherButton.classList.remove('active')
    }
  },

  toggle: function () {
    if (this.isShown) {
      this.hide()
    } else {
      this.show()
    }
  }
}

keyboardNavigationHelper.addToGroup('taskOverlay', taskOverlay.overlayElement)

// swipe down on the tabstrip to show the task overlay
document.getElementById('navbar').addEventListener('wheel', function (e) {
  if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
    // https://github.com/minbrowser/min/issues/698
    return
  }
  if (e.deltaY < -30 && e.deltaX < 10) {
    taskOverlay.show()
    e.stopImmediatePropagation()
  }
})

keybindings.defineShortcut('toggleTasks', function () {
  if (taskOverlay.isShown) {
    taskOverlay.hide()
  } else {
    taskOverlay.show()
  }
})

keybindings.defineShortcut({keys: 'esc'}, function (e) {
  taskOverlay.hide()
})

keybindings.defineShortcut('enterEditMode', function (e) {
  taskOverlay.hide()
})

function addTaskFromMenu () {
  /* new tasks can't be created in modal mode */
  if (modalMode.enabled()) {
    return
  }

  /* new tasks can't be created in focus mode or modal mode */
  if (focusMode.enabled()) {
    focusMode.warn()
    return
  }

  browserUI.addTask()
  taskOverlay.show()
  setTimeout(function () {
    taskOverlay.hide()
    tabEditor.show(tabs.getSelected())
  }, 600)
}

keybindings.defineShortcut('addTask', addTaskFromMenu)
ipc.on('addTask', addTaskFromMenu) // for menu item

function getTaskContainer (id) {
  return document.querySelector('.task-container[data-task="{id}"]'.replace('{id}', id))
}

/* rearrange tabs when they are dropped */

taskOverlay.tabDragula.on('drag', function () {
  taskOverlay.overlayElement.classList.add('is-dragging-tab')
})

taskOverlay.tabDragula.on('dragend', function () {
  taskOverlay.overlayElement.classList.remove('is-dragging-tab')
})

taskOverlay.tabDragula.on('over', function (el, container, source) {
  if (container === addTaskButton) {
    addTaskButton.classList.add('drag-target')
  }
})

taskOverlay.tabDragula.on('out', function (el, container, source) {
  if (container === addTaskButton) {
    addTaskButton.classList.remove('drag-target')
  }
})

taskOverlay.tabDragula.on('drop', function (el, target, source, sibling) { // see https://github.com/bevacqua/dragula#drakeon-events
  var tabId = el.getAttribute('data-tab')

  var previousTask = tasks.get(source.getAttribute('data-task'))

  // remove tab from old task
  var oldTab = previousTask.tabs.splice(previousTask.tabs.getIndex(tabId), 1)[0]

  // if the old task has no tabs left in it, destroy it

  if (previousTask.tabs.count() === 0) {
    browserUI.closeTask(previousTask.id)
    getTaskContainer(previousTask.id).remove()
  }

  // if dropping on "add task" button, create a new task
  if (target === addTaskButton) {
    var newTask = tasks.get(tasks.add())
    // remove from button, and re-create in overlay
    el.remove()
  } else {
    // otherwise, find a source task to add this tab to
    var newTask = tasks.get(target.getAttribute('data-task'))
  }

  if (sibling) {
    var adjacentTadId = sibling.getAttribute('data-tab')
  }

  // find where in the new task the tab should be inserted
  if (adjacentTadId) {
    var newIdx = newTask.tabs.getIndex(adjacentTadId)
  } else {
    // tab was inserted at end
    var newIdx = newTask.tabs.count()
  }

  // insert the tab at the correct spot
  newTask.tabs.splice(newIdx, 0, oldTab)

  tabBar.updateAll()
  taskOverlay.show()
})

/* rearrange tasks when they are dropped */

taskOverlay.taskDragula.on('drop', function (el, target, source, sibling) {
  var droppedTaskId = el.getAttribute('data-task')
  if (sibling) {
    var adjacentTaskId = sibling.getAttribute('data-task')
  }

  // remove the task from the tasks list
  var droppedTask = tasks.splice(tasks.getIndex(droppedTaskId), 1)[0]

  // find where it should be inserted
  if (adjacentTaskId) {
    var newIdx = tasks.getIndex(adjacentTaskId)
  } else {
    var newIdx = tasks.getLength()
  }

  // reinsert the task
  tasks.splice(newIdx, 0, droppedTask)
})

/* auto-scroll the container when the item is dragged to the edge of the screen */

var draggingScrollInterval = null

function onMouseMoveWhileDragging (e) {
  clearInterval(draggingScrollInterval)
  if (e.pageY < 100) {
    draggingScrollInterval = setInterval(function () {
      taskContainer.scrollBy(0, -5)
    }, 16)
  } else if (e.pageY > (window.innerHeight - 125)) {
    draggingScrollInterval = setInterval(function () {
      taskContainer.scrollBy(0, 5)
    }, 16)
  }
}

function startMouseDragRecording () {
  window.addEventListener('mousemove', onMouseMoveWhileDragging)
}

function endMouseDragRecording () {
  window.removeEventListener('mousemove', onMouseMoveWhileDragging)
  clearInterval(draggingScrollInterval)
}

taskOverlay.tabDragula.on('drag', function () {
  startMouseDragRecording()
})

taskOverlay.tabDragula.on('dragend', function () {
  endMouseDragRecording()
})

taskOverlay.taskDragula.on('drag', function () {
  startMouseDragRecording()
})

taskOverlay.taskDragula.on('dragend', function () {
  endMouseDragRecording()
})
;
var browserUI = require('browserUI.js')

var addTabButton = document.getElementById('add-tab-button')

addTabButton.addEventListener('click', function (e) {
  browserUI.addTab()
})
;
var menuButton = document.getElementById('menu-button')

menuButton.addEventListener('click', function (e) {
  showSecondaryMenu()
})

window.showSecondaryMenu = function () {
  var navbar = document.getElementById('navbar')
  var rect = menuButton.getBoundingClientRect()
  var navbarRect = navbar.getBoundingClientRect()

  ipc.send('showSecondaryMenu', {
    x: Math.round(rect.left),
    y: Math.round(navbarRect.bottom)
  })
}

keybindings.defineShortcut('showMenu', function () {
  if (!settings.get('useSeparateTitlebar') && (window.platformType === 'windows' || window.platformType === 'linux'))
    showSecondaryMenu()
})
;
var browserUI = require('browserUI.js')
var webviews = require('webviews.js')
var tabEditor = require('navbar/tabEditor.js')

window.sessionRestore = {
  savePath: window.globalArgs['user-data-path'] + (platformType === 'windows' ? '\\sessionRestore.json' : '/sessionRestore.json'),
  previousState: null,
  save: function (forceSave, sync) {
    var stateString = JSON.stringify(tasks.getStringifyableState())
    var data = {
      version: 2,
      state: JSON.parse(stateString),
      saveTime: Date.now()
    }

    // save all tabs that aren't private

    for (var i = 0; i < data.state.tasks.length; i++) {
      data.state.tasks[i].tabs = data.state.tasks[i].tabs.filter(function (tab) {
        return !tab.private
      })
    }

    if (forceSave === true || stateString !== sessionRestore.previousState) {
      if (sync === true) {
        fs.writeFileSync(sessionRestore.savePath, JSON.stringify(data))
      } else {
        fs.writeFile(sessionRestore.savePath, JSON.stringify(data), function (err) {
          if (err) {
            console.warn(err)
          }
        })
      }
      sessionRestore.previousState = stateString
    }
  },
  restore: function () {
    var savedStringData
    try {
      savedStringData = fs.readFileSync(sessionRestore.savePath, 'utf-8')
    } catch (e) {
      console.warn('failed to read session restore data', e)
    }
    if (!savedStringData) {
      // migrate from previous version
      savedStringData = localStorage.getItem('sessionrestoredata')
    }

    /* the survey should only be shown after an upgrade from an earlier version */
    var shouldShowSurvey = false
    if (savedStringData && !localStorage.getItem('1.15survey')) {
      shouldShowSurvey = true
    }
    localStorage.setItem('1.15survey', 'true')

    try {
      // first run, show the tour
      if (!savedStringData) {
        tasks.setSelected(tasks.add()) // create a new task

        var newTab = tasks.getSelected().tabs.add({
          url: 'https://minbrowser.github.io/min/tour'
        })
        browserUI.addTab(newTab, {
          enterEditMode: false
        })
        return
      }

      var data = JSON.parse(savedStringData)

      // the data isn't restorable
      if ((data.version && data.version !== 2) || (data.state && data.state.tasks && data.state.tasks.length === 0)) {
        tasks.setSelected(tasks.add())

        browserUI.addTab(tasks.getSelected().tabs.add())
        return
      }

      // add the saved tasks

      data.state.tasks.forEach(function (task) {
        // reset tab hasAudio
        task.tabs.forEach(function (tab) {
          tab.hasAudio = false
        })
        // restore the task item
        tasks.add(task)
      })
      tasks.setSelected(data.state.selectedTask)

      // switch to the previously selected tasks

      if (tasks.getSelected().tabs.isEmpty() || (!data.saveTime || Date.now() - data.saveTime < 30000)) {
        browserUI.switchToTask(data.state.selectedTask)
        if (tasks.getSelected().tabs.isEmpty()) {
          tabEditor.show(tasks.getSelected().tabs.getSelected())
        }
      } else {
        window.createdNewTaskOnStartup = true
        // try to reuse a previous empty task
        var lastTask = tasks.byIndex(tasks.getLength() - 1)
        if (lastTask && lastTask.tabs.isEmpty() && !lastTask.name) {
          browserUI.switchToTask(lastTask.id)
          tabEditor.show(lastTask.tabs.getSelected())
        } else {
          browserUI.addTask()
        }
      }

      // if this isn't the first run, and the survey popup hasn't been shown yet, show it

      if (shouldShowSurvey) {
        fetch('https://minbrowser.org/survey/survey15.json').then(function (response) {
          return response.json()
        }).then(function (data) {
          setTimeout(function () {
            if (data.available && data.url) {
              if (tasks.getSelected().tabs.isEmpty()) {
                webviews.update(tasks.getSelected().tabs.getSelected(), data.url)
                tabEditor.hide()
              } else {
                var surveyTab = tasks.getSelected().tabs.add({
                  url: data.url
                })
                browserUI.addTab(surveyTab, {
                  enterEditMode: false
                })
              }
            }
          }, 200)
        })
      }
    } catch (e) {
      // an error occured while restoring the session data

      console.error('restoring session failed: ', e)

      var backupSavePath = window.require('path').join(window.globalArgs['user-data-path'], 'sessionRestoreBackup-' + Date.now() + '.json')

      fs.writeFileSync(backupSavePath, savedStringData)

      // destroy any tabs that were created during the restore attempt
      initializeTabState()

      // create a new tab with an explanation of what happened
      var newTask = tasks.add()
      var newSessionErrorTab = tasks.get(newTask).tabs.add({
        url: 'file://' + __dirname + '/pages/sessionRestoreError/index.html?backupLoc=' + encodeURIComponent(backupSavePath)
      })

      browserUI.switchToTask(newTask)
      browserUI.switchToTab(newSessionErrorTab)
    }
  }
}

// TODO make this a preference

sessionRestore.restore()

setInterval(sessionRestore.save, 30000)

window.onbeforeunload = function (e) {
  sessionRestore.save(true, true)
}
;

},{"autofillSetup.js":3,"browserUI.js":4,"contextMenu.js":5,"defaultKeybindings.js":6,"dexie":75,"downloadManager.js":7,"dragula":77,"focusMode.js":9,"keybindings.js":10,"menuRenderer.js":11,"modalMode.js":12,"navbar/contentBlockingToggle.js":14,"navbar/goBackButton.js":15,"navbar/tabActivity.js":18,"navbar/tabBar.js":19,"navbar/tabColor.js":20,"navbar/tabEditor.js":21,"passwordManager/passwordCapture.js":26,"passwordManager/passwordManager.js":27,"passwordManager/passwordViewer.js":28,"pdfViewer.js":29,"places/places.js":30,"searchbar/bangsPlugin.js":35,"searchbar/bookmarkManager.js":37,"searchbar/developmentModeNotification.js":38,"searchbar/instantAnswerPlugin.js":39,"searchbar/openTabsPlugin.js":40,"searchbar/placeSuggestionsPlugin.js":41,"searchbar/placesPlugin.js":42,"searchbar/restoreTaskPlugin.js":43,"searchbar/searchSuggestionsPlugin.js":44,"searchbar/searchbar.js":45,"searchbar/searchbarPlugins.js":46,"searchbar/updateNotifications.js":48,"tabState/task.js":52,"taskOverlay/taskOverlayBuilder.js":53,"userscripts.js":54,"util/database.js":56,"util/keyboardNavigationHelper.js":59,"util/relativeDate.js":61,"util/settings/settings.js":63,"util/theme.js":64,"util/urlParser.js":65,"webviewMenu.js":67,"webviews.js":68}],2:[function(require,module,exports){
// a neural network for determing which text color to use, generated using http://harthur.github.io/brain/
var runNetwork = function anonymous (input) {
  var net = {
    'layers': [{
      'r': {},
      'g': {},
      'b': {}
    }, {
      '0': {
        'bias': 14.176907520571566,
        'weights': {
          'r': -3.2764240497480652,
          'g': -16.90247884718719,
          'b': -2.9976364179397814
        }
      },
      '1': {
        'bias': 9.086071102351246,
        'weights': {
          'r': -4.327474143397604,
          'g': -15.780660155750773,
          'b': 2.879230202567851
        }
      },
      '2': {
        'bias': 22.274487339773476,
        'weights': {
          'r': -3.5830205067960965,
          'g': -25.498384261673618,
          'b': -6.998329189107962
        }
      }
    }, {
      'black': {
        'bias': 17.873962570788997,
        'weights': {
          '0': -15.542217788633987,
          '1': -13.377152708685674,
          '2': -24.52215186113144
        }
      }
    }],
    'outputLookup': true,
    'inputLookup': true
  }

  for (var i = 1; i < net.layers.length; i++) {
    var layer = net.layers[i]
    var output = {}

    for (var id in layer) {
      var node = layer[id]
      var sum = node.bias

      for (var iid in node.weights) {
        sum += node.weights[iid] * input[iid]
      }
      output[id] = (1 / (1 + Math.exp(-sum)))
    }
    input = output
  }
  return output
}

module.exports = runNetwork

},{}],3:[function(require,module,exports){
const setupDialog = require('passwordManager/managerSetup.js')
const settings = require('util/settings/settings.js')
const PasswordManagers = require('passwordManager/passwordManager.js')

const AutofillSetup = {
  checkSettings: function () {
    let manager = PasswordManagers.getActivePasswordManager()
    if (!manager) {
      return
    }

    manager.checkIfConfigured().then((configured) => {
      if (!configured) {
        setupDialog.show(manager)
      }
    }).catch((err) => {
      console.error(err)
    })
  },
  initialize: function () {
    settings.listen('passwordManager', function (manager) {
      if (manager) {
        // Trigger the check on browser launch and after manager is enabled
        AutofillSetup.checkSettings()
      }
    })
  }
}

module.exports = AutofillSetup

},{"passwordManager/managerSetup.js":24,"passwordManager/passwordManager.js":27,"util/settings/settings.js":63}],4:[function(require,module,exports){
/* common actions that affect different parts of the UI (webviews, tabstrip, etc) */

var settings = require('util/settings/settings.js')
var webviews = require('webviews.js')
var focusMode = require('focusMode.js')
var tabBar = require('navbar/tabBar.js')
var tabEditor = require('navbar/tabEditor.js')
var searchbar = require('searchbar/searchbar.js')

/* creates a new task */

function addTask () {
  tasks.setSelected(tasks.add())
  taskOverlay.hide()

  tabBar.updateAll()
  addTab()
}

/* creates a new tab */

/*
options
  options.enterEditMode - whether to enter editing mode when the tab is created. Defaults to true.
  options.openInBackground - whether to open the tab without switching to it. Defaults to false.
*/
function addTab (tabId = tabs.add(), options = {}) {
  /*
  adding a new tab should destroy the current one if either:
  * The current tab is an empty, non-private tab, and the new tab is private
  * The current tab is empty, and the new tab has a URL
  */

  if (!options.openInBackground && !tabs.get(tabs.getSelected()).url && ((!tabs.get(tabs.getSelected()).private && tabs.get(tabId).private) || tabs.get(tabId).url)) {
    destroyTab(tabs.getSelected())
  }

  tabBar.addTab(tabId)
  webviews.add(tabId)

  if (!options.openInBackground) {
    switchToTab(tabId, {
      focusWebview: options.enterEditMode === false
    })
    if (options.enterEditMode !== false) {
      tabEditor.show(tabId)
    }
  } else {
    tabBar.getTab(tabId).scrollIntoView()
  }
}

/* destroys a task object and the associated webviews */

function destroyTask (id) {
  var task = tasks.get(id)

  task.tabs.forEach(function (tab) {
    webviews.destroy(tab.id)
  })

  tasks.destroy(id)
}

/* destroys the webview and tab element for a tab */
function destroyTab (id) {
  tabBar.removeTab(id)
  tabs.destroy(id) // remove from state - returns the index of the destroyed tab
  webviews.destroy(id) // remove the webview
}

/* destroys a task, and either switches to the next most-recent task or creates a new one */

function closeTask (taskId) {
  var previousCurrentTask = tasks.getSelected().id

  destroyTask(taskId)

  if (taskId === previousCurrentTask) {
    // the current task was destroyed, find another task to switch to

    if (tasks.getLength() === 0) {
      // there are no tasks left, create a new one
      return addTask()
    } else {
      // switch to the most-recent task

      var recentTaskList = tasks.map(function (task) {
        return { id: task.id, lastActivity: tasks.getLastActivity(task.id) }
      })

      const mostRecent = recentTaskList.reduce(
        (latest, current) => current.lastActivity > latest.lastActivity ? current : latest
      )

      return switchToTask(mostRecent.id)
    }
  }
}

/* destroys a tab, and either switches to the next tab or creates a new one */

function closeTab (tabId) {
  /* disabled in focus mode */
  if (focusMode.enabled()) {
    focusMode.warn()
    return
  }

  if (tabId === tabs.getSelected()) {
    var currentIndex = tabs.getIndex(tabs.getSelected())
    var nextTab =
    tabs.getAtIndex(currentIndex - 1) || tabs.getAtIndex(currentIndex + 1)

    destroyTab(tabId)

    if (nextTab) {
      switchToTab(nextTab.id)
    } else {
      addTab()
    }
  } else {
    destroyTab(tabId)
  }
}

/* changes the currently-selected task and updates the UI */

function switchToTask (id) {
  tasks.setSelected(id)

  tabBar.updateAll()

  var taskData = tasks.get(id)

  if (taskData.tabs.count() > 0) {
    var selectedTab = taskData.tabs.getSelected()

    // if the task has no tab that is selected, switch to the most recent one

    if (!selectedTab) {
      selectedTab = taskData.tabs.get().sort(function (a, b) {
        return b.lastActivity - a.lastActivity
      })[0].id
    }

    switchToTab(selectedTab)
  } else {
    addTab()
  }
}

/* switches to a tab - update the webview, state, tabstrip, etc. */

function switchToTab (id, options) {
  options = options || {}

  tabEditor.hide()

  tabs.setSelected(id)
  tabBar.setActiveTab(id)
  webviews.setSelected(id, {
    focus: options.focusWebview !== false
  })
}

webviews.bindEvent('new-window', function (tabId, url, frameName, disposition) {
  /* disabled in focus mode */
  if (focusMode.enabled()) {
    focusMode.warn()
    return
  }
  var newTab = tabs.add({
    url: url,
    private: tabs.get(tabId).private // inherit private status from the current tab
  })

  addTab(newTab, {
    enterEditMode: false,
    openInBackground: disposition === 'background-tab' && !settings.get('openTabsInForeground')
  })
})

webviews.bindIPC('close-window', function (tabId, args) {
  closeTab(tabId)
})

searchbar.events.on('url-selected', function (data) {
  if (data.background) {
    var newTab = tabs.add({
      url: data.url,
      private: tabs.get(tabs.getSelected()).private
    })
    addTab(newTab, {
      enterEditMode: false,
      openInBackground: true
    })
  } else {
    webviews.update(tabs.getSelected(), data.url)
    tabEditor.hide()
  }
})

tabBar.events.on('tab-selected', function (id) {
  switchToTab(id)
})

tabBar.events.on('tab-closed', function (id) {
  closeTab(id)
})

module.exports = {
  addTask,
  addTab,
  destroyTask,
  destroyTab,
  closeTask,
  closeTab,
  switchToTask,
  switchToTab
}

},{"focusMode.js":9,"navbar/tabBar.js":19,"navbar/tabEditor.js":21,"searchbar/searchbar.js":45,"util/settings/settings.js":63,"webviews.js":68}],5:[function(require,module,exports){
const remoteMenu = require('remoteMenuRenderer.js')
const searchbar = require('searchbar/searchbar.js')

module.exports = {
  initialize: function () {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      e.stopPropagation()

      var inputMenu = [
        [
          {
            label: l('undo'),
            role: 'undo'
          },
          {
            label: l('redo'),
            role: 'redo'
          }
        ],
        [
          {
            label: l('cut'),
            role: 'cut'
          },
          {
            label: l('copy'),
            role: 'copy'
          },
          {
            label: l('paste'),
            role: 'paste'
          }
        ],
        [
          {
            label: l('selectAll'),
            role: 'selectall'
          }
        ]
      ]

      let node = e.target

      while (node) {
        if (node.nodeName.match(/^(input|textarea)$/i) || node.isContentEditable) {
          if (node.id === 'tab-editor-input') {
            inputMenu[1].push({
              label: l('pasteAndGo'),
              click: function () {
                searchbar.openURL(electron.clipboard.readText())
              }
            })
          }
          remoteMenu.open(inputMenu)
          break
        }
        node = node.parentNode
      }
    })
  }
}

},{"remoteMenuRenderer.js":34,"searchbar/searchbar.js":45}],6:[function(require,module,exports){
const keybindings = require('keybindings.js')
var webviews = require('webviews.js')
var webviewGestures = require('webviewGestures.js')
var browserUI = require('browserUI.js')
var focusMode = require('focusMode.js')
var modalMode = require('modalMode.js')
var tabEditor = require('navbar/tabEditor.js')

const defaultKeybindings = {
  initialize: function () {
    keybindings.defineShortcut('addTab', function () {
      /* new tabs can't be created in modal mode */
      if (modalMode.enabled()) {
        return
      }

      /* new tabs can't be created in focus mode */
      if (focusMode.enabled()) {
        focusMode.warn()
        return
      }

      browserUI.addTab()
    })

    keybindings.defineShortcut('addPrivateTab', function () {
      /* new tabs can't be created in modal mode */
      if (modalMode.enabled()) {
        return
      }

      /* new tabs can't be created in focus mode */
      if (focusMode.enabled()) {
        focusMode.warn()
        return
      }

      browserUI.addTab(tabs.add({
        private: true
      }))
    })

    keybindings.defineShortcut('duplicateTab', function () {
      if (modalMode.enabled()) {
        return
      }

      if (focusMode.enabled()) {
        focusMode.warn()
        return
      }

      const sourceTab = tabs.get(tabs.getSelected())
      // strip tab id so that a new one is generated
      const newTab = tabs.add({ ...sourceTab, id: undefined })

      browserUI.addTab(newTab, { enterEditMode: false })
    })

    keybindings.defineShortcut('enterEditMode', function (e) {
      tabEditor.show(tabs.getSelected())
      return false
    })

    keybindings.defineShortcut('runShortcut', function (e) {
      tabEditor.show(tabs.getSelected(), '!')
    })

    keybindings.defineShortcut('closeTab', function (e) {
      browserUI.closeTab(tabs.getSelected())
    })

    keybindings.defineShortcut('restoreTab', function (e) {
      if (focusMode.enabled()) {
        focusMode.warn()
        return
      }

      var restoredTab = tasks.getSelected().tabHistory.pop()

      // The tab history stack is empty
      if (!restoredTab) {
        return
      }

      browserUI.addTab(tabs.add(restoredTab), {
        enterEditMode: false
      })
    })

    keybindings.defineShortcut('addToFavorites', function (e) {
      tabEditor.show(tabs.getSelected(), null, false) // we need to show the bookmarks button, which is only visible in edit mode
      tabEditor.container.querySelector('.bookmarks-button').click()
    })

    // cmd+x should switch to tab x. Cmd+9 should switch to the last tab

    for (var i = 1; i < 9; i++) {
      (function (i) {
        keybindings.defineShortcut({ keys: 'mod+' + i }, function (e) {
          var currentIndex = tabs.getIndex(tabs.getSelected())
          var newTab = tabs.getAtIndex(currentIndex + i) || tabs.getAtIndex(currentIndex - i)
          if (newTab) {
            browserUI.switchToTab(newTab.id)
          }
        })

        keybindings.defineShortcut({ keys: 'shift+mod+' + i }, function (e) {
          var currentIndex = tabs.getIndex(tabs.getSelected())
          var newTab = tabs.getAtIndex(currentIndex - i) || tabs.getAtIndex(currentIndex + i)
          if (newTab) {
            browserUI.switchToTab(newTab.id)
          }
        })
      })(i)
    }

    keybindings.defineShortcut('gotoLastTab', function (e) {
      browserUI.switchToTab(tabs.getAtIndex(tabs.count() - 1).id)
    })

    keybindings.defineShortcut('gotoFirstTab', function (e) {
      browserUI.switchToTab(tabs.getAtIndex(0).id)
    })

    keybindings.defineShortcut({ keys: 'esc' }, function (e) {
      tabEditor.hide()

      if (modalMode.enabled() && modalMode.onDismiss) {
        modalMode.onDismiss()
        modalMode.onDismiss = null
      }

      // exit full screen mode
      webviews.callAsync(tabs.getSelected(), 'executeJavaScript', 'if(document.webkitIsFullScreen){document.webkitExitFullscreen()}')

      webviews.callAsync(tabs.getSelected(), 'focus')
    })

    keybindings.defineShortcut('goBack', function (d) {
      webviews.callAsync(tabs.getSelected(), 'goBack')
    })

    keybindings.defineShortcut('goForward', function (d) {
      webviews.callAsync(tabs.getSelected(), 'goForward')
    })

    keybindings.defineShortcut('switchToPreviousTab', function (d) {
      var currentIndex = tabs.getIndex(tabs.getSelected())
      var previousTab = tabs.getAtIndex(currentIndex - 1)

      if (previousTab) {
        browserUI.switchToTab(previousTab.id)
      } else {
        browserUI.switchToTab(tabs.getAtIndex(tabs.count() - 1).id)
      }
    })

    keybindings.defineShortcut('switchToNextTab', function (d) {
      var currentIndex = tabs.getIndex(tabs.getSelected())
      var nextTab = tabs.getAtIndex(currentIndex + 1)

      if (nextTab) {
        browserUI.switchToTab(nextTab.id)
      } else {
        browserUI.switchToTab(tabs.getAtIndex(0).id)
      }
    })

    keybindings.defineShortcut('switchToNextTask', function (d) {
      const taskSwitchList = tasks.filter(t => !tasks.isCollapsed(t.id))

      const currentTaskIdx = taskSwitchList.findIndex(t => t.id === tasks.getSelected().id)

      const nextTask = taskSwitchList[currentTaskIdx + 1] || taskSwitchList[0]
      browserUI.switchToTask(nextTask.id)
    })

    keybindings.defineShortcut('switchToPreviousTask', function (d) {
      const taskSwitchList = tasks.filter(t => !tasks.isCollapsed(t.id))

      const currentTaskIdx = taskSwitchList.findIndex(t => t.id === tasks.getSelected().id)
      taskCount = taskSwitchList.length

      const previousTask = taskSwitchList[currentTaskIdx - 1] || taskSwitchList[taskCount - 1]
      browserUI.switchToTask(previousTask.id)
    })

    // option+cmd+x should switch to task x

    for (var i = 1; i < 10; i++) {
      (function (i) {
        keybindings.defineShortcut({ keys: 'shift+option+mod+' + i }, function (e) {
          const taskSwitchList = tasks.filter(t => !tasks.isCollapsed(t.id))
          if (taskSwitchList[i - 1]) {
            browserUI.switchToTask(taskSwitchList[i - 1].id)
          }
        })
      })(i)
    }

    keybindings.defineShortcut('closeAllTabs', function (d) { // destroys all current tabs, and creates a new, empty tab. Kind of like creating a new window, except the old window disappears.
      var tset = tabs.get()
      for (var i = 0; i < tset.length; i++) {
        browserUI.destroyTab(tset[i].id)
      }

      browserUI.addTab() // create a new, blank tab
    })

    var lastReload = 0

    keybindings.defineShortcut('reload', function () {
      var time = Date.now()

      // pressing mod+r twice in a row reloads the whole browser
      if (time - lastReload < 500) {
        ipc.send('destroyAllViews')
        remote.getCurrentWindow().webContents.reload()
      } else if (tabs.get(tabs.getSelected()).url.startsWith(webviews.internalPages.error)) {
        // reload the original page rather than show the error page again
        webviews.update(tabs.getSelected(), new URL(tabs.get(tabs.getSelected()).url).searchParams.get('url'))
      } else {
        // this can't be an error page, use the normal reload method
        webviews.callAsync(tabs.getSelected(), 'reload')
      }

      lastReload = time
    })

    keybindings.defineShortcut({ keys: 'mod+=' }, function () {
      webviewGestures.zoomWebviewIn(tabs.getSelected())
    })

    // reload the webview when the F5 key is pressed
    document.body.addEventListener('keydown', function (e) {
      if (e.keyCode === 116) {
        try {
          webviews.callAsync(tabs.getSelected(), 'reloadIgnoringCache')
        } catch (e) { }
      }
    })
  }
}

module.exports = defaultKeybindings

},{"browserUI.js":4,"focusMode.js":9,"keybindings.js":10,"modalMode.js":12,"navbar/tabEditor.js":21,"webviewGestures.js":66,"webviews.js":68}],7:[function(require,module,exports){
var webviews = require('webviews.js')

function getFileSizeString (bytes) {
  const prefixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

  let size = bytes
  let prefixIndex = 0

  while (size > 900) { // prefer "0.9 KB" to "949 bytes"
    size /= 1024
    prefixIndex++
  }

  return (Math.round(size * 10) / 10) + ' ' + prefixes[prefixIndex]
}

const downloadManager = {
  isShown: false,
  bar: document.getElementById('download-bar'),
  container: document.getElementById('download-container'),
  closeButton: document.getElementById('download-close-button'),
  height: 40,
  lastDownloadCompleted: null,
  downloadItems: {},
  downloadBarElements: {},
  show: function () {
    if (!downloadManager.isShown) {
      downloadManager.isShown = true
      downloadManager.bar.hidden = false
      webviews.adjustMargin([0, 0, downloadManager.height, 0])
    }
  },
  hide: function () {
    if (downloadManager.isShown) {
      downloadManager.isShown = false
      downloadManager.bar.hidden = true
      webviews.adjustMargin([0, 0, downloadManager.height * -1, 0])

      // remove all completed or failed items
      for (const item in downloadManager.downloadItems) {
        if (downloadManager.downloadItems[item].status !== 'progressing') {
          downloadManager.removeItem(item)
        }
      }
    }
  },
  removeItem: function (path) {
    if (downloadManager.downloadBarElements[path]) {
      downloadManager.downloadBarElements[path].container.remove()
    }

    delete downloadManager.downloadBarElements[path]
    delete downloadManager.downloadItems[path]

    if (Object.keys(downloadManager.downloadItems).length === 0) {
      downloadManager.hide()
    }
  },
  openFolder: function (path) {
    electron.shell.showItemInFolder(path)
  },
  onItemClicked: function (path) {
    if (downloadManager.downloadItems[path].status === 'completed') {
      electron.shell.openPath(path)
      // provide a bit of time for the file to open before the download bar disappears
      setTimeout(function () {
        downloadManager.removeItem(path)
      }, 100)
    }
  },
  onItemDragged: function (path) {
    remote.app.getFileIcon(path, {}).then(function (icon) {
      remote.getCurrentWebContents().startDrag({
        file: path,
        icon: icon
      })
    })
  },
  onDownloadCompleted: function () {
    downloadManager.lastDownloadCompleted = Date.now()
    setTimeout(function () {
      if (Date.now() - downloadManager.lastDownloadCompleted >= 120000 && Object.values(downloadManager.downloadItems).filter(i => i.status === 'progressing').length === 0) {
        downloadManager.hide()
      }
    }, 120 * 1000)
  },
  createItem: function (downloadItem) {
    const container = document.createElement('div')
    container.className = 'download-item'
    container.setAttribute('role', 'listitem')
    container.setAttribute('draggable', 'true')

    const title = document.createElement('div')
    title.className = 'download-title'
    title.textContent = downloadItem.name
    container.appendChild(title)

    const infoBox = document.createElement('div')
    infoBox.className = 'download-info'
    container.appendChild(infoBox)

    const detailedInfoBox = document.createElement('div')
    detailedInfoBox.className = 'download-info detailed'
    container.appendChild(detailedInfoBox)

    const progress = document.createElement('div')
    progress.className = 'download-progress'
    container.appendChild(progress)

    const dropdown = document.createElement('button')
    dropdown.className = 'download-action-button i carbon:chevron-down'
    container.appendChild(dropdown)

    const openFolder = document.createElement('button')
    openFolder.className = 'download-action-button i carbon:folder'
    openFolder.hidden = true
    container.appendChild(openFolder)

    container.addEventListener('click', function () {
      downloadManager.onItemClicked(downloadItem.path)
    })
    container.addEventListener('dragstart', function (e) {
      e.preventDefault()
      downloadManager.onItemDragged(downloadItem.path)
    })

    dropdown.addEventListener('click', function (e) {
      e.stopPropagation()
      const menu = new remote.Menu()
      menu.append(new remote.MenuItem({
        label: l('downloadCancel'),
        click: function () {
          ipc.send('cancelDownload', downloadItem.path)
          downloadManager.removeItem(downloadItem.path)
        }
      }))
      menu.popup({
        x: Math.round(dropdown.getBoundingClientRect().left),
        y: Math.round(dropdown.getBoundingClientRect().top - 15)
      })
    })

    openFolder.addEventListener('click', function (e) {
      e.stopPropagation()
      downloadManager.openFolder(downloadItem.path)
      downloadManager.removeItem(downloadItem.path)
    })

    downloadManager.container.appendChild(container)
    downloadManager.downloadBarElements[downloadItem.path] = { container, title, infoBox, detailedInfoBox, progress, dropdown, openFolder }
  },
  updateItem: function (downloadItem) {
    const elements = downloadManager.downloadBarElements[downloadItem.path]

    if (downloadItem.status === 'completed') {
      elements.container.classList.remove('loading')
      elements.container.classList.add('completed')
      elements.progress.hidden = true
      elements.dropdown.hidden = true
      elements.openFolder.hidden = false
      elements.infoBox.textContent = l('downloadStateCompleted')
      elements.detailedInfoBox.textContent = l('downloadStateCompleted')
    } else if (downloadItem.status === 'interrupted') {
      elements.container.classList.remove('loading')
      elements.container.classList.remove('completed')
      elements.progress.hidden = true
      elements.dropdown.hidden = true
      elements.openFolder.hidden = true
      elements.infoBox.textContent = l('downloadStateFailed')
      elements.detailedInfoBox.textContent = l('downloadStateFailed')
    } else {
      elements.container.classList.add('loading')
      elements.container.classList.remove('completed')
      elements.progress.hidden = false
      elements.dropdown.hidden = false
      elements.openFolder.hidden = true
      elements.infoBox.textContent = getFileSizeString(downloadItem.size.total)
      elements.detailedInfoBox.textContent = getFileSizeString(downloadItem.size.received) + ' / ' + getFileSizeString(downloadItem.size.total)

      // the progress bar has a minimum width so that it's visible even if there's 0 download progress
      const adjustedProgress = 0.025 + ((downloadItem.size.received / downloadItem.size.total) * 0.975)
      elements.progress.style.transform = 'scaleX(' + adjustedProgress + ')'
    }
  },
  initialize: function () {
    this.closeButton.addEventListener('click', function () {
      downloadManager.hide()
    })

    ipc.on('download-info', function (e, info) {
      if (!info.path) {
        // download save location hasn't been chosen yet
        return
      }

      if (info.status === 'cancelled') {
        downloadManager.removeItem(info.path)
        return
      }

      if (info.status === 'completed') {
        downloadManager.onDownloadCompleted()
      }

      if (!downloadManager.downloadItems[info.path]) {
        downloadManager.show()
        downloadManager.createItem(info)
      }
      downloadManager.updateItem(info)

      downloadManager.downloadItems[info.path] = info
    })
  }
}

module.exports = downloadManager

},{"webviews.js":68}],8:[function(require,module,exports){
var webviews = require('webviews.js')
var keybindings = require('keybindings.js')
var PDFViewer = require('pdfViewer.js')

var findinpage = {
  container: document.getElementById('findinpage-bar'),
  input: document.getElementById('findinpage-input'),
  counter: document.getElementById('findinpage-count'),
  previous: document.getElementById('findinpage-previous-match'),
  next: document.getElementById('findinpage-next-match'),
  endButton: document.getElementById('findinpage-end'),
  activeTab: null,
  start: function (options) {
    webviews.releaseFocus()

    findinpage.input.placeholder = l('searchInPage')

    findinpage.activeTab = tabs.getSelected()

    /* special case for PDF viewer */

    if (PDFViewer.isPDFViewer(findinpage.activeTab)) {
      PDFViewer.startFindInPage(findinpage.activeTab)
    }

    findinpage.counter.textContent = ''
    findinpage.container.hidden = false
    findinpage.input.focus()
    findinpage.input.select()

    if (findinpage.input.value) {
      webviews.callAsync(findinpage.activeTab, 'findInPage', findinpage.input.value)
    }
  },
  end: function (options) {
    options = options || {}
    var action = options.action || 'keepSelection'

    findinpage.container.hidden = true

    if (findinpage.activeTab) {
      webviews.callAsync(findinpage.activeTab, 'stopFindInPage', action)

      /* special case for PDF viewer */
      if (tabs.get(findinpage.activeTab) && PDFViewer.isPDFViewer(findinpage.activeTab)) {
        PDFViewer.endFindInPage(findinpage.activeTab)
      }

      webviews.callAsync(findinpage.activeTab, 'focus')
    }

    findinpage.activeTab = null
  }
}

findinpage.input.addEventListener('click', function () {
  webviews.releaseFocus()
})

findinpage.endButton.addEventListener('click', function () {
  findinpage.end()
})

findinpage.input.addEventListener('input', function (e) {
  if (this.value) {
    webviews.callAsync(findinpage.activeTab, 'findInPage', findinpage.input.value)
  }
})

findinpage.input.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) { // Return/Enter key
    webviews.callAsync(findinpage.activeTab, 'findInPage', [findinpage.input.value, {
      forward: !e.shiftKey, // find previous if Shift is pressed
      findNext: true
    }])
  }
})

findinpage.previous.addEventListener('click', function (e) {
  webviews.callAsync(findinpage.activeTab, 'findInPage', [findinpage.input.value, {
    forward: false,
    findNext: true
  }])
  findinpage.input.focus()
})

findinpage.next.addEventListener('click', function (e) {
  webviews.callAsync(findinpage.activeTab, 'findInPage', [findinpage.input.value, {
    forward: true,
    findNext: true
  }])
  findinpage.input.focus()
})

webviews.bindEvent('view-hidden', function (tabId) {
  if (tabId === findinpage.activeTab) {
    findinpage.end()
  }
})

webviews.bindEvent('did-start-navigation', function (tabId, url, isInPlace, isMainFrame, frameProcessId, frameRoutingId) {
  if (!isInPlace && tabId === findinpage.activeTab) {
    findinpage.end()
  }
})

webviews.bindEvent('found-in-page', function (tabId, data) {
  if (data.matches !== undefined) {
    var text
    if (data.matches === 1) {
      text = l('findMatchesSingular')
    } else {
      text = l('findMatchesPlural')
    }

    findinpage.counter.textContent = text.replace('%i', data.activeMatchOrdinal).replace('%t', data.matches)
  }
})

keybindings.defineShortcut('followLink', function () {
  findinpage.end({ action: 'activateSelection' })
})

keybindings.defineShortcut({ keys: 'esc' }, function (e) {
  findinpage.end()
})

module.exports = findinpage

},{"keybindings.js":10,"pdfViewer.js":29,"webviews.js":68}],9:[function(require,module,exports){
var isFocusMode = false

ipc.on('enterFocusMode', function () {
  isFocusMode = true
  document.body.classList.add('is-focus-mode')

  setTimeout(function () { // wait to show the message until the tabs have been hidden, to make the message less confusing
    electron.remote.dialog.showMessageBox({
      type: 'info',
      buttons: [l('closeDialog')],
      message: l('isFocusMode'),
      detail: l('focusModeExplanation1') + ' ' + l('focusModeExplanation2')
    })
  }, 16)
})

ipc.on('exitFocusMode', function () {
  isFocusMode = false
  document.body.classList.remove('is-focus-mode')
})

module.exports = {
  enabled: function () {
    return isFocusMode
  },
  warn: function () {
    electron.remote.dialog.showMessageBox({
      type: 'info',
      buttons: [l('closeDialog')],
      message: l('isFocusMode'),
      detail: l('focusModeExplanation2')
    })
  }
}

},{}],10:[function(require,module,exports){
/*
There are three possible ways that keybindings can be handled.
 Shortcuts that appear in the menubar are registered in main.js, and send IPC messages to the window (which are handled by menuRenderer.js)
 - If the browser UI is focused, shortcuts are handled by Mousetrap.
  - If a BrowserView is focused, shortcuts are handled by the before-input-event listener.
  */

const Mousetrap = require('mousetrap')
const keyMapModule = require('util/keyMap.js')

var webviews = require('webviews.js')
var modalMode = require('modalMode.js')
var settings = require('util/settings/settings.js')

var keyMap = keyMapModule.userKeyMap(settings.get('keyMap'))

var shortcutsList = []
var registeredMousetrapBindings = {}

/*
Determines whether a shortcut can actually run
single-letter shortcuts and shortcuts used for text editing can't run when an input is focused
*/
function checkShortcutCanRun (combo, cb) {
  if (/^(shift)?\+?\w$/.test(combo) || combo === 'mod+left' || combo === 'mod+right') {
    webviews.callAsync(tabs.getSelected(), 'isFocused', function (err, isFocused) {
      if (err || !tabs.get(tabs.getSelected()).url || !isFocused) {
      // check whether an input is focused in the browser UI
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
          cb(false)
        } else {
          cb(true)
        }
      } else {
      // check whether an input is focused in the webview
        webviews.callAsync(tabs.getSelected(), 'executeJavaScript', `
          document.activeElement.tagName === "INPUT"
          || document.activeElement.tagName === "TEXTAREA"
          || document.activeElement.tagName === "IFRAME"
          || (function () {
            var n = document.activeElement;
            while (n) {
              if (n.getAttribute && n.getAttribute("contenteditable")) {
                return true;
              }
              n = n.parentElement;
            }
            return false;
          })()
      `, function (err, isInputFocused) {
          if (err) {
            console.warn(err)
            return
          }
          cb(isInputFocused === false)
        })
      }
    })
  } else {
    cb(true)
  }
}

function defineShortcut (keysOrKeyMapName, fn, options = {}) {
  if (keysOrKeyMapName.keys) {
    var binding = keysOrKeyMapName.keys
  } else {
    var binding = keyMap[keysOrKeyMapName]
  }

  if (typeof binding === 'string') {
    binding = [binding]
  }

  var shortcutCallback = function (e, combo) {
    // Disable shortcuts for modal mode, unless this is the combo to close the modal
    if (modalMode.enabled() && combo !== 'esc') {
      return
    }

    checkShortcutCanRun(combo, function (canRun) {
      if (canRun) {
        fn(e, combo)
      }
    })
  }

  binding.forEach(function (keys) {
    shortcutsList.push({
      combo: keys,
      keys: keys.split('+'),
      fn: shortcutCallback,
      keyUp: options.keyUp
    })
    if (!registeredMousetrapBindings[keys]) {
      // mousetrap only allows one listener for each key combination
      // so register a single listener, and have it call all the other listeners that we have
      Mousetrap.bind(keys, function (e, combo) {
        shortcutsList.forEach(function (shortcut) {
          if (shortcut.combo === combo) {
            shortcut.fn(e, combo)
          }
        })
      }, (options.keyUp ? 'keyup' : null))
      registeredMousetrapBindings[keys] = true
    }
  })
}

function initialize () {
  webviews.bindEvent('before-input-event', function (tabId, input) {
    var expectedKeys = 1
    // account for additional keys that aren't in the input.key property
    if (input.alt && input.key !== 'Alt') {
      expectedKeys++
    }
    if (input.shift && input.key !== 'Shift') {
      expectedKeys++
    }
    if (input.control && input.key !== 'Control') {
      expectedKeys++
    }
    if (input.meta && input.key !== 'Meta') {
      expectedKeys++
    }

    shortcutsList.forEach(function (shortcut) {
      if ((shortcut.keyUp && input.type !== 'keyUp') || (!shortcut.keyUp && input.type !== 'keyDown')) {
        return
      }
      var matches = true
      var matchedKeys = 0
      shortcut.keys.forEach(function (key) {
        if (!(
          key === input.key.toLowerCase() ||
        key === input.code.replace('Digit', '') ||
        (key === 'esc' && input.key === 'Escape') ||
        (key === 'left' && input.key === 'ArrowLeft') ||
        (key === 'right' && input.key === 'ArrowRight') ||
        (key === 'up' && input.key === 'ArrowUp') ||
        (key === 'down' && input.key === 'ArrowDown') ||
        (key === 'alt' && (input.alt || input.key === 'Alt')) ||
        (key === 'option' && (input.alt || input.key === 'Alt')) ||
        (key === 'shift' && (input.shift || input.key === 'Shift')) ||
        (key === 'ctrl' && (input.control || input.key === 'Control')) ||
        (key === 'mod' && window.platformType === 'mac' && (input.meta || input.key === 'Meta')) ||
        (key === 'mod' && window.platformType !== 'mac' && (input.control || input.key === 'Control'))
        )
        ) {
          matches = false
        } else {
          matchedKeys++
        }
      })

      if (matches && matchedKeys === expectedKeys) {
        shortcut.fn(null, shortcut.combo)
      }
    })
  })
}

initialize()

module.exports = { defineShortcut }

},{"modalMode.js":12,"mousetrap":78,"util/keyMap.js":58,"util/settings/settings.js":63,"webviews.js":68}],11:[function(require,module,exports){
/* Handles messages that get sent from the menu bar in the main process */

var webviews = require('webviews.js')
var webviewGestures = require('webviewGestures.js')
var browserUI = require('browserUI.js')
var focusMode = require('focusMode.js')
var modalMode = require('modalMode.js')
var findinpage = require('findinpage.js')
var PDFViewer = require('pdfViewer.js')
var tabEditor = require('navbar/tabEditor.js')
var readerView = require('readerView.js')

module.exports = {
  initialize: function () {
    ipc.on('zoomIn', function () {
      webviewGestures.zoomWebviewIn(tabs.getSelected())
    })

    ipc.on('zoomOut', function () {
      webviewGestures.zoomWebviewOut(tabs.getSelected())
    })

    ipc.on('zoomReset', function () {
      webviewGestures.resetWebviewZoom(tabs.getSelected())
    })

    ipc.on('print', function () {
      if (PDFViewer.isPDFViewer(tabs.getSelected())) {
        PDFViewer.printPDF(tabs.getSelected())
      } else if (readerView.isReader(tabs.getSelected())) {
        readerView.printArticle(tabs.getSelected())
      } else {
      // TODO figure out why webContents.print() doesn't work in Electron 4
        webviews.callAsync(tabs.getSelected(), 'executeJavaScript', 'window.print()')
      }
    })

    ipc.on('findInPage', function () {
      /* Page search is not available in modal mode. */
      if (modalMode.enabled()) {
        return
      }

      findinpage.start()
    })

    ipc.on('inspectPage', function () {
      webviews.callAsync(tabs.getSelected(), 'toggleDevTools')
    })

    ipc.on('openEditor', function () {
      tabEditor.show(tabs.getSelected())
    })

    ipc.on('showBookmarks', function () {
      tabEditor.show(tabs.getSelected(), '!bookmarks ')
    })

    ipc.on('showHistory', function () {
      tabEditor.show(tabs.getSelected(), '!history ')
    })

    ipc.on('duplicateTab', function (e) {
      if (modalMode.enabled()) {
        return
      }

      if (focusMode.enabled()) {
        focusMode.warn()
        return
      }

      browserUI.duplicateTab(tabs.getSelected())
    })

    ipc.on('addTab', function (e, data) {
      /* new tabs can't be created in modal mode */
      if (modalMode.enabled()) {
        return
      }

      /* new tabs can't be created in focus mode */
      if (focusMode.enabled()) {
        focusMode.warn()
        return
      }

      var newTab = tabs.add({
        url: data.url || ''
      })

      browserUI.addTab(newTab, {
        enterEditMode: !data.url // only enter edit mode if the new tab is empty
      })
    })

    ipc.on('saveCurrentPage', function () {
      var currentTab = tabs.get(tabs.getSelected())

      // new tabs cannot be saved
      if (!currentTab.url) {
        return
      }

      // if the current tab is a PDF, let the PDF viewer handle saving the document
      if (PDFViewer.isPDFViewer(tabs.getSelected())) {
        PDFViewer.savePDF(tabs.getSelected())
        return
      }

      var savePath = remote.dialog.showSaveDialogSync(remote.getCurrentWindow(), {
        defaultPath: currentTab.title.replace(/[/\\]/g, '_')
      })

      // savePath will be undefined if the save dialog is canceled
      if (savePath) {
        if (!savePath.endsWith('.html')) {
          savePath = savePath + '.html'
        }
        webviews.callAsync(tabs.getSelected(), 'savePage', [savePath, 'HTMLComplete'])
      }
    })

    ipc.on('addPrivateTab', function () {
      /* new tabs can't be created in modal mode */
      if (modalMode.enabled()) {
        return
      }

      /* new tabs can't be created in focus mode */
      if (focusMode.enabled()) {
        focusMode.warn()
        return
      }

      browserUI.addTab(tabs.add({
        private: true
      }))
    })

    ipc.on('toggleTaskOverlay', function () {
      taskOverlay.toggle()
    })

    ipc.on('goBack', function () {
      webviews.callAsync(tabs.getSelected(), 'goBack')
    })

    ipc.on('goForward', function () {
      webviews.callAsync(tabs.getSelected(), 'goForward')
    })
  }
}

},{"browserUI.js":4,"findinpage.js":8,"focusMode.js":9,"modalMode.js":12,"navbar/tabEditor.js":21,"pdfViewer.js":29,"readerView.js":33,"webviewGestures.js":66,"webviews.js":68}],12:[function(require,module,exports){
let isModalMode = false

const overlay = document.getElementById('overlay')

const modalMode = {
  onDismiss: null,
  enabled: function () {
    return isModalMode
  },
  toggle: function (enabled, listeners = {}) {
    if (enabled && listeners.onDismiss) {
      modalMode.onDismiss = listeners.onDismiss
    }

    if (!enabled) {
      modalMode.onDismiss = null
    }

    isModalMode = enabled
    if (enabled) {
      document.body.classList.add('is-modal-mode')
    } else {
      document.body.classList.remove('is-modal-mode')
    }
  }
}

overlay.addEventListener('click', function () {
  if (modalMode.onDismiss) {
    modalMode.onDismiss()
    modalMode.onDismiss = null
  }
})

module.exports = modalMode

},{}],13:[function(require,module,exports){
const db = require('util/database.js').db
const places = require('places/places.js')
const bookmarkEditor = require('searchbar/bookmarkEditor.js')
const searchbar = require('searchbar/searchbar.js')
const searchbarPlugins = require('searchbar/searchbarPlugins.js')

const bookmarkStar = {
  create: function () {
    const star = document.createElement('button')
    star.className = 'tab-editor-button bookmarks-button i carbon:star'
    star.setAttribute('aria-pressed', false)
    star.setAttribute('title', l('addBookmark'))
    star.setAttribute('aria-label', l('addBookmark'))

    star.addEventListener('click', function (e) {
      bookmarkStar.onClick(star)
    })

    return star
  },
  onClick: function (star) {
    var tabId = star.getAttribute('data-tab')

    searchbarPlugins.clearAll()

    star.classList.toggle('carbon:star')
    star.classList.toggle('carbon:star-filled')

    places.toggleBookmarked(tabId, function (isBookmarked) {
      if (isBookmarked) {
        star.classList.remove('carbon:star')
        star.classList.add('carbon:star-filled')
        // since the update happens asynchronously, and star.update() could be called after onClick but before the update, it's possible for the classes to get out of sync with the actual bookmark state. Updating them here fixes tis.
        star.setAttribute('aria-pressed', true)
        var editorInsertionPoint = document.createElement('div')
        searchbarPlugins.getContainer('simpleBookmarkTagInput').appendChild(editorInsertionPoint)
        bookmarkEditor.show(tabs.get(tabs.getSelected()).url, editorInsertionPoint, null, {simplified: true, autoFocus: true})
      } else {
        star.classList.add('carbon:star')
        star.classList.remove('carbon:star-filled')
        star.setAttribute('aria-pressed', false)
        searchbar.showResults('')
      }
    })
  },
  update: function (tabId, star) {
    star.setAttribute('data-tab', tabId)
    const currentURL = tabs.get(tabId).url

    if (!currentURL) { // no url, can't be bookmarked
      star.hidden = true
    } else {
      star.hidden = false
    }

    // check if the page is bookmarked or not, and update the star to match

    db.places.where('url').equals(currentURL).first(function (item) {

      if (item && item.isBookmarked) {
        star.classList.remove('carbon:star')
        star.classList.add('carbon:star-filled')
        star.setAttribute('aria-pressed', true)
      } else {
        star.classList.add('carbon:star')
        star.classList.remove('carbon:star-filled')
        star.setAttribute('aria-pressed', false)
      }
    })
  }
}

searchbarPlugins.register('simpleBookmarkTagInput', {
  index: 0
})

module.exports = bookmarkStar

},{"places/places.js":30,"searchbar/bookmarkEditor.js":36,"searchbar/searchbar.js":45,"searchbar/searchbarPlugins.js":46,"util/database.js":56}],14:[function(require,module,exports){
const webviews = require('webviews.js')
const settings = require('util/settings/settings.js')
const remoteMenu = require('remoteMenuRenderer.js')

const contentBlockingToggle = {
  enableBlocking: function (url) {
    if (!url) {
      return
    }
    var domain = new URL(url).hostname

    var setting = settings.get('filtering')
    if (!setting) {
      setting = {}
    }
    if (!setting.exceptionDomains) {
      setting.exceptionDomains = []
    }
    setting.exceptionDomains = setting.exceptionDomains.filter(d => d.replace(/^www\./g, '') !== domain.replace(/^www\./g, ''))
    settings.set('filtering', setting)
    webviews.callAsync(tabs.getSelected(), 'reload')
  },
  disableBlocking: function (url) {
    if (!url) {
      return
    }
    var domain = new URL(url).hostname

    var setting = settings.get('filtering')
    if (!setting) {
      setting = {}
    }
    if (!setting.exceptionDomains) {
      setting.exceptionDomains = []
    }
      // make sure the domain isn't already an exception
    if (!setting.exceptionDomains.some(d => d.replace(/^www\./g, '') === domain.replace(/^www\./g, ''))) {
      setting.exceptionDomains.push(domain)
    }
    settings.set('filtering', setting)
    webviews.callAsync(tabs.getSelected(), 'reload')
  },
  isBlockingEnabled: function (url) {
    try {
      var domain = new URL(url).hostname
    } catch (e) {
      return false
    }

    var setting = settings.get('filtering')
    return !setting || !setting.exceptionDomains || !setting.exceptionDomains.some(d => d.replace(/^www\./g, '') === domain.replace(/^www\./g, ''))
  },
  create: function () {
    const button = document.createElement('button')
    button.className = 'tab-editor-button i carbon:manage-protection'

    button.addEventListener('click', function (e) {
      contentBlockingToggle.showMenu(button)
    })

    return button
  },
  showMenu: function (button) {
    var url = tabs.get(tabs.getSelected()).url
    var menu = [
      [
        {
          type: 'checkbox',
          label: l('enableBlocking'),
          checked: contentBlockingToggle.isBlockingEnabled(url),
          click: function () {
            if (contentBlockingToggle.isBlockingEnabled(url)) {
              contentBlockingToggle.disableBlocking(url)
            } else {
              contentBlockingToggle.enableBlocking(url)
            }
            contentBlockingToggle.update(tabs.getSelected(), button)
          }
        }
      ],
      [
        {
          label: l('appMenuReportBug'),
          click: function () {
            var newTab = tabs.add({url: 'https://github.com/minbrowser/min/issues/new?title=Content%20blocking%20issue%20on%20' + encodeURIComponent(url)})
            require('browserUI.js').addTab(newTab, {enterEditMode: false})
          }
        }
      ]
    ]
    remoteMenu.open(menu)
  },
  update: function (tabId, button) {
    if (!tabs.get(tabId).url.startsWith('http') && !tabs.get(tabId).url.startsWith('https')) {
      button.hidden = true
      return
    }

    if (settings.get('filtering') && settings.get('filtering').blockingLevel === 0) {
      button.hidden = true
      return
    }

    button.hidden = false
    if (contentBlockingToggle.isBlockingEnabled(tabs.get(tabId).url)) {
      button.style.opacity = 1
    } else {
      button.style.opacity = 0.4
    }
  }
}

module.exports = contentBlockingToggle

},{"browserUI.js":4,"remoteMenuRenderer.js":34,"util/settings/settings.js":63,"webviews.js":68}],15:[function(require,module,exports){
const webviews = require('webviews.js')

var goBackButton = {
  element: document.getElementById('back-button'),
  update: function () {
    if (!tabs.get(tabs.getSelected()).url) {
      goBackButton.element.disabled = true
      return
    }
    webviews.callAsync(tabs.getSelected(), 'canGoBack', function (err, canGoBack) {
      goBackButton.element.disabled = !canGoBack
    })
  },
  initialize: function () {
    goBackButton.element.addEventListener('click', function (e) {
      webviews.goBackIgnoringRedirects(tabs.getSelected())
    })

    // hide until initialized to reduce flickering
    goBackButton.element.hidden = false

    tasks.on('tab-selected', this.update)
    webviews.bindEvent('did-navigate', this.update)
    webviews.bindEvent('did-navigate-in-page', this.update)
  }
}

module.exports = goBackButton

},{"webviews.js":68}],16:[function(require,module,exports){
const webviews = require('webviews.js')

const permissionRequests = {
  requests: [],
  listeners: [],
  grantPermission: function (permissionId) {
    permissionRequests.requests.forEach(function (request) {
      if (request.permissionId && request.permissionId === permissionId) {
        ipc.send('permissionGranted', permissionId)
      }
    })
  },
  getIcons: function (request) {
    if (request.permission === 'notifications') {
      return ['carbon:chat']
    } else if (request.permission === 'media') {
      var mediaIcons = {
        video: 'carbon:video',
        audio: 'carbon:microphone'
      }
      return request.details.mediaTypes.map(t => mediaIcons[t])
    }
  },
  getButtons: function (tabId) {
    var buttons = []
    permissionRequests.requests.forEach(function (request) {
      if (request.tabId === tabId) {
        var button = document.createElement('button')
        button.className = 'tab-icon permission-request-icon'
        if (request.granted) {
          button.classList.add('active')
        }
        permissionRequests.getIcons(request).forEach(function (icon) {
          var el = document.createElement('i')
          el.className = 'i ' + icon
          button.appendChild(el)
        })
        button.addEventListener('click', function (e) {
          e.stopPropagation()
          if (request.granted) {
            webviews.callAsync(tabId, 'reload')
          } else {
            permissionRequests.grantPermission(request.permissionId)
            button.classList.add('active')
          }
        })
        buttons.push(button)
      }
    })
    return buttons
  },
  onChange: function (listener) {
    permissionRequests.listeners.push(listener)
  },
  initialize: function () {
    ipc.on('updatePermissions', function (e, data) {
      var oldData = permissionRequests.requests
      permissionRequests.requests = data
      oldData.forEach(function (req) {
        permissionRequests.listeners.forEach(listener => listener(req.tabId))
      })
      permissionRequests.requests.forEach(function (req) {
        permissionRequests.listeners.forEach(listener => listener(req.tabId))
      })
    })
  }
}

permissionRequests.initialize()

module.exports = permissionRequests

},{"webviews.js":68}],17:[function(require,module,exports){
const progressBar = {
  create: function () {
    var pbContainer = document.createElement('div')
    pbContainer.className = 'progress-bar-container'

    var pb = document.createElement('div')
    pb.className = 'progress-bar p0'
    pb.hidden = true
    pbContainer.appendChild(pb)

    return pbContainer
  },
  update: function (bar, status) {
    if (status === 'start') {
      var loadID = Date.now().toString()
      bar.setAttribute('loading', loadID) // we need to use unique ID's to ensure that the same page that was loading initialy is the same page that is loading 4 seconds later
      setTimeout(function () {
        if (bar.getAttribute('loading') === loadID) {
          bar.hidden = false
          requestAnimationFrame(function () {
            bar.className = 'progress-bar p25'
          })
        }
      }, 4000)
    } else {
      bar.setAttribute('loading', 'false')
      if (bar.classList.contains('p25')) {
        bar.className = 'progress-bar p100'
        setTimeout(function () {
          bar.className = 'progress-bar p0'
          bar.hidden = true
        }, 500)
      }
    }
  }
}

module.exports = progressBar

},{}],18:[function(require,module,exports){
/* fades out tabs that are inactive */

var tabBar = require('navbar/tabBar.js')

var tabActivity = {
  minFadeAge: 330000,
  refresh: function () {
    requestAnimationFrame(function () {
      var tabSet = tabs.get()
      var selected = tabs.getSelected()
      var time = Date.now()

      tabSet.forEach(function (tab) {
        if (selected === tab.id) { // never fade the current tab
          tabBar.getTab(tab.id).classList.remove('fade')
          return
        }
        if (time - tab.lastActivity > tabActivity.minFadeAge) { // the tab has been inactive for greater than minActivity, and it is not currently selected
          tabBar.getTab(tab.id).classList.add('fade')
        } else {
          tabBar.getTab(tab.id).classList.remove('fade')
        }
      })
    })
  },
  initialize: function () {
    setInterval(tabActivity.refresh, 7500)

    tasks.on('tab-selected', this.refresh)
  }
}

module.exports = tabActivity

},{"navbar/tabBar.js":19}],19:[function(require,module,exports){
const webviews = require('webviews.js')
const focusMode = require('focusMode.js')
const readerView = require('readerView.js')
const tabAudio = require('tabAudio.js')
const dragula = require('dragula')
const settings = require('util/settings/settings.js')

const tabEditor = require('navbar/tabEditor.js')
const progressBar = require('navbar/progressBar.js')
const permissionRequests = require('navbar/permissionRequests.js')

var lastTabDeletion = 0 // TODO get rid of this

const tabBar = {
  navBar: document.getElementById('navbar'),
  container: document.getElementById('tabs'),
  containerInner: document.getElementById('tabs-inner'),
  tabElementMap: {}, // tabId: tab element
  events: new EventEmitter(),
  dragulaInstance: dragula([document.getElementById('tabs-inner')], {
    direction: 'horizontal'
  }),
  getTab: function (tabId) {
    return tabBar.tabElementMap[tabId]
  },
  getTabInput: function (tabId) {
    return tabBar.getTab(tabId).querySelector('.tab-input')
  },
  setActiveTab: function (tabId) {
    var activeTab = document.querySelector('.tab-item.active')

    if (activeTab) {
      activeTab.classList.remove('active')
      activeTab.removeAttribute('aria-selected')
    }

    var el = tabBar.getTab(tabId)
    el.classList.add('active')
    el.setAttribute('aria-selected', 'true')

    requestAnimationFrame(function () {
      el.scrollIntoView()
    })
  },
  createTab: function (data) {
    var tabEl = document.createElement('div')
    tabEl.className = 'tab-item'
    tabEl.setAttribute('data-tab', data.id)
    tabEl.setAttribute('role', 'tab')

    tabEl.appendChild(readerView.getButton(data.id))
    tabEl.appendChild(tabAudio.getButton(data.id))
    tabEl.appendChild(progressBar.create())

    // icons

    var iconArea = document.createElement('span')
    iconArea.className = 'tab-icon-area'

    if (data.private) {
      var pbIcon = document.createElement('i')
      pbIcon.className = 'icon-tab-is-private tab-icon tab-info-icon i carbon:view-off'
      iconArea.appendChild(pbIcon)
    }

    var secIcon = document.createElement('i')
    secIcon.className = 'icon-tab-not-secure tab-icon tab-info-icon i carbon:unlocked'
    secIcon.title = l('connectionNotSecure')
    iconArea.appendChild(secIcon)

    var closeTabButton = document.createElement('button')
    closeTabButton.className = 'tab-icon tab-close-button i carbon:close'

    closeTabButton.addEventListener('click', function (e) {
      tabBar.events.emit('tab-closed', data.id)
      // prevent the searchbar from being opened
      e.stopPropagation()
    })

    iconArea.appendChild(closeTabButton)

    tabEl.appendChild(iconArea)

    // title

    var title = document.createElement('span')
    title.className = 'title'

    tabEl.appendChild(title)

    // click to enter edit mode or switch to a tab
    tabEl.addEventListener('click', function (e) {
      if (tabs.getSelected() !== data.id) { // else switch to tab if it isn't focused
        tabBar.events.emit('tab-selected', data.id)
      } else { // the tab is focused, edit tab instead
        tabEditor.show(data.id)
      }
    })

    tabEl.addEventListener('auxclick', function (e) {
      if (e.which === 2) { // if mouse middle click -> close tab
        tabBar.events.emit('tab-closed', data.id)
      }
    })

    tabEl.addEventListener('wheel', function (e) {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
        // https://github.com/minbrowser/min/issues/698
        return
      }
      if (e.deltaY > 65 && e.deltaX < 10 && Date.now() - lastTabDeletion > 900) { // swipe up to delete tabs
        lastTabDeletion = Date.now()

        /* tab deletion is disabled in focus mode */
        if (focusMode.enabled()) {
          focusMode.warn()
          return
        }

        this.style.transform = 'translateY(-100%)'

        setTimeout(function () {
          tabBar.events.emit('tab-closed', data.id)
        }, 150) // wait until the animation has completed
      }
    })

    tabBar.updateTab(data.id, tabEl)

    return tabEl
  },
  updateTab: function (tabId, tabEl = tabBar.getTab(tabId)) {
    var tabData = tabs.get(tabId)

    var tabTitle = (tabData.title || l('newTabLabel')).substring(0, 500)
    var titleEl = tabEl.querySelector('.title')
    titleEl.textContent = tabTitle

    tabEl.title = tabTitle
    if (tabData.private) {
      tabEl.title += ' (' + l('privateTab') + ')'
    }

    // update tab audio icon
    var audioButton = tabEl.querySelector('.tab-audio-button')
    tabAudio.updateButton(tabId, audioButton)

    tabEl.querySelectorAll('.permission-request-icon').forEach(el => el.remove())

    permissionRequests.getButtons(tabId).reverse().forEach(function (button) {
      tabEl.insertBefore(button, tabEl.children[0])
    })

    var secIcon = tabEl.getElementsByClassName('icon-tab-not-secure')[0]
    if (tabData.secure === false) {
      secIcon.hidden = false
    } else {
      secIcon.hidden = true
    }
  },
  updateAll: function () {
    empty(tabBar.containerInner)
    tabBar.tabElementMap = {}

    tabs.get().forEach(function (tab) {
      var el = tabBar.createTab(tab)
      tabBar.containerInner.appendChild(el)
      tabBar.tabElementMap[tab.id] = el
    })

    if (tabs.getSelected()) {
      tabBar.setActiveTab(tabs.getSelected())
    }
  },
  addTab: function (tabId) {
    var tab = tabs.get(tabId)
    var index = tabs.getIndex(tabId)

    var tabEl = tabBar.createTab(tab)
    tabBar.containerInner.insertBefore(tabEl, tabBar.containerInner.childNodes[index])
    tabBar.tabElementMap[tabId] = tabEl
  },
  removeTab: function (tabId) {
    var tabEl = tabBar.getTab(tabId)
    if (tabEl) {
      // The tab does not have a corresponding .tab-item element.
      // This happens when destroying tabs from other task where this .tab-item is not present
      tabBar.containerInner.removeChild(tabEl)
      delete tabBar.tabElementMap[tabId]
    }
  },
  handleDividerPreference: function (dividerPreference) {
    if (dividerPreference === true) {
      tabBar.navBar.classList.add('show-dividers')
    } else {
      tabBar.navBar.classList.remove('show-dividers')
    }
  }
}

settings.listen('showDividerBetweenTabs', function (dividerPreference) {
  tabBar.handleDividerPreference(dividerPreference)
})

/* progress bar events */

webviews.bindEvent('did-start-loading', function (tabId) {
  progressBar.update(tabBar.getTab(tabId).querySelector('.progress-bar'), 'start')
})

webviews.bindEvent('did-stop-loading', function (tabId) {
  progressBar.update(tabBar.getTab(tabId).querySelector('.progress-bar'), 'finish')
})

tasks.on('tab-updated', function (id, key) {
  var updateKeys = ['title', 'secure', 'url', 'muted', 'hasAudio']
  if (updateKeys.includes(key)) {
    tabBar.updateTab(id)
  }
})

permissionRequests.onChange(function (tabId) {
  tabBar.updateTab(tabId)
})

if (window.platformType === 'mac') {
  tabBar.dragulaInstance.containers = []
} else {
  tabBar.dragulaInstance.on('drop', function (el, target, source, sibling) {
    var tabId = el.getAttribute('data-tab')
    if (sibling) {
      var adjacentTabId = sibling.getAttribute('data-tab')
    }

    var oldTab = tabs.splice(tabs.getIndex(tabId), 1)[0]

    if (adjacentTabId) {
      var newIdx = tabs.getIndex(adjacentTabId)
    } else {
    // tab was inserted at end
      var newIdx = tabs.count()
    }
    tabs.splice(newIdx, 0, oldTab)
  })
}

tabBar.container.addEventListener('dragover', e => e.preventDefault())

tabBar.container.addEventListener('drop', e => {
  e.preventDefault()
  var data = e.dataTransfer
  require('browserUI.js').addTab(tabs.add({
    url: data.files[0] ? 'file://' + data.files[0].path : data.getData('text'),
    private: tabs.get(tabs.getSelected()).private
  }), { enterEditMode: false, openInBackground: !settings.get('openTabsInForeground') })
})

module.exports = tabBar

},{"browserUI.js":4,"dragula":77,"focusMode.js":9,"navbar/permissionRequests.js":16,"navbar/progressBar.js":17,"navbar/tabEditor.js":21,"readerView.js":33,"tabAudio.js":49,"util/settings/settings.js":63,"webviews.js":68}],20:[function(require,module,exports){
var webviews = require('webviews.js')
var settings = require('util/settings/settings.js')

const colorExtractorImage = document.createElement('img')
const colorExtractorCanvas = document.createElement('canvas')
const colorExtractorContext = colorExtractorCanvas.getContext('2d')

const textColorNN = require('ext/textColor/textColor.js')

const defaultColors = {
  private: ['rgb(58, 44, 99)', 'white'],
  lightMode: ['rgb(255, 255, 255)', 'black'],
  darkMode: ['rgb(40, 44, 52)', 'white']
}

function getHours () {
  const date = new Date()
  return date.getHours() + (date.getMinutes() / 60)
}

let hours = getHours()

// we cache the hours so we don't have to query every time we change the color
setInterval(function () {
  hours = getHours()
}, 5 * 60 * 1000)

function getColorFromImage (image) {
  const w = colorExtractorImage.width
  const h = colorExtractorImage.height
  colorExtractorCanvas.width = w
  colorExtractorCanvas.height = h

  const offset = Math.max(1, Math.round(0.00032 * w * h))

  colorExtractorContext.drawImage(colorExtractorImage, 0, 0, w, h)

  const data = colorExtractorContext.getImageData(0, 0, w, h).data

  let pixels = {}

  let d, add, sum

  for (let i = 0; i < data.length; i += 4 * offset) {
    d = Math.round(data[i] / 5) * 5 + ',' + Math.round(data[i + 1] / 5) * 5 + ',' + Math.round(data[i + 2] / 5) * 5

    add = 1
    sum = data[i] + data[i + 1] + data[i + 2]

    // very dark or light pixels shouldn't be counted as heavily
    if (sum < 310) {
      add = 0.35
    }

    if (sum < 50) {
      add = 0.01
    }

    if (data[i] > 210 || data[i + 1] > 210 || data[i + 2] > 210) {
      add = 0.5 - (0.0001 * sum)
    }

    if (pixels[d]) {
      pixels[d] = pixels[d] + add
    } else {
      pixels[d] = add
    }
  }

  // find the largest pixel set
  let largestPixelSet = null
  let ct = 0

  for (let k in pixels) {
    if (k === '255,255,255' || k === '0,0,0') {
      pixels[k] *= 0.05
    }
    if (pixels[k] > ct) {
      largestPixelSet = k
      ct = pixels[k]
    }
  }

  let res = largestPixelSet.split(',')

  for (let i = 0; i < res.length; i++) {
    res[i] = parseInt(res[i])
  }

  return res
}

function getColorFromString (str) {
  colorExtractorContext.clearRect(0, 0, 1, 1)
  colorExtractorContext.fillStyle = str
  colorExtractorContext.fillRect(0, 0, 1, 1)
  let rgb = Array.from(colorExtractorContext.getImageData(0, 0, 1, 1).data).slice(0, 3)

  return rgb
}

function getRGBString (c) {
  return 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')'
}

function getTextColor (bgColor) {
  const obj = {
    r: bgColor[0] / 255,
    g: bgColor[1] / 255,
    b: bgColor[2] / 255
  }
  const output = textColorNN(obj)
  if (output.black > 0.5) {
    return 'black'
  }
  return 'white'
}

function isLowContrast (color) {
  // is this a color that won't change very much when lightened or darkened?
  // TODO is lowContrast the best name for this?
  return color.filter(i => (i > 235 || i < 15)).length === 3
}

function adjustColorForTheme (color) {
  // dim the colors late at night or early in the morning if automatic dark mode is enabled
  const darkMode = settings.get('darkMode')
  const isAuto = (darkMode === undefined || darkMode === true || darkMode >= 0)

  let colorChange = 1
  if (isAuto) {
    if (hours > 20) {
      colorChange = 1.01 / (1 + 0.9 * Math.pow(Math.E, 1.5 * (hours - 22.75)))
    } else if (hours < 6.5) {
      colorChange = 1.04 / (1 + 0.9 * Math.pow(Math.E, -2 * (hours - 5)))
    }
  }

  if (window.isDarkMode) {
    colorChange = Math.min(colorChange, 0.6)
  }

  return [
    Math.round(color[0] * colorChange),
    Math.round(color[1] * colorChange),
    Math.round(color[2] * colorChange)
  ]
}

// https://stackoverflow.com/a/596243
function getLuminance (c) {
  return 0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2]
}

function setColor (bg, fg, isLowContrast) {
  const backgroundElements = document.getElementsByClassName('theme-background-color')
  const textElements = document.getElementsByClassName('theme-text-color')

  for (let i = 0; i < backgroundElements.length; i++) {
    backgroundElements[i].style.backgroundColor = bg
  }

  for (let i = 0; i < textElements.length; i++) {
    textElements[i].style.color = fg
  }

  if (fg === 'white') {
    document.body.classList.add('dark-theme')
  } else {
    document.body.classList.remove('dark-theme')
  }
  if (isLowContrast) {
    document.body.classList.add('theme-background-low-contrast')
  } else {
    document.body.classList.remove('theme-background-low-contrast')
  }
}

const tabColor = {
  useSiteTheme: true,
  initialize: function () {
    webviews.bindEvent('page-favicon-updated', function (tabId, favicons) {
      tabColor.updateFromImage(favicons, tabId, function () {
        if (tabId === tabs.getSelected()) {
          tabColor.updateColors()
        }
      })
    })

    webviews.bindEvent('did-change-theme-color', function (tabId, color) {
      tabColor.updateFromThemeColor(color, tabId)
      if (tabId === tabs.getSelected()) {
        tabColor.updateColors()
      }
    })

    /*
    Reset the icon color when the page changes, so that if the new page has no icon it won't inherit the old one
    But don't actually render anything here because the new icon won't have been received yet
    and we want to go from old color > new color, rather than old color > default > new color
     */
    webviews.bindEvent('did-start-navigation', function (tabId, url, isInPlace, isMainFrame, frameProcessId, frameRoutingId) {
      if (isMainFrame) {
        tabs.update(tabId, {
          backgroundColor: null,
          favicon: null
        })
      }
    })

    /*
    Always rerender once the page has finished loading
    this is needed to go back to default colors in case this page doesn't specify one
     */
    webviews.bindEvent('did-finish-load', function (tabId) {
      tabColor.updateColors()
    })

    // theme changes can affect the tab colors
    window.addEventListener('themechange', function (e) {
      tabColor.updateColors()
    })

    settings.listen('siteTheme', function (value) {
      if (value !== undefined) {
        tabColor.useSiteTheme = value
      }
    })

    tasks.on('tab-selected', this.updateColors)
  },
  updateFromThemeColor: function (color, tabId) {
    if (!color) {
      tabs.update(tabId, {
        themeColor: null
      })
      return
    }

    const rgb = getColorFromString(color)
    const rgbAdjusted = adjustColorForTheme(rgb)

    tabs.update(tabId, {
      themeColor: {
        color: getRGBString(rgbAdjusted),
        textColor: getTextColor(rgbAdjusted),
        isLowContrast: isLowContrast(rgbAdjusted)
      }
    })
  },
  updateFromImage: function (favicons, tabId, callback) {
    // private tabs always use a special color, we don't need to get the icon
    if (tabs.get(tabId).private === true) {
      return
    }

    requestIdleCallback(function () {
      colorExtractorImage.onload = function (e) {
        const backgroundColor = getColorFromImage(colorExtractorImage)
        const backgroundColorAdjusted = adjustColorForTheme(backgroundColor)

        tabs.update(tabId, {
          backgroundColor: {
            color: getRGBString(backgroundColorAdjusted),
            textColor: getTextColor(backgroundColorAdjusted),
            isLowContrast: isLowContrast(backgroundColorAdjusted)
          },
          favicon: {
            url: favicons[0],
            luminance: getLuminance(backgroundColor)
          }
        })

        if (callback) {
          callback()
        }
      }
      colorExtractorImage.src = favicons[0]
    }, {
      timeout: 1000
    })
  },
  updateColors: function () {
    const tab = tabs.get(tabs.getSelected())

    // private tabs have their own color scheme
    if (tab.private) {
      return setColor(defaultColors.private[0], defaultColors.private[1])
    }

    if (tabColor.useSiteTheme) {
      // use the theme color
      if (tab.themeColor && tab.themeColor.color) {
        return setColor(tab.themeColor.color, tab.themeColor.textColor, tab.themeColor.isLowContrast)
      }

      // use the colors extracted from the page icon
      if (tab.backgroundColor && tab.backgroundColor.color) {
        return setColor(tab.backgroundColor.color, tab.backgroundColor.textColor, tab.backgroundColor.isLowContrast)
      }
    }

    // otherwise use the default colors
    if (window.isDarkMode) {
      return setColor(defaultColors.darkMode[0], defaultColors.darkMode[1])
    }
    return setColor(defaultColors.lightMode[0], defaultColors.lightMode[1])
  }
}

module.exports = tabColor

},{"ext/textColor/textColor.js":2,"util/settings/settings.js":63,"webviews.js":68}],21:[function(require,module,exports){
var searchbar = require('searchbar/searchbar.js')
var webviews = require('webviews.js')
var modalMode = require('modalMode.js')
var urlParser = require('util/urlParser.js')
var keyboardNavigationHelper = require('util/keyboardNavigationHelper.js')
var bookmarkStar = require('navbar/bookmarkStar.js')
var contentBlockingToggle = require('navbar/contentBlockingToggle.js')

const tabEditor = {
  container: document.getElementById('tab-editor'),
  input: document.getElementById('tab-editor-input'),
  star: null,
  show: function (tabId, editingValue, showSearchbar) {
    /* Edit mode is not available in modal mode. */
    if (modalMode.enabled()) {
      return
    }

    tabEditor.container.hidden = false

    bookmarkStar.update(tabId, tabEditor.star)
    contentBlockingToggle.update(tabId, tabEditor.contentBlockingToggle)

    webviews.requestPlaceholder('editMode')

    document.body.classList.add('is-edit-mode')

    var currentURL = urlParser.getSourceURL(tabs.get(tabId).url)
    if (currentURL === 'min://newtab') {
      currentURL = ''
    }

    tabEditor.input.value = editingValue || currentURL
    tabEditor.input.focus()
    if (!editingValue) {
      tabEditor.input.select()
    }

    searchbar.show(tabEditor.input)

    if (showSearchbar !== false) {
      if (editingValue) {
        searchbar.showResults(editingValue, null)
      } else {
        searchbar.showResults('', null)
      }
    }

    /* animation */
    if (tabs.count() > 1) {
      requestAnimationFrame(function () {

        var item = document.querySelector(`.tab-item[data-tab="${tabId}"]`)
        var originCoordinates = item.getBoundingClientRect()

        var finalCoordinates = document.querySelector('#tabs').getBoundingClientRect()

        var translateX = Math.min(Math.round(originCoordinates.x - finalCoordinates.x) * 0.45, window.innerWidth)

        tabEditor.container.style.opacity = 0
        tabEditor.container.style.transform = `translateX(${translateX}px)`
        requestAnimationFrame(function () {
          tabEditor.container.style.transition = '0.135s all'
          tabEditor.container.style.opacity = 1
          tabEditor.container.style.transform = ''
        })
      })
    }
  },
  hide: function () {
    tabEditor.container.hidden = true
    tabEditor.container.removeAttribute('style')

    tabEditor.input.blur()
    searchbar.hide()

    document.body.classList.remove('is-edit-mode')

    webviews.hidePlaceholder('editMode')
  },
  initialize: function () {
    tabEditor.input.setAttribute('placeholder', l('searchbarPlaceholder'))

    tabEditor.star = bookmarkStar.create()
    tabEditor.container.appendChild(tabEditor.star)

    tabEditor.contentBlockingToggle = contentBlockingToggle.create()
    tabEditor.container.appendChild(tabEditor.contentBlockingToggle)

    keyboardNavigationHelper.addToGroup('searchbar', tabEditor.container)

    // keypress doesn't fire on delete key - use keyup instead
    tabEditor.input.addEventListener('keyup', function (e) {
      if (e.keyCode === 8) {
        searchbar.showResults(this.value, e)
      }
    })

    tabEditor.input.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) { // return key pressed; update the url
        if (this.getAttribute('data-autocomplete') && this.getAttribute('data-autocomplete').toLowerCase() === this.value.toLowerCase()) {
          // special case: if the typed input is capitalized differently from the actual URL that was autocompleted (but is otherwise the same), then we want to open the actual URL instead of what was typed.
          // see https://github.com/minbrowser/min/issues/314#issuecomment-276678613
          searchbar.openURL(this.getAttribute('data-autocomplete'), e)
        } else {
          searchbar.openURL(this.value, e)
        }
      } else if (e.keyCode === 9) {
        return
        // tab key, do nothing - in keydown listener
      } else if (e.keyCode === 16) {
        return
        // shift key, do nothing
      } else if (e.keyCode === 8) {
        return
        // delete key is handled in keyUp
      } else { // show the searchbar
        searchbar.showResults(this.value, e)
      }

      // on keydown, if the autocomplete result doesn't change, we move the selection instead of regenerating it to avoid race conditions with typing. Adapted from https://github.com/patrickburke/jquery.inlineComplete

      var v = e.key
      var sel = this.value.substring(this.selectionStart, this.selectionEnd).indexOf(v)

      if (v && sel === 0) {
        this.selectionStart += 1
        e.preventDefault()
      }
    })

    document.getElementById('webviews').addEventListener('click', function () {
      tabEditor.hide()
    })
  }
}

tabEditor.initialize()

module.exports = tabEditor

},{"modalMode.js":12,"navbar/bookmarkStar.js":13,"navbar/contentBlockingToggle.js":14,"searchbar/searchbar.js":45,"util/keyboardNavigationHelper.js":59,"util/urlParser.js":65,"webviews.js":68}],22:[function(require,module,exports){
const ProcessSpawner = require('util/process.js')
const path = window.require('path')

// Bitwarden password manager. Requires session key to unlock the vault.
class Bitwarden {
  constructor () {
    this.sessionKey = null
    this.lastCallList = {}
    this.name = 'Bitwarden'
  }

  getDownloadLink () {
    switch (window.platformType) {
      case 'mac':
        return 'https://vault.bitwarden.com/download/?app=cli&platform=macos'
        break
      case 'windows':
        return 'https://vault.bitwarden.com/download/?app=cli&platform=windows'
        break
      case 'linux':
        return 'https://vault.bitwarden.com/download/?app=cli&platform=linux'
        break
    }
  }

  getLocalPath () {
    return path.join(window.globalArgs['user-data-path'], 'tools', (platformType === 'windows' ? 'bw.exe' : 'bw'))
  }

  getSetupMode () {
    return 'dragdrop'
  }

  // Returns a Bitwarden-CLI tool path by checking possible locations.
  // First it checks if the tool was installed for Min specifically
  // by checking the settings value. If that is not set or doesn't point
  // to a valid executable, it checks if 'bw' is available globally.
  async _getToolPath () {
    const localPath = this.getLocalPath()
    if (localPath) {
      let local = false
      try {
        await fs.promises.access(localPath, fs.constants.X_OK)
        local = true
      } catch (e) { }
      if (local) {
        return localPath
      }
    }

    const global = await new ProcessSpawner('bw').checkCommandExists()

    if (global) {
      return 'bw'
    }

    return null
  }

  // Checks if Bitwarden integration is configured properly by trying to
  // obtain a valid Bitwarden-CLI tool path.
  async checkIfConfigured () {
    this.path = await this._getToolPath()
    return this.path != null
  }

  // Returns current Bitwarden-CLI status. If we have a session key, then
  // password store is considered unlocked.
  isUnlocked () {
    return this.sessionKey != null
  }

  // Tries to get a list of credential suggestions for a given domain name.
  // If password store is locked, the method will try to unlock it by
  async getSuggestions (domain) {
    if (this.lastCallList[domain] != null) {
      return this.lastCallList[domain]
    }

    const command = this.path
    if (!command) {
      return Promise.resolve([])
    }

    if (this.sessionKey == null) {
      throw new Error()
    }

    this.lastCallList[domain] = this.loadSuggestions(command, domain).then(suggestions => {
      this.lastCallList[domain] = null
      return suggestions
    }).catch(ex => {
      this.lastCallList[domain] = null
    })

    return this.lastCallList[domain]
  }

  // Loads credential suggestions for given domain name.
  async loadSuggestions (command, domain) {
    try {
      const process = new ProcessSpawner(command, ['list', 'items', '--url', this.sanitize(domain), '--session', this.sessionKey])
      const data = await process.execute()

      const matches = JSON.parse(data)
      const credentials = matches.map(match => {
        const { login: { username, password } } = match
        return { username, password, manager: 'Bitwarden' }
      })

      return credentials
    } catch (ex) {
      const { error, data } = ex
      console.error('Error accessing Bitwarden CLI. STDOUT: ' + data + '. STDERR: ' + error)
      return []
    }
  }

  async forceSync (command) {
    try {
      const process = new ProcessSpawner(command, ['sync', '--session', this.sessionKey])
      await process.execute()
    } catch (ex) {
      const { error, data } = ex
      console.error('Error accessing Bitwarden CLI. STDOUT: ' + data + '. STDERR: ' + error)
    }
  }

  // Tries to unlock the password store with given master password.
  async unlockStore (password) {
    try {
      const process = new ProcessSpawner(this.path, ['unlock', '--raw', password])
      const result = await process.execute()

      if (!result) {
        throw new Error()
      }

      this.sessionKey = result
      await this.forceSync(this.path)

      return true
    } catch (ex) {
      const { error, data } = ex
      console.error('Error accessing Bitwarden CLI. STDOUT: ' + data + '. STDERR: ' + error)
      throw ex
    }
  }

  getSignInRequirements () {
    return ['email', 'password']
  }

  async signInAndSave (credentials, path = this.path) {
    // It's possible to be already logged in
    const logoutProcess = new ProcessSpawner(path, ['logout'])
    try {
      await logoutProcess.execute()
    } catch (e) {
      console.warn(e)
    }
    const process = new ProcessSpawner(path, ['login', '--raw', credentials.email, credentials.password])

    await process.execute()

    return true
  }

  // Basic domain name cleanup. Removes any non-ASCII symbols.
  sanitize (domain) {
    return domain.replace(/[^a-zA-Z0-9.-]/g, '')
  }
}

module.exports = Bitwarden

},{"util/process.js":60}],23:[function(require,module,exports){
/*
A note about the keychain storage format:
keytar saves entries as (service, account, password), but only supports listing all entries given a particular service
We need a way to find all passwords created by Min, so we use "min saved password" as the service name,
and then store both the account domain and username in the "account" field as a JS object
*/

class Keychain {
  constructor () {
    this.name = 'Built-in password manager'
    this.keychainServiceName = 'Min saved password'
  }

  getDownloadLink () {
    return null
  }

  getLocalPath () {
    return null
  }

  getSetupMode () {
    return null
  }

  async checkIfConfigured () {
    return true
  }

  isUnlocked () {
    return true
  }

  async getSuggestions (domain) {
    return ipc.invoke('keychainFindCredentials', this.keychainServiceName).then(function (results) {
      return results
        .filter(function (result) {
          try {
            return JSON.parse(result.account).domain === domain
          } catch (e) {
            return false
          }
        })
        .map(function (result) {
          return {
            username: JSON.parse(result.account).username,
            password: result.password,
            manager: 'Keychain'
          }
        })
    })
  }

  getSignInRequirements () {
    return []
  }

  saveCredential (domain, username, password) {
    ipc.invoke('keychainSetPassword', this.keychainServiceName, JSON.stringify({ domain: domain, username: username }), password)
  }

  deleteCredential (domain, username) {
    ipc.invoke('keychainDeletePassword', this.keychainServiceName, JSON.stringify({ domain: domain, username: username }))
  }

  getAllCredentials () {
    return ipc.invoke('keychainFindCredentials', this.keychainServiceName).then(function (results) {
      return results.map(function (result) {
        return {
          domain: JSON.parse(result.account).domain,
          username: JSON.parse(result.account).username,
          password: result.password,
          manager: 'Keychain'
        }
      })
    })
  }
}

module.exports = Keychain

},{}],24:[function(require,module,exports){
var { ipcRenderer } = window.require('electron')
var fs = window.require('fs')
var path = window.require('path')

var webviews = require('webviews.js')
var settings = require('util/settings/settings.js')
var browserUI = require('browserUI.js')
var modalMode = require('modalMode.js')
var ProcessSpawner = require('util/process.js')

var dialog = document.getElementById('manager-setup-dialog')

var primaryInstructions = document.getElementById('manager-setup-instructions-primary')
var secondaryInstructions = document.getElementById('manager-setup-instructions-secondary')
var dragBox = document.getElementById('manager-setup-drop-box')

const setupDialog = {
  manager: null,
  setupMode: null,
  installerCompletionTimeout: null,
  show: function (manager) {
    setupDialog.manager = manager
    setupDialog.setupMode = manager.getSetupMode()

    document.getElementById('manager-setup-heading').textContent = l('passwordManagerSetupHeading').replace('%p', manager.name)
    document.getElementById('password-manager-setup-link').textContent = l('passwordManagerSetupLink').replace('%p', manager.name)
    document.getElementById('password-manager-setup-link-installer').textContent = l('passwordManagerSetupLinkInstaller').replace('%p', manager.name)

    if (setupDialog.setupMode === 'installer') {
      primaryInstructions.hidden = true
      secondaryInstructions.hidden = false

      setupDialog.installerCompletionTimeout = setTimeout(waitForInstallerComplete, 2000)
    } else {
      primaryInstructions.hidden = false
      secondaryInstructions.hidden = true
    }

    modalMode.toggle(true, {
      onDismiss: function () {
        settings.set('passwordManager', null)
        setupDialog.hide()
      }
    })

    dialog.hidden = false
    webviews.requestPlaceholder('managerSetup')
  },
  hide: function () {
    setupDialog.manager = null
    setupDialog.setupMode = null
    clearTimeout(setupDialog.installerCompletionTimeout)
    setupDialog.installerCompletionTimeout = null

    modalMode.toggle(false)
    dialog.hidden = true
    webviews.hidePlaceholder('managerSetup')
  },
  initialize: function () {
    document.getElementById('manager-setup-disable').addEventListener('click', function () {
      settings.set('passwordManager', null)
      setupDialog.hide()
    })

    document.getElementById('manager-setup-close').addEventListener('click', function () {
      settings.set('passwordManager', null)
      setupDialog.hide()
    })

    document.getElementById('password-manager-setup-link').addEventListener('click', function () {
      browserUI.addTab(tabs.add({
        url: setupDialog.manager.getDownloadLink()
      }), { openInBackground: true })
    })

    document.getElementById('password-manager-setup-link-installer').addEventListener('click', function () {
      browserUI.addTab(tabs.add({
        url: setupDialog.manager.getDownloadLink()
      }), { openInBackground: true })
    })

    dragBox.ondragover = () => {
      return false
    }

    dragBox.ondragleave = () => {
      return false
    }

    dragBox.ondragend = () => {
      return false
    }

    dragBox.ondrop = (e) => {
      e.preventDefault()

      if (e.dataTransfer.files.length === 0) {
        return
      }

      dragBox.innerHTML = l('passwordManagerSetupInstalling')

      const filePath = e.dataTransfer.files[0].path

      // try to filter out anything that isn't an executable (note: not 100% accurate)
      if (e.dataTransfer.files[0].type !== '' && !e.dataTransfer.files[0].name.endsWith('.exe')) {
        dragBox.innerHTML = l('passwordManagerSetupRetry')
        return
      }

      if (setupDialog.setupMode === 'installer') {
        launchInstaller(filePath, window.platformType)
      } else {
        install(filePath).then(afterInstall)
      }

      return false
    }
  }
}

function waitForInstallerComplete () {
  setupDialog.manager.checkIfConfigured().then(function (configured) {
    if (configured) {
      afterInstall()
      setupDialog.installerCompletionTimeout = null
    } else {
      setupDialog.installerCompletionTimeout = setTimeout(waitForInstallerComplete, 2000)
    }
  })
}

// Install the tool into the Min user folder.
function install (filePath, callback) {
  return new Promise((resolve, reject) => {
    try {
      const toolsDir = path.join(window.globalArgs['user-data-path'], 'tools')
      if (!fs.existsSync(toolsDir)) {
        fs.mkdirSync(toolsDir)
      }

      const targetFilePath = setupDialog.manager.getLocalPath()
      fs.createReadStream(filePath).pipe(fs.createWriteStream(targetFilePath)).on('finish', function () {
        fs.chmodSync(targetFilePath, '755')
        resolve(targetFilePath)
      }).on('error', function (error) {
        reject(error)
      })
    } catch (e) {
      reject(e)
    }
  })
}

// Launch installer file.
function launchInstaller (filePath, platform) {
  if (platform === 'mac') {
    return new ProcessSpawner('open', [filePath]).execute()
  } else {
    return new ProcessSpawner(filePath).execute()
  }
}

function afterInstall (toolPath) {
  var signInFields = [
    { placeholder: l('email'), id: 'email', type: 'text' },
    { placeholder: l('password'), id: 'password', type: 'password' },
    { placeholder: l('secretKey'), id: 'secretKey', type: 'password' }
  ].filter(f => setupDialog.manager.getSignInRequirements().includes(f.id))

  // Verify the tool by trying to use it to unlock the password store.
  const data = ipcRenderer.sendSync('prompt', {
    text: l('passwordManagerSetupSignIn'),
    values: signInFields,
    ok: l('dialogConfirmButton'),
    cancel: l('dialogSkipButton'),
    width: 500,
    height: 220
  })

  for (const key in data) {
    if (data[key] === '') {
      throw new Error('no credentials entered')
    }
  }

  setupDialog.manager.signInAndSave(data, toolPath)
    .then(() => {
      setupDialog.hide()
    })
    .catch(function (e) {
      console.warn(e)
      if (setupDialog.setupMode === 'installer') {
        // show the dialog again
        afterInstall()
      } else {
        // Cleanup after we failed.
        const targetFilePath = setupDialog.manager.getLocalPath()
        if (fs.existsSync(targetFilePath)) {
          fs.unlinkSync(targetFilePath)
        }

        const message = (e.error || '').replace(/\n$/gm, '')
        dragBox.innerHTML = l('passwordManagerSetupUnlockError') + message + ' ' + l('passwordManagerSetupRetry')
      }
    })
}

setupDialog.initialize()

module.exports = setupDialog

},{"browserUI.js":4,"modalMode.js":12,"util/process.js":60,"util/settings/settings.js":63,"webviews.js":68}],25:[function(require,module,exports){
const ProcessSpawner = require('util/process.js')
const path = window.require('path')

// 1Password password manager. Requires session key to unlock the vault.
class OnePassword {
  constructor () {
    this.sessionKey = null
    this.lastCallList = {}
    this.name = '1Password'
  }

  getDownloadLink () {
    switch (window.platformType) {
      case 'mac':
        return 'https://cache.agilebits.com/dist/1P/op/pkg/v0.10.0/op_darwin_amd64_v0.10.0.pkg'
        break
      case 'windows':
        return 'https://cache.agilebits.com/dist/1P/op/pkg/v0.10.0/op_windows_amd64_v0.10.0.zip'
        break
      case 'linux':
        return 'https://cache.agilebits.com/dist/1P/op/pkg/v0.10.0/op_linux_amd64_v0.10.0.zip'
        break
    }
  }

  getLocalPath () {
    return path.join(window.globalArgs['user-data-path'], 'tools', (platformType === 'windows' ? 'op.exe' : 'op'))
  }

  getSetupMode () {
    return (platformType === 'mac') ? 'installer' : 'dragdrop'
  }

  // Returns a 1Password-CLI tool path by checking possible locations.
  // First it checks if the tool was installed for Min specifically
  // by checking the settings value. If that is not set or doesn't point
  // to a valid executable, it checks if 'op' is available globally.
  async _getToolPath () {
    const localPath = this.getLocalPath()
    if (localPath) {
      let local = false
      try {
        await fs.promises.access(localPath, fs.constants.X_OK)
        local = true
      } catch (e) { }
      if (local) {
        return localPath
      }
    }

    const global = await new ProcessSpawner('op').checkCommandExists()

    if (global) {
      return 'op'
    }

    return null
  }

  // Checks if 1Password integration is configured properly by trying to
  // obtain a valid 1Password-CLI tool path.
  async checkIfConfigured () {
    this.path = await this._getToolPath()
    return this.path != null
  }

  // Returns current 1Password-CLI status. If we have a session key, then
  // password store is considered unlocked.
  isUnlocked () {
    return this.sessionKey != null
  }

  // Tries to get a list of credential suggestions for a given domain name.
  // If password store is locked, the method will try to unlock it by
  async getSuggestions (domain) {
    if (this.lastCallList[domain] != null) {
      return this.lastCallList[domain]
    }

    const command = this.path
    if (!command) {
      return Promise.resolve([])
    }

    if (this.sessionKey == null) {
      throw new Error()
    }

    this.lastCallList[domain] = this.loadSuggestions(command, domain).then(suggestions => {
      this.lastCallList[domain] = null
      return suggestions
    }).catch(ex => {
      this.lastCallList[domain] = null
    })

    return this.lastCallList[domain]
  }

  // Loads credential suggestions for given domain name.
  async loadSuggestions (command, domain) {
    try {
      console.log('loadSuggestions')
      const process = new ProcessSpawner(command, ['list', 'items', '--session=' + this.sessionKey])
      const data = await process.executeSyncInAsyncContext()
      console.log('got data of length ', data.length)

      const matches = JSON.parse(data)
      console.log('got matches of length', matches.length)

      const credentials = matches.map(match => match).filter((match) => {
        try {
          var matchHost = new URL(match.overview.url).hostname
          if (matchHost.startsWith('www.')) {
            matchHost = matchHost.slice(4)
          }
          return matchHost === domain
        } catch (e) {
          return false
        }
      })

      var expandedCredentials = []

      for (var i = 0; i < credentials.length; i++) {
        const item = credentials[i]
        const process = new ProcessSpawner(command, ['get', 'item', item.uuid, '--session=' + this.sessionKey])
        const output = await process.executeSyncInAsyncContext()
        const credential = JSON.parse(output)

        var usernameFields = credential.details.fields.filter(f => f.designation === 'username')
        var passwordFields = credential.details.fields.filter(f => f.designation === 'password')

        if (usernameFields.length > 0 && passwordFields.length > 0) {
          expandedCredentials.push({
            username: usernameFields[0].value,
            password: passwordFields[0].value,
            manager: '1Password'
          })
        }
      }

      return expandedCredentials
    } catch (ex) {
      const { error, data } = ex
      console.error('Error accessing 1Password CLI. STDOUT: ' + data + '. STDERR: ' + error, ex)
      return []
    }
  }

  // Tries to unlock the password store with given master password.
  async unlockStore (password) {
    try {
      const process = new ProcessSpawner(this.path, ['signin', '--raw'])
      const result = await process.executeSyncInAsyncContext(password)
      // no session key -> invalid password
      if (!result) {
        throw new Error()
      }

      this.sessionKey = result
      return true
    } catch (ex) {
      const { error, data } = ex
      console.error('Error accessing 1Password CLI. STDOUT: ' + data + '. STDERR: ' + error)
      throw ex
    }
  }

  getSignInRequirements () {
    return ['email', 'password', 'secretKey']
  }

  async signInAndSave (credentials, path = this.path) {
    // It's possible to be already logged in
    const logoutProcess = new ProcessSpawner(path, ['signout'])
    try {
      await logoutProcess.executeSyncInAsyncContext()
    } catch (e) {
      console.warn(e)
    }
    const process = new ProcessSpawner(path, ['signin', '--raw', 'my.1password.com', credentials.email, credentials.secretKey])

    const key = await process.executeSyncInAsyncContext(credentials.password)
    if (!key) {
      throw new Error()
    }

    return true
  }
}

module.exports = OnePassword

},{"util/process.js":60}],26:[function(require,module,exports){
const webviews = require('webviews.js')
const PasswordManagers = require('passwordManager/passwordManager.js')

const passwordCapture = {
  bar: document.getElementById('password-capture-bar'),
  description: document.getElementById('password-capture-description'),
  usernameInput: document.getElementById('password-capture-username'),
  passwordInput: document.getElementById('password-capture-password'),
  revealButton: document.getElementById('password-capture-reveal-password'),
  saveButton: document.getElementById('password-capture-save'),
  closeButton: document.getElementById('password-capture-ignore'),
  currentDomain: null,
  barHeight: 0,
  showCaptureBar: function (username, password) {
    passwordCapture.description.textContent = l('passwordCaptureSavePassword').replace('%s', passwordCapture.currentDomain)
    passwordCapture.bar.hidden = false

    passwordCapture.passwordInput.type = 'password'
    passwordCapture.revealButton.classList.add('carbon:view')
    passwordCapture.revealButton.classList.remove('carbon:view-off')

    passwordCapture.usernameInput.value = username || ''
    passwordCapture.passwordInput.value = password || ''

    passwordCapture.barHeight = passwordCapture.bar.getBoundingClientRect().height
    webviews.adjustMargin([passwordCapture.barHeight, 0, 0, 0])
  },
  hideCaptureBar: function () {
    webviews.adjustMargin([passwordCapture.barHeight * -1, 0, 0, 0])

    passwordCapture.bar.hidden = true
    passwordCapture.usernameInput.value = ''
    passwordCapture.passwordInput.value = ''
    passwordCapture.currentDomain = null
  },
  togglePasswordVisibility: function () {
    if (passwordCapture.passwordInput.type === 'password') {
      passwordCapture.passwordInput.type = 'text'
      passwordCapture.revealButton.classList.remove('carbon:view')
      passwordCapture.revealButton.classList.add('carbon:view-off')
    } else {
      passwordCapture.passwordInput.type = 'password'
      passwordCapture.revealButton.classList.add('carbon:view')
      passwordCapture.revealButton.classList.remove('carbon:view-off')
    }
  },
  handleRecieveCredentials: function (tab, args, frameId) {
    var domain = args[0][0]
    if (domain.startsWith('www.')) {
      domain = domain.slice(4)
    }

    var username = args[0][1][0] || ''
    var password = args[0][2][0] || ''

    PasswordManagers.getConfiguredPasswordManager().then(function (manager) {
      if (!manager || !manager.saveCredential) {
        // the password can't be saved
        return
      }

      // check if this username/password combo is already saved
      manager.getSuggestions(domain).then(function (credentials) {
        var alreadyExists = credentials.some(cred => cred.username === username && cred.password === password)
        if (!alreadyExists) {
          if (!passwordCapture.bar.hidden) {
            passwordCapture.hideCaptureBar()
          }

          passwordCapture.currentDomain = domain
          passwordCapture.showCaptureBar(username, password)
        }
      })
    })
  },
  initialize: function () {
    passwordCapture.usernameInput.placeholder = l('username')
    passwordCapture.passwordInput.placeholder = l('password')

    webviews.bindIPC('password-form-filled', passwordCapture.handleRecieveCredentials)

    passwordCapture.saveButton.addEventListener('click', function () {
      if (passwordCapture.usernameInput.checkValidity() && passwordCapture.passwordInput.checkValidity()) {
        PasswordManagers.getConfiguredPasswordManager().then(function (manager) {
          manager.saveCredential(passwordCapture.currentDomain, passwordCapture.usernameInput.value, passwordCapture.passwordInput.value)

          passwordCapture.hideCaptureBar()
        })
      }
    })

    passwordCapture.closeButton.addEventListener('click', passwordCapture.hideCaptureBar)
    passwordCapture.revealButton.addEventListener('click', passwordCapture.togglePasswordVisibility)

    // the bar can change height when the window is resized, so the webview needs to be resized in response
    window.addEventListener('resize', function () {
      if (!passwordCapture.bar.hidden) {
        var oldHeight = passwordCapture.barHeight
        passwordCapture.barHeight = passwordCapture.bar.getBoundingClientRect().height
        webviews.adjustMargin([passwordCapture.barHeight - oldHeight, 0, 0, 0])
      }
    })
  }
}

module.exports = passwordCapture

},{"passwordManager/passwordManager.js":27,"webviews.js":68}],27:[function(require,module,exports){
const settings = require('util/settings/settings.js')
const webviews = require('webviews.js')
const keybindings = require('keybindings.js')
const ProcessSpawner = require('util/process.js')

const Bitwarden = require('js/passwordManager/bitwarden.js')
const OnePassword = require('js/passwordManager/onePassword.js')
const Keychain = require('js/passwordManager/keychain.js')

const PasswordManagers = {
  // List of supported password managers. Each password manager is expected to
  // have getSuggestions(domain) method that returns a Promise with credentials
  // suggestions matching given domain name.
  managers: [
    new Bitwarden(),
    new OnePassword(),
    new Keychain()
  ],
  // Returns an active password manager, which is the one that is selected in app's
  // settings.
  getActivePasswordManager: function () {
    if (PasswordManagers.managers.length === 0) {
      return null
    }

    const managerSetting = settings.get('passwordManager')
    if (managerSetting == null) {
      return PasswordManagers.managers.find(mgr => mgr.name === 'Built-in password manager')
    }

    return PasswordManagers.managers.find(mgr => mgr.name === managerSetting.name)
  },
  getConfiguredPasswordManager: async function () {
    const manager = PasswordManagers.getActivePasswordManager()
    if (!manager) {
      return null
    }

    const configured = await manager.checkIfConfigured()
    if (!configured) {
      return null
    }

    return manager
  },
  // Shows a prompt dialog for password store's master password.
  promptForMasterPassword: async function (manager) {
    return new Promise((resolve, reject) => {
      const { password } = ipc.sendSync('prompt', {
        text: l('passwordManagerUnlock').replace('%p', manager.name),
        values: [{ placeholder: l('password'), id: 'password', type: 'password' }],
        ok: l('dialogConfirmButton'),
        cancel: l('dialogSkipButton'),
        height: 160
      })
      if (password === null || password === '') {
        reject()
      } else {
        resolve(password)
      }
    })
  },
  unlock: async function (manager) {
    let success = false
    while (!success) {
      let password
      try {
        password = await PasswordManagers.promptForMasterPassword(manager)
      } catch (e) {
        // dialog was canceled
        break
      }
      try {
        success = await manager.unlockStore(password)
      } catch (e) {
        // incorrect password, prompt again
      }
    }
    return success
  },
  // Binds IPC events.
  initialize: function () {
    // Called when page preload script detects a form with username and password.
    webviews.bindIPC('password-autofill', function (tab, args, frameId) {
      // We expect hostname of the source page/frame as a parameter.
      if (args.length == 0) {
        return
      }
      const hostname = args[0]

      PasswordManagers.getConfiguredPasswordManager().then(async (manager) => {
        if (!manager) {
          return
        }

        if (!manager.isUnlocked()) {
          await PasswordManagers.unlock(manager)
        }

        var domain = hostname
        if (domain.startsWith('www.')) {
          domain = domain.slice(4)
        }

        manager.getSuggestions(domain).then(credentials => {
          if (credentials != null) {
            webviews.callAsync(tab, 'getURL', function (err, topLevelURL) {
              if (err) {
                console.warn(err)
                return
              }
              var topLevelDomain = new URL(topLevelURL).hostname
              if (topLevelDomain.startsWith('www.')) {
                topLevelDomain = topLevelDomain.slice(4)
              }
              if (domain !== topLevelDomain) {
                console.warn("autofill isn't supported for 3rd-party frames")
                return
              }
              webviews.callAsync(tab, 'sendToFrame', [frameId, 'password-autofill-match', {
                credentials,
                hostname
              }])
            })
          }
        }).catch(e => {
          console.error('Failed to get password suggestions: ' + e.message)
        })
      })
    })

    webviews.bindIPC('password-autofill-check', function (tab, args, frameId) {
      if (PasswordManagers.getActivePasswordManager()) {
        webviews.callAsync(tab, 'sendToFrame', [frameId, 'password-autofill-enabled'])
      }
    })

    keybindings.defineShortcut('fillPassword', function () {
      webviews.callAsync(tabs.getSelected(), 'send', ['password-autofill-shortcut'])
    })
  }
}

module.exports = PasswordManagers

},{"js/passwordManager/bitwarden.js":22,"js/passwordManager/keychain.js":23,"js/passwordManager/onePassword.js":25,"keybindings.js":10,"util/process.js":60,"util/settings/settings.js":63,"webviews.js":68}],28:[function(require,module,exports){
const webviews = require('webviews.js')
const PasswordManagers = require('passwordManager/passwordManager.js')
const modalMode = require('modalMode.js')

const passwordViewer = {
  container: document.getElementById('password-viewer'),
  listContainer: document.getElementById('password-viewer-list'),
  emptyHeading: document.getElementById('password-viewer-empty'),
  closeButton: document.querySelector('#password-viewer .modal-close-button'),
  createCredentialListElement: function (credential) {
    var container = document.createElement('div')

    var domainEl = document.createElement('span')
    domainEl.className = 'domain-name'
    domainEl.textContent = credential.domain
    container.appendChild(domainEl)

    var usernameEl = document.createElement('input')
    usernameEl.value = credential.username
    usernameEl.disabled = true
    container.appendChild(usernameEl)

    var passwordEl = document.createElement('input')
    passwordEl.type = 'password'
    passwordEl.value = credential.password
    passwordEl.disabled = true
    container.appendChild(passwordEl)

    var revealButton = document.createElement('button')
    revealButton.className = 'i carbon:view'
    revealButton.addEventListener('click', function () {
      if (passwordEl.type === 'password') {
        passwordEl.type = 'text'
        revealButton.classList.remove('carbon:view')
        revealButton.classList.add('carbon:view-off')
      } else {
        passwordEl.type = 'password'
        revealButton.classList.add('carbon:view')
        revealButton.classList.remove('carbon:view-off')
      }
    })
    container.appendChild(revealButton)

    var deleteButton = document.createElement('button')
    deleteButton.className = 'i carbon:trash-can'
    container.appendChild(deleteButton)

    deleteButton.addEventListener('click', function () {
      if (confirm(l('deletePassword').replace('%s', credential.domain))) {
        PasswordManagers.getConfiguredPasswordManager().then(function (manager) {
          manager.deleteCredential(credential.domain, credential.username)
          container.remove()
        })
      }
    })

    return container
  },
  show: function () {
    PasswordManagers.getConfiguredPasswordManager().then(function (manager) {
      if (!manager.getAllCredentials) {
        throw new Error('unsupported password manager')
      }

      manager.getAllCredentials().then(function (credentials) {
        webviews.requestPlaceholder('passwordViewer')
        modalMode.toggle(true, {
          onDismiss: passwordViewer.hide
        })
        passwordViewer.container.hidden = false

        credentials.forEach(function (cred) {
          passwordViewer.listContainer.appendChild(passwordViewer.createCredentialListElement(cred))
        })

        passwordViewer.emptyHeading.hidden = (credentials.length !== 0)
      })
    })
  },
  hide: function () {
    webviews.hidePlaceholder('passwordViewer')
    modalMode.toggle(false)
    empty(passwordViewer.listContainer)
    passwordViewer.container.hidden = true
  },
  initialize: function () {
    passwordViewer.closeButton.addEventListener('click', passwordViewer.hide)
    webviews.bindIPC('showCredentialList', function () {
      passwordViewer.show()
    })
  }
}

module.exports = passwordViewer

},{"modalMode.js":12,"passwordManager/passwordManager.js":27,"webviews.js":68}],29:[function(require,module,exports){
/* handles viewing pdf files using pdf.js. Recieves events from main.js will-download */

const webviews = require('webviews.js')
const urlParser = require('util/urlParser.js')

const PDFViewer = {
  url: {
    base: urlParser.getFileURL(__dirname + '/pages/pdfViewer/index.html'),
    queryString: '?url=%l'
  },
  isPDFViewer: function (tabId) {
    return tabs.get(tabId).url.startsWith(PDFViewer.url.base)
  },
  printPDF: function (viewerTabId) {
    if (!PDFViewer.isPDFViewer(viewerTabId)) {
      throw new Error("attempting to print in a tab that isn't a PDF viewer")
    }

    webviews.callAsync(tabs.getSelected(), 'executeJavaScript', 'parentProcessActions.printPDF()')
  },
  savePDF: function (viewerTabId) {
    if (!PDFViewer.isPDFViewer(viewerTabId)) {
      throw new Error("attempting to save in a tab that isn't a PDF viewer")
    }

    webviews.callAsync(tabs.getSelected(), 'executeJavaScript', 'parentProcessActions.downloadPDF()')
  },
  startFindInPage: function (viewerTabId) {
    if (!PDFViewer.isPDFViewer(viewerTabId)) {
      throw new Error("attempting to call startFindInPage in a tab that isn't a PDF viewer")
    }

    webviews.callAsync(tabs.getSelected(), 'executeJavaScript', 'parentProcessActions.startFindInPage()')
  },
  endFindInPage: function (viewerTabId) {
    if (!PDFViewer.isPDFViewer(viewerTabId)) {
      throw new Error("attempting to call endFindInPage in a tab that isn't a PDF viewer")
    }

    webviews.callAsync(tabs.getSelected(), 'executeJavaScript', 'parentProcessActions.endFindInPage()')
  },
  handlePDFOpenEvent: function (event, data) {
    if (!data.tabId) {
      var matchingTabs = tabs.get().filter(t => t.url === data.url).sort((a, b) => { return b.lastActivity - a.lastActivity })
      if (matchingTabs[0]) {
        data.tabId = matchingTabs[0].id
      }
    }
    if (!data.tabId) {
      console.warn('missing tab ID for PDF', data.url, tabs.get().map(t => t.url))
      return
    }
    var PDFurl = PDFViewer.url.base + PDFViewer.url.queryString.replace('%l', encodeURIComponent(data.url))
    webviews.update(data.tabId, PDFurl)
  },
  initialize: function () {
    ipc.on('openPDF', PDFViewer.handlePDFOpenEvent)
  }
}

module.exports = PDFViewer

},{"util/urlParser.js":65,"webviews.js":68}],30:[function(require,module,exports){
/* global Worker tabs */

var webviews = require('webviews.js')
const db = require('util/database.js').db
const searchEngine = require('util/searchEngine.js')
const urlParser = require('util/urlParser.js')

const places = {
  savePage: function (tabId, extractedText) {
    /* this prevents pages that are immediately left from being saved to history, and also gives the page-favicon-updated event time to fire (so the colors saved to history are correct). */
    setTimeout(function () {
      const tab = tabs.get(tabId)
      if (tab) {
        const data = {
          url: urlParser.getSourceURL(tab.url), // for PDF viewer and reader mode, save the original page URL and not the viewer URL
          title: tab.title,
          color: tab.backgroundColor,
          extractedText: extractedText
        }

        places.worker.postMessage({
          action: 'updatePlace',
          pageData: data,
          flags: {
            isNewVisit: true
          }
        })
      }
    }, 500)
  },
  receiveHistoryData: function (tabId, args) {
    // called when js/preload/textExtractor.js returns the page's text content

    var tab = tabs.get(tabId)
    var data = args[0]

    if (tab.url.startsWith('data:') || tab.url.length > 5000) {
      /*
      very large URLs cause performance issues. In particular:
      * they can cause the database to grow abnormally large, which increases memory usage and startup time
      * they can cause the browser to hang when they are displayed in search results
      To avoid this, don't save them to history
      */
      return
    }

    /* if the page is an internal page, it normally shouldn't be saved,
     unless the page represents another page (such as the PDF viewer or reader view) */
    var isNonIndexableInternalPage = urlParser.isInternalURL(tab.url) && urlParser.getSourceURL(tab.url) === tab.url
    var isSearchPage = !!(searchEngine.getSearch(tab.url))

    // full-text data from search results isn't useful
    if (isSearchPage) {
      data.extractedText = ''
    }

    // don't save to history if in private mode, or the page is a browser page (unless it contains the content of a normal page)
    if (tab.private === false && !isNonIndexableInternalPage) {
      places.savePage(tabId, data.extractedText)
    }
  },
  callbacks: [],
  addWorkerCallback: function (callback) {
    const callbackId = (Date.now() / 1000) + Math.random()
    places.callbacks.push({ id: callbackId, fn: callback })
    return callbackId
  },
  runWorkerCallback: function (id, data) {
    for (var i = 0; i < places.callbacks.length; i++) {
      if (places.callbacks[i].id === id) {
        places.callbacks[i].fn(data)
        places.callbacks.splice(i, 1)
      }
    }
  },
  deleteHistory: function (url) {
    places.worker.postMessage({
      action: 'deleteHistory',
      pageData: {
        url: url
      }
    })
  },
  deleteAllHistory: function () {
    places.worker.postMessage({
      action: 'deleteAllHistory'
    })
  },
  searchPlaces: function (text, callback, options) {
    const callbackId = places.addWorkerCallback(callback)
    places.worker.postMessage({
      action: 'searchPlaces',
      text: text,
      callbackId: callbackId,
      options: options
    })
  },
  searchPlacesFullText: function (text, callback) {
    const callbackId = places.addWorkerCallback(callback)
    places.worker.postMessage({
      action: 'searchPlacesFullText',
      text: text,
      callbackId: callbackId
    })
  },
  getPlaceSuggestions: function (url, callback) {
    const callbackId = places.addWorkerCallback(callback)
    places.worker.postMessage({
      action: 'getPlaceSuggestions',
      text: url,
      callbackId: callbackId
    })
  },
  onMessage: function (e) { // assumes this is from a search operation
    places.runWorkerCallback(e.data.callbackId, e.data.result)
  },
  updateItem: function (url, fields, callback) {
    const callbackId = places.addWorkerCallback(callback)
    places.worker.postMessage({
      action: 'updatePlace',
      pageData: {
        url: url,
        ...fields
      },
      callbackId: callbackId
    })
  },
  toggleBookmarked: function (tabId, callback) { // Toggles whether a URL is bookmarked or not
    const url = tabs.get(tabId).url

    db.places.where('url').equals(url).first(function (item) {
      if (item && item.isBookmarked) {
        places.updateItem(url, { isBookmarked: false }, function () {
          callback(false)
        })
      } else {
        // if this page is open in a private tab, the title may not be saved already, so it needs to be included here
        places.updateItem(url, {
          isBookmarked: true,
          title: tabs.get(tabId).title
        }, function () {
          callback(true)
        })
      }
    })
  },
  toggleTag: function (url, tag) {
    db.places.where('url').equals(url).first(function (item) {
      if (!item) {
        return
      }
      if (item.tags.includes(tag)) {
        item.tags = item.tags.filter(t => t !== tag)
      } else {
        item.tags.push(tag)
      }
      places.worker.postMessage({
        action: 'updatePlace',
        pageData: {
          url: url,
          tags: item.tags
        }
      })
    })
  },
  getSuggestedTags: function (url, callback) {
    const callbackId = places.addWorkerCallback(callback)
    places.worker.postMessage({
      action: 'getSuggestedTags',
      pageData: {
        url: url
      },
      callbackId: callbackId
    })
  },
  getAllTagsRanked: function (url, callback) {
    const callbackId = places.addWorkerCallback(callback)
    places.worker.postMessage({
      action: 'getAllTagsRanked',
      pageData: {
        url: url
      },
      callbackId: callbackId
    })
  },
  getSuggestedItemsForTags: function (tags, callback) {
    const callbackId = places.addWorkerCallback(callback)
    places.worker.postMessage({
      action: 'getSuggestedItemsForTags',
      pageData: {
        tags: tags
      },
      callbackId: callbackId
    })
  },
  autocompleteTags: function (tags, callback) {
    const callbackId = places.addWorkerCallback(callback)
    places.worker.postMessage({
      action: 'autocompleteTags',
      pageData: {
        tags: tags
      },
      callbackId: callbackId
    })
  },
  initialize: function () {
    if (places.worker) {
      places.worker.terminate()
    }
    places.worker = new Worker('js/places/placesWorker.js')
    places.worker.onmessage = places.onMessage

    webviews.bindIPC('pageData', places.receiveHistoryData)
  }
}

places.initialize()
module.exports = places

},{"util/database.js":56,"util/searchEngine.js":62,"util/urlParser.js":65,"webviews.js":68}],31:[function(require,module,exports){
/* saves preview images for each tab */

var previewCache = {
  images: {}, // tabId: image
  get: function (tabId) {
    return previewCache.images[tabId]
  },
  set: function (tabId, image) {
    previewCache.images[tabId] = image
  }
}

setInterval(function () {
  // discard any images for tabs that don't exist any more or that haven't been active recently
  for (var tab in previewCache.images) {
    let containingTask = tasks.getTaskContainingTab(tab)
    if (!containingTask || Date.now() - containingTask.tabs.get(tab).lastActivity > (3 * 24 * 60 * 60 * 1000)) {
      delete previewCache.images[tab]
    }
  }
}, 60000)

module.exports = previewCache

},{}],32:[function(require,module,exports){
/* Determines whether a page should redirect to reader view based on visit history */

if (typeof require !== 'undefined') {
  // running in UI process
  var settings = require('util/settings/settings.js')
}

const readerDecision = {
  trimURL: function (url) {
    var loc = new URL(url)
    loc.hash = ''
    return loc.toString()
  },
  shouldRedirect: function (url) {
    /*
    returns:
        -1: never redirect, even if the page is confirmed to be readerable
        0: redirect once the page is confirmed to be readerable
        1: redirect even before the page is confirmed to be readerable
    */

    url = readerDecision.trimURL(url)

    try {
      var urlObj = new URL(url)

      if (readerDecision.info.URLStatus[url]) {
        // we have data collected from a previous visit to this page
        if (readerDecision.info.URLStatus[url].isReaderable === true) {
          // we know it will be readable, redirect without waiting
          return 1
        } else if (readerDecision.info.URLStatus[url].isReaderable === false) {
          // we know it won't be readerable (or reader mode might be broken for the page), never redirect to it
          return -1
        }
      } else if (readerDecision.info.domainStatus[urlObj.hostname] === true) {
        // this domain has been set to auto reader mode
        // we don't know anything about the content of the page
        if (urlObj.pathname === '/') {
          // sometimes the domain homepage will have a lot of text and look like an article (examples: gutenberg.org, nytimes.com), but it almost never is, so we shouldn't redirect to reader view unless the page has been explicitly marked as readerable (in which case URLStatus will handle it above)
          return -1
        } else {
          return 0
        }
      }
    } catch (e) {
      console.warn('failed to parse URL', url, e)
    }

    return -1
  },
  setDomainStatus: function (url, autoRedirect) {
    readerDecision.info.domainStatus[new URL(url).hostname] = autoRedirect
    saveData()
  },
  getDomainStatus: function (url) {
    return readerDecision.info.domainStatus[new URL(url).hostname]
  },
  setURLStatus (url, isReaderable) {
    url = readerDecision.trimURL(url)

    readerDecision.info.URLStatus[url] = { lastVisit: Date.now(), isReaderable }
    saveData()
  },
  getURLStatus: function (url) {
    url = readerDecision.trimURL(url)

    return readerDecision.info.URLStatus[url].isReaderable
  },
  getSameDomainStatuses: function (url) {
    var results = []
    for (var itemURL in readerDecision.info.URLStatus) {
      try {
        if (new URL(itemURL).hostname === new URL(url).hostname && itemURL !== url) {
          results.push(readerDecision.info.URLStatus[itemURL])
        }
      } catch (e) {}
    }

    return results
  }
}

function loadData (data) {
  try {
    if (!data) {
      data = localStorage.getItem('readerData')
      if (data) {
        // migrate from old format
        settings.set('readerData', data)
        localStorage.removeItem('readerData')
      }
    }
    readerDecision.info = JSON.parse(data).data
  } catch (e) {}

  if (!readerDecision.info) {
    readerDecision.info = {
      domainStatus: {},
      URLStatus: {}
    }
  }
}

function saveData () {
  settings.set('readerData', JSON.stringify({ version: 1, data: readerDecision.info }))
}

function cleanupData () {
  var removedEntries = false
  for (var url in readerDecision.info.URLStatus) {
    if (Date.now() - readerDecision.info.URLStatus[url].lastVisit > 6 * 7 * 24 * 60 * 60 * 1000) {
      delete readerDecision.info.URLStatus[url]
      removedEntries = true
    }
  }
  return removedEntries
}

settings.listen('readerData', function (data) {
  loadData(data)
  if (cleanupData()) {
    saveData()
  }
})

if (typeof module !== 'undefined') {
  module.exports = readerDecision
}

},{"util/settings/settings.js":63}],33:[function(require,module,exports){
var webviews = require('webviews.js')
var keybindings = require('keybindings.js')
var searchbar = require('searchbar/searchbar.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var bangsPlugin = require('searchbar/bangsPlugin.js')
var urlParser = require('util/urlParser.js')
var { db } = require('util/database.js')

var readerDecision = require('readerDecision.js')

var readerView = {
  readerURL: urlParser.getFileURL(__dirname + '/reader/index.html'),
  getReaderURL: function (url) {
    return readerView.readerURL + '?url=' + url
  },
  isReader: function (tabId) {
    return tabs.get(tabId).url.indexOf(readerView.readerURL) === 0
  },
  getButton: function (tabId) {
    // TODO better icon
    var button = document.createElement('button')
    button.className = 'reader-button tab-icon i carbon:notebook'

    button.setAttribute('data-tab', tabId)
    button.setAttribute('role', 'button')

    button.addEventListener('click', function (e) {
      e.stopPropagation()

      if (readerView.isReader(tabId)) {
        readerView.exit(tabId)
      } else {
        readerView.enter(tabId)
      }
    })

    readerView.updateButton(tabId, button)

    return button
  },
  updateButton: function (tabId, button) {
    var button = button || document.querySelector('.reader-button[data-tab="{id}"]'.replace('{id}', tabId))
    var tab = tabs.get(tabId)

    if (readerView.isReader(tabId)) {
      button.classList.add('is-reader')
      button.setAttribute('title', l('exitReaderView'))
    } else {
      button.classList.remove('is-reader')
      button.setAttribute('title', l('enterReaderView'))

      if (tab.readerable) {
        button.classList.add('can-reader')
      } else {
        button.classList.remove('can-reader')
      }
    }
  },
  enter: function (tabId, url) {
    var newURL = readerView.readerURL + '?url=' + encodeURIComponent(url || tabs.get(tabId).url)
    tabs.update(tabId, { url: newURL })
    webviews.update(tabId, newURL)
  },
  exit: function (tabId) {
    var src = urlParser.getSourceURL(tabs.get(tabId).url)
    // this page should not be automatically readerable in the future
    readerDecision.setURLStatus(src, false)
    tabs.update(tabId, { url: src })
    webviews.update(tabId, src)
  },
  printArticle: function (tabId) {
    if (!readerView.isReader(tabId)) {
      throw new Error("attempting to print in a tab that isn't a reader page")
    }

    webviews.callAsync(tabs.getSelected(), 'executeJavaScript', 'parentProcessActions.printArticle()')
  },
  initialize: function () {
    // update the reader button on page load

    webviews.bindEvent('did-start-navigation', function (tabId, url, isInPlace, isMainFrame, frameProcessId, frameRoutingId) {
      if (isInPlace) {
        return
      }
      if (readerDecision.shouldRedirect(url) === 1) {
        // if this URL has previously been marked as readerable, load reader view without waiting for the page to load
        readerView.enter(tabId, url)
      } else if (isMainFrame) {
        tabs.update(tabId, {
          readerable: false // assume the new page can't be readered, we'll get another message if it can
        })

        readerView.updateButton(tabId)
      }
    })

    webviews.bindIPC('canReader', function (tab) {
      if (readerDecision.shouldRedirect(tabs.get(tab).url) >= 0) {
        // if automatic reader mode has been enabled for this domain, and the page is readerable, enter reader mode
        readerView.enter(tab)
      }

      tabs.update(tab, {
        readerable: true
      })
      readerView.updateButton(tab)
    })

    // add a keyboard shortcut to enter reader mode

    keybindings.defineShortcut('toggleReaderView', function () {
      if (readerView.isReader(tabs.getSelected())) {
        readerView.exit(tabs.getSelected())
      } else {
        readerView.enter(tabs.getSelected())
      }
    })
  }
}

readerView.initialize()

module.exports = readerView

},{"keybindings.js":10,"readerDecision.js":32,"searchbar/bangsPlugin.js":35,"searchbar/searchbar.js":45,"searchbar/searchbarPlugins.js":46,"util/database.js":56,"util/urlParser.js":65,"webviews.js":68}],34:[function(require,module,exports){
/*
Passes a context menu template to the main process (where the menu is created)
and listens for click events on it.
*/

var menuCallbacks = {}

var nextMenuId = 0

function open (menuTemplate, x, y) {
  nextMenuId++
  menuCallbacks[nextMenuId] = {}
  var nextItemId = 0
  function prepareToSend (menuPart) {
    if (menuPart instanceof Array) {
      return menuPart.map(item => prepareToSend(item))
    } else {
      if (typeof menuPart.click === 'function') {
        menuCallbacks[nextMenuId][nextItemId] = menuPart.click
        menuPart.click = nextItemId
        nextItemId++
      }
      return menuPart
    }
  }

  ipc.send('open-context-menu', {
    id: nextMenuId,
    template: prepareToSend(menuTemplate),
    x,
    y
  })
}

ipc.on('context-menu-item-selected', function (e, data) {
  menuCallbacks[data.menuId][data.itemId]()
})

ipc.on('context-menu-will-close', function (e, data) {
  // delay close event until after selected event has been received
  setTimeout(function () {
    delete menuCallbacks[data.menuId]
  }, 16)
})

module.exports = { open }


},{}],35:[function(require,module,exports){
var tabEditor = require('navbar/tabEditor.js')

var searchbar = require('searchbar/searchbar.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var searchbarAutocomplete = require('util/autocomplete.js')

var searchEngine = require('util/searchEngine.js')

// format is {phrase, snippet, score, icon, fn, isCustom, isAction} to match https://ac.duckduckgo.com/ac?q=!

// isAction describes whether the !bang is an action (like "open preferences"), or a place to search (like "search reading list items")

var customBangs = []

function registerCustomBang (data) {
  customBangs.push({
    phrase: data.phrase,
    snippet: data.snippet,
    score: data.score || 256000,
    icon: data.icon || 'carbon:terminal',
    showSuggestions: data.showSuggestions,
    fn: data.fn,
    isCustom: true,
    isAction: data.isAction || false
  })
}

function searchCustomBangs (text) {
  return customBangs.filter(function (item) {
    return item.phrase.indexOf(text) === 0
  })
}

function getCustomBang (text) {
  var bang = text.split(' ')[0]
  return customBangs.filter(function (item) {
    return item.phrase === bang
  })[0]
}

// format is {bang: count}
var bangUseCounts = JSON.parse(localStorage.getItem('bangUseCounts') || '{}')

var saveBangUseCounts = debounce(function () {
  localStorage.setItem('bangUseCounts', JSON.stringify(bangUseCounts))
}, 10000)

function incrementBangCount (bang) {
  // increment bangUseCounts

  if (bangUseCounts[bang]) {
    bangUseCounts[bang]++
  } else {
    bangUseCounts[bang] = 1
  }

  // prevent the data from getting too big

  if (bangUseCounts[bang] > 100) {
    for (var bang in bangUseCounts) {
      bangUseCounts[bang] = Math.floor(bangUseCounts[bang] * 0.8)

      if (bangUseCounts[bang] < 2) {
        delete bangUseCounts[bang]
      }
    }
  }

  saveBangUseCounts()
}

// results is an array of {phrase, snippet, image}
function showBangSearchResults (text, results, input, event, limit = 5) {
  searchbarPlugins.reset('bangs')

  results.sort(function (a, b) {
    var aScore = a.score || 1
    var bScore = b.score || 1
    if (bangUseCounts[a.phrase]) {
      aScore *= bangUseCounts[a.phrase]
    }
    if (bangUseCounts[b.phrase]) {
      bScore *= bangUseCounts[b.phrase]
    }

    return bScore - aScore
  })

  results.slice(0, limit).forEach(function (result, idx) {
    // autocomplete the bang, but allow the user to keep typing

    var data = {
      icon: result.icon,
      iconImage: result.image,
      title: result.snippet,
      secondaryText: result.phrase,
      fakeFocus: text !== '!' && idx === 0
    }

    data.click = function (e) {
      // if the item is an action, clicking on it should immediately trigger it instead of prompting for additional text
      if (result.isAction && result.fn) {
        searchbar.openURL(result.phrase, e)
        return
      }

      setTimeout(function () {
        incrementBangCount(result.phrase)

        input.value = result.phrase + ' '
        input.focus()

        // show search suggestions for custom bangs
        if (result.showSuggestions) {
          result.showSuggestions('', input, event)
        }
      }, 66)
    }

    searchbarPlugins.addResult('bangs', data)
  })
}

function getBangSearchResults (text, input, event) {
  // if there is a space in the text, show bang search suggestions (only supported for custom bangs)

  if (text.indexOf(' ') !== -1) {
    var bang = getCustomBang(text)

    if (bang && bang.showSuggestions) {
      bang.showSuggestions(text.replace(bang.phrase, '').trimLeft(), input, event)
      return
    } else if (text.trim().indexOf(' ') !== -1) {
      searchbarPlugins.reset('bangs')
      return
    }
  }

  // otherwise search for bangs

  var resultsPromise

  // get results from DuckDuckGo if it is a search engine, and the current tab is not a private tab
  if (searchEngine.getCurrent().name === 'DuckDuckGo' && !tabs.get(tabs.getSelected()).private) {
    resultsPromise = fetch('https://ac.duckduckgo.com/ac/?t=min&q=' + encodeURIComponent(text), {
      cache: 'force-cache'
    })
      .then(function (response) {
        return response.json()
      })
  } else {
    resultsPromise = new Promise(function (resolve, reject) {
      // autocomplete doesn't work if we attempt to autocomplete at the same time as the key is being pressed, so add a small delay (TODO fix this)
      setTimeout(function () {
        resolve([])
      }, 0)
    })
  }

  resultsPromise.then(function (results) {
    if (text === '!') {
      // if we're listing all commands, limit the number of site results so that there's space to show more browser commands
      // but if there's search text, the results are capped elsewhere, and low-ranking results should be included here
      // in case they end up being sorted to the top based on usage
      results = results.slice(0, 8)
    }
    results = results.concat(searchCustomBangs(text))
    if (text === '!') {
      showBangSearchResults(text, results, input, event, 4)
      searchbarPlugins.addResult('bangs', {
        title: l('showMoreBangs'),
        icon: 'carbon:chevron-down',
        click: function () {
          showBangSearchResults(text, results, input, event, Infinity)
        }
      })
    } else {
      showBangSearchResults(text, results, input, event)

      if (results[0] && event.keyCode !== 8) {
        searchbarAutocomplete.autocomplete(input, [results[0].phrase])
      }
    }
  })
}

function initialize () {
  searchbarPlugins.register('bangs', {
    index: 1,
    trigger: function (text) {
      return !!text && text.indexOf('!') === 0
    },
    showResults: getBangSearchResults
  })

  searchbarPlugins.registerURLHandler(function (url) {
    if (url.indexOf('!') === 0) {
      incrementBangCount(url.split(' ')[0])

      var bang = getCustomBang(url)

      if ((!bang || !bang.isAction) && url.split(' ').length === 1 && !url.endsWith(' ')) {
        // the bang is non-custom or a custom bang that requires search text, so add a space after it
        tabEditor.show(tabs.getSelected(), url + ' ')
        return true
      } else if (bang) {
        // there is a custom bang that is an action or has search text, so it can be run
        tabEditor.hide()
        bang.fn(url.replace(bang.phrase, '').trimLeft())
        return true // override the default action
      }
    }
  })
}

module.exports = { initialize, registerCustomBang }

},{"navbar/tabEditor.js":21,"searchbar/searchbar.js":45,"searchbar/searchbarPlugins.js":46,"util/autocomplete.js":55,"util/searchEngine.js":62}],36:[function(require,module,exports){
var { db } = require('util/database.js')
var places = require('places/places.js')
var autocomplete = require('util/autocomplete.js')

const bookmarkEditor = {
  currentInstance: null,
  getTagElement: function (tag, selected, onClick, options = {}) {
    var el = document.createElement('button')
    el.className = 'tag'
    el.textContent = tag
    if (selected) {
      el.classList.add('selected')
      el.setAttribute('aria-pressed', true)
    } else {
      el.classList.add('suggested')
      el.setAttribute('aria-pressed', false)
    }
    el.addEventListener('click', function () {
      onClick()
      if (el.classList.contains('selected') && options.autoRemove !== false) {
        el.remove()
      } else {
        el.classList.remove('suggested')
        el.classList.add('selected')
      }
    })
    return el
  },
  render: async function (url, options = {}) {
    bookmarkEditor.currentInstance = {}
    bookmarkEditor.currentInstance.bookmark = await db.places.where('url').equals(url).first()

    var editor = document.createElement('div')
    editor.className = 'bookmark-editor searchbar-item'

    if (options.simplified) {
      editor.className += ' simplified'
    }

    if (!options.simplified) {
      // title input
      var title = document.createElement('span')
      title.className = 'title wide'
      title.textContent = bookmarkEditor.currentInstance.bookmark.title
      editor.appendChild(title)

      // URL
      var URLSpan = document.createElement('div')
      URLSpan.className = 'bookmark-url'
      URLSpan.textContent = bookmarkEditor.currentInstance.bookmark.url
      editor.appendChild(URLSpan)

      // save button
      var saveButton = document.createElement('button')
      saveButton.className = 'action-button always-visible i carbon:checkmark'
      saveButton.tabIndex = -1
      editor.appendChild(saveButton)
      saveButton.addEventListener('click', function () {
        editor.remove()
        bookmarkEditor.currentInstance.onClose(bookmarkEditor.currentInstance.bookmark)
        bookmarkEditor.currentInstance = null
      })

      // delete button
      var delButton = document.createElement('button')
      delButton.className = 'action-button always-visible bookmark-delete-button i carbon:delete'
      delButton.tabIndex = -1
      editor.appendChild(delButton)
      delButton.addEventListener('click', function () {
        editor.remove()
        bookmarkEditor.currentInstance.onClose(null)
        bookmarkEditor.currentInstance = null
      })
    }

    // tag area
    var tagArea = document.createElement('div')
    tagArea.className = 'tag-edit-area'
    editor.appendChild(tagArea)

    var tags = {
      selected: [],
      suggested: []
    }

    // show tags
    bookmarkEditor.currentInstance.bookmark.tags.forEach(function (tag) {
      tagArea.appendChild(bookmarkEditor.getTagElement(tag, true, function () {
        places.toggleTag(bookmarkEditor.currentInstance.bookmark.url, tag)
      }))
    })
    tags.selected = bookmarkEditor.currentInstance.bookmark.tags

    places.getSuggestedTags(bookmarkEditor.currentInstance.bookmark.url, function (suggestions) {
      tags.suggested = tags.suggested.concat(suggestions)

      tags.suggested.filter((tag, idx) => {
        return tags.suggested.indexOf(tag) === idx && !tags.selected.includes(tag)
      }).slice(0, 3).forEach(function (tag, idx) {
        tagArea.appendChild(bookmarkEditor.getTagElement(tag, false, function () {
          places.toggleTag(bookmarkEditor.currentInstance.bookmark.url, tag)
        }))
      })
      // add option for new tag
      var newTagInput = document.createElement('input')
      newTagInput.className = 'tag-input'
      newTagInput.placeholder = l('bookmarksAddTag')
      newTagInput.classList.add('mousetrap')
      newTagInput.spellcheck = false
      tagArea.appendChild(newTagInput)

      newTagInput.addEventListener('keypress', function (e) {
        if (e.keyCode !== 8 && e.keyCode !== 13) {
          places.getAllTagsRanked(bookmarkEditor.currentInstance.bookmark.url, function (results) {
            autocomplete.autocomplete(newTagInput, results.map(r => r.tag))
          })
        }
      })

      newTagInput.addEventListener('change', function () {
        var val = this.value
        if (!tags.selected.includes(val)) {
          places.toggleTag(bookmarkEditor.currentInstance.bookmark.url, val)
          tagArea.insertBefore(bookmarkEditor.getTagElement(val, true, function () {
            places.toggleTag(bookmarkEditor.currentInstance.bookmark.url, val)
          }), tagArea.firstElementChild)
        }
        this.value = ''
      })

      if (options.autoFocus) {
        newTagInput.focus()
      }
    })

    return editor
  },
  show: function (url, replaceItem, onClose, options) {
    if (bookmarkEditor.currentInstance) {
      if (bookmarkEditor.currentInstance.editor && bookmarkEditor.currentInstance.editor.parentNode) {
        bookmarkEditor.currentInstance.editor.remove()
      }
      if (bookmarkEditor.currentInstance.onClose) {
        bookmarkEditor.currentInstance.onClose(bookmarkEditor.currentInstance.bookmark)
      }
      bookmarkEditor.currentInstance = null
    }
    bookmarkEditor.render(url, options).then(function (editor) {
      replaceItem.hidden = true
      replaceItem.parentNode.insertBefore(editor, replaceItem)
      bookmarkEditor.currentInstance.editor = editor
      bookmarkEditor.currentInstance.onClose = onClose
    })
  }
}

module.exports = bookmarkEditor
},{"places/places.js":30,"util/autocomplete.js":55,"util/database.js":56}],37:[function(require,module,exports){
var searchbar = require('searchbar/searchbar.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')
var bangsPlugin = require('searchbar/bangsPlugin.js')
var places = require('places/places.js')
var urlParser = require('util/urlParser.js')
var formatRelativeDate = require('util/relativeDate.js')

var tabEditor = require('navbar/tabEditor.js')
var bookmarkEditor = require('searchbar/bookmarkEditor.js')

const maxTagSuggestions = 12

function parseBookmarkSearch (text) {
  var tags = text.split(/\s/g).filter(function (word) {
    return word.startsWith('#') && word.length > 1
  }).map(t => t.substring(1))

  var newText = text
  tags.forEach(function (word) {
    newText = newText.replace('#' + word, '')
  })
  newText = newText.trim()
  return {
    tags,
    text: newText
  }
}

function itemMatchesTags (item, tags) {
  for (var i = 0; i < tags.length; i++) {
    if (!item.tags.filter(t => t.startsWith(tags[i])).length) {
      return false
    }
  }
  return true
}

function showBookmarkEditor (url, item) {
  bookmarkEditor.show(url, item, function (newBookmark) {
    if (newBookmark) {
      if (item.parentNode) {
        // item could be detached from the DOM if the searchbar is closed
        item.parentNode.replaceChild(getBookmarkListItem(newBookmark), item)
      }
    } else {
      places.deleteHistory(url)
      item.remove()
    }
  })
}

function getBookmarkListItem (result, focus) {
  var item = searchbarUtils.createItem({
    title: result.title,
    icon: 'carbon:star-filled',
    secondaryText: urlParser.getSourceURL(result.url),
    fakeFocus: focus,
    click: function (e) {
      searchbar.openURL(result.url, e)
    },
    classList: ['bookmark-item'],
    delete: function () {
      places.deleteHistory(result.url)
    },
    button: {
      icon: 'carbon:edit',
      fn: function (el) {
        showBookmarkEditor(result.url, item)
      }
    }
  })
  return item
}

const bookmarkManager = {
  showBookmarks: function (text, input, event) {
    var container = searchbarPlugins.getContainer('bangs')

    var parsedText = parseBookmarkSearch(text)

    var displayedURLset = []
    places.searchPlaces(parsedText.text, function (results) {
      places.autocompleteTags(parsedText.tags, function (suggestedTags) {
        searchbarPlugins.reset('bangs')

        var tagBar = document.createElement('div')
        tagBar.id = 'bookmark-tag-bar'
        container.appendChild(tagBar)

        parsedText.tags.forEach(function (tag) {
          tagBar.appendChild(bookmarkEditor.getTagElement(tag, true, function () {
            tabEditor.show(tabs.getSelected(), '!bookmarks ' + text.replace('#' + tag, '').trim())
          }, { autoRemove: false }))
        })
        // it doesn't make sense to display tag suggestions if there's a search, since the suggestions are generated without taking the search into account
        if (!parsedText.text) {
          suggestedTags.forEach(function (suggestion, index) {
            var el = bookmarkEditor.getTagElement(suggestion, false, function () {
              var needsSpace = text.slice(-1) !== ' ' && text.slice(-1) !== ''
              tabEditor.show(tabs.getSelected(), '!bookmarks ' + text + (needsSpace ? ' #' : '#') + suggestion + ' ')
            })
            if (index >= maxTagSuggestions) {
              el.classList.add('overflowing')
            }
            tagBar.appendChild(el)
          })

          if (suggestedTags.length > maxTagSuggestions) {
            var expandEl = bookmarkEditor.getTagElement('\u2026', false, function () {
              tagBar.classList.add('expanded')
              expandEl.remove()
            })
            tagBar.appendChild(expandEl)
          }
        }

        var lastRelativeDate = '' // used to generate headings

        results
          .filter(function (result) {
            if (itemMatchesTags(result, parsedText.tags)) {
              return true
            } else {
              return false
            }
          })
          .sort(function (a, b) {
            // order by last visit
            return b.lastVisit - a.lastVisit
          })
          .slice(0, 100)
          .forEach(function (result, index) {
            displayedURLset.push(result.url)

            var thisRelativeDate = formatRelativeDate(result.lastVisit)
            if (thisRelativeDate !== lastRelativeDate) {
              searchbarPlugins.addHeading('bangs', { text: thisRelativeDate })
              lastRelativeDate = thisRelativeDate
            }
            var item = getBookmarkListItem(result, index === 0 && parsedText.text)
            container.appendChild(item)
          })

        if (text === '' && results.length < 3) {
          container.appendChild(searchbarUtils.createItem({
            title: l('importBookmarks'),
            icon: 'carbon:upload',
            click: function () {
              searchbar.openURL('!importbookmarks', null)
            }
          }))
        }

        if (parsedText.tags.length > 0) {
          places.getSuggestedItemsForTags(parsedText.tags, function (suggestedResults) {
            suggestedResults = suggestedResults.filter(res => !displayedURLset.includes(res.url))
            if (suggestedResults.length === 0) {
              return
            }
            searchbarPlugins.addHeading('bangs', { text: l('bookmarksSimilarItems') })
            suggestedResults.sort(function (a, b) {
              // order by last visit
              return b.lastVisit - a.lastVisit
            }).forEach(function (result, index) {
              var item = getBookmarkListItem(result, false)
              container.appendChild(item)
            })
          })
        }
      })
    }, {
      searchBookmarks: true,
      limit: Infinity
    })
  },
  initialize: function () {
    bangsPlugin.registerCustomBang({
      phrase: '!bookmarks',
      snippet: l('searchBookmarks'),
      isAction: false,
      showSuggestions: bookmarkManager.showBookmarks,
      fn: function (text) {
        var parsedText = parseBookmarkSearch(text)
        if (!parsedText.text) {
          return
        }
        places.searchPlaces(parsedText.text, function (results) {
          results = results
            .filter(r => itemMatchesTags(r, parsedText.tags))
            .sort(function (a, b) {
              return b.lastVisit - a.lastVisit
            })
          if (results.length !== 0) {
            searchbar.openURL(results[0].url, null)
          }
        }, { searchBookmarks: true })
      }
    })
  }
}

module.exports = bookmarkManager

},{"navbar/tabEditor.js":21,"places/places.js":30,"searchbar/bangsPlugin.js":35,"searchbar/bookmarkEditor.js":36,"searchbar/searchbar.js":45,"searchbar/searchbarPlugins.js":46,"searchbar/searchbarUtils.js":47,"util/relativeDate.js":61,"util/urlParser.js":65}],38:[function(require,module,exports){
var searchbarPlugins = require('searchbar/searchbarPlugins.js')

function initialize () {
  searchbarPlugins.register('developmentModeNotification', {
    index: 0,
    trigger: function (text) {
      return 'development-mode' in window.globalArgs
    },
    showResults: function () {
      searchbarPlugins.reset('developmentModeNotification')
      searchbarPlugins.addResult('developmentModeNotification', {
        title: 'Development Mode Enabled'
      })
    }
  })
}

module.exports = { initialize }

},{"searchbar/searchbarPlugins.js":46}],39:[function(require,module,exports){
var searchbar = require('searchbar/searchbar.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')

var urlParser = require('util/urlParser.js')
var searchEngine = require('util/searchEngine.js')

var ddgAttribution = l('resultsFromDDG')

function removeTags (text) {
  return text.replace(/<.*?>/g, '')
}

// custom instant answers

var instantAnswers = {
  color_code: function (searchText, answer) {
    var data = {
      title: searchText,
      descriptionBlock: answer.replace(/\n/g, ' · ').replace(/\s~\s/g, ' · '),
      attribution: ddgAttribution
    }

    var rgb = answer.split(' ~ ').filter(function (format) {
      return format.startsWith('RGBA')
    })

    if (rgb[0]) {
      data.colorCircle = rgb[0]
    }

    return data
  },
  currency_in: function (searchText, answer) {
    var title = ''
    if (typeof answer === 'string') { // there is only one currency
      title = answer
    } else { // multiple currencies
      var currencyArr = []
      for (var countryCode in answer) {
        currencyArr.push(answer[countryCode] + ' (' + countryCode + ')')
      }

      title = currencyArr.join(', ')
    }

    if (answer.data) {
      var descriptionBlock = answer.data.title
    } else {
      var descriptionBlock = l('DDGAnswerSubtitle')
    }

    return {
      title: title,
      descriptionBlock: descriptionBlock,
      attribution: ddgAttribution
    }
  }
}

function showSearchbarInstantAnswers (text, input, event) {
  // only make requests to the DDG api if DDG is set as the search engine
  if (searchEngine.getCurrent().name !== 'DuckDuckGo') {
    return
  }

  // don't make a request if the searchbar has already closed

  if (!searchbar.associatedInput) {
    return
  }

  fetch('https://api.duckduckgo.com/?t=min&skip_disambig=1&no_redirect=1&format=json&q=' + encodeURIComponent(text)).then(function (data) {
    return data.json()
  }).then(function (res) {
    searchbarPlugins.reset('instantAnswers')

    // if there is a custom format for the answer, use that
    if (instantAnswers[res.AnswerType]) {
      var data = instantAnswers[res.AnswerType](text, res.Answer)

    // use the default format
    } else if (res.Abstract || (res.Answer && typeof res.Answer === 'string')) {
      var data = {
        title: (typeof res.Answer === 'string' && removeTags(res.Answer)) || removeTags(res.Heading),
        descriptionBlock: res.Abstract || l('DDGAnswerSubtitle'),
        attribution: ddgAttribution,
        url: res.AbstractURL || text
      }

      if (res.Image && !res.ImageIsLogo) {
        data.image = res.Image
        if (data.image.startsWith('/')) {
          // starting 11/2020, the DDG API returns relative URLs rather than absolute ones
          data.image = 'https://duckduckgo.com' + data.image
        }
      }

    // show a disambiguation
    } else if (res.RelatedTopics) {
      res.RelatedTopics.slice(0, 3).forEach(function (item) {
        // the DDG api returns the entity name inside an <a> tag
        var entityName = item.Result.replace(/.*>(.+?)<.*/g, '$1')

        // the text starts with the entity name, remove it
        var desc = item.Text.replace(entityName, '')

        // try to convert the given url to a wikipedia link
        var entityNameRegex = /https:\/\/duckduckgo.com\/(.*?)\/?$/

        if (entityNameRegex.test(item.FirstURL)) {
          var url = 'https://wikipedia.org/wiki/' + entityNameRegex.exec(item.FirstURL)[1]
        } else {
          var url = item.FirstURL
        }

        searchbarPlugins.addResult('instantAnswers', {
          title: entityName,
          descriptionBlock: desc,
          url: url
        }, { allowDuplicates: true })
      })
    }

    if (data) {
      // answers are more relevant, they should be displayed at the top
      if (res.Answer) {
        searchbarPlugins.setTopAnswer('instantAnswers', data)
      } else {
        searchbarPlugins.addResult('instantAnswers', data, { allowDuplicates: true })
      }
    }

    // suggested site links
    if (searchbarPlugins.getResultCount() < 4 && res.Results && res.Results[0] && res.Results[0].FirstURL) {
      var url = res.Results[0].FirstURL

      searchbarPlugins.addResult('instantAnswers', {
        icon: 'carbon:earth-filled',
        title: urlParser.basicURL(url),
        secondaryText: l('suggestedSite'),
        url: url,
        classList: ['ddg-answer']
      })
    }

    // if we're showing a location, show a "Search on OpenStreetMap" link

    var entitiesWithLocations = ['location', 'country', 'u.s. state', 'protected area']

    if (entitiesWithLocations.indexOf(res.Entity) !== -1) {
      searchbarPlugins.addResult('instantAnswers', {
        icon: 'carbon:search',
        title: res.Heading,
        secondaryText: l('searchWith').replace('%s', 'OpenStreetMap'),
        classList: ['ddg-answer'],
        url: 'https://www.openstreetmap.org/search?query=' + encodeURIComponent(res.Heading)
      })
    }
  }).catch(function (e) {
    console.error(e)
  })
}

function initialize () {
  searchbarPlugins.register('instantAnswers', {
    index: 4,
    trigger: function (text) {
      return text.length > 3 && !urlParser.isURLMissingProtocol(text) && !tabs.get(tabs.getSelected()).private
    },
    showResults: debounce(showSearchbarInstantAnswers, 200)
  })
}

module.exports = { initialize }

},{"searchbar/searchbar.js":45,"searchbar/searchbarPlugins.js":46,"util/searchEngine.js":62,"util/urlParser.js":65}],40:[function(require,module,exports){
var browserUI = require('browserUI.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var urlParser = require('util/urlParser.js')

var stringScore = require('string_score')

var searchOpenTabs = function (text, input, event) {
  searchbarPlugins.reset('openTabs')

  var matches = []
  var searchText = text.toLowerCase()
  var currentTask = tasks.getSelected()
  var currentTab = currentTask.tabs.getSelected()

  tasks.forEach(function (task) {
    task.tabs.forEach(function (tab) {
      if (tab.id === currentTab || !tab.title || !tab.url) {
        return
      }

      var tabUrl = urlParser.basicURL(tab.url) // don't search protocols

      var exactMatch = tab.title.toLowerCase().indexOf(searchText) !== -1 || tabUrl.toLowerCase().indexOf(searchText) !== -1
      var fuzzyTitleScore = tab.title.substring(0, 50).score(text, 0.5)
      var fuzzyUrlScore = tabUrl.score(text, 0.5)

      if (exactMatch || fuzzyTitleScore > 0.4 || fuzzyUrlScore > 0.4) {
        matches.push({
          task: task,
          tab: tab,
          score: fuzzyTitleScore + fuzzyUrlScore
        })
      }
    })
  })

  if (matches.length === 0) {
    return
  }

  var finalMatches = matches.sort(function (a, b) {
    if (a.task.id === currentTask.id) {
      a.score += 0.2
    }
    if (b.task.id === currentTask.id) {
      b.score += 0.2
    }
    return b.score - a.score
  }).slice(0, 2)

  finalMatches.forEach(function (match) {
    var data = {
      icon: 'carbon:arrow-up-right',
      title: match.tab.title,
      secondaryText: urlParser.basicURL(match.tab.url)
    }

    if (match.task.id !== currentTask.id) {
      var taskName = match.task.name || l('taskN').replace('%n', (tasks.getIndex(match.task.id) + 1))
      data.metadata = [taskName]
    }

    data.click = function () {
      // if we created a new tab but are switching away from it, destroy the current (empty) tab
      var currentTabUrl = tabs.get(tabs.getSelected()).url
      if (!currentTabUrl) {
        browserUI.closeTab(tabs.getSelected())
      }

      if (match.task.id !== currentTask.id) {
        browserUI.switchToTask(match.task.id)
      }

      browserUI.switchToTab(match.tab.id)
    }

    searchbarPlugins.addResult('openTabs', data)
  })
}

function initialize () {
  searchbarPlugins.register('openTabs', {
    index: 3,
    trigger: function (text) {
      return text.length > 2
    },
    showResults: searchOpenTabs
  })
}

module.exports = { initialize }

},{"browserUI.js":4,"searchbar/searchbarPlugins.js":46,"string_score":79,"util/urlParser.js":65}],41:[function(require,module,exports){
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')
var urlParser = require('util/urlParser.js')

var places = require('places/places.js')

function showPlaceSuggestions (text, input, event) {
  // use the current tab's url for history suggestions, or the previous tab if the current tab is empty
  var url = tabs.get(tabs.getSelected()).url

  if (!url) {
    var previousTab = tabs.getAtIndex(tabs.getIndex(tabs.getSelected()) - 1)
    if (previousTab) {
      url = previousTab.url
    }
  }

  places.getPlaceSuggestions(url, function (results) {
    searchbarPlugins.reset('placeSuggestions')

    var tabList = tabs.get().map(function (tab) {
      return tab.url
    })

    results = results.filter(function (item) {
      return tabList.indexOf(item.url) === -1
    })

    results.slice(0, 4).forEach(function (result) {
      searchbarPlugins.addResult('placeSuggestions', {
        title: urlParser.prettyURL(result.url),
        secondaryText: searchbarUtils.getRealTitle(result.title),
        url: result.url,
        delete: function () {
          places.deleteHistory(result.url)
        }
      })
    })
  })
}

function initialize () {
  searchbarPlugins.register('placeSuggestions', {
    index: 1,
    trigger: function (text) {
      return !text
    },
    showResults: showPlaceSuggestions
  })
}

module.exports = {initialize}


},{"places/places.js":30,"searchbar/searchbarPlugins.js":46,"searchbar/searchbarUtils.js":47,"util/urlParser.js":65}],42:[function(require,module,exports){
var searchbar = require('searchbar/searchbar.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')
var searchbarAutocomplete = require('util/autocomplete.js')
var urlParser = require('util/urlParser.js')
var readerDecision = require('readerDecision.js')

var places = require('places/places.js')
var searchEngine = require('util/searchEngine.js')

var currentResponseSent = 0

function showSearchbarPlaceResults (text, input, event, pluginName = 'places') {
  var responseSent = Date.now()

  if (pluginName === 'fullTextPlaces') {
    var searchFn = places.searchPlacesFullText
    var resultCount = 4 - searchbarPlugins.getResultCount('places')
  } else {
    var searchFn = places.searchPlaces
    var resultCount = 4
  }

  // only autocomplete an item if the delete key wasn't pressed
  var canAutocomplete = event && event.keyCode !== 8

  searchFn(text, function (results) {
    // prevent responses from returning out of order
    if (responseSent < currentResponseSent) {
      return
    }

    currentResponseSent = responseSent

    searchbarPlugins.reset(pluginName)

    results = results.slice(0, resultCount)

    results.forEach(function (result, index) {
      var didAutocompleteResult = false

      var searchQuery = searchEngine.getSearch(result.url)

      if (canAutocomplete) {
        // if the query is autocompleted, pressing enter will search for the result using the current search engine, so only pages from the current engine should be autocompleted
        if (searchQuery && searchQuery.engine === searchEngine.getCurrent().name && index === 0) {
          var acResult = searchbarAutocomplete.autocomplete(input, [searchQuery.search])
          if (acResult.valid) {
            canAutocomplete = false
            didAutocompleteResult = true
          }
        } else {
          var autocompletionType = searchbarAutocomplete.autocompleteURL(input, result.url)

          if (autocompletionType !== -1) {
            canAutocomplete = false
          }

          if (autocompletionType === 0) { // the domain was autocompleted, show a domain result item
            var domain = new URL(result.url).hostname

            searchbarPlugins.setTopAnswer(pluginName, {
              title: domain,
              url: domain,
              fakeFocus: true
            })
          }
          if (autocompletionType === 1) {
            didAutocompleteResult = true
          }
        }
      }

      var data = {
        url: result.url,
        metadata: result.tags,
        delete: function () {
          places.deleteHistory(result.url)
        }
      }

      if (searchQuery) {
        data.title = searchQuery.search
        data.secondaryText = searchQuery.engine
        data.icon = 'carbon:search'
      } else {
        data.title = urlParser.prettyURL(urlParser.getSourceURL(result.url))
        data.secondaryText = searchbarUtils.getRealTitle(result.title)
      }

      // show a star for bookmarked items
      if (result.isBookmarked) {
        data.icon = 'carbon:star-filled'
      } else if (readerDecision.shouldRedirect(result.url) === 1) {
        // show an icon to indicate that this page will open in reader view
        data.icon = 'carbon:notebook'
      }

      // create the item

      if (didAutocompleteResult) { // if this exact URL was autocompleted, show the item as the top answer
        data.fakeFocus = true
        searchbarPlugins.setTopAnswer(pluginName, data)
      } else {
        searchbarPlugins.addResult(pluginName, data)
      }
    })
  })
}

function initialize () {
  searchbarPlugins.register('places', {
    index: 1,
    trigger: function (text) {
      return !!text && text.indexOf('!') !== 0
    },
    showResults: showSearchbarPlaceResults
  })

  searchbarPlugins.register('fullTextPlaces', {
    index: 2,
    trigger: function (text) {
      return !!text && text.indexOf('!') !== 0
    },
    showResults: debounce(function () {
      if (searchbarPlugins.getResultCount('places') < 4 && searchbar.associatedInput) {
        showSearchbarPlaceResults.apply(this, Array.from(arguments).concat('fullTextPlaces'))
      } else {
        // can't show results, clear any previous ones
        searchbarPlugins.reset('fullTextPlaces')
      }
    }, 200)
  })
}

module.exports = { initialize }

},{"places/places.js":30,"readerDecision.js":32,"searchbar/searchbar.js":45,"searchbar/searchbarPlugins.js":46,"searchbar/searchbarUtils.js":47,"util/autocomplete.js":55,"util/searchEngine.js":62,"util/urlParser.js":65}],43:[function(require,module,exports){
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')

var browserUI = require('browserUI.js')

function showRestoreTask () {
  searchbarPlugins.reset('restoreTask')

  var lastTask = tasks.slice().sort((a, b) => {
    return tasks.getLastActivity(b.id) - tasks.getLastActivity(a.id)})[1]
  var recentTabs = lastTask.tabs.get().sort((a, b) => b.lastActivity - a.lastActivity).slice(0, 3)

  if (recentTabs.length === 1) {
    var title = searchbarUtils.getRealTitle(recentTabs[0].title) || l('newTabLabel')
  } else if (recentTabs.length === 2) {
    var title = l('taskDescriptionTwo').replace('%t', searchbarUtils.getRealTitle(recentTabs[0].title) || l('newTabLabel')).replace('%t', searchbarUtils.getRealTitle(recentTabs[1].title) || l('newTabLabel'))
  } else {
    var title = l('taskDescriptionThree').replace('%t', searchbarUtils.getRealTitle(recentTabs[0].title) || l('newTabLabel')).replace('%t', searchbarUtils.getRealTitle(recentTabs[1].title) || l('newTabLabel')).replace('%n', (lastTask.tabs.count() - 2))
  }

  searchbarPlugins.addResult('restoreTask', {
    title: title,
    descriptionBlock: l('returnToTask'),
    click: function (e) {
      var thisTask = tasks.getSelected().id
      browserUI.switchToTask(lastTask.id)
      browserUI.closeTask(thisTask)
    }
  })
}

function initialize () {
  searchbarPlugins.register('restoreTask', {
    index: 0,
    trigger: function (text) {
      return !text && performance.now() < 5000 && tasks.getSelected().tabs.isEmpty() && window.createdNewTaskOnStartup
    },
    showResults: showRestoreTask
  })
}

module.exports = {initialize}

},{"browserUI.js":4,"searchbar/searchbarPlugins.js":46,"searchbar/searchbarUtils.js":47}],44:[function(require,module,exports){
var searchbar = require('searchbar/searchbar.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')

var urlParser = require('util/urlParser.js')
var searchEngine = require('util/searchEngine.js')

function showSearchSuggestions (text, input, event) {
  // TODO support search suggestions for other search engines
  if (searchEngine.getCurrent().name !== 'DuckDuckGo') {
    searchbarPlugins.reset('searchSuggestions')
    return
  }

  if ((searchbarPlugins.getResultCount() - searchbarPlugins.getResultCount('searchSuggestions')) > 3) {
    searchbarPlugins.reset('searchSuggestions')
    return
  }

  fetch('https://ac.duckduckgo.com/ac/?t=min&q=' + encodeURIComponent(text), {
    cache: 'force-cache'
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (results) {
      searchbarPlugins.reset('searchSuggestions')

      if (searchbarPlugins.getResultCount() > 3) {
        return
      }

      if (results) {
        results = results.slice(0, 3)
        results.forEach(function (result) {
          var data = {
            title: result.phrase,
            url: result.phrase
          }

          if (urlParser.isURL(result.phrase) || urlParser.isURLMissingProtocol(result.phrase)) { // website suggestions
            data.icon = 'carbon:earth-filled'
          } else { // regular search results
            data.icon = 'carbon:search'
          }

          var item = searchbarPlugins.addResult('searchSuggestions', data)
        })
      }
    })
}

function initialize () {
  searchbarPlugins.register('searchSuggestions', {
    index: 4,
    trigger: function (text) {
      return !!text && text.indexOf('!') !== 0 && !tabs.get(tabs.getSelected()).private
    },
    showResults: debounce(showSearchSuggestions, 50)
  })
}

module.exports = { initialize }

},{"searchbar/searchbar.js":45,"searchbar/searchbarPlugins.js":46,"util/searchEngine.js":62,"util/urlParser.js":65}],45:[function(require,module,exports){
var webviews = require('webviews.js')
var keybindings = require('keybindings.js')
var urlParser = require('util/urlParser.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var keyboardNavigationHelper = require('util/keyboardNavigationHelper.js')

function openURLInBackground (url) { // used to open a url in the background, without leaving the searchbar
  searchbar.events.emit('url-selected', {url: url, background: true})

  var i = searchbar.el.querySelector('.searchbar-item:focus')
  if (i) { // remove the highlight from an awesomebar result item, if there is one
    i.blur()
  }
}

var searchbar = {
  el: document.getElementById('searchbar'),
  associatedInput: null,
  events: new EventEmitter(),
  show: function (associatedInput) {
    searchbar.el.hidden = false
    searchbar.associatedInput = associatedInput
  },
  hide: function () {
    searchbar.associatedInput = null
    searchbar.el.hidden = true

    searchbarPlugins.clearAll()
  },
  getValue: function () {
    var text = searchbar.associatedInput.value
    return text.replace(text.substring(searchbar.associatedInput.selectionStart, searchbar.associatedInput.selectionEnd), '')
  },
  showResults: function (text, event) {
    // find the real input value, accounting for highlighted suggestions and the key that was just pressed
    // delete key doesn't behave like the others, String.fromCharCode returns an unprintable character (which has a length of one)

    if (event && event.keyCode !== 8) {
      var realText = text.substring(0, searchbar.associatedInput.selectionStart) + event.key + text.substring(searchbar.associatedInput.selectionEnd, text.length)
    } else {
      var realText = text
    }

    searchbarPlugins.run(realText, searchbar.associatedInput, event)
  },
  openURL: function (url, event) {
    var hasURLHandler = searchbarPlugins.runURLHandlers(url)
    if (hasURLHandler) {
      return
    }

    if (event && event.metaKey) {
      openURLInBackground(url)
      return true
    } else {
      searchbar.events.emit('url-selected', {url: url, background: false})
      // focus the webview, so that autofocus inputs on the page work
      webviews.focus()
      return false
    }
  }
}

keyboardNavigationHelper.addToGroup('searchbar', searchbar.el)

  // mod+enter navigates to searchbar URL + ".com"
keybindings.defineShortcut('completeSearchbar', function () {
  if (searchbar.associatedInput) { // if the searchbar is open
    var value = searchbar.associatedInput.value

      // if the text is already a URL, navigate to that page
    if (urlParser.isURLMissingProtocol(value)) {
      searchbar.events.emit('url-selected', {url: value, background: false})
    } else {
      searchbar.events.emit('url-selected', {url: urlParser.parse(value + '.com'), background: false})
    }
  }
})

searchbarPlugins.initialize(searchbar.openURL)

module.exports = searchbar

},{"keybindings.js":10,"searchbar/searchbarPlugins.js":46,"util/keyboardNavigationHelper.js":59,"util/urlParser.js":65,"webviews.js":68}],46:[function(require,module,exports){
var searchbar = document.getElementById('searchbar')
var searchbarUtils = require('searchbar/searchbarUtils.js')

var plugins = [] // format is {name, container, trigger, showResults}
var results = {} // format is {pluginName: [results]}
var URLOpener
var URLHandlers = [] // format is {trigger, action}

var topAnswer = {
  plugin: null,
  item: null
}

const searchbarPlugins = {
  topAnswerArea: searchbar.querySelector('.top-answer-area'),
  // empties all containers in the searchbar
  clearAll: function () {
    empty(searchbarPlugins.topAnswerArea)
    topAnswer = {
      plugin: null,
      item: null
    }
    for (var i = 0; i < plugins.length; i++) {
      empty(plugins[i].container)
    }
  },

  reset: function (pluginName) {
    empty(searchbarPlugins.getContainer(pluginName))

    var ta = searchbarPlugins.getTopAnswer(pluginName)
    if (ta) {
      ta.remove()
      topAnswer = {
        plugin: null,
        item: null
      }
    }

    results[pluginName] = []
  },

  getTopAnswer: function (pluginName) {
    if (pluginName) {
      if (topAnswer.plugin === pluginName) {
        return topAnswer.item
      } else {
        return null
      }
    } else {
      return searchbarPlugins.topAnswerArea.firstChild
    }
  },

  setTopAnswer: function (pluginName, data) {
    empty(searchbarPlugins.topAnswerArea)

    var item = searchbarUtils.createItem(data)
    item.setAttribute('data-plugin', pluginName)
    item.setAttribute('data-url', data.url)
    searchbarPlugins.topAnswerArea.appendChild(item)

    item.addEventListener('click', function (e) {
      URLOpener(data.url, e)
    })

    topAnswer = {
      plugin: pluginName,
      item: item
    }

    results[pluginName].push(data)
  },

  addResult: function (pluginName, data, options = {}) {
    if (options.allowDuplicates) {
      data.allowDuplicates = true
    }
    if (data.url && !data.allowDuplicates) {
      // skip duplicates
      for (var plugin in results) {
        for (var i = 0; i < results[plugin].length; i++) {
          if (results[plugin][i].url === data.url && !results[plugin][i].allowDuplicates) {
            return
          }
        }
      }
    }
    var item = searchbarUtils.createItem(data)

    if (data.url) {
      item.setAttribute('data-url', data.url)
      item.addEventListener('click', function (e) {
        URLOpener(data.url, e)
      })
    }

    searchbarPlugins.getContainer(pluginName).appendChild(item)

    results[pluginName].push(data)
  },

  addHeading: function (pluginName, data) {
    searchbarPlugins.getContainer(pluginName).appendChild(searchbarUtils.createHeading(data))
  },

  getContainer: function (pluginName) {
    for (var i = 0; i < plugins.length; i++) {
      if (plugins[i].name === pluginName) {
        return plugins[i].container
      }
    }
    return null
  },

  register: function (name, object) {
    // add the container
    var container = document.createElement('div')
    container.classList.add('searchbar-plugin-container')
    container.setAttribute('data-plugin', name)
    searchbar.insertBefore(container, searchbar.childNodes[object.index + 2])

    plugins.push({
      name: name,
      container: container,
      trigger: object.trigger,
      showResults: object.showResults
    })

    results[name] = []
  },

  run: function (text, input, event) {
    for (var i = 0; i < plugins.length; i++) {
      try {
        if (plugins[i].showResults && (!plugins[i].trigger || plugins[i].trigger(text))) {
          plugins[i].showResults(text, input, event)
        } else {
          searchbarPlugins.reset(plugins[i].name)
        }
      } catch (e) {
        console.error('error in searchbar plugin "' + plugins[i].name + '":', e)
      }
    }
  },

  registerURLHandler: function (handler) {
    URLHandlers.push(handler)
  },

  runURLHandlers: function (text) {
    for (var i = 0; i < URLHandlers.length; i++) {
      if (URLHandlers[i](text)) {
        return true
      }
    }
    return false
  },

  getResultCount: function (pluginName) {
    if (pluginName) {
      return results[pluginName].length
    } else {
      var resultCount = 0
      for (var plugin in results) {
        resultCount += results[plugin].length
      }
      return resultCount
    }
  },

  initialize: function (opener) {
    URLOpener = opener
  }
}

module.exports = searchbarPlugins

},{"searchbar/searchbarUtils.js":47}],47:[function(require,module,exports){
var urlParser = require('util/urlParser.js')

var searchbar = require('searchbar/searchbar.js')

var lastItemDeletion = Date.now() // TODO get rid of this

// creates a result item

/*
data:

title: string - the title of the item
metadata: array - a list of strings to include (separated by hyphens) in front of the secondary text
secondaryText: string - the item's secondary text
icon: string - the name of a carbon icon.
image: string - the URL of an image to show
iconImage: string - the URL of an image to show as an icon
descriptionBlock: string - the text in the description block,
attribution: string - attribution text to display when the item is focused
delete: function - a function to call to delete the result item when a left swipe is detected
showDeleteButton - whether to show an [x] button that calls the delete function
button: {icon: string, fn: function} a button that will appear to the right of the item (if showDeleteButton is false)
classList: array - a list of classes to add to the item
fakeFocus - boolean - whether the item should appear to be focused,
colorCircle - string - display a color circle with a given color
opacity - number - the opacity of the item
*/

function createItem (data) {
  var item = document.createElement('div')
  item.classList.add('searchbar-item')

  item.setAttribute('tabindex', '-1')

  if (data.classList) {
    for (var i = 0; i < data.classList.length; i++) {
      item.classList.add(data.classList[i])
    }
  }

  if (data.fakeFocus) {
    item.classList.add('fakefocus')
  }

  if (data.opacity) {
    item.style.opacity = data.opacity
  }

  if (data.colorCircle) {
    var colorCircle = document.createElement('div')
    colorCircle.className = 'image color-circle'
    colorCircle.style.backgroundColor = data.colorCircle

    item.appendChild(colorCircle)
  }

  if (data.icon) {
    var el = document.createElement('i')
    el.className = 'i ' + data.icon
    item.appendChild(el)
  }

  if (data.title) {
    var title = document.createElement('span')
    title.classList.add('title')

    if (!data.secondaryText) {
      title.classList.add('wide')
    }

    title.textContent = data.title.substring(0, 1000)

    item.appendChild(title)
  }

  if (data.secondaryText) {
    var secondaryText = document.createElement('span')
    secondaryText.classList.add('secondary-text')

    secondaryText.textContent = data.secondaryText.substring(0, 1000)

    item.appendChild(secondaryText)

    if (data.metadata) {
      data.metadata.forEach(function (str) {
        var metadataElement = document.createElement('span')
        metadataElement.className = 'md-info'

        metadataElement.textContent = str

        secondaryText.insertBefore(metadataElement, secondaryText.firstChild)
      })
    }
  }

  if (data.image) {
    var image = document.createElement('img')
    image.className = 'image'
    image.src = data.image

    item.insertBefore(image, item.childNodes[0])
  }

  if (data.iconImage) {
    var iconImage = document.createElement('img')
    iconImage.className = 'icon-image'
    iconImage.src = data.iconImage
    iconImage.setAttribute('aria-hidden', true)

    item.insertBefore(iconImage, item.childNodes[0])
  }

  if (data.descriptionBlock) {
    var dBlock = document.createElement('span')
    dBlock.classList.add('description-block')

    dBlock.textContent = data.descriptionBlock
    item.appendChild(dBlock)
  }

  if (data.attribution) {
    var attrBlock = document.createElement('span')
    attrBlock.classList.add('attribution')

    attrBlock.textContent = data.attribution
    if (data.descriptionBlock) {
      // used to make the attribution align with the text even if there's an image on the left
      dBlock.appendChild(attrBlock)
    } else {
      item.appendChild(attrBlock)
    }
  }

  if (data.delete) {
    item.addEventListener('mousewheel', function (e) {
      var self = this
      if (e.deltaX > 50 && e.deltaY < 3 && Date.now() - lastItemDeletion > 700) {
        lastItemDeletion = Date.now()

        self.style.opacity = '0'
        self.style.transform = 'translateX(-100%)'

        setTimeout(function () {
          data.delete(self)
          self.parentNode.removeChild(self)
          lastItemDeletion = Date.now()
        }, 200)
      }
    })

    item.addEventListener('auxclick', function (e) {
      if (e.which === 2) { // middle mouse click
        data.delete(item)
        item.parentNode.removeChild(item)
      }
    })
  }

  // delete button is just a pre-defined action button
  if (data.showDeleteButton) {
    data.button = {
      icon: 'carbon:close',
      fn: function () {
        data.delete(item)
        item.parentNode.removeChild(item)
      }
    }
  }

  if (data.button) {
    var button = document.createElement('button')
    button.classList.add('action-button')
    button.classList.add('ignores-keyboard-focus') // for keyboardNavigationHelper
    button.tabIndex = -1
    button.classList.add('i')
    button.classList.add(data.button.icon)

    button.addEventListener('click', function (e) {
      e.stopPropagation()
      data.button.fn(this)
    })
    item.appendChild(button)
    item.classList.add('has-action-button')
  }

  if (data.click) {
    item.addEventListener('click', data.click)
  }

  // return should act like click
  item.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      item.click()
    }
  })

  return item
}

function createHeading (data) {
  var heading = document.createElement('h4')
  heading.className = 'searchbar-heading'
  heading.textContent = data.text || ''
  return heading
}

// attempts to shorten a page title, removing unimportant text like the site name
function getRealTitle (text) {
  // don't try to parse URL's
  if (urlParser.isURL(text)) {
    return text
  }

  var possibleCharacters = ['|', ':', ' - ', ' — ']

  for (var i = 0; i < possibleCharacters.length; i++) {
    var char = possibleCharacters[i]
    // match url's of pattern: title | website name
    var titleChunks = text.split(char)

    if (titleChunks.length >= 2) {
      var titleChunksTrimmed = titleChunks.map(c => c.trim())
      if (titleChunksTrimmed[titleChunksTrimmed.length - 1].length < 5 || titleChunksTrimmed[titleChunksTrimmed.length - 1].length / text.length <= 0.3) {
        return titleChunks.slice(0, -1).join(char)
      }
    }
  }

  // fallback to the regular title

  return text
}

module.exports = {createItem, createHeading, getRealTitle}

},{"searchbar/searchbar.js":45,"util/urlParser.js":65}],48:[function(require,module,exports){
const UPDATE_URL = 'https://minbrowser.github.io/min/updates/latestVersion.json'

var settings = require('util/settings/settings.js')

var searchbarPlugins = require('searchbar/searchbarPlugins.js')

function compareVersions (v1, v2) {
  /*
  1: v2 is newer than v1
  -1: v1 is newer than v2
  0: the two versions are equal
  */
  v1 = v1.split('.').map(i => parseInt(i))
  v2 = v2.split('.').map(i => parseInt(i))

  if (v1.length !== v2.length) {
    throw new Error()
  }

  for (var i = 0; i < v1.length; i++) {
    if (v2[i] > v1[i]) {
      return 1
    }
    if (v1[i] > v2[i]) {
      return -1
    }
  }

  return 0
}

function getUpdateRandomNum () {
  /* the update JSON might indicate that the update is only available to a % of clients, in order to avoid notifying everyone to update to a new version until there's time to report bugs.
      Create a random number that is saved locally, and compare this to the indicated % to determine if the update notification should be shown. */

  if (!localStorage.getItem('updateRandomNumber')) {
    localStorage.setItem('updateRandomNumber', Math.random())
  }
  return parseFloat(localStorage.getItem('updateRandomNumber'))
}

function getAvailableUpdates () {
  if (settings.get('updateNotificationsEnabled') !== false) {
    console.info('checking for updates')
    fetch(UPDATE_URL, {
      cache: 'no-cache'
    })
        .then(res => res.json())
        .then(function (response) {
          console.info('got response from update check', response)
          if (response.version &&
            compareVersions(window.globalArgs['app-version'], response.version) > 0 &&
            (!response.availabilityPercent || getUpdateRandomNum() < response.availabilityPercent)) {
            console.info('an update is available')
            localStorage.setItem('availableUpdate', JSON.stringify(response))
          } else {
            console.info('update is not available')
            /* this can happen if either the update is no longer being offered, or the update has already been installed */
            localStorage.removeItem('availableUpdate')
          }
        })
        .catch(function (e) {
          console.info('failed to get update info', e)
        })
  } else {
    console.info('update checking is disabled')
  }
}

function showUpdateNotification (text, input, event) {
  function displayUpdateNotification () {
    searchbarPlugins.reset('updateNotifications')
    searchbarPlugins.addResult('updateNotifications', {
      title: l('updateNotificationTitle'),
      descriptionBlock: update.releaseHeadline || 'View release notes',
      url: update.releaseNotes,
      icon: 'carbon:renew'
    }, {allowDuplicates: true})
  }
  // is there an update?
  var update = JSON.parse(localStorage.getItem('availableUpdate'))
  if (update) {
    // was the update already installed?
    if (compareVersions(window.globalArgs['app-version'], update.version) <= 0) {
      return
    }
    var updateAge = Date.now() - update.releaseTime
    /* initially, only show an update notification when no tabs are open, in order to minimize disruption */
    if (updateAge < (3 * 7 * 24 * 60 * 60 * 1000)) {
      if (tabs.isEmpty()) {
        displayUpdateNotification()
      }
    } else {
      /* after 3 weeks, start showing a notification on all new tabs */
      if (!tabs.get(tabs.getSelected()).url) {
        displayUpdateNotification()
      }
    }
  }
}

setTimeout(getAvailableUpdates, 30000)
setInterval(getAvailableUpdates, 24 * 60 * 60 * 1000)

function initialize () {
  searchbarPlugins.register('updateNotifications', {
    index: 11,
    trigger: function (text) {
      return !text && performance.now() > 5000
    },
    showResults: showUpdateNotification
  })
}

module.exports = {initialize}

},{"searchbar/searchbarPlugins.js":46,"util/settings/settings.js":63}],49:[function(require,module,exports){
var webviews = require('webviews.js')
var keybindings = require('keybindings.js')

var tabAudio = {
  muteIcon: 'carbon:volume-mute',
  volumeIcon: 'carbon:volume-up',
  getButton: function (tabId) {
    var button = document.createElement('button')
    button.className = 'tab-icon tab-audio-button i'

    button.setAttribute('data-tab', tabId)
    button.setAttribute('role', 'button')

    button.addEventListener('click', function (e) {
      e.stopPropagation()
      tabAudio.toggleAudio(tabId)
    })

    tabAudio.updateButton(tabId, button)

    return button
  },
  updateButton: function (tabId, button) {
    var button = button || document.querySelector('.tab-audio-button[data-tab="{id}"]'.replace('{id}', tabId))
    var tab = tabs.get(tabId)

    var muteIcon = tabAudio.muteIcon
    var volumeIcon = tabAudio.volumeIcon

    if (tab.muted) {
      button.hidden = false
      button.classList.remove(volumeIcon)
      button.classList.add(muteIcon)
    } else if (tab.hasAudio) {
      button.hidden = false
      button.classList.add(volumeIcon)
      button.classList.remove(muteIcon)
    } else {
      button.hidden = true
    }
  },
  toggleAudio: function (tabId) {
    var tab = tabs.get(tabId)
    // can be muted if has audio, can be unmuted if muted
    if (tab.hasAudio || tab.muted) {
      webviews.callAsync(tabId, 'setAudioMuted', !tab.muted)
      tabs.update(tabId, { muted: !tab.muted })
    }
  },
  initialize: function () {
    keybindings.defineShortcut('toggleTabAudio', function () {
      tabAudio.toggleAudio(tabs.getSelected())
    })

    webviews.bindEvent('media-started-playing', function (tabId) {
      tabs.update(tabId, { hasAudio: true })
    })
    webviews.bindEvent('media-paused', function (tabId) {
      tabs.update(tabId, { hasAudio: false })
    })
  }
}

tabAudio.initialize()

module.exports = tabAudio

},{"keybindings.js":10,"webviews.js":68}],50:[function(require,module,exports){
function TabStack (tabStack) {
  this.depth = 15

  if (tabStack) {
    this.stack = tabStack.stack
  } else {
    this.stack = []
  }
}

TabStack.prototype.push = function (closedTab) {
  // Do not store private tabs or blank tabs
  if (closedTab.private
    || closedTab.url === '') {
    return
  }

  if (this.stack.length >= this.depth) {
    this.stack.shift()
  }

  this.stack.push(closedTab)
}

TabStack.prototype.pop = function () {
  return this.stack.pop()
}

module.exports = TabStack

},{}],51:[function(require,module,exports){
class TabList {
  constructor (tabs, parentTaskList) {
    this.tabs = tabs || []
    this.parentTaskList = parentTaskList
  }

  add (tab = {}, options = {}) {
    var tabId = String(tab.id || Math.round(Math.random() * 100000000000000000)) // you can pass an id that will be used, or a random one will be generated.

    var newTab = {
      url: tab.url || '',
      title: tab.title || '',
      id: tabId,
      lastActivity: tab.lastActivity || Date.now(),
      secure: tab.secure,
      private: tab.private || false,
      readerable: tab.readerable || false,
      themeColor: tab.themeColor,
      backgroundColor: tab.backgroundColor,
      scrollPosition: tab.scrollPosition || 0,
      selected: tab.selected || false,
      muted: tab.muted || false,
      hasAudio: false
    }

    if (options.atEnd) {
      this.tabs.push(newTab)
    } else {
      this.tabs.splice(this.getSelectedIndex() + 1, 0, newTab)
    }

    this.parentTaskList.emit('tab-added', tabId)

    return tabId
  }

  update (id, data) {
    if (!this.has(id)) {
      throw new ReferenceError('Attempted to update a tab that does not exist.')
    }
    const index = this.getIndex(id)

    for (var key in data) {
      if (data[key] === undefined) {
        throw new ReferenceError('Key ' + key + ' is undefined.')
      }
      this.tabs[index][key] = data[key]
      this.parentTaskList.emit('tab-updated', id, key)
      // changing URL erases scroll position
      if (key === 'url') {
        this.tabs[index].scrollPosition = 0
        this.parentTaskList.emit('tab-updated', id, 'scrollPosition')
      }
    }
  }

  destroy (id) {
    const index = this.getIndex(id)
    if (index < 0) return false

    tasks.getTaskContainingTab(id).tabHistory.push(this.tabs[index])
    this.tabs.splice(index, 1)

    this.parentTaskList.emit('tab-destroyed', id)

    return index
  }

  destroyAll () {
    // this = [] doesn't work, so set the length of the array to 0 to remove all of the itemss
    this.tabs.length = 0
  }

  get (id) {
    if (!id) { // no id provided, return an array of all tabs
      // it is important to copy the tab objects when returning them. Otherwise, the original tab objects get modified when the returned tabs are modified (such as when processing a url).
      var tabsToReturn = []
      for (var i = 0; i < this.tabs.length; i++) {
        tabsToReturn.push(Object.assign({}, this.tabs[i]))
      }
      return tabsToReturn
    }
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].id === id) {
        return Object.assign({}, this.tabs[i])
      }
    }
    return undefined
  }

  has (id) {
    return this.getIndex(id) > -1
  }

  getIndex (id) {
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].id === id) {
        return i
      }
    }
    return -1
  }

  getSelected () {
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].selected) {
        return this.tabs[i].id
      }
    }
    return null
  }

  getSelectedIndex () {
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].selected) {
        return i
      }
    }
    return null
  }

  getAtIndex (index) {
    return this.tabs[index] || undefined
  }

  setSelected (id) {
    if (!this.has(id)) {
      throw new ReferenceError('Attempted to select a tab that does not exist.')
    }
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].id === id) {
        this.tabs[i].selected = true
        this.tabs[i].lastActivity = Date.now()
      } else if (this.tabs[i].selected) {
        this.tabs[i].selected = false
        this.tabs[i].lastActivity = Date.now()
      }
    }
    this.parentTaskList.emit('tab-selected', id)
  }

  count () {
    return this.tabs.length
  }

  isEmpty () {
    if (!this.tabs || this.tabs.length === 0) {
      return true
    }

    if (this.tabs.length === 1 && !this.tabs[0].url) {
      return true
    }

    return false
  }

  forEach (fun) {
    return this.tabs.forEach(fun)
  }

  splice (...args) {
    return this.tabs.splice.apply(this.tabs, args)
  }

  getStringifyableState () {
    return this.tabs
  }
}

module.exports = TabList

},{}],52:[function(require,module,exports){
const TabList = require('tabState/tab.js')
const TabStack = require('tabRestore.js')

class TaskList {
  constructor () {
    this.selected = null
    this.tasks = [] // each task is {id, name, tabs: [], tabHistory: TabStack}
    this.events = []
    this.pendingCallbacks = []
    this.pendingCallbackTimeout = null
  }

  on (name, fn) {
    this.events.push({name, fn})
  }

  emit (name, ...data) {
    this.events.forEach(listener => {
      if (listener.name === name) {
        this.pendingCallbacks.push([listener.fn, data])

        // run multiple events in one timeout, since calls to setTimeout() appear to be slow (at least based on timeline data)
        if (!this.pendingCallbackTimeout) {
          this.pendingCallbackTimeout = setTimeout(() => {
            this.pendingCallbacks.forEach(t => t[0].apply(this, t[1]))
            this.pendingCallbacks = []
            this.pendingCallbackTimeout = null
          }, 0)
        }
      }
    })
  }

  add (task = {} , index) {
    const newTask = {
      name: task.name || null,
      tabs: new TabList(task.tabs, this),
      tabHistory: new TabStack(task.tabHistory),
      collapsed: task.collapsed, // this property must stay undefined if it is already (since there is a difference between "explicitly uncollapsed" and "never collapsed")
      id: task.id || String(TaskList.getRandomId())
    }

    if (index) {
      this.tasks.splice(index, 0, newTask)
    } else {
      this.tasks.push(newTask)
    }

    this.emit('task-added', newTask.id)

    return newTask.id
  }

  getStringifyableState () {
    return {
      tasks: this.tasks.map(task => Object.assign({}, task, {tabs: task.tabs.getStringifyableState()})),
      selectedTask: this.selected
    }
  }

  get (id) {
    return this.find(task => task.id == id) || null
  }

  getSelected () {
    return this.get(this.selected)
  }

  byIndex (index) {
    return this.tasks[index]
  }

  getTaskContainingTab (tabId) {
    return this.find(task => task.tabs.has(tabId)) || null
  }

  getIndex (id) {
    return this.tasks.findIndex(task => task.id == id)
  }

  setSelected (id) {
    this.selected = id
    window.tabs = this.get(id).tabs
    this.emit('task-selected', id)
    this.emit('tab-selected', tabs.getSelected())
  }

  destroy (id) {
    const index = this.getIndex(id)

    // emit the tab-destroyed event for all tabs in this task
    this.get(id).tabs.forEach(tab => this.emit('tab-destroyed', tab.id))

    this.emit('task-destroyed', id)

    if (index < 0) return false

    this.tasks.splice(index, 1)

    if (this.selected === id) {
      this.selected = null
    }

    return index
  }

  destroyAll () {
    this.tasks = []
    this.selected = null
  }

  getLastActivity (id) {
    var tabs = this.get(id).tabs
    var lastActivity = 0

    for (var i = 0; i < tabs.count(); i++) {
      if (tabs.getAtIndex(i).lastActivity > lastActivity) {
        lastActivity = tabs.getAtIndex(i).lastActivity
      }
    }

    return lastActivity
  }

  isCollapsed (id) {
    var task = this.get(id)
    return task.collapsed || (task.collapsed === undefined && Date.now() - tasks.getLastActivity(task.id) > (7 * 24 * 60 * 60 * 1000))
  }

  getLength () {
    return this.tasks.length
  }

  map (fun) { return this.tasks.map(fun) }

  forEach (fun) { return this.tasks.forEach(fun) }

  indexOf (task) { return this.tasks.indexOf(task) }

  slice (...args) { return this.tasks.slice.apply(this.tasks, args) }

  splice (...args) { return this.tasks.splice.apply(this.tasks, args) }

  filter (...args) { return this.tasks.filter.apply(this.tasks, args) }

  find (filter) {
    for (var i = 0, len = this.tasks.length; i < len; i++) {
      if (filter(this.tasks[i], i, this.tasks)) {
        return this.tasks[i]
      }
    }
  }

  static getRandomId () {
    return Math.round(Math.random() * 100000000000000000)
  }
}

module.exports = TaskList

},{"tabRestore.js":50,"tabState/tab.js":51}],53:[function(require,module,exports){
var webviews = require('webviews.js')
var browserUI = require('browserUI.js')
var searchbarUtils = require('searchbar/searchbarUtils.js')
var urlParser = require('util/urlParser.js')
var searchEngine = require('util/searchEngine.js')
var tabBar = require('navbar/tabBar.js')

const faviconMinimumLuminance = 70 // minimum brightness for a "light" favicon

function getTaskRelativeDate (task) {
  var minimumTime = new Date()
  minimumTime.setHours(0)
  minimumTime.setMinutes(0)
  minimumTime.setSeconds(0)
  minimumTime = minimumTime.getTime()
  minimumTime -= (5 * 24 * 60 * 60 * 1000)

  var time = tasks.getLastActivity(task.id)
  var d = new Date(time)

  // don't show times for recent tasks in order to save space
  if (time > minimumTime) {
    return null
  } else {
    return new Intl.DateTimeFormat(navigator.language, {month: 'long', day: 'numeric', year: 'numeric'}).format(d)
  }
}

function getTaskContainer (id) {
  return document.querySelector('.task-container[data-task="{id}"]'.replace('{id}', id))
}

function removeTabFromOverlay (tabId, task) {
  task.tabs.destroy(tabId)
  webviews.destroy(tabId)

  tabBar.updateAll()

  // if there are no tabs left, remove the task
  if (task.tabs.count() === 0) {
    // remove the task element from the overlay
    getTaskContainer(task.id).remove()
    // close the task
    browserUI.closeTask(task.id)
  }
}

function toggleCollapsed (taskContainer, task) {
  tasks.get(task.id).collapsed = !tasks.isCollapsed(task.id)
  taskContainer.classList.toggle('collapsed')

  var collapseButton = taskContainer.querySelector('.task-collapse-button')
  collapseButton.classList.toggle('carbon:chevron-right')
  collapseButton.classList.toggle('carbon:chevron-down')

  if (tasks.isCollapsed(task.id)) {
    collapseButton.setAttribute('aria-expanded', 'false')
  } else {
    collapseButton.setAttribute('aria-expanded', 'true')
  }
}

var TaskOverlayBuilder = {
  create: {
    task: {
      collapseButton: function (taskContainer, task) {
        var collapseButton = document.createElement('button')
        collapseButton.className = 'task-collapse-button i'
        collapseButton.setAttribute('tabindex', '-1')

        collapseButton.setAttribute('aria-haspopup', 'true')
        if (tasks.isCollapsed(task.id)) {
          collapseButton.classList.add('carbon:chevron-right')
          collapseButton.setAttribute('aria-expanded', 'false')
        } else {
          collapseButton.classList.add('carbon:chevron-down')
          collapseButton.setAttribute('aria-expanded', 'true')
        }
        collapseButton.addEventListener('click', function (e) {
          e.stopPropagation()
          toggleCollapsed(taskContainer, task)
        })
        return collapseButton
      },
      nameInputField: function (task, taskIndex) {
        var input = document.createElement('input')
        input.classList.add('task-name')
        input.classList.add('mousetrap')

        var taskName = l('defaultTaskName').replace('%n', taskIndex + 1)

        input.placeholder = taskName
        input.value = task.name || taskName
        input.spellcheck = false

        input.addEventListener('keyup', function (e) {
          if (e.keyCode === 13) {
            this.blur()
          }

          task.name = this.value
        })

        input.addEventListener('focusin', function (e) {
          if (tasks.isCollapsed(task.id)) {
            this.blur()
            return
          }
          this.select()
        })
        return input
      },
      deleteButton: function (container, task) {
        var deleteButton = document.createElement('button')
        deleteButton.className = 'task-delete-button i carbon:trash-can'
        deleteButton.tabIndex = -1 // needed for keyboardNavigationHelper

        deleteButton.addEventListener('click', function (e) {
          if (task.tabs.isEmpty()) {
            container.remove()
            browserUI.closeTask(task.id)
          } else {
            container.classList.add('deleting')
            setTimeout(function () {
              if (container.classList.contains('deleting')) {
                container.style.opacity = 0
                // transitionend would be nice here, but it doesn't work if the element is removed from the DOM
                setTimeout(function () {
                  container.remove()
                  browserUI.closeTask(task.id)
                }, 500)
              }
            }, 10000)
          }
        })
        return deleteButton
      },
      deleteWarning: function (container, task) {
        var deleteWarning = document.createElement('div')
        deleteWarning.className = 'task-delete-warning'

        deleteWarning.innerHTML = l('taskDeleteWarning').unsafeHTML
        deleteWarning.addEventListener('click', function (e) {
          container.classList.remove('deleting')
        })
        return deleteWarning
      },

      actionContainer: function (taskContainer, task, taskIndex) {
        var taskActionContainer = document.createElement('div')
        taskActionContainer.className = 'task-action-container'

        // add the collapse button
        var collapseButton = this.collapseButton(taskContainer, task)
        taskActionContainer.appendChild(collapseButton)

        // add the input for the task name
        var input = this.nameInputField(task, taskIndex)
        taskActionContainer.appendChild(input)

        // add the delete button
        var deleteButton = this.deleteButton(taskContainer, task)
        taskActionContainer.appendChild(deleteButton)

        return taskActionContainer
      },
      infoContainer: function (task) {
        var infoContainer = document.createElement('div')
        infoContainer.className = 'task-info-container'

        var date = getTaskRelativeDate(task)

        if (date) {
          var dateEl = document.createElement('span')
          dateEl.className = 'task-date'
          dateEl.textContent = date
          infoContainer.appendChild(dateEl)
        }

        var lastTabEl = document.createElement('span')
        lastTabEl.className = 'task-last-tab-title'
        var lastTabTitle = task.tabs.get().sort((a, b) => b.lastActivity - a.lastActivity)[0].title

        if (lastTabTitle) {
          lastTabTitle = searchbarUtils.getRealTitle(lastTabTitle)
          if (lastTabTitle.length > 40) {
            lastTabTitle = lastTabTitle.substring(0, 40) + '...'
          }
          lastTabEl.textContent = searchbarUtils.getRealTitle(lastTabTitle)
        }
        infoContainer.appendChild(lastTabEl)

        var favicons = []
        var faviconURLs = []

        task.tabs.get().sort((a, b) => b.lastActivity - a.lastActivity).forEach(function (tab) {
          if (tab.favicon) {
            favicons.push(tab.favicon)
            faviconURLs.push(tab.favicon.url)
          }
        })

        if (favicons.length > 0) {
          var faviconsEl = document.createElement('span')
          faviconsEl.className = 'task-favicons'
          favicons = favicons.filter((i, idx) => faviconURLs.indexOf(i.url) === idx)

          favicons.forEach(function (favicon) {
            var img = document.createElement('img')
            img.src = favicon.url
            if (favicon.luminance < faviconMinimumLuminance) {
              img.classList.add('dark-favicon')
            }
            faviconsEl.appendChild(img)
          })

          infoContainer.appendChild(faviconsEl)
        }

        return infoContainer
      },
      container: function (task, taskIndex) {
        var container = document.createElement('div')
        container.className = 'task-container'

        if (task.id !== tasks.getSelected().id && tasks.isCollapsed(task.id)) {
          container.classList.add('collapsed')
        }
        if (task.id === tasks.getSelected().id) {
          container.classList.add('selected')
        }
        container.setAttribute('data-task', task.id)

        container.addEventListener('click', function (e) {
          if (tasks.isCollapsed(task.id)) {
            toggleCollapsed(container, task)
          }
        })

        var taskActionContainer = this.actionContainer(
          container,
          task,
          taskIndex
        )
        container.appendChild(taskActionContainer)

        var infoContainer = this.infoContainer(task)
        container.appendChild(infoContainer)

        var deleteWarning = this.deleteWarning(container, task)
        container.appendChild(deleteWarning)

        var tabContainer = TaskOverlayBuilder.create.tab.container(task)
        container.appendChild(tabContainer)

        return container
      }
    },

    tab: {
      element: function (tabContainer, task, tab) {
        var data = {
          classList: ['task-tab-item'],
          delete: function () {
            removeTabFromOverlay(tab.id, task)
          },
          showDeleteButton: true
        }

        if (tab.private) {
          data.icon = 'carbon:view-off'
        } else if (tab.favicon) {
          data.iconImage = tab.favicon.url

          if (tab.favicon.luminance && tab.favicon.luminance < faviconMinimumLuminance) {
            data.classList.push('has-dark-favicon')
          }
        }

        var source = urlParser.getSourceURL(tab.url)
        var searchQuery = searchEngine.getSearch(source)

        if (searchQuery) {
          data.title = searchQuery.search
          data.secondaryText = searchQuery.engine
        } else {
          data.title = tab.title || l('newTabLabel')
          data.secondaryText = urlParser.basicURL(source)
        }

        var el = searchbarUtils.createItem(data)

        el.setAttribute('data-tab', tab.id)

        el.addEventListener('click', function (e) {
          browserUI.switchToTask(this.parentNode.getAttribute('data-task'))
          browserUI.switchToTab(this.getAttribute('data-tab'))

          taskOverlay.hide()
        })
        return el
      },

      container: function (task) {
        var tabContainer = document.createElement('ul')
        tabContainer.className = 'task-tabs-container'
        tabContainer.setAttribute('data-task', task.id)

        if (task.tabs) {
          for (var i = 0; i < task.tabs.count(); i++) {
            var el = this.element(tabContainer, task, task.tabs.getAtIndex(i))
            tabContainer.appendChild(el)
          }
        }

        return tabContainer
      }
    }
  }
// extend with other helper functions?
}

module.exports = function createTaskContainer (task, index) {
  return TaskOverlayBuilder.create.task.container(task, index)
}

},{"browserUI.js":4,"navbar/tabBar.js":19,"searchbar/searchbarUtils.js":47,"util/searchEngine.js":62,"util/urlParser.js":65,"webviews.js":68}],54:[function(require,module,exports){
/* implements userscript support */

var webviews = require('webviews.js')
var settings = require('util/settings/settings.js')
var bangsPlugin = require('searchbar/bangsPlugin.js')
var tabEditor = require('navbar/tabEditor.js')
var searchbarPlugins = require('searchbar/searchbarPlugins.js')
var urlParser = require('util/urlParser.js')

function parseTampermonkeyFeatures (content) {
  var parsedFeatures = {}
  var foundFeatures = false

  var lines = content.split('\n')

  var isInFeatures = false
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '// ==UserScript==') {
      isInFeatures = true
      continue
    }
    if (lines[i].trim() === '// ==/UserScript==') {
      isInFeatures = false
      break
    }
    if (isInFeatures && lines[i].startsWith('//')) {
      foundFeatures = true
      var feature = lines[i].replace('//', '').trim()
      var featureName = feature.split(' ')[0]
      var featureValue = feature.replace(featureName + ' ', '').trim()
      featureName = featureName.replace('@', '')

      // special case: find the localized name for the current locale
      if (featureName.startsWith('name:') && featureName.split(':')[1].substring(0, 2) === navigator.language.substring(0, 2)) {
        featureName = 'name:local'
      }
      if (parsedFeatures[featureName]) {
        parsedFeatures[featureName].push(featureValue)
      } else {
        parsedFeatures[featureName] = [featureValue]
      }
    }
  }
  if (foundFeatures) {
    return parsedFeatures
  } else {
    return null
  }
}

// checks if a URL matches a wildcard pattern
function urlMatchesPattern (url, pattern) {
  var idx = -1
  var parts = pattern.split('*')
  for (var i = 0; i < parts.length; i++) {
    idx = url.indexOf(parts[i], idx)
    if (idx === -1) {
      return false
    }
    idx += parts[i].length
  }
  return idx !== -1
}

const userscripts = {
  scripts: [], // {options: {}, content}
  loadScripts: function () {
    userscripts.scripts = []

    var path = window.require('path')
    var scriptDir = path.join(window.globalArgs['user-data-path'], 'userscripts')

    fs.readdir(scriptDir, function (err, files) {
      if (err || files.length === 0) {
        return
      }

      // store the scripts in memory
      files.forEach(function (filename) {
        if (filename.endsWith('.js')) {
          fs.readFile(path.join(scriptDir, filename), 'utf-8', function (err, file) {
            if (err || !file) {
              return
            }

            var domain = filename.slice(0, -3)
            if (domain.startsWith('www.')) {
              domain = domain.slice(4)
            }
            if (!domain) {
              return
            }

            var tampermonkeyFeatures = parseTampermonkeyFeatures(file)
            if (tampermonkeyFeatures) {
              var scriptName = tampermonkeyFeatures['name:local'] || tampermonkeyFeatures['name']
              if (scriptName) {
                scriptName = scriptName[0]
              } else {
                scriptName = filename
              }
              userscripts.scripts.push({ options: tampermonkeyFeatures, content: file, name: scriptName })
            } else {
              // legacy script
              if (domain === 'global') {
                userscripts.scripts.push({
                  options: {
                    match: ['*']
                  },
                  content: file,
                  name: filename
                })
              } else {
                userscripts.scripts.push({
                  options: {
                    match: ['*://' + domain]
                  },
                  content: file,
                  name: filename
                })
              }
            }
          })
        }
      })
    })
  },
  getMatchingScripts: function (src) {
    return userscripts.scripts.filter(function (script) {
      if (
        (!script.options.match && !script.options.include) ||
        (script.options.match && script.options.match.some(pattern => urlMatchesPattern(src, pattern))) ||
        (script.options.include && script.options.include.some(pattern => urlMatchesPattern(src, pattern)))) {
        if (!script.options.exclude || !script.options.exclude.some(pattern => urlMatchesPattern(src, pattern))) {
          return true
        }
      }
    })
  },
  runScript: function (tabId, script) {
    if (urlParser.isInternalURL(tabs.get(tabId).url)) {
      return
    }
    webviews.callAsync(tabId, 'executeJavaScript', [script.content, false, null])
  },
  onPageLoad: function (tabId) {
    if (userscripts.scripts.length === 0) {
      return
    }

    var src = tabs.get(tabId).url

    userscripts.getMatchingScripts(src).forEach(function (script) {
      // TODO run different types of scripts at the correct time
      if (!script.options['run-at'] || script.options['run-at'].some(i => ['document-start', 'document-body', 'document-end', 'document-idle'].includes(i))) {
        userscripts.runScript(tabId, script)
      }
    })
  },
  initialize: function () {
    settings.listen('userscriptsEnabled', function (value) {
      if (value === true) {
        userscripts.loadScripts()
      } else {
        userscripts.scripts = []
      }
    })
    webviews.bindEvent('dom-ready', userscripts.onPageLoad)

    bangsPlugin.registerCustomBang({
      phrase: '!run',
      snippet: l('runUserscript'),
      isAction: false,
      showSuggestions: function (text, input, event) {
        searchbarPlugins.reset('bangs')

        var isFirst = true
        userscripts.scripts.forEach(function (script) {
          if (script.name.toLowerCase().startsWith(text.toLowerCase())) {
            searchbarPlugins.addResult('bangs', {
              title: script.name,
              fakeFocus: isFirst && text,
              click: function () {
                tabEditor.hide()
                userscripts.runScript(tabs.getSelected(), script)
              }
            })
            isFirst = false
          }
        })
      },
      fn: function (text) {
        if (!text) {
          return
        }
        var matchingScript = userscripts.scripts.find(script => script.name.toLowerCase().startsWith(text.toLowerCase()))
        if (matchingScript) {
          userscripts.runScript(tabs.getSelected(), matchingScript)
        }
      }
    })
  }
}

module.exports = userscripts

},{"navbar/tabEditor.js":21,"searchbar/bangsPlugin.js":35,"searchbar/searchbarPlugins.js":46,"util/settings/settings.js":63,"util/urlParser.js":65,"webviews.js":68}],55:[function(require,module,exports){
var urlParser = require('util/urlParser.js')

function autocomplete (input, strings) {
  // if there is text after the selection, we can never autocomplete
  if (input.selectionEnd !== input.value.length) {
    return {
      valid: false
    }
  }

  var text = input.value.substring(0, input.selectionStart)

  for (var i = 0; i < strings.length; i++) {
    // check if the item can be autocompleted
    if (strings[i].toLowerCase().indexOf(text.toLowerCase()) === 0) {
      input.value = text + strings[i].substring(input.selectionStart)
      input.setSelectionRange(text.length, strings[i].length)
      input.setAttribute('data-autocomplete', strings[i])

      return {
        valid: true,
        matchIndex: i
      }
    }
  }
  input.removeAttribute('data-autocomplete')
  return {
    valid: false
  }
}

// autocompletes based on a result item
// returns: 1 - the exact URL was autocompleted, 0 - the domain was autocompleted, -1: nothing was autocompleted
function autocompleteURL (input, url) {
  var urlObj = new URL(url)
  var hostname = urlObj.hostname

  // the different variations of the URL we can autocomplete
  var possibleAutocompletions = [
    // we start with the domain, including any non-standard ports (such as localhost:8080)
    hostname + (urlObj.port ? ':' + urlObj.port : ''),
    // if that doesn't match, try the hostname without the www instead. The regex requires a slash at the end, so we add one, run the regex, and then remove it
    (hostname + '/').replace(urlParser.startingWWWRegex, '$1').replace('/', ''),
    // then try the whole URL
    urlParser.prettyURL(url),
    // then try the URL with querystring
    urlParser.basicURL(url),
    // then just try the URL with protocol
    url
  ]

  var autocompleteResult = autocomplete(input, possibleAutocompletions)

  if (!autocompleteResult.valid) {
    return -1
  } else if (autocompleteResult.matchIndex < 2 && urlObj.pathname !== '/') {
    return 0
  } else {
    return 1
  }
}

module.exports = { autocomplete, autocompleteURL }

},{"util/urlParser.js":65}],56:[function(require,module,exports){
// defines schema for the browsingData database
// requires Dexie.min.js

if (typeof Dexie === 'undefined' && typeof require !== 'undefined') {
  var Dexie = require('dexie')
}

var dbErrorMessage = 'Internal error opening backing store for indexedDB.open'
var dbErrorAlertShown = false

var db = new Dexie('browsingData2')

db.version(1).stores({
  /*
  color - the main color of the page, extracted from the page icon
  pageHTML - a saved copy of the page's HTML, when it was last visited. Removed in 1.6.0, so all pages visited after then will have an empty string in this field.
  extractedText - the text content of the page, extracted from pageHTML. Unused as of 1.7.0, should be removed completely in a future version.
  searchIndex - an array of words on the page (created from extractedText), used for full-text searchIndex
  isBookmarked - whether the page is a bookmark
  extraData - other metadata about the page
  */
  places: '++id, &url, title, color, visitCount, lastVisit, pageHTML, extractedText, *searchIndex, isBookmarked, *tags, metadata',
  readingList: 'url, time, visitCount, pageHTML, article, extraData' // TODO remove this (reading list is no longer used)
})

db.open().then(function () {
  console.log('database opened ', performance.now())
}).catch(function (error) {
  if (error.message.indexOf(dbErrorMessage) !== -1 && !dbErrorAlertShown) {
    window && window.alert && window.alert(l('multipleInstancesErrorMessage'))
    remote.app.quit()

    dbErrorAlertShown = true
  }
})

if (typeof module !== 'undefined') {
  module.exports = { db }
}

},{"dexie":75}],57:[function(require,module,exports){
var hosts = []

var HOSTS_FILE = process.platform === 'win32'
  ? 'C:/Windows/System32/drivers/etc/hosts'
  : '/etc/hosts'

function truncatedHostsFileLines (data, limit) {
  return data.length > limit
    ? data.substring(0, limit).split('\n').slice(0, -1)
    : data.split('\n')
}

fs.readFile(HOSTS_FILE, 'utf8', function (err, data) {
  if (err) {
    console.warn('error retrieving hosts file', err)
    return
  }

  var hostsMap = {} // this is used to deduplicate the list

  const lines = truncatedHostsFileLines(data, 128 * 1024)

  lines.forEach(function (line) {
    if (line.startsWith('#')) {
      return
    }
    line.split(/\s/g).forEach(function (host) {
      if (host.length > 0 && host !== '255.255.255.255' && host !== 'broadcasthost' && !hostsMap[host]) {
        hosts.push(host)
        hostsMap[host] = true
      }
    })
  })
})

module.exports = hosts

},{}],58:[function(require,module,exports){
var defaultKeyMap = {
  'addTab': 'mod+t',
  'addPrivateTab': 'shift+mod+p',
  'duplicateTab': 'shift+mod+d',
  'addTask': 'mod+n',
  'toggleTasks': 'shift+mod+e',
  'goBack': 'mod+left',
  'goForward': 'mod+right',
  'enterEditMode': ['mod+l', 'mod+k'],
  'runShortcut': 'mod+e',
  'completeSearchbar': 'mod+enter',
  'closeTab': 'mod+w',
  'restoreTab': 'shift+mod+t',
  'gotoFirstTab': 'shift+mod+9',
  'gotoLastTab': 'mod+9',
  'addToFavorites': 'mod+d',
  'toggleReaderView': 'shift+mod+r',
  'switchToNextTab': ['option+mod+right', 'ctrl+tab', 'shift+mod+pagedown'],
  'switchToPreviousTab': ['option+mod+left', 'shift+ctrl+tab', 'shift+mod+pageup'],
  'switchToNextTask': 'mod+]',
  'switchToPreviousTask': 'mod+[',
  'closeAllTabs': 'shift+mod+n',
  'reload': 'mod+r',
  'showMenu': 'ctrl+m',
  'followLink': 'mod+enter',
  'fillPassword': 'mod+\\',
  'toggleTabAudio': 'shift+mod+m'
}
/* Utility function to override default mapping with user settings */
function userKeyMap (settings) {
  var keyMapCopy = Object.assign({}, defaultKeyMap)
  if (settings) {
    // override the default keymap by the user defined ones
    Object.keys(keyMapCopy).forEach(function (key) {
      if (settings[key]) {
        keyMapCopy[key] = settings[key]
      }
    })
  }
  return keyMapCopy
}

if (typeof module !== 'undefined') {
  module.exports = {defaultKeyMap, userKeyMap}
}

},{}],59:[function(require,module,exports){
/*
Creates a group if items that can be navigated through using arrow keys or the tab key
*/

const keyboardNavigationHelper = {
  groups: {}, // name: [containers]
  moveFocus: function (group, direction) { // 1: forward, -1: backward
    var items = []
    var realFocusItem
    var fakeFocusItem
    keyboardNavigationHelper.groups[group].forEach(function (container) {
      items = items.concat(Array.from(container.querySelectorAll('input:not(.ignores-keyboard-focus), [tabindex="-1"]:not(.ignores-keyboard-focus)')))
      if (!realFocusItem) {
        realFocusItem = container.querySelector(':focus')
      }
      if (!fakeFocusItem) {
        fakeFocusItem = container.querySelector('.fakefocus')
      }
    })

    var currentItem = fakeFocusItem || realFocusItem

    if (!items) {
      return
    }
    if (!currentItem) {
      items[0].focus()
      return
    }

    currentItem.classList.remove('fakefocus')

    while (items.length > 1) {
      var index = items.indexOf(currentItem)

      var nextItem
      if (items[index + direction]) {
        nextItem = index + direction
      } else if (index === 0 && direction === -1) {
        nextItem = items.length - 1
      } else if (index === items.length - 1 && direction === 1) {
        nextItem = 0
      }
      items[nextItem].focus()

      if (document.activeElement !== items[nextItem]) {
        // this item isn't focusable, try again
        items.splice(nextItem, 1)
      } else {
        // done
        break
      }
    }

  },
  handleKeypress: function (group, e) {
    if (e.keyCode === 9 && e.shiftKey) { // shift+tab
      e.preventDefault()
      keyboardNavigationHelper.moveFocus(group, -1)
    } else if (e.keyCode === 9 || e.keyCode === 40) { // tab or arrowdown key
      e.preventDefault()
      keyboardNavigationHelper.moveFocus(group, 1)
    } else if (e.keyCode === 38) { // arrowup key
      e.preventDefault()
      keyboardNavigationHelper.moveFocus(group, -1)
    }
  },
  addToGroup: function (group, container) {
    if (!keyboardNavigationHelper.groups[group]) {
      keyboardNavigationHelper.groups[group] = []
    }

    // insert the containers so that they are ordered based on DOM position
    var pos = 0
    // compareDocumentPosition is a bit of an unusual API
    while (pos <= keyboardNavigationHelper.groups[group].length - 1 && keyboardNavigationHelper.groups[group][pos].compareDocumentPosition(container) & Node.DOCUMENT_POSITION_FOLLOWING) {
      pos++
    }
    keyboardNavigationHelper.groups[group].splice(pos, 0, container)

    container.addEventListener('keydown', function (e) {
      keyboardNavigationHelper.handleKeypress(group, e)
    })
  }
}

module.exports = keyboardNavigationHelper

},{}],60:[function(require,module,exports){
/*
Helper class to control child process output.
Bufferizes output from stdout and stderr, waits until the process exits,
and then resolves the promise with gathered data.
*/

const { spawn, spawnSync } = window.require('child_process')

const worker = new Worker('js/util/processWorker.js');

let processPath = process.env.PATH

// we need to locate the op binary in this directory on macOS - see https://github.com/minbrowser/min/issues/1028
// normally, it is present in the path when running in development, but not when the app is launched after being packaged
if (platformType === "mac" && !processPath.includes("/usr/local/bin")) {
  processPath += ':/usr/local/bin'
}

const customEnv = Object.assign({}, process.env, {PATH: processPath})

//see https://github.com/minbrowser/min/issues/1028#issuecomment-647235653
const maxBufferSize = 25 * 1024 * 1024

class ProcessSpawner {
  constructor(command, args) {
    this.command = command
    this.args = args
    this.data = ""
    this.error = ""
  }

  async execute() {
    return new Promise((resolve, reject) => {
      const process = spawn(this.command, this.args, { env: customEnv, maxBuffer: maxBufferSize })

      process.stdout.on('data', (data) => {
        this.data += data
      })

      process.stderr.on('data', (data) => {
        this.error += data
      })

      process.on('close', (code) => {
        if (code !== 0) {
          reject({ error: this.error, data: this.data })
        } else {
          resolve(this.data)
        }
      })

      process.on('error', (data) => {
        reject({ error: data })
      })
    })
  }

  executeSync(input) {
    const process = spawnSync(this.command, this.args, { input: input, encoding: "utf8", env: customEnv, maxBuffer: maxBufferSize })
    return process.output[1].slice(0, -1)
  }

  executeSyncInAsyncContext(input) {
    return new Promise((resolve, reject) => {
      let taskId = Math.random();
      worker.onmessage = function (e) {
        if (e.data.taskId === taskId) {
          if (e.data.error) {
            reject(e.data.error)
          } else {
            resolve(e.data.result);
          }
        }
      }
      worker.postMessage({
        command: this.command,
        args: this.args,
        input: input,
        customEnv: customEnv,
        maxBuffer: maxBufferSize,
        taskId: taskId,
      })
    })
  }

  checkCommandExists() {
    return new Promise((resolve, reject) => {
      const checkCommand = (platformType === "windows") ? 'where' : 'which'
      const process = spawn(checkCommand, [this.command], { env: customEnv })

      process.stdout.on('data', (data) => {
        if (data.length > 0) {
          resolve(true)
        }
      })

      process.on('close', (code) => {
        //if we didn't get any output, the command doesn't exist
        resolve(false)
      })

      process.on('error', (data) => {
        resolve(false)
      })
    })
  }
}

module.exports = ProcessSpawner

},{}],61:[function(require,module,exports){
function formatRelativeDate (date) {
  var currentTime = Date.now()
  var startOfToday = new Date()
  startOfToday.setHours(0)
  startOfToday.setMinutes(0)
  startOfToday.setSeconds(0)
  var timeElapsedToday = currentTime - startOfToday.getTime()
  var msPerDay = (24 * 60 * 60 * 1000)

  var relativeDateRanges = [
    [0, 60000, l('timeRangeJustNow')],
    [60000, 300000, l('timeRangeMinutes')],
    [300000, 3600000, l('timeRangeHour')],
    [3600000, timeElapsedToday, l('timeRangeToday')],
    [timeElapsedToday, timeElapsedToday + msPerDay, l('timeRangeYesterday')],
    [timeElapsedToday + msPerDay, 604800000, l('timeRangeWeek')],
    [604800000, 2592000000, l('timeRangeMonth')],
    [2592000000, 31104000000, l('timeRangeYear')],
    [31104000000, Infinity, l('timeRangeLongerAgo')]
  ]

  var diff = Date.now() - date
  for (var i = 0; i < relativeDateRanges.length; i++) {
    if (relativeDateRanges[i][0] <= diff && relativeDateRanges[i][1] >= diff) {
      return relativeDateRanges[i][2]
    }
  }
  return null
}

module.exports = formatRelativeDate

},{}],62:[function(require,module,exports){
if (typeof require !== 'undefined') {
  var settings = require('util/settings/settings.js')
}
// otherwise, assume window.settings exists already

var currentSearchEngine = {
  name: '',
  searchURL: '%s'
}

var defaultSearchEngine = 'DuckDuckGo'

var searchEngines = {
  DuckDuckGo: {
    name: 'DuckDuckGo',
    searchURL: 'https://duckduckgo.com/?q=%s&t=min',
    queryParam: 'q'
  },
  Google: {
    name: 'Google',
    searchURL: 'https://www.google.com/search?q=%s',
    queryParam: 'q'
  },
  Bing: {
    name: 'Bing',
    searchURL: 'https://www.bing.com/search?q=%s',
    queryParam: 'q'
  },
  Yahoo: {
    name: 'Yahoo',
    searchURL: 'https://search.yahoo.com/yhs/search?p=%s',
    queryParam: 'p'
  },
  Baidu: {
    name: 'Baidu',
    searchURL: 'https://www.baidu.com/s?wd=%s',
    queryParam: 'wd'
  },
  StartPage: {
    name: 'StartPage',
    searchURL: 'https://www.startpage.com/do/search?q=%s',
    queryParam: 'q'
  },
  Ecosia: {
    name: 'Ecosia',
    searchURL: 'https://www.ecosia.org/search?q=%s',
    queryParam: 'q'
  },
  Qwant: {
    name: 'Qwant',
    searchURL: 'https://www.qwant.com/?q=%s',
    queryParam: 'q'
  },
  Wikipedia: {
    name: 'Wikipedia',
    searchURL: 'https://wikipedia.org/w/index.php?search=%s',
    queryParam: 'search'
  },
  Yandex: {
    name: 'Yandex',
    searchURL: 'https://yandex.com/search/?text=%s',
    queryParam: 'text'
  },
  none: {
    name: 'none',
    searchURL: 'http://%s'
  }
}

for (const e in searchEngines) {
  try {
    searchEngines[e].urlObj = new URL(searchEngines[e].searchURL)
  } catch (e) {}
}

settings.listen('searchEngine', function (value) {
  if (typeof value === 'string') {
    // migrate from legacy format
    value = { name: value }
    settings.set('searchEngine', value)
  }

  if (value && value.name) {
    currentSearchEngine = searchEngines[value.name]
  } else if (value && value.url) {
    var searchDomain
    try {
      searchDomain = new URL(value.url).hostname.replace('www.', '')
    } catch (e) {}
    currentSearchEngine = {
      name: searchDomain || 'custom',
      searchURL: value.url,
      custom: true
    }
  } else {
    currentSearchEngine = searchEngines[defaultSearchEngine]
  }
})

var searchEngine = {
  getCurrent: function () {
    return currentSearchEngine
  },
  getSearch: function (url) {
    var urlObj
    try {
      urlObj = new URL(url)
    } catch (e) {
      return null
    }
    for (var e in searchEngines) {
      if (!searchEngines[e].urlObj) {
        continue
      }
      if (searchEngines[e].urlObj.hostname === urlObj.hostname && searchEngines[e].urlObj.pathname === urlObj.pathname) {
        if (urlObj.searchParams.get(searchEngines[e].queryParam)) {
          return {
            engine: searchEngines[e].name,
            search: urlObj.searchParams.get(searchEngines[e].queryParam)
          }
        }
      }
    }
    return null
  }
}

if (typeof module === 'undefined') {
  window.currentSearchEngine = currentSearchEngine
} else {
  module.exports = searchEngine
}

},{"util/settings/settings.js":63}],63:[function(require,module,exports){
var settings = {
  filePath: (process.type === 'renderer' ? window.globalArgs['user-data-path'] : userDataPath) + (process.platform === 'win32' ? '\\' : '/') + 'settings.json',
  list: {},
  onChangeCallbacks: [],
  save: function (cb) {
    fs.writeFile(settings.filePath, JSON.stringify(settings.list), function (e) {
      if (cb) {
        cb()
      }
    })
    if (process.type === 'renderer') {
      ipc.send('receiveSettingsData', settings.list)
    } else if (process.type === 'browser' && mainWindow) {
      mainWindow.webContents.send('receiveSettingsData', settings.list)
    }
  },
  runChangeCallacks () {
    settings.onChangeCallbacks.forEach(function (listener) {
      if (listener.key) {
        listener.cb(settings.list[listener.key])
      } else {
        listener.cb()
      }
    })
  },
  get: function (key) {
    return settings.list[key]
  },
  listen: function (key, cb) {
    if (key && cb) {
      cb(settings.get(key))
      settings.onChangeCallbacks.push({key, cb})
    } else if (key) {
      // global listener
      settings.onChangeCallbacks.push({cb: key})
    }
  },
  set: function (key, value, cb) {
    settings.list[key] = value
    settings.save(cb)
    settings.runChangeCallacks()
  },
  initialize: function () {
    var fileData
    try {
      fileData = fs.readFileSync(settings.filePath, 'utf-8')
    } catch (e) {
      console.warn(e)
    }
    if (fileData) {
      settings.list = JSON.parse(fileData)
    }

    ipc.on('receiveSettingsData', function (e, data) {
      settings.list = data
      settings.runChangeCallacks()
    })
  }
}

settings.initialize()
module.exports = settings

},{}],64:[function(require,module,exports){
if (typeof require !== 'undefined') {
  var settings = require('util/settings/settings.js')
}

function shouldEnableDarkMode () {
  var hours = new Date().getHours()
  return (hours > 21 || hours < 6)
}

function enableDarkMode () {
  document.body.classList.add('dark-mode')
  window.isDarkMode = true
  requestAnimationFrame(function () {
    window.dispatchEvent(new CustomEvent('themechange'))
  })
}

function disableDarkMode () {
  document.body.classList.remove('dark-mode')
  window.isDarkMode = false
  requestAnimationFrame(function () {
    window.dispatchEvent(new CustomEvent('themechange'))
  })
}

var themeInterval = null

function initialize () {
  settings.listen('darkMode', function (value) {
    clearInterval(themeInterval)

    // 1 or true: dark mode is always enabled
    if (value === 1 || value === true) {
      enableDarkMode()
      return
    }

    // 0 or undefined: automatic dark mode
    if (value === undefined || value === 0 || value === false) {
      // If it is night and darkMode is set to auto/default
      if (shouldEnableDarkMode()) {
        enableDarkMode()
      } else {
        disableDarkMode()
      }

      themeInterval = setInterval(function () {
        if (shouldEnableDarkMode()) {
          if (!window.isDarkMode) {
            enableDarkMode()
          }
        } else if (window.isDarkMode) {
          disableDarkMode()
        }
      }, 10000)
    }

    // -1: never enable

    if (value === -1) {
      disableDarkMode()
    }
  })
}

if (typeof module !== 'undefined') {
  module.exports = {initialize}
} else {
  initialize()
}

},{"util/settings/settings.js":63}],65:[function(require,module,exports){
const searchEngine = require('util/searchEngine.js')

const hosts = require('./hosts.js')

var urlParser = {
  startingWWWRegex: /www\.(.+\..+\/)/g,
  trailingSlashRegex: /\/$/g,
  isURL: function (url) {
    return url.indexOf('http://') === 0 || url.indexOf('https://') === 0 || url.indexOf('file://') === 0 || url.indexOf('about:') === 0 || url.indexOf('chrome:') === 0 || url.indexOf('data:') === 0
  },
  removeProtocol: function (url) {
    if (!urlParser.isURL(url)) {
      return url
    }

    var withoutProtocol = url.replace('http://', '').replace('https://', '').replace('file://', '') // chrome:, about:, data: protocols intentionally not removed

    if (withoutProtocol.indexOf('www.') === 0) {
      return withoutProtocol.replace('www.', '')
    } else {
      return withoutProtocol
    }
  },
  isURLMissingProtocol: function (url) {
    // assume anything with no spaces and a . is a URL
    if (url.indexOf(' ') === -1 && url.indexOf('.') > 0) {
      return true
    }
    // a host from the hosts file is also a URL
    var hostPart = url.replace(/(:|\/).+/, '')
    return hosts.indexOf(hostPart) > -1
  },
  parse: function (url) {
    url = url.trim() // remove whitespace common on copy-pasted url's

    if (!url) {
      return 'about:blank'
    }

    if (url.indexOf('view-source:') === 0) {
      var realURL = url.replace('view-source:', '')

      return 'view-source:' + urlParser.parse(realURL)
    }

    // if the URL is an internal URL, convert it to the correct file:// url
    if (url.startsWith('min:')) {
      try {
        var urlObj = new URL(url)
        var path = urlObj.pathname.replace('//', '')
        if (/^[a-zA-Z]+$/.test(path)) {
          // only paths with letters are allowed
          return urlParser.getFileURL(__dirname + '/pages/' + path + '/index.html' + urlObj.search)
        }
      } catch (e) {}
    }

    // if the url starts with a (supported) protocol, do nothing
    if (urlParser.isURL(url)) {
      return url
    }

    // if the url doesn't have a space and has a ., or is a host from hosts file, assume it is a url without a protocol
    if (urlParser.isURLMissingProtocol(url)) {
      return 'http://' + url
    }
    // else, do a search
    return searchEngine.getCurrent().searchURL.replace('%s', encodeURIComponent(url))
  },
  basicURL: function (url) {
    return urlParser.removeProtocol(url).replace(urlParser.trailingSlashRegex, '')
  },
  prettyURL: function (url) {
    try {
      var urlOBJ = new URL(url)
      return (urlOBJ.hostname + urlOBJ.pathname).replace(urlParser.startingWWWRegex, '$1').replace(urlParser.trailingSlashRegex, '')
    } catch (e) { // URL constructor will throw an error on malformed URLs
      return url
    }
  },
  isInternalURL: function (url) {
    return url.startsWith(urlParser.getFileURL(__dirname))
  },
  getSourceURL: function (url) {
    // converts internal URLs (like the PDF viewer or the reader view) to the URL of the page they are displaying
    if (urlParser.isInternalURL(url)) {
      var representedURL
      try {
        representedURL = new URLSearchParams(new URL(url).search).get('url')
      } catch (e) {}
      if (representedURL) {
        return representedURL
      } else {
        try {
          var pageName = url.match(/\/pages\/([a-zA-Z]+)\//)
          var urlObj = new URL(url)
          if (pageName) {
            return 'min://' + pageName[1] + urlObj.search
          }
        } catch (e) {}
      }
    }
    return url
  },
  getFileURL: function (path) {
    if (window.platformType === 'windows') {
      // convert backslash to forward slash
      path = path.replace(/\\/g, '/')
      // https://blogs.msdn.microsoft.com/ie/2006/12/06/file-uris-in-windows/

      // UNC path?
      if (path.startsWith('//')) {
        return encodeURI('file:' + path)
      } else {
        return encodeURI('file:///' + path)
      }
    } else {
      return encodeURI('file://' + path)
    }
  }
}

module.exports = urlParser

},{"./hosts.js":57,"util/searchEngine.js":62}],66:[function(require,module,exports){
var webviews = require('webviews.js')

var webviewGestures = {
  showBackArrow: function () {
    // this is temporarily disabled until we find a way to make it work with BrowserViews
    return
    var backArrow = document.getElementById('leftArrowContainer')
    backArrow.classList.toggle('shown')
    backArrow.classList.toggle('animating')
    setTimeout(function () {
      backArrow.classList.toggle('shown')
    }, 600)
    setTimeout(function () {
      backArrow.classList.toggle('animating')
    }, 900)
  },
  showForwardArrow: function () {
    // this is temporarily disabled until we find a way to make it work with BrowserViews
    return
    var forwardArrow = document.getElementById('rightArrowContainer')
    forwardArrow.classList.toggle('shown')
    forwardArrow.classList.toggle('animating')
    setTimeout(function () {
      forwardArrow.classList.toggle('shown')
    }, 600)
    setTimeout(function () {
      forwardArrow.classList.toggle('animating')
    }, 900)
  },
  zoomWebviewBy: function (tabId, amt) {
    webviews.callAsync(tabId, 'zoomFactor', function (err, oldFactor) {
      webviews.callAsync(tabId, 'zoomFactor', Math.min(webviewMaxZoom, Math.max(webviewMinZoom, oldFactor + amt)))
    })
  },
  zoomWebviewIn: function (tabId) {
    return this.zoomWebviewBy(tabId, 0.2)
  },
  zoomWebviewOut: function (tabId) {
    return this.zoomWebviewBy(tabId, -0.2)
  },
  resetWebviewZoom: function (tabId) {
    webviews.callAsync(tabId, 'zoomFactor', 1.0)
  }
}

var swipeGestureTimeout = -1
var swipeGestureLowVelocityTimeout = -1
var swipeGestureDelay = 100 // delay before gesture is complete
var swipeGestureVelocityDelay = 70 // the time (in ms) that can elapse without a minimum amount of movement before the gesture is considered almost completed

var horizontalMouseMove = 0
var verticalMouseMove = 0

var beginningScrollLeft = null
var beginningScrollRight = null

var hasShownSwipeArrow = false

var initialZoomKeyState = null
var initialSecondaryKeyState = null

var webviewMinZoom = 0.5
var webviewMaxZoom = 3.0

function resetCounters () {
  horizontalMouseMove = 0

  verticalMouseMove = 0

  beginningScrollLeft = null
  beginningScrollRight = null

  hasShownSwipeArrow = false

  initialZoomKeyState = null
  initialSecondaryKeyState = null
}

function onSwipeGestureLowVelocity () {
  // swipe to the left to go forward
  if (horizontalMouseMove - beginningScrollRight > 150 && Math.abs(horizontalMouseMove / verticalMouseMove) > 3) {
    if (beginningScrollRight < 5) {
      resetCounters()
      webviews.callAsync(tabs.getSelected(), 'goForward')
    }
  }

  // swipe to the right to go backwards
  if (horizontalMouseMove + beginningScrollLeft < -150 && Math.abs(horizontalMouseMove / verticalMouseMove) > 3) {
    if (beginningScrollLeft < 5) {
      resetCounters()
      webviews.goBackIgnoringRedirects(tabs.getSelected())
    }
  }
}

function onSwipeGestureFinish () {
  resetCounters()
}

webviews.bindIPC('wheel-event', function (tabId, e) {
  e = JSON.parse(e)

  if (e.defaultPrevented) {
    return
  }

  verticalMouseMove += e.deltaY
  horizontalMouseMove += e.deltaX

  var platformZoomKey = ((navigator.platform === 'MacIntel') ? e.metaKey : e.ctrlKey)
  var platformSecondaryKey = ((navigator.platform === 'MacIntel') ? e.ctrlKey : false)

  if (beginningScrollLeft === null || beginningScrollRight === null) {
    webviews.callAsync(tabs.getSelected(), 'executeJavaScript', `
    (function () {
      var left = 0
      var right = 0
      
      var n = document.elementFromPoint(${e.clientX}, ${e.clientY})
      while (n) {
        if (n.scrollLeft !== undefined) {
            left = Math.max(left, n.scrollLeft)
            right = Math.max(right, n.scrollWidth - n.clientWidth - n.scrollLeft)
        }
        n = n.parentElement
      }  
      return {left, right}
    })()
    `, function (err, result) {
      if (err) {
        console.warn(err)
        return
      }
      if (beginningScrollLeft === null || beginningScrollRight === null) {
        beginningScrollLeft = result.left
        beginningScrollRight = result.right
      }
    })
  }

  if (initialZoomKeyState === null) {
    initialZoomKeyState = platformZoomKey
  }

  if (initialSecondaryKeyState === null) {
    initialSecondaryKeyState = platformSecondaryKey
  }

  if (Math.abs(e.deltaX) >= 20 || Math.abs(e.deltaY) >= 20) {
    clearTimeout(swipeGestureLowVelocityTimeout)
    swipeGestureLowVelocityTimeout = setTimeout(onSwipeGestureLowVelocity, swipeGestureVelocityDelay)

    if (horizontalMouseMove < -150 && Math.abs(horizontalMouseMove / verticalMouseMove) > 2.5 && !hasShownSwipeArrow) {
      hasShownSwipeArrow = true
      webviewGestures.showBackArrow()
    } else if (horizontalMouseMove > 150 && Math.abs(horizontalMouseMove / verticalMouseMove) > 2.5 && !hasShownSwipeArrow) {
      hasShownSwipeArrow = true
      webviewGestures.showForwardArrow()
    }
  }

  clearTimeout(swipeGestureTimeout)
  swipeGestureTimeout = setTimeout(onSwipeGestureFinish, swipeGestureDelay)

  /* cmd-key while scrolling should zoom in and out */

  if (platformZoomKey && initialZoomKeyState) {
    if (verticalMouseMove > 50) {
      verticalMouseMove = -10
      webviewGestures.zoomWebviewOut(tabs.getSelected())
    }

    if (verticalMouseMove < -50) {
      verticalMouseMove = -10
      webviewGestures.zoomWebviewIn(tabs.getSelected())
    }
  }
})

module.exports = webviewGestures

},{"webviews.js":68}],67:[function(require,module,exports){
const clipboard = electron.clipboard

const webviews = require('webviews.js')
const browserUI = require('browserUI.js')
const searchEngine = require('util/searchEngine.js')
const userscripts = require('userscripts.js')
const settings = require('util/settings/settings.js')

const remoteMenu = require('remoteMenuRenderer.js')

const webviewMenu = {
  menuData: null,
  showMenu: function (data, extraData) { // data comes from a context-menu event
    var currentTab = tabs.get(tabs.getSelected())

    var menuSections = []

    const openInBackground = !settings.get('openTabsInForeground')

    /* Picture in Picture */

    if (extraData.hasVideo) {
      menuSections.push([
        {
          label: l('pictureInPicture'),
          click: function () {
            webviews.callAsync(tabs.getSelected(), 'send', ['enterPictureInPicture', { x: data.x, y: data.y }])
          }
        }
      ])
    }

    /* Spellcheck */

    if (data.misspelledWord) {
      var suggestionEntries = data.dictionarySuggestions.slice(0, 3).map(function (suggestion) {
        return {
          label: suggestion,
          click: function () {
            webviews.callAsync(tabs.getSelected(), 'replaceMisspelling', suggestion)
          }
        }
      })

      // https://www.electronjs.org/docs/api/session#sesaddwordtospellcheckerdictionaryword
      // "This API will not work on non-persistent (in-memory) sessions"
      if (!currentTab.private) {
        suggestionEntries.push({
          label: l('addToDictionary'),
          click: function () {
            remote.session.defaultSession.addWordToSpellCheckerDictionary(data.misspelledWord)
          }
        })
      }

      if (suggestionEntries.length > 0) {
        menuSections.push(suggestionEntries)
      }
    }

    /* links */

    var link = data.linkURL

    // show link items for embedded frames, but not the top-level page (which will also be listed as a frameURL)
    if (!link && data.frameURL && data.frameURL !== currentTab.url) {
      link = data.frameURL
    }

    if (link === 'about:srcdoc') {
      /* srcdoc is used in reader view, but it can't actually be opened anywhere outside of the reader page */
      link = null
    }

    var mediaURL = data.srcURL

    if (link) {
      var linkActions = [
        {
          label: (link.length > 60) ? link.substring(0, 60) + '...' : link,
          enabled: false
        }
      ]

      if (!currentTab.private) {
        linkActions.push({
          label: l('openInNewTab'),
          click: function () {
            browserUI.addTab(tabs.add({ url: link }), { enterEditMode: false, openInBackground: openInBackground })
          }
        })
      }

      linkActions.push({
        label: l('openInNewPrivateTab'),
        click: function () {
          browserUI.addTab(tabs.add({ url: link, private: true }), { enterEditMode: false, openInBackground: openInBackground })
        }
      })

      linkActions.push({
        label: l('saveLinkAs'),
        click: function () {
          remote.getCurrentWebContents().downloadURL(link)
        }
      })

      menuSections.push(linkActions)
    } else if (mediaURL && data.mediaType === 'image') {
      /* images */
      /* we don't show the image actions if there are already link actions, because it makes the menu too long and because the image actions typically aren't very useful if the image is a link */

      var imageActions = [
        {
          label: (mediaURL.length > 60) ? mediaURL.substring(0, 60) + '...' : mediaURL,
          enabled: false
        }
      ]

      imageActions.push({
        label: l('viewImage'),
        click: function () {
          webviews.update(tabs.getSelected(), mediaURL)
        }
      })

      if (!currentTab.private) {
        imageActions.push({
          label: l('openImageInNewTab'),
          click: function () {
            browserUI.addTab(tabs.add({ url: mediaURL }), { enterEditMode: false, openInBackground: openInBackground })
          }
        })
      }

      imageActions.push({
        label: l('openImageInNewPrivateTab'),
        click: function () {
          browserUI.addTab(tabs.add({ url: mediaURL, private: true }), { enterEditMode: false, openInBackground: openInBackground })
        }
      })

      menuSections.push(imageActions)

      menuSections.push([
        {
          label: l('saveImageAs'),
          click: function () {
            remote.getCurrentWebContents().downloadURL(mediaURL)
          }
        }
      ])
    }

    /* selected text */

    var selection = data.selectionText

    if (selection) {
      var textActions = [
        {
          label: l('searchWith').replace('%s', searchEngine.getCurrent().name),
          click: function () {
            var newTab = tabs.add({
              url: searchEngine.getCurrent().searchURL.replace('%s', encodeURIComponent(selection)),
              private: currentTab.private
            })
            browserUI.addTab(newTab, {
              enterEditMode: false,
              openInBackground: openInBackground
            })
          }
        }
      ]
      menuSections.push(textActions)
    }

    var clipboardActions = []

    if (mediaURL && data.mediaType === 'image') {
      clipboardActions.push({
        label: l('copy'),
        click: function () {
          webviews.callAsync(tabs.getSelected(), 'copyImageAt', [data.x, data.y])
        }
      })
    } else if (selection) {
      clipboardActions.push({
        label: l('copy'),
        click: function () {
          webviews.callAsync(tabs.getSelected(), 'copy')
        }
      })
    }

    if (data.editFlags && data.editFlags.canPaste) {
      clipboardActions.push({
        label: l('paste'),
        click: function () {
          webviews.callAsync(tabs.getSelected(), 'paste')
        }
      })
    }

    if (link || (mediaURL && !mediaURL.startsWith('blob:'))) {
      if (link && link.startsWith('mailto:')) {
        var ematch = link.match(/(?<=mailto:)[^\?]+/)
        if (ematch) {
          clipboardActions.push({
            label: l('copyEmailAddress'),
            click: function () {
              clipboard.writeText(ematch[0])
            }
          })
        }
      } else {
        clipboardActions.push({
          label: l('copyLink'),
          click: function () {
            clipboard.writeText(link || mediaURL)
          }
        })
      }
    }

    if (clipboardActions.length !== 0) {
      menuSections.push(clipboardActions)
    }

    var navigationActions = [
      {
        label: l('goBack'),
        click: function () {
          try {
            webviews.goBackIgnoringRedirects(tabs.getSelected())
          } catch (e) {}
        }
      },
      {
        label: l('goForward'),
        click: function () {
          try {
            webviews.callAsync(tabs.getSelected(), 'goForward')
          } catch (e) {}
        }
      }
    ]

    menuSections.push(navigationActions)

    /* inspect element */
    menuSections.push([
      {
        label: l('inspectElement'),
        click: function () {
          webviews.callAsync(tabs.getSelected(), 'inspectElement', [data.x || 0, data.y || 0])
        }
      }
    ])

    /* Userscripts */

    var contextMenuScripts = userscripts.getMatchingScripts(tabs.get(tabs.getSelected()).url).filter(function (script) {
      if (script.options['run-at'] && script.options['run-at'].includes('context-menu')) {
        return true
      }
    })

    if (contextMenuScripts.length > 0) {
      var scriptActions = [
        {
          label: l('runUserscript'),
          enabled: false
        }
      ]
      contextMenuScripts.forEach(function (script) {
        scriptActions.push({
          label: script.name,
          click: function () {
            userscripts.runScript(tabs.getSelected(), script)
          }
        })
      })
      menuSections.push(scriptActions)
    }

    // Electron's default menu position is sometimes wrong on Windows with a touchscreen
    // https://github.com/minbrowser/min/issues/903
    var offset = webviews.getViewBounds()
    remoteMenu.open(menuSections, data.x + offset.x, data.y + offset.y)
  },
  initialize: function () {
    webviews.bindEvent('context-menu', function (tabId, data) {
      webviewMenu.menuData = data
      webviews.callAsync(tabs.getSelected(), 'send', ['getContextMenuData', { x: data.x, y: data.y }])
    })
    webviews.bindIPC('contextMenuData', function (tabId, args) {
      webviewMenu.showMenu(webviewMenu.menuData, args[0])
      webviewMenu.menuData = null
    })
  }
}

module.exports = webviewMenu

},{"browserUI.js":4,"remoteMenuRenderer.js":34,"userscripts.js":54,"util/searchEngine.js":62,"util/settings/settings.js":63,"webviews.js":68}],68:[function(require,module,exports){
const previewCache = require('previewCache.js')
var urlParser = require('util/urlParser.js')
var settings = require('util/settings/settings.js')

/* implements selecting webviews, switching between them, and creating new ones. */

var placeholderImg = document.getElementById('webview-placeholder')

var hasSeparateTitlebar = settings.get('useSeparateTitlebar')
var windowIsMaximized = false // affects navbar height on Windows
var windowIsFullscreen = false

function forceUpdateDragRegions () {
  setTimeout(function () {
    // manually force the drag regions to update to work around https://github.com/electron/electron/issues/14038
    var d = document.createElement('div')
    d.setAttribute('style', '-webkit-app-region:drag; width: 1px; height: 1px;')
    document.body.appendChild(d)
    setTimeout(function () {
      document.body.removeChild(d)
    }, 100)
  }, 100)
}

function captureCurrentTab (options) {
  if (tabs.get(tabs.getSelected()).private) {
    // don't capture placeholders for private tabs
    return
  }

  if (webviews.placeholderRequests.length > 0 && !(options && options.forceCapture === true)) {
    // capturePage doesn't work while the view is hidden
    return
  }

  ipc.send('getCapture', {
    id: webviews.selectedId,
    width: Math.round(window.innerWidth / 10),
    height: Math.round(window.innerHeight / 10)
  })
}

// called whenever a new page starts loading, or an in-page navigation occurs
function onPageURLChange (tab, url) {
  if (url.indexOf('https://') === 0 || url.indexOf('about:') === 0 || url.indexOf('chrome:') === 0 || url.indexOf('file://') === 0) {
    tabs.update(tab, {
      secure: true,
      url: url
    })
  } else {
    tabs.update(tab, {
      secure: false,
      url: url
    })
  }
}

// called whenever a navigation finishes
function onNavigate (tabId, url, isInPlace, isMainFrame, frameProcessId, frameRoutingId) {
  if (isMainFrame) {
    onPageURLChange(tabId, url)
  }
}

// called whenever the page finishes loading
function onPageLoad (tabId) {
  // capture a preview image if a new page has been loaded
  if (tabId === tabs.getSelected()) {
    setTimeout(function () {
      // sometimes the page isn't visible until a short time after the did-finish-load event occurs
      captureCurrentTab()
    }, 100)
  }
}

function scrollOnLoad (tabId, scrollPosition) {
  const listener = function (eTabId) {
    if (eTabId === tabId) {
      // the scrollable content may not be available until some time after the load event, so attempt scrolling several times
      // but stop once we've successfully scrolled once so we don't overwrite user scroll attempts that happen later
      for (let i = 0; i < 3; i++) {
        var done = false
        setTimeout(function () {
          if (!done) {
            webviews.callAsync(tabId, 'executeJavaScript', `
            (function() {
              window.scrollTo(0, ${scrollPosition})
              return window.scrollY === ${scrollPosition}
            })()
            `, function (err, completed) {
              if (!err && completed) {
                done = true
              }
            })
          }
        }, 750 * i)
      }
      webviews.unbindEvent('did-finish-load', listener)
    }
  }
  webviews.bindEvent('did-finish-load', listener)
}

function setAudioMutedOnCreate (tabId, muted) {
  const listener = function () {
    webviews.callAsync(tabId, 'setAudioMuted', muted)
    webviews.unbindEvent('did-navigate', listener)
  }
  webviews.bindEvent('did-navigate', listener)
}

const webviews = {
  viewList: [], // [tabId]
  viewFullscreenMap: {}, // tabId, isFullscreen
  selectedId: null,
  placeholderRequests: [],
  asyncCallbacks: {},
  internalPages: {
    error: urlParser.getFileURL(__dirname + '/pages/error/index.html')
  },
  events: [],
  IPCEvents: [],
  bindEvent: function (event, fn) {
    webviews.events.push({
      event: event,
      fn: fn
    })
  },
  unbindEvent: function (event, fn) {
    for (var i = 0; i < webviews.events.length; i++) {
      if (webviews.events[i].event === event && webviews.events[i].fn === fn) {
        webviews.events.splice(i, 1)
        i--
      }
    }
  },
  emitEvent: function (event, viewId, args) {
    if (!webviews.viewList.includes(viewId)) {
      // the view could have been destroyed between when the event was occured and when it was recieved in the UI process, see https://github.com/minbrowser/min/issues/604#issuecomment-419653437
      return
    }
    webviews.events.forEach(function (ev) {
      if (ev.event === event) {
        ev.fn.apply(this, [viewId].concat(args))
      }
    })
  },
  bindIPC: function (name, fn) {
    webviews.IPCEvents.push({
      name: name,
      fn: fn
    })
  },
  viewMargins: [0, 0, 0, 0], // top, right, bottom, left
  adjustMargin: function (margins) {
    for (var i = 0; i < margins.length; i++) {
      webviews.viewMargins[i] += margins[i]
    }
    webviews.resize()
  },
  getViewBounds: function () {
    if (webviews.viewFullscreenMap[webviews.selectedId]) {
      return {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    } else {
      if (!hasSeparateTitlebar && (window.platformType === 'linux' || window.platformType === 'windows') && !windowIsMaximized && !windowIsFullscreen) {
        var navbarHeight = 48
      } else {
        var navbarHeight = 36
      }

      const viewMargins = webviews.viewMargins
      return {
        x: 0 + Math.round(viewMargins[3]),
        y: 0 + Math.round(viewMargins[0]) + navbarHeight,
        width: window.innerWidth - Math.round(viewMargins[1] + viewMargins[3]),
        height: window.innerHeight - Math.round(viewMargins[0] + viewMargins[2]) - navbarHeight
      }
    }
  },
  add: function (tabId) {
    var tabData = tabs.get(tabId)

    // needs to be called before the view is created to that its listeners can be registered
    if (tabData.scrollPosition) {
      scrollOnLoad(tabId, tabData.scrollPosition)
    }

    if (tabData.muted) {
      setAudioMutedOnCreate(tabId, tabData.muted)
    }

    // if the tab is private, we want to partition it. See http://electron.atom.io/docs/v0.34.0/api/web-view-tag/#partition
    // since tab IDs are unique, we can use them as partition names
    if (tabData.private === true) {
      var partition = tabId.toString() // options.tabId is a number, which remote.session.fromPartition won't accept. It must be converted to a string first
    }

    ipc.send('createView', {
      id: tabId,
      webPreferencesString: JSON.stringify({
        webPreferences: {
          nodeIntegration: false,
          nodeIntegrationInSubFrames: true,
          scrollBounce: true,
          safeDialogs: true,
          safeDialogsMessage: 'Prevent this page from creating additional dialogs',
          preload: __dirname + '/dist/preload.js',
          contextIsolation: true,
          sandbox: true,
          enableRemoteModule: false,
          allowPopups: false,
          partition: partition || (settings.get('disableIsolatedSession') ? null : 'persist:webcontent'), // TODO remove preference
          enableWebSQL: false,
          autoplayPolicy: 'user-gesture-required'
        }
      }),
      boundsString: JSON.stringify(webviews.getViewBounds()),
      events: webviews.events.map(e => e.event).filter((i, idx, arr) => arr.indexOf(i) === idx)
    })

    if (tabData.url) {
      ipc.send('loadURLInView', { id: tabData.id, url: urlParser.parse(tabData.url) })
    } else if (tabData.private) {
      // workaround for https://github.com/minbrowser/min/issues/872
      ipc.send('loadURLInView', { id: tabData.id, url: urlParser.parse('min://newtab') })
    }

    webviews.viewList.push(tabId)
  },
  setSelected: function (id, options) { // options.focus - whether to focus the view. Defaults to true.
    webviews.emitEvent('view-hidden', webviews.selectedId)

    webviews.selectedId = id

    // create the view if it doesn't already exist
    if (!webviews.viewList.includes(id)) {
      webviews.add(id)
    }

    if (webviews.placeholderRequests.length > 0) {
      // update the placeholder instead of showing the actual view
      webviews.requestPlaceholder()
      return
    }

    ipc.send('setView', {
      id: id,
      bounds: webviews.getViewBounds(),
      focus: !options || options.focus !== false
    })
    webviews.emitEvent('view-shown', id)

    forceUpdateDragRegions()
  },
  update: function (id, url) {
    ipc.send('loadURLInView', { id: id, url: urlParser.parse(url) })
  },
  destroy: function (id) {
    webviews.emitEvent('view-hidden', id)

    if (webviews.viewList.includes(id)) {
      webviews.viewList.splice(webviews.viewList.indexOf(id), 1)
      ipc.send('destroyView', id)
    }
    delete webviews.viewFullscreenMap[id]
    if (webviews.selectedId === id) {
      webviews.selectedId = null
    }
  },
  requestPlaceholder: function (reason) {
    if (reason && !webviews.placeholderRequests.includes(reason)) {
      webviews.placeholderRequests.push(reason)
    }
    if (webviews.placeholderRequests.length >= 1) {
      // create a new placeholder

      var img = previewCache.get(webviews.selectedId)
      var associatedTab = tabs.get(webviews.selectedId)
      if (img) {
        placeholderImg.src = img
        placeholderImg.hidden = false
      } else if (associatedTab && associatedTab.url) {
        captureCurrentTab({ forceCapture: true })
      } else {
        placeholderImg.hidden = true
      }
    }
    setTimeout(function () {
      // wait to make sure the image is visible before the view is hidden
      // make sure the placeholder was not removed between when the timeout was created and when it occurs
      if (webviews.placeholderRequests.length > 0) {
        ipc.send('hideCurrentView')
        webviews.emitEvent('view-hidden', webviews.selectedId)
      }
    }, 0)
  },
  hidePlaceholder: function (reason) {
    if (webviews.placeholderRequests.includes(reason)) {
      webviews.placeholderRequests.splice(webviews.placeholderRequests.indexOf(reason), 1)
    }

    if (webviews.placeholderRequests.length === 0) {
      // multiple things can request a placeholder at the same time, but we should only show the view again if nothing requires a placeholder anymore
      if (webviews.viewList.includes(webviews.selectedId)) {
        ipc.send('setView', {
          id: webviews.selectedId,
          bounds: webviews.getViewBounds(),
          focus: true
        })
        webviews.emitEvent('view-shown', webviews.selectedId)
        forceUpdateDragRegions()
      }
      // wait for the view to be visible before removing the placeholder
      setTimeout(function () {
        if (webviews.placeholderRequests.length === 0) { // make sure the placeholder hasn't been re-enabled
          placeholderImg.hidden = true
        }
      }, 400)
    }
  },
  releaseFocus: function () {
    ipc.send('focusMainWebContents')
  },
  focus: function () {
    if (webviews.selectedId) {
      ipc.send('focusView', webviews.selectedId)
    }
  },
  resize: function () {
    ipc.send('setBounds', { id: webviews.selectedId, bounds: webviews.getViewBounds() })
  },
  goBackIgnoringRedirects: function (id) {
    // special case: the current page is an internal page representing a regular webpage, and the previous page in history is that page (which likely means a redirect happened from the original page to the internal page)
    // probably either an error page (after  a redirect from the original page) or reader view
    var url = tabs.get(id).url

    webviews.callAsync(id, 'goBack')

    // TODO not working in Electron 11
    /*
    var isInternalURL = urlParser.isInternalURL(url)
    if (isInternalURL) {
      var representedURL = urlParser.getSourceURL(url)

      // TODO this uses internal Electron API's - figure out a way to do this with the public API
      webviews.callAsync(id, 'history', function (err, history) {
        webviews.callAsync(id, 'currentIndex', function (err, currentIndex) {
          var previous = history.slice(0, currentIndex + 1)
          if (previous.length > 2 && previous[previous.length - 2] === representedURL) {
            webviews.callAsync(id, 'goToOffset', -2)
          } else {
            webviews.callAsync(id, 'goBack')
          }
        })
      })
    } else {
      webviews.callAsync(id, 'goBack')
    } */
  },
  /*
  Can be called as
  callAsync(id, method, args, callback) -> invokes method with args, runs callback with (err, result)
  callAsync(id, method, callback) -> invokes method with no args, runs callback with (err, result)
  callAsync(id, property, value, callback) -> sets property to value
  callAsync(id, property, callback) -> reads property, runs callback with (err, result)
   */
  callAsync: function (id, method, argsOrCallback, callback) {
    var args = argsOrCallback
    var cb = callback
    if (argsOrCallback instanceof Function && !cb) {
      args = []
      cb = argsOrCallback
    }
    if (!(args instanceof Array)) {
      args = [args]
    }
    if (cb) {
      var callId = Math.random()
      webviews.asyncCallbacks[callId] = cb
    }
    ipc.send('callViewMethod', { id: id, callId: callId, method: method, args: args })
  }
}

window.addEventListener('resize', throttle(function () {
  if (webviews.placeholderRequests.length > 0) {
    // can't set view bounds if the view is hidden
    return
  }
  webviews.resize()
}, 75))

// leave HTML fullscreen when leaving window fullscreen
ipc.on('leave-full-screen', function () {
  // electron normally does this automatically (https://github.com/electron/electron/pull/13090/files), but it doesn't work for BrowserViews
  for (var view in webviews.viewFullscreenMap) {
    if (webviews.viewFullscreenMap[view]) {
      webviews.callAsync(view, 'executeJavaScript', 'document.exitFullscreen()')
    }
  }
})

webviews.bindEvent('enter-html-full-screen', function (tabId) {
  webviews.viewFullscreenMap[tabId] = true
  webviews.resize()
})

webviews.bindEvent('leave-html-full-screen', function (tabId) {
  webviews.viewFullscreenMap[tabId] = false
  webviews.resize()
})

ipc.on('maximize', function () {
  windowIsMaximized = true
  webviews.resize()
})

ipc.on('unmaximize', function () {
  windowIsMaximized = false
  webviews.resize()
})

ipc.on('enter-full-screen', function () {
  windowIsFullscreen = true
  webviews.resize()
})

ipc.on('leave-full-screen', function () {
  windowIsFullscreen = false
  webviews.resize()
})

webviews.bindEvent('did-start-navigation', onNavigate)
webviews.bindEvent('will-redirect', onNavigate)
webviews.bindEvent('did-navigate', function (tabId, url, httpResponseCode, httpStatusText) {
  onPageURLChange(tabId, url)
})

webviews.bindEvent('did-finish-load', onPageLoad)

webviews.bindEvent('page-title-updated', function (tabId, title, explicitSet) {
  tabs.update(tabId, {
    title: title
  })
})

webviews.bindEvent('did-fail-load', function (tabId, errorCode, errorDesc, validatedURL, isMainFrame) {
  if (errorCode && errorCode !== -3 && isMainFrame && validatedURL) {
    webviews.update(tabId, webviews.internalPages.error + '?ec=' + encodeURIComponent(errorCode) + '&url=' + encodeURIComponent(validatedURL))
  }
})

webviews.bindEvent('crashed', function (tabId, isKilled) {
  var url = tabs.get(tabId).url

  tabs.update(tabId, {
    url: webviews.internalPages.error + '?ec=crash&url=' + encodeURIComponent(url)
  })

  // the existing process has crashed, so we can't reuse it
  webviews.destroy(tabId)
  webviews.add(tabId)

  if (tabId === tabs.getSelected()) {
    webviews.setSelected(tabId)
  }
})

webviews.bindIPC('getSettingsData', function (tabId, args) {
  if (!urlParser.isInternalURL(tabs.get(tabId).url)) {
    throw new Error()
  }
  webviews.callAsync(tabId, 'send', ['receiveSettingsData', settings.list])
})
webviews.bindIPC('setSetting', function (tabId, args) {
  if (!urlParser.isInternalURL(tabs.get(tabId).url)) {
    throw new Error()
  }
  settings.set(args[0].key, args[0].value)
})

settings.listen(function () {
  tasks.forEach(function (task) {
    task.tabs.forEach(function (tab) {
      if (tab.url.startsWith('file://')) {
        try {
          webviews.callAsync(tab.id, 'send', ['receiveSettingsData', settings.list])
        } catch (e) {
          // webview might not actually exist
        }
      }
    })
  })
})

webviews.bindIPC('scroll-position-change', function (tabId, args) {
  tabs.update(tabId, {
    scrollPosition: args[0]
  })
})

ipc.on('view-event', function (e, args) {
  webviews.emitEvent(args.event, args.viewId, args.args)
})

ipc.on('async-call-result', function (e, args) {
  webviews.asyncCallbacks[args.callId](args.error, args.result)
  delete webviews.asyncCallbacks[args.callId]
})

ipc.on('view-ipc', function (e, args) {
  if (!webviews.viewList.includes(args.id)) {
    // the view could have been destroyed between when the event was occured and when it was recieved in the UI process, see https://github.com/minbrowser/min/issues/604#issuecomment-419653437
    return
  }
  webviews.IPCEvents.forEach(function (item) {
    if (item.name === args.name) {
      item.fn(args.id, [args.data], args.frameId)
    }
  })
})

setInterval(function () {
  captureCurrentTab()
}, 30000)

ipc.on('captureData', function (e, data) {
  previewCache.set(data.id, data.url)
  if (data.id === webviews.selectedId && webviews.placeholderRequests.length > 0) {
    placeholderImg.src = data.url
    placeholderImg.hidden = false
  }
})

/* focus the view when the window is focused */

ipc.on('windowFocus', function () {
  if (webviews.placeholderRequests.length === 0 && document.activeElement.tagName !== 'INPUT') {
    webviews.focus()
  }
})

module.exports = webviews

},{"previewCache.js":31,"util/settings/settings.js":63,"util/urlParser.js":65}],69:[function(require,module,exports){
module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }

},{}],70:[function(require,module,exports){
'use strict';

var ticky = require('ticky');

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};

},{"ticky":80}],71:[function(require,module,exports){
'use strict';

var atoa = require('atoa');
var debounce = require('./debounce');

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};

},{"./debounce":70,"atoa":69}],72:[function(require,module,exports){
'use strict';

var customEvent = require('custom-event');
var eventmap = require('./eventmap');
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

},{"./eventmap":73,"custom-event":74}],73:[function(require,module,exports){
'use strict';

var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

},{}],74:[function(require,module,exports){

var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

},{}],75:[function(require,module,exports){
(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
   typeof define === 'function' && define.amd ? define(factory) :
   (global.Dexie = factory());
}(this, (function () { 'use strict';

/*
* Dexie.js - a minimalistic wrapper for IndexedDB
* ===============================================
*
* By David Fahlander, david.fahlander@gmail.com
*
* Version 1.5.1, Tue Nov 01 2016
* www.dexie.com
* Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
*/
var keys = Object.keys;
var isArray = Array.isArray;
var _global = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : global;

function extend(obj, extension) {
    if (typeof extension !== 'object') return obj;
    keys(extension).forEach(function (key) {
        obj[key] = extension[key];
    });
    return obj;
}

var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
    return _hasOwn.call(obj, prop);
}

function props(proto, extension) {
    if (typeof extension === 'function') extension = extension(getProto(proto));
    keys(extension).forEach(function (key) {
        setProp(proto, key, extension[key]);
    });
}

function setProp(obj, prop, functionOrGetSet, options) {
    Object.defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === 'function' ? { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } : { value: functionOrGetSet, configurable: true, writable: true }, options));
}

function derive(Child) {
    return {
        from: function (Parent) {
            Child.prototype = Object.create(Parent.prototype);
            setProp(Child.prototype, "constructor", Child);
            return {
                extend: props.bind(null, Child.prototype)
            };
        }
    };
}

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

function getPropertyDescriptor(obj, prop) {
    var pd = getOwnPropertyDescriptor(obj, prop),
        proto;
    return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}

var _slice = [].slice;
function slice(args, start, end) {
    return _slice.call(args, start, end);
}

function override(origFunc, overridedFactory) {
    return overridedFactory(origFunc);
}

function doFakeAutoComplete(fn) {
    var to = setTimeout(fn, 1000);
    clearTimeout(to);
}

function assert(b) {
    if (!b) throw new Error("Assertion Failed");
}

function asap(fn) {
    if (_global.setImmediate) setImmediate(fn);else setTimeout(fn, 0);
}



/** Generate an object (hash map) based on given array.
 * @param extractor Function taking an array item and its index and returning an array of 2 items ([key, value]) to
 *        instert on the resulting object for each item in the array. If this function returns a falsy value, the
 *        current item wont affect the resulting object.
 */
function arrayToObject(array, extractor) {
    return array.reduce(function (result, item, i) {
        var nameAndValue = extractor(item, i);
        if (nameAndValue) result[nameAndValue[0]] = nameAndValue[1];
        return result;
    }, {});
}

function trycatcher(fn, reject) {
    return function () {
        try {
            fn.apply(this, arguments);
        } catch (e) {
            reject(e);
        }
    };
}

function tryCatch(fn, onerror, args) {
    try {
        fn.apply(null, args);
    } catch (ex) {
        onerror && onerror(ex);
    }
}

function getByKeyPath(obj, keyPath) {
    // http://www.w3.org/TR/IndexedDB/#steps-for-extracting-a-key-from-a-value-using-a-key-path
    if (hasOwn(obj, keyPath)) return obj[keyPath]; // This line is moved from last to first for optimization purpose.
    if (!keyPath) return obj;
    if (typeof keyPath !== 'string') {
        var rv = [];
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            var val = getByKeyPath(obj, keyPath[i]);
            rv.push(val);
        }
        return rv;
    }
    var period = keyPath.indexOf('.');
    if (period !== -1) {
        var innerObj = obj[keyPath.substr(0, period)];
        return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
    }
    return undefined;
}

function setByKeyPath(obj, keyPath, value) {
    if (!obj || keyPath === undefined) return;
    if ('isFrozen' in Object && Object.isFrozen(obj)) return;
    if (typeof keyPath !== 'string' && 'length' in keyPath) {
        assert(typeof value !== 'string' && 'length' in value);
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            setByKeyPath(obj, keyPath[i], value[i]);
        }
    } else {
        var period = keyPath.indexOf('.');
        if (period !== -1) {
            var currentKeyPath = keyPath.substr(0, period);
            var remainingKeyPath = keyPath.substr(period + 1);
            if (remainingKeyPath === "") {
                if (value === undefined) delete obj[currentKeyPath];else obj[currentKeyPath] = value;
            } else {
                var innerObj = obj[currentKeyPath];
                if (!innerObj) innerObj = obj[currentKeyPath] = {};
                setByKeyPath(innerObj, remainingKeyPath, value);
            }
        } else {
            if (value === undefined) delete obj[keyPath];else obj[keyPath] = value;
        }
    }
}

function delByKeyPath(obj, keyPath) {
    if (typeof keyPath === 'string') setByKeyPath(obj, keyPath, undefined);else if ('length' in keyPath) [].map.call(keyPath, function (kp) {
        setByKeyPath(obj, kp, undefined);
    });
}

function shallowClone(obj) {
    var rv = {};
    for (var m in obj) {
        if (hasOwn(obj, m)) rv[m] = obj[m];
    }
    return rv;
}

function deepClone(any) {
    if (!any || typeof any !== 'object') return any;
    var rv;
    if (isArray(any)) {
        rv = [];
        for (var i = 0, l = any.length; i < l; ++i) {
            rv.push(deepClone(any[i]));
        }
    } else if (any instanceof Date) {
        rv = new Date();
        rv.setTime(any.getTime());
    } else {
        rv = any.constructor ? Object.create(any.constructor.prototype) : {};
        for (var prop in any) {
            if (hasOwn(any, prop)) {
                rv[prop] = deepClone(any[prop]);
            }
        }
    }
    return rv;
}

function getObjectDiff(a, b, rv, prfx) {
    // Compares objects a and b and produces a diff object.
    rv = rv || {};
    prfx = prfx || '';
    keys(a).forEach(function (prop) {
        if (!hasOwn(b, prop)) rv[prfx + prop] = undefined; // Property removed
        else {
                var ap = a[prop],
                    bp = b[prop];
                if (typeof ap === 'object' && typeof bp === 'object' && ap && bp && ap.constructor === bp.constructor)
                    // Same type of object but its properties may have changed
                    getObjectDiff(ap, bp, rv, prfx + prop + ".");else if (ap !== bp) rv[prfx + prop] = b[prop]; // Primitive value changed
            }
    });
    keys(b).forEach(function (prop) {
        if (!hasOwn(a, prop)) {
            rv[prfx + prop] = b[prop]; // Property added
        }
    });
    return rv;
}

// If first argument is iterable or array-like, return it as an array
var iteratorSymbol = typeof Symbol !== 'undefined' && Symbol.iterator;
var getIteratorOf = iteratorSymbol ? function (x) {
    var i;
    return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () {
    return null;
};

var NO_CHAR_ARRAY = {};
// Takes one or several arguments and returns an array based on the following criteras:
// * If several arguments provided, return arguments converted to an array in a way that
//   still allows javascript engine to optimize the code.
// * If single argument is an array, return a clone of it.
// * If this-pointer equals NO_CHAR_ARRAY, don't accept strings as valid iterables as a special
//   case to the two bullets below.
// * If single argument is an iterable, convert it to an array and return the resulting array.
// * If single argument is array-like (has length of type number), convert it to an array.
function getArrayOf(arrayLike) {
    var i, a, x, it;
    if (arguments.length === 1) {
        if (isArray(arrayLike)) return arrayLike.slice();
        if (this === NO_CHAR_ARRAY && typeof arrayLike === 'string') return [arrayLike];
        if (it = getIteratorOf(arrayLike)) {
            a = [];
            while (x = it.next(), !x.done) {
                a.push(x.value);
            }return a;
        }
        if (arrayLike == null) return [arrayLike];
        i = arrayLike.length;
        if (typeof i === 'number') {
            a = new Array(i);
            while (i--) {
                a[i] = arrayLike[i];
            }return a;
        }
        return [arrayLike];
    }
    i = arguments.length;
    a = new Array(i);
    while (i--) {
        a[i] = arguments[i];
    }return a;
}

var concat = [].concat;
function flatten(a) {
    return concat.apply([], a);
}

function nop() {}
function mirror(val) {
    return val;
}
function pureFunctionChain(f1, f2) {
    // Enables chained events that takes ONE argument and returns it to the next function in chain.
    // This pattern is used in the hook("reading") event.
    if (f1 == null || f1 === mirror) return f2;
    return function (val) {
        return f2(f1(val));
    };
}

function callBoth(on1, on2) {
    return function () {
        on1.apply(this, arguments);
        on2.apply(this, arguments);
    };
}

function hookCreatingChain(f1, f2) {
    // Enables chained events that takes several arguments and may modify first argument by making a modification and then returning the same instance.
    // This pattern is used in the hook("creating") event.
    if (f1 === nop) return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res !== undefined) arguments[0] = res;
        var onsuccess = this.onsuccess,
            // In case event listener has set this.onsuccess
        onerror = this.onerror; // In case event listener has set this.onerror
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res2 !== undefined ? res2 : res;
    };
}

function hookDeletingChain(f1, f2) {
    if (f1 === nop) return f2;
    return function () {
        f1.apply(this, arguments);
        var onsuccess = this.onsuccess,
            // In case event listener has set this.onsuccess
        onerror = this.onerror; // In case event listener has set this.onerror
        this.onsuccess = this.onerror = null;
        f2.apply(this, arguments);
        if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    };
}

function hookUpdatingChain(f1, f2) {
    if (f1 === nop) return f2;
    return function (modifications) {
        var res = f1.apply(this, arguments);
        extend(modifications, res); // If f1 returns new modifications, extend caller's modifications with the result before calling next in chain.
        var onsuccess = this.onsuccess,
            // In case event listener has set this.onsuccess
        onerror = this.onerror; // In case event listener has set this.onerror
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res === undefined ? res2 === undefined ? undefined : res2 : extend(res, res2);
    };
}

function reverseStoppableEventChain(f1, f2) {
    if (f1 === nop) return f2;
    return function () {
        if (f2.apply(this, arguments) === false) return false;
        return f1.apply(this, arguments);
    };
}



function promisableChain(f1, f2) {
    if (f1 === nop) return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res && typeof res.then === 'function') {
            var thiz = this,
                i = arguments.length,
                args = new Array(i);
            while (i--) {
                args[i] = arguments[i];
            }return res.then(function () {
                return f2.apply(thiz, args);
            });
        }
        return f2.apply(this, arguments);
    };
}

// By default, debug will be true only if platform is a web platform and its page is served from localhost.
// When debug = true, error's stacks will contain asyncronic long stacks.
var debug = typeof location !== 'undefined' &&
// By default, use debug mode if served from localhost.
/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

function setDebug(value, filter) {
    debug = value;
    libraryFilter = filter;
}

var libraryFilter = function () {
    return true;
};

var NEEDS_THROW_FOR_STACK = !new Error("").stack;

function getErrorWithStack() {
    "use strict";

    if (NEEDS_THROW_FOR_STACK) try {
        // Doing something naughty in strict mode here to trigger a specific error
        // that can be explicitely ignored in debugger's exception settings.
        // If we'd just throw new Error() here, IE's debugger's exception settings
        // will just consider it as "exception thrown by javascript code" which is
        // something you wouldn't want it to ignore.
        getErrorWithStack.arguments;
        throw new Error(); // Fallback if above line don't throw.
    } catch (e) {
        return e;
    }
    return new Error();
}

function prettyStack(exception, numIgnoredFrames) {
    var stack = exception.stack;
    if (!stack) return "";
    numIgnoredFrames = numIgnoredFrames || 0;
    if (stack.indexOf(exception.name) === 0) numIgnoredFrames += (exception.name + exception.message).split('\n').length;
    return stack.split('\n').slice(numIgnoredFrames).filter(libraryFilter).map(function (frame) {
        return "\n" + frame;
    }).join('');
}

function deprecated(what, fn) {
    return function () {
        console.warn(what + " is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. " + prettyStack(getErrorWithStack(), 1));
        return fn.apply(this, arguments);
    };
}

var dexieErrorNames = ['Modify', 'Bulk', 'OpenFailed', 'VersionChange', 'Schema', 'Upgrade', 'InvalidTable', 'MissingAPI', 'NoSuchDatabase', 'InvalidArgument', 'SubTransaction', 'Unsupported', 'Internal', 'DatabaseClosed', 'IncompatiblePromise'];

var idbDomErrorNames = ['Unknown', 'Constraint', 'Data', 'TransactionInactive', 'ReadOnly', 'Version', 'NotFound', 'InvalidState', 'InvalidAccess', 'Abort', 'Timeout', 'QuotaExceeded', 'Syntax', 'DataClone'];

var errorList = dexieErrorNames.concat(idbDomErrorNames);

var defaultTexts = {
    VersionChanged: "Database version changed by other database connection",
    DatabaseClosed: "Database has been closed",
    Abort: "Transaction aborted",
    TransactionInactive: "Transaction has already completed or failed"
};

//
// DexieError - base class of all out exceptions.
//
function DexieError(name, msg) {
    // Reason we don't use ES6 classes is because:
    // 1. It bloats transpiled code and increases size of minified code.
    // 2. It doesn't give us much in this case.
    // 3. It would require sub classes to call super(), which
    //    is not needed when deriving from Error.
    this._e = getErrorWithStack();
    this.name = name;
    this.message = msg;
}

derive(DexieError).from(Error).extend({
    stack: {
        get: function () {
            return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
        }
    },
    toString: function () {
        return this.name + ": " + this.message;
    }
});

function getMultiErrorMessage(msg, failures) {
    return msg + ". Errors: " + failures.map(function (f) {
        return f.toString();
    }).filter(function (v, i, s) {
        return s.indexOf(v) === i;
    }) // Only unique error strings
    .join('\n');
}

//
// ModifyError - thrown in WriteableCollection.modify()
// Specific constructor because it contains members failures and failedKeys.
//
function ModifyError(msg, failures, successCount, failedKeys) {
    this._e = getErrorWithStack();
    this.failures = failures;
    this.failedKeys = failedKeys;
    this.successCount = successCount;
}
derive(ModifyError).from(DexieError);

function BulkError(msg, failures) {
    this._e = getErrorWithStack();
    this.name = "BulkError";
    this.failures = failures;
    this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);

//
//
// Dynamically generate error names and exception classes based
// on the names in errorList.
//
//

// Map of {ErrorName -> ErrorName + "Error"}
var errnames = errorList.reduce(function (obj, name) {
    return obj[name] = name + "Error", obj;
}, {});

// Need an alias for DexieError because we're gonna create subclasses with the same name.
var BaseException = DexieError;
// Map of {ErrorName -> exception constructor}
var exceptions = errorList.reduce(function (obj, name) {
    // Let the name be "DexieError" because this name may
    // be shown in call stack and when debugging. DexieError is
    // the most true name because it derives from DexieError,
    // and we cannot change Function.name programatically without
    // dynamically create a Function object, which would be considered
    // 'eval-evil'.
    var fullName = name + "Error";
    function DexieError(msgOrInner, inner) {
        this._e = getErrorWithStack();
        this.name = fullName;
        if (!msgOrInner) {
            this.message = defaultTexts[name] || fullName;
            this.inner = null;
        } else if (typeof msgOrInner === 'string') {
            this.message = msgOrInner;
            this.inner = inner || null;
        } else if (typeof msgOrInner === 'object') {
            this.message = msgOrInner.name + ' ' + msgOrInner.message;
            this.inner = msgOrInner;
        }
    }
    derive(DexieError).from(BaseException);
    obj[name] = DexieError;
    return obj;
}, {});

// Use ECMASCRIPT standard exceptions where applicable:
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;

var exceptionMap = idbDomErrorNames.reduce(function (obj, name) {
    obj[name + "Error"] = exceptions[name];
    return obj;
}, {});

function mapError(domError, message) {
    if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name]) return domError;
    var rv = new exceptionMap[domError.name](message || domError.message, domError);
    if ("stack" in domError) {
        // Derive stack from inner exception if it has a stack
        setProp(rv, "stack", { get: function () {
                return this.inner.stack;
            } });
    }
    return rv;
}

var fullNameExceptions = errorList.reduce(function (obj, name) {
    if (["Syntax", "Type", "Range"].indexOf(name) === -1) obj[name + "Error"] = exceptions[name];
    return obj;
}, {});

fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;

function Events(ctx) {
    var evs = {};
    var rv = function (eventName, subscriber) {
        if (subscriber) {
            // Subscribe. If additional arguments than just the subscriber was provided, forward them as well.
            var i = arguments.length,
                args = new Array(i - 1);
            while (--i) {
                args[i - 1] = arguments[i];
            }evs[eventName].subscribe.apply(null, args);
            return ctx;
        } else if (typeof eventName === 'string') {
            // Return interface allowing to fire or unsubscribe from event
            return evs[eventName];
        }
    };
    rv.addEventType = add;

    for (var i = 1, l = arguments.length; i < l; ++i) {
        add(arguments[i]);
    }

    return rv;

    function add(eventName, chainFunction, defaultFunction) {
        if (typeof eventName === 'object') return addConfiguredEvents(eventName);
        if (!chainFunction) chainFunction = reverseStoppableEventChain;
        if (!defaultFunction) defaultFunction = nop;

        var context = {
            subscribers: [],
            fire: defaultFunction,
            subscribe: function (cb) {
                if (context.subscribers.indexOf(cb) === -1) {
                    context.subscribers.push(cb);
                    context.fire = chainFunction(context.fire, cb);
                }
            },
            unsubscribe: function (cb) {
                context.subscribers = context.subscribers.filter(function (fn) {
                    return fn !== cb;
                });
                context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
            }
        };
        evs[eventName] = rv[eventName] = context;
        return context;
    }

    function addConfiguredEvents(cfg) {
        // events(this, {reading: [functionChain, nop]});
        keys(cfg).forEach(function (eventName) {
            var args = cfg[eventName];
            if (isArray(args)) {
                add(eventName, cfg[eventName][0], cfg[eventName][1]);
            } else if (args === 'asap') {
                // Rather than approaching event subscription using a functional approach, we here do it in a for-loop where subscriber is executed in its own stack
                // enabling that any exception that occur wont disturb the initiator and also not nescessary be catched and forgotten.
                var context = add(eventName, mirror, function fire() {
                    // Optimazation-safe cloning of arguments into args.
                    var i = arguments.length,
                        args = new Array(i);
                    while (i--) {
                        args[i] = arguments[i];
                    } // All each subscriber:
                    context.subscribers.forEach(function (fn) {
                        asap(function fireEvent() {
                            fn.apply(null, args);
                        });
                    });
                });
            } else throw new exceptions.InvalidArgument("Invalid event config");
        });
    }
}

//
// Promise Class for Dexie library
//
// I started out writing this Promise class by copying promise-light (https://github.com/taylorhakes/promise-light) by
// https://github.com/taylorhakes - an A+ and ECMASCRIPT 6 compliant Promise implementation.
//
// Modifications needed to be done to support indexedDB because it wont accept setTimeout()
// (See discussion: https://github.com/promises-aplus/promises-spec/issues/45) .
// This topic was also discussed in the following thread: https://github.com/promises-aplus/promises-spec/issues/45
//
// This implementation will not use setTimeout or setImmediate when it's not needed. The behavior is 100% Promise/A+ compliant since
// the caller of new Promise() can be certain that the promise wont be triggered the lines after constructing the promise.
//
// In previous versions this was fixed by not calling setTimeout when knowing that the resolve() or reject() came from another
// tick. In Dexie v1.4.0, I've rewritten the Promise class entirely. Just some fragments of promise-light is left. I use
// another strategy now that simplifies everything a lot: to always execute callbacks in a new tick, but have an own microTick
// engine that is used instead of setImmediate() or setTimeout().
// Promise class has also been optimized a lot with inspiration from bluebird - to avoid closures as much as possible.
// Also with inspiration from bluebird, asyncronic stacks in debug mode.
//
// Specific non-standard features of this Promise class:
// * Async static context support (Promise.PSD)
// * Promise.follow() method built upon PSD, that allows user to track all promises created from current stack frame
//   and below + all promises that those promises creates or awaits.
// * Detect any unhandled promise in a PSD-scope (PSD.onunhandled). 
//
// David Fahlander, https://github.com/dfahlander
//

// Just a pointer that only this module knows about.
// Used in Promise constructor to emulate a private constructor.
var INTERNAL = {};

// Async stacks (long stacks) must not grow infinitely.
var LONG_STACKS_CLIP_LIMIT = 100;
var MAX_LONG_STACKS = 20;
var stack_being_generated = false;

/* The default "nextTick" function used only for the very first promise in a promise chain.
   As soon as then promise is resolved or rejected, all next tasks will be executed in micro ticks
   emulated in this module. For indexedDB compatibility, this means that every method needs to 
   execute at least one promise before doing an indexedDB operation. Dexie will always call 
   db.ready().then() for every operation to make sure the indexedDB event is started in an
   emulated micro tick.
*/
var schedulePhysicalTick = _global.setImmediate ?
// setImmediate supported. Those modern platforms also supports Function.bind().
setImmediate.bind(null, physicalTick) : _global.MutationObserver ?
// MutationObserver supported
function () {
    var hiddenDiv = document.createElement("div");
    new MutationObserver(function () {
        physicalTick();
        hiddenDiv = null;
    }).observe(hiddenDiv, { attributes: true });
    hiddenDiv.setAttribute('i', '1');
} :
// No support for setImmediate or MutationObserver. No worry, setTimeout is only called
// once time. Every tick that follows will be our emulated micro tick.
// Could have uses setTimeout.bind(null, 0, physicalTick) if it wasnt for that FF13 and below has a bug 
function () {
    setTimeout(physicalTick, 0);
};

// Confifurable through Promise.scheduler.
// Don't export because it would be unsafe to let unknown
// code call it unless they do try..catch within their callback.
// This function can be retrieved through getter of Promise.scheduler though,
// but users must not do Promise.scheduler (myFuncThatThrows exception)!
var asap$1 = function (callback, args) {
    microtickQueue.push([callback, args]);
    if (needsNewPhysicalTick) {
        schedulePhysicalTick();
        needsNewPhysicalTick = false;
    }
};

var isOutsideMicroTick = true;
var needsNewPhysicalTick = true;
var unhandledErrors = [];
var rejectingErrors = [];
var currentFulfiller = null;
var rejectionMapper = mirror; // Remove in next major when removing error mapping of DOMErrors and DOMExceptions

var globalPSD = {
    global: true,
    ref: 0,
    unhandleds: [],
    onunhandled: globalError,
    //env: null, // Will be set whenever leaving a scope using wrappers.snapshot()
    finalize: function () {
        this.unhandleds.forEach(function (uh) {
            try {
                globalError(uh[0], uh[1]);
            } catch (e) {}
        });
    }
};

var PSD = globalPSD;

var microtickQueue = []; // Callbacks to call in this or next physical tick.
var numScheduledCalls = 0; // Number of listener-calls left to do in this physical tick.
var tickFinalizers = []; // Finalizers to call when there are no more async calls scheduled within current physical tick.

// Wrappers are not being used yet. Their framework is functioning and can be used
// to replace environment during a PSD scope (a.k.a. 'zone').
/* **KEEP** export var wrappers = (() => {
    var wrappers = [];

    return {
        snapshot: () => {
            var i = wrappers.length,
                result = new Array(i);
            while (i--) result[i] = wrappers[i].snapshot();
            return result;
        },
        restore: values => {
            var i = wrappers.length;
            while (i--) wrappers[i].restore(values[i]);
        },
        wrap: () => wrappers.map(w => w.wrap()),
        add: wrapper => {
            wrappers.push(wrapper);
        }
    };
})();
*/

function Promise(fn) {
    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
    this._listeners = [];
    this.onuncatched = nop; // Deprecate in next major. Not needed. Better to use global error handler.

    // A library may set `promise._lib = true;` after promise is created to make resolve() or reject()
    // execute the microtask engine implicitely within the call to resolve() or reject().
    // To remain A+ compliant, a library must only set `_lib=true` if it can guarantee that the stack
    // only contains library code when calling resolve() or reject().
    // RULE OF THUMB: ONLY set _lib = true for promises explicitely resolving/rejecting directly from
    // global scope (event handler, timer etc)!
    this._lib = false;
    // Current async scope
    var psd = this._PSD = PSD;

    if (debug) {
        this._stackHolder = getErrorWithStack();
        this._prev = null;
        this._numPrev = 0; // Number of previous promises (for long stacks)
        linkToPreviousPromise(this, currentFulfiller);
    }

    if (typeof fn !== 'function') {
        if (fn !== INTERNAL) throw new TypeError('Not a function');
        // Private constructor (INTERNAL, state, value).
        // Used internally by Promise.resolve() and Promise.reject().
        this._state = arguments[1];
        this._value = arguments[2];
        if (this._state === false) handleRejection(this, this._value); // Map error, set stack and addPossiblyUnhandledError().
        return;
    }

    this._state = null; // null (=pending), false (=rejected) or true (=resolved)
    this._value = null; // error or result
    ++psd.ref; // Refcounting current scope
    executePromiseTask(this, fn);
}

props(Promise.prototype, {

    then: function (onFulfilled, onRejected) {
        var _this = this;

        var rv = new Promise(function (resolve, reject) {
            propagateToListener(_this, new Listener(onFulfilled, onRejected, resolve, reject));
        });
        debug && (!this._prev || this._state === null) && linkToPreviousPromise(rv, this);
        return rv;
    },

    _then: function (onFulfilled, onRejected) {
        // A little tinier version of then() that don't have to create a resulting promise.
        propagateToListener(this, new Listener(null, null, onFulfilled, onRejected));
    },

    catch: function (onRejected) {
        if (arguments.length === 1) return this.then(null, onRejected);
        // First argument is the Error type to catch
        var type = arguments[0],
            handler = arguments[1];
        return typeof type === 'function' ? this.then(null, function (err) {
            return (
                // Catching errors by its constructor type (similar to java / c++ / c#)
                // Sample: promise.catch(TypeError, function (e) { ... });
                err instanceof type ? handler(err) : PromiseReject(err)
            );
        }) : this.then(null, function (err) {
            return (
                // Catching errors by the error.name property. Makes sense for indexedDB where error type
                // is always DOMError but where e.name tells the actual error type.
                // Sample: promise.catch('ConstraintError', function (e) { ... });
                err && err.name === type ? handler(err) : PromiseReject(err)
            );
        });
    },

    finally: function (onFinally) {
        return this.then(function (value) {
            onFinally();
            return value;
        }, function (err) {
            onFinally();
            return PromiseReject(err);
        });
    },

    // Deprecate in next major. Needed only for db.on.error.
    uncaught: function (uncaughtHandler) {
        var _this2 = this;

        // Be backward compatible and use "onuncatched" as the event name on this.
        // Handle multiple subscribers through reverseStoppableEventChain(). If a handler returns `false`, bubbling stops.
        this.onuncatched = reverseStoppableEventChain(this.onuncatched, uncaughtHandler);
        // In case caller does this on an already rejected promise, assume caller wants to point out the error to this promise and not
        // a previous promise. Reason: the prevous promise may lack onuncatched handler. 
        if (this._state === false && unhandledErrors.indexOf(this) === -1) {
            // Replace unhandled error's destinaion promise with this one!
            unhandledErrors.some(function (p, i, l) {
                return p._value === _this2._value && (l[i] = _this2);
            });
            // Actually we do this shit because we need to support db.on.error() correctly during db.open(). If we deprecate db.on.error, we could
            // take away this piece of code as well as the onuncatched and uncaught() method.
        }
        return this;
    },

    stack: {
        get: function () {
            if (this._stack) return this._stack;
            try {
                stack_being_generated = true;
                var stacks = getStack(this, [], MAX_LONG_STACKS);
                var stack = stacks.join("\nFrom previous: ");
                if (this._state !== null) this._stack = stack; // Stack may be updated on reject.
                return stack;
            } finally {
                stack_being_generated = false;
            }
        }
    }
});

function Listener(onFulfilled, onRejected, resolve, reject) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.resolve = resolve;
    this.reject = reject;
    this.psd = PSD;
}

// Promise Static Properties
props(Promise, {
    all: function () {
        var values = getArrayOf.apply(null, arguments); // Supports iterables, implicit arguments and array-like.
        return new Promise(function (resolve, reject) {
            if (values.length === 0) resolve([]);
            var remaining = values.length;
            values.forEach(function (a, i) {
                return Promise.resolve(a).then(function (x) {
                    values[i] = x;
                    if (! --remaining) resolve(values);
                }, reject);
            });
        });
    },

    resolve: function (value) {
        if (value instanceof Promise) return value;
        if (value && typeof value.then === 'function') return new Promise(function (resolve, reject) {
            value.then(resolve, reject);
        });
        return new Promise(INTERNAL, true, value);
    },

    reject: PromiseReject,

    race: function () {
        var values = getArrayOf.apply(null, arguments);
        return new Promise(function (resolve, reject) {
            values.map(function (value) {
                return Promise.resolve(value).then(resolve, reject);
            });
        });
    },

    PSD: {
        get: function () {
            return PSD;
        },
        set: function (value) {
            return PSD = value;
        }
    },

    newPSD: newScope,

    usePSD: usePSD,

    scheduler: {
        get: function () {
            return asap$1;
        },
        set: function (value) {
            asap$1 = value;
        }
    },

    rejectionMapper: {
        get: function () {
            return rejectionMapper;
        },
        set: function (value) {
            rejectionMapper = value;
        } // Map reject failures
    },

    follow: function (fn) {
        return new Promise(function (resolve, reject) {
            return newScope(function (resolve, reject) {
                var psd = PSD;
                psd.unhandleds = []; // For unhandled standard- or 3rd party Promises. Checked at psd.finalize()
                psd.onunhandled = reject; // Triggered directly on unhandled promises of this library.
                psd.finalize = callBoth(function () {
                    var _this3 = this;

                    // Unhandled standard or 3rd part promises are put in PSD.unhandleds and
                    // examined upon scope completion while unhandled rejections in this Promise
                    // will trigger directly through psd.onunhandled
                    run_at_end_of_this_or_next_physical_tick(function () {
                        _this3.unhandleds.length === 0 ? resolve() : reject(_this3.unhandleds[0]);
                    });
                }, psd.finalize);
                fn();
            }, resolve, reject);
        });
    },

    on: Events(null, { "error": [reverseStoppableEventChain, defaultErrorHandler] // Default to defaultErrorHandler
    })

});

var PromiseOnError = Promise.on.error;
PromiseOnError.subscribe = deprecated("Promise.on('error')", PromiseOnError.subscribe);
PromiseOnError.unsubscribe = deprecated("Promise.on('error').unsubscribe", PromiseOnError.unsubscribe);

/**
* Take a potentially misbehaving resolver function and make sure
* onFulfilled and onRejected are only called once.
*
* Makes no guarantees about asynchrony.
*/
function executePromiseTask(promise, fn) {
    // Promise Resolution Procedure:
    // https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    try {
        fn(function (value) {
            if (promise._state !== null) return;
            if (value === promise) throw new TypeError('A promise cannot be resolved with itself.');
            var shouldExecuteTick = promise._lib && beginMicroTickScope();
            if (value && typeof value.then === 'function') {
                executePromiseTask(promise, function (resolve, reject) {
                    value instanceof Promise ? value._then(resolve, reject) : value.then(resolve, reject);
                });
            } else {
                promise._state = true;
                promise._value = value;
                propagateAllListeners(promise);
            }
            if (shouldExecuteTick) endMicroTickScope();
        }, handleRejection.bind(null, promise)); // If Function.bind is not supported. Exception is handled in catch below
    } catch (ex) {
        handleRejection(promise, ex);
    }
}

function handleRejection(promise, reason) {
    rejectingErrors.push(reason);
    if (promise._state !== null) return;
    var shouldExecuteTick = promise._lib && beginMicroTickScope();
    reason = rejectionMapper(reason);
    promise._state = false;
    promise._value = reason;
    debug && reason !== null && typeof reason === 'object' && !reason._promise && tryCatch(function () {
        var origProp = getPropertyDescriptor(reason, "stack");
        reason._promise = promise;
        setProp(reason, "stack", {
            get: function () {
                return stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack;
            }
        });
    });
    // Add the failure to a list of possibly uncaught errors
    addPossiblyUnhandledError(promise);
    propagateAllListeners(promise);
    if (shouldExecuteTick) endMicroTickScope();
}

function propagateAllListeners(promise) {
    //debug && linkToPreviousPromise(promise);
    var listeners = promise._listeners;
    promise._listeners = [];
    for (var i = 0, len = listeners.length; i < len; ++i) {
        propagateToListener(promise, listeners[i]);
    }
    var psd = promise._PSD;
    --psd.ref || psd.finalize(); // if psd.ref reaches zero, call psd.finalize();
    if (numScheduledCalls === 0) {
        // If numScheduledCalls is 0, it means that our stack is not in a callback of a scheduled call,
        // and that no deferreds where listening to this rejection or success.
        // Since there is a risk that our stack can contain application code that may
        // do stuff after this code is finished that may generate new calls, we cannot
        // call finalizers here.
        ++numScheduledCalls;
        asap$1(function () {
            if (--numScheduledCalls === 0) finalizePhysicalTick(); // Will detect unhandled errors
        }, []);
    }
}

function propagateToListener(promise, listener) {
    if (promise._state === null) {
        promise._listeners.push(listener);
        return;
    }

    var cb = promise._state ? listener.onFulfilled : listener.onRejected;
    if (cb === null) {
        // This Listener doesnt have a listener for the event being triggered (onFulfilled or onReject) so lets forward the event to any eventual listeners on the Promise instance returned by then() or catch()
        return (promise._state ? listener.resolve : listener.reject)(promise._value);
    }
    var psd = listener.psd;
    ++psd.ref;
    ++numScheduledCalls;
    asap$1(callListener, [cb, promise, listener]);
}

function callListener(cb, promise, listener) {
    var outerScope = PSD;
    var psd = listener.psd;
    try {
        if (psd !== outerScope) {
            // **KEEP** outerScope.env = wrappers.snapshot(); // Snapshot outerScope's environment.
            PSD = psd;
            // **KEEP** wrappers.restore(psd.env); // Restore PSD's environment.
        }

        // Set static variable currentFulfiller to the promise that is being fullfilled,
        // so that we connect the chain of promises (for long stacks support)
        currentFulfiller = promise;

        // Call callback and resolve our listener with it's return value.
        var value = promise._value,
            ret;
        if (promise._state) {
            ret = cb(value);
        } else {
            if (rejectingErrors.length) rejectingErrors = [];
            ret = cb(value);
            if (rejectingErrors.indexOf(value) === -1) markErrorAsHandled(promise); // Callback didnt do Promise.reject(err) nor reject(err) onto another promise.
        }
        listener.resolve(ret);
    } catch (e) {
        // Exception thrown in callback. Reject our listener.
        listener.reject(e);
    } finally {
        // Restore PSD, env and currentFulfiller.
        if (psd !== outerScope) {
            PSD = outerScope;
            // **KEEP** wrappers.restore(outerScope.env); // Restore outerScope's environment
        }
        currentFulfiller = null;
        if (--numScheduledCalls === 0) finalizePhysicalTick();
        --psd.ref || psd.finalize();
    }
}

function getStack(promise, stacks, limit) {
    if (stacks.length === limit) return stacks;
    var stack = "";
    if (promise._state === false) {
        var failure = promise._value,
            errorName,
            message;

        if (failure != null) {
            errorName = failure.name || "Error";
            message = failure.message || failure;
            stack = prettyStack(failure, 0);
        } else {
            errorName = failure; // If error is undefined or null, show that.
            message = "";
        }
        stacks.push(errorName + (message ? ": " + message : "") + stack);
    }
    if (debug) {
        stack = prettyStack(promise._stackHolder, 2);
        if (stack && stacks.indexOf(stack) === -1) stacks.push(stack);
        if (promise._prev) getStack(promise._prev, stacks, limit);
    }
    return stacks;
}

function linkToPreviousPromise(promise, prev) {
    // Support long stacks by linking to previous completed promise.
    var numPrev = prev ? prev._numPrev + 1 : 0;
    if (numPrev < LONG_STACKS_CLIP_LIMIT) {
        // Prohibit infinite Promise loops to get an infinite long memory consuming "tail".
        promise._prev = prev;
        promise._numPrev = numPrev;
    }
}

/* The callback to schedule with setImmediate() or setTimeout().
   It runs a virtual microtick and executes any callback registered in microtickQueue.
 */
function physicalTick() {
    beginMicroTickScope() && endMicroTickScope();
}

function beginMicroTickScope() {
    var wasRootExec = isOutsideMicroTick;
    isOutsideMicroTick = false;
    needsNewPhysicalTick = false;
    return wasRootExec;
}

/* Executes micro-ticks without doing try..catch.
   This can be possible because we only use this internally and
   the registered functions are exception-safe (they do try..catch
   internally before calling any external method). If registering
   functions in the microtickQueue that are not exception-safe, this
   would destroy the framework and make it instable. So we don't export
   our asap method.
*/
function endMicroTickScope() {
    var callbacks, i, l;
    do {
        while (microtickQueue.length > 0) {
            callbacks = microtickQueue;
            microtickQueue = [];
            l = callbacks.length;
            for (i = 0; i < l; ++i) {
                var item = callbacks[i];
                item[0].apply(null, item[1]);
            }
        }
    } while (microtickQueue.length > 0);
    isOutsideMicroTick = true;
    needsNewPhysicalTick = true;
}

function finalizePhysicalTick() {
    var unhandledErrs = unhandledErrors;
    unhandledErrors = [];
    unhandledErrs.forEach(function (p) {
        p._PSD.onunhandled.call(null, p._value, p);
    });
    var finalizers = tickFinalizers.slice(0); // Clone first because finalizer may remove itself from list.
    var i = finalizers.length;
    while (i) {
        finalizers[--i]();
    }
}

function run_at_end_of_this_or_next_physical_tick(fn) {
    function finalizer() {
        fn();
        tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
    }
    tickFinalizers.push(finalizer);
    ++numScheduledCalls;
    asap$1(function () {
        if (--numScheduledCalls === 0) finalizePhysicalTick();
    }, []);
}

function addPossiblyUnhandledError(promise) {
    // Only add to unhandledErrors if not already there. The first one to add to this list
    // will be upon the first rejection so that the root cause (first promise in the
    // rejection chain) is the one listed.
    if (!unhandledErrors.some(function (p) {
        return p._value === promise._value;
    })) unhandledErrors.push(promise);
}

function markErrorAsHandled(promise) {
    // Called when a reject handled is actually being called.
    // Search in unhandledErrors for any promise whos _value is this promise_value (list
    // contains only rejected promises, and only one item per error)
    var i = unhandledErrors.length;
    while (i) {
        if (unhandledErrors[--i]._value === promise._value) {
            // Found a promise that failed with this same error object pointer,
            // Remove that since there is a listener that actually takes care of it.
            unhandledErrors.splice(i, 1);
            return;
        }
    }
}

// By default, log uncaught errors to the console
function defaultErrorHandler(e) {
    console.warn('Unhandled rejection: ' + (e.stack || e));
}

function PromiseReject(reason) {
    return new Promise(INTERNAL, false, reason);
}

function wrap(fn, errorCatcher) {
    var psd = PSD;
    return function () {
        var wasRootExec = beginMicroTickScope(),
            outerScope = PSD;

        try {
            if (outerScope !== psd) {
                // **KEEP** outerScope.env = wrappers.snapshot(); // Snapshot outerScope's environment
                PSD = psd;
                // **KEEP** wrappers.restore(psd.env); // Restore PSD's environment.
            }
            return fn.apply(this, arguments);
        } catch (e) {
            errorCatcher && errorCatcher(e);
        } finally {
            if (outerScope !== psd) {
                PSD = outerScope;
                // **KEEP** wrappers.restore(outerScope.env); // Restore outerScope's environment
            }
            if (wasRootExec) endMicroTickScope();
        }
    };
}

function newScope(fn, a1, a2, a3) {
    var parent = PSD,
        psd = Object.create(parent);
    psd.parent = parent;
    psd.ref = 0;
    psd.global = false;
    // **KEEP** psd.env = wrappers.wrap(psd);

    // unhandleds and onunhandled should not be specifically set here.
    // Leave them on parent prototype.
    // unhandleds.push(err) will push to parent's prototype
    // onunhandled() will call parents onunhandled (with this scope's this-pointer though!)
    ++parent.ref;
    psd.finalize = function () {
        --this.parent.ref || this.parent.finalize();
    };
    var rv = usePSD(psd, fn, a1, a2, a3);
    if (psd.ref === 0) psd.finalize();
    return rv;
}

function usePSD(psd, fn, a1, a2, a3) {
    var outerScope = PSD;
    try {
        if (psd !== outerScope) {
            // **KEEP** outerScope.env = wrappers.snapshot(); // snapshot outerScope's environment.
            PSD = psd;
            // **KEEP** wrappers.restore(psd.env); // Restore PSD's environment.
        }
        return fn(a1, a2, a3);
    } finally {
        if (psd !== outerScope) {
            PSD = outerScope;
            // **KEEP** wrappers.restore(outerScope.env); // Restore outerScope's environment.
        }
    }
}

var UNHANDLEDREJECTION = "unhandledrejection";

function globalError(err, promise) {
    var rv;
    try {
        rv = promise.onuncatched(err);
    } catch (e) {}
    if (rv !== false) try {
        var event,
            eventData = { promise: promise, reason: err };
        if (_global.document && document.createEvent) {
            event = document.createEvent('Event');
            event.initEvent(UNHANDLEDREJECTION, true, true);
            extend(event, eventData);
        } else if (_global.CustomEvent) {
            event = new CustomEvent(UNHANDLEDREJECTION, { detail: eventData });
            extend(event, eventData);
        }
        if (event && _global.dispatchEvent) {
            dispatchEvent(event);
            if (!_global.PromiseRejectionEvent && _global.onunhandledrejection)
                // No native support for PromiseRejectionEvent but user has set window.onunhandledrejection. Manually call it.
                try {
                    _global.onunhandledrejection(event);
                } catch (_) {}
        }
        if (!event.defaultPrevented) {
            // Backward compatibility: fire to events registered at Promise.on.error
            Promise.on.error.fire(err, promise);
        }
    } catch (e) {}
}

/* **KEEP** 

export function wrapPromise(PromiseClass) {
    var proto = PromiseClass.prototype;
    var origThen = proto.then;
    
    wrappers.add({
        snapshot: () => proto.then,
        restore: value => {proto.then = value;},
        wrap: () => patchedThen
    });

    function patchedThen (onFulfilled, onRejected) {
        var promise = this;
        var onFulfilledProxy = wrap(function(value){
            var rv = value;
            if (onFulfilled) {
                rv = onFulfilled(rv);
                if (rv && typeof rv.then === 'function') rv.then(); // Intercept that promise as well.
            }
            --PSD.ref || PSD.finalize();
            return rv;
        });
        var onRejectedProxy = wrap(function(err){
            promise._$err = err;
            var unhandleds = PSD.unhandleds;
            var idx = unhandleds.length,
                rv;
            while (idx--) if (unhandleds[idx]._$err === err) break;
            if (onRejected) {
                if (idx !== -1) unhandleds.splice(idx, 1); // Mark as handled.
                rv = onRejected(err);
                if (rv && typeof rv.then === 'function') rv.then(); // Intercept that promise as well.
            } else {
                if (idx === -1) unhandleds.push(promise);
                rv = PromiseClass.reject(err);
                rv._$nointercept = true; // Prohibit eternal loop.
            }
            --PSD.ref || PSD.finalize();
            return rv;
        });
        
        if (this._$nointercept) return origThen.apply(this, arguments);
        ++PSD.ref;
        return origThen.call(this, onFulfilledProxy, onRejectedProxy);
    }
}

// Global Promise wrapper
if (_global.Promise) wrapPromise(_global.Promise);

*/

doFakeAutoComplete(function () {
    // Simplify the job for VS Intellisense. This piece of code is one of the keys to the new marvellous intellisense support in Dexie.
    asap$1 = function (fn, args) {
        setTimeout(function () {
            fn.apply(null, args);
        }, 0);
    };
});

function rejection(err, uncaughtHandler) {
    // Get the call stack and return a rejected promise.
    var rv = Promise.reject(err);
    return uncaughtHandler ? rv.uncaught(uncaughtHandler) : rv;
}

/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * By David Fahlander, david.fahlander@gmail.com
 *
 * Version 1.5.1, Tue Nov 01 2016
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 */

var DEXIE_VERSION = '1.5.1';
var maxString = String.fromCharCode(65535);
var maxKey = function () {
    try {
        IDBKeyRange.only([[]]);return [[]];
    } catch (e) {
        return maxString;
    }
}();
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== 'undefined' && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = function (frame) {
    return !/(dexie\.js|dexie\.min\.js)/.test(frame);
};

setDebug(debug, dexieStackFrameFilter);

function Dexie(dbName, options) {
    /// <param name="options" type="Object" optional="true">Specify only if you wich to control which addons that should run on this instance</param>
    var deps = Dexie.dependencies;
    var opts = extend({
        // Default Options
        addons: Dexie.addons, // Pick statically registered addons by default
        autoOpen: true, // Don't require db.open() explicitely.
        indexedDB: deps.indexedDB, // Backend IndexedDB api. Default to IDBShim or browser env.
        IDBKeyRange: deps.IDBKeyRange // Backend IDBKeyRange api. Default to IDBShim or browser env.
    }, options);
    var addons = opts.addons,
        autoOpen = opts.autoOpen,
        indexedDB = opts.indexedDB,
        IDBKeyRange = opts.IDBKeyRange;

    var globalSchema = this._dbSchema = {};
    var versions = [];
    var dbStoreNames = [];
    var allTables = {};
    ///<var type="IDBDatabase" />
    var idbdb = null; // Instance of IDBDatabase
    var dbOpenError = null;
    var isBeingOpened = false;
    var openComplete = false;
    var READONLY = "readonly",
        READWRITE = "readwrite";
    var db = this;
    var dbReadyResolve,
        dbReadyPromise = new Promise(function (resolve) {
        dbReadyResolve = resolve;
    }),
        cancelOpen,
        openCanceller = new Promise(function (_, reject) {
        cancelOpen = reject;
    });
    var autoSchema = true;
    var hasNativeGetDatabaseNames = !!getNativeGetDatabaseNamesFn(indexedDB),
        hasGetAll;

    function init() {
        // Default subscribers to "versionchange" and "blocked".
        // Can be overridden by custom handlers. If custom handlers return false, these default
        // behaviours will be prevented.
        db.on("versionchange", function (ev) {
            // Default behavior for versionchange event is to close database connection.
            // Caller can override this behavior by doing db.on("versionchange", function(){ return false; });
            // Let's not block the other window from making it's delete() or open() call.
            // NOTE! This event is never fired in IE,Edge or Safari.
            if (ev.newVersion > 0) console.warn('Another connection wants to upgrade database \'' + db.name + '\'. Closing db now to resume the upgrade.');else console.warn('Another connection wants to delete database \'' + db.name + '\'. Closing db now to resume the delete request.');
            db.close();
            // In many web applications, it would be recommended to force window.reload()
            // when this event occurs. To do that, subscribe to the versionchange event
            // and call window.location.reload(true) if ev.newVersion > 0 (not a deletion)
            // The reason for this is that your current web app obviously has old schema code that needs
            // to be updated. Another window got a newer version of the app and needs to upgrade DB but
            // your window is blocking it unless we close it here.
        });
        db.on("blocked", function (ev) {
            if (!ev.newVersion || ev.newVersion < ev.oldVersion) console.warn('Dexie.delete(\'' + db.name + '\') was blocked');else console.warn('Upgrade \'' + db.name + '\' blocked by other connection holding version ' + ev.oldVersion / 10);
        });
    }

    //
    //
    //
    // ------------------------- Versioning Framework---------------------------
    //
    //
    //

    this.version = function (versionNumber) {
        /// <param name="versionNumber" type="Number"></param>
        /// <returns type="Version"></returns>
        if (idbdb || isBeingOpened) throw new exceptions.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, versionNumber);
        var versionInstance = versions.filter(function (v) {
            return v._cfg.version === versionNumber;
        })[0];
        if (versionInstance) return versionInstance;
        versionInstance = new Version(versionNumber);
        versions.push(versionInstance);
        versions.sort(lowerVersionFirst);
        return versionInstance;
    };

    function Version(versionNumber) {
        this._cfg = {
            version: versionNumber,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
        };
        this.stores({}); // Derive earlier schemas by default.
    }

    extend(Version.prototype, {
        stores: function (stores) {
            /// <summary>
            ///   Defines the schema for a particular version
            /// </summary>
            /// <param name="stores" type="Object">
            /// Example: <br/>
            ///   {users: "id++,first,last,&amp;username,*email", <br/>
            ///   passwords: "id++,&amp;username"}<br/>
            /// <br/>
            /// Syntax: {Table: "[primaryKey][++],[&amp;][*]index1,[&amp;][*]index2,..."}<br/><br/>
            /// Special characters:<br/>
            ///  "&amp;"  means unique key, <br/>
            ///  "*"  means value is multiEntry, <br/>
            ///  "++" means auto-increment and only applicable for primary key <br/>
            /// </param>
            this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;

            // Derive stores from earlier versions if they are not explicitely specified as null or a new syntax.
            var storesSpec = {};
            versions.forEach(function (version) {
                // 'versions' is always sorted by lowest version first.
                extend(storesSpec, version._cfg.storesSource);
            });

            var dbschema = this._cfg.dbschema = {};
            this._parseStoresSpec(storesSpec, dbschema);
            // Update the latest schema to this version
            // Update API
            globalSchema = db._dbSchema = dbschema;
            removeTablesApi([allTables, db, Transaction.prototype]);
            setApiOnPlace([allTables, db, Transaction.prototype, this._cfg.tables], keys(dbschema), READWRITE, dbschema);
            dbStoreNames = keys(dbschema);
            return this;
        },
        upgrade: function (upgradeFunction) {
            /// <param name="upgradeFunction" optional="true">Function that performs upgrading actions.</param>
            var self = this;
            fakeAutoComplete(function () {
                upgradeFunction(db._createTransaction(READWRITE, keys(self._cfg.dbschema), self._cfg.dbschema)); // BUGBUG: No code completion for prev version's tables wont appear.
            });
            this._cfg.contentUpgrade = upgradeFunction;
            return this;
        },
        _parseStoresSpec: function (stores, outSchema) {
            keys(stores).forEach(function (tableName) {
                if (stores[tableName] !== null) {
                    var instanceTemplate = {};
                    var indexes = parseIndexSyntax(stores[tableName]);
                    var primKey = indexes.shift();
                    if (primKey.multi) throw new exceptions.Schema("Primary key cannot be multi-valued");
                    if (primKey.keyPath) setByKeyPath(instanceTemplate, primKey.keyPath, primKey.auto ? 0 : primKey.keyPath);
                    indexes.forEach(function (idx) {
                        if (idx.auto) throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                        if (!idx.keyPath) throw new exceptions.Schema("Index must have a name and cannot be an empty string");
                        setByKeyPath(instanceTemplate, idx.keyPath, idx.compound ? idx.keyPath.map(function () {
                            return "";
                        }) : "");
                    });
                    outSchema[tableName] = new TableSchema(tableName, primKey, indexes, instanceTemplate);
                }
            });
        }
    });

    function runUpgraders(oldVersion, idbtrans, reject) {
        var trans = db._createTransaction(READWRITE, dbStoreNames, globalSchema);
        trans.create(idbtrans);
        trans._completion.catch(reject);
        var rejectTransaction = trans._reject.bind(trans);
        newScope(function () {
            PSD.trans = trans;
            if (oldVersion === 0) {
                // Create tables:
                keys(globalSchema).forEach(function (tableName) {
                    createTable(idbtrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
                });
                Promise.follow(function () {
                    return db.on.populate.fire(trans);
                }).catch(rejectTransaction);
            } else updateTablesAndIndexes(oldVersion, trans, idbtrans).catch(rejectTransaction);
        });
    }

    function updateTablesAndIndexes(oldVersion, trans, idbtrans) {
        // Upgrade version to version, step-by-step from oldest to newest version.
        // Each transaction object will contain the table set that was current in that version (but also not-yet-deleted tables from its previous version)
        var queue = [];
        var oldVersionStruct = versions.filter(function (version) {
            return version._cfg.version === oldVersion;
        })[0];
        if (!oldVersionStruct) throw new exceptions.Upgrade("Dexie specification of currently installed DB version is missing");
        globalSchema = db._dbSchema = oldVersionStruct._cfg.dbschema;
        var anyContentUpgraderHasRun = false;

        var versToRun = versions.filter(function (v) {
            return v._cfg.version > oldVersion;
        });
        versToRun.forEach(function (version) {
            /// <param name="version" type="Version"></param>
            queue.push(function () {
                var oldSchema = globalSchema;
                var newSchema = version._cfg.dbschema;
                adjustToExistingIndexNames(oldSchema, idbtrans);
                adjustToExistingIndexNames(newSchema, idbtrans);
                globalSchema = db._dbSchema = newSchema;
                var diff = getSchemaDiff(oldSchema, newSchema);
                // Add tables           
                diff.add.forEach(function (tuple) {
                    createTable(idbtrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
                });
                // Change tables
                diff.change.forEach(function (change) {
                    if (change.recreate) {
                        throw new exceptions.Upgrade("Not yet support for changing primary key");
                    } else {
                        var store = idbtrans.objectStore(change.name);
                        // Add indexes
                        change.add.forEach(function (idx) {
                            addIndex(store, idx);
                        });
                        // Update indexes
                        change.change.forEach(function (idx) {
                            store.deleteIndex(idx.name);
                            addIndex(store, idx);
                        });
                        // Delete indexes
                        change.del.forEach(function (idxName) {
                            store.deleteIndex(idxName);
                        });
                    }
                });
                if (version._cfg.contentUpgrade) {
                    anyContentUpgraderHasRun = true;
                    return Promise.follow(function () {
                        version._cfg.contentUpgrade(trans);
                    });
                }
            });
            queue.push(function (idbtrans) {
                if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
                    // Dont delete old tables if ieBug is present and a content upgrader has run. Let tables be left in DB so far. This needs to be taken care of.
                    var newSchema = version._cfg.dbschema;
                    // Delete old tables
                    deleteRemovedTables(newSchema, idbtrans);
                }
            });
        });

        // Now, create a queue execution engine
        function runQueue() {
            return queue.length ? Promise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : Promise.resolve();
        }

        return runQueue().then(function () {
            createMissingTables(globalSchema, idbtrans); // At last, make sure to create any missing tables. (Needed by addons that add stores to DB without specifying version)
        });
    }

    function getSchemaDiff(oldSchema, newSchema) {
        var diff = {
            del: [], // Array of table names
            add: [], // Array of [tableName, newDefinition]
            change: [] // Array of {name: tableName, recreate: newDefinition, del: delIndexNames, add: newIndexDefs, change: changedIndexDefs}
        };
        for (var table in oldSchema) {
            if (!newSchema[table]) diff.del.push(table);
        }
        for (table in newSchema) {
            var oldDef = oldSchema[table],
                newDef = newSchema[table];
            if (!oldDef) {
                diff.add.push([table, newDef]);
            } else {
                var change = {
                    name: table,
                    def: newDef,
                    recreate: false,
                    del: [],
                    add: [],
                    change: []
                };
                if (oldDef.primKey.src !== newDef.primKey.src) {
                    // Primary key has changed. Remove and re-add table.
                    change.recreate = true;
                    diff.change.push(change);
                } else {
                    // Same primary key. Just find out what differs:
                    var oldIndexes = oldDef.idxByName;
                    var newIndexes = newDef.idxByName;
                    for (var idxName in oldIndexes) {
                        if (!newIndexes[idxName]) change.del.push(idxName);
                    }
                    for (idxName in newIndexes) {
                        var oldIdx = oldIndexes[idxName],
                            newIdx = newIndexes[idxName];
                        if (!oldIdx) change.add.push(newIdx);else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
                    }
                    if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                        diff.change.push(change);
                    }
                }
            }
        }
        return diff;
    }

    function createTable(idbtrans, tableName, primKey, indexes) {
        /// <param name="idbtrans" type="IDBTransaction"></param>
        var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? { keyPath: primKey.keyPath, autoIncrement: primKey.auto } : { autoIncrement: primKey.auto });
        indexes.forEach(function (idx) {
            addIndex(store, idx);
        });
        return store;
    }

    function createMissingTables(newSchema, idbtrans) {
        keys(newSchema).forEach(function (tableName) {
            if (!idbtrans.db.objectStoreNames.contains(tableName)) {
                createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
            }
        });
    }

    function deleteRemovedTables(newSchema, idbtrans) {
        for (var i = 0; i < idbtrans.db.objectStoreNames.length; ++i) {
            var storeName = idbtrans.db.objectStoreNames[i];
            if (newSchema[storeName] == null) {
                idbtrans.db.deleteObjectStore(storeName);
            }
        }
    }

    function addIndex(store, idx) {
        store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
    }

    function dbUncaught(err) {
        return db.on.error.fire(err);
    }

    //
    //
    //      Dexie Protected API
    //
    //

    this._allTables = allTables;

    this._tableFactory = function createTable(mode, tableSchema) {
        /// <param name="tableSchema" type="TableSchema"></param>
        if (mode === READONLY) return new Table(tableSchema.name, tableSchema, Collection);else return new WriteableTable(tableSchema.name, tableSchema);
    };

    this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) {
        return new Transaction(mode, storeNames, dbschema, parentTransaction);
    };

    /* Generate a temporary transaction when db operations are done outside a transactino scope.
    */
    function tempTransaction(mode, storeNames, fn) {
        // Last argument is "writeLocked". But this doesnt apply to oneshot direct db operations, so we ignore it.
        if (!openComplete && !PSD.letThrough) {
            if (!isBeingOpened) {
                if (!autoOpen) return rejection(new exceptions.DatabaseClosed(), dbUncaught);
                db.open().catch(nop); // Open in background. If if fails, it will be catched by the final promise anyway.
            }
            return dbReadyPromise.then(function () {
                return tempTransaction(mode, storeNames, fn);
            });
        } else {
            var trans = db._createTransaction(mode, storeNames, globalSchema);
            return trans._promise(mode, function (resolve, reject) {
                newScope(function () {
                    // OPTIMIZATION POSSIBLE? newScope() not needed because it's already done in _promise.
                    PSD.trans = trans;
                    fn(resolve, reject, trans);
                });
            }).then(function (result) {
                // Instead of resolving value directly, wait with resolving it until transaction has completed.
                // Otherwise the data would not be in the DB if requesting it in the then() operation.
                // Specifically, to ensure that the following expression will work:
                //
                //   db.friends.put({name: "Arne"}).then(function () {
                //       db.friends.where("name").equals("Arne").count(function(count) {
                //           assert (count === 1);
                //       });
                //   });
                //
                return trans._completion.then(function () {
                    return result;
                });
            }); /*.catch(err => { // Don't do this as of now. If would affect bulk- and modify methods in a way that could be more intuitive. But wait! Maybe change in next major.
                 trans._reject(err);
                 return rejection(err);
                });*/
        }
    }

    this._whenReady = function (fn) {
        return new Promise(fake || openComplete || PSD.letThrough ? fn : function (resolve, reject) {
            if (!isBeingOpened) {
                if (!autoOpen) {
                    reject(new exceptions.DatabaseClosed());
                    return;
                }
                db.open().catch(nop); // Open in background. If if fails, it will be catched by the final promise anyway.
            }
            dbReadyPromise.then(function () {
                fn(resolve, reject);
            });
        }).uncaught(dbUncaught);
    };

    //
    //
    //
    //
    //      Dexie API
    //
    //
    //

    this.verno = 0;

    this.open = function () {
        if (isBeingOpened || idbdb) return dbReadyPromise.then(function () {
            return dbOpenError ? rejection(dbOpenError, dbUncaught) : db;
        });
        debug && (openCanceller._stackHolder = getErrorWithStack()); // Let stacks point to when open() was called rather than where new Dexie() was called.
        isBeingOpened = true;
        dbOpenError = null;
        openComplete = false;

        // Function pointers to call when the core opening process completes.
        var resolveDbReady = dbReadyResolve,

        // upgradeTransaction to abort on failure.
        upgradeTransaction = null;

        return Promise.race([openCanceller, new Promise(function (resolve, reject) {
            doFakeAutoComplete(function () {
                return resolve();
            });

            // Make sure caller has specified at least one version
            if (versions.length > 0) autoSchema = false;

            // Multiply db.verno with 10 will be needed to workaround upgrading bug in IE:
            // IE fails when deleting objectStore after reading from it.
            // A future version of Dexie.js will stopover an intermediate version to workaround this.
            // At that point, we want to be backward compatible. Could have been multiplied with 2, but by using 10, it is easier to map the number to the real version number.

            // If no API, throw!
            if (!indexedDB) throw new exceptions.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL " + "(not locally). If using old Safari versions, make sure to include indexedDB polyfill.");

            var req = autoSchema ? indexedDB.open(dbName) : indexedDB.open(dbName, Math.round(db.verno * 10));
            if (!req) throw new exceptions.MissingAPI("IndexedDB API not available"); // May happen in Safari private mode, see https://github.com/dfahlander/Dexie.js/issues/134
            req.onerror = wrap(eventRejectHandler(reject));
            req.onblocked = wrap(fireOnBlocked);
            req.onupgradeneeded = wrap(function (e) {
                upgradeTransaction = req.transaction;
                if (autoSchema && !db._allowEmptyDB) {
                    // Unless an addon has specified db._allowEmptyDB, lets make the call fail.
                    // Caller did not specify a version or schema. Doing that is only acceptable for opening alread existing databases.
                    // If onupgradeneeded is called it means database did not exist. Reject the open() promise and make sure that we
                    // do not create a new database by accident here.
                    req.onerror = preventDefault; // Prohibit onabort error from firing before we're done!
                    upgradeTransaction.abort(); // Abort transaction (would hope that this would make DB disappear but it doesnt.)
                    // Close database and delete it.
                    req.result.close();
                    var delreq = indexedDB.deleteDatabase(dbName); // The upgrade transaction is atomic, and javascript is single threaded - meaning that there is no risk that we delete someone elses database here!
                    delreq.onsuccess = delreq.onerror = wrap(function () {
                        reject(new exceptions.NoSuchDatabase('Database ' + dbName + ' doesnt exist'));
                    });
                } else {
                    upgradeTransaction.onerror = wrap(eventRejectHandler(reject));
                    var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion; // Safari 8 fix.
                    runUpgraders(oldVer / 10, upgradeTransaction, reject, req);
                }
            }, reject);

            req.onsuccess = wrap(function () {
                // Core opening procedure complete. Now let's just record some stuff.
                upgradeTransaction = null;
                idbdb = req.result;
                connections.push(db); // Used for emulating versionchange event on IE/Edge/Safari.

                if (autoSchema) readGlobalSchema();else if (idbdb.objectStoreNames.length > 0) {
                    try {
                        adjustToExistingIndexNames(globalSchema, idbdb.transaction(safariMultiStoreFix(idbdb.objectStoreNames), READONLY));
                    } catch (e) {
                        // Safari may bail out if > 1 store names. However, this shouldnt be a showstopper. Issue #120.
                    }
                }

                idbdb.onversionchange = wrap(function (ev) {
                    db._vcFired = true; // detect implementations that not support versionchange (IE/Edge/Safari)
                    db.on("versionchange").fire(ev);
                });

                if (!hasNativeGetDatabaseNames) {
                    // Update localStorage with list of database names
                    globalDatabaseList(function (databaseNames) {
                        if (databaseNames.indexOf(dbName) === -1) return databaseNames.push(dbName);
                    });
                }

                resolve();
            }, reject);
        })]).then(function () {
            // Before finally resolving the dbReadyPromise and this promise,
            // call and await all on('ready') subscribers:
            // Dexie.vip() makes subscribers able to use the database while being opened.
            // This is a must since these subscribers take part of the opening procedure.
            return Dexie.vip(db.on.ready.fire);
        }).then(function () {
            // Resolve the db.open() with the db instance.
            isBeingOpened = false;
            return db;
        }).catch(function (err) {
            try {
                // Did we fail within onupgradeneeded? Make sure to abort the upgrade transaction so it doesnt commit.
                upgradeTransaction && upgradeTransaction.abort();
            } catch (e) {}
            isBeingOpened = false; // Set before calling db.close() so that it doesnt reject openCanceller again (leads to unhandled rejection event).
            db.close(); // Closes and resets idbdb, removes connections, resets dbReadyPromise and openCanceller so that a later db.open() is fresh.
            // A call to db.close() may have made on-ready subscribers fail. Use dbOpenError if set, since err could be a follow-up error on that.
            dbOpenError = err; // Record the error. It will be used to reject further promises of db operations.
            return rejection(dbOpenError, dbUncaught); // dbUncaught will make sure any error that happened in any operation before will now bubble to db.on.error() thanks to the special handling in Promise.uncaught().
        }).finally(function () {
            openComplete = true;
            resolveDbReady(); // dbReadyPromise is resolved no matter if open() rejects or resolved. It's just to wake up waiters.
        });
    };

    this.close = function () {
        var idx = connections.indexOf(db);
        if (idx >= 0) connections.splice(idx, 1);
        if (idbdb) {
            try {
                idbdb.close();
            } catch (e) {}
            idbdb = null;
        }
        autoOpen = false;
        dbOpenError = new exceptions.DatabaseClosed();
        if (isBeingOpened) cancelOpen(dbOpenError);
        // Reset dbReadyPromise promise:
        dbReadyPromise = new Promise(function (resolve) {
            dbReadyResolve = resolve;
        });
        openCanceller = new Promise(function (_, reject) {
            cancelOpen = reject;
        });
    };

    this.delete = function () {
        var hasArguments = arguments.length > 0;
        return new Promise(function (resolve, reject) {
            if (hasArguments) throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
            if (isBeingOpened) {
                dbReadyPromise.then(doDelete);
            } else {
                doDelete();
            }
            function doDelete() {
                db.close();
                var req = indexedDB.deleteDatabase(dbName);
                req.onsuccess = wrap(function () {
                    if (!hasNativeGetDatabaseNames) {
                        globalDatabaseList(function (databaseNames) {
                            var pos = databaseNames.indexOf(dbName);
                            if (pos >= 0) return databaseNames.splice(pos, 1);
                        });
                    }
                    resolve();
                });
                req.onerror = wrap(eventRejectHandler(reject));
                req.onblocked = fireOnBlocked;
            }
        }).uncaught(dbUncaught);
    };

    this.backendDB = function () {
        return idbdb;
    };

    this.isOpen = function () {
        return idbdb !== null;
    };
    this.hasFailed = function () {
        return dbOpenError !== null;
    };
    this.dynamicallyOpened = function () {
        return autoSchema;
    };

    //
    // Properties
    //
    this.name = dbName;

    // db.tables - an array of all Table instances.
    setProp(this, "tables", {
        get: function () {
            /// <returns type="Array" elementType="WriteableTable" />
            return keys(allTables).map(function (name) {
                return allTables[name];
            });
        }
    });

    //
    // Events
    //
    this.on = Events(this, "error", "populate", "blocked", "versionchange", { ready: [promisableChain, nop] });
    this.on.error.subscribe = deprecated("Dexie.on.error", this.on.error.subscribe);
    this.on.error.unsubscribe = deprecated("Dexie.on.error.unsubscribe", this.on.error.unsubscribe);

    this.on.ready.subscribe = override(this.on.ready.subscribe, function (subscribe) {
        return function (subscriber, bSticky) {
            Dexie.vip(function () {
                if (openComplete) {
                    // Database already open. Call subscriber asap.
                    if (!dbOpenError) Promise.resolve().then(subscriber);
                    // bSticky: Also subscribe to future open sucesses (after close / reopen) 
                    if (bSticky) subscribe(subscriber);
                } else {
                    // Database not yet open. Subscribe to it.
                    subscribe(subscriber);
                    // If bSticky is falsy, make sure to unsubscribe subscriber when fired once.
                    if (!bSticky) subscribe(function unsubscribe() {
                        db.on.ready.unsubscribe(subscriber);
                        db.on.ready.unsubscribe(unsubscribe);
                    });
                }
            });
        };
    });

    fakeAutoComplete(function () {
        db.on("populate").fire(db._createTransaction(READWRITE, dbStoreNames, globalSchema));
        db.on("error").fire(new Error());
    });

    this.transaction = function (mode, tableInstances, scopeFunc) {
        /// <summary>
        ///
        /// </summary>
        /// <param name="mode" type="String">"r" for readonly, or "rw" for readwrite</param>
        /// <param name="tableInstances">Table instance, Array of Table instances, String or String Array of object stores to include in the transaction</param>
        /// <param name="scopeFunc" type="Function">Function to execute with transaction</param>

        // Let table arguments be all arguments between mode and last argument.
        var i = arguments.length;
        if (i < 2) throw new exceptions.InvalidArgument("Too few arguments");
        // Prevent optimzation killer (https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments)
        // and clone arguments except the first one into local var 'args'.
        var args = new Array(i - 1);
        while (--i) {
            args[i - 1] = arguments[i];
        } // Let scopeFunc be the last argument and pop it so that args now only contain the table arguments.
        scopeFunc = args.pop();
        var tables = flatten(args); // Support using array as middle argument, or a mix of arrays and non-arrays.
        var parentTransaction = PSD.trans;
        // Check if parent transactions is bound to this db instance, and if caller wants to reuse it
        if (!parentTransaction || parentTransaction.db !== db || mode.indexOf('!') !== -1) parentTransaction = null;
        var onlyIfCompatible = mode.indexOf('?') !== -1;
        mode = mode.replace('!', '').replace('?', ''); // Ok. Will change arguments[0] as well but we wont touch arguments henceforth.

        try {
            //
            // Get storeNames from arguments. Either through given table instances, or through given table names.
            //
            var storeNames = tables.map(function (table) {
                var storeName = table instanceof Table ? table.name : table;
                if (typeof storeName !== 'string') throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return storeName;
            });

            //
            // Resolve mode. Allow shortcuts "r" and "rw".
            //
            if (mode == "r" || mode == READONLY) mode = READONLY;else if (mode == "rw" || mode == READWRITE) mode = READWRITE;else throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);

            if (parentTransaction) {
                // Basic checks
                if (parentTransaction.mode === READONLY && mode === READWRITE) {
                    if (onlyIfCompatible) {
                        // Spawn new transaction instead.
                        parentTransaction = null;
                    } else throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                }
                if (parentTransaction) {
                    storeNames.forEach(function (storeName) {
                        if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                            if (onlyIfCompatible) {
                                // Spawn new transaction instead.
                                parentTransaction = null;
                            } else throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
                        }
                    });
                }
            }
        } catch (e) {
            return parentTransaction ? parentTransaction._promise(null, function (_, reject) {
                reject(e);
            }) : rejection(e, dbUncaught);
        }
        // If this is a sub-transaction, lock the parent and then launch the sub-transaction.
        return parentTransaction ? parentTransaction._promise(mode, enterTransactionScope, "lock") : db._whenReady(enterTransactionScope);

        function enterTransactionScope(resolve) {
            var parentPSD = PSD;
            resolve(Promise.resolve().then(function () {
                return newScope(function () {
                    // Keep a pointer to last non-transactional PSD to use if someone calls Dexie.ignoreTransaction().
                    PSD.transless = PSD.transless || parentPSD;
                    // Our transaction.
                    //return new Promise((resolve, reject) => {
                    var trans = db._createTransaction(mode, storeNames, globalSchema, parentTransaction);
                    // Let the transaction instance be part of a Promise-specific data (PSD) value.
                    PSD.trans = trans;

                    if (parentTransaction) {
                        // Emulate transaction commit awareness for inner transaction (must 'commit' when the inner transaction has no more operations ongoing)
                        trans.idbtrans = parentTransaction.idbtrans;
                    } else {
                        trans.create(); // Create the backend transaction so that complete() or error() will trigger even if no operation is made upon it.
                    }

                    // Provide arguments to the scope function (for backward compatibility)
                    var tableArgs = storeNames.map(function (name) {
                        return allTables[name];
                    });
                    tableArgs.push(trans);

                    var returnValue;
                    return Promise.follow(function () {
                        // Finally, call the scope function with our table and transaction arguments.
                        returnValue = scopeFunc.apply(trans, tableArgs); // NOTE: returnValue is used in trans.on.complete() not as a returnValue to this func.
                        if (returnValue) {
                            if (typeof returnValue.next === 'function' && typeof returnValue.throw === 'function') {
                                // scopeFunc returned an iterator with throw-support. Handle yield as await.
                                returnValue = awaitIterator(returnValue);
                            } else if (typeof returnValue.then === 'function' && !hasOwn(returnValue, '_PSD')) {
                                throw new exceptions.IncompatiblePromise("Incompatible Promise returned from transaction scope (read more at http://tinyurl.com/znyqjqc). Transaction scope: " + scopeFunc.toString());
                            }
                        }
                    }).uncaught(dbUncaught).then(function () {
                        if (parentTransaction) trans._resolve(); // sub transactions don't react to idbtrans.oncomplete. We must trigger a acompletion.
                        return trans._completion; // Even if WE believe everything is fine. Await IDBTransaction's oncomplete or onerror as well.
                    }).then(function () {
                        return returnValue;
                    }).catch(function (e) {
                        //reject(e);
                        trans._reject(e); // Yes, above then-handler were maybe not called because of an unhandled rejection in scopeFunc!
                        return rejection(e);
                    });
                    //});
                });
            }));
        }
    };

    this.table = function (tableName) {
        /// <returns type="WriteableTable"></returns>
        if (fake && autoSchema) return new WriteableTable(tableName);
        if (!hasOwn(allTables, tableName)) {
            throw new exceptions.InvalidTable('Table ' + tableName + ' does not exist');
        }
        return allTables[tableName];
    };

    //
    //
    //
    // Table Class
    //
    //
    //
    function Table(name, tableSchema, collClass) {
        /// <param name="name" type="String"></param>
        this.name = name;
        this.schema = tableSchema;
        this.hook = allTables[name] ? allTables[name].hook : Events(null, {
            "creating": [hookCreatingChain, nop],
            "reading": [pureFunctionChain, mirror],
            "updating": [hookUpdatingChain, nop],
            "deleting": [hookDeletingChain, nop]
        });
        this._collClass = collClass || Collection;
    }

    props(Table.prototype, {

        //
        // Table Protected Methods
        //

        _trans: function getTransaction(mode, fn, writeLocked) {
            var trans = PSD.trans;
            return trans && trans.db === db ? trans._promise(mode, fn, writeLocked) : tempTransaction(mode, [this.name], fn);
        },
        _idbstore: function getIDBObjectStore(mode, fn, writeLocked) {
            if (fake) return new Promise(fn); // Simplify the work for Intellisense/Code completion.
            var trans = PSD.trans,
                tableName = this.name;
            function supplyIdbStore(resolve, reject, trans) {
                fn(resolve, reject, trans.idbtrans.objectStore(tableName), trans);
            }
            return trans && trans.db === db ? trans._promise(mode, supplyIdbStore, writeLocked) : tempTransaction(mode, [this.name], supplyIdbStore);
        },

        //
        // Table Public Methods
        //
        get: function (key, cb) {
            var self = this;
            return this._idbstore(READONLY, function (resolve, reject, idbstore) {
                fake && resolve(self.schema.instanceTemplate);
                var req = idbstore.get(key);
                req.onerror = eventRejectHandler(reject);
                req.onsuccess = wrap(function () {
                    resolve(self.hook.reading.fire(req.result));
                }, reject);
            }).then(cb);
        },
        where: function (indexName) {
            return new WhereClause(this, indexName);
        },
        count: function (cb) {
            return this.toCollection().count(cb);
        },
        offset: function (offset) {
            return this.toCollection().offset(offset);
        },
        limit: function (numRows) {
            return this.toCollection().limit(numRows);
        },
        reverse: function () {
            return this.toCollection().reverse();
        },
        filter: function (filterFunction) {
            return this.toCollection().and(filterFunction);
        },
        each: function (fn) {
            return this.toCollection().each(fn);
        },
        toArray: function (cb) {
            return this.toCollection().toArray(cb);
        },
        orderBy: function (index) {
            return new this._collClass(new WhereClause(this, index));
        },

        toCollection: function () {
            return new this._collClass(new WhereClause(this));
        },

        mapToClass: function (constructor, structure) {
            /// <summary>
            ///     Map table to a javascript constructor function. Objects returned from the database will be instances of this class, making
            ///     it possible to the instanceOf operator as well as extending the class using constructor.prototype.method = function(){...}.
            /// </summary>
            /// <param name="constructor">Constructor function representing the class.</param>
            /// <param name="structure" optional="true">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
            /// know what type each member has. Example: {name: String, emailAddresses: [String], password}</param>
            this.schema.mappedClass = constructor;
            var instanceTemplate = Object.create(constructor.prototype);
            if (structure) {
                // structure and instanceTemplate is for IDE code competion only while constructor.prototype is for actual inheritance.
                applyStructure(instanceTemplate, structure);
            }
            this.schema.instanceTemplate = instanceTemplate;

            // Now, subscribe to the when("reading") event to make all objects that come out from this table inherit from given class
            // no matter which method to use for reading (Table.get() or Table.where(...)... )
            var readHook = function (obj) {
                if (!obj) return obj; // No valid object. (Value is null). Return as is.
                // Create a new object that derives from constructor:
                var res = Object.create(constructor.prototype);
                // Clone members:
                for (var m in obj) {
                    if (hasOwn(obj, m)) try {
                        res[m] = obj[m];
                    } catch (_) {}
                }return res;
            };

            if (this.schema.readHook) {
                this.hook.reading.unsubscribe(this.schema.readHook);
            }
            this.schema.readHook = readHook;
            this.hook("reading", readHook);
            return constructor;
        },
        defineClass: function (structure) {
            /// <summary>
            ///     Define all members of the class that represents the table. This will help code completion of when objects are read from the database
            ///     as well as making it possible to extend the prototype of the returned constructor function.
            /// </summary>
            /// <param name="structure">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
            /// know what type each member has. Example: {name: String, emailAddresses: [String], properties: {shoeSize: Number}}</param>
            return this.mapToClass(Dexie.defineClass(structure), structure);
        }
    });

    //
    //
    //
    // WriteableTable Class (extends Table)
    //
    //
    //
    function WriteableTable(name, tableSchema, collClass) {
        Table.call(this, name, tableSchema, collClass || WriteableCollection);
    }

    function BulkErrorHandlerCatchAll(errorList, done, supportHooks) {
        return (supportHooks ? hookedEventRejectHandler : eventRejectHandler)(function (e) {
            errorList.push(e);
            done && done();
        });
    }

    function bulkDelete(idbstore, trans, keysOrTuples, hasDeleteHook, deletingHook) {
        // If hasDeleteHook, keysOrTuples must be an array of tuples: [[key1, value2],[key2,value2],...],
        // else keysOrTuples must be just an array of keys: [key1, key2, ...].
        return new Promise(function (resolve, reject) {
            var len = keysOrTuples.length,
                lastItem = len - 1;
            if (len === 0) return resolve();
            if (!hasDeleteHook) {
                for (var i = 0; i < len; ++i) {
                    var req = idbstore.delete(keysOrTuples[i]);
                    req.onerror = wrap(eventRejectHandler(reject));
                    if (i === lastItem) req.onsuccess = wrap(function () {
                        return resolve();
                    });
                }
            } else {
                var hookCtx,
                    errorHandler = hookedEventRejectHandler(reject),
                    successHandler = hookedEventSuccessHandler(null);
                tryCatch(function () {
                    for (var i = 0; i < len; ++i) {
                        hookCtx = { onsuccess: null, onerror: null };
                        var tuple = keysOrTuples[i];
                        deletingHook.call(hookCtx, tuple[0], tuple[1], trans);
                        var req = idbstore.delete(tuple[0]);
                        req._hookCtx = hookCtx;
                        req.onerror = errorHandler;
                        if (i === lastItem) req.onsuccess = hookedEventSuccessHandler(resolve);else req.onsuccess = successHandler;
                    }
                }, function (err) {
                    hookCtx.onerror && hookCtx.onerror(err);
                    throw err;
                });
            }
        }).uncaught(dbUncaught);
    }

    derive(WriteableTable).from(Table).extend({
        bulkDelete: function (keys$$1) {
            if (this.hook.deleting.fire === nop) {
                return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                    resolve(bulkDelete(idbstore, trans, keys$$1, false, nop));
                });
            } else {
                return this.where(':id').anyOf(keys$$1).delete().then(function () {}); // Resolve with undefined.
            }
        },
        bulkPut: function (objects, keys$$1) {
            var _this = this;

            return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                if (!idbstore.keyPath && !_this.schema.primKey.auto && !keys$$1) throw new exceptions.InvalidArgument("bulkPut() with non-inbound keys requires keys array in second argument");
                if (idbstore.keyPath && keys$$1) throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                if (keys$$1 && keys$$1.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
                if (objects.length === 0) return resolve(); // Caller provided empty list.
                var done = function (result) {
                    if (errorList.length === 0) resolve(result);else reject(new BulkError(_this.name + '.bulkPut(): ' + errorList.length + ' of ' + numObjs + ' operations failed', errorList));
                };
                var req,
                    errorList = [],
                    errorHandler,
                    numObjs = objects.length,
                    table = _this;
                if (_this.hook.creating.fire === nop && _this.hook.updating.fire === nop) {
                    //
                    // Standard Bulk (no 'creating' or 'updating' hooks to care about)
                    //
                    errorHandler = BulkErrorHandlerCatchAll(errorList);
                    for (var i = 0, l = objects.length; i < l; ++i) {
                        req = keys$$1 ? idbstore.put(objects[i], keys$$1[i]) : idbstore.put(objects[i]);
                        req.onerror = errorHandler;
                    }
                    // Only need to catch success or error on the last operation
                    // according to the IDB spec.
                    req.onerror = BulkErrorHandlerCatchAll(errorList, done);
                    req.onsuccess = eventSuccessHandler(done);
                } else {
                    var effectiveKeys = keys$$1 || idbstore.keyPath && objects.map(function (o) {
                        return getByKeyPath(o, idbstore.keyPath);
                    });
                    // Generate map of {[key]: object}
                    var objectLookup = effectiveKeys && arrayToObject(effectiveKeys, function (key, i) {
                        return key != null && [key, objects[i]];
                    });
                    var promise = !effectiveKeys ?

                    // Auto-incremented key-less objects only without any keys argument.
                    table.bulkAdd(objects) :

                    // Keys provided. Either as inbound in provided objects, or as a keys argument.
                    // Begin with updating those that exists in DB:
                    table.where(':id').anyOf(effectiveKeys.filter(function (key) {
                        return key != null;
                    })).modify(function () {
                        this.value = objectLookup[this.primKey];
                        objectLookup[this.primKey] = null; // Mark as "don't add this"
                    }).catch(ModifyError, function (e) {
                        errorList = e.failures; // No need to concat here. These are the first errors added.
                    }).then(function () {
                        // Now, let's examine which items didnt exist so we can add them:
                        var objsToAdd = [],
                            keysToAdd = keys$$1 && [];
                        // Iterate backwards. Why? Because if same key was used twice, just add the last one.
                        for (var i = effectiveKeys.length - 1; i >= 0; --i) {
                            var key = effectiveKeys[i];
                            if (key == null || objectLookup[key]) {
                                objsToAdd.push(objects[i]);
                                keys$$1 && keysToAdd.push(key);
                                if (key != null) objectLookup[key] = null; // Mark as "dont add again"
                            }
                        }
                        // The items are in reverse order so reverse them before adding.
                        // Could be important in order to get auto-incremented keys the way the caller
                        // would expect. Could have used unshift instead of push()/reverse(),
                        // but: http://jsperf.com/unshift-vs-reverse
                        objsToAdd.reverse();
                        keys$$1 && keysToAdd.reverse();
                        return table.bulkAdd(objsToAdd, keysToAdd);
                    }).then(function (lastAddedKey) {
                        // Resolve with key of the last object in given arguments to bulkPut():
                        var lastEffectiveKey = effectiveKeys[effectiveKeys.length - 1]; // Key was provided.
                        return lastEffectiveKey != null ? lastEffectiveKey : lastAddedKey;
                    });

                    promise.then(done).catch(BulkError, function (e) {
                        // Concat failure from ModifyError and reject using our 'done' method.
                        errorList = errorList.concat(e.failures);
                        done();
                    }).catch(reject);
                }
            }, "locked"); // If called from transaction scope, lock transaction til all steps are done.
        },
        bulkAdd: function (objects, keys$$1) {
            var self = this,
                creatingHook = this.hook.creating.fire;
            return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                if (!idbstore.keyPath && !self.schema.primKey.auto && !keys$$1) throw new exceptions.InvalidArgument("bulkAdd() with non-inbound keys requires keys array in second argument");
                if (idbstore.keyPath && keys$$1) throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                if (keys$$1 && keys$$1.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
                if (objects.length === 0) return resolve(); // Caller provided empty list.
                function done(result) {
                    if (errorList.length === 0) resolve(result);else reject(new BulkError(self.name + '.bulkAdd(): ' + errorList.length + ' of ' + numObjs + ' operations failed', errorList));
                }
                var req,
                    errorList = [],
                    errorHandler,
                    successHandler,
                    numObjs = objects.length;
                if (creatingHook !== nop) {
                    //
                    // There are subscribers to hook('creating')
                    // Must behave as documented.
                    //
                    var keyPath = idbstore.keyPath,
                        hookCtx;
                    errorHandler = BulkErrorHandlerCatchAll(errorList, null, true);
                    successHandler = hookedEventSuccessHandler(null);

                    tryCatch(function () {
                        for (var i = 0, l = objects.length; i < l; ++i) {
                            hookCtx = { onerror: null, onsuccess: null };
                            var key = keys$$1 && keys$$1[i];
                            var obj = objects[i],
                                effectiveKey = keys$$1 ? key : keyPath ? getByKeyPath(obj, keyPath) : undefined,
                                keyToUse = creatingHook.call(hookCtx, effectiveKey, obj, trans);
                            if (effectiveKey == null && keyToUse != null) {
                                if (keyPath) {
                                    obj = deepClone(obj);
                                    setByKeyPath(obj, keyPath, keyToUse);
                                } else {
                                    key = keyToUse;
                                }
                            }
                            req = key != null ? idbstore.add(obj, key) : idbstore.add(obj);
                            req._hookCtx = hookCtx;
                            if (i < l - 1) {
                                req.onerror = errorHandler;
                                if (hookCtx.onsuccess) req.onsuccess = successHandler;
                            }
                        }
                    }, function (err) {
                        hookCtx.onerror && hookCtx.onerror(err);
                        throw err;
                    });

                    req.onerror = BulkErrorHandlerCatchAll(errorList, done, true);
                    req.onsuccess = hookedEventSuccessHandler(done);
                } else {
                    //
                    // Standard Bulk (no 'creating' hook to care about)
                    //
                    errorHandler = BulkErrorHandlerCatchAll(errorList);
                    for (var i = 0, l = objects.length; i < l; ++i) {
                        req = keys$$1 ? idbstore.add(objects[i], keys$$1[i]) : idbstore.add(objects[i]);
                        req.onerror = errorHandler;
                    }
                    // Only need to catch success or error on the last operation
                    // according to the IDB spec.
                    req.onerror = BulkErrorHandlerCatchAll(errorList, done);
                    req.onsuccess = eventSuccessHandler(done);
                }
            });
        },
        add: function (obj, key) {
            /// <summary>
            ///   Add an object to the database. In case an object with same primary key already exists, the object will not be added.
            /// </summary>
            /// <param name="obj" type="Object">A javascript object to insert</param>
            /// <param name="key" optional="true">Primary key</param>
            var creatingHook = this.hook.creating.fire;
            return this._idbstore(READWRITE, function (resolve, reject, idbstore, trans) {
                var hookCtx = { onsuccess: null, onerror: null };
                if (creatingHook !== nop) {
                    var effectiveKey = key != null ? key : idbstore.keyPath ? getByKeyPath(obj, idbstore.keyPath) : undefined;
                    var keyToUse = creatingHook.call(hookCtx, effectiveKey, obj, trans); // Allow subscribers to when("creating") to generate the key.
                    if (effectiveKey == null && keyToUse != null) {
                        // Using "==" and "!=" to check for either null or undefined!
                        if (idbstore.keyPath) setByKeyPath(obj, idbstore.keyPath, keyToUse);else key = keyToUse;
                    }
                }
                try {
                    var req = key != null ? idbstore.add(obj, key) : idbstore.add(obj);
                    req._hookCtx = hookCtx;
                    req.onerror = hookedEventRejectHandler(reject);
                    req.onsuccess = hookedEventSuccessHandler(function (result) {
                        // TODO: Remove these two lines in next major release (2.0?)
                        // It's no good practice to have side effects on provided parameters
                        var keyPath = idbstore.keyPath;
                        if (keyPath) setByKeyPath(obj, keyPath, result);
                        resolve(result);
                    });
                } catch (e) {
                    if (hookCtx.onerror) hookCtx.onerror(e);
                    throw e;
                }
            });
        },

        put: function (obj, key) {
            /// <summary>
            ///   Add an object to the database but in case an object with same primary key alread exists, the existing one will get updated.
            /// </summary>
            /// <param name="obj" type="Object">A javascript object to insert or update</param>
            /// <param name="key" optional="true">Primary key</param>
            var self = this,
                creatingHook = this.hook.creating.fire,
                updatingHook = this.hook.updating.fire;
            if (creatingHook !== nop || updatingHook !== nop) {
                //
                // People listens to when("creating") or when("updating") events!
                // We must know whether the put operation results in an CREATE or UPDATE.
                //
                return this._trans(READWRITE, function (resolve, reject, trans) {
                    // Since key is optional, make sure we get it from obj if not provided
                    var effectiveKey = key !== undefined ? key : self.schema.primKey.keyPath && getByKeyPath(obj, self.schema.primKey.keyPath);
                    if (effectiveKey == null) {
                        // "== null" means checking for either null or undefined.
                        // No primary key. Must use add().
                        self.add(obj).then(resolve, reject);
                    } else {
                        // Primary key exist. Lock transaction and try modifying existing. If nothing modified, call add().
                        trans._lock(); // Needed because operation is splitted into modify() and add().
                        // clone obj before this async call. If caller modifies obj the line after put(), the IDB spec requires that it should not affect operation.
                        obj = deepClone(obj);
                        self.where(":id").equals(effectiveKey).modify(function () {
                            // Replace extisting value with our object
                            // CRUD event firing handled in WriteableCollection.modify()
                            this.value = obj;
                        }).then(function (count) {
                            if (count === 0) {
                                // Object's key was not found. Add the object instead.
                                // CRUD event firing will be done in add()
                                return self.add(obj, key); // Resolving with another Promise. Returned Promise will then resolve with the new key.
                            } else {
                                return effectiveKey; // Resolve with the provided key.
                            }
                        }).finally(function () {
                            trans._unlock();
                        }).then(resolve, reject);
                    }
                });
            } else {
                // Use the standard IDB put() method.
                return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                    var req = key !== undefined ? idbstore.put(obj, key) : idbstore.put(obj);
                    req.onerror = eventRejectHandler(reject);
                    req.onsuccess = function (ev) {
                        var keyPath = idbstore.keyPath;
                        if (keyPath) setByKeyPath(obj, keyPath, ev.target.result);
                        resolve(req.result);
                    };
                });
            }
        },

        'delete': function (key) {
            /// <param name="key">Primary key of the object to delete</param>
            if (this.hook.deleting.subscribers.length) {
                // People listens to when("deleting") event. Must implement delete using WriteableCollection.delete() that will
                // call the CRUD event. Only WriteableCollection.delete() will know whether an object was actually deleted.
                return this.where(":id").equals(key).delete();
            } else {
                // No one listens. Use standard IDB delete() method.
                return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                    var req = idbstore.delete(key);
                    req.onerror = eventRejectHandler(reject);
                    req.onsuccess = function () {
                        resolve(req.result);
                    };
                });
            }
        },

        clear: function () {
            if (this.hook.deleting.subscribers.length) {
                // People listens to when("deleting") event. Must implement delete using WriteableCollection.delete() that will
                // call the CRUD event. Only WriteableCollection.delete() will knows which objects that are actually deleted.
                return this.toCollection().delete();
            } else {
                return this._idbstore(READWRITE, function (resolve, reject, idbstore) {
                    var req = idbstore.clear();
                    req.onerror = eventRejectHandler(reject);
                    req.onsuccess = function () {
                        resolve(req.result);
                    };
                });
            }
        },

        update: function (keyOrObject, modifications) {
            if (typeof modifications !== 'object' || isArray(modifications)) throw new exceptions.InvalidArgument("Modifications must be an object.");
            if (typeof keyOrObject === 'object' && !isArray(keyOrObject)) {
                // object to modify. Also modify given object with the modifications:
                keys(modifications).forEach(function (keyPath) {
                    setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
                });
                var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
                if (key === undefined) return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"), dbUncaught);
                return this.where(":id").equals(key).modify(modifications);
            } else {
                // key to modify
                return this.where(":id").equals(keyOrObject).modify(modifications);
            }
        }
    });

    //
    //
    //
    // Transaction Class
    //
    //
    //
    function Transaction(mode, storeNames, dbschema, parent) {
        var _this2 = this;

        /// <summary>
        ///    Transaction class. Represents a database transaction. All operations on db goes through a Transaction.
        /// </summary>
        /// <param name="mode" type="String">Any of "readwrite" or "readonly"</param>
        /// <param name="storeNames" type="Array">Array of table names to operate on</param>
        this.db = db;
        this.mode = mode;
        this.storeNames = storeNames;
        this.idbtrans = null;
        this.on = Events(this, "complete", "error", "abort");
        this.parent = parent || null;
        this.active = true;
        this._tables = null;
        this._reculock = 0;
        this._blockedFuncs = [];
        this._psd = null;
        this._dbschema = dbschema;
        this._resolve = null;
        this._reject = null;
        this._completion = new Promise(function (resolve, reject) {
            _this2._resolve = resolve;
            _this2._reject = reject;
        }).uncaught(dbUncaught);

        this._completion.then(function () {
            _this2.on.complete.fire();
        }, function (e) {
            _this2.on.error.fire(e);
            _this2.parent ? _this2.parent._reject(e) : _this2.active && _this2.idbtrans && _this2.idbtrans.abort();
            _this2.active = false;
            return rejection(e); // Indicate we actually DO NOT catch this error.
        });
    }

    props(Transaction.prototype, {
        //
        // Transaction Protected Methods (not required by API users, but needed internally and eventually by dexie extensions)
        //
        _lock: function () {
            assert(!PSD.global); // Locking and unlocking reuires to be within a PSD scope.
            // Temporary set all requests into a pending queue if they are called before database is ready.
            ++this._reculock; // Recursive read/write lock pattern using PSD (Promise Specific Data) instead of TLS (Thread Local Storage)
            if (this._reculock === 1 && !PSD.global) PSD.lockOwnerFor = this;
            return this;
        },
        _unlock: function () {
            assert(!PSD.global); // Locking and unlocking reuires to be within a PSD scope.
            if (--this._reculock === 0) {
                if (!PSD.global) PSD.lockOwnerFor = null;
                while (this._blockedFuncs.length > 0 && !this._locked()) {
                    var fnAndPSD = this._blockedFuncs.shift();
                    try {
                        usePSD(fnAndPSD[1], fnAndPSD[0]);
                    } catch (e) {}
                }
            }
            return this;
        },
        _locked: function () {
            // Checks if any write-lock is applied on this transaction.
            // To simplify the Dexie API for extension implementations, we support recursive locks.
            // This is accomplished by using "Promise Specific Data" (PSD).
            // PSD data is bound to a Promise and any child Promise emitted through then() or resolve( new Promise() ).
            // PSD is local to code executing on top of the call stacks of any of any code executed by Promise():
            //         * callback given to the Promise() constructor  (function (resolve, reject){...})
            //         * callbacks given to then()/catch()/finally() methods (function (value){...})
            // If creating a new independant Promise instance from within a Promise call stack, the new Promise will derive the PSD from the call stack of the parent Promise.
            // Derivation is done so that the inner PSD __proto__ points to the outer PSD.
            // PSD.lockOwnerFor will point to current transaction object if the currently executing PSD scope owns the lock.
            return this._reculock && PSD.lockOwnerFor !== this;
        },
        create: function (idbtrans) {
            var _this3 = this;

            assert(!this.idbtrans);
            if (!idbtrans && !idbdb) {
                switch (dbOpenError && dbOpenError.name) {
                    case "DatabaseClosedError":
                        // Errors where it is no difference whether it was caused by the user operation or an earlier call to db.open()
                        throw new exceptions.DatabaseClosed(dbOpenError);
                    case "MissingAPIError":
                        // Errors where it is no difference whether it was caused by the user operation or an earlier call to db.open()
                        throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
                    default:
                        // Make it clear that the user operation was not what caused the error - the error had occurred earlier on db.open()!
                        throw new exceptions.OpenFailed(dbOpenError);
                }
            }
            if (!this.active) throw new exceptions.TransactionInactive();
            assert(this._completion._state === null);

            idbtrans = this.idbtrans = idbtrans || idbdb.transaction(safariMultiStoreFix(this.storeNames), this.mode);
            idbtrans.onerror = wrap(function (ev) {
                preventDefault(ev); // Prohibit default bubbling to window.error
                _this3._reject(idbtrans.error);
            });
            idbtrans.onabort = wrap(function (ev) {
                preventDefault(ev);
                _this3.active && _this3._reject(new exceptions.Abort());
                _this3.active = false;
                _this3.on("abort").fire(ev);
            });
            idbtrans.oncomplete = wrap(function () {
                _this3.active = false;
                _this3._resolve();
            });
            return this;
        },
        _promise: function (mode, fn, bWriteLock) {
            var self = this;
            var p = self._locked() ?
            // Read lock always. Transaction is write-locked. Wait for mutex.
            new Promise(function (resolve, reject) {
                self._blockedFuncs.push([function () {
                    self._promise(mode, fn, bWriteLock).then(resolve, reject);
                }, PSD]);
            }) : newScope(function () {
                var p_ = self.active ? new Promise(function (resolve, reject) {
                    if (mode === READWRITE && self.mode !== READWRITE) throw new exceptions.ReadOnly("Transaction is readonly");
                    if (!self.idbtrans && mode) self.create();
                    if (bWriteLock) self._lock(); // Write lock if write operation is requested
                    fn(resolve, reject, self);
                }) : rejection(new exceptions.TransactionInactive());
                if (self.active && bWriteLock) p_.finally(function () {
                    self._unlock();
                });
                return p_;
            });

            p._lib = true;
            return p.uncaught(dbUncaught);
        },

        //
        // Transaction Public Properties and Methods
        //
        abort: function () {
            this.active && this._reject(new exceptions.Abort());
            this.active = false;
        },

        tables: {
            get: deprecated("Transaction.tables", function () {
                return arrayToObject(this.storeNames, function (name) {
                    return [name, allTables[name]];
                });
            }, "Use db.tables()")
        },

        complete: deprecated("Transaction.complete()", function (cb) {
            return this.on("complete", cb);
        }),

        error: deprecated("Transaction.error()", function (cb) {
            return this.on("error", cb);
        }),

        table: deprecated("Transaction.table()", function (name) {
            if (this.storeNames.indexOf(name) === -1) throw new exceptions.InvalidTable("Table " + name + " not in transaction");
            return allTables[name];
        })

    });

    //
    //
    //
    // WhereClause
    //
    //
    //
    function WhereClause(table, index, orCollection) {
        /// <param name="table" type="Table"></param>
        /// <param name="index" type="String" optional="true"></param>
        /// <param name="orCollection" type="Collection" optional="true"></param>
        this._ctx = {
            table: table,
            index: index === ":id" ? null : index,
            collClass: table._collClass,
            or: orCollection
        };
    }

    props(WhereClause.prototype, function () {

        // WhereClause private methods

        function fail(collectionOrWhereClause, err, T) {
            var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause._ctx.collClass(collectionOrWhereClause) : collectionOrWhereClause;

            collection._ctx.error = T ? new T(err) : new TypeError(err);
            return collection;
        }

        function emptyCollection(whereClause) {
            return new whereClause._ctx.collClass(whereClause, function () {
                return IDBKeyRange.only("");
            }).limit(0);
        }

        function upperFactory(dir) {
            return dir === "next" ? function (s) {
                return s.toUpperCase();
            } : function (s) {
                return s.toLowerCase();
            };
        }
        function lowerFactory(dir) {
            return dir === "next" ? function (s) {
                return s.toLowerCase();
            } : function (s) {
                return s.toUpperCase();
            };
        }
        function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
            var length = Math.min(key.length, lowerNeedle.length);
            var llp = -1;
            for (var i = 0; i < length; ++i) {
                var lwrKeyChar = lowerKey[i];
                if (lwrKeyChar !== lowerNeedle[i]) {
                    if (cmp(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
                    if (cmp(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
                    if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
                    return null;
                }
                if (cmp(key[i], lwrKeyChar) < 0) llp = i;
            }
            if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
            if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
            return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
        }

        function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
            /// <param name="needles" type="Array" elementType="String"></param>
            var upper,
                lower,
                compare,
                upperNeedles,
                lowerNeedles,
                direction,
                nextKeySuffix,
                needlesLen = needles.length;
            if (!needles.every(function (s) {
                return typeof s === 'string';
            })) {
                return fail(whereClause, STRING_EXPECTED);
            }
            function initDirection(dir) {
                upper = upperFactory(dir);
                lower = lowerFactory(dir);
                compare = dir === "next" ? simpleCompare : simpleCompareReverse;
                var needleBounds = needles.map(function (needle) {
                    return { lower: lower(needle), upper: upper(needle) };
                }).sort(function (a, b) {
                    return compare(a.lower, b.lower);
                });
                upperNeedles = needleBounds.map(function (nb) {
                    return nb.upper;
                });
                lowerNeedles = needleBounds.map(function (nb) {
                    return nb.lower;
                });
                direction = dir;
                nextKeySuffix = dir === "next" ? "" : suffix;
            }
            initDirection("next");

            var c = new whereClause._ctx.collClass(whereClause, function () {
                return IDBKeyRange.bound(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
            });

            c._ondirectionchange = function (direction) {
                // This event onlys occur before filter is called the first time.
                initDirection(direction);
            };

            var firstPossibleNeedle = 0;

            c._addAlgorithm(function (cursor, advance, resolve) {
                /// <param name="cursor" type="IDBCursor"></param>
                /// <param name="advance" type="Function"></param>
                /// <param name="resolve" type="Function"></param>
                var key = cursor.key;
                if (typeof key !== 'string') return false;
                var lowerKey = lower(key);
                if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
                    return true;
                } else {
                    var lowestPossibleCasing = null;
                    for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
                        var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
                        if (casing === null && lowestPossibleCasing === null) firstPossibleNeedle = i + 1;else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
                            lowestPossibleCasing = casing;
                        }
                    }
                    if (lowestPossibleCasing !== null) {
                        advance(function () {
                            cursor.continue(lowestPossibleCasing + nextKeySuffix);
                        });
                    } else {
                        advance(resolve);
                    }
                    return false;
                }
            });
            return c;
        }

        //
        // WhereClause public methods
        //
        return {
            between: function (lower, upper, includeLower, includeUpper) {
                /// <summary>
                ///     Filter out records whose where-field lays between given lower and upper values. Applies to Strings, Numbers and Dates.
                /// </summary>
                /// <param name="lower"></param>
                /// <param name="upper"></param>
                /// <param name="includeLower" optional="true">Whether items that equals lower should be included. Default true.</param>
                /// <param name="includeUpper" optional="true">Whether items that equals upper should be included. Default false.</param>
                /// <returns type="Collection"></returns>
                includeLower = includeLower !== false; // Default to true
                includeUpper = includeUpper === true; // Default to false
                try {
                    if (cmp(lower, upper) > 0 || cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)) return emptyCollection(this); // Workaround for idiotic W3C Specification that DataError must be thrown if lower > upper. The natural result would be to return an empty collection.
                    return new this._ctx.collClass(this, function () {
                        return IDBKeyRange.bound(lower, upper, !includeLower, !includeUpper);
                    });
                } catch (e) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
            },
            equals: function (value) {
                return new this._ctx.collClass(this, function () {
                    return IDBKeyRange.only(value);
                });
            },
            above: function (value) {
                return new this._ctx.collClass(this, function () {
                    return IDBKeyRange.lowerBound(value, true);
                });
            },
            aboveOrEqual: function (value) {
                return new this._ctx.collClass(this, function () {
                    return IDBKeyRange.lowerBound(value);
                });
            },
            below: function (value) {
                return new this._ctx.collClass(this, function () {
                    return IDBKeyRange.upperBound(value, true);
                });
            },
            belowOrEqual: function (value) {
                return new this._ctx.collClass(this, function () {
                    return IDBKeyRange.upperBound(value);
                });
            },
            startsWith: function (str) {
                /// <param name="str" type="String"></param>
                if (typeof str !== 'string') return fail(this, STRING_EXPECTED);
                return this.between(str, str + maxString, true, true);
            },
            startsWithIgnoreCase: function (str) {
                /// <param name="str" type="String"></param>
                if (str === "") return this.startsWith(str);
                return addIgnoreCaseAlgorithm(this, function (x, a) {
                    return x.indexOf(a[0]) === 0;
                }, [str], maxString);
            },
            equalsIgnoreCase: function (str) {
                /// <param name="str" type="String"></param>
                return addIgnoreCaseAlgorithm(this, function (x, a) {
                    return x === a[0];
                }, [str], "");
            },
            anyOfIgnoreCase: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (set.length === 0) return emptyCollection(this);
                return addIgnoreCaseAlgorithm(this, function (x, a) {
                    return a.indexOf(x) !== -1;
                }, set, "");
            },
            startsWithAnyOfIgnoreCase: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (set.length === 0) return emptyCollection(this);
                return addIgnoreCaseAlgorithm(this, function (x, a) {
                    return a.some(function (n) {
                        return x.indexOf(n) === 0;
                    });
                }, set, maxString);
            },
            anyOf: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                var compare = ascending;
                try {
                    set.sort(compare);
                } catch (e) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
                if (set.length === 0) return emptyCollection(this);
                var c = new this._ctx.collClass(this, function () {
                    return IDBKeyRange.bound(set[0], set[set.length - 1]);
                });

                c._ondirectionchange = function (direction) {
                    compare = direction === "next" ? ascending : descending;
                    set.sort(compare);
                };
                var i = 0;
                c._addAlgorithm(function (cursor, advance, resolve) {
                    var key = cursor.key;
                    while (compare(key, set[i]) > 0) {
                        // The cursor has passed beyond this key. Check next.
                        ++i;
                        if (i === set.length) {
                            // There is no next. Stop searching.
                            advance(resolve);
                            return false;
                        }
                    }
                    if (compare(key, set[i]) === 0) {
                        // The current cursor value should be included and we should continue a single step in case next item has the same key or possibly our next key in set.
                        return true;
                    } else {
                        // cursor.key not yet at set[i]. Forward cursor to the next key to hunt for.
                        advance(function () {
                            cursor.continue(set[i]);
                        });
                        return false;
                    }
                });
                return c;
            },

            notEqual: function (value) {
                return this.inAnyRange([[-Infinity, value], [value, maxKey]], { includeLowers: false, includeUppers: false });
            },

            noneOf: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
                if (set.length === 0) return new this._ctx.collClass(this); // Return entire collection.
                try {
                    set.sort(ascending);
                } catch (e) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }
                // Transform ["a","b","c"] to a set of ranges for between/above/below: [[-Infinity,"a"], ["a","b"], ["b","c"], ["c",maxKey]]
                var ranges = set.reduce(function (res, val) {
                    return res ? res.concat([[res[res.length - 1][1], val]]) : [[-Infinity, val]];
                }, null);
                ranges.push([set[set.length - 1], maxKey]);
                return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
            },

            /** Filter out values withing given set of ranges.
            * Example, give children and elders a rebate of 50%:
            *
            *   db.friends.where('age').inAnyRange([[0,18],[65,Infinity]]).modify({Rebate: 1/2});
            *
            * @param {(string|number|Date|Array)[][]} ranges
            * @param {{includeLowers: boolean, includeUppers: boolean}} options
            */
            inAnyRange: function (ranges, options) {
                var ctx = this._ctx;
                if (ranges.length === 0) return emptyCollection(this);
                if (!ranges.every(function (range) {
                    return range[0] !== undefined && range[1] !== undefined && ascending(range[0], range[1]) <= 0;
                })) {
                    return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
                }
                var includeLowers = !options || options.includeLowers !== false; // Default to true
                var includeUppers = options && options.includeUppers === true; // Default to false

                function addRange(ranges, newRange) {
                    for (var i = 0, l = ranges.length; i < l; ++i) {
                        var range = ranges[i];
                        if (cmp(newRange[0], range[1]) < 0 && cmp(newRange[1], range[0]) > 0) {
                            range[0] = min(range[0], newRange[0]);
                            range[1] = max(range[1], newRange[1]);
                            break;
                        }
                    }
                    if (i === l) ranges.push(newRange);
                    return ranges;
                }

                var sortDirection = ascending;
                function rangeSorter(a, b) {
                    return sortDirection(a[0], b[0]);
                }

                // Join overlapping ranges
                var set;
                try {
                    set = ranges.reduce(addRange, []);
                    set.sort(rangeSorter);
                } catch (ex) {
                    return fail(this, INVALID_KEY_ARGUMENT);
                }

                var i = 0;
                var keyIsBeyondCurrentEntry = includeUppers ? function (key) {
                    return ascending(key, set[i][1]) > 0;
                } : function (key) {
                    return ascending(key, set[i][1]) >= 0;
                };

                var keyIsBeforeCurrentEntry = includeLowers ? function (key) {
                    return descending(key, set[i][0]) > 0;
                } : function (key) {
                    return descending(key, set[i][0]) >= 0;
                };

                function keyWithinCurrentRange(key) {
                    return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
                }

                var checkKey = keyIsBeyondCurrentEntry;

                var c = new ctx.collClass(this, function () {
                    return IDBKeyRange.bound(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
                });

                c._ondirectionchange = function (direction) {
                    if (direction === "next") {
                        checkKey = keyIsBeyondCurrentEntry;
                        sortDirection = ascending;
                    } else {
                        checkKey = keyIsBeforeCurrentEntry;
                        sortDirection = descending;
                    }
                    set.sort(rangeSorter);
                };

                c._addAlgorithm(function (cursor, advance, resolve) {
                    var key = cursor.key;
                    while (checkKey(key)) {
                        // The cursor has passed beyond this key. Check next.
                        ++i;
                        if (i === set.length) {
                            // There is no next. Stop searching.
                            advance(resolve);
                            return false;
                        }
                    }
                    if (keyWithinCurrentRange(key)) {
                        // The current cursor value should be included and we should continue a single step in case next item has the same key or possibly our next key in set.
                        return true;
                    } else if (cmp(key, set[i][1]) === 0 || cmp(key, set[i][0]) === 0) {
                        // includeUpper or includeLower is false so keyWithinCurrentRange() returns false even though we are at range border.
                        // Continue to next key but don't include this one.
                        return false;
                    } else {
                        // cursor.key not yet at set[i]. Forward cursor to the next key to hunt for.
                        advance(function () {
                            if (sortDirection === ascending) cursor.continue(set[i][0]);else cursor.continue(set[i][1]);
                        });
                        return false;
                    }
                });
                return c;
            },
            startsWithAnyOf: function () {
                var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);

                if (!set.every(function (s) {
                    return typeof s === 'string';
                })) {
                    return fail(this, "startsWithAnyOf() only works with strings");
                }
                if (set.length === 0) return emptyCollection(this);

                return this.inAnyRange(set.map(function (str) {
                    return [str, str + maxString];
                }));
            }
        };
    });

    //
    //
    //
    // Collection Class
    //
    //
    //
    function Collection(whereClause, keyRangeGenerator) {
        /// <summary>
        ///
        /// </summary>
        /// <param name="whereClause" type="WhereClause">Where clause instance</param>
        /// <param name="keyRangeGenerator" value="function(){ return IDBKeyRange.bound(0,1);}" optional="true"></param>
        var keyRange = null,
            error = null;
        if (keyRangeGenerator) try {
            keyRange = keyRangeGenerator();
        } catch (ex) {
            error = ex;
        }

        var whereCtx = whereClause._ctx,
            table = whereCtx.table;
        this._ctx = {
            table: table,
            index: whereCtx.index,
            isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
            range: keyRange,
            keysOnly: false,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: true, // True if a replayFilter is just a filter that performs a "limit" operation (or none at all)
            isMatch: null,
            offset: 0,
            limit: Infinity,
            error: error, // If set, any promise must be rejected with this error
            or: whereCtx.or,
            valueMapper: table.hook.reading.fire
        };
    }

    function isPlainKeyRange(ctx, ignoreLimitFilter) {
        return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
    }

    props(Collection.prototype, function () {

        //
        // Collection Private Functions
        //

        function addFilter(ctx, fn) {
            ctx.filter = combine(ctx.filter, fn);
        }

        function addReplayFilter(ctx, factory, isLimitFilter) {
            var curr = ctx.replayFilter;
            ctx.replayFilter = curr ? function () {
                return combine(curr(), factory());
            } : factory;
            ctx.justLimit = isLimitFilter && !curr;
        }

        function addMatchFilter(ctx, fn) {
            ctx.isMatch = combine(ctx.isMatch, fn);
        }

        /** @param ctx {
         *      isPrimKey: boolean,
         *      table: Table,
         *      index: string
         * }
         * @param store IDBObjectStore
         **/
        function getIndexOrStore(ctx, store) {
            if (ctx.isPrimKey) return store;
            var indexSpec = ctx.table.schema.idxByName[ctx.index];
            if (!indexSpec) throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + store.name + " is not indexed");
            return store.index(indexSpec.name);
        }

        /** @param ctx {
         *      isPrimKey: boolean,
         *      table: Table,
         *      index: string,
         *      keysOnly: boolean,
         *      range?: IDBKeyRange,
         *      dir: "next" | "prev"
         * }
         */
        function openCursor(ctx, store) {
            var idxOrStore = getIndexOrStore(ctx, store);
            return ctx.keysOnly && 'openKeyCursor' in idxOrStore ? idxOrStore.openKeyCursor(ctx.range || null, ctx.dir + ctx.unique) : idxOrStore.openCursor(ctx.range || null, ctx.dir + ctx.unique);
        }

        function iter(ctx, fn, resolve, reject, idbstore) {
            var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
            if (!ctx.or) {
                iterate(openCursor(ctx, idbstore), combine(ctx.algorithm, filter), fn, resolve, reject, !ctx.keysOnly && ctx.valueMapper);
            } else (function () {
                var set = {};
                var resolved = 0;

                function resolveboth() {
                    if (++resolved === 2) resolve(); // Seems like we just support or btwn max 2 expressions, but there are no limit because we do recursion.
                }

                function union(item, cursor, advance) {
                    if (!filter || filter(cursor, advance, resolveboth, reject)) {
                        var key = cursor.primaryKey.toString(); // Converts any Date to String, String to String, Number to String and Array to comma-separated string
                        if (!hasOwn(set, key)) {
                            set[key] = true;
                            fn(item, cursor, advance);
                        }
                    }
                }

                ctx.or._iterate(union, resolveboth, reject, idbstore);
                iterate(openCursor(ctx, idbstore), ctx.algorithm, union, resolveboth, reject, !ctx.keysOnly && ctx.valueMapper);
            })();
        }
        function getInstanceTemplate(ctx) {
            return ctx.table.schema.instanceTemplate;
        }

        return {

            //
            // Collection Protected Functions
            //

            _read: function (fn, cb) {
                var ctx = this._ctx;
                if (ctx.error) return ctx.table._trans(null, function rejector(resolve, reject) {
                    reject(ctx.error);
                });else return ctx.table._idbstore(READONLY, fn).then(cb);
            },
            _write: function (fn) {
                var ctx = this._ctx;
                if (ctx.error) return ctx.table._trans(null, function rejector(resolve, reject) {
                    reject(ctx.error);
                });else return ctx.table._idbstore(READWRITE, fn, "locked"); // When doing write operations on collections, always lock the operation so that upcoming operations gets queued.
            },
            _addAlgorithm: function (fn) {
                var ctx = this._ctx;
                ctx.algorithm = combine(ctx.algorithm, fn);
            },

            _iterate: function (fn, resolve, reject, idbstore) {
                return iter(this._ctx, fn, resolve, reject, idbstore);
            },

            clone: function (props$$1) {
                var rv = Object.create(this.constructor.prototype),
                    ctx = Object.create(this._ctx);
                if (props$$1) extend(ctx, props$$1);
                rv._ctx = ctx;
                return rv;
            },

            raw: function () {
                this._ctx.valueMapper = null;
                return this;
            },

            //
            // Collection Public methods
            //

            each: function (fn) {
                var ctx = this._ctx;

                if (fake) {
                    var item = getInstanceTemplate(ctx),
                        primKeyPath = ctx.table.schema.primKey.keyPath,
                        key = getByKeyPath(item, ctx.index ? ctx.table.schema.idxByName[ctx.index].keyPath : primKeyPath),
                        primaryKey = getByKeyPath(item, primKeyPath);
                    fn(item, { key: key, primaryKey: primaryKey });
                }

                return this._read(function (resolve, reject, idbstore) {
                    iter(ctx, fn, resolve, reject, idbstore);
                });
            },

            count: function (cb) {
                if (fake) return Promise.resolve(0).then(cb);
                var ctx = this._ctx;

                if (isPlainKeyRange(ctx, true)) {
                    // This is a plain key range. We can use the count() method if the index.
                    return this._read(function (resolve, reject, idbstore) {
                        var idx = getIndexOrStore(ctx, idbstore);
                        var req = ctx.range ? idx.count(ctx.range) : idx.count();
                        req.onerror = eventRejectHandler(reject);
                        req.onsuccess = function (e) {
                            resolve(Math.min(e.target.result, ctx.limit));
                        };
                    }, cb);
                } else {
                    // Algorithms, filters or expressions are applied. Need to count manually.
                    var count = 0;
                    return this._read(function (resolve, reject, idbstore) {
                        iter(ctx, function () {
                            ++count;return false;
                        }, function () {
                            resolve(count);
                        }, reject, idbstore);
                    }, cb);
                }
            },

            sortBy: function (keyPath, cb) {
                /// <param name="keyPath" type="String"></param>
                var parts = keyPath.split('.').reverse(),
                    lastPart = parts[0],
                    lastIndex = parts.length - 1;
                function getval(obj, i) {
                    if (i) return getval(obj[parts[i]], i - 1);
                    return obj[lastPart];
                }
                var order = this._ctx.dir === "next" ? 1 : -1;

                function sorter(a, b) {
                    var aVal = getval(a, lastIndex),
                        bVal = getval(b, lastIndex);
                    return aVal < bVal ? -order : aVal > bVal ? order : 0;
                }
                return this.toArray(function (a) {
                    return a.sort(sorter);
                }).then(cb);
            },

            toArray: function (cb) {
                var ctx = this._ctx;
                return this._read(function (resolve, reject, idbstore) {
                    fake && resolve([getInstanceTemplate(ctx)]);
                    if (hasGetAll && ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                        // Special optimation if we could use IDBObjectStore.getAll() or
                        // IDBKeyRange.getAll():
                        var readingHook = ctx.table.hook.reading.fire;
                        var idxOrStore = getIndexOrStore(ctx, idbstore);
                        var req = ctx.limit < Infinity ? idxOrStore.getAll(ctx.range, ctx.limit) : idxOrStore.getAll(ctx.range);
                        req.onerror = eventRejectHandler(reject);
                        req.onsuccess = readingHook === mirror ? eventSuccessHandler(resolve) : wrap(eventSuccessHandler(function (res) {
                            try {
                                resolve(res.map(readingHook));
                            } catch (e) {
                                reject(e);
                            }
                        }));
                    } else {
                        // Getting array through a cursor.
                        var a = [];
                        iter(ctx, function (item) {
                            a.push(item);
                        }, function arrayComplete() {
                            resolve(a);
                        }, reject, idbstore);
                    }
                }, cb);
            },

            offset: function (offset) {
                var ctx = this._ctx;
                if (offset <= 0) return this;
                ctx.offset += offset; // For count()
                if (isPlainKeyRange(ctx)) {
                    addReplayFilter(ctx, function () {
                        var offsetLeft = offset;
                        return function (cursor, advance) {
                            if (offsetLeft === 0) return true;
                            if (offsetLeft === 1) {
                                --offsetLeft;return false;
                            }
                            advance(function () {
                                cursor.advance(offsetLeft);
                                offsetLeft = 0;
                            });
                            return false;
                        };
                    });
                } else {
                    addReplayFilter(ctx, function () {
                        var offsetLeft = offset;
                        return function () {
                            return --offsetLeft < 0;
                        };
                    });
                }
                return this;
            },

            limit: function (numRows) {
                this._ctx.limit = Math.min(this._ctx.limit, numRows); // For count()
                addReplayFilter(this._ctx, function () {
                    var rowsLeft = numRows;
                    return function (cursor, advance, resolve) {
                        if (--rowsLeft <= 0) advance(resolve); // Stop after this item has been included
                        return rowsLeft >= 0; // If numRows is already below 0, return false because then 0 was passed to numRows initially. Otherwise we wouldnt come here.
                    };
                }, true);
                return this;
            },

            until: function (filterFunction, bIncludeStopEntry) {
                var ctx = this._ctx;
                fake && filterFunction(getInstanceTemplate(ctx));
                addFilter(this._ctx, function (cursor, advance, resolve) {
                    if (filterFunction(cursor.value)) {
                        advance(resolve);
                        return bIncludeStopEntry;
                    } else {
                        return true;
                    }
                });
                return this;
            },

            first: function (cb) {
                return this.limit(1).toArray(function (a) {
                    return a[0];
                }).then(cb);
            },

            last: function (cb) {
                return this.reverse().first(cb);
            },

            filter: function (filterFunction) {
                /// <param name="jsFunctionFilter" type="Function">function(val){return true/false}</param>
                fake && filterFunction(getInstanceTemplate(this._ctx));
                addFilter(this._ctx, function (cursor) {
                    return filterFunction(cursor.value);
                });
                // match filters not used in Dexie.js but can be used by 3rd part libraries to test a
                // collection for a match without querying DB. Used by Dexie.Observable.
                addMatchFilter(this._ctx, filterFunction);
                return this;
            },

            and: function (filterFunction) {
                return this.filter(filterFunction);
            },

            or: function (indexName) {
                return new WhereClause(this._ctx.table, indexName, this);
            },

            reverse: function () {
                this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
                if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
                return this;
            },

            desc: function () {
                return this.reverse();
            },

            eachKey: function (cb) {
                var ctx = this._ctx;
                ctx.keysOnly = !ctx.isMatch;
                return this.each(function (val, cursor) {
                    cb(cursor.key, cursor);
                });
            },

            eachUniqueKey: function (cb) {
                this._ctx.unique = "unique";
                return this.eachKey(cb);
            },

            eachPrimaryKey: function (cb) {
                var ctx = this._ctx;
                ctx.keysOnly = !ctx.isMatch;
                return this.each(function (val, cursor) {
                    cb(cursor.primaryKey, cursor);
                });
            },

            keys: function (cb) {
                var ctx = this._ctx;
                ctx.keysOnly = !ctx.isMatch;
                var a = [];
                return this.each(function (item, cursor) {
                    a.push(cursor.key);
                }).then(function () {
                    return a;
                }).then(cb);
            },

            primaryKeys: function (cb) {
                var ctx = this._ctx;
                if (hasGetAll && ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                    // Special optimation if we could use IDBObjectStore.getAllKeys() or
                    // IDBKeyRange.getAllKeys():
                    return this._read(function (resolve, reject, idbstore) {
                        var idxOrStore = getIndexOrStore(ctx, idbstore);
                        var req = ctx.limit < Infinity ? idxOrStore.getAllKeys(ctx.range, ctx.limit) : idxOrStore.getAllKeys(ctx.range);
                        req.onerror = eventRejectHandler(reject);
                        req.onsuccess = eventSuccessHandler(resolve);
                    }).then(cb);
                }
                ctx.keysOnly = !ctx.isMatch;
                var a = [];
                return this.each(function (item, cursor) {
                    a.push(cursor.primaryKey);
                }).then(function () {
                    return a;
                }).then(cb);
            },

            uniqueKeys: function (cb) {
                this._ctx.unique = "unique";
                return this.keys(cb);
            },

            firstKey: function (cb) {
                return this.limit(1).keys(function (a) {
                    return a[0];
                }).then(cb);
            },

            lastKey: function (cb) {
                return this.reverse().firstKey(cb);
            },

            distinct: function () {
                var ctx = this._ctx,
                    idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
                if (!idx || !idx.multi) return this; // distinct() only makes differencies on multiEntry indexes.
                var set = {};
                addFilter(this._ctx, function (cursor) {
                    var strKey = cursor.primaryKey.toString(); // Converts any Date to String, String to String, Number to String and Array to comma-separated string
                    var found = hasOwn(set, strKey);
                    set[strKey] = true;
                    return !found;
                });
                return this;
            }
        };
    });

    //
    //
    // WriteableCollection Class
    //
    //
    function WriteableCollection() {
        Collection.apply(this, arguments);
    }

    derive(WriteableCollection).from(Collection).extend({

        //
        // WriteableCollection Public Methods
        //

        modify: function (changes) {
            var self = this,
                ctx = this._ctx,
                hook = ctx.table.hook,
                updatingHook = hook.updating.fire,
                deletingHook = hook.deleting.fire;

            fake && typeof changes === 'function' && changes.call({ value: ctx.table.schema.instanceTemplate }, ctx.table.schema.instanceTemplate);

            return this._write(function (resolve, reject, idbstore, trans) {
                var modifyer;
                if (typeof changes === 'function') {
                    // Changes is a function that may update, add or delete propterties or even require a deletion the object itself (delete this.item)
                    if (updatingHook === nop && deletingHook === nop) {
                        // Noone cares about what is being changed. Just let the modifier function be the given argument as is.
                        modifyer = changes;
                    } else {
                        // People want to know exactly what is being modified or deleted.
                        // Let modifyer be a proxy function that finds out what changes the caller is actually doing
                        // and call the hooks accordingly!
                        modifyer = function (item) {
                            var origItem = deepClone(item); // Clone the item first so we can compare laters.
                            if (changes.call(this, item, this) === false) return false; // Call the real modifyer function (If it returns false explicitely, it means it dont want to modify anyting on this object)
                            if (!hasOwn(this, "value")) {
                                // The real modifyer function requests a deletion of the object. Inform the deletingHook that a deletion is taking place.
                                deletingHook.call(this, this.primKey, item, trans);
                            } else {
                                // No deletion. Check what was changed
                                var objectDiff = getObjectDiff(origItem, this.value);
                                var additionalChanges = updatingHook.call(this, objectDiff, this.primKey, origItem, trans);
                                if (additionalChanges) {
                                    // Hook want to apply additional modifications. Make sure to fullfill the will of the hook.
                                    item = this.value;
                                    keys(additionalChanges).forEach(function (keyPath) {
                                        setByKeyPath(item, keyPath, additionalChanges[keyPath]); // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath
                                    });
                                }
                            }
                        };
                    }
                } else if (updatingHook === nop) {
                    // changes is a set of {keyPath: value} and no one is listening to the updating hook.
                    var keyPaths = keys(changes);
                    var numKeys = keyPaths.length;
                    modifyer = function (item) {
                        var anythingModified = false;
                        for (var i = 0; i < numKeys; ++i) {
                            var keyPath = keyPaths[i],
                                val = changes[keyPath];
                            if (getByKeyPath(item, keyPath) !== val) {
                                setByKeyPath(item, keyPath, val); // Adding {keyPath: undefined} means that the keyPath should be deleted. Handled by setByKeyPath
                                anythingModified = true;
                            }
                        }
                        return anythingModified;
                    };
                } else {
                    // changes is a set of {keyPath: value} and people are listening to the updating hook so we need to call it and
                    // allow it to add additional modifications to make.
                    var origChanges = changes;
                    changes = shallowClone(origChanges); // Let's work with a clone of the changes keyPath/value set so that we can restore it in case a hook extends it.
                    modifyer = function (item) {
                        var anythingModified = false;
                        var additionalChanges = updatingHook.call(this, changes, this.primKey, deepClone(item), trans);
                        if (additionalChanges) extend(changes, additionalChanges);
                        keys(changes).forEach(function (keyPath) {
                            var val = changes[keyPath];
                            if (getByKeyPath(item, keyPath) !== val) {
                                setByKeyPath(item, keyPath, val);
                                anythingModified = true;
                            }
                        });
                        if (additionalChanges) changes = shallowClone(origChanges); // Restore original changes for next iteration
                        return anythingModified;
                    };
                }

                var count = 0;
                var successCount = 0;
                var iterationComplete = false;
                var failures = [];
                var failKeys = [];
                var currentKey = null;

                function modifyItem(item, cursor) {
                    currentKey = cursor.primaryKey;
                    var thisContext = {
                        primKey: cursor.primaryKey,
                        value: item,
                        onsuccess: null,
                        onerror: null
                    };

                    function onerror(e) {
                        failures.push(e);
                        failKeys.push(thisContext.primKey);
                        checkFinished();
                        return true; // Catch these errors and let a final rejection decide whether or not to abort entire transaction
                    }

                    if (modifyer.call(thisContext, item, thisContext) !== false) {
                        // If a callback explicitely returns false, do not perform the update!
                        var bDelete = !hasOwn(thisContext, "value");
                        ++count;
                        tryCatch(function () {
                            var req = bDelete ? cursor.delete() : cursor.update(thisContext.value);
                            req._hookCtx = thisContext;
                            req.onerror = hookedEventRejectHandler(onerror);
                            req.onsuccess = hookedEventSuccessHandler(function () {
                                ++successCount;
                                checkFinished();
                            });
                        }, onerror);
                    } else if (thisContext.onsuccess) {
                        // Hook will expect either onerror or onsuccess to always be called!
                        thisContext.onsuccess(thisContext.value);
                    }
                }

                function doReject(e) {
                    if (e) {
                        failures.push(e);
                        failKeys.push(currentKey);
                    }
                    return reject(new ModifyError("Error modifying one or more objects", failures, successCount, failKeys));
                }

                function checkFinished() {
                    if (iterationComplete && successCount + failures.length === count) {
                        if (failures.length > 0) doReject();else resolve(successCount);
                    }
                }
                self.clone().raw()._iterate(modifyItem, function () {
                    iterationComplete = true;
                    checkFinished();
                }, doReject, idbstore);
            });
        },

        'delete': function () {
            var _this4 = this;

            var ctx = this._ctx,
                range = ctx.range,
                deletingHook = ctx.table.hook.deleting.fire,
                hasDeleteHook = deletingHook !== nop;
            if (!hasDeleteHook && isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || !range)) // if no range, we'll use clear().
                {
                    // May use IDBObjectStore.delete(IDBKeyRange) in this case (Issue #208)
                    // For chromium, this is the way most optimized version.
                    // For IE/Edge, this could hang the indexedDB engine and make operating system instable
                    // (https://gist.github.com/dfahlander/5a39328f029de18222cf2125d56c38f7)
                    return this._write(function (resolve, reject, idbstore) {
                        // Our API contract is to return a count of deleted items, so we have to count() before delete().
                        var onerror = eventRejectHandler(reject),
                            countReq = range ? idbstore.count(range) : idbstore.count();
                        countReq.onerror = onerror;
                        countReq.onsuccess = function () {
                            var count = countReq.result;
                            tryCatch(function () {
                                var delReq = range ? idbstore.delete(range) : idbstore.clear();
                                delReq.onerror = onerror;
                                delReq.onsuccess = function () {
                                    return resolve(count);
                                };
                            }, function (err) {
                                return reject(err);
                            });
                        };
                    });
                }

            // Default version to use when collection is not a vanilla IDBKeyRange on the primary key.
            // Divide into chunks to not starve RAM.
            // If has delete hook, we will have to collect not just keys but also objects, so it will use
            // more memory and need lower chunk size.
            var CHUNKSIZE = hasDeleteHook ? 2000 : 10000;

            return this._write(function (resolve, reject, idbstore, trans) {
                var totalCount = 0;
                // Clone collection and change its table and set a limit of CHUNKSIZE on the cloned Collection instance.
                var collection = _this4.clone({
                    keysOnly: !ctx.isMatch && !hasDeleteHook }) // load just keys (unless filter() or and() or deleteHook has subscribers)
                .distinct() // In case multiEntry is used, never delete same key twice because resulting count
                // would become larger than actual delete count.
                .limit(CHUNKSIZE).raw(); // Don't filter through reading-hooks (like mapped classes etc)

                var keysOrTuples = [];

                // We're gonna do things on as many chunks that are needed.
                // Use recursion of nextChunk function:
                var nextChunk = function () {
                    return collection.each(hasDeleteHook ? function (val, cursor) {
                        // Somebody subscribes to hook('deleting'). Collect all primary keys and their values,
                        // so that the hook can be called with its values in bulkDelete().
                        keysOrTuples.push([cursor.primaryKey, cursor.value]);
                    } : function (val, cursor) {
                        // No one subscribes to hook('deleting'). Collect only primary keys:
                        keysOrTuples.push(cursor.primaryKey);
                    }).then(function () {
                        // Chromium deletes faster when doing it in sort order.
                        hasDeleteHook ? keysOrTuples.sort(function (a, b) {
                            return ascending(a[0], b[0]);
                        }) : keysOrTuples.sort(ascending);
                        return bulkDelete(idbstore, trans, keysOrTuples, hasDeleteHook, deletingHook);
                    }).then(function () {
                        var count = keysOrTuples.length;
                        totalCount += count;
                        keysOrTuples = [];
                        return count < CHUNKSIZE ? totalCount : nextChunk();
                    });
                };

                resolve(nextChunk());
            });
        }
    });

    //
    //
    //
    // ------------------------- Help functions ---------------------------
    //
    //
    //

    function lowerVersionFirst(a, b) {
        return a._cfg.version - b._cfg.version;
    }

    function setApiOnPlace(objs, tableNames, mode, dbschema) {
        tableNames.forEach(function (tableName) {
            var tableInstance = db._tableFactory(mode, dbschema[tableName]);
            objs.forEach(function (obj) {
                tableName in obj || (obj[tableName] = tableInstance);
            });
        });
    }

    function removeTablesApi(objs) {
        objs.forEach(function (obj) {
            for (var key in obj) {
                if (obj[key] instanceof Table) delete obj[key];
            }
        });
    }

    function iterate(req, filter, fn, resolve, reject, valueMapper) {

        // Apply valueMapper (hook('reading') or mappped class)
        var mappedFn = valueMapper ? function (x, c, a) {
            return fn(valueMapper(x), c, a);
        } : fn;
        // Wrap fn with PSD and microtick stuff from Promise.
        var wrappedFn = wrap(mappedFn, reject);

        if (!req.onerror) req.onerror = eventRejectHandler(reject);
        if (filter) {
            req.onsuccess = trycatcher(function filter_record() {
                var cursor = req.result;
                if (cursor) {
                    var c = function () {
                        cursor.continue();
                    };
                    if (filter(cursor, function (advancer) {
                        c = advancer;
                    }, resolve, reject)) wrappedFn(cursor.value, cursor, function (advancer) {
                        c = advancer;
                    });
                    c();
                } else {
                    resolve();
                }
            }, reject);
        } else {
            req.onsuccess = trycatcher(function filter_record() {
                var cursor = req.result;
                if (cursor) {
                    var c = function () {
                        cursor.continue();
                    };
                    wrappedFn(cursor.value, cursor, function (advancer) {
                        c = advancer;
                    });
                    c();
                } else {
                    resolve();
                }
            }, reject);
        }
    }

    function parseIndexSyntax(indexes) {
        /// <param name="indexes" type="String"></param>
        /// <returns type="Array" elementType="IndexSpec"></returns>
        var rv = [];
        indexes.split(',').forEach(function (index) {
            index = index.trim();
            var name = index.replace(/([&*]|\+\+)/g, ""); // Remove "&", "++" and "*"
            // Let keyPath of "[a+b]" be ["a","b"]:
            var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split('+') : name;

            rv.push(new IndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), /\./.test(index)));
        });
        return rv;
    }

    function cmp(key1, key2) {
        return indexedDB.cmp(key1, key2);
    }

    function min(a, b) {
        return cmp(a, b) < 0 ? a : b;
    }

    function max(a, b) {
        return cmp(a, b) > 0 ? a : b;
    }

    function ascending(a, b) {
        return indexedDB.cmp(a, b);
    }

    function descending(a, b) {
        return indexedDB.cmp(b, a);
    }

    function simpleCompare(a, b) {
        return a < b ? -1 : a === b ? 0 : 1;
    }

    function simpleCompareReverse(a, b) {
        return a > b ? -1 : a === b ? 0 : 1;
    }

    function combine(filter1, filter2) {
        return filter1 ? filter2 ? function () {
            return filter1.apply(this, arguments) && filter2.apply(this, arguments);
        } : filter1 : filter2;
    }

    function readGlobalSchema() {
        db.verno = idbdb.version / 10;
        db._dbSchema = globalSchema = {};
        dbStoreNames = slice(idbdb.objectStoreNames, 0);
        if (dbStoreNames.length === 0) return; // Database contains no stores.
        var trans = idbdb.transaction(safariMultiStoreFix(dbStoreNames), 'readonly');
        dbStoreNames.forEach(function (storeName) {
            var store = trans.objectStore(storeName),
                keyPath = store.keyPath,
                dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
            var primKey = new IndexSpec(keyPath, keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== 'string', dotted);
            var indexes = [];
            for (var j = 0; j < store.indexNames.length; ++j) {
                var idbindex = store.index(store.indexNames[j]);
                keyPath = idbindex.keyPath;
                dotted = keyPath && typeof keyPath === 'string' && keyPath.indexOf('.') !== -1;
                var index = new IndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== 'string', dotted);
                indexes.push(index);
            }
            globalSchema[storeName] = new TableSchema(storeName, primKey, indexes, {});
        });
        setApiOnPlace([allTables, Transaction.prototype], keys(globalSchema), READWRITE, globalSchema);
    }

    function adjustToExistingIndexNames(schema, idbtrans) {
        /// <summary>
        /// Issue #30 Problem with existing db - adjust to existing index names when migrating from non-dexie db
        /// </summary>
        /// <param name="schema" type="Object">Map between name and TableSchema</param>
        /// <param name="idbtrans" type="IDBTransaction"></param>
        var storeNames = idbtrans.db.objectStoreNames;
        for (var i = 0; i < storeNames.length; ++i) {
            var storeName = storeNames[i];
            var store = idbtrans.objectStore(storeName);
            hasGetAll = 'getAll' in store;
            for (var j = 0; j < store.indexNames.length; ++j) {
                var indexName = store.indexNames[j];
                var keyPath = store.index(indexName).keyPath;
                var dexieName = typeof keyPath === 'string' ? keyPath : "[" + slice(keyPath).join('+') + "]";
                if (schema[storeName]) {
                    var indexSpec = schema[storeName].idxByName[dexieName];
                    if (indexSpec) indexSpec.name = indexName;
                }
            }
        }
    }

    function fireOnBlocked(ev) {
        db.on("blocked").fire(ev);
        // Workaround (not fully*) for missing "versionchange" event in IE,Edge and Safari:
        connections.filter(function (c) {
            return c.name === db.name && c !== db && !c._vcFired;
        }).map(function (c) {
            return c.on("versionchange").fire(ev);
        });
    }

    extend(this, {
        Collection: Collection,
        Table: Table,
        Transaction: Transaction,
        Version: Version,
        WhereClause: WhereClause,
        WriteableCollection: WriteableCollection,
        WriteableTable: WriteableTable
    });

    init();

    addons.forEach(function (fn) {
        fn(db);
    });
}

var fakeAutoComplete = function () {}; // Will never be changed. We just fake for the IDE that we change it (see doFakeAutoComplete())
var fake = false; // Will never be changed. We just fake for the IDE that we change it (see doFakeAutoComplete())

function parseType(type) {
    if (typeof type === 'function') {
        return new type();
    } else if (isArray(type)) {
        return [parseType(type[0])];
    } else if (type && typeof type === 'object') {
        var rv = {};
        applyStructure(rv, type);
        return rv;
    } else {
        return type;
    }
}

function applyStructure(obj, structure) {
    keys(structure).forEach(function (member) {
        var value = parseType(structure[member]);
        obj[member] = value;
    });
    return obj;
}

function eventSuccessHandler(done) {
    return function (ev) {
        done(ev.target.result);
    };
}

function hookedEventSuccessHandler(resolve) {
    // wrap() is needed when calling hooks because the rare scenario of:
    //  * hook does a db operation that fails immediately (IDB throws exception)
    //    For calling db operations on correct transaction, wrap makes sure to set PSD correctly.
    //    wrap() will also execute in a virtual tick.
    //  * If not wrapped in a virtual tick, direct exception will launch a new physical tick.
    //  * If this was the last event in the bulk, the promise will resolve after a physical tick
    //    and the transaction will have committed already.
    // If no hook, the virtual tick will be executed in the reject()/resolve of the final promise,
    // because it is always marked with _lib = true when created using Transaction._promise().
    return wrap(function (event) {
        var req = event.target,
            result = req.result,
            ctx = req._hookCtx,
            // Contains the hook error handler. Put here instead of closure to boost performance.
        hookSuccessHandler = ctx && ctx.onsuccess;
        hookSuccessHandler && hookSuccessHandler(result);
        resolve && resolve(result);
    }, resolve);
}

function eventRejectHandler(reject) {
    return function (event) {
        preventDefault(event);
        reject(event.target.error);
        return false;
    };
}

function hookedEventRejectHandler(reject) {
    return wrap(function (event) {
        // See comment on hookedEventSuccessHandler() why wrap() is needed only when supporting hooks.

        var req = event.target,
            err = req.error,
            ctx = req._hookCtx,
            // Contains the hook error handler. Put here instead of closure to boost performance.
        hookErrorHandler = ctx && ctx.onerror;
        hookErrorHandler && hookErrorHandler(err);
        preventDefault(event);
        reject(err);
        return false;
    });
}

function preventDefault(event) {
    if (event.stopPropagation) // IndexedDBShim doesnt support this on Safari 8 and below.
        event.stopPropagation();
    if (event.preventDefault) // IndexedDBShim doesnt support this on Safari 8 and below.
        event.preventDefault();
}

function globalDatabaseList(cb) {
    var val,
        localStorage = Dexie.dependencies.localStorage;
    if (!localStorage) return cb([]); // Envs without localStorage support
    try {
        val = JSON.parse(localStorage.getItem('Dexie.DatabaseNames') || "[]");
    } catch (e) {
        val = [];
    }
    if (cb(val)) {
        localStorage.setItem('Dexie.DatabaseNames', JSON.stringify(val));
    }
}

function awaitIterator(iterator) {
    var callNext = function (result) {
        return iterator.next(result);
    },
        doThrow = function (error) {
        return iterator.throw(error);
    },
        onSuccess = step(callNext),
        onError = step(doThrow);

    function step(getNext) {
        return function (val) {
            var next = getNext(val),
                value = next.value;

            return next.done ? value : !value || typeof value.then !== 'function' ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
        };
    }

    return step(callNext)();
}

//
// IndexSpec struct
//
function IndexSpec(name, keyPath, unique, multi, auto, compound, dotted) {
    /// <param name="name" type="String"></param>
    /// <param name="keyPath" type="String"></param>
    /// <param name="unique" type="Boolean"></param>
    /// <param name="multi" type="Boolean"></param>
    /// <param name="auto" type="Boolean"></param>
    /// <param name="compound" type="Boolean"></param>
    /// <param name="dotted" type="Boolean"></param>
    this.name = name;
    this.keyPath = keyPath;
    this.unique = unique;
    this.multi = multi;
    this.auto = auto;
    this.compound = compound;
    this.dotted = dotted;
    var keyPathSrc = typeof keyPath === 'string' ? keyPath : keyPath && '[' + [].join.call(keyPath, '+') + ']';
    this.src = (unique ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + keyPathSrc;
}

//
// TableSchema struct
//
function TableSchema(name, primKey, indexes, instanceTemplate) {
    /// <param name="name" type="String"></param>
    /// <param name="primKey" type="IndexSpec"></param>
    /// <param name="indexes" type="Array" elementType="IndexSpec"></param>
    /// <param name="instanceTemplate" type="Object"></param>
    this.name = name;
    this.primKey = primKey || new IndexSpec();
    this.indexes = indexes || [new IndexSpec()];
    this.instanceTemplate = instanceTemplate;
    this.mappedClass = null;
    this.idxByName = arrayToObject(indexes, function (index) {
        return [index.name, index];
    });
}

// Used in when defining dependencies later...
// (If IndexedDBShim is loaded, prefer it before standard indexedDB)
var idbshim = _global.idbModules && _global.idbModules.shimIndexedDB ? _global.idbModules : {};

function safariMultiStoreFix(storeNames) {
    return storeNames.length === 1 ? storeNames[0] : storeNames;
}

function getNativeGetDatabaseNamesFn(indexedDB) {
    var fn = indexedDB && (indexedDB.getDatabaseNames || indexedDB.webkitGetDatabaseNames);
    return fn && fn.bind(indexedDB);
}

// Export Error classes
props(Dexie, fullNameExceptions); // Dexie.XXXError = class XXXError {...};

//
// Static methods and properties
// 
props(Dexie, {

    //
    // Static delete() method.
    //
    delete: function (databaseName) {
        var db = new Dexie(databaseName),
            promise = db.delete();
        promise.onblocked = function (fn) {
            db.on("blocked", fn);
            return this;
        };
        return promise;
    },

    //
    // Static exists() method.
    //
    exists: function (name) {
        return new Dexie(name).open().then(function (db) {
            db.close();
            return true;
        }).catch(Dexie.NoSuchDatabaseError, function () {
            return false;
        });
    },

    //
    // Static method for retrieving a list of all existing databases at current host.
    //
    getDatabaseNames: function (cb) {
        return new Promise(function (resolve, reject) {
            var getDatabaseNames = getNativeGetDatabaseNamesFn(indexedDB);
            if (getDatabaseNames) {
                // In case getDatabaseNames() becomes standard, let's prepare to support it:
                var req = getDatabaseNames();
                req.onsuccess = function (event) {
                    resolve(slice(event.target.result, 0)); // Converst DOMStringList to Array<String>
                };
                req.onerror = eventRejectHandler(reject);
            } else {
                globalDatabaseList(function (val) {
                    resolve(val);
                    return false;
                });
            }
        }).then(cb);
    },

    defineClass: function (structure) {
        /// <summary>
        ///     Create a javascript constructor based on given template for which properties to expect in the class.
        ///     Any property that is a constructor function will act as a type. So {name: String} will be equal to {name: new String()}.
        /// </summary>
        /// <param name="structure">Helps IDE code completion by knowing the members that objects contain and not just the indexes. Also
        /// know what type each member has. Example: {name: String, emailAddresses: [String], properties: {shoeSize: Number}}</param>

        // Default constructor able to copy given properties into this object.
        function Class(properties) {
            /// <param name="properties" type="Object" optional="true">Properties to initialize object with.
            /// </param>
            properties ? extend(this, properties) : fake && applyStructure(this, structure);
        }
        return Class;
    },

    applyStructure: applyStructure,

    ignoreTransaction: function (scopeFunc) {
        // In case caller is within a transaction but needs to create a separate transaction.
        // Example of usage:
        //
        // Let's say we have a logger function in our app. Other application-logic should be unaware of the
        // logger function and not need to include the 'logentries' table in all transaction it performs.
        // The logging should always be done in a separate transaction and not be dependant on the current
        // running transaction context. Then you could use Dexie.ignoreTransaction() to run code that starts a new transaction.
        //
        //     Dexie.ignoreTransaction(function() {
        //         db.logentries.add(newLogEntry);
        //     });
        //
        // Unless using Dexie.ignoreTransaction(), the above example would try to reuse the current transaction
        // in current Promise-scope.
        //
        // An alternative to Dexie.ignoreTransaction() would be setImmediate() or setTimeout(). The reason we still provide an
        // API for this because
        //  1) The intention of writing the statement could be unclear if using setImmediate() or setTimeout().
        //  2) setTimeout() would wait unnescessary until firing. This is however not the case with setImmediate().
        //  3) setImmediate() is not supported in the ES standard.
        //  4) You might want to keep other PSD state that was set in a parent PSD, such as PSD.letThrough.
        return PSD.trans ? usePSD(PSD.transless, scopeFunc) : // Use the closest parent that was non-transactional.
        scopeFunc(); // No need to change scope because there is no ongoing transaction.
    },

    vip: function (fn) {
        // To be used by subscribers to the on('ready') event.
        // This will let caller through to access DB even when it is blocked while the db.ready() subscribers are firing.
        // This would have worked automatically if we were certain that the Provider was using Dexie.Promise for all asyncronic operations. The promise PSD
        // from the provider.connect() call would then be derived all the way to when provider would call localDatabase.applyChanges(). But since
        // the provider more likely is using non-promise async APIs or other thenable implementations, we cannot assume that.
        // Note that this method is only useful for on('ready') subscribers that is returning a Promise from the event. If not using vip()
        // the database could deadlock since it wont open until the returned Promise is resolved, and any non-VIPed operation started by
        // the caller will not resolve until database is opened.
        return newScope(function () {
            PSD.letThrough = true; // Make sure we are let through if still blocking db due to onready is firing.
            return fn();
        });
    },

    async: function (generatorFn) {
        return function () {
            try {
                var rv = awaitIterator(generatorFn.apply(this, arguments));
                if (!rv || typeof rv.then !== 'function') return Promise.resolve(rv);
                return rv;
            } catch (e) {
                return rejection(e);
            }
        };
    },

    spawn: function (generatorFn, args, thiz) {
        try {
            var rv = awaitIterator(generatorFn.apply(thiz, args || []));
            if (!rv || typeof rv.then !== 'function') return Promise.resolve(rv);
            return rv;
        } catch (e) {
            return rejection(e);
        }
    },

    // Dexie.currentTransaction property
    currentTransaction: {
        get: function () {
            return PSD.trans || null;
        }
    },

    // Export our Promise implementation since it can be handy as a standalone Promise implementation
    Promise: Promise,

    // Dexie.debug proptery:
    // Dexie.debug = false
    // Dexie.debug = true
    // Dexie.debug = "dexie" - don't hide dexie's stack frames.
    debug: {
        get: function () {
            return debug;
        },
        set: function (value) {
            setDebug(value, value === 'dexie' ? function () {
                return true;
            } : dexieStackFrameFilter);
        }
    },

    // Export our derive/extend/override methodology
    derive: derive,
    extend: extend,
    props: props,
    override: override,
    // Export our Events() function - can be handy as a toolkit
    Events: Events,
    events: { get: deprecated(function () {
            return Events;
        }) }, // Backward compatible lowercase version.
    // Utilities
    getByKeyPath: getByKeyPath,
    setByKeyPath: setByKeyPath,
    delByKeyPath: delByKeyPath,
    shallowClone: shallowClone,
    deepClone: deepClone,
    getObjectDiff: getObjectDiff,
    asap: asap,
    maxKey: maxKey,
    // Addon registry
    addons: [],
    // Global DB connection list
    connections: connections,

    MultiModifyError: exceptions.Modify, // Backward compatibility 0.9.8. Deprecate.
    errnames: errnames,

    // Export other static classes
    IndexSpec: IndexSpec,
    TableSchema: TableSchema,

    //
    // Dependencies
    //
    // These will automatically work in browsers with indexedDB support, or where an indexedDB polyfill has been included.
    //
    // In node.js, however, these properties must be set "manually" before instansiating a new Dexie().
    // For node.js, you need to require indexeddb-js or similar and then set these deps.
    //
    dependencies: {
        // Required:
        indexedDB: idbshim.shimIndexedDB || _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
        IDBKeyRange: idbshim.IDBKeyRange || _global.IDBKeyRange || _global.webkitIDBKeyRange
    },

    // API Version Number: Type Number, make sure to always set a version number that can be comparable correctly. Example: 0.9, 0.91, 0.92, 1.0, 1.01, 1.1, 1.2, 1.21, etc.
    semVer: DEXIE_VERSION,
    version: DEXIE_VERSION.split('.').map(function (n) {
        return parseInt(n);
    }).reduce(function (p, c, i) {
        return p + c / Math.pow(10, i * 2);
    }),
    fakeAutoComplete: fakeAutoComplete,

    // https://github.com/dfahlander/Dexie.js/issues/186
    // typescript compiler tsc in mode ts-->es5 & commonJS, will expect require() to return
    // x.default. Workaround: Set Dexie.default = Dexie.
    default: Dexie
});

tryCatch(function () {
    // Optional dependencies
    // localStorage
    Dexie.dependencies.localStorage = (typeof chrome !== "undefined" && chrome !== null ? chrome.storage : void 0) != null ? null : _global.localStorage;
});

// Map DOMErrors and DOMExceptions to corresponding Dexie errors. May change in Dexie v2.0.
Promise.rejectionMapper = mapError;

// Fool IDE to improve autocomplete. Tested with Visual Studio 2013 and 2015.
doFakeAutoComplete(function () {
    Dexie.fakeAutoComplete = fakeAutoComplete = doFakeAutoComplete;
    Dexie.fake = fake = true;
});

return Dexie;

})));


},{}],76:[function(require,module,exports){
'use strict';

var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};

},{}],77:[function(require,module,exports){
'use strict';

var emitter = require('contra/emitter');
var crossvent = require('crossvent');
var classes = require('./classes');
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }

    // truthy check fixes #239, equality fixes #207, fixes #501
    if ((e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0)) &&
      (e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0))) {
      return;
    }

    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e) || 0;
      var clientY = getCoord('clientY', e) || 0;
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  point = point || {};
  var state = point.className || '';
  var el;
  point.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  point.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;

},{"./classes":76,"contra/emitter":71,"crossvent":72}],78:[function(require,module,exports){
/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.5
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
        // not the initial event target in the shadow tree. Note that not all events cross the
        // shadow boundary.
        // For shadow trees with `mode: 'open'`, the initial event target is the first element in
        // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
        // target cannot be obtained.
        if ('composedPath' in e && typeof e.composedPath === 'function') {
            // For open shadow trees, update `element` so that the following check works.
            var initialEventTarget = e.composedPath()[0];
            if (initialEventTarget !== e.target) {
                element = initialEventTarget;
            }
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return Mousetrap;
        });
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);

},{}],79:[function(require,module,exports){
/*!
 * string_score.js: String Scoring Algorithm 0.1.22
 *
 * http://joshaven.com/string_score
 * https://github.com/joshaven/string_score
 *
 * Copyright (C) 2009-2014 Joshaven Potter <yourtech@gmail.com>
 * Special thanks to all of the contributors listed here https://github.com/joshaven/string_score
 * MIT License: http://opensource.org/licenses/MIT
 *
 * Date: Tue Mar 1 2011
 * Updated: Tue Mar 10 2015
*/

/*jslint nomen:true, white:true, browser:true,devel:true */

/**
 * Scores a string against another string.
 *    'Hello World'.score('he');         //=> 0.5931818181818181
 *    'Hello World'.score('Hello');    //=> 0.7318181818181818
 */
String.prototype.score = function (word, fuzziness) {
  'use strict';

  // If the string is equal to the word, perfect match.
  if (this === word) { return 1; }

  //if it's not a perfect match and is empty return 0
  if (word === "") { return 0; }

  var runningScore = 0,
      charScore,
      finalScore,
      string = this,
      lString = string.toLowerCase(),
      strLength = string.length,
      lWord = word.toLowerCase(),
      wordLength = word.length,
      idxOf,
      startAt = 0,
      fuzzies = 1,
      fuzzyFactor,
      i;

  // Cache fuzzyFactor for speed increase
  if (fuzziness) { fuzzyFactor = 1 - fuzziness; }

  // Walk through word and add up scores.
  // Code duplication occurs to prevent checking fuzziness inside for loop
  if (fuzziness) {
    for (i = 0; i < wordLength; i+=1) {

      // Find next first case-insensitive match of a character.
      idxOf = lString.indexOf(lWord[i], startAt);

      if (idxOf === -1) {
        fuzzies += fuzzyFactor;
      } else {
        if (startAt === idxOf) {
          // Consecutive letter & start-of-string Bonus
          charScore = 0.7;
        } else {
          charScore = 0.1;

          // Acronym Bonus
          // Weighing Logic: Typing the first character of an acronym is as if you
          // preceded it with two perfect character matches.
          if (string[idxOf - 1] === ' ') { charScore += 0.8; }
        }

        // Same case bonus.
        if (string[idxOf] === word[i]) { charScore += 0.1; }

        // Update scores and startAt position for next round of indexOf
        runningScore += charScore;
        startAt = idxOf + 1;
      }
    }
  } else {
    for (i = 0; i < wordLength; i+=1) {
      idxOf = lString.indexOf(lWord[i], startAt);
      if (-1 === idxOf) { return 0; }

      if (startAt === idxOf) {
        charScore = 0.7;
      } else {
        charScore = 0.1;
        if (string[idxOf - 1] === ' ') { charScore += 0.8; }
      }
      if (string[idxOf] === word[i]) { charScore += 0.1; }
      runningScore += charScore;
      startAt = idxOf + 1;
    }
  }

  // Reduce penalty for longer strings.
  finalScore = 0.5 * (runningScore / strLength    + runningScore / wordLength) / fuzzies;

  if ((lWord[0] === lString[0]) && (finalScore < 0.85)) {
    finalScore += 0.15;
  }

  return finalScore;
};

},{}],80:[function(require,module,exports){
var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else if (typeof process !== 'undefined' && process.nextTick) {
  tick = process.nextTick;
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;

},{}]},{},[1]);
