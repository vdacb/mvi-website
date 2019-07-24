import React, {Component} from "react";
import Header from "./../../ui/header/header";
import ScrollBar from "./../../ui/scrollBar/scrollBar";
import LandingSection from "./../sectionLayouts/landingSection/landingSection";
import VerticalList from "./../../ui/verticalList/verticalList";
import Footer from "./../../ui/footer/footer";
import content from "./content.json";
import "./glossario.css";

class Glossario extends Component {
    constructor() {
        super();
        this.state = {
            title: "Glossário.",
            text: ["Um dicionário completo sobre todos os termos relacionados com a imprensa, desde máquinas processos e outros equipamentos."],
            images: ["/img/top_photos/MNI_SalaRodrigoAlvares_ExpoPerm3.jpg"],
            chosenLetter: "",
            verticalListClass: "",
            listOptions: [["A", "B", "À", "Á", "Â", "Ã", "Ä", "Å"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"], ["K", "L"], ["M", "N"], ["O", "P"], ["Q", "R"], ["S", "T"], ["U", "V"], ["W", "X"], ["Y", "Z"]],
            entries: content["content"],
        }


        this.handleLetterChange = this.handleLetterChange.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleLetterChange(newLetter) {
        this.setState({
            chosenLetter: newLetter
        });
    }

    handleScroll() {
        var parentElement = document.querySelector("#glossario-warp").getBoundingClientRect();

        if((parentElement.top > window.innerHeight/2) || (parentElement.bottom > window.innerHeight/2) && this.state.visibilityClass !== "visible") {
            this.setState({
                verticalListClass: "visible",
            });
        }

        if((parentElement.top > window.innerHeight/2) || (parentElement.bottom < window.innerHeight/2) && this.state.visibilityClass !== "") {
            this.setState({
                verticalListClass: "",
            })
        }
    }

    render() {
        return(
            <div id="glossario-container">
                <Header />
                <ScrollBar />
                <VerticalList changeLetter={this.handleLetterChange} visibilityClass={this.state.verticalListClass} listOptions={this.state.listOptions} />
                <LandingSection title={this.state.title} text={this.state.text[0]} image={this.state.images[0]} />

                <div id="glossario-warp">
                    {
                        this.state.entries.map((entry, index) => {
                            if(this.state.chosenLetter.includes(entry.word[0])) {
                                return(
                                    <div className="definition" key={index}>
                                        <div className="information">
                                            <p className="name text">
                                                <span className="first-letter">{entry.word[0]}</span>
                                                <span className="full-name">
                                                    {entry.word.slice(1, entry.word.length)}
                                                </span>
                                            </p>

                                            <p className="text desc">
                                                {entry.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }

                            return null;
                        })
                    }
                </div>

                <Footer next="Museus." link="/museus" />
            </div>
        );
    }
}

export default Glossario;