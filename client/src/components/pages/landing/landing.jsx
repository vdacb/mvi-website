import React, {Component} from "react";
import {Navlink, Hashrouter, Route} from "react-router-dom";
import Header from "./../../ui/header/header";
import "./landing.css";

class Landing extends Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <div id="landing-container">
                    
                </div>
            </React.Fragment>
        );
    }
}

export default Landing;