export interface ISurfboardData {
  image: string;
  title: string;
  name: string;
  price: number;
  id: string;
}

export interface IShopSectionData {
  title: string;
  header: string;
  surfboards: ISurfboardData[];
  surfBoardBgUrl: string;
}
