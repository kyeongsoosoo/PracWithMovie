import Styled from './Display.styled';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMovieNowPlaingAsync,
  getMoviePopularAsync,
  getMovieUpcomingAsync,
} from '../../../module/Movie/actions';
import { RootState } from '../../../module';
import { nowPlaying_Result } from '../../../lib/api/apiType';
import DisplayItem from '../../../components/common/DisplayItem/DisplayItem';

function Movie() {
  const { nowPlaying } = useSelector((state: RootState) => ({
    nowPlaying: state.movie.data.nowPlaying,
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
          bgUrl={result.poster_path}
          title={result.original_title}
          rating={result.vote_average}
          year={result.release_date}
        ></DisplayItem>
      );
    },
    [nowPlaying],
  );
  if (!nowPlaying) {
    return <div>What</div>;
  }

  return (
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
  );
}

export default Movie;
