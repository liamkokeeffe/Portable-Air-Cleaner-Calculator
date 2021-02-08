import './App.css';
import {Home} from './Home.js';
import {About} from './About.js';
import {AdditionalResources} from './AdditionalResources.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
      <p>Logo</p>
      <h1 id='app-title'>Portable Air Cleaner Calculator</h1>
      </header>

      <Router>
        <div>
            <div className='tabs'>
                <Link to='/' className='tab'>Home</Link>
                <Link to='/about' className='tab'>About</Link>
                <Link to='/additional-resources' className='tab'>Additional Resources</Link>
            </div>
          <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          <Route exact path='/about'>
              <About />
          </Route>
          <Route exact path='/additional-resources'>
              <AdditionalResources />
          </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;