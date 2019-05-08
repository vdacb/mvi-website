import React, {Component} from "react";
import "./scrollBar.css";

class ScrollBar extends Component {

    constructor() {
        super();

        this.handleScroll = this.handleScroll.bind(this);
        this.scrollBarRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll(ev) {
        var distScrolled = window.pageYOffset;
        var docHeight = document.body.clientHeight - window.innerHeight;
        console.log("SCROLL", window.pageYOffset);
        console.log("HEIGHT", document.body.clientHeight-window.innerHeight);
        this.scrollBarRef.current.style.height = ( (distScrolled / docHeight) * 100) + "%";
    }

    render() {
        return(
            <div id="scrollbar" ref={this.scrollBarRef}></div>
        );
    }
}

export default ScrollBar;