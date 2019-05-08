import React, {Component} from "react";
import "./headlineImage.css";

class HeadlineImage extends Component {

    render() {
        return(
            <div id="headline-image-container">
                <div className="text">{this.props.text[0]}</div>
            </div>
        );
    }
}

export default HeadlineImage;