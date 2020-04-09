import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from "./pages/NotFound";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="page-body">
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/details/:beer" component={Details}/>
                        <Route component={() => <NotFound page="Page"/>}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
