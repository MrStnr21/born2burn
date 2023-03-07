import { FC } from "react";

import { AppHeader } from "../../components/app-header/app-header";
import { Welcome } from "../../components/main/welcome/welcome";
import { AboutB2B } from "../../components/main/aboutb2b/aboutb2b";
import { Members } from "../../components/main/members/members";
import { Footer } from "../../components/footer/footer";

const MainPage: FC = () => {
  return (
    <>
      <AppHeader />
      <Welcome />
      <AboutB2B />
      <Members />
      <Footer />
    </>
  );
};

export { MainPage };
