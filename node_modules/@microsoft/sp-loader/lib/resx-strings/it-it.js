define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Non è possibile caricare l'applicazione in questa pagina. Usare il pulsante Indietro del browser per riprovare. Se il problema persiste, contattare l'amministratore del sito e specificare le informazioni in Dettagli tecnici.",
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
      "errorLoadingDebugScriptHTTPS": "Errore durante il caricamento dello script di debug. Verificare che il server sia in esecuzione e che l'URL del parametro \"{0}\" sia corretto.",
      "errorLoadingDebugScriptHTTP": "Errore durante il caricamento dello script di debug. Verificare che il server sia in esecuzione, che l'URL del parametro \"{0}\" sia corretto e che sia consentito il caricamento di script non sicuri. Può anche essere utile usare un certificato di sviluppo e fornire gli script di debug su HTTPS.",
      "errorLoadingDebugScriptMalformed": "Errore durante il caricamento dello script di debug. L'URL di debug ({0}) non è valido.",
      "errorLoadingDebugScriptUnknown": "Errore sconosciuto durante il caricamento di uno script di debug.",
      "errorLoadingDebugLoaderTitle": "Errore durante il caricamento del caricatore di debug.",
      "errorLoadingDebugManifestTitle": "Errore durante il caricamento dei manifesti di debug.",
      "errorLoadingUnknownTitle": "Errore durante il caricamento degli script di debug."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Componente o funzione di inizializzazione mancante.",
      "closeDeveloperToolsAriaLabel": "Chiude gli strumenti di sviluppo."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Avviso.",
      "warningLine1": "L'uso di questo strumento espone a potenziali minacce per la sicurezza, che potrebbero essere tali da consentire ad altri di accedere ai dati personali di Office 365 dell'utente (documenti, messaggi di posta elettronica, conversazioni e altro). Prima di procedere, assicurarsi che la persona o l'organizzazione che ha richiesto l'accesso a questo strumento sia attendibile.",
      "warningLine2": "Altre informazioni sono disponibili qui: {0}"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Abilitare gli script di debug?",
      "allowDebugLoaderTitle": "Consentire il caricatore di debug?",
      "allowDebugLoaderAndManifestsTitle": "Consentire il caricatore e gli script di debug?",
      "debugManifestLoadingWarning": "AVVISO: questa pagina contiene script non sicuri che, se caricati, potrebbero danneggiare il computer. Continuare solo se si considera attendibile lo sviluppatore e si comprendono i rischi.",
      "debugManifestLoadingWarning2": "In caso di dubbi, fare clic su {0}.",
      "debugManifestLoadingConfirm": "Carica script di debug",
      "debugManifestLoadingCancel": "Non caricare script di debug",
      "debugManifestLoadingCalloutText": "Per saperne di più, fare clic qui."
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Si è verificato un errore durante il caricamento dei manifesti di debug.",
      "debugManifestErrorDismissButtonText": "Chiudi"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Caricamento in corso...",
      "developerToolsTabLoadingUnknownError": "Errore sconosciuto durante il caricamento del modulo degli strumenti di sviluppo."
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Traccia",
      "EmptyTraceData": "Nessuna traccia caricata.",
      "ExportCSVButtonLabel": "Esporta CSV",
      "LevelHeaderLabel": "Livello",
      "MessageHeaderLabel": "Messaggio",
      "ScopeHeaderLabel": "Ambito",
      "SourceHeaderLabel": "Origine",
      "TimestampHeaderLabel": "Data e ora",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesti",
      "noManifestSelected": "Nessun manifesto selezionato"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Prestazioni",
      "ErrorAccessingPerfDataErrorMessage": "Non è possibile recuperare i dati sulle prestazioni: l'oggetto è Null o non definito.",
      "ErrorAccessingRedirectDataErrorMessage": "C'è stato un problema durante l'accesso ai dati sulle prestazioni del reindirizzamento HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "È stato rilevato un errore durante l'analisi dei dati sulla latenza percepita.",
      "ErrorParsingApiDataErrorMessage": "È stato rilevato un errore durante l'analisi dei dati delle API.",
      "UnkownPerformanceDataErrorMessage": "Si è verificato un errore sconosciuto: {0}",
      "DefaultWebPartName": "Web part",
      "ServerResponseLabel": "Risposta del server",
      "ApplicationInitializationLabel": "Inizializzazione applicazioni",
      "ScriptFetchEvalLabel": "Recupero e valutazione script",
      "SpLoaderStartLabel": "Inizializzazione SPFx",
      "PageRenderLabel": "Rendering pagine",
      "LeftNavRenderLabel": "Rendering barra di spostamento sinistra",
      "CanvasRenderLabel": "Rendering area di disegno",
      "LayoutRenderLabel": "Rendering layout",
      "RedirectResponseLabel": "Risposta reindirizzamento",
      "AppLoadLabel": "Caricamento applicazioni",
      "RenderWebPartsLabel": "Rendering web part",
      "TotalRenderTimeLabel": "Totale",
      "GeneralErrorMessage": "C'è stato un problema durante il recupero dei dati sulle prestazioni.",
      "ErrorMessagePrefix": "Messaggio di errore: {0}",
      "PerformanceDataHint": "Nota: dopo l'aggiunta o la rimozione di una web part, aggiornare la pagina per visualizzare i dati aggiornati sulle prestazioni.",
      "ModulesLoadedLegendLabel": "Moduli caricati",
      "InitializationLegendLabel": "Inizializzazione",
      "RenderTimeLegendLabel": "Tempo di rendering",
      "InitializationTimeLabel": "Ora di inizializzazione",
      "ModuleLoadingTimeLabel": "Ora di caricamento modulo",
      "ModuleLazyLoadingDelayLabel": "Ritardo di caricamento del modulo",
      "DataFetchTimeLabel": "Ora di recupero dati",
      "DataFetchLegendLabel": "Recupero dati",
      "ItemsColumnHeader": "Elementi",
      "DurationColumnHeader": "Durata",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/D"
    }
  };

  strings.default = strings;
  return strings;
});