import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Header from "./../../ui/header/header";
import PopupLink from "../../ui/popupLink/popupLink";
import "./landing.css";

class Landing extends Component {
    constructor() {
        super();

        this.state = {
            userScroll: false,
        }

        this.handleUserScroll = this.handleUserScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleUserScroll);
    }

    handleUserScroll() {
        this.setState({
            userScroll: true,
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleUserScroll);
    }

    render() {
        var redirect;

        this.state.userScroll ? redirect = (<Redirect to="/main" />) : redirect = null;

        return(
            <React.Fragment>
                {redirect}
                <Header />
                <div id="landing-container">
                    <div className="vertical-banner">
                        <img src={process.env.PUBLIC_URL + "/img/top_photos/2005/Maquina.jpg"} alt="welcome" />
                    </div>

                    <div className="content-container">
                        <div id="title">Museu virtual da imprensa</div>
                        <p className="text">Bem vindo ao Museu Virtual da Imprensa! Faça scroll para começar a explorar.</p>
                    </div>

                    <div className="link-container">
                        <PopupLink link="about" text="Sobre"/>
                        <PopupLink link="ficha_tecnica" text="Ficha técnica" />
                    </div>

                    <img className="arrow-flat-down" src={process.env.PUBLIC_URL + "/img/arrow_flat_down.png"} alt="Scroll down arrow" onClick={this.handleUserScroll} />
                </div>
            </React.Fragment>
        );
    }
}

export default Landing;
