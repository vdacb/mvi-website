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
        const links = this.vbContainerRef.current.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].removeEventListener("click", this.props.openPopup);
        }
    }

    render() {
        return(
            <div id="vb-container" ref={this.vbContainerRef}>
                <div id="content-container">
                    <p className="text" dangerouslySetInnerHTML={{__html: this.props.text[0]}}></p>
                    <p className="text" dangerouslySetInnerHTML={{__html: this.props.text[1]}}></p>
                </div>

                <div id="img-container">
                    <img src={process.env.PUBLIC_URL + this.props.image} alt="Vertical banner" />
                </div>
            </div>
        );
    }
}

export default VerticalBanner;
