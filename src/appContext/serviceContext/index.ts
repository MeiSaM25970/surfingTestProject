import { createContext, useContext } from "react";
import { IAppServices } from "../../models/services";

export const ServiceContext = createContext<IAppServices | undefined>(
  undefined
);
export const useServices = () => useContext(ServiceContext);
