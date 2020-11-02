import React from 'react';
import styled from 'styled-components';
import { ImgProp } from './type';

const DetailBackground = styled.div<ImgProp>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${({ bgImage }) => bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const DetailContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  width: 100vw;
  position: relative;
  z-index: 1;
  height: 60vh;
`;

const DetailPoster = styled.div<ImgProp>`
  width: 50%;
  background-image: url(${({ bgImage }) => bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const DetailTextWrapper = styled.div`
  width: 50%;
  height: 100%;
`;

const DetailTextHeaderWrapper = styled.div`
  font-size: 40px;
`;

const DetailTextBodyWrapper = styled.div`
  font-size: 16px;
  opacity: 0.7;
  line-height: 1.5;
`;

export default {
  DetailBackground,
  DetailPoster,
  DetailTextBodyWrapper,
  DetailTextHeaderWrapper,
  DetailContentWrapper,
  DetailTextWrapper,
};
