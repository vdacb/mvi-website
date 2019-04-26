import React from "react";
import {NavLink} from "react-router-dom";
import "./popupLink.css";

const PopupLink = (props) => (
    <div className="popup-link">
        <div className="deco-line"></div>
        <NavLink to={props.link} className="text small-text">{props.text}</NavLink>
    </div>
);

export default PopupLink;