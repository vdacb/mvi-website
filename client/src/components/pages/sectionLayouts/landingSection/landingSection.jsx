import React, {Component} from "react";
import "./landingSection.css";

class LandingSection extends Component {
    render() {
        return(
            <div id="landing-container">
                <div id="landing-content">
                    <div id="image-container">
                        <img src={window.location.origin + "/img/alfabetos.jpg"} />
                    </div>

                    <div id="landing-info">
                        <h1 className="title">{this.props.title}</h1>
                        <p className="text">{this.props.text}</p>
                    </div>

                    <div id="scroll-line"></div>
                </div>
            </div>
        );
    }
}

export default LandingSection;