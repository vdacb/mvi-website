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
        var displayedImage;

        if(this.props.menuVisible) {
            displayedImage = "black_cross.png";
        }
        else {
            displayedImage = "menu_icon.png";
        }

        return(
            <img id="menu-icon" src={window.location.origin + "/img/" + displayedImage} />
        );
    }
}

export default MenuIcon;