import { useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage, NotFound } from "./pages";
import { Footer, ISocialMedia, Navbar } from "./components";
import { AppService, apiUrls } from "./services";
import { ServiceContext } from "./appContext";
import { INavbarData } from "./models";

import "./styles/App.css";

function App() {
  const service = useMemo(() => new AppService(apiUrls), []);
  const [navbarData, setNavbarData] = useState<INavbarData>();
  const [socialMedias, setSocialMedias] = useState<ISocialMedia[]>();
  useEffect(() => {
    service
      .getNavbarData()
      .then(setNavbarData)
      .catch((e) => console.log(e));
    service
      .getSocialMedia()
      .then(setSocialMedias)
      .catch((e) => console.log(e));
  }, [service]);
  return (
    <ServiceContext.Provider value={service}>
      <Navbar {...navbarData} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer data={navbarData} socialMedias={socialMedias} />
    </ServiceContext.Provider>
  );
}

export default App;
