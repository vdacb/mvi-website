import React, {Component} from "react";
import "./headlineImage.css";

class HeadlineImage extends Component {

    constructor() {
        super();

        this.headlineImageRef = React.createRef();
    }

    componentDidMount() {
        const links = this.headlineImageRef.current.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", this.props.openPopup);
        }
    }

    componentWillUnmount() {
        const links = this.headlineImageRef.current.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].removeEventListener("click", this.props.openPopup);
        }
    }

    render() {
        return(
            <div id="headline-image-container" ref={this.headlineImageRef}>
                <div id="headline" className="text">{this.props.text[0]}</div>
                <div id="hi-content">
                    <div>
                        <p className="text" dangerouslySetInnerHTML={{__html: this.props.text[1]}}></p>
                        <p className="text" dangerouslySetInnerHTML={{__html: this.props.text[2]}}></p>
                    </div>
                    <div>
                        <img src={window.location.origin + this.props.image} alt="It shows whats said on the text" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadlineImage;