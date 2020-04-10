import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Details from "../pages/Details";
import './Menu.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const Menu = ({beers}) => {
    return (
        <>
            <div className="menu">

                    {beers.map(beer =>
                        <Link to={"/#" + beer.name}>
                            {beer.name}<br/>
                        </Link>
                    )}
                {/*<SwitchTransition className="body-page"*/}
                {/*                  transitionName="test"*/}
                {/*                  transitionEnterTimeout={500}*/}
                {/*                  transitionLeaveTimeout={300}>*/}
                <SwitchTransition>
                    <CSSTransition timeout={300} classNames='fade'>
                        <Route path="/#:beer" component={Details}/>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </>
    );
}

export default Menu;
