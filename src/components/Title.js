import React from "react";
import './Title.css';
import {Link} from "react-router-dom";

const Title = () => (
    <>
        <div className="title">
            <h1>
                <Link to="/">
                    The Beer Garden
                </Link>
            </h1>
        </div>
    </>
);

export default Title;
