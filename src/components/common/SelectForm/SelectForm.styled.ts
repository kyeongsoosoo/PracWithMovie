import styled, { css } from 'styled-components';

type OpenProp = {
  open: boolean;
  chiledren?: React.ReactNode;
};

const SelectFormCircleButton = styled.button<OpenProp>`
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
  transform: translate(-5px, -40px);
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
      transform: translate(795px, -40px) rotate(45deg);
    `}
`;

const SelectFormPositioner = styled.div`
  width: 100%;
  height: 200px;
  bottom: 0;
  left: 0;
  position: relative;
`;

const SelectFormText = styled.div`
  width: 100px;
  height: 100px;
  color: black;
  position: absolute;
  z-index: 2;
`;

const SelectFormBox = styled.div<OpenProp>`
  width: 100%;
  height: 200px;
  background: #ced4da;
  transform: translateX(-1200px);
  position: absolute;
  transition: 0.5s all ease-in;
  ${props =>
    props.open &&
    css`
      transform: translateX(-400px);
    `}
`;

export default {
  SelectFormBox,
  SelectFormCircleButton,
  SelectFormPositioner,
  SelectFormText,
};
