import styled from '@emotion/styled';
import { NextPage } from 'next';
import { NavBell, NavLogo } from '../components/common/atoms';
import GNB from '../components/common/GNB';

const MainPage: NextPage = () => {
  return (
    <MainLayout>
      <GNB left={<NavLogo />} right={<NavBell />} />
      <Profile></Profile>
      <Guide></Guide>
      <Messages></Messages>
      <Reports></Reports>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  width: 100%;
  max-width: 470px;
`;

const Profile = styled.section``;

const Guide = styled.section``;

const Messages = styled.section``;

const Reports = styled.section``;

export default MainPage;
