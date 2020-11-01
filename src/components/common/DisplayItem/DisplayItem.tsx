import React from 'react';
import Styled from './DisplayItem.styled';
import { ItemProp } from './type';

function DisplayItem({ bgUrl, title, rating, year }: ItemProp) {
  return (
    <Styled.DisplayItemWrapper>
      <Styled.DisplayItemImg
        bgUrl={`https://image.tmdb.org/t/p/w300${bgUrl}`}
      />
      <Styled.DispalyItemExtra>{`${rating} `}</Styled.DispalyItemExtra>
      <Styled.DisplayItemText>{title}</Styled.DisplayItemText>
    </Styled.DisplayItemWrapper>
  );
}

export default DisplayItem;
