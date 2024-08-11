import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './components/Logo';
import Main from './components/Main';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Logo />
    <Main />
  </React.StrictMode>,
)
