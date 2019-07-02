import React, {Component} from "react";
import "./slidePopup.css";

class SlidePopup extends Component {
    render() {
        return (
            <div id="slide-popup-container">
                <div id="slide-popup-gray-area" onClick={this.props.closePopup}></div>
                <div id="slide-popup">
                    <div id="slide-popup-cross-container">
                        <img src={window.location.origin + "/img/black_cross.png"} onClick={this.props.closePopup} alt="Closing cross" />
                    </div>
                        {
                            this.props.image ? (
                                <div id="slide-popup-img-container">
                                    <img src={window.location.origin + this.props.image} alt="banner" />
                                </div>
                                ) 
                            : null
                        }
                    <div className="title">{this.props.title}</div>
                    {
                        this.props.text.map(paragraph => (
                            <p className="text">{paragraph}</p>
                        ))
                    }
                    <div className="horizontal-bar"></div>
                </div>
            </div>
        )
    }
}

export default SlidePopup;
