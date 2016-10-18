import React from 'react';
import Relay, {
    RootContainer,
} from 'react-relay';

import { Route } from 'react-router';

import { PeopleList } from './components/peopleList';
import { PersonSheet } from './components/personSheet';

class Root extends React.Component {
  render() {
    return (
        <RootContainer
            Component={PersonSheet}
            route={new PersonRoute({ personId: "cGVyc29uOjA=" })}
        />
    );
  }
}

const peopleQueries = {
  peopleview: () => Relay.QL`query { viewer }`
};

const personQuery = {
  person: () => Relay.QL`query { person(id:$personId) }`
};

class MainLayout extends React.Component {
  render() {
    return <div>
      <h1>People App</h1>
      {this.props.children}
    </div>
  }
}

const appRouter = (
    <Route
        component={MainLayout}
    >
       <Route
           name="main"
           path="/"
           component={PeopleList}
           queries={peopleQueries}
       />
      <Route
          name="person"
          path="/person/:personId"
          component={PersonSheet}
          queries={personQuery}
      />
    </Route>
);

export default appRouter;


