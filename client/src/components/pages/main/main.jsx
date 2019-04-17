import React, {Component} from "react";
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
                    title: "Alfabetos",
                    description: "A Escrita, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações.",
                },
                {
                    title: "Equipamentos",
                    description: "Os Equipamentos, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações."
                },
                {
                    title: "Glossário",
                    description: "A Escrita, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações.",
                },
                {
                    title: "História Universal",
                    description: "Os Equipamentos, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações."
                },
                {
                    title: "Museus",
                    description: "A Escrita, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações.",
                },
                {
                    title: "Notícias",
                    description: "Os Equipamentos, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações."
                },
                {
                    title: "Personalidades",
                    description: "A Escrita, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações.",
                },
                {
                    title: "Visitas",
                    description: "Os Equipamentos, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações."
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
                        <img id="main-img" alt="Main image" src={window.location.origin + "/img/alfabetos.jpg"}/>
                    </div>

                    <div id="info-container">
                        <h1 className="title">{this.state.pages[this.state.selectedPage].title}</h1>
                        <p className="text">{this.state.pages[this.state.selectedPage].description}</p>

                        <SeeMoreBtn />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Main;