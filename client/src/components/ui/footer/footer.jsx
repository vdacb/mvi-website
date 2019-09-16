import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "./footer.css";

class Footer extends Component {
    render() {
        return(
            <footer id="footer">
                <div>
                    <div className="text">Próximo</div>
                    <div className="title">
                        <NavLink to={this.props.link}>{this.props.next}</NavLink>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/img/arrow_long_white_right.png"} alt="Next arrow" />
                </div>
            </footer>
        )
    }
}

export default Footer;
