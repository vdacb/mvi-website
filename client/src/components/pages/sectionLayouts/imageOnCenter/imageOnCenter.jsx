import React, {Component} from "react";
import "./imageOnCenter.css";

class ImageOnCenter extends Component {

    constructor() {
        super();

        this.imageCenterRef = React.createRef();
    }

    componentDidMount() {
        const links = this.imageCenterRef.current.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", this.props.openPopup);
        }
    }

    componentWillUnmount() {
        const links = this.imageCenterRef.current.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].removeEventListener("click", this.props.openPopup);
        }
    }

    render() {
        return(
            <div id="image-center-container" ref={this.imageCenterRef}>
                <div id="main-content">
                    <p className="text" dangerouslySetInnerHTML={{__html: this.props.text[0]}}></p>
                    <p className="text" dangerouslySetInnerHTML={{__html: this.props.text[1]}}></p>
                </div>

                <div id="img-container">
                    <img src={window.location.origin + this.props.image} alt="Content"/>
                </div>

                <div id="italic-container">
                    <p className="text" dangerouslySetInnerHTML={{__html: this.props.text[2]}}></p>
                </div>
            </div>
        );
    }
}

export default ImageOnCenter;