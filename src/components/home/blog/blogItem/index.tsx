import * as React from "react";
import { Link } from "react-router-dom";

import { IBlogData, useHomeService } from "../..";
import styles from "./blog.module.css";
interface IBlogItemProps {
  data: IBlogData;
  type: "flex-row" | "flex-row-reverse";
  blogNumber: number;
}

export const BlogItem: React.FunctionComponent<IBlogItemProps> = ({
  type,
  data,
  blogNumber,
}) => {
  const service = useHomeService();
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${type} ${
        type === "flex-row" ? styles.blogHolder : styles.reverseBlogHolder
      }`}
    >
      <div
        className={
          type === "flex-row" ? styles.blogDetail : styles.blogDetailReverse
        }
      >
        <span className={styles.blogNumber}>
          {blogNumber < 10 ? `0${blogNumber}` : blogNumber}
        </span>
        <h2>{data.title}</h2>
        <p> {data.description}</p>
        <Link to={`/blogs/${data.id}`}>READ MORE</Link>
      </div>
      <div
        className={
          type === "flex-row" ? styles.imageHolder : styles.imageHolderReverse
        }
      >
        <img
          src={service?.getAbsoluteUrl(data.imageUrl)}
          alt={`blogImage-${data.id}`}
        />
        <div className={styles.imageDetail}>{data.imageDetail}</div>
      </div>
    </div>
  );
};
