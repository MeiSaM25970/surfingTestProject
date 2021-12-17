import { INavbarData } from "./navbar";

export interface IAppServices {
  getNavbarData: () => Promise<INavbarData>;
  getAbsoluteUrl: (path: string) => string;
}
