import * as React from "react";
import { SocialMedia } from "..";
import { IFirstSurfingMagazine } from "../..";

import styles from "./firstSurfing.module.css";
export const FirstSurfingMagazine: React.FunctionComponent<IFirstSurfingMagazine> =
  ({ socialMedia, text }) => {
    return (
      <>
        <span className={styles.firstSurfingText}>{text?.toUpperCase()}</span>
        <div className={styles.socialMediaHolder}>
          <SocialMedia data={socialMedia} />
        </div>
      </>
    );
  };
