import React from "react";
import {Link} from "react-router-dom";
import './Favorites.css';

const Favorites = ({favorites}) => {
    return (
        <>
            <div className="favorites">
                {
                    favorites.map(favorite =>
                        <Link>
                            {favorite}<br/>
                        </Link>
                    )}
            </div>
        </>
    );
}

export default Favorites;
