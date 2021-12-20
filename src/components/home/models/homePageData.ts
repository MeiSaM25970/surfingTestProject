import {
  IBlogData,
  IFirstSurfingMagazine,
  IOurCampData,
  IShopSectionData,
  ISlideshowData,
  IVideoSectionData,
} from ".";
import { IJoinTheClubData } from "./joinTheClubData";

export interface IBackgroundImage {
  firstBackground: string;
  secondBackground: string;
}
export interface IHomePageData {
  homePageBackground: IBackgroundImage;
  slideshowData: ISlideshowData[];
  firstSurfingMagazine: IFirstSurfingMagazine;
  videoSection: IVideoSectionData;
  shopSection: IShopSectionData;
  blogs: IBlogData[];
  joinClubSection: IJoinTheClubData;
  ourCampData: IOurCampData;
}
