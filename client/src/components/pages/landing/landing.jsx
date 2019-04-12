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
                    <div className="vertical-banner"></div>
                    
                    <div className="content-container">
                        <div id="title">Museu virtual da imprensa</div>
                        <p className="text">Bem vindo ao Museu Virtual da Imprensa! Faça scroll para começar a explorar.</p>
                    </div>

                    <img className="arrow-flat-down" src={window.location.origin + "/img/arrow_flat_down.png"} />
                </div>
            </React.Fragment>
        );
    }
}

export default Landing;