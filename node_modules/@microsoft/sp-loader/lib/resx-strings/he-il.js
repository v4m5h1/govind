define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "אין אפשרות לטעון את היישום בדף זה. השתמש בלחצן 'אחורה' של הדפדפן כדי לנסות שנית. אם הבעיה נמשכת, פנה למנהל האתר ומסור לו את המידע שב'פרטים טכניים'.",
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
      "errorLoadingDebugScriptHTTPS": "שגיאה בטעינת קובץ Script של איתור באגים. ודא שהשרת פועל ושכתובת ה- URL של הפרמטר \"{0}\" נכונה.",
      "errorLoadingDebugScriptHTTP": "שגיאה בטעינת קובץ Script של איתור באגים. ודא שהשרת פועל, שכתובת ה- URL של הפרמטר \"{0}\" נכונה ושמותר לטעון קבצי Script לא בטוחים. בנוסף, שקול להשתמש באישור פיתוח ולהגיש קבצי Script של איתור באגים באמצעות HTTPS.",
      "errorLoadingDebugScriptMalformed": "שגיאה בטעינת קובץ Script של איתור באגים. נראה שלכתובת ה- URL של איתור באגים ({0}) יש מבנה פגום.",
      "errorLoadingDebugScriptUnknown": "שגיאה לא ידועה בטעינת קובץ Script של איתור באגים.",
      "errorLoadingDebugLoaderTitle": "שגיאה בטעינת טוען איתור באגים.",
      "errorLoadingDebugManifestTitle": "שגיאה בטעינת מניפסטים של איתור באגים.",
      "errorLoadingUnknownTitle": "שגיאה בטעינת קבצי Script של איתור באגים."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "רכיב או פונקציית מאתחל חסרים.",
      "closeDeveloperToolsAriaLabel": "סגור כלי פיתוח."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "אזהרה!",
      "warningLine1": "השימוש בכלי זה חושף אותך לאיומי אבטחה פוטנציאליים, דבר שעלול לאפשר לאנשים אחרים לקבל גישה לנתוני Office 365 האישיים שלך (מסמכים, הודעות דואר אלקטרוני, שיחות ועוד). ודא שאתה נותן אמון באדם או בארגון שביקש ממך לגשת לכלי זה לפני שתמשיך.",
      "warningLine2": "קבל מידע נוסף כאן: {0}"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "האם לאפשר קבצי Script לאיתור באגים?",
      "allowDebugLoaderTitle": "האם לאפשר טוען איתור באגים?",
      "allowDebugLoaderAndManifestsTitle": "האם לאפשר טוען איתור באגים וקבצי Script של איתור באגים?",
      "debugManifestLoadingWarning": "אזהרה: דף זה מכיל קבצי Script לא בטוחים, שעלולים לגרום נזק למחשב שלך אם ייטענו. אל תמשיך אלא אם אתה נותן אמון במפתח ומבין את הסיכונים.",
      "debugManifestLoadingWarning2": "אם אינך בטוח, לחץ על '{0}'.",
      "debugManifestLoadingConfirm": "טען קבצי Script של איתור באגים",
      "debugManifestLoadingCancel": "אל תטען קבצי Script של איתור באגים",
      "debugManifestLoadingCalloutText": "אם אינך יודע מה לעשות, לחץ כאן."
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "אירעה שגיאה בעת טעינת מניפסטים של איתור באגים.",
      "debugManifestErrorDismissButtonText": "הפסק"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "טוען...",
      "developerToolsTabLoadingUnknownError": "שגיאה לא ידועה בעת טעינת מודול כלי פיתוח."
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "מעקב",
      "EmptyTraceData": "לא נטענו מעקבים.",
      "ExportCSVButtonLabel": "ייצא CSV",
      "LevelHeaderLabel": "רמה",
      "MessageHeaderLabel": "הודעה",
      "ScopeHeaderLabel": "טווח",
      "SourceHeaderLabel": "מקור",
      "TimestampHeaderLabel": "חותמת זמן",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "מניפסטים",
      "noManifestSelected": "לא נבחר מניפסט"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "ביצועים",
      "ErrorAccessingPerfDataErrorMessage": "לא ניתן לאחזר נתוני ביצועים: האובייקט Null או לא מוגדר.",
      "ErrorAccessingRedirectDataErrorMessage": "אירעה בעיה בעת גישה לנתוני הביצועים של ניתוב מחדש של HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "המערכת נתקלה בשגיאה בעת ניתוח נתוני ההשהיה הנתפסת.",
      "ErrorParsingApiDataErrorMessage": "המערכת נתקלה בשגיאה בעת ניתוח נתוני ה- API.",
      "UnkownPerformanceDataErrorMessage": "אירעה שגיאה לא ידועה: {0}",
      "DefaultWebPartName": "Web Part",
      "ServerResponseLabel": "תגובת שרת",
      "ApplicationInitializationLabel": "אתחול יישום",
      "ScriptFetchEvalLabel": "הבאת קבצי Script והערכה",
      "SpLoaderStartLabel": "אתחול SPFx",
      "PageRenderLabel": "עיבוד דף",
      "LeftNavRenderLabel": "עיבוד ניווט ימני",
      "CanvasRenderLabel": "עיבוד בד ציור",
      "LayoutRenderLabel": "עיבוד פריסה",
      "RedirectResponseLabel": "תגובת ניתוב מחדש",
      "AppLoadLabel": "טעינת יישום",
      "RenderWebPartsLabel": "עיבוד רכיבי Web Part",
      "TotalRenderTimeLabel": "סה\"כ",
      "GeneralErrorMessage": "מצטערים, משהו השתבש בעת אחזור נתוני הביצועים.",
      "ErrorMessagePrefix": "הודעת שגיאה: {0}",
      "PerformanceDataHint": "הערה: לאחר הוספה או הסרה של Web Part, רענן את הדף כדי לראות נתוני ביצועים מעודכנים.",
      "ModulesLoadedLegendLabel": "מודולים שנטענו",
      "InitializationLegendLabel": "אתחול",
      "RenderTimeLegendLabel": "זמן עיבוד",
      "InitializationTimeLabel": "זמן אתחול",
      "ModuleLoadingTimeLabel": "זמן טעינת מודול",
      "ModuleLazyLoadingDelayLabel": "טעינת המודול מושהית",
      "DataFetchTimeLabel": "זמן הבאת נתונים",
      "DataFetchLegendLabel": "הבאת נתונים",
      "ItemsColumnHeader": "פריטים",
      "DurationColumnHeader": "משך זמן",
      "MillisecondsUnitLabel": "{0} אלפיות שניה",
      "NAPlaceholder": "לא ישים"
    }
  };

  strings.default = strings;
  return strings;
});