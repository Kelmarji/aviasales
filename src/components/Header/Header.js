import React from 'react';
import * as a from 'antd';

const Header = () => {
  return (
    <a.Radio.Group>
      <a.Radio.Button value="cheap">Самый дешёвый</a.Radio.Button>
      <a.Radio.Button value="faster">Самый быстрый</a.Radio.Button>
      <a.Radio.Button value="fiftyfifty">Оптимальный</a.Radio.Button>
    </a.Radio.Group>
  );
};

export default Header;
