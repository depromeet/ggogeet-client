import { NextPage } from "next";
import TopNavigation from "../components/common/TopNavigation";
import { NavLogo, NavMenu } from "../components/common/TopNavigation/atoms";

const MainPage: NextPage = () => {
  return (
    <>
      <TopNavigation leftElem={<NavLogo />} rightElem={<NavMenu />} />
    </>
  );
};

export default MainPage;
