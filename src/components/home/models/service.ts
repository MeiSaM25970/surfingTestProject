import { IHomePageData } from ".";

export interface IHomeService {
  getHomePageData: () => Promise<IHomePageData>;
  getAbsoluteUrl: (path: string) => string;
}
