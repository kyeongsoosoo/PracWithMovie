import styled from 'styled-components';

const DisPlayBlockWrapper = styled.div`
  width: 100%;
  height: 550px;
`;

const DisplayBlockTitle = styled.div`
  height: 100px;
`;

const DisplayBLockItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(100px, 1fr));
  grid-template-rows: repeat(2, 200px);
  grid-auto-flow: column;
  grid-gap: 25px;
  overflow-x: auto;
  width: 100%;
  height: 450px;
`;

export default {
  DisPlayBlockWrapper,
  DisplayBlockTitle,
  DisplayBLockItemContainer,
};
