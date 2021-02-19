import './App.css';
import {Header} from './components/Header/Header.js';
import {LanguageSelection} from './components/Header/LanguageSelection.js';
import {Home} from './components/Home.js';
import {About} from './components/About.js';
import {AdditionalResources} from './components/AdditionalResources.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <LanguageSelection />
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