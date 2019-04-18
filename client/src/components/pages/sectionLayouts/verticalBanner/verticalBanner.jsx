import React, {Component} from "react";
import "./verticalBanner.css";

class VerticalBanner extends Component {

    render() {
        return(
            <div id="vb-container">
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