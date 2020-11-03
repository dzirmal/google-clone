import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import SearchPage from './SearchPage';

function Home() {
  return (
    <ContainerHome>
      <HomeBody>
        <Image src='http://pngimg.com/uploads/google/google_PNG19642.png' />
        <Search hideButtons />
      </HomeBody>
    </ContainerHome>
  );
}

export default Home;

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Image = styled.img`
  object-fit: contain;
  height: 330px;
`;

const HomeBody = styled.div`
  flex: 1;
  display: flex;
  margin-top: 10%;
  flex-direction: column;
`;
