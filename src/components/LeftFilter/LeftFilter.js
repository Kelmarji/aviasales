import React from 'react';
import * as a from 'antd';

import f from './LeftFilter.module.scss';

const LeftFilter = () => {
  return (
    <div className={f.filterList}>
      <h3>Количество Пересадок</h3>
      <a.Checkbox className={f.test} />
      <a.Checkbox />
      <a.Checkbox />
      <a.Checkbox />
      <a.Checkbox />
    </div>
  );
};

export default LeftFilter;
