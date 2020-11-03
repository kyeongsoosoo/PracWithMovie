import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

import Detail from '../features/Detail';
import LogIn from '../features/LogIn/LogIn';
import Movie from '../features/Movie/DisplayBlock/DisplayBlock';
import Search from '../features/Search';
import { RootState } from '../module';

import Tab from './common/Tab';

function App() {
  // 이런 방법도 있습니다. 더 깔끔하죠?
  const loggedIn = useSelector((state: RootState) => state.login.user);

  // 라우팅을 App 컴포넌트에서 해주는 것도 방법이지만, Routes 폴더를 만들어서 그 안에 몰아두는것이 좋습니다.
  // Route는 프로젝트의 구조를 파악하기에 도움이 되는 파일이기 때문이죠
  return (
    <>
      {loggedIn && <Tab />}
      <Route
        path="/"
        exact
        render={() =>
          loggedIn ? <Redirect to="/movie" /> : <Redirect to="/login" />
        }
      />
      <Route path="/login" exact component={LogIn} />
      <Route path="/movie" exact component={Movie} />
      <Route path="/search" exact component={Search} />
      <Route path="/movie/:id" exact component={Detail} />
    </>
  );
}

export default App;
