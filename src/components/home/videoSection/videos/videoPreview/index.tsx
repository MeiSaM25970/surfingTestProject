import * as React from "react";
import styles from "./videoPreview.module.css";
interface IVideoPreviewProps {
  onPlay: (state: boolean) => void;
  image: string;
  width?: string;
  height?: string;
  showPlayButton: boolean;
}

export const VideoPreview: React.FunctionComponent<IVideoPreviewProps> = ({
  onPlay,
  image,
  width,
  height,
  showPlayButton,
}) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${image})`, width, height }}
        className="d-flex justify-content-center align-items-center"
      >
        {showPlayButton && (
          <span onClick={() => onPlay(true)} className={styles.playIcon}></span>
        )}
      </div>
      {/* <img src={image} alt="..." /> */}
    </div>
  );
};
