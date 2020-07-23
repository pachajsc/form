import React from 'react';
import ReactDOM from 'react-dom';
import RequestInfo from './containers/RequestInfo'
import AdmissionRequest from './containers/AdmissionRequest'
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./assets/styles/theming"
import "./assets/styles/main.scss"


ReactDOM.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    {/* <RequestInfo /> */}
    <AdmissionRequest />
  </React.StrictMode>
  </ThemeProvider>
  ,
  document.getElementById('root')
);

