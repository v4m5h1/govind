define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Aplikácia sa na tejto stránke nedá načítať. Skúste to znova pomocou tlačidla Dozadu v prehliadači. Ak sa problém nevyrieši, obráťte sa na správcu lokality a poskytnite mu informácie uvedené v časti Technické podrobnosti.",
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
      "errorLoadingDebugScriptHTTPS": "Chyba pri načítavaní skriptu ladenia. Skontrolujte, či je server spustený a či je URL adresa parametra {0} správna.",
      "errorLoadingDebugScriptHTTP": "Chyba pri načítavaní skriptu ladenia. Skontrolujte, či je server spustený, či je URL adresa parametra {0} správna a či je povolené načítavanie nezabezpečených skriptov. Zvážte aj použitie certifikátu na vývoj a obsluhovanie skriptov ladenia cez protokol HTTPS.",
      "errorLoadingDebugScriptMalformed": "Chyba pri načítavaní skriptu ladenia. Zdá sa, že URL adresa ladenia ({0}) nemá správny formát.",
      "errorLoadingDebugScriptUnknown": "Pri načítavaní skriptu ladenia sa vyskytla neznáma chyba.",
      "errorLoadingDebugLoaderTitle": "Chyba pri načítavaní zavádzacieho programu ladenia.",
      "errorLoadingDebugManifestTitle": "Chyba pri načítavaní manifestov ladenia.",
      "errorLoadingUnknownTitle": "Chyba pri načítavaní skriptov ladenia."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Chýba komponent alebo funkcia inicializačného výrazu.",
      "closeDeveloperToolsAriaLabel": "Zatvorenie vývojárskych nástrojov."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Upozornenie!",
      "warningLine1": "Používanie tohto nástroja predstavuje potenciálne ohrozenie zabezpečenia, kedy môžu ostatní získať prístup k vašim osobným údajom v službách Office 365 (dokumentom, e-mailom, konverzáciám a ďalším položkám). Pred pokračovaním sa uistite, že osoba alebo organizácia, ktorá vás požiadala o prístup k tomuto nástroju, je dôveryhodná.",
      "warningLine2": "Ďalšie informácie nájdete tu: {0}"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Chcete povoliť skripty ladenia?",
      "allowDebugLoaderTitle": "Chcete povoliť zavádzací program ladenia?",
      "allowDebugLoaderAndManifestsTitle": "Chcete povoliť zavádzací program ladenia a skripty ladenia?",
      "debugManifestLoadingWarning": "UPOZORNENIE: Táto stránka obsahuje nebezpečné skripty, ktoré by vám v prípade načítania mohli poškodiť počítač. Pokračujte len v prípade, že dôverujete vývojárovi a rozumiete možným rizikám.",
      "debugManifestLoadingWarning2": "Ak si nie ste istí, kliknite na položku {0}.",
      "debugManifestLoadingConfirm": "Načítať skripty ladenia",
      "debugManifestLoadingCancel": "Nenačítať skripty ladenia",
      "debugManifestLoadingCalloutText": "Ak neviete, čo treba robiť, kliknite sem."
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Pri načítavaní manifestov ladenia sa vyskytla chyba.",
      "debugManifestErrorDismissButtonText": "Zrušiť"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Načítava sa...",
      "developerToolsTabLoadingUnknownError": "Pri načítavaní modulu vývojárskych nástrojov sa vyskytla neznáma chyba."
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Sledovanie",
      "EmptyTraceData": "Neboli načítané žiadne sledovania.",
      "ExportCSVButtonLabel": "Exportovať CSV",
      "LevelHeaderLabel": "Úroveň",
      "MessageHeaderLabel": "Správa",
      "ScopeHeaderLabel": "Rozsah",
      "SourceHeaderLabel": "Zdroj",
      "TimestampHeaderLabel": "Časová pečiatka",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesty",
      "noManifestSelected": "Nie je vybratý žiaden manifest"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Výkon",
      "ErrorAccessingPerfDataErrorMessage": "Nepodarilo sa načítať údaje o výkone: Objekt má hodnotu null alebo je nedefinovaný.",
      "ErrorAccessingRedirectDataErrorMessage": "Pri získavaní prístupu k údajom o výkone presmerovania HTTP sa vyskytol problém.",
      "ErrorParsingPercievedLatencyErrorMessage": "Pri analýze údajov zisteného oneskorenia sa vyskytla chyba.",
      "ErrorParsingApiDataErrorMessage": "Pri analýze údajov rozhrania API sa vyskytla chyba.",
      "UnkownPerformanceDataErrorMessage": "Vyskytla sa neznáma chyba: {0}",
      "DefaultWebPartName": "Webová časť",
      "ServerResponseLabel": "Odpoveď servera",
      "ApplicationInitializationLabel": "Inicializácia aplikácie",
      "ScriptFetchEvalLabel": "Načítanie a vyhodnotenie skriptu",
      "SpLoaderStartLabel": "Inicializácia SPFx",
      "PageRenderLabel": "Vykreslenie stránky",
      "LeftNavRenderLabel": "Vykreslenie ľavého navigačného panela",
      "CanvasRenderLabel": "Vykreslenie plátna",
      "LayoutRenderLabel": "Vykreslenie rozloženia",
      "RedirectResponseLabel": "Presmerovať odpoveď",
      "AppLoadLabel": "Načítanie aplikácie",
      "RenderWebPartsLabel": "Vykreslenie webových častí",
      "TotalRenderTimeLabel": "Spolu",
      "GeneralErrorMessage": "Ľutujeme, počas načítavania údajov o výkone sa vyskytla chyba.",
      "ErrorMessagePrefix": "Chybové hlásenie: {0}",
      "PerformanceDataHint": "Poznámka: Po pridaní alebo odstránení webovej časti obnovte stránku, aby sa vám zobrazili údaje o výkone.",
      "ModulesLoadedLegendLabel": "Načítané moduly",
      "InitializationLegendLabel": "Inicializácia",
      "RenderTimeLegendLabel": "Čas vykreslenia",
      "InitializationTimeLabel": "Čas inicializácie",
      "ModuleLoadingTimeLabel": "Čas načítania modulu",
      "ModuleLazyLoadingDelayLabel": "Oneskorené načítanie modulu",
      "DataFetchTimeLabel": "Čas načítania údajov",
      "DataFetchLegendLabel": "Načítanie údajov",
      "ItemsColumnHeader": "Položky",
      "DurationColumnHeader": "Trvanie",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Nie je k dispozícii"
    }
  };

  strings.default = strings;
  return strings;
});