import axios from "axios";
import { ISocialMedia } from "../components";
import { IApiUrls, INavbarData, IAppServices } from "../models";

export class AppService implements IAppServices {
  constructor(public urls: IApiUrls) {
    this.urls = urls;
  }
  getNavbarData(): Promise<INavbarData> {
    return axios
      .get(this.urls.navbarData)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }
  getSocialMedia(): Promise<ISocialMedia[]> {
    return axios
      .get(this.urls.socialMedia)
      .then((res) => res.data)
      .catch((e) => console.log(e));
  }
  getAbsoluteUrl(path: string): string {
    return this.urls.host.concat(path);
  }
}
