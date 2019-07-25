import { HttpClient } from "@microsoft/sp-http";

export interface IStockTickerProps {
  stockUrl: string;
  httpClient: HttpClient;
}
