import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TabType } from './TabType';

const TabWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 4.5rem;
`;

const TabItemWrapper = styled.div<TabType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 4.5rem;
  font-size: 1rem;
  color: white;
  background: #343a40;
  &:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.25);
  }
  border-bottom: 3px solid
    ${({ istabhere }) => (istabhere ? '#3498db' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
`;

const TabLink = styled(Link)<TabType>`
  display: flex;
  align-items: center;
  height: 4.5rem;
  font-size: 1rem;
  font-weight: 800;
  color: ${({ istabhere }) => (istabhere ? 'white' : 'grey')};
`;

const Spacer = styled.div`
  height: 4.5rem;
`;

export default {
  Spacer,
  TabWrapper,
  TabItemWrapper,
  TabLink,
};
