import React from 'react';
import * as a from 'antd';

import Header from '../Header';
import LeftFilter from '../LeftFilter';

import s from './App.module.scss';

const App = () => {
  return (
    <div className={s.App}>
      <LeftFilter />
      <div>
        <Header />
        <div>Tickets</div>
        <a.Button />
      </div>
    </div>
  );
};

export default App;
