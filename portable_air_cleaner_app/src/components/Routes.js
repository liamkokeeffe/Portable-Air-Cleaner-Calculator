import React from 'react';
import {Home} from './Home.js';
import {About} from './About.js';
import {AdditionalResources} from './AdditionalResources.js';
import {Switch, Route} from 'react-router-dom';

export function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
                <Route exact path={process.env.PUBLIC_URL + '/additional-resources'} component={AdditionalResources} />
            </Switch>
        </div>
    )
}