define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Не може да се зареди приложението на тази страница. Използвайте бутона на браузъра \"Назад\", за да опитате отново. Ако проблемът продължава, се обърнете към администратора на сайта и му дайте информацията от \"Технически подробности\".",
      "platformFailedToLoadError": "Platform failed to load. Id: \"{0}\", name: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Platform failed to load. Id: \"{0}\", name: \"{1}\".\r\nError: {2}",
      "applicationFailedToInitializeError": "Error initializing application. Error: {0}",
      "invalidPreloadedDataError": "Invalid preloaded data.",
      "manifestNotFoundByIdError": "Manifest not found for component id \"{0}\".",
      "manifestNotFoundError": "Manifest not found for component id \"{0}\" and version \"{1}\".",
      "systemConfigDisabledError": "System.config() is not supported. Use a manifest to specify the configuration.",
      "loadComponentLog": "Loading component \"{0}\" ({1}).",
      "loadComponentEndLog": "Component \"{0}\" ({1}) loaded.",
      "loadComponentRetryLog": "Loading component \"{0}\" ({1}). Attempt {2} of {3}.",
      "loadComponentError": "Failed to load component \"{0}\" ({1}).\r\nOriginal error: {2}",
      "loadComponentMaxRetriesError": "Attempted to load component \"{0}\" ({1}) {2} times without success.",
      "loadComponentDependencyError": "Failed to load component dependency \"{0}\" from component \"{1}\" ({2}).\r\nOriginal error: {3}",
      "loadComponentDependencyFailoverPathError": "Failed to load component dependency \"{0}\" with failover path \"{1}\" from component \"{2}\" ({3}).\r\nOriginal error: {4}",
      "loadPathDependencyLog": "Loading path dependency \"{0}\" from component \"{1}\" ({2})",
      "loadPathDependencyError": "Failed to load path dependency \"{0}\" from component \"{1}\" ({2}).\r\nOriginal error: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Failed to load path dependency \"{0}\" from component \"{1}\" ({2}) due to another dependency that failed to load.",
      "loadEntryPointError": "Failed to load entry point from component \"{0}\" ({1}).\r\nOriginal error: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() returned an empty object for component \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() returned an object with an empty default property for component \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "The entry point for component \"{0}\" ({1}) has a dependency on \"{2}\" that is not declared in the manifest.",
      "loadScriptWithStringError": "loadScript function doesn't allow a string as 2nd parameter. Use ILoadScriptOptions instead.",
      "tooManyManifestsError": "{0} manifests (versions {1}) found for component \"{2}\".",
      "tooManyCompatibleVersionsError": "{0} compatible versions ({1}) found for component \"{2}\" version \"{3}\".",
      "tooManyComponentsError": "Too many components found for id \"{0}\".",
      "noComponentFoundError": "No component found for id \"{0}\".",
      "deleteComponentLog": "Deleting component \"{0}\" version \"{1}\" from the store.",
      "browserNotSupportedError": "This version of your browser is not supported.\r\nPlease update your browser to the latest version.",
      "ie9OrOlderNotSupportedError": "This page does not support Internet Explorer releases older than version 10. Please update your web browser.",
      "firefox43OrOlderNotSupportedError": "This page does not support Mozilla Firefox releases older than version 44. Please update your web browser.",
      "resourceNotFoundError": "Resource \"{0}\" not found in loader configuration of manifest for component \"{1}\" ({2}).",
      "noFailoverPathError": "Cannot call resolveAddress() on a component with no failover path",
      "urlStatusLocalhostFileNotFoundError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.\r\nMake sure that you are running 'gulp serve'.",
      "urlStatusFileNotFoundError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.",
      "urlStatusForbiddenError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The access to the file is forbidden.",
      "urlStatusClientErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was an error requesting the file.",
      "urlStatusServerErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a problem in the server.",
      "urlStatusLocalhostNetworkErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.\r\nMake sure that you are running 'gulp serve' and you have run 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.\r\nThis may be a problem with a HTTPS certificate. Make sure you have the right certificate.",
      "urlStatusNetworkErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.",
      "urlStatusUndefinedError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}) because of unknown problems.",
      "isUndefinedValidateError": "The value for \"{0}\" must not be undefined",
      "failedToCreateGlobalVariableError": "Failed to create global variable \"{0}\" from script \"{1}\"",
      "dependencyLoadError": "Failed to load module '{0}' because dependency {1} was not loaded",
      "missingPathDependencyError": "Missing path dependency \"{0}\" from component \"{1}\" ({2}). Existing path dependencies: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Грешка при зареждане на модула за отстраняване на грешки. Уверете се, че сървърът работи и че URL адресът на параметъра \"{0}\" е правилен.",
      "errorLoadingDebugScriptHTTP": "Грешка при зареждане на скрипта за отстраняване на грешки. Уверете се, че сървърът работи, че URL адресът на параметъра \"{0}\" е правилен и че зареждането на опасни скриптове е позволено. Също така обмислете използване на сертификат за разработки и обслужване на скриптовете за отстраняване на грешки по HTTPS.",
      "errorLoadingDebugScriptMalformed": "Грешка при зареждане на скрипта за отстраняване на грешки. Изглежда, че URL адресът за отстраняване на грешки ({0}) не е правилно формиран.",
      "errorLoadingDebugScriptUnknown": "Неизвестна грешка при зареждане на скрипта за отстраняване на грешки.",
      "errorLoadingDebugLoaderTitle": "Грешка при зареждане на манифестите за отстраняване на грешки.",
      "errorLoadingDebugManifestTitle": "Грешка при зареждане на манифестите за отстраняване на грешки.",
      "errorLoadingUnknownTitle": "Грешка при зареждане на скриптовете за отстраняване на грешки."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Липсващ компонент или функция на инициализатора.",
      "closeDeveloperToolsAriaLabel": "Затваряне на инструментите за разработчици."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Предупреждение!",
      "warningLine1": "Използването на този инструмент ви излага на потенциални заплахи за сигурността, което може да доведе това други хора да получат достъп до вашите лични данни в Office 365 (документи, имейли, разговори и др.). Уверете се, че имате доверие на лицето или организацията, които ви молят за достъп до този инструмент, преди да продължите.",
      "warningLine2": "Научете повече тук: {0}"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Позволяване на отстраняване на грешки от скриптовете?",
      "allowDebugLoaderTitle": "Разрешаване на зареждащия модул за отстраняване на грешки?",
      "allowDebugLoaderAndManifestsTitle": "Разрешаване на зареждащия модул и скриптовете за отстраняване на грешки?",
      "debugManifestLoadingWarning": "ПРЕДУПРЕЖДЕНИЕ: тази страница съдържа опасни скриптове, които, ако бъдат заредени, евентуално биха могли да навредят на вашия компютър. Продължете само ако имате доверие на разработчика и разбирате рисковете.",
      "debugManifestLoadingWarning2": "Ако не сте сигурни, щракнете върху \"{0}\".",
      "debugManifestLoadingConfirm": "Зареждай скриптовете за отстраняване на грешки",
      "debugManifestLoadingCancel": "Не зареждай скриптовете за отстраняване на грешки",
      "debugManifestLoadingCalloutText": "Ако не знаете какво да правите, щракнете тук."
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Възникна грешка при зареждане на манифестите за отстраняване на грешки.",
      "debugManifestErrorDismissButtonText": "Прекратяване"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Зареждане...",
      "developerToolsTabLoadingUnknownError": "Неизвестна грешка при зареждане на модула с инструменти за разработчици."
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Проследяване",
      "EmptyTraceData": "Не са заредени проследявания.",
      "ExportCSVButtonLabel": "Експортиране като CSV файл",
      "LevelHeaderLabel": "Ниво",
      "MessageHeaderLabel": "Съобщение",
      "ScopeHeaderLabel": "Обхват",
      "SourceHeaderLabel": "Източник",
      "TimestampHeaderLabel": "Клеймо (с дата и час)",
      "TimestampFormat": "{1}.{0}.{2} {3}:{4}:{5}.{6}"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Манифести",
      "noManifestSelected": "Няма избран манифест"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Производителност",
      "ErrorAccessingPerfDataErrorMessage": "Неуспешно извличане на данни за производителността: обектът е null или не е дефиниран.",
      "ErrorAccessingRedirectDataErrorMessage": "Възникна проблем при достъпа до данните за производителността при HTTP пренасочването.",
      "ErrorParsingPercievedLatencyErrorMessage": "Хваната е грешка при анализирането на данните за забелязаното закъснение.",
      "ErrorParsingApiDataErrorMessage": "Хваната е грешка при анализирането на данните за API.",
      "UnkownPerformanceDataErrorMessage": "Възникна неизвестна грешка: {0}",
      "DefaultWebPartName": "Уеб част",
      "ServerResponseLabel": "Отговор на сървъра",
      "ApplicationInitializationLabel": "Инициализиране на приложение",
      "ScriptFetchEvalLabel": "Извличане и оценка на скрипт",
      "SpLoaderStartLabel": "Инициализиране на SPFx",
      "PageRenderLabel": "Рендиране на страницата",
      "LeftNavRenderLabel": "Рендиране на лявата навигация",
      "CanvasRenderLabel": "Рендиране на платно",
      "LayoutRenderLabel": "Рендиране на оформление",
      "RedirectResponseLabel": "Пренасочване на отговор",
      "AppLoadLabel": "Зареждане на приложение",
      "RenderWebPartsLabel": "Рендиране на уеб части",
      "TotalRenderTimeLabel": "Общо",
      "GeneralErrorMessage": "За съжаление, нещо се обърка при извличане на данните за производителността.",
      "ErrorMessagePrefix": "Съобщение за грешка: {0}",
      "PerformanceDataHint": "Забележка: след добавянето или премахването на уеб част, обновете страницата, за да видите актуализираните данни за производителността.",
      "ModulesLoadedLegendLabel": "Заредени модули",
      "InitializationLegendLabel": "Инициализиране",
      "RenderTimeLegendLabel": "Време за рендиране",
      "InitializationTimeLabel": "Време за инициализация",
      "ModuleLoadingTimeLabel": "Време за зареждане на модула",
      "ModuleLazyLoadingDelayLabel": "Зареждането на модула е отложено",
      "DataFetchTimeLabel": "Време за извличане на данните",
      "DataFetchLegendLabel": "Извличане на данни",
      "ItemsColumnHeader": "Елементи",
      "DurationColumnHeader": "Времетраене",
      "MillisecondsUnitLabel": "{0} мсек.",
      "NAPlaceholder": "Няма"
    }
  };

  strings.default = strings;
  return strings;
});