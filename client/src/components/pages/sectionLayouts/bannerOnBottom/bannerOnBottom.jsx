import React, {Component} from "react";
import "./bannerOnBottom.css";

class BannerOnBottom extends Component {
    render() {
        return(
            <div id="banner-bottom-container">
                <div id="bn-content">
                    <p className="text" dangerouslySetInnerHTML={{__html: this.props.text[0]}}></p>
                    <p className="text" dangerouslySetInnerHTML={{__html: this.props.text[1]}}></p>
                </div>

                <div id="bn-banner-container">
                    <img src={window.location.origin + "/img/top_photos/MNI_Fachadas_Panoramica_2012.jpg"} alt="bottom banner" />  
                </div>
            </div>
        );
    }
}

export default BannerOnBottom;
