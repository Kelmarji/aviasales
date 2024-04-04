import React from 'react';
import * as a from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import f from './LeftFilter.module.scss';

const LeftFilter = () => {
  const dispatch = useDispatch();
  const statusCheckbox = useSelector((state) => state.filterCheck);
  const { All, noTrans, trans1, trans2, trans3 } = statusCheckbox;
  const dispCheck = (txt, payload) => {
    const type = `changeCheckbox${txt}`;
    dispatch({ type, payload });
  };
  return (
    <div className={f.filterList}>
      <h3>количество пересадок</h3>
      <a.ConfigProvider
        theme={{
          components: {
            Checkbox: {
              colorPrimary: 'white',
              colorWhite: '#2196F3', // галочка
              colorBorder: '#9ABBCE', // color border
              colorPrimaryBorder: '#9ABBCE',
              colorPrimaryHover: 'white',
              /* here is your component tokens */
            },
          },
        }}
      >
        <a.Checkbox
          value="All"
          checked={(trans2 && trans1 && trans3) || All}
          onChange={(e) => dispCheck(e.target.value, e.target.checked)}
        >
          Все
        </a.Checkbox>
        <a.Checkbox value="noTrans" checked={noTrans} onChange={(e) => dispCheck('NoTrans', e.target.checked)}>
          без Пересадок
        </a.Checkbox>
        <a.Checkbox value="trans1" checked={statusCheckbox.trans1} onChange={() => dispCheck('Trans1')}>
          1 пересадка
        </a.Checkbox>
        <a.Checkbox value="trans2" checked={statusCheckbox.trans2} onChange={() => dispCheck('Trans2')}>
          2 пересадки
        </a.Checkbox>
        <a.Checkbox value="trans3" checked={statusCheckbox.trans3} onChange={() => dispCheck('Trans3')}>
          3 пересадки
        </a.Checkbox>
      </a.ConfigProvider>
    </div>
  );
};

export default LeftFilter;
