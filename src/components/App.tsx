import React from 'react';
import { Route } from 'react-router';
import Movie from '../features/Movie/DisplayBlock/DisplayBlock';

import Tab from './common/Tab';

function App() {
  return (
    <>
      <Tab />
      <Route path="/" exact component={Movie} />
    </>
  );
}

export default App;
