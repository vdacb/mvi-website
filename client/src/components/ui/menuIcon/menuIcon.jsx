import React, {Component} from "react";
import "./menuIcon.css";

class MenuIcon extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false,
        }
    }

    render() {
        return(
            <img id="menu-icon" src={window.location.origin + "/img/menu_icon.png"} />
        );
    }
}

export default MenuIcon;