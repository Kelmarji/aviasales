import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider, useSelector } from 'react-redux';
import { Spin } from 'antd';

import store from './components/store';
import App from './components/App';
import logo from './Logo.png';

const OutPut = () => {
  const loaded = useSelector(({ loadedTickets }) => loadedTickets);
  return (
    <div className="AppContainer">
      <img className="Logo" src={logo} />
      {loaded ? null : <Spin size="large" style={{ position: 'static', bottom: '5%', right: '2%' }} />}
      <App />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <OutPut />
  </Provider>
);
