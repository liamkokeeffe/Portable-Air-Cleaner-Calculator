import './App.css';
import {Header} from './Header.js';
import {LanguageSelection} from './LanguageSelection.js';
import {Home} from './Home.js';
import {About} from './About.js';
import {AdditionalResources} from './AdditionalResources.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  // language is something app wide - pass in the callback. but we need to figure it out
  // <Header>
  // <Select Option Bar>
  // <Body>
  // we can have router seperate and float it up with css, pass it in as a prop, or just declare it in the header file.
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