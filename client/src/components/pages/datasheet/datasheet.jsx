import React, {Component} from "react";
import VerticalText from "./../../ui/verticalText/verticalText";
import "./datasheet.css"

class Datasheet extends Component {
    constructor() {
        super();

        this.state = {
            title: "Ficha Técnica",
            mainText: [
                {
                    sectionName: "Autoria e direção do projeto",
                    participants: ["Luíz Humberto Marcos"],
                },
                {
                    sectionName: "Fotografia",
                    participants: ["Miguel Cunha", "Renato Sousa"],
                },
                {
                    sectionName: "Design",
                    participants: ["Vasco Almeida"],
                },
                {
                    sectionName: "Programação",
                    participants: ["Vasco Almeida"],
                },
                {
                    sectionName: "Pesquisa e textos",
                    participants: ["Conceição Pratas", "José Miguel Neves", "Luíz Humberto Marcos", "Susana Mota"],
                },
                {
                    sectionName: "VRML",
                    participants: ["João Raposo", "José Miguel Mesquita", "Miguel Carvalho"],
                },
                {
                    sectionName: "Versão inglesa",
                    participants: ["António Jorge Silva" ,"Conceição Pratas", "Isabel Gonçalves"],
                },
            ],
        }

        this.goToLastPage = this.goToLastPage.bind(this);
    }

    goToLastPage() {
        this.props.history.goBack();
    }

    render() {
        return(
            <div id="datasheet-container">
            <img id="close-cross" src={process.env.PUBLIC_URL + "/img/black_cross.png"} alt="close popup" onClick={this.goToLastPage}/>
                <div className="title">{this.state.title}</div>
                <div id="datasheet-content">
                    {
                        this.state.mainText.map(text => (
                            <div className="field">
                                <p className="text field-title">{text.sectionName}</p>
                                {
                                    text.participants.map(person => (
                                        <p className="text">{person}</p>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div id="text-author" className="text">{this.state.textAuthor}</div>

                <VerticalText text="Museu Virtual" />
            </div>
        );
    }
}

export default Datasheet;
