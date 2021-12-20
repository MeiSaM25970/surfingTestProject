import React from "react";
import { IBlogData } from "..";
import { BlogItem } from "./blogItem";

import styles from "./layout.module.css";
interface IBlogLayoutProps {
  data: IBlogData[];
}

export const BlogLayout: React.FC<IBlogLayoutProps> = ({ data }) => {
  return data ? (
    <section className={`container ${styles.section}`}>
      {data.map((blog, index) => {
        let blogType: "flex-row" | "flex-row-reverse";
        if (index % 2 === 0) {
          blogType = "flex-row";
        } else blogType = "flex-row-reverse";
        return (
          <BlogItem
            data={blog}
            key={index}
            type={blogType}
            blogNumber={index + 1}
          />
        );
      })}
    </section>
  ) : (
    <div />
  );
};
