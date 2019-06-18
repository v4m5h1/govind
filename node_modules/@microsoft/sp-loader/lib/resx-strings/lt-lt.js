define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Negalima įkelti šio puslapio programos. Norėdami pakartoti, paspauskite naršyklės mygtuką Atgal. Jei problema kartojasi, kreipkitės į svetainės administratorių ir pateikite dalyje Techninė informacija esančią informaciją.",
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
      "errorLoadingDebugScriptHTTPS": "Klaida įkeliant derinimo scenarijų. Įsitikinkite, kad serveris veikia, ir parametro „{0}“ URL yra teisingas.",
      "errorLoadingDebugScriptHTTP": "Klaida įkeliant derinimo scenarijų. Įsitikinkite, kad serveris veikia, parametro „{0}“ URL yra teisingas, ir leidžiama įkelti nesaugius scenarijus. Taip pat apsvarstykite galimybę naudoti kūrimo sertifikatą ir derinimo scenarijų teikimą per HTTPS.",
      "errorLoadingDebugScriptMalformed": "Klaida įkeliant derinimo scenarijų. Atrodo, kad derinimo URL ({0}) yra sudarytas netinkamai.",
      "errorLoadingDebugScriptUnknown": "Nežinoma klaida įkeliant derinimo scenarijų.",
      "errorLoadingDebugLoaderTitle": "Klaida įkeliant derinimo įkėlimo priemonę.",
      "errorLoadingDebugManifestTitle": "Klaida įkeliant derinimo deklaracijas.",
      "errorLoadingUnknownTitle": "Klaida įkeliant derinimo scenarijus."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Trūksta komponento arba iniciatoriaus funkcijos.",
      "closeDeveloperToolsAriaLabel": "Uždaryti kūrėjo įrankius."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Įspėjimas!",
      "warningLine1": "Naudojant šį įrankį gali kilti saugos grėsmių, dėl kurių kiti asmenys gali gauti prieigą prie jūsų „Office 365“ duomenų (dokumentų, el. laiškų, pokalbių ir kt.). Prieš tęsdami įsitikinkite, kad jūs pasitikite asmeniu ar organizacija, kuri paprašė jūsų pasiekti šį įrankį.",
      "warningLine2": "Daugiau sužinokite čia: {0}"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Leisti derinimo scenarijus?",
      "allowDebugLoaderTitle": "Leisti derinimo įkėlimo priemonę?",
      "allowDebugLoaderAndManifestsTitle": "Įjungti derinimo įkėlimo priemonę ir leisti derinti scenarijus?",
      "debugManifestLoadingWarning": "ĮSPĖJIMAS: šiame puslapyje yra nesaugių scenarijų, kurie įkelti gali pakenkti jūsų kompiuteriui! Neįkelkite, nebent pasitikite kūrėjais ir suprantate riziką.",
      "debugManifestLoadingWarning2": "Jei nesate tikri, spustelėkite „{0}“.",
      "debugManifestLoadingConfirm": "Įkelti derinimo scenarijus",
      "debugManifestLoadingCancel": "Neįkelti derinimo scenarijų",
      "debugManifestLoadingCalloutText": "Jei nežinote, ką daryti, spustelėkite čia."
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Įkeliant derinimo deklaracijas, įvyko klaida.",
      "debugManifestErrorDismissButtonText": "Atsisakyti"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Įkeliama...",
      "developerToolsTabLoadingUnknownError": "Įkeliant kūrėjo įrankių modulį įvyko nežinoma klaida."
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Sekimas",
      "EmptyTraceData": "Neįkelta jokių sekimų.",
      "ExportCSVButtonLabel": "Eksportuoti CSV",
      "LevelHeaderLabel": "Lygis",
      "MessageHeaderLabel": "Pranešimas",
      "ScopeHeaderLabel": "Aprėptis",
      "SourceHeaderLabel": "Šaltinis",
      "TimestampHeaderLabel": "Laiko žymė",
      "TimestampFormat": "{0}-{1}-{2} {3}:{4}:{5}.{6}"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Deklaracijos",
      "noManifestSelected": "Nepasirinkta jokia deklaracija"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Našumas",
      "ErrorAccessingPerfDataErrorMessage": "Nepavyksta nuskaityti našumo duomenų: objektas yra NULL arba neapibrėžtas.",
      "ErrorAccessingRedirectDataErrorMessage": "Bandant pasiekti HTTP peradresavimo našumo duomenis kilo problema.",
      "ErrorParsingPercievedLatencyErrorMessage": "Analizuojant gaišties duomenis įvyko klaida.",
      "ErrorParsingApiDataErrorMessage": "Analizuojant API duomenis įvyko klaida.",
      "UnkownPerformanceDataErrorMessage": "Įvyko nežinoma klaida: {0}",
      "DefaultWebPartName": "Puslapio dalis",
      "ServerResponseLabel": "Serverio atsakymas",
      "ApplicationInitializationLabel": "Programos inicijavimas",
      "ScriptFetchEvalLabel": "Scenarijų radimas ir įvertinimas",
      "SpLoaderStartLabel": "SPFx inicijavimas",
      "PageRenderLabel": "Puslapio vaizdo generavimas",
      "LeftNavRenderLabel": "Kairiosios naršymo srities vaizdo generavimas",
      "CanvasRenderLabel": "Drobės vaizdo generavimas",
      "LayoutRenderLabel": "Maketo generavimas",
      "RedirectResponseLabel": "Peradresuoti atsakymą",
      "AppLoadLabel": "Programos įkėlimas",
      "RenderWebPartsLabel": "Puslapio dalių vaizdo generavimas",
      "TotalRenderTimeLabel": "Iš viso",
      "GeneralErrorMessage": "Atsiprašome, kažkas nutiko nuskaitant našumo duomenis.",
      "ErrorMessagePrefix": "Klaidos pranešimas: {0}",
      "PerformanceDataHint": "Pastaba: įtraukę arba pašalinę puslapio dalį, atnaujinkite puslapį, kad pamatytumėte atnaujintus našumo duomenis.",
      "ModulesLoadedLegendLabel": "Moduliai įkelti",
      "InitializationLegendLabel": "Inicijavimas",
      "RenderTimeLegendLabel": "Vaizdo generavimo laikas",
      "InitializationTimeLabel": "Inicijavimo laikas",
      "ModuleLoadingTimeLabel": "Modulio įkėlimo laikas",
      "ModuleLazyLoadingDelayLabel": "Modulio įkėlimas vėluoja",
      "DataFetchTimeLabel": "Duomenų surinkimo laikas",
      "DataFetchLegendLabel": "Duomenų gavimas",
      "ItemsColumnHeader": "Elementai",
      "DurationColumnHeader": "Trukmė",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Netaikoma"
    }
  };

  strings.default = strings;
  return strings;
});