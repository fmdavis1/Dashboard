import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import './App.css';

//  ReactDOM.render(<App/>,document.getElementById('main'))
const root = ReactDOM.createRoot(document.getElementById('main'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


