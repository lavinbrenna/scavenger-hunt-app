import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: for global styles
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: If you want to measure performance
reportWebVitals();