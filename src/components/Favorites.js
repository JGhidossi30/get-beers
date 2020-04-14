import React from "react";
import {Link} from "react-router-dom";
import './Favorites.css';

const Favorites = ({favorites}) => {
    return (
        <>
            <div className="favorites">
                {favorites
                        .sort((a, b) => a.localeCompare(b))
                        .map((favorite, key) =>
                            <Link to={"/details/" + encodeURIComponent(favorite)} key={key}>
                                {favorite}
                            </Link>
                        )
                }
            </div>
        </>
    );
}

export default Favorites;
