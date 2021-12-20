import axios from "axios";
import { IApiUrls } from "../../../models/apiUrls";
import { IHomePageData, IHomeService } from "../models";

export class HomeService implements IHomeService {
  constructor(public urls: IApiUrls) {
    this.urls = urls;
  }
  getHomePageData(): Promise<IHomePageData> {
    return axios
      .get(this.urls.homePageData)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }

  getAbsoluteUrl(path: string): string {
    return this.urls.host.concat(path);
  }
}
