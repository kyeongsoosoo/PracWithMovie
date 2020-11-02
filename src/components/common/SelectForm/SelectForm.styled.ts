import styled, { css } from 'styled-components';

const SelectFormCircleButton = styled.button`
  background: #38d9a9;

  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  color: white;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translate(15%, -50%);
  transition: 0.5s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const SelectFormPositioner = styled.div`
  width: 100%;
  height: 200px;
  bottom: 0;
  left: 0;
  position: relative;
`;

const SelectFormBox = styled.div`
  width: 100%;
  height: 200px;
  background: white;
  transform: translateX(-95%);
  position: absolute;
`;

export default {
  SelectFormBox,
  SelectFormCircleButton,
  SelectFormPositioner,
};
