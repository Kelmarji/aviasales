import React from 'react';
import * as a from 'antd';

import f from './LeftFilter.module.scss';

const LeftFilter = () => {
  return (
    <div className={f.filterList}>
      <h3>количество пересадок</h3>
      <a.ConfigProvider
        theme={{
          components: {
            Checkbox: {
              colorWhite: '#2196F3', // галочка
              colorBorder: '#9ABBCE', // color border
              colorPrimaryBorder: '#9ABBCE',
              colorPrimaryHover: 'white',
              // colorPrimary: 'white',
              /* here is your component tokens */
            },
          },
        }}
      >
        <a.Checkbox>Все</a.Checkbox>
        <a.Checkbox>без Пересадок</a.Checkbox>
        <a.Checkbox>1 пересадка</a.Checkbox>
        <a.Checkbox>2 пересадки</a.Checkbox>
        <a.Checkbox>3 пересадки</a.Checkbox>
      </a.ConfigProvider>
    </div>
  );
};

export default LeftFilter;
