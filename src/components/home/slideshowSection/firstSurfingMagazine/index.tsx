import * as React from "react";
import { SocialMedia } from "..";
import { IFirstSurfingMagazine } from "../..";

import styles from "./firstSurfing.module.css";
export const FirstSurfingMagazine: React.FunctionComponent<IFirstSurfingMagazine> =
  ({ socialMedia, text }) => {
    return (
      <div className={styles.holder}>
        <div className={styles.firstSurfingHolder}>
          <span className={styles.firstSurfingText}>{text}</span>
        </div>
        <div className={styles.socialMediaHolder}>
          <SocialMedia data={socialMedia} />
        </div>
      </div>
    );
  };
