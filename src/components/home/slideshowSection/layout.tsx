import React from "react";
import { ISlideshowData, IFirstSurfingMagazine } from "..";
import { FirstSurfingMagazine, Slideshow } from ".";

interface ISlideshowLayoutProps {
  sliderData: ISlideshowData[];
  rightSectionData: IFirstSurfingMagazine;
}

export const SlideshowLayout: React.FC<ISlideshowLayoutProps> = ({
  sliderData,
  rightSectionData,
}) => {
  return (
    <section className="position-relative">
      <Slideshow sliderData={sliderData} />
      <FirstSurfingMagazine {...rightSectionData} />
    </section>
  );
};
