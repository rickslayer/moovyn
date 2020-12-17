import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivacyPolicy from './components/PrivacyPolicy'
import Page404 from './components/404'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path='*' component={Page404} />
        </Switch>
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

