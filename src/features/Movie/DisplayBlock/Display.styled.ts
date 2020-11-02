import styled from 'styled-components';

const DisPlayBlockWrapper = styled.div`
  width: 100%;
  height: 550px;
`;

const DisplayBlockTitle = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
  height: 50px;
  font-size: 30px;
  font-weight: 800;
  color: white;
  letter-spacing: 1px;
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
