/* eslint-disable default-param-last */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import './index.scss';
import { Provider } from 'react-redux';

import App from './components/App';
import logo from './Logo.png';

const defaultState = {
  filterCheck: { All: true, noTrans: false, trans1: true, trans2: true, trans3: true },
  filterTickets: 'optimal',
  tickets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  sliceTicket: 5,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'sliceMore':
      return { ...state, sliceTicket: state.sliceTicket + 5 };
    case 'change_tickets_filter_CHEAP':
      return { ...state, filterTickets: 'cheap' };
    case 'change_tickets_filter_FASTER':
      return { ...state, filterTickets: 'faster' };
    case 'change_tickets_filter_OPTIMA':
      return { ...state, filterTickets: 'optimal' };
    case 'changeCheckboxAll':
      if (action.payload)
        return {
          ...state,
          filterCheck: { All: action.payload, noTrans: false, trans1: true, trans2: true, trans3: true },
        };
      return {
        ...state,
        filterCheck: { All: false, noTrans: false, trans1: false, trans2: false, trans3: false },
      };
    case 'changeCheckboxNoTrans':
      return {
        ...state,
        filterCheck: { All: false, noTrans: action.payload, trans1: false, trans2: false, trans3: false },
      };
    case 'changeCheckboxTrans1':
      return {
        ...state,
        filterCheck: { ...state.filterCheck, All: false, trans1: !state.filterCheck.trans1, noTrans: state.noTrans },
      };
    case 'changeCheckboxTrans2':
      return {
        ...state,
        filterCheck: { ...state.filterCheck, All: false, trans2: !state.filterCheck.trans2, noTrans: state.noTrans },
      };
    case 'changeCheckboxTrans3':
      return {
        ...state,
        filterCheck: { ...state.filterCheck, All: false, trans3: !state.filterCheck.trans3, noTrans: state.noTrans },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const OutPut = () => {
  return (
    <div className="AppContainer">
      <img className="Logo" src={logo} />
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<OutPut />);
