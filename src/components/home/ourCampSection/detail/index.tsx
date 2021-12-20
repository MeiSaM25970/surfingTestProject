import * as React from "react";
import { Link } from "react-router-dom";
import { IOurCampData } from "../..";

import styles from "./detail.module.css";
interface IDetailProps {
  detail: IOurCampData;
}

export const Detail: React.FunctionComponent<IDetailProps> = ({ detail }) => {
  const descriptionArr = detail.description.split("\n");
  return (
    <div className={`col-md-6 ${styles.holder}`}>
      <span className={styles.title}>{detail.title.toUpperCase()}</span>
      <div className={styles.description}>
        {descriptionArr.map((des, i) => (
          <p key={i}>{des}</p>
        ))}
      </div>
      <Link className={styles.ourCampLink} to="/ourCamp">
        {detail.getInTouch.toUpperCase()}
      </Link>
    </div>
  );
};
