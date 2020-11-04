import React from 'react';
import styled from 'styled-components';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function SearchResult({ item }) {
  return (
    <Container>
      <A href={item.link}>
        {item.pagemap?.cse_image?.length > 0 &&
          item.pagemap?.cse_image[0]?.src && (
            <Image
              src={
                item.pagemap?.cse_image?.length > 0 &&
                item.pagemap?.cse_image[0]?.src
              }
              alt=''
            />
          )}
        {item.displayLink}
      </A>
      <ArrowDropDownIcon style={{ color: 'gray' }} />
      <Title href={item.link}>
        <h2>{item.title}</h2>
      </Title>
      <Snippet>{item.snippet}</Snippet>
    </Container>
  );
}

export default SearchResult;

const Container = styled.div`
  margin: 40px 5px;
`;

const A = styled.a``;

const Image = styled.img`
  object-fit: contain;
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

const Title = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Snippet = styled.p`
  margin-top: 10px;
  color: gray;
`;
