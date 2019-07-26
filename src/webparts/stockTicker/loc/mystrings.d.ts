declare interface IStockTickerWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  StockUrlFieldLabel: string;
  LoadingDataLabel: string;
}

declare module "StockTickerWebPartStrings" {
  const strings: IStockTickerWebPartStrings;
  export = strings;
}
