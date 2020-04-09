import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Details from "../pages/Details";

const Menu = ({beers}) => {
    return (
        <>
            <div className="menu">
                <BrowserRouter>
                    {beers.map(beer =>
                        <Link to={"/" + beer.name}>
                            {beer.name}<br/>
                        </Link>
                    )}
                    <Switch>
                        <Route path="/:beer" component={Details}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Menu;
