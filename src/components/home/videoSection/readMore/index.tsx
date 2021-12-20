import * as React from "react";
import { Link } from "react-router-dom";

import styles from "./readMore.module.css";
interface IReadMoreProps {
  description: string;
}

export const ReadMore: React.FunctionComponent<IReadMoreProps> = ({
  description,
}) => {
  return (
    <div className={styles.holder}>
      <p>{description}</p>
      <Link to="/variousAspects">READ MORE</Link>
    </div>
  );
};
