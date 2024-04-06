import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';

import store from './components/store';
import App from './components/App';
import logo from './Logo.png';

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
