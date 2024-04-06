import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { arrayTickets } from '../store/store';
import Header from '../Header';
import LeftFilter from '../LeftFilter';
import TicketList from '../TicketsList';

import s from './App.module.scss';

const App = () => {
  const disp = useDispatch();
  useEffect(() => {
    disp(arrayTickets());
  }, []);
  return (
    <div className={s.App}>
      <LeftFilter />
      <div>
        <Header />
        <TicketList />
        <button
          className={s.moreTicket}
          onClick={() => {
            disp({ type: 'sliceMore' });
          }}
        >
          Показать еще 5 билетов!
        </button>
      </div>
    </div>
  );
};

export default App;

/* 
  left filter width more
  font weight more
  footer btn
*/
