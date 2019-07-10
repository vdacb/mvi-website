import React, {Component} from "react";
import Header from "./../../ui/header/header";
import ScrollBar from "./../../ui/scrollBar/scrollBar";
import LandingSection from "./../sectionLayouts/landingSection/landingSection";
import "./glossario.css";

class Glossario extends Component {
    constructor() {
        super();
        this.state = {
            title: "Glossário.",
            text: ["Um dicionário completo sobre todos os termos relacionados com a imprensa, desde máquinas processos e outros equipamentos."],
            images: ["/img/top_photos/MNI_SalaRodrigoAlvares_ExpoPerm3.jpg"],
        }
    }

    render() {
        return(
            <div id="glossario-container">
                <Header />
                <ScrollBar />
                <LandingSection title={this.state.title} text={this.state.text[0]} image={this.state.images[0]} /> 
            </div>
        );
    }
}

export default Glossario;