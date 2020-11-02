import React from 'react';
import Styled from './SelectForm.styled';

function SelectForm() {
  return (
    <>
      <Styled.SelectFormPositioner>
        <Styled.SelectFormBox />
        <Styled.SelectFormCircleButton>+</Styled.SelectFormCircleButton>
      </Styled.SelectFormPositioner>
    </>
  );
}

export default SelectForm;
