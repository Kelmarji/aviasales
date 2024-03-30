import React from 'react';
import * as a from 'antd';

import Header from '../Header';
import LeftFilter from '../LeftFilter';
import TicketList from '../TicketsList';

import s from './App.module.scss';

const App = () => {
  return (
    <div className={s.App}>
      <LeftFilter />
      <div>
        <Header />
        <TicketList />
        <a.Button />
      </div>
    </div>
  );
};

export default App;
