import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './components/App';
import logo from './Logo.png';

const OutPut = () => {
  return (
    <div className="AppContainer">
      <img className="Logo" src={logo} />
      <App />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<OutPut />);
