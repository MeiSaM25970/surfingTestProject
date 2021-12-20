import { IApiUrls } from "../models/apiUrls";
export const HOST = process.env.SERVICE_HOST_URL || "http://localhost:3000";
export const apiUrls: IApiUrls = {
  host: HOST,
  navbarData: HOST?.concat("/mockData/navbarData.json"),
  homePageData: HOST?.concat("/mockData/homePageData.json"),
  socialMedia: HOST?.concat("/mockData/socialMedia.json"),
};
