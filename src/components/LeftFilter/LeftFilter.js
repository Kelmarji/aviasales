import React from 'react';
import * as a from 'antd';

import f from './LeftFilter.module.scss';

const LeftFilter = () => {
  return (
    <div className={f.filterList}>
      <h3>количество пересадок</h3>
      <a.Checkbox>Все</a.Checkbox>
      <a.Checkbox>1 пересадка</a.Checkbox>
      <a.Checkbox>2 пересадки</a.Checkbox>
      <a.Checkbox>3 пересадки</a.Checkbox>
      <a.Checkbox>без Пересадок</a.Checkbox>
    </div>
  );
};

export default LeftFilter;
