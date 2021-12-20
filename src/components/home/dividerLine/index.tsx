import * as React from "react";

import styles from "./dividerLine.module.css";
interface IDividerLineProps {
  marginTop?: string;
  marginBottom?: string;
}
export const DividerLine: React.FC<IDividerLineProps> = ({
  marginTop,
  marginBottom,
}) => {
  return (
    <div className={styles.lineHolder} style={{ marginBottom, marginTop }}>
      <span />
    </div>
  );
};
