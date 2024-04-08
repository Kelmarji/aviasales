import React from 'react';
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
      <label>
        <input
          className={f.testing}
          type="checkbox"
          value="All"
          checked={trans1 && trans1 && trans3}
          onChange={(e) => dispCheck(e.target.value, e.target.checked)}
        />
        <span className={(trans2 && trans1 && trans3) || All ? f.customChecked : f.customUnchecked}>Все</span>
      </label>
      <label>
        <input
          className={f.testing}
          type="checkbox"
          value="noTrans"
          checked={noTrans}
          onChange={(e) => dispCheck('NoTrans', e.target.checked)}
        />
        <span className={noTrans ? f.customChecked : f.customUnchecked}>без пересадок</span>
      </label>
      <label>
        <input
          className={f.testing}
          type="checkbox"
          value="trans1"
          checked={trans1}
          onChange={(e) => dispCheck('Trans1', e.target.checked)}
        />
        <span className={trans1 ? f.customChecked : f.customUnchecked}>1 пересадка</span>
      </label>
      <label>
        <input
          className={f.testing}
          type="checkbox"
          value="trans2"
          checked={trans2}
          onChange={(e) => dispCheck('Trans2', e.target.checked)}
        />
        <span className={trans2 ? f.customChecked : f.customUnchecked}>2 пересадки</span>
      </label>
      <label>
        <input
          className={f.testing}
          type="checkbox"
          value="trans3"
          checked={trans3}
          onChange={(e) => dispCheck('Trans3', e.target.checked)}
        />
        <span className={trans3 ? f.customChecked : f.customUnchecked}>3 пересадки</span>
      </label>
    </div>
  );
};

export default LeftFilter;
