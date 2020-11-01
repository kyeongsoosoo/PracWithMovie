import React from 'react';
import { useLocation } from 'react-router';
import Styled from './Tab.styled';

function Tab(): JSX.Element {
  const pathName = useLocation().pathname;

  return (
    <>
      <Styled.TabWrapper>
        <Styled.TabItemWrapper istabhere={pathName === '/'}>
          <Styled.TabLink to="/" istabhere={pathName === '/'}>
            Movie
          </Styled.TabLink>
        </Styled.TabItemWrapper>
        <Styled.TabItemWrapper istabhere={pathName === '/tv'}>
          <Styled.TabLink to="/tv" istabhere={pathName === '/tv'}>
            TV
          </Styled.TabLink>
        </Styled.TabItemWrapper>
        <Styled.TabItemWrapper istabhere={pathName === '/search'}>
          <Styled.TabLink to="/search" istabhere={pathName === '/search'}>
            Search
          </Styled.TabLink>
        </Styled.TabItemWrapper>
      </Styled.TabWrapper>
      <Styled.Spacer />
    </>
  );
}

export default Tab;
