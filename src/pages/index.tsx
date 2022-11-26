import { NextPage } from 'next';
import { NavBell, NavLogo } from '../components/common/gnb';
import GNB from '../components/common/gnb/GNB';

const MainPage: NextPage = () => {
  return (
    <>
      <GNB left={<NavLogo />} right={<NavBell />} />
    </>
  );
};

export default MainPage;
