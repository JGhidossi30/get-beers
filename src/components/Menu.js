import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Details from "../pages/Details";
import './Menu.css';

const Menu = ({beers}) => {
    return (
        <>
            <div className="menu">
                <BrowserRouter>
                    {beers.map(beer =>
                        <Link to={"/details/" + beer.name}>
                            {beer.name}<br/>
                        </Link>
                    )}
                    <Switch>
                        <Route path="/details/:beer" component={Details}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Menu;
