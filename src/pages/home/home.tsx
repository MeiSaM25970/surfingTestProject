import React, { useEffect, useMemo, useState } from "react";
import {
  HomeService,
  HomeServiceContext,
  IHomePageData,
  SlideshowLayout,
} from "../../components/home";
import { apiUrls } from "../../services";

export const HomePage: React.FC = () => {
  const service = useMemo(() => new HomeService(apiUrls), []);
  const [homePageData, setHomePageData] = useState<IHomePageData>();
  useEffect(() => {
    service.getHomePageData().then(setHomePageData);
  }, []);
  if (!homePageData) {
    return <div className="loading">...Loading</div>;
  }
  return (
    <HomeServiceContext.Provider value={service}>
      <SlideshowLayout
        sliderData={homePageData.slideshowData}
        rightSectionData={homePageData.firstSurfingMagazine}
      />
    </HomeServiceContext.Provider>
  );
};
