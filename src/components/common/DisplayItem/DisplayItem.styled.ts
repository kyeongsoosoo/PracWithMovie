import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImgProp } from './type';

const DisplayItemWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 200px;
  font-size: 12px;
  color: white;
`;

const DispalyItemExtra = styled.div`
  with: 100px;
  hegiht: 20px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;
const DisplayItemImgContainer = styled.div<ImgProp>`
  background-image: url(${({ bgUrl }) => bgUrl});
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  width: 100px;
  height: 150px;
  position: relative;
  &: hover {
    ${DispalyItemExtra} {
      opacity: 1;
    }
    opacity: 0.3;
  }
`;

const DisplayItemText = styled.div`
  margin-top: 2.5px;
  width: 100px;
  height: 30px;
  font-size: 16px;
  font-weight: 800;
`;

const DisplayLink = styled(Link)`
  position: absolute;
  width: 100px;
  height: 200px;
`;

export default {
  DisplayItemImgContainer,
  DisplayItemWrapper,
  DisplayItemText,
  DispalyItemExtra,
  DisplayLink,
};
