import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import styled from 'styled-components';
import DisplayItem from '../../components/common/DisplayItem/DisplayItem';
import useInput from '../../hooks/useInput';
import { nowPlaying_Result } from '../../lib/api/apiType';
import { RootState } from '../../module';
import { getSearchAsync } from '../../module/Search/action';

import Styled from './Search.styled';

function Search() {
  const { state, handleChange, handleReset } = useInput();
  const [localSearch, setSearch] = useState('');
  const dispatch = useDispatch();
  const { search } = useSelector(({ search }: RootState) => ({
    search: search.data,
  }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getSearchAsync.request(state));
    setSearch(state);
    handleReset();
    console.log(search);
    console.log(location);
  };

  const renderSearch = useCallback(
    (result: nowPlaying_Result) => {
      return (
        <DisplayItem
          key={result.id}
          id={result.id.toString()}
          bgUrl={result.poster_path}
          title={result.original_title}
          rating={result.vote_average}
        ></DisplayItem>
      );
    },
    [search],
  );

  if (!search) {
    return (
      <Styled.SearchForm onSubmit={handleSubmit}>
        <Styled.SearchInput
          placeholder="Write something"
          name="search"
          value={state}
          onChange={handleChange}
        />
      </Styled.SearchForm>
    );
  }

  return (
    <>
      <Styled.SearchResultTitle>{`Result for : ${localSearch}`}</Styled.SearchResultTitle>
      <Styled.SearchResultWrapper>
        <Styled.SearchResultContent>
          {search.results.map(result => renderSearch(result))}
        </Styled.SearchResultContent>
      </Styled.SearchResultWrapper>
    </>
  );
}

export default Search;
