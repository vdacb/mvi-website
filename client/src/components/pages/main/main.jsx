import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import Header from "../../ui/header/header";
import SeeMoreBtn from "../../ui/seeMoreBtn/seeMoreBtn";
import DotMenu from "../../ui/dotMenu/dotMenu"
import "./main.css";

class Main extends Component {

    constructor() {
        super();

        this.state = {
            pages: [
                {
                    link: "alfabetos",
                    title: "Alfabetos",
                    description: "A Escrita, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações.",
                    image: "/img/alfabetos/cover.png",
                },
                {
                    link: "equipamentos",
                    title: "Equipamentos",
                    description: "Os Equipamentos, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações.",
                    image: "/img/equipamentos/cover.jpeg",
                },
                {
                    link: "glossario",
                    title: "Glossário",
                    description: "Um dicionário completo sobre todos os termos relacionados com a imprensa, desde máquinas processos e outros equipamentos.",
                    image: "/img/top_photos/MNI_SalaRodrigoAlvares_ExpoPerm3.jpg",
                },
                {
                    link: "historiauniversal",
                    title: "História Universal",
                    description: "A Imprensa é uma arte antiga, cujas origens surgiram séculos atrás. Desde as primeiras frases impresas aos últimos livros, esta secção mostra os acontecimentos mais importantes da Imprensa ao longo da História.",
                    image: "/img/top_photos/DSC_7456.jpg",
                },
                {
                    link: "museus",
                    title: "Museus",
                    description: "Texto de experiência, mas, de forma sucinta, este é o lugar onde se lê sobre a imprensa globalizada.",
                    image: "/img/museus/cover.jpeg",
                },
                {
                    link: "noticias",
                    title: "Notícias",
                    description: "Aqui pode pesquisar e navegar pelo nosso arquivo de notícias, tudo relacionado com a imprensa.",
                    image: "/img/noticias/cover.jpg"
                },
                {
                    link: "personalidades",
                    title: "Personalidades",
                    description: "A imprensa evoluiu ao longo dos séculos devido aos esforços, descobertas e invenções de várias figuras. Aqui nesta página estão, de forma ordenada, muitas destas figuras que perduraram ao longo dos séculos devido aos objetivos que atingiram.",
                    image: "/img/top_photos/DSC_7399.jpg",
                },
                {
                    link: "visitas",
                    title: "Visitas",
                    description: "Uma página interativa com vídeos sobre as diversas entidades por detrás da imprensa portuguesa.",
                    image: "/img/visitas/cover.JPG",
                },
            ],
            selectedPage: 0,
        }

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(newPageIndex) {
        console.log(newPageIndex);
        
        this.setState({
            selectedPage: newPageIndex,
        });
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <div id="main-container">
                    <div id="nav-container">
                        <DotMenu pages={this.state.pages} dotClick={this.handlePageChange} />
                    </div>

                    <div id="main-img-container">
                        <img id="main-img" alt="Main" src={window.location.origin + this.state.pages[this.state.selectedPage].image}/>
                    </div>

                    <div id="info-container">
                        <h1 className="title">{this.state.pages[this.state.selectedPage].title}</h1>
                        <p className="text">{this.state.pages[this.state.selectedPage].description}</p>

                        <NavLink to={"/" + this.state.pages[this.state.selectedPage].link}>
                            <SeeMoreBtn />
                        </NavLink>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Main;