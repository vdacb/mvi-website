import React, {Component} from "react";
import Header from "../../ui/header/header";
import LandingSection from "../sectionLayouts/landingSection/landingSection";
import VerticalBanner from "../sectionLayouts/verticalBanner/verticalBanner";
import "./alfabetos.css";

class Alfabetos extends Component {
    
    constructor() {
        super();

        this.state = {
            title: "Alfabetos",
            text: ["A Escrita, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações.", "Nesta evolução distinguem-se claramente duas fases essenciais: a escrita ideográfica e a escrita fonética. No primeiro estádio, a escrita compunha-se por signos pictóricos que representavam objectos ou ideias, com um simples valor ideográfico. Por isso, eram necessários tantos signos quantos os objectos e ideias a exprimir.", "Numa segunda fase, os signos começaram a representar não já objectos ou ideias, mas os sons com que tais objectos ou ideias eram nomeados no respectivo idioma."],
        }
    }

    render() {
        return(
            <div id="alfabetos-container">
                <Header />
                <LandingSection title={this.state.title + "."} text={this.state.text[0]} />
                <VerticalBanner text={this.state.text.slice(1,3)} />
            </div>
        );
    }
}

export default Alfabetos;