import React from "react";
import styles from "./videoHeader.module.css";
interface IVideoHeaderProps {
  text: string;
  authorName: string;
}

export const VideoHeader: React.FunctionComponent<IVideoHeaderProps> = ({
  text,
  authorName,
}) => {
  return (
    <div className={`${styles.holder}`}>
      <h2 className="mx-auto d-block">{text}</h2>
      <span className="mx-auto d-block">{authorName.toUpperCase()}</span>
    </div>
  );
};
