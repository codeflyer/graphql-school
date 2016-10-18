import React from 'react';
import ReactDOM from 'react-dom';
import Relay, {
    DefaultNetworkLayer,
    RootContainer,
    Route
} from 'react-relay';

import {PeopleList} from './components/peopleList';

// The default url for graphql is "/graphql" then the following NetworkLayer definition is not strictly required
Relay.injectNetworkLayer(
    new DefaultNetworkLayer('http://localhost:8080/graphql')
);

// Route
// https://medium.com/@cpojer/relay-and-routing-36b5439bad9#.vcr8k1ew1
class AppRoute extends Route {
  static paramDefinitions = {};
  static queries = {
    peopleview: () => Relay.QL`query { viewer }` // the name "peopleview" should be the same in the query component (#1)
  };
  static routeName = 'AppRoute';
}

class Root extends React.Component {
  render() {
    return (
        <RootContainer
            Component={PeopleList}
            route={new AppRoute()}
        />
    );
  }
}

ReactDOM.render(
    <Root />,
    document.getElementById('app')
);