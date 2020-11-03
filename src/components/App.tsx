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
  const { loggedIn } = useSelector(({ login }: RootState) => ({
    loggedIn: login.user,
  }));

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
