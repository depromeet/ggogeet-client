import { NextPage } from 'next';
import { NavBell, NavLogo } from '../components/common/atoms';
import GNB from '../components/common/GNB';

const MainPage: NextPage = () => {
  return (
    <>
      <GNB left={<NavLogo />} right={<NavBell />} />
    </>
  );
};

export default MainPage;
