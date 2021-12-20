import * as React from "react";

import { IVideoSectionData, DividerLine } from "..";
import { VideoHeader } from "./header";
import { ReadMore } from "./readMore";
import VideosHolder from "./videos";

interface IVideoLayoutProps {
  data: IVideoSectionData;
}

export const VideoLayout: React.FunctionComponent<IVideoLayoutProps> = ({
  data,
}) => {
  return (
    <section className="container ">
      <VideoHeader text={data.text} authorName={data.authorName} />
      <DividerLine />
      <div className="position-relative">
        <VideosHolder data={data} />
        <ReadMore description={data.description} />
      </div>
    </section>
  );
};
