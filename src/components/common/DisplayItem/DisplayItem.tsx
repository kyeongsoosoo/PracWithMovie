import React from 'react';
import { useDispatch } from 'react-redux';
import { selectSuccess } from '../../../module/Select/Select';
import Styled from './DisplayItem.styled';
import { ItemProp } from './type';

function DisplayItem({ bgUrl, title, rating, id }: ItemProp) {
  const dispatch = useDispatch();
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    dispatch(selectSuccess({ bgUrl, title, rating, id }));
  };

  return (
    <Styled.DisplayItemWrapper>
      <Styled.DisplayItemImgContainer
        bgUrl={`https://image.tmdb.org/t/p/w300${bgUrl}`}
      >
        <Styled.DisplayItemAddButton onClick={handleClick}>
          +
        </Styled.DisplayItemAddButton>
        <Styled.DispalyItemExtra>{`${rating}점 `}</Styled.DispalyItemExtra>
        <Styled.DisplayLink to={`movie/${id}`}></Styled.DisplayLink>
      </Styled.DisplayItemImgContainer>
      <Styled.DisplayItemText>{title}</Styled.DisplayItemText>
    </Styled.DisplayItemWrapper>
  );
}

export default DisplayItem;
