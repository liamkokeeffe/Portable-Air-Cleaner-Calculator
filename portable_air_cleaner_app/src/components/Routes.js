import React from 'react';
import {Home} from './Home.js';
import {About} from './About.js';
import {AdditionalResources} from './AdditionalResources.js';
import {Switch, Route} from 'react-router-dom';

export function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='Portable-Air-Cleaner-Calculator/#/' component={Home} />
                <Route path='Portable-Air-Cleaner-Calculator/#/about' component={About} />
                <Route path='Portable-Air-Cleaner-Calculator/#/additional-resources' component={AdditionalResources} />
            </Switch>
        </div>
    )
}