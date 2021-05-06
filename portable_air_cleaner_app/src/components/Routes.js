import React from 'react';
import {LandingPage} from './LandingPage/LandingPage.js';
import {About} from './About.js';
import {Resources} from './Resources.js';
import {FAQ} from './FAQ.js';
import {Switch, Route} from 'react-router-dom';
import { CalculatorManager } from './CalculatorManager.js';

export function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route path='/calculator' component={CalculatorManager} />
                <Route path='/about' component={About} />
                <Route path='/resources' component={Resources} />
                <Route path='/faq' component={FAQ} />
            </Switch>
        </div>
    )
}