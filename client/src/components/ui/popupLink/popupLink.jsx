import React from "react";
import "./popupLink.css";

const PopupLink = (props) => (
    <div className="popup-link">
        <div className="deco-line"></div>
        <label className="text small-text">{props.text}</label>
    </div>
);

export default PopupLink;