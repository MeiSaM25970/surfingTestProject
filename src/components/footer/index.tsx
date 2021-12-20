import * as React from "react";
import { Link } from "react-router-dom";
import { ISocialMedia, SocialMedia } from "..";
import { useServices } from "../../appContext";
import { INavbarData } from "../../models";
import styles from "./footer.module.css";
interface IFooterProps {
  data: INavbarData | undefined;
  socialMedias?: ISocialMedia[];
}

export const Footer: React.FunctionComponent<IFooterProps> = ({
  data,
  socialMedias,
}) => {
  const service = useServices()!;
  return (
    <footer className={styles.footer}>
      {data && socialMedias && (
        <>
          <img
            src={data.brandIcon ? service.getAbsoluteUrl(data.brandIcon) : ""}
            alt="brand icon"
            className={`${styles.brandIcon} d-block mx-auto`}
          />
          <div className={styles.itemsHolder}>
            {data.navbarItems?.map((item, index) => (
              <Link key={index} to={item.link}>
                {item.title}
              </Link>
            ))}
          </div>
          <div
            className={` d-flex justify-content-center ${styles.socialMediaHolder}`}
          >
            <SocialMedia data={socialMedias} />
          </div>
        </>
      )}
    </footer>
  );
};
