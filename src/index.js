import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import './index.scss';
import { Provider } from 'react-redux';

import App from './components/App';
import logo from './Logo.png';

const defaultState = {
  filterTickets: 'optimal',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'change_tickets_filter_CHEAP':
      console.log(state);
      return { ...state, filterTickets: 'cheap' };
    case 'change_tickets_filter_FASTER':
      console.log(state);
      return { ...state, filterTickets: 'faster' };
    case 'change_tickets_filter_OPTIMA':
      console.log(state);
      return { ...state, filterTickets: 'optimal' };
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
