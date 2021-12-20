import * as React from "react";
import { IJoinTheClubData } from "../models";
import { JoinTheClubForm } from "./form";

import styles from "./joinClub.module.css";
interface IJoinClubLayoutProps {
  data: IJoinTheClubData;
}

export const JoinClubLayout: React.FunctionComponent<IJoinClubLayoutProps> = ({
  data,
}) => {
  return (
    <section>
      <h2 className={styles.header}>{data.header}</h2>
      <p className={` mx-auto d-block ${styles.description}`}>
        {data.description}
      </p>
      <JoinTheClubForm />
    </section>
  );
};
