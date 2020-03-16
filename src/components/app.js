import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory as history } from 'history';
import { Provider } from 'react-redux';
import Home from '../routes/home/components/Home.component';
import Root from '../layout';

type Props = {
  store: Object,
  routes: Object,
};
type State = {};

export default class extends PureComponent<void, Props, State> {
  static displayName = 'App'

  state = {}

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { store, routes } = this.props;

    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={Root} />
        </Router>
      </Provider>
    );
  }
}
