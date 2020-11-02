import React from 'react';
import Styled from './DisplayItem.styled';
import { ItemProp } from './type';

function DisplayItem({ bgUrl, title, rating, id }: ItemProp) {
  return (
    <Styled.DisplayItemWrapper>
      <Styled.DisplayItemImgContainer
        bgUrl={`https://image.tmdb.org/t/p/w300${bgUrl}`}
      >
        <Styled.DispalyItemExtra>{`${rating} `}</Styled.DispalyItemExtra>
        <Styled.DisplayLink to={`movie/${id}`}></Styled.DisplayLink>
      </Styled.DisplayItemImgContainer>
      <Styled.DisplayItemText>{title}</Styled.DisplayItemText>
    </Styled.DisplayItemWrapper>
  );
}

export default DisplayItem;
