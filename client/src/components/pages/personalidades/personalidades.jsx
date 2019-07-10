import React, {Component} from "react";
import LandingSection from "./../sectionLayouts/landingSection/landingSection"; 
import Header from "./../../ui/header/header";
import ScrollBar from "./../../ui/scrollBar/scrollBar";
import VerticalList from "./../../ui/verticalList/verticalList";
import Footer from "./../../ui/footer/footer";
import SlidePopup from "./../../ui/slidePopup/slidePopup";
import "./personalidades.css";

class Personalidades extends Component {
    constructor() {
        super();

        this.state = {
            title: "Personalidades.",
            text: ["A imprensa evoluiu ao longo dos séculos devido aos esforços, descobertas e invenções de várias figuras. Aqui nesta página estão, de forma ordenada, muitas destas figuras que perduraram ao longo dos séculos devido aos ibjetivos que atingiram."],
            images: ["/img/top_photos/DSC_7399.jpg"],
            listOptions: [["A", "B", "À", "Á", "Â", "Ã", "Ä", "Å"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"], ["K", "L"], ["M", "N"], ["O", "P"], ["Q", "R"], ["S", "T"]],
            chosenLetter: "",
            verticalListClass: "",
            popupInfo: {
                visible: false,
            },
            personalities: [
                {
                    firstName: "John",
                    lastName: "Baskerville",
                    periodAlive: "1706-1775",
                    description: "Impressor inglês, nascido em Wolvery. Tornou-se célebre por fundir ele próprio os tipos que imprimia. Também inventou um novo tipo de papel, o 'papel vitela' (veal paper).",
                    extendedDesc: null,
                    image: "baskerville.gif",
                },
                {
                    firstName: "William",
                    lastName: "Bullock",
                    periodAlive: null,
                    description: "William Bullock, um americano atento aos últimos desenvolvimentos nas artes de impressão, construiu pela primeira vez em Philadelphia, em 1865, uma impressora rotativa cilíndrica de papel contínuo.",
                    extendedDesc: null,
                    image: null,
                },
                {
                    firstName: "Rodrigo",
                    lastName: "Álvares",
                    periodAlive: null,
                    description: "Considerado o primeiro impressor português, nasceu em Vila Real, tendo iniciado a sua actividade de impressor e editor no Porto, em 1497. Aqui, como colaborador do bispo D. Diogo de Sousa, imprimiu duas únicas obras: 'As Constituições sinoidais de D. Diogo de Sousa' e os 'Evangelhos e epistolas', as duas impressas em 1497. Da primeira são conhecidos apenas dois exemplares, um dos quais está incompleto, pois falta-lhe a folha de subscrição tipográfica final, e encontra-se na Biblioteca Pública Municipal do Porto. O outro, completo, foi recentemente adquirido pela Fundação Casa de Bragança para a Biblioteca do Paço Ducal de Vila Viçosa. «...»",
                    extendedDesc: "Dos 'Evangelhos e epístolas' é conhecido um único exemplar, completo, que foi apresentado em 1920, por Jaime Cortesão, então director da Biblioteca Nacional. Esta obra foi publicada e impressa pela primeira vez em Sevilha em 1485, na oficina de Pablo Hurus e, em 1493, na cidade de Salamanca por um impressor desconhecido. A tradução para português terá sido realizada pelo próprio Rodrigo Álvares a partir desta última edição, tendo a sua impressão sido feita em gótico de dois corpos, em 25 de Outubro de 1497. A composição é a duas colunas e tem 62 gravuras, catorze das quais repetidas. A foliação é de 200 fólios e a imposição é em cadernos de 4 folhas em papel grosso e amarelado.\nQuanto às 'Constituições...', acabadas de imprimir em 4 de Janeiro de 1497 é uma obra com 32 fólios, em tipo gótico dum só corpo, com capitais lombárdicas e floreadas de desenho em branco sobre fundo negro. A letra capital Q com que o texto começa tem uma xilogravura dentro do Q, onde estão representadas as armas de D. Diogo de Sousa. A composição tipográfica é de fora a fora, seguida, a uma coluna, com 40 linhas por folha. A imposição é em 3 cadernos. O livro contém 60 constituições diocesanas, divulgadas no sínodo de 1496 e um resumo final dos princípios e orações fundamentais do cristianismo.\nAs relações entre D. Diogo de Sousa e Rodrigo Álvares estenderam-se para lá do ano de 1497 e é bem possível que o tipógrafo possa ter dado à estampa, mais tarde, por volta de 1506, no Porto ou em Braga, umas segundas 'Constituições...' de D. Diogo de que existe um exemplar na Biblioteca Pública Municipal do Porto, sem indicação de data nem local de impressão. Para além destas impressões, Rodrigo Álvares terá sido impressor de breviários.\nPor desvendar continua, no entanto, o local onde Rodrigo Álvares terá realizado a sua formação profissional de base. Aquilino Ribeiro defende que terá aprendido com o alemão Paulo Hurus em Saragoça, hipótese que Artur Anselmo considera fantasista. Outros são da opinião que terá aprendido em Salamanca, ou em Braga, na Oficina de João Gherline. Esta hipótese aponta para que Rodrigo Álvares tenha sido mesmo discípulo de Gherline e dele teria recebido os tipos para os trabalhos realizados no Porto, os quais são um ampliação das matrizes do 'Brevirium Bracharense' de 1494.",
                    image: null,
                },
                {
                    firstName: "François Ambroise",
                    lastName: "Didot",
                    periodAlive: "1730-1804",
                    description: "De origem francesa, o seu nome está intimamente ligado à uniformização dos caracteres, tendo concebido em 1757 um sistema de medida tipográfico e, em 1784, um alfabeto mais lógico e simples. Contruiu por volta de 1780 uma prensa de um só movimento, tendo substituído a madeira pelo ferro, mármore e cobre. Através de uma mármore e uma platina de dimensões idênticas, tornou a impressão mais rápida e a pressão mais forte. Dispunha de uma fundição e de uma fábrica de papel. Em 1795, Fermin Didot (1764-1836) filho de François, faz os primeiros ensaios, com êxito, da estereotipia e da qual, no mesmo ano, pede o respectivo brevet, sendo por isso considerado o inventor da Estereotipia. A família Didot marcou de forma indelével a tipografia francesa e europeia até ao séc. XIX.",
                    extendedDesc: null,
                    image: "didot.gif",
                },
                {
                    firstName: "Étienne",
                    lastName: "Dolet",
                    periodAlive: "1509-1546",
                    description: "De origem francesa, o seu nome está intimamente ligado à uniformização dos caracteres, tendo concebido em 1757 um sistema de medida tipográfico e, em 1784, um alfabeto mais lógico e simples. Contruiu por volta de 1780 uma prensa de um só movimento, tendo substituído a madeira pelo ferro, mármore e cobre. Através de uma mármore e uma platina de dimensões idênticas, tornou a impressão mais rápida e a pressão mais forte. Dispunha de uma fundição e de uma fábrica de papel. Em 1795, Fermin Didot (1764-1836) filho de François, faz os primeiros ensaios, com êxito, da estereotipia e da qual, no mesmo ano, pede o respectivo brevet, sendo por isso considerado o inventor da Estereotipia. A família Didot marcou de forma indelével a tipografia francesa e europeia até ao séc. XIX.",
                    extendedDesc: null,
                    image: null,
                },
            ],
        }

        this.handleLetterChange = this.handleLetterChange.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        const links = document.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", this.togglePopup);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        const links = document.querySelectorAll("a.popup");

        for(var i = 0; i < links.length; i++) {
            links[i].addEventListener("click", this.togglePopup);
        }
    }

    togglePopup(characterInfo) {
        this.setState({
            popupInfo: {
                visible: !this.state.popupInfo.visible,
                title: characterInfo.firstName + " " + characterInfo.lastName || "",
                img: characterInfo.img || "",
                description: characterInfo.extendedDesc || "",
            },
        });
    }

    handleScroll() {
        var parentElement = document.querySelector("#personalities-container").getBoundingClientRect();

        if((parentElement.top > window.innerHeight/2) || (parentElement.bottom > window.innerHeight/2)) {
            this.setState({
                verticalListClass: "visible",
            });
        }

        if((parentElement.top > window.innerHeight/2) || (parentElement.bottom < window.innerHeight/2)) {
            this.setState({
                verticalListClass: "",
            })
        }
    }

    handleLetterChange(newLetter) {
        this.setState({
            chosenLetter: newLetter
        });
    }

    render() {
        var periodAlive;
        var img;
        var popup;

        if(this.state.popupInfo.visible) {
            popup = <SlidePopup title={this.state.popupInfo.title} text={this.state.popupInfo.description.split("\n")} closePopup={this.togglePopup} />
        }

        return(
            <div id="personalidades-container">
                {popup}
                <Header />
                <ScrollBar />
                <VerticalList changeLetter={this.handleLetterChange} visibilityClass={this.state.verticalListClass} listOptions={this.state.listOptions} />
                <LandingSection title={this.state.title} text={this.state.text[0]} image={this.state.images[0]} /> 
                <div id="personalities-container">
                    {
                        this.state.personalities.map((personality, index) => {
                            if(personality.periodAlive) {
                                periodAlive = (
                                    <span className="period-alive">{" (" + personality.periodAlive + ")"}</span>
                                )
                            }

                            else {
                                periodAlive = null;
                            }

                            if(personality.image) {
                                img = (
                                    <img className="img" alt={personality.firstName + " " + personality.lastName} src={window.location.origin + "/img/personalidades/" + personality.image} />
                                );
                            }

                            else {
                                img = null;
                            }

                            if(this.state.chosenLetter.includes(personality.lastName[0])) {
                                return(
                                    <div className="person" key={index}>
                                        <div className="information">
                                            <p className="name text">
                                                <span className="first-letter">{personality.lastName[0]}</span>
                                                <span className="full-name">
                                                    {personality.lastName.slice(1, personality.lastName.length) + ", " + personality.firstName}
                                                {periodAlive}
                                                </span>
                                            </p>
                                            <p className="text">{personality.description}</p>

                                            {personality.extendedDesc ? <a className="popup" onClick={()=> this.togglePopup(personality)}>Ver Mais</a> : null}
                                        </div>
                                        <div className="img-container">
                                            {img}
                                        </div>
                                    </div>
                                )
                            }

                            return null;
                        })
                    }
                </div>
                <Footer next="Alfabetos." link="/alfabetos" />
            </div>
        )
    }
}

export default Personalidades;