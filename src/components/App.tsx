import React from 'react';
import { Route } from 'react-router';
import Detail from '../features/Detail';
import Movie from '../features/Movie/DisplayBlock/DisplayBlock';
import Search from '../features/Search';

import Tab from './common/Tab';

function App() {
  return (
    <>
      <Tab />
      <Route path="/" exact component={Movie} />
      <Route path="/search" exact component={Search} />
      <Route path="/movie/:id" exact component={Detail} />
    </>
  );
}

export default App;
