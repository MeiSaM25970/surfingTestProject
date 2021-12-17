import { IApiUrls } from "../models/apiUrls";
export const HOST = process.env.SERVICE_HOST_URL || "";
export const apiUrls: IApiUrls = {
  host: HOST,
  navbarData: HOST?.concat("/mockData/navbarData.json"),
  homePageData: HOST?.concat("/mockData/homePageData.json"),
};
