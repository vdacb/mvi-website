import React, {Component} from "react";
import Header from "./../../ui/header/header";
import ScrollBar from "./../../ui/scrollBar/scrollBar";
import ScrollUpBtn from "./../../ui/scrollUpBtn/scrollUpBtn";
import LandingSection from "./../sectionLayouts/landingSection/landingSection";
import DropdownList from "./../sectionLayouts/dropdownList/dropdownList";
import Footer from "./../../ui/footer/footer";
import "./historiaUniversal.css";

class HistoriaUniversal extends Component {

    constructor() {
        super();

        this.state = {
            text: ["A Imprensa é uma arte antiga, cujas origens surgiram séculos atrás. Desde as primeiras frases impresas aos últimos livros, esta secção mostra os acontecimentos mais importantes da Imprensa ao longo da História."],
            images: ["/img/top_photos/DSC_7456.jpg"],
            dropList: [
                ["1400", ["1397/1400 - Período provável do nascimento de <a class='popup'>Johannes Genfleisch Gutenberg</a> em Mainz.", "1454 - Gutenberg e Fust publicam as Cartas de Indulgências de Nicolas V - edição a 30 linhas; e Gutenberg com Peter Schöffer publicam as mesmas cartas em edição a 31 linhas.", "1460 - Impressão, em Mainz, do 'Catholicam de Balbi' atribuida a Gutenberg, embora não contenha o nome do impressor. Trata-se de uma enciclopédia célebre na Idade Média."]],
                ["1500", ["1507 - Gilles Gourmont imprime em Paris, textos gregos e hebraicos.", "1521 - O rei francês Francisco I ordena ao parlamento o controlo da venda de livros relativos à fé Cristã e à Santa Escritura.", "1540 - Pela primeira vez no Ocidente são fundidos, em Lisboa, caracteres exóticos. Acontece na obra de João de Barros 'A Cartinha', com preceitos e mandamentos da Santa Madre Igreja, impressa por Luís Rodrigues, em Lisboa."]],
                ["1600"],
                ["1700"],
                ["1800"],
                ["1900"],
            ],
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <div id="hu-container">
                <Header />
                <ScrollBar />
                <ScrollUpBtn />
                <LandingSection text={this.state.text[0]} title="História Universal." image={this.state.images[0]} />
                <DropdownList list={this.state.dropList}/>
                <Footer next="Glossário." link="glossario" />
            </div>
        )
    }
}

export default HistoriaUniversal;