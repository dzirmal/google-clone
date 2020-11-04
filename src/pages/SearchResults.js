import React from 'react';
import styled from 'styled-components';
import SearchResult from '../components/SearchResult';

function SearchResults({ term, data }) {
  console.log(data);
  return (
    <Container>
      <ResultCount>
        About {data?.searchInformation.formattedTotalResults} results (
        {data?.searchInformation.formattedSearchTime} seconds) for {term}
      </ResultCount>
      {data?.items.map((item, index) => (
        <SearchResult key={index} item={item} />
      ))}
    </Container>
  );
}

export default SearchResults;

const Container = styled.div`
  max-width: 650px;
  margin-top: 20px;
  margin-left: 240px;
  margin-bottom: 100px;
`;

const ResultCount = styled.p`
  color: #70757a;
  font-size: 14px;
  margin-left: 5px;
`;
