import React, {Component} from "react";
import Header from "./../../ui/header/header";
import ScrollBar from "./../../ui/scrollBar/scrollBar";
import LandingSection from "./../sectionLayouts/landingSection/landingSection";
import Footer from "./../../ui/footer/footer";
import "./visitas.css";

class Visitas extends Component {
    constructor() {
        super();

        this.state = {
            title: "Visitas.",
            images: ["/img/top_photos/2005/MuseuInterior_pessoas.jpg"],
            text: ["Uma página interativa com vídeos sobre as diversas entidades por detrás da imprensa portuguesa."],
        }
    }

    render() {
        return(
            <div id="visitas-container">
                <Header />
                <ScrollBar />
                <LandingSection title={this.state.title} text={this.state.text[0]} image={this.state.images[0]} />

                <div id="visitas-content">
                    <div id="placeholder">
                        <p className="text">Esta funcionalidade ainda não foi implementada. Pedimos desculpa pelo incómodo.</p>
                    </div>
                </div>

                <Footer next="História Universal." link="/historia_universal" />
            </div>
        )
    }
}

export default Visitas;