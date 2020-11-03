import Styled from './Display.styled';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMovieNowPlaingAsync,
  getMoviePopularAsync,
  getMovieUpcomingAsync,
} from '../../../module/Movie/actions';
import { RootState } from '../../../module';
import { nowPlaying_Result } from '../../../lib/api/apiType';
import DisplayItem from '../../../components/common/DisplayItem/DisplayItem';
import SelectForm from '../../../components/common/SelectForm/SelecteForm';
import { PosterProp } from '../../../module/Select/Select';

function Movie() {
  const { nowPlaying, select } = useSelector((state: RootState) => ({
    nowPlaying: state.movie.data.nowPlaying,
    select: state.select,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieNowPlaingAsync.request('nowPlaying'));
  }, []);

  const renderNow = useCallback(
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
    [nowPlaying],
  );

  const renderSelect = useCallback(
    (result: PosterProp) => {
      return (
        <DisplayItem
          key={result.id}
          id={result.id.toString()}
          bgUrl={result.bgUrl}
          title={result.title}
          rating={result.rating}
        ></DisplayItem>
      );
    },
    [select],
  );
  if (!nowPlaying) {
    return <div>What</div>;
  }

  return (
    <>
      <Styled.DisPlayBlockWrapper>
        {nowPlaying.results && (
          <>
            <Styled.DisplayBlockTitle>Now Playing</Styled.DisplayBlockTitle>
            <Styled.DisplayBLockItemContainer>
              {nowPlaying.results.map(result => renderNow(result))}
            </Styled.DisplayBLockItemContainer>
          </>
        )}
      </Styled.DisPlayBlockWrapper>
      <SelectForm>{select.map(result => renderSelect(result))}</SelectForm>
    </>
  );
}

export default Movie;
