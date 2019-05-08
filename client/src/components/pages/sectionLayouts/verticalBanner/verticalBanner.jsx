import React, {Component} from "react";
import "./verticalBanner.css";

class VerticalBanner extends Component {

    constructor() {
        super();

        this.vbContainerRef = React.createRef();
    }

    componentDidMount() {
        const links = this.vbContainerRef.current.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", this.props.openPopup);
        }
    }

    componentWillUnmount() {
        //document.querySelectorAll(".popup").removeEventListener("click", this.openPopup);
    }

    render() {
        return(
            <div id="vb-container" ref={this.vbContainerRef}>
                <div id="content-container">
                    <p className="text" dangerouslySetInnerHTML={{__html: this.props.text[0]}}></p>
                    <p className="text" dangerouslySetInnerHTML={{__html: this.props.text[1]}}></p>
                </div>

                <div id="img-container">
                    <img src={window.location.origin + "/img/alfabetos.jpg"} alt="Vertical banner" />
                </div>
            </div>
        );
    }
}

export default VerticalBanner;