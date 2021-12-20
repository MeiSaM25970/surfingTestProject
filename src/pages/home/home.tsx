import React, { useEffect, useMemo, useState } from "react";
import {
  HomeService,
  HomeServiceContext,
  IHomePageData,
  SlideshowLayout,
  VideoLayout,
  ShopLayout,
  BlogLayout,
  DividerLine,
  JoinClubLayout,
  OurCampLayout,
} from "../../components/home";

import { apiUrls } from "../../services";
export const HomePage: React.FC = () => {
  const service = useMemo(() => new HomeService(apiUrls), []);
  const [homePageData, setHomePageData] = useState<IHomePageData>();

  useEffect(() => {
    service.getHomePageData().then(setHomePageData);
  }, [service]);
  if (!homePageData) {
    return <div className="loading">...Loading</div>;
  }
  return (
    <HomeServiceContext.Provider value={service}>
      <SlideshowLayout
        sliderData={homePageData.slideshowData}
        rightSectionData={homePageData.firstSurfingMagazine}
      />
      <div
        style={{
          background: `url(${service.getAbsoluteUrl(
            homePageData.homePageBackground.firstBackground
          )}) no-repeat center bottom`,
          backgroundSize: "130%",
        }}
      >
        <VideoLayout data={homePageData.videoSection} />
        <ShopLayout data={homePageData.shopSection} />
      </div>
      <div
        style={{
          background: `url(${service.getAbsoluteUrl(
            homePageData.homePageBackground.secondBackground
          )}) no-repeat center bottom`,
          backgroundSize: "130%",
        }}
      >
        <BlogLayout data={homePageData.blogs} />
        <DividerLine marginTop="103px" marginBottom="63px" />
        <JoinClubLayout data={homePageData.joinClubSection} />
        <OurCampLayout data={homePageData.ourCampData} />
      </div>
    </HomeServiceContext.Provider>
  );
};
