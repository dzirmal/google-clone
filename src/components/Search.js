import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { useStateValue } from '../stateProvider/StateProvider';
import { actionTypes } from '../stateProvider/reducer';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';

function Search({ hideButtons = false }) {
  const [input, setInput] = useState('');
  const history = useHistory();
  const [{}, dispatch] = useStateValue();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push('/search');
  };

  return (
    <Form onSubmit={search}>
      <InputContainer>
        <SearchIcon style={{ color: 'gray' }} />
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon style={{ color: 'gray' }} />
      </InputContainer>
      {!hideButtons ? (
        <Btn>
          <Button
            type='submit'
            variant='outlined'
            style={{
              margin: '5px',
              padding: '7px 15px',
              backgroundColor: '#f8f8f8',
              border: '1px, solid white',
              textTransform: 'inherit',
            }}>
            Google Search
          </Button>
          <Button
            variant='outlined'
            style={{
              margin: '5px',
              padding: '7px 15px',
              backgroundColor: '#f8f8f8',
              border: '1px, solid white',
              textTransform: 'inherit',
            }}>
            I'm Feeling Lucky
          </Button>
        </Btn>
      ) : (
        <Btn>
          <Button
            type='submit'
            style={{
              display: 'none',
            }}>
            Google Search
          </Button>
          <Button
            style={{
              display: 'none',
            }}>
            I'm Feeling Lucky
          </Button>
        </Btn>
      )}
    </Form>
  );
}

export default Search;

const Form = styled.form``;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  height: 30px;
  padding: 10px 20px;
  border-radius: 999px;
  width: 75vw;
  margin: 0 auto;
  /* margin-top: 40px; */
  max-width: 560px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 20px;
  border: none;
  &:focus {
    outline-width: 0;
  }
`;

const Btn = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
