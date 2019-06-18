define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Aplikace se na této stránce nedá načíst. Zkuste to znovu pomocí tlačítka Zpět v prohlížeči. Pokud s tím budou dál problémy, kontaktujte správce webu a poskytněte mu informace uvedené v části Technické podrobnosti.",
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
      "errorLoadingDebugScriptHTTPS": "Chyba při načítání ladicího skriptu. Zkontrolujte, jestli server běží a parametr {0} obsahuje správnou adresu URL.",
      "errorLoadingDebugScriptHTTP": "Chyba při načítání ladicího skriptu. Zkontrolujte, jestli server běží, parametr {0} obsahuje správnou adresu URL a je povolené načítání nezabezpečených skriptů. Zvažte také použití certifikátu pro vývoj a obsluhování ladicích skriptů přes HTTPS.",
      "errorLoadingDebugScriptMalformed": "Chyba při načítání ladicího skriptu. Vypadá to, že adresa URL pro ladění ({0}) nemá správný formát.",
      "errorLoadingDebugScriptUnknown": "Neznámá chyba při načítání ladicího skriptu",
      "errorLoadingDebugLoaderTitle": "Chyba při načítání zavaděče ladění",
      "errorLoadingDebugManifestTitle": "Chyba při načítání manifestů ladění",
      "errorLoadingUnknownTitle": "Chyba při načítání ladicích skriptů"
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Chybějící součást nebo funkce inicializátoru",
      "closeDeveloperToolsAriaLabel": "Zavřít vývojářské nástroje"
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Upozornění",
      "warningLine1": "Používání tohoto nástroje představuje potenciální ohrožení zabezpečení, kdy ostatní můžou získat přístup k vašim osobním datům v Office 365 (dokumentům, e-mailům, konverzacím a dalším). Před pokračováním se ujistěte, že osoba nebo organizace, která vás požádala o používání tohoto nástroje, je důvěryhodná.",
      "warningLine2": "Další informace najdete tady: {0}"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Chcete povolit ladění skriptů?",
      "allowDebugLoaderTitle": "Povolit zavaděč ladění?",
      "allowDebugLoaderAndManifestsTitle": "Povolit zavaděč ladění a ladicí skripty?",
      "debugManifestLoadingWarning": "UPOZORNĚNÍ: Tato stránka obsahuje nezabezpečené skripty, které by při načtení potenciálně mohly poškodit váš počítač. Pokračujte jenom v případě, že vývojáři důvěřujete a rozumíte možným rizikům.",
      "debugManifestLoadingWarning2": "Pokud si nejste jistí, klikněte na {0}.",
      "debugManifestLoadingConfirm": "Načíst ladicí skripty",
      "debugManifestLoadingCancel": "Nenačítat ladicí skripty",
      "debugManifestLoadingCalloutText": "Pokud nevíte, co dělat, klikněte sem."
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Došlo k chybě při načítání manifestů ladění.",
      "debugManifestErrorDismissButtonText": "Zavřít"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Načítání...",
      "developerToolsTabLoadingUnknownError": "Neznámá chyba načítání modulu s vývojářskými nástroji"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Trasování",
      "EmptyTraceData": "Nenačetla se žádná trasování.",
      "ExportCSVButtonLabel": "Exportovat CSV",
      "LevelHeaderLabel": "Úroveň",
      "MessageHeaderLabel": "Zpráva",
      "ScopeHeaderLabel": "Obor",
      "SourceHeaderLabel": "Zdroj",
      "TimestampHeaderLabel": "Časové razítko",
      "TimestampFormat": "{2}.{1}.{0} {3}:{4}:{5},{6}"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesty",
      "noManifestSelected": "Není vybraný žádný manifest."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Výkon",
      "ErrorAccessingPerfDataErrorMessage": "Nejde načíst data o výkonu: Objekt je null nebo není definovaný.",
      "ErrorAccessingRedirectDataErrorMessage": "Došlo k problému při přístupu k datům o výkonu přesměrování HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Při analýze dat pociťované latence došlo k chybě.",
      "ErrorParsingApiDataErrorMessage": "Při analýze dat rozhraní API došlo k chybě.",
      "UnkownPerformanceDataErrorMessage": "Došlo k neznámé chybě: {0}",
      "DefaultWebPartName": "Webová část",
      "ServerResponseLabel": "Odpověď serveru",
      "ApplicationInitializationLabel": "Inicializace aplikace",
      "ScriptFetchEvalLabel": "Načítání a vyhodnocení skriptů",
      "SpLoaderStartLabel": "Inicializace SPFx",
      "PageRenderLabel": "Vykreslení stránky",
      "LeftNavRenderLabel": "Vykreslení levé navigace",
      "CanvasRenderLabel": "Vykreslení plátna",
      "LayoutRenderLabel": "Vykreslení rozložení",
      "RedirectResponseLabel": "Odpověď na přesměrování",
      "AppLoadLabel": "Zavedení aplikace",
      "RenderWebPartsLabel": "Vykreslení webových částí",
      "TotalRenderTimeLabel": "Celkem",
      "GeneralErrorMessage": "Při načítání dat o výkonu došlo bohužel k nějaké chybě.",
      "ErrorMessagePrefix": "Chybová zpráva: {0}",
      "PerformanceDataHint": "Poznámka: Po přidání nebo odebrání webové části aktualizujte stránku, aby se vám zobrazily údaje o výkonu.",
      "ModulesLoadedLegendLabel": "Zavedené moduly",
      "InitializationLegendLabel": "Inicializace",
      "RenderTimeLegendLabel": "Doba vykreslování",
      "InitializationTimeLabel": "Doba inicializace",
      "ModuleLoadingTimeLabel": "Doba načítání modulu",
      "ModuleLazyLoadingDelayLabel": "Zpožděné načtení modulu",
      "DataFetchTimeLabel": "Doba načítání dat",
      "DataFetchLegendLabel": "Načtení dat",
      "ItemsColumnHeader": "Položky",
      "DurationColumnHeader": "Doba trvání",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Není k dispozici."
    }
  };

  strings.default = strings;
  return strings;
});