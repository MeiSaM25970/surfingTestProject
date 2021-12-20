import * as React from "react";

import styles from "./shopHeader.module.css";
interface IShopHeaderProps {
  title: string;
  header: string;
}

export const ShopHeader: React.FunctionComponent<IShopHeaderProps> = ({
  title,
  header,
}) => {
  return (
    <div className={styles.holder}>
      <div className={styles.title}>{title.toUpperCase()}</div>
      <div className={styles.header}>{header}</div>
    </div>
  );
};
