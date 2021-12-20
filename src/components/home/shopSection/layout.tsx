import * as React from "react";
import { Link } from "react-router-dom";
import { IShopSectionData } from "..";
import { BoardsSlider } from "./boardesSlider";
import { ShopHeader } from "./header";
import styles from "./layout.module.css";
interface IShopLayoutProps {
  data: IShopSectionData;
}

export const ShopLayout: React.FunctionComponent<IShopLayoutProps> = ({
  data,
}) => {
  return (
    <section>
      <ShopHeader title={data.title} header={data.header} />
      <BoardsSlider boards={data.surfboards} />
      <Link to={"/shop"} className={`${styles.showAll} mx-auto d-block`}>
        SHOW ALL
      </Link>
    </section>
  );
};
