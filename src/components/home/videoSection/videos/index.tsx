import * as React from "react";

import { IVideoSectionData, useHomeService } from "../..";
import { VideoPlayer } from "./videoPlayer";

import styles from "./videoHolder.module.css";
interface IVideosHolderProps {
  data: IVideoSectionData;
}

const VideosHolder: React.FunctionComponent<IVideosHolderProps> = ({
  data,
}) => {
  const [activeLeftVideo, setActiveLeftVideo] = React.useState<boolean>(false);
  const [activeRightVideo, setActiveRightVideo] = React.useState<boolean>(true);
  const service = useHomeService()!;

  return (
    <div className={styles.holder}>
      {/* left video */}
      <div
        className={`${styles.leftVideo} ${activeLeftVideo && styles.active}`}
        onClick={() => {
          setActiveRightVideo(false);
          setActiveLeftVideo(true);
        }}
      >
        <VideoPlayer
          videoUrl={service.getAbsoluteUrl(data.leftVideoUrl)}
          previewImage={service.getAbsoluteUrl(data.leftVideoPreviewImage)}
          width="556px"
          height="370px"
          active={activeLeftVideo}
        />
      </div>
      {/* right video */}
      <div
        className={`${styles.rightVideo} ${activeRightVideo && styles.active}`}
        onClick={() => {
          setActiveRightVideo(true);
          setActiveLeftVideo(false);
        }}
      >
        <VideoPlayer
          videoUrl={service.getAbsoluteUrl(data.rightVideoUrl)}
          previewImage={service.getAbsoluteUrl(data.rightVideoPreviewImage)}
          width="660px"
          height="520px"
          active={activeRightVideo}
        />
      </div>
      {/* read more */}
    </div>
  );
};

export default VideosHolder;
