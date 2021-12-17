export interface ISocialMedia {
  icon: string;
  link: string;
}

export interface IFirstSurfingMagazine {
  text?: string;
  socialMedia: ISocialMedia[];
}
