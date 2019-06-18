define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Kan ikke laste inn programmet på denne siden. Bruk Tilbake-knappen i nettleseren for å prøve på nytt. Hvis problemet vedvarer, kontakter du administratoren for området og gir vedkommende informasjonen i Teknisk informasjon.",
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
      "errorLoadingDebugScriptHTTPS": "Feil under innlasting av feilsøkingsskript. Kontroller at serveren kjører, og at nettadressen til parameteren {0} er riktig.",
      "errorLoadingDebugScriptHTTP": "Feil under innlasting av feilsøkingsskript. Kontroller at serveren kjører, at nettadressen til parameteren {0} er riktig, og at det er tillatt å laste inn usikre skript. Vurder også å bruke et utviklingssertifikat og kjøre feilsøkingsskript over HTTPS.",
      "errorLoadingDebugScriptMalformed": "Feil under innlasting av feilsøkingsskript. Nettadressen for feilsøking ({0}) ser ut til å være feilformatert.",
      "errorLoadingDebugScriptUnknown": "Ukjent feil under innlasting av et feilsøkingsskript.",
      "errorLoadingDebugLoaderTitle": "Feil under innlasting av feilsøkingslaster.",
      "errorLoadingDebugManifestTitle": "Feil under innlasting av feilsøkingsmanifester.",
      "errorLoadingUnknownTitle": "Feil under innlasting av feilsøkingsskript."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Funksjonen for manglende komponent eller initialisering.",
      "closeDeveloperToolsAriaLabel": "Lukk utviklerverktøy."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Advarsel!",
      "warningLine1": "Bruk av dette verktøyet utsetter deg for potensielle sikkerhetstrusler som kan føre til at andre får tilgang til personlige Office 365-data (dokumenter, e-post, samtaler og mer). Pass på at du stoler på personen eller organisasjonen som ba deg om å få tilgang til dette verktøyet, før du fortsetter.",
      "warningLine2": "Les mer her: {0}"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Tillate feilsøkingsskript?",
      "allowDebugLoaderTitle": "Tillate feilsøkingslaster?",
      "allowDebugLoaderAndManifestsTitle": "Tillate feilsøkingslaster og feilsøkingsskript?",
      "debugManifestLoadingWarning": "ADVARSEL! Denne siden inneholder usikre skript som kan skade datamaskinen hvis de lastes inn. Ikke fortsett med mindre du stoler på utvikleren og forstår risikoene det innebærer.",
      "debugManifestLoadingWarning2": "Hvis du er usikker, klikker du på {0}.",
      "debugManifestLoadingConfirm": "Last inn feilsøkingsskript",
      "debugManifestLoadingCancel": "Ikke last inn feilsøkingsskript",
      "debugManifestLoadingCalloutText": "Hvis du ikke vet hva du skal gjøre, kan du klikke her."
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Det oppstod en feil under innlasting av feilsøkingsmanifester.",
      "debugManifestErrorDismissButtonText": "Lukk"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Laster inn ...",
      "developerToolsTabLoadingUnknownError": "Ukjent feil under lasting av utviklerverktøy-modulen."
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Sporing",
      "EmptyTraceData": "Ingen sporinger ble lastet inn.",
      "ExportCSVButtonLabel": "Eksporter CSV",
      "LevelHeaderLabel": "Nivå",
      "MessageHeaderLabel": "Melding",
      "ScopeHeaderLabel": "Omfang",
      "SourceHeaderLabel": "Kilde",
      "TimestampHeaderLabel": "Tidsangivelse",
      "TimestampFormat": "{0}.{1}.{2} {3}:{4}:{5}.{6}"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifester",
      "noManifestSelected": "Ingen manifest er valgt"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Ytelse",
      "ErrorAccessingPerfDataErrorMessage": "Kan ikke hente ytelsesdataene: objektet er null eller udefinert.",
      "ErrorAccessingRedirectDataErrorMessage": "Det oppstod et problem med å få tilgang til ytelsesdata for HTTP-omadressering.",
      "ErrorParsingPercievedLatencyErrorMessage": "Det ble funnet en feil under analysering av data om oppfattet ventetid.",
      "ErrorParsingApiDataErrorMessage": "Det ble funnet en feil under analysering av API-data.",
      "UnkownPerformanceDataErrorMessage": "Det oppstod en ukjent feil: {0}",
      "DefaultWebPartName": "Nettdel",
      "ServerResponseLabel": "Svar fra server",
      "ApplicationInitializationLabel": "Programinitialisering",
      "ScriptFetchEvalLabel": "Skript for henting og evaluering",
      "SpLoaderStartLabel": "Initialisering av SPFx",
      "PageRenderLabel": "Sidegjengivelse",
      "LeftNavRenderLabel": "Gjengivelse av venstre navigasjon",
      "CanvasRenderLabel": "Lerretgjengivelse",
      "LayoutRenderLabel": "Gjengivelse av oppsett",
      "RedirectResponseLabel": "Omadressering av svar",
      "AppLoadLabel": "Programinnlasting",
      "RenderWebPartsLabel": "Gjengivelse av nettdeler",
      "TotalRenderTimeLabel": "Totalt",
      "GeneralErrorMessage": "Beklager, men noe gikk galt under henting av ytelsesdata.",
      "ErrorMessagePrefix": "Feilmelding: {0}",
      "PerformanceDataHint": "Obs!  Når du legger til eller fjerner en nettdel, må du oppdatere siden for å se oppdaterte ytelsesdata.",
      "ModulesLoadedLegendLabel": "Innlastede moduler",
      "InitializationLegendLabel": "Initialisering",
      "RenderTimeLegendLabel": "Gjengivelsestid",
      "InitializationTimeLabel": "Initialiseringstid",
      "ModuleLoadingTimeLabel": "Innlastingstid for modul",
      "ModuleLazyLoadingDelayLabel": "Forsinket innlasting av modul",
      "DataFetchTimeLabel": "Datahentingstid",
      "DataFetchLegendLabel": "Datahenting",
      "ItemsColumnHeader": "Elementer",
      "DurationColumnHeader": "Varighet",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "I/T"
    }
  };

  strings.default = strings;
  return strings;
});