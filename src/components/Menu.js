import React from "react";
import {Link} from "react-router-dom";
import './Menu.css';

const Menu = ({beers}) => (
    <>
        <div className="menu">
            {beers.map((beer, key) =>
                <Link to={"/details/" + encodeURIComponent(beer.name)} key={key}>
                    {beer.name}
                </Link>
            )}
        </div>
    </>
);

export default Menu;
