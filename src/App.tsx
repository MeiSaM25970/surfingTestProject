import { useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage, NotFound } from "./pages";
import { Navbar } from "./components";
import { AppService, apiUrls } from "./services";
import { ServiceContext } from "./appContext";
import { INavbarData } from "./models";

import "./styles/App.css";

function App() {
  const service = useMemo(() => new AppService(apiUrls), []);
  const [navbarData, setNavbarData] = useState<INavbarData>();
  useEffect(() => {
    service.getNavbarData().then(setNavbarData);
  }, [service]);
  return (
    <ServiceContext.Provider value={service}>
      <Navbar {...navbarData} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ServiceContext.Provider>
  );
}

export default App;
