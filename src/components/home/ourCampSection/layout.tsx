import * as React from "react";
import { IOurCampData, useHomeService } from "..";
import { Detail } from "./detail";

import styles from "./layout.module.css";

interface IOurCampLayoutProps {
  data: IOurCampData;
}
export const OurCampLayout: React.FunctionComponent<IOurCampLayoutProps> = ({
  data,
}) => {
  const service = useHomeService()!;
  return (
    <section className={`row ${styles.sectionHolder}`}>
      <img
        src={service.getAbsoluteUrl(data.imageUrl)}
        alt="our camp"
        className="col-md-6"
      />
      <Detail detail={data} />
    </section>
  );
};
