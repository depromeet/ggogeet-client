import { NextPage } from 'next';
import TopNavigation from '../components/common/TopNavigation';
import { NavBell, NavLogo } from '../components/common/TopNavigation/atoms';

const MainPage: NextPage = () => {
  return (
    <>
      <TopNavigation leftElem={<NavLogo />} rightElem={<NavBell />} />
    </>
  );
};

export default MainPage;
