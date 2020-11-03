import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../stateProvider/StateProvider';
// import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // Test live API call
  // const { data } = useGoogleSearch(term);
  // console.log('data: ', data);

  const data = Response;
  // console.log('data: ', data);

  return (
    <Container>
      <Header>
        <Link to='/'>
          <ImageLogo
            src='http://pngimg.com/uploads/google/google_PNG19642.png'
            alt='Google Search'
          />
        </Link>
        <HeaderCenter className='searchPage__headerBody'>
          <Search hideButtons />
        </HeaderCenter>
      </Header>

      {/* <SearchResults></SearchResults> */}
    </Container>
  );
}

export default SearchPage;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  align-items: flex-start;
  padding: 30px;
  border-bottom: 1px solid lightgray;
`;

const HeaderCenter = styled.div`
  /* & > Search {
    margin-top: 0;
    width: unset;
    margin: unset;
    max-width: unset;
  } */
`;

const ImageLogo = styled.img`
  object-fit: contain;
  height: 70px;
  margin-right: 50px;
`;

const SearchResults = styled.div``;
