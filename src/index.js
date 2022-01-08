import React from 'react';
import * as ReactDOM from "react-dom";
import App from './App';
import './i18n';
import * as serviceWorker from "./serviceWorkerRegistration";
import {BrowserRouter} from 'react-router-dom';
import "./index.css";


ReactDOM.render(
  
     <React.Suspense >
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.Suspense>,
  document.getElementById('root')
);

serviceWorker.unregister();

