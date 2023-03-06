import { FC } from "react";

import { AppHeader } from "../../components/app-header/app-header";
import { Welcome } from "../../components/welcome/welcome";
import { AboutB2B } from "../../components/aboutb2b/aboutb2b";

const MainPage: FC = () => {
  return (
    <>
      <AppHeader />
      <Welcome />
      <AboutB2B />
    </>
  );
};

export { MainPage };
