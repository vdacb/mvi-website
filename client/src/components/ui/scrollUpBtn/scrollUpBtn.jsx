import React, {Component} from "react";
import "./scrollUpBtn.css";

class ScrollUpBtn extends Component {

    scrollToTop() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div id="scroll-up-btn" onClick={this.scrollToTop}>
                <img src={window.location.origin + "/img/arrow_black_up.png"} alt="Arrow pointing upwards"/>
                <div className="text">Voltar</div>
            </div>
        );
    }
}

export default ScrollUpBtn;