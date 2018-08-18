import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './configureStore';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Features from './Features';

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/features" component={Features}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)