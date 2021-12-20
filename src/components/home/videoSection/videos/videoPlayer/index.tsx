import React, { useState } from "react";
import ReactPlayer from "react-player";
import { VideoPreview } from "../videoPreview";

interface IVideoPlayerProps {
  videoUrl: string;
  previewImage: string;
  width?: string | number;
  height?: string | number;
  active: boolean;
}

export const VideoPlayer: React.FunctionComponent<IVideoPlayerProps> = ({
  videoUrl,
  previewImage,
  width,
  height,
  active,
}) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);

  return (
    <div className="position-relative">
      {isPlay ? (
        <ReactPlayer
          url={videoUrl}
          playing={isPlay}
          controls={true}
          width={(width as string).substring(0, (width as string).length - 2)}
          onEnded={() => setIsPlay(false)}
        />
      ) : (
        <VideoPreview
          onPlay={setIsPlay}
          image={previewImage}
          width={width as string}
          height={height as string}
          showPlayButton={active}
        />
      )}
    </div>
  );
};
