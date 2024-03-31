import React from 'react';

import h from './Header.module.scss';

const Header = () => {
  return (
    <div className={h.headerContainer}>
      <button className={h.btnHeader} value="cheap">
        <h3>Самый дешёвый</h3>
      </button>
      <button className={h.btnHeader} value="faster">
        <h3>Самый быстрый</h3>
      </button>
      <button className={h.btnHeader} value="fiftyfifty">
        <h3>Оптимальный</h3>
      </button>
    </div>
  );
};

export default Header;
