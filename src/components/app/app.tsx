import { FC } from "react";

import { Routes, Route } from "react-router-dom";

import stylesApp from "./app.module.css";

import { MainPage } from "../../pages/main/main";

import { routesUrl } from "../utils/routesData";

const App: FC = () => {
  return (
    <div className={`${stylesApp.App}`}>
      <Routes>
        <Route path={routesUrl.homePage} element={<MainPage />}></Route>
      </Routes>
    </div>
  );
};

export { App };
