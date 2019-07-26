import React, {Component} from "react";
import "./dot.css";

class Dot extends Component {

    constructor() {
        super();

        this.handleDotClick = this.handleDotClick.bind(this);
        this.dotRef = React.createRef();
    }

    handleDotClick(ev) {
        this.props.dotClick(this.props.index);
        //this.dotRef.current.style.border = "1.5px solid #9590D7";
    }

    render() {
        return(
            <li className="dot-container" ref={this.dotRef} onClick={this.handleDotClick}>
                <div className="dot" data-page={this.props.index}></div>
            </li>
        );
    }
}

export default Dot;
