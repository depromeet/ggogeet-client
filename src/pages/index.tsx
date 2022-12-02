import { NextPage } from "next";
import TopNavigation from "../components/common/TopNavigation";
import { NavLogo, NavMenu } from "../components/common/TopNavigation/Atoms";

const MainPage: NextPage = () => {
  return (
    <>
      <TopNavigation leftElem={<NavLogo />} rightElem={<NavMenu />} />
    </>
  );
};

export default MainPage;
