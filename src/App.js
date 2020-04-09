import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div id="page-body">
        <Route path="/" component={ HomePage } exact />
        {/*<Route path="/:beer" component={ Details } />*/}
      </div>
    </div>
    </Router>
    );
  }

export default App;
