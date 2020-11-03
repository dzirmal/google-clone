import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

function Header() {
  return (
    <Container>
      <Left>
        <LinkStyle to='about'>About</LinkStyle>
        <LinkStyle to='store'>Store</LinkStyle>
      </Left>
      <Center></Center>
      <Right>
        <LinkStyle to='gmail'>Gmail</LinkStyle>
        <LinkStyle to='images'>Images</LinkStyle>
        <AppsIcon style={{ marginRight: '20px', color: 'gray' }} />
        <Avatar
          src='https://lh3.googleusercontent.com/ogw/ADGmqu-q4Hg3SA_E3m5NA7YWiEC-OcS2DAiA1t-_2-kj=s32-c-mo'
          alt='Your Google Avatar'
          style={{}}
        />
      </Right>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
`;

const Center = styled.div``;

const Right = styled.div`
  display: flex;
  align-items: center;
  min-width: 13vw;
  justify-content: space-between;
  &.MuiSvgIcon {
    margin-right: 20px;
    color: gray;
  }
`;

const LinkStyle = styled(Link)`
  margin-right: 20px;
  color: rgba(0, 0, 0, 0.87);
  text-decoration: inherit;
  font-size: 15px;
  &:hover {
    text-decoration: underline;
  }
`;
