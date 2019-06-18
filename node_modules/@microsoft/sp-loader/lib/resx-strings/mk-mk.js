define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Не може да ја вчитаме апликацијата на оваа страница. Користете го копчето Назад во прегледувачот за да се обидете повторно. Ако проблемот опстои, контактирајте со администраторот на локацијата и дајте му ги информациите во техничките детали.",
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
      "errorLoadingDebugScriptHTTPS": "Грешка при вчитувањето на скриптата за отстранување грешки. Проверете дали серверот функционира и дали УРЛ-параметарот „{0}“ е точен.",
      "errorLoadingDebugScriptHTTP": "Грешка при вчитувањето на скриптата за отстранување грешки. Проверете дали серверот функционира, дали УРЛ-параметарот „{0}“ е точен и дали е дозволено вчитување небезбедни скрипти. Размислете и за користење развоен сертификат и за вчитување на скриптите преку HTTPS.",
      "errorLoadingDebugScriptMalformed": "Грешка при вчитувањето на скриптата за отстранување грешки. УРЛ-адресата за отстранување грешки ({0}) е лошо формирана.",
      "errorLoadingDebugScriptUnknown": "Непозната грешка при вчитувањето на скриптата за отстранување грешки.",
      "errorLoadingDebugLoaderTitle": "Грешка при вчитувањето на вчитувачот за отстранување грешки.",
      "errorLoadingDebugManifestTitle": "Грешка при вчитувањето на манифестите за отстранување грешки.",
      "errorLoadingUnknownTitle": "Грешка при вчитувањето на скриптите за отстранување грешки."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Недостасува компонента или функција за иницијализирање.",
      "closeDeveloperToolsAriaLabel": "Затвори ги алатките за развивачи."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Предупредување!",
      "warningLine1": "Користењето на оваа алатка ве изложува на потенцијални безбедносни закани коишто може да бидат резултат на тоа што другите добиваат пристап до вашите лични податоци на Office 365 (документи, е-пошта, разговори и друго). Проверете дали им верувате на лицето или организацијата коишто побарале пристап до оваа алатка пред да продолжите.",
      "warningLine2": "Дознајте повеќе тука: {0}"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Да се дозволат скрипти за отстранување грешки?",
      "allowDebugLoaderTitle": "Да се дозволи вчитувачот за отстранување грешки?",
      "allowDebugLoaderAndManifestsTitle": "Да се дозволат вчитувачот и скриптите за отстранување грешки?",
      "debugManifestLoadingWarning": "ПРЕДУПРЕДУВАЊЕ: оваа страница содржи небезбедни скрипти коишто може да го оштетат компјутерот ако се вчитаат. Не продолжувајте, освен ако му верувате на развивачот и ги разбирате ризиците.",
      "debugManifestLoadingWarning2": "Ако не сте сигурни, кликнете {0}.",
      "debugManifestLoadingConfirm": "Вчитај ги скриптите за отстранување грешки",
      "debugManifestLoadingCancel": "Не вчитувај ги скриптите за отстранување грешки",
      "debugManifestLoadingCalloutText": "Ако не знаете што да правите, кликнете тука."
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Се појави грешка при вчитувањето на манифестите за отстранување грешки.",
      "debugManifestErrorDismissButtonText": "Отфрли"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Се вчитува...",
      "developerToolsTabLoadingUnknownError": "Се појави непозната грешка при вчитување на модулот со алатки за развивачи."
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Трага",
      "EmptyTraceData": "Не се вчитани траги.",
      "ExportCSVButtonLabel": "Извези CSV",
      "LevelHeaderLabel": "Ниво",
      "MessageHeaderLabel": "Порака",
      "ScopeHeaderLabel": "Обем",
      "SourceHeaderLabel": "Извор",
      "TimestampHeaderLabel": "Временски печат",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Манифести",
      "noManifestSelected": "Не е избран манифест"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Изведба",
      "ErrorAccessingPerfDataErrorMessage": "Не може да ги вчитаме податоците за изведбата: објектот е нула или не е дефиниран.",
      "ErrorAccessingRedirectDataErrorMessage": "Не може да пристапиме до HTTP-податоците за пренасочување на изведбата.",
      "ErrorParsingPercievedLatencyErrorMessage": "Се појави грешка при разложување на податоците за воочена латентност.",
      "ErrorParsingApiDataErrorMessage": "Се појави грешка при разложување на податоците за АПИ.",
      "UnkownPerformanceDataErrorMessage": "Се појави непозната грешка: {0}",
      "DefaultWebPartName": "Веб-дел",
      "ServerResponseLabel": "Одговор на серверот",
      "ApplicationInitializationLabel": "Иницијализирање на апликацијата",
      "ScriptFetchEvalLabel": "Земање и проценка на скриптите",
      "SpLoaderStartLabel": "Започнување на SPFx",
      "PageRenderLabel": "Прикажување на страницата",
      "LeftNavRenderLabel": "Прикажување на левата навигација",
      "CanvasRenderLabel": "Прикажување на платното",
      "LayoutRenderLabel": "Прикажување на распоредот",
      "RedirectResponseLabel": "Одговор за пренасочување",
      "AppLoadLabel": "Вчитување на апликацијата",
      "RenderWebPartsLabel": "Прикажување на веб-деловите",
      "TotalRenderTimeLabel": "Вкупно",
      "GeneralErrorMessage": "Извинете, се појави проблем при вчитување на податоците за изведбата.",
      "ErrorMessagePrefix": "Порака за грешка: {0}",
      "PerformanceDataHint": "Белешка: откако ќе додадете или отстраните веб-дел, освежете ја страницата за да ги видите ажурираните податоци за изведбата.",
      "ModulesLoadedLegendLabel": "Вчитани модули",
      "InitializationLegendLabel": "Иницијализација",
      "RenderTimeLegendLabel": "Време на прикажување",
      "InitializationTimeLabel": "Време на иницијализација",
      "ModuleLoadingTimeLabel": "Време на вчитување на модулот",
      "ModuleLazyLoadingDelayLabel": "Вчитувањето на модулот доцни",
      "DataFetchTimeLabel": "Време на земање на податоците",
      "DataFetchLegendLabel": "Земање податоци",
      "ItemsColumnHeader": "Ставки",
      "DurationColumnHeader": "Времетраење",
      "MillisecondsUnitLabel": "{0} мс",
      "NAPlaceholder": "N/A"
    }
  };

  strings.default = strings;
  return strings;
});