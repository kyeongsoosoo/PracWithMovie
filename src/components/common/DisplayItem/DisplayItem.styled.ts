import styled from 'styled-components';
import { ImgProp } from './type';

const DisplayItemWrapper = styled.div`
  width: 100px;
  height: 200px;
`;

const DisplayItemImg = styled.div<ImgProp>`
  background-image: url(${({ bgUrl }) => bgUrl});
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  width: 100px;
  height: 150px;
`;

const DisplayItemText = styled.div`
  width: 100px;
  height: 30px;
`;

const DispalyItemExtra = styled.div`
  with: 100px;
  hegiht: 20px;
`;

export default {
  DisplayItemImg,
  DisplayItemWrapper,
  DisplayItemText,
  DispalyItemExtra,
};
