import { createContext, useContext } from "react";
import { IHomeService } from "../../models";

export const HomeServiceContext = createContext<IHomeService | undefined>(
  undefined
);
export const useHomeService = () => useContext(HomeServiceContext);
