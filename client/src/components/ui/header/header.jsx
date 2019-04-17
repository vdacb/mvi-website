import React from "react";
import MenuIcon from "./../menuIcon/menuIcon";
import "./header.css";

const Header = (props) => (
    <header>
        <MenuIcon />
        <div id="language-select">
            <div className="text">en</div>
            <div className="deco-line"></div>
            <div className="text">pt</div>
        </div>
    </header>
)

export default Header;