import React from 'react';
import ReactDOM from 'react-dom';
import Relay, { DefaultNetworkLayer } from 'react-relay';
import { Router, applyRouterMiddleware, hashHistory } from 'react-router';
import useRelay from 'react-router-relay';

// The default url for graphql is "/graphql" then the following NetworkLayer definition is not strictly required
Relay.injectNetworkLayer(
    new DefaultNetworkLayer('http://localhost:8080/graphql')
);

import routes from './routes';

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

ReactDOM.render(
    <Router
        history={hashHistory}
        routes={routes}
        render={applyRouterMiddleware(useRelay)}
        environment={Relay.Store}
    />,
    mountNode
);
