import React from 'react';
import ReactDOM from 'react-dom';
import RequestInfo from './containers/RequestInfo'
import AdmissionRequest from './containers/AdmissionRequest'
import ExampleForm from "./components-iebs"
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from "./assets/styles/theming"
import "./assets/styles/main.scss"
import { BrowserRouter, Router, Switch, Route, withRouter } from "react-router-dom";

export const App = withRouter(({ location }) => {
  return (
    <Switch location={location}>
      <Route path="/:step" render={(props) => <AdmissionRequest {...props} />} />
      <Route path="/" render={(props) => <AdmissionRequest {...props} />} />
    </Switch>
  )
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <RequestInfo/>
  </ThemeProvider>
  ,
  document.getElementById('root')
);



