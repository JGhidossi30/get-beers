import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/#:beer" component={Home}/>
                    <Route component={() => <NotFound page="Page"/>}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
