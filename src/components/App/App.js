/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Online, Offline } from 'react-detect-offline';
import * as antd from 'antd';

import { arrayTickets } from '../../store/store';
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
    <div>
      <Online>
        <div className={s.App}>
          <LeftFilter />
          <div className={s.AppBody}>
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
      </Online>
      <Offline>
        <div className={s.App}>
          <div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <antd.Alert message="Warning" description={'Ops, check you connection...'} type="warning" showIcon />;
                <antd.Spin />
              </div>
            </ul>
          </div>
        </div>
      </Offline>
    </div>
  );
};

export default App;
