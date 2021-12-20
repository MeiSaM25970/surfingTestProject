import * as React from "react";
import styles from "./background.module.css";
interface IBackgroundProps {
  url: string;
  top?: string;
  height: string;
}

export const Background: React.FunctionComponent<IBackgroundProps> = ({
  url,
  top,
  height,
}) => {
  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${url})`, top, height }}
    />
  );
};
