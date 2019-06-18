define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Bu sayfadaki uygulama yüklenemiyor. Yeniden denemek için tarayıcıdaki Geri düğmesini kullanın. Sorun devam ederse sitenin yöneticisiyle görüşüp Teknik Ayrıntılar bölümündeki bilgileri verin.",
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
      "errorLoadingDebugScriptHTTPS": "Hata ayıklama betiği yüklenirken bir hata oluştu. Sunucunun çalıştığından ve \"{0}\" parametre URL'sinin doğru olduğundan emin olun.",
      "errorLoadingDebugScriptHTTP": "Hata ayıklama betiği yüklenirken bir hata oluştu. Sunucunun çalıştığından, \"{0}\" parametre URL'sinin doğru olduğundan ve güvenli olmayan betiklerin yüklenmesine izin verildiğinden emin olun. Ayrıca geliştirme sertifikası kullanmayı ve hata ayıklama betiklerini HTTPS üzerinden sunmayı düşünün.",
      "errorLoadingDebugScriptMalformed": "Hata ayıklama betiği yüklenirken bir hata oluştu. Hata ayıklama URL'si ({0}) hatalı oluşturulmuş gibi görünüyor.",
      "errorLoadingDebugScriptUnknown": "Hata ayıklama betiği yüklenirken bilinmeyen bir hata oluştu.",
      "errorLoadingDebugLoaderTitle": "Hata ayıklama yükleyicisi yüklenirken bir hata oluştu.",
      "errorLoadingDebugManifestTitle": "Hata ayıklama bildirimleri yüklenirken bir hata oluştu.",
      "errorLoadingUnknownTitle": "Hata ayıklama betikleri yüklenirken bir hata oluştu."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Eksik bileşen veya başlatıcı işlev.",
      "closeDeveloperToolsAriaLabel": "Geliştirici araçlarını kapatın."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Uyarı!",
      "warningLine1": "Bu aracı kullandığınızda maruz kalacağınız olası güvenlik tehditleri, kişisel Office 365 verilerinize (belgeler, e-postalar, konuşmalar ve daha fazlası) başkaları tarafından erişilmesine neden olabilir. Devam etmeden önce bu araca erişmenizi isteyen kişi veya kuruluşa güvendiğinizden emin olun.",
      "warningLine2": "{0} sayfasından daha fazla bilgi edinin"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Hata ayıklama betiklerine izin verilsin mi?",
      "allowDebugLoaderTitle": "Hata ayıklama yükleyicisine izin verilsin mi?",
      "allowDebugLoaderAndManifestsTitle": "Hata ayıklama yükleyicisine ve hata ayıklama betiklerine izin verilsin mi?",
      "debugManifestLoadingWarning": "UYARI: Bu sayfa, yüklenirse bilgisayarınıza zarar verebilecek, güvenli olmayan betikler içeriyor. Geliştiriciye güvenmiyorsanız ve risklerle ilgili bilgi sahibi değilseniz devam etmeyin.",
      "debugManifestLoadingWarning2": "Emin değilseniz {0} düğmesine tıklayın.",
      "debugManifestLoadingConfirm": "Hata ayıklama betiklerini yükle",
      "debugManifestLoadingCancel": "Hata ayıklama betiklerini yükleme",
      "debugManifestLoadingCalloutText": "Ne yapmanız gerektiğini bilmiyorsanız buraya tıklayın."
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Hata ayıklama bildirimleri yüklenirken bir hata oluştu.",
      "debugManifestErrorDismissButtonText": "Kapat"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Yükleniyor...",
      "developerToolsTabLoadingUnknownError": "Geliştirici araçları modülü yüklenirken bilinmeyen bir hata oluştu."
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "İzleme",
      "EmptyTraceData": "İzleme yüklenmedi.",
      "ExportCSVButtonLabel": "CSV'yi Dışarı Aktar",
      "LevelHeaderLabel": "Düzey",
      "MessageHeaderLabel": "İleti",
      "ScopeHeaderLabel": "Kapsam",
      "SourceHeaderLabel": "Kaynak",
      "TimestampHeaderLabel": "Zaman Damgası",
      "TimestampFormat": "{2}/{1}/{0} {3}:{4}:{5},{6}"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Bildirimler",
      "noManifestSelected": "Seçili bildirim yok"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Performans",
      "ErrorAccessingPerfDataErrorMessage": "Performans verileri alınamıyor: nesne null veya tanımsız.",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP yeniden yönlendirme performans verilerine erişilirken bir sorun oluştu.",
      "ErrorParsingPercievedLatencyErrorMessage": "Algılanan gecikme süresi verileri işlenirken bir hatayla karşılaşıldı.",
      "ErrorParsingApiDataErrorMessage": "API verileri ayrıştırılırken bir hatayla karşılaşıldı.",
      "UnkownPerformanceDataErrorMessage": "Bilinmeyen bir hata oluştu: {0}",
      "DefaultWebPartName": "Web Bölümü",
      "ServerResponseLabel": "Sunucu Yanıtı",
      "ApplicationInitializationLabel": "Uygulama Başlatma",
      "ScriptFetchEvalLabel": "Betikleri getirme ve değerlendirme",
      "SpLoaderStartLabel": "SPFx başlatma",
      "PageRenderLabel": "Sayfa İşleme",
      "LeftNavRenderLabel": "Sol Gezinti İşleyicisi",
      "CanvasRenderLabel": "Tuval İşleme",
      "LayoutRenderLabel": "Düzeni İşleme",
      "RedirectResponseLabel": "Yeniden Yönlendirme Yanıtı",
      "AppLoadLabel": "Uygulama Yükleme",
      "RenderWebPartsLabel": "Web Bölümleri İşleyicisi",
      "TotalRenderTimeLabel": "Toplam",
      "GeneralErrorMessage": "Performans verileri alınırken bir sorun oluştu.",
      "ErrorMessagePrefix": "Hata İletisi: {0}",
      "PerformanceDataHint": "Not: Web bölümünü ekledikten veya kaldırdıktan sonra, güncel performans verilerini görmek için sayfayı yenileyin.",
      "ModulesLoadedLegendLabel": "Yüklü Modüller",
      "InitializationLegendLabel": "Başlatma",
      "RenderTimeLegendLabel": "İşleme Süresi",
      "InitializationTimeLabel": "Başlatma süresi",
      "ModuleLoadingTimeLabel": "Modül yükleme süresi",
      "ModuleLazyLoadingDelayLabel": "Modül yükleme işlemi gecikti",
      "DataFetchTimeLabel": "Veri alma süresi",
      "DataFetchLegendLabel": "Veri Alma",
      "ItemsColumnHeader": "Öğeler",
      "DurationColumnHeader": "Süre",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Yok"
    }
  };

  strings.default = strings;
  return strings;
});