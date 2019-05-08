import React, {Component} from "react";
import "./dotMenu.css";

class DotMenu extends Component {
    render() {
        return(
            <nav id="dot-menu-container">
                <ul id="dot-menu">
                    {
                        this.props.pages.map((page, index) => (
                            <li key={index} onClick={this.props.dotClick.bind(null, index)}>
                                <div className="dot" data-page={index}></div>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        );
    }
}

export default DotMenu;