import React, {Component} from "react";
import "./scrollBar.css";

class ScrollBar extends Component {

    constructor() {
        super();
        
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll(ev) {
        //console.log(ev);
    }

    render() {
        return(
            <div id="scrollbar"></div>
        );
    }
}

export default ScrollBar;