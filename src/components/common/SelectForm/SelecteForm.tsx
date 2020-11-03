import React, { useState } from 'react';
import Styled from './SelectForm.styled';

type formProp = {
  children: React.ReactNode;
};

function SelectForm({ children }: formProp) {
  const [open, setOpen] = useState(false);
  const handleClick = <P,>(e: P) => {
    setOpen(!open);
  };

  return (
    <>
      <Styled.SelectFormPositioner>
        <Styled.SelectFormBox open={open}>{children}</Styled.SelectFormBox>
        <Styled.SelectFormCircleButton onClick={handleClick} open={open}>
          +
        </Styled.SelectFormCircleButton>
      </Styled.SelectFormPositioner>
    </>
  );
}

export default SelectForm;
