import React from 'react';
import {Home} from './Home.js';
import {About} from './About.js';
import {AdditionalResources} from './AdditionalResources.js';
import {Help} from './Help.js';
import {Switch, Route} from 'react-router-dom';

export function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/additional-resources' component={AdditionalResources} />
                <Route path='/help' component={Help} />
            </Switch>
        </div>
    )
}