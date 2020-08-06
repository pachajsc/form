import React from 'react';
import ReactDOM from 'react-dom';
import RequestInfo from './containers/RequestInfo'
import AdmissionRequest from './containers/AdmissionRequest'
import ExampleForm from "./components-iebs"
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./assets/styles/theming"
import "./assets/styles/main.scss"

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    {/* <ExampleForm/> */}
    {/* <RequestInfo /> */}
    <AdmissionRequest/> 
  </React.StrictMode>
  </ThemeProvider>
  ,
  document.getElementById('root')
);



