import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { loginFalse } from '../../../module/Login/login';
import Styled from './Tab.styled';

function Tab(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const pathName = useLocation().pathname;

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch(loginFalse());
    history.push('/');
  };
  return (
    <>
      <Styled.TabWrapper>
        <Styled.TabItemWrapper istabhere={pathName === '/movie'}>
          <Styled.TabLink to="/movie" istabhere={pathName === '/movie'}>
            Movie
          </Styled.TabLink>
        </Styled.TabItemWrapper>
        <Styled.TabItemWrapper istabhere={pathName === '/search'}>
          <Styled.TabLink to="/search" istabhere={pathName === '/search'}>
            Search
          </Styled.TabLink>
        </Styled.TabItemWrapper>
        <Styled.TabLogout onClick={handleClick}>Logout</Styled.TabLogout>
      </Styled.TabWrapper>
      <Styled.Spacer />
    </>
  );
}

export default Tab;
