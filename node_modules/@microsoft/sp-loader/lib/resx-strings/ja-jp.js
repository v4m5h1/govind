define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "このページ上のアプリケーションを読み込むことができません。ブラウザーの [戻る] ボタンを使用して、もう一度お試しください。問題が解決しない場合は、サイトの管理者に問い合わせて、技術的な詳細情報を提供してください",
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
      "listSeparator": "、"
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "デバッグ スクリプトの読み込み中にエラーが発生しました。サーバーが実行中で、\"{0}\" パラメーターの URL が正しいことを確認してください。",
      "errorLoadingDebugScriptHTTP": "デバッグ スクリプトの読み込み中にエラーが発生しました。サーバーが実行中で、\"{0}\" パラメーターの URL が正しいことを確認し、安全でないスクリプトの読み込みが許可されていることを確認してください。開発証明書を使用して、HTTPS 経由でのデバッグ スクリプトを提供することを検討してください。",
      "errorLoadingDebugScriptMalformed": "デバッグ スクリプトの読み込み中にエラーが発生しました。デバッグの URL ({0}) が不正な形式である可能性があります。",
      "errorLoadingDebugScriptUnknown": "デバッグ スクリプトの読み込み中に不明なエラーが発生しました。",
      "errorLoadingDebugLoaderTitle": "デバッグ ローダーの読み込み中にエラーが発生しました。",
      "errorLoadingDebugManifestTitle": "デバッグのマニフェストを読み込み中にエラーが発生しました。",
      "errorLoadingUnknownTitle": "デバッグ スクリプトの読み込み中にエラーが発生しました。"
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "コンポーネントまたは初期化関数がありません。",
      "closeDeveloperToolsAriaLabel": "開発者ツールを閉じます。"
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "警告!",
      "warningLine1": "このツールを使用すると、潜在的なセキュリティに関する脅威が生じ、他のユーザーが個人の Office 365 データ (ドキュメント、メール、会話など) にアクセスできるようになります。続ける前に、このツールへのアクセスを求めたユーザーまたは組織を信頼できることを確認してください。",
      "warningLine2": "詳細情報: {0}"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "スクリプトのデバッグを許可しますか?",
      "allowDebugLoaderTitle": "デバッグ ローダーを許可しますか?",
      "allowDebugLoaderAndManifestsTitle": "デバッグ ローダーとデバッグ スクリプトを許可しますか?",
      "debugManifestLoadingWarning": "警告: このページには、安全ではないスクリプトが含まれていて、読み込むとお使いのコンピューターに損害を与える可能性があります。開発者を信頼し、危険性を理解している場合以外は、操作を続けないでください。",
      "debugManifestLoadingWarning2": "不明な場合は、{0} をクリックしてください。",
      "debugManifestLoadingConfirm": "デバッグ スクリプトを読み込む",
      "debugManifestLoadingCancel": "デバッグ スクリプトを読み込まない",
      "debugManifestLoadingCalloutText": "操作が不明な場合は、ここをクリックします。"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "デバッグのマニフェストの読み込み中にエラーが発生しました。",
      "debugManifestErrorDismissButtonText": "閉じる"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "読み込んでいます...",
      "developerToolsTabLoadingUnknownError": "開発者ツール モジュールの読み込み中に不明なエラーが発生しました。"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "トレース",
      "EmptyTraceData": "トレースが読み込まれませんでした。",
      "ExportCSVButtonLabel": "CSV にエクスポート",
      "LevelHeaderLabel": "レベル",
      "MessageHeaderLabel": "メッセージ",
      "ScopeHeaderLabel": "範囲",
      "SourceHeaderLabel": "ソース",
      "TimestampHeaderLabel": "タイムスタンプ",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "マニフェスト",
      "noManifestSelected": "マニフェストが選択されていません"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "パフォーマンス",
      "ErrorAccessingPerfDataErrorMessage": "パフォーマンス データを取得できません: オブジェクトが null または未定義です。",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP リダイレクトのパフォーマンス データへのアクセス中に問題が発生しました。",
      "ErrorParsingPercievedLatencyErrorMessage": "認識された遅延データの解析中にエラーが発生しました。",
      "ErrorParsingApiDataErrorMessage": "API データの解析中にエラーが発生しました。",
      "UnkownPerformanceDataErrorMessage": "不明なエラーが発生しました: {0}",
      "DefaultWebPartName": "Web パーツ",
      "ServerResponseLabel": "サーバーの応答",
      "ApplicationInitializationLabel": "アプリケーションの初期化",
      "ScriptFetchEvalLabel": "スクリプトの取得と評価",
      "SpLoaderStartLabel": "SPFx の初期化",
      "PageRenderLabel": "ページのレンダリング",
      "LeftNavRenderLabel": "左側のナビゲーションのレンダリング",
      "CanvasRenderLabel": "キャンバスのレンダリング",
      "LayoutRenderLabel": "レイアウト レンダリング",
      "RedirectResponseLabel": "リダイレクトの応答",
      "AppLoadLabel": "アプリケーションの読み込み",
      "RenderWebPartsLabel": "Web パーツのレンダリング",
      "TotalRenderTimeLabel": "合計",
      "GeneralErrorMessage": "申し訳ございません。パフォーマンス データの取得中に問題が発生しました。",
      "ErrorMessagePrefix": "エラー メッセージ: {0}",
      "PerformanceDataHint": "注: Web パーツの追加または削除後は、ページを更新して、更新されたパフォーマンス データをご確認ください。",
      "ModulesLoadedLegendLabel": "読み込まれたモジュール",
      "InitializationLegendLabel": "初期化",
      "RenderTimeLegendLabel": "レンダリング時間",
      "InitializationTimeLabel": "初期化の時間",
      "ModuleLoadingTimeLabel": "モジュールの読み込み時間",
      "ModuleLazyLoadingDelayLabel": "モジュールの読み込みの遅延",
      "DataFetchTimeLabel": "データのフェッチ時間",
      "DataFetchLegendLabel": "データのフェッチ",
      "ItemsColumnHeader": "項目",
      "DurationColumnHeader": "時間",
      "MillisecondsUnitLabel": "{0} ミリ秒",
      "NAPlaceholder": "該当なし"
    }
  };

  strings.default = strings;
  return strings;
});