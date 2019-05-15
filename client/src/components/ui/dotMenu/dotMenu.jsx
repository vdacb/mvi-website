import React, {Component} from "react";
import Dot from "./dot/dot";
import "./dotMenu.css";

class DotMenu extends Component {
    

    render() {
        return(
            <nav id="dot-menu-container">
                <ul id="dot-menu">
                    {
                        this.props.pages.map((page, index) => (
                            <Dot dotClick={this.props.dotClick} key={index} index={index} />
                        ))
                    }
                </ul>
            </nav>
        );
    }
}

export default DotMenu;