import React from "react";
import "./popupLink.css";

const PopupLink = (props) => (
    <div className="popup-link">
        <span className="deco-line"></span>
        <label className="text small-text">{props.text}</label>
    </div>
);

export default PopupLink;