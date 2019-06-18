define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Does dim modd llwytho'r rhaglen ar y dudalen hon. Defnyddiwch y botwm Yn ôl ar y porwr i roi cynnig arall arni. Os bydd y broblem yn parhau, cysylltwch â gweinyddwr y safle a rhoi'r wybodaeth sydd yn y Manylion Technegol.",
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
      "errorLoadingDebugScriptHTTPS": "Gwall wrth lwytho sgript difa chwilod. Sicrhewch bod y gweinydd yn rhedeg a bod yr URL paramedr \"{0}\" yn gywir.",
      "errorLoadingDebugScriptHTTP": "Gwall wrth lwytho sgript dadfygio. Sicrhewch bod y gweinydd yn rhedeg, bod yr URL paramedr “{0}” yn gywir, ac y caniateir llwytho sgriptiau anniogel. Hefyd ystyriwch ddefnyddio tystysgrif datblygu a gwasanaethu sgriptiau difa chwilod dros HTTPS.",
      "errorLoadingDebugScriptMalformed": "Gwall wrth lwytho sgript difa chwilod. Fe ymddengys bod yr URL difa chwilod ({0}) wedi ei gamffurfio.",
      "errorLoadingDebugScriptUnknown": "Gwall anhysbys wrth lwytho sgript difa chwilod.",
      "errorLoadingDebugLoaderTitle": "Gwall wrth lwytho’r llwythwr difa chwilod.",
      "errorLoadingDebugManifestTitle": "Gwall wrth lwytho rhestrau dadfygio.",
      "errorLoadingUnknownTitle": "Gwall wrth lwytho sgriptiau difa chwilod."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Cydran neu swyddogaeth ymgychwyn ar goll.",
      "closeDeveloperToolsAriaLabel": "Cau offer datblygu."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Rhybudd!",
      "warningLine1": "Gallai defnyddio’r offeryn hwn arwain at bobl eraill yn cael mynediad at eich data Office 365 personol (dogfennau, negeseuon e-bost, sgyrsiau, a mwy). Gwnewch yn siŵr eich bod chi’n ymddiried yn y person neu’r sefydliad sydd wedi eich gofyn chi i gael mynediad at yr offeryn hwn cyn bwrw ymlaen.",
      "warningLine2": "Dysgu mwy yma: {0}"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Caniatáu'r sgriptiau difa chwilod?",
      "allowDebugLoaderTitle": "Caniatáu’r llwythwr difa Chwilod?",
      "allowDebugLoaderAndManifestsTitle": "Caniatáu’r llwythwr difa chwilod a'r sgriptiau difa chwilod?",
      "debugManifestLoadingWarning": "RHYBUDD: Mae’r dudalen hon wedi gwneud cais i lwytho sgriptiau anniogel, a allai beryglu eich cyfrifiadur! Peidiwch â bwrw ymlaen heblaw eich bod chi'n ymddiried yn y datblygwr ac yn deall y risgiau.",
      "debugManifestLoadingWarning2": "Os ydych yn ansicr, cliciwch {0}.",
      "debugManifestLoadingConfirm": "Llwytho sgriptiau difa chwilod",
      "debugManifestLoadingCancel": "Peidio â llwytho sgriptiau difa chwilod",
      "debugManifestLoadingCalloutText": "Os nad ydych chi'n gwybod beth i’w wneud, cliciwch yma."
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Digwyddodd gwall wrth lwytho rhestr dadfygio.",
      "debugManifestErrorDismissButtonText": "Gwrthod"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Wrthi'n llwytho...",
      "developerToolsTabLoadingUnknownError": "Gwall anhysbys wrth lwytho’r modiwl offer datblygu."
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Olrhain",
      "EmptyTraceData": "Dim llwybrau olrhain wedi’u llwytho.",
      "ExportCSVButtonLabel": "Allgludo CSV",
      "LevelHeaderLabel": "Lefel",
      "MessageHeaderLabel": "Neges",
      "ScopeHeaderLabel": "Cwmpas",
      "SourceHeaderLabel": "Ffynhonnell",
      "TimestampHeaderLabel": "Stamp amser",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Maniffestau",
      "noManifestSelected": "Heb ddewis maniffest"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Perfformiad",
      "ErrorAccessingPerfDataErrorMessage": "Methu nôl y data perfformio: mae’r gwrthrych yn nwl neu heb ei ddiffinio.",
      "ErrorAccessingRedirectDataErrorMessage": "Roedd problem wrth gael gafael ar ddata perfformiad y broses ailgyfeirio HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Daliwyd gwall wrth ddosrannu’r data segurdod tebygol.",
      "ErrorParsingApiDataErrorMessage": "Daliwyd gwall wrth ddosrannu’r data API.",
      "UnkownPerformanceDataErrorMessage": "Gwall anhysbys: {0}",
      "DefaultWebPartName": "Rhan Gwe",
      "ServerResponseLabel": "Ymateb y Gweinydd",
      "ApplicationInitializationLabel": "Ymgychwyn Rhaglenni",
      "ScriptFetchEvalLabel": "Nôl a gwerthuso sgript",
      "SpLoaderStartLabel": "Ysgogi SPFx",
      "PageRenderLabel": "Rendro Tudalennau",
      "LeftNavRenderLabel": "Rendro’r Cwarel Chwilio Chwith",
      "CanvasRenderLabel": "Rendro Cynfasau",
      "LayoutRenderLabel": "Rendro Cynllun",
      "RedirectResponseLabel": "Ymateb Ailgyfeirio",
      "AppLoadLabel": "Llwytho Apiau",
      "RenderWebPartsLabel": "Rendro Rhannau Gwe",
      "TotalRenderTimeLabel": "Cyfanswm",
      "GeneralErrorMessage": "Yn anffodus, aeth rhywbeth o'i le wrth nôl y data perfformio.",
      "ErrorMessagePrefix": "Neges y Gwall: {0}",
      "PerformanceDataHint": "Nodyn: Ar ôl ychwanegu neu dynnu rhan gwe, adnewyddwch y dudalen i weld data perfformiad wedi’i ddiweddaru.",
      "ModulesLoadedLegendLabel": "Wedi Llwytho Modiwlau",
      "InitializationLegendLabel": "Ymgychwyn",
      "RenderTimeLegendLabel": "Amser Rendro",
      "InitializationTimeLabel": "Amser ymgychwyn",
      "ModuleLoadingTimeLabel": "Amser llwytho’r modiwl",
      "ModuleLazyLoadingDelayLabel": "Oedi wrth lwytho'r modiwl",
      "DataFetchTimeLabel": "Amser nôl y data",
      "DataFetchLegendLabel": "Nôl Data",
      "ItemsColumnHeader": "Eitemau",
      "DurationColumnHeader": "Hyd",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Amherthnasol"
    }
  };

  strings.default = strings;
  return strings;
});