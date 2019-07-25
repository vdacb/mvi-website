import React, {Component} from "react";
import Header from "./../../ui/header/header";
import ScrollBar from "./../../ui/scrollBar/scrollBar";
import ScrollUpBtn from "./../../ui/scrollUpBtn/scrollUpBtn";
import LandingSection from "./../sectionLayouts/landingSection/landingSection";
import DropdownList from "./../sectionLayouts/dropdownList/dropdownList";
import Footer from "./../../ui/footer/footer";
import content from "./content.json";
import "./historiaUniversal.css";

class HistoriaUniversal extends Component {

    constructor() {
        super();
        console.log("CONTENT", content["1800"])
        this.state = {
            text: ["A Imprensa é uma arte antiga, cujas origens surgiram séculos atrás. Desde as primeiras frases impresas aos últimos livros, esta secção mostra os acontecimentos mais importantes da Imprensa ao longo da História."],
            images: ["/img/top_photos/DSC_7456.jpg"],
            dropList: [
                ["1400", content["1400"].map(item => item.year + " - " + item.description)],
                ["1500", content["1500"].map(item => item.year + " - " + item.description)],
                ["1600", content["1600"].map(item => item.year + " - " + item.description)],
                ["1700", content["1700"].map(item => item.year + " - " + item.description)],
                ["1800", content["1800"].map(item => item.year + " - " + item.description)],
            ],
        }

        console.log("TEST", this.state.dropList[0]);
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
                <DropdownList list={this.state.dropList} page="História Universal"/>
                <Footer next="Glossário." link="glossario" />
            </div>
        )
    }
}

export default HistoriaUniversal;