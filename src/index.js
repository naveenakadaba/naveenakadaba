import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { App, Error404Redirect } from '@obstas-ui/core';
import asyncComponent from '@obstas-ui/async-component';
import { Page as PagePlaceholder } from '@obstas-ui/placeholders';

const Home = asyncComponent({
    component: () => import('src/pages/home/index.jsx'),
    fallback: () => <PagePlaceholder />
});

render(
    <App
        Error401Page={() => <Fragment />}
        Error403Page={() => <Fragment />}
        Error404Page={() => <Fragment />}
        Error500Page={() => <Fragment />}>
        <Switch>
            <Route path="/home" exact={true} component={(props) => (
                <Fragment>
                    <Home {...props} />
                </Fragment>
            )} />

            <Route component={Error404Redirect} />
        </Switch>
    </App>,
    window.document.getElementById('app')
);
