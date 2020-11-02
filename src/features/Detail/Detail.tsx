import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router';
import { RootState } from '../../module';
import { getDetailAsync, detailReset } from '../../module/Detail/action';

import Styled from './Detail.styled';

type idProp = {
  id: string;
};

function Detail() {
  const { id }: idProp = useParams();
  const { result } = useSelector(({ detail }: RootState) => ({
    result: detail.data,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailAsync.request(id));
    return () => {
      dispatch(detailReset());
    };
  }, []);

  if (!result) {
    return <div className="">Hi</div>;
  }

  return (
    <>
      <Styled.DetailBackground
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Styled.DetailContentWrapper>
        <Styled.DetailPoster
          bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        />
        <Styled.DetailTextWrapper>
          <Styled.DetailTextHeaderWrapper>
            {result.original_title}
          </Styled.DetailTextHeaderWrapper>
          <Styled.DetailTextBodyWrapper>
            {result.overview}
          </Styled.DetailTextBodyWrapper>
        </Styled.DetailTextWrapper>
      </Styled.DetailContentWrapper>
    </>
  );
}

export default Detail;
