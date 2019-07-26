import * as React from "react";
import styles from "./StockTicker.module.scss";
import { IStockTickerProps } from "./IStockTickerProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { HttpClient, HttpClientResponse } from "@microsoft/sp-http";
import { IAVResults, IAVResultsSeries } from "./AlphaVantageResults";
// import supporting types
import { IStockInformationData, IStockData } from "./IStockInformationData";
import { Spinner, SpinnerSize, Icon } from "office-ui-fabric-react";
import * as strings from "StockTickerWebPartStrings";
// import lodash = require("lodash");
import { forIn } from "@microsoft/sp-lodash-subset";

export default class StockTicker extends React.Component<
  IStockTickerProps,
  any
> {
  constructor(props: IStockTickerProps) {
    super(props);

    // set initial state for the component: not loading, no stock information
    this.state = {
      loading: false,
      stockInfo: {
        symbol: "Contoso Electronics",
        lastRefreshed: new Date(),
        lastData: {
          open: 110,
          high: 110,
          low: 110,
          close: 110,
          volume: 0
        },
        previousClose: 109.91
      }
    };
  }

  // on componentDidMount refresh data
  public componentDidMount(): void {
    this.getStockInformation(this.props.stockUrl);
  }

  // on componentWillReceiveProps refresh data
  public componentWillReceiveProps(nextProps): void {
    this.getStockInformation(nextProps.stockUrl);
  }

  private getStockInformation = (stockUrl: string) => {
    // get the current date and time
    const now: Date = new Date();

    // determine the date of the last work day
    const lastDay: Date = new Date(
      now.getTime() -
        24 * (now.getDay() === 0 ? 2 : now.getDay() === 1 ? 3 : 1) * 60 * 60000
    );
    const lastDayName: string = lastDay.toISOString().substring(0, 10);

    // get yesterday's closing price if it is not already in the local storage cache
    const dailyCloseKeyName: string = `PnP-Portal-AlphaVantage-Close-${lastDayName}`;

    // try to get the close price from the local session storage
    let closeValue: number = Number(sessionStorage.getItem(dailyCloseKeyName));

    this.props.httpClient
      .get(`${stockUrl}`, HttpClient.configurations.v1)
      .then(
        (res: HttpClientResponse): Promise<IAVResults> => {
          return res.json();
        }
      )
      .then(
        (stockData: IAVResults): void => {
          // if there are no errors and we have data
          if (
            !stockData["Error Message"] &&
            stockData["Meta Data"] &&
            stockData["Time Series (Daily)"]
          ) {
            // get yesterday date and time
            const yesterdayData: IAVResultsSeries =
              stockData["Time Series (Daily)"][lastDayName];
            closeValue = yesterdayData["4. close"];

            console.log(stockData);
            const timeSeries: Array<IAVResultsSeries> = new Array<
              IAVResultsSeries
            >();
            // parse response to retrieve the quotes
            forIn(
              stockData["Time Series (Daily)"],
              (value: IAVResultsSeries, key: string) => {
                timeSeries.push(value);
              }
            );
            // get the last data series from the AV service
            const lastAVDataSeries: IAVResultsSeries = timeSeries[0];
            // build the state variable to render the stock information
            const stockInfo: IStockInformationData = {
              symbol: stockData["Meta Data"]["2. Symbol"],
              lastRefreshed: now,
              lastData: {
                open: lastAVDataSeries["1. open"],
                high: lastAVDataSeries["2. high"],
                low: lastAVDataSeries["3. low"],
                close: lastAVDataSeries["4. close"],
                volume: lastAVDataSeries["5. volume"]
              },
              previousClose: closeValue
            };

            // set the state with the new stock information and stop the Spinner
            this.setState({
              loading: false,
              stockInfo: stockInfo
            });
          }
        }
      );
  };

  public render(): React.ReactElement<IStockTickerProps> {
    let contents: JSX.Element;
    if (this.state.loading) {
      // show the Spinner control while loading data
      contents = (
        <Spinner size={SpinnerSize.large} label={strings.LoadingDataLabel} />
      );
    } else {
      // show the Stock information, if we already have it
      const lastStockData: IStockData =
        this.state.stockInfo != null ? this.state.stockInfo.lastData : null;
      const previousClose: number =
        this.state.stockInfo != null ? this.state.stockInfo.previousClose : 0;
      const difference: number = lastStockData.close - previousClose;
      const differencePercent: number = (difference / previousClose) * 100;
      contents = (
        <div className={styles.stock}>
          <div className={styles.stockSymbol}>
            {this.state.stockInfo.symbol}
          </div>
          <div>
            <span className={styles.stockTrend}>
              {lastStockData.close > previousClose ? (
                <Icon iconName="Up" />
              ) : lastStockData.close < previousClose ? (
                <Icon iconName="Down" />
              ) : null}
            </span>
            <span className={styles.stockValue}>
              {parseFloat(lastStockData.close.toString()).toFixed(2)} USD
            </span>
          </div>
          <div className={styles.stockInfo}>
            <span>
              {difference >= 0 ? "+" : "-"}
              {parseFloat(difference.toString()).toFixed(2)}
            </span>
            <span>
              ({differencePercent >= 0 ? "+" : "-"}
              {parseFloat(differencePercent.toString()).toFixed(2)}%)
            </span>
            <span>
              {this.state.stockInfo.lastRefreshed.toLocaleTimeString()}
            </span>
          </div>
          <a
            href={`${this.props.stockUrl}`}
            className={styles.more}
            target="_blank"
          >
            <Icon iconName="NavigateExternalInline" />
          </a>
        </div>
      );
    }
    return <div className={styles.stockTicker}>{contents}</div>;
  }
}
