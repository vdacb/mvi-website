import React, {Component} from "react";
import Header from "./../../ui/header/header";
import ScrollBar from "./../../ui/scrollBar/scrollBar";
import SlidePopup from "./../../ui/slidePopup/slidePopup";
import LandingSection from "./../sectionLayouts/landingSection/landingSection";
import HeadlineImage from "./../sectionLayouts/headlineImage/headlineImage";
import "./equipamentos.css";

class Equipamentos extends Component {

    constructor() {
        super();

        this.state = {
            text: ["A Escrita, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações.", "O prelo de <a class='popup'>Gutenberg</a> (séc. XV), onde pela primeira vez foram utilizados os caracteres móveis, é o início duma longa história da tecnologia gráfica.", "Contudo, só passados cerca de quatro séculos (final do séc. XIX), com a construção do prelo de <a class='popup'>Stanhope</a>, totalmente em ferro, é que a tipografia evoluiu acentuadamente. <a class='popup'>Senefelder</a> tinha já inventado um novo processo de impressão, sem semelhança com nenhum anterior - a <a class='popup'>Litografia</a>."],
            images: ["/img/top_photos/Sala_Rodrigo_Alvares.jpg"],
            popupText: ["A Escrita, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações."],
            slidePopupActive: false,
        }

        this.openPopup = this.openPopup.bind(this);
    }

    openPopup() {
        this.setState({
            slidePopupActive: !this.state.slidePopupActive,
        });
    }

    render() {
        var popup;

        if(this.state.slidePopupActive) {
            popup = <SlidePopup title="Escrita chinesa" text={this.state.popupText[0]} image="escrita_chinesa.gif" closePopup={this.openPopup} />
        }

        else {
            popup = null;
        }

        console.log(this.state.slidePopupActive, popup);

        return(
            <div id="equipamentos-container">
                {popup}
                <Header />
                <ScrollBar />
                <LandingSection text={this.state.text.slice(0,1)} title="Equipamentos." image={this.state.images[0]} openPopup={this.openPopup} />
                <HeadlineImage text={this.state.text.slice(1,4)} image={this.state.images[0]} openPopup={this.openPopup} />
            </div>
        );
    }
}

export default Equipamentos;