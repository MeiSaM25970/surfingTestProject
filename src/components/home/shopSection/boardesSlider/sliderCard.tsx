import * as React from "react";
import { Link } from "react-router-dom";
import { ISurfboardData, useHomeService } from "../..";

import styles from "./sliderCard.module.css";
interface ISliderCardProps {
  data: ISurfboardData;
}

export const SliderCard: React.FunctionComponent<ISliderCardProps> = ({
  data,
}) => {
  const service = useHomeService()!;
  return (
    <Link
      to={`/shop/product/${data.id}`}
      className={`${styles.cardHolder} d-flex justify-content-start position-relative`}
    >
      <img src={service.getAbsoluteUrl(data.image)} alt={`card-${data.id}`} />

      <div className={`${styles.productDetail} my-auto`}>
        <h6 className={styles.title}>{data.title.toUpperCase()}</h6>
        <h3 className={styles.productName}>{data.name}</h3>
        <span className={styles.price}>{`$ ${data.price}`}</span>
        <span className={styles.buy}>BUY</span>
      </div>
    </Link>
  );
};
