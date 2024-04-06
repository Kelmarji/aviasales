import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import h from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const filterTickets = useSelector((state) => state.filterTickets);

  const loaded = useSelector(({ loadedTickets }) => loadedTickets);
  const dispChanger = (txt) => {
    const type = `change_tickets_filter_${txt}`;
    dispatch({ type });
  };

  return (
    <div>
      {loaded ? null : <Spin style={{ position: 'absolute', top: '10%' }} />}
      <div className={h.headerContainer}>
        <button
          className={filterTickets === 'cheap' ? `${h.btnHeader} ${h.active}` : h.btnHeader}
          value="CHEAP"
          onClick={(e) => {
            dispChanger(e.target.value);
          }}
        >
          Самый дешёвый
        </button>
        <button
          className={filterTickets === 'faster' ? `${h.btnHeader} ${h.active}` : h.btnHeader}
          value="FASTER"
          onClick={(e) => {
            dispChanger(e.target.value);
          }}
        >
          Самый быстрый
        </button>
        <button
          className={filterTickets === 'optimal' ? `${h.btnHeader} ${h.active}` : h.btnHeader}
          value="OPTIMA"
          onClick={(e) => {
            dispChanger(e.target.value);
          }}
        >
          Оптимальный
        </button>
      </div>
    </div>
  );
};

export default Header;
