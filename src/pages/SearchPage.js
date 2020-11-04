import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../stateProvider/StateProvider';
// import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

// Material UI
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import SearchResults from './SearchResults';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // This is the Live API call from google
  // const { data } = useGoogleSearch(term);
  // console.log('data: ', data);

  // This is the Mack for getting results from saved data
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
          <SearchPageOptions>
            <OptionsLeft>
              <Option>
                <SearchIcon />
                <Links to='/all'>All</Links>
              </Option>
              <Option>
                <DescriptionIcon />
                <Links to='/new'>News</Links>
              </Option>
              <Option>
                <ImageIcon />
                <Links to='/images'>Images</Links>
              </Option>
              <Option>
                <LocalOfferIcon />
                <Links to='/shopping'>Shopping</Links>
              </Option>
              <Option>
                <RoomIcon />
                <Links to='/maps'>maps</Links>
              </Option>
              <Option>
                <MoreVertIcon />
                <Links to='/more'>more</Links>
              </Option>
            </OptionsLeft>
            <OptionsRight>
              <Option>
                <Links to='/sittings'>Settings</Links>
              </Option>
              <Option>
                <Links to='/tools'>Tools</Links>
              </Option>
            </OptionsRight>
          </SearchPageOptions>
        </HeaderCenter>
        <Left>
          <AppsIcon style={{ marginRight: '20px', color: 'gray' }} />
          <Avatar
            src='https://lh3.googleusercontent.com/ogw/ADGmqu-q4Hg3SA_E3m5NA7YWiEC-OcS2DAiA1t-_2-kj=s32-c-mo'
            alt='Your Google Avatar'
            style={{}}
          />
        </Left>
      </Header>
      {term && <SearchResults term={term} data={data} />}
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

const SearchPageOptions = styled.div`
  display: flex;
  align-items: center;
  color: gray;
`;

const OptionsLeft = styled.div`
  display: flex;
`;
const OptionsRight = styled.div`
  display: flex;
  margin-left: 80px;
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: gray;
  margin-left: 5px;
`;

const HeaderCenter = styled.div`
  /* & > Search {
    margin-top: 0;
    width: unset;
    margin: unset;
    max-width: unset;
  } */
`;

const Left = styled.div`
  display: flex;
`;

const ImageLogo = styled.img`
  object-fit: contain;
  height: 70px;
  margin-right: 50px;
`;
