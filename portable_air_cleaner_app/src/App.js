import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './components/Routes.js'
import './App.css';
import { Layout } from './components/Layout.js';

function App() {
  return (
    <div>
      <Layout>
        <Router>
            <Routes />
        </Router>
      </Layout>
    </div>
  );
}

export default App;