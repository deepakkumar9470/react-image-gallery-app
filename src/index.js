import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from './context/context';


ReactDOM.render(
  <ThemeProvider>
     <App />
  </ThemeProvider>
    ,
  document.getElementById('root')
);

