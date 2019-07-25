import * as React from "react";
import styles from "./StockTicker.module.scss";
import { IStockTickerProps } from "./IStockTickerProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class StockTicker extends React.Component<
  IStockTickerProps,
  {}
> {
  public render(): React.ReactElement<IStockTickerProps> {
    return (
      <div className={styles.stockTicker}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <p className={styles.description}>
                {escape(this.props.stockUrl)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
