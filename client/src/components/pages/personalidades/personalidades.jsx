import React, {Component} from "react";
import LandingSection from "./../sectionLayouts/landingSection/landingSection"; 
import Header from "./../../ui/header/header";
import ScrollBar from "./../../ui/scrollBar/scrollBar";
import "./personalidades.css";

class Personalidades extends Component {
    constructor() {
        super();

        this.state = {
            title: "Personalidades",
            text: ["A imprensa evoluiu ao longo dos séculos devido aos esforços, descobertas e invenções de várias figuras. Aqui nesta página estão, de forma ordenada, muitas destas figuras que perduraram ao longo dos séculos devido aos ibjetivos que atingiram."],
            images: ["/img/top_photos/DSC_7399.jpg"],
        }
    }

    render() {
        return(
            <div id="personalidades-container">
                <Header />
                <ScrollBar />
                <LandingSection title={this.state.title} text={this.state.text[0]} image={this.state.images[0]} /> 
            </div>
        )
    }
}

export default Personalidades;
