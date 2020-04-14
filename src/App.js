import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import './App.css';
import Title from "./components/Title";
import Details from "./pages/Details";

function App() {
    return (
        <Router>
            <div className="App">
                <Title/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/details/:beer" component={Details}/>
                    <Route component={() => <NotFound page="Page"/>}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
