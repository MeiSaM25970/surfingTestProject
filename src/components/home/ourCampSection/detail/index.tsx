import * as React from "react";
import { Link } from "react-router-dom";
import { IOurCampData } from "../..";

import styles from "./detail.module.css";
interface IDetailProps {
  detail: IOurCampData;
}

export const Detail: React.FunctionComponent<IDetailProps> = ({ detail }) => {
  return (
    <div className={`col-md-6 ${styles.holder}`}>
      <span className={styles.title}>{detail.title.toUpperCase()}</span>
      <pre className={styles.description}>{detail.description}</pre>
      <Link className={styles.ourCampLink} to="/ourCamp">
        {detail.getInTouch.toUpperCase()}
      </Link>
    </div>
  );
};
