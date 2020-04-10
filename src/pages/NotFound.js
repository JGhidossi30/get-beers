import React from "react";
import './NotFound.css';

const NotFound = ({page}) => (
    <div className="not-found view">
        <h1>404: {page} Not Found</h1>
    </div>
);

export default NotFound;
