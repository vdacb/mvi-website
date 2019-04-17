import React, {Component} from "react";
import "./seeMoreBtn.css";

class SeeMoreBtn extends Component {
    
    render() {
        return(
            <div id="see-more-btn">
                <div className="text">Ver mais</div>
                <img id="arrow-right" src={window.location.origin + "/img/arrow_white_right.png"} alt="Arrow pointing right" />
            </div>
        );
    }
}

export default SeeMoreBtn;