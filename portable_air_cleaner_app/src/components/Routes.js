import React from 'react';
import {Home} from './Home.js';
import {About} from './About.js';
import {Resources} from './Resources.js';
import {FAQ} from './FAQ.js';
import {Switch, Route} from 'react-router-dom';

export function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/resources' component={Resources} />
                <Route path='/faq' component={FAQ} />
            </Switch>
        </div>
    )
}