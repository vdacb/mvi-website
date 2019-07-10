import React, {Component} from "react";
import Header from "./../../ui/header/header";
import ScrollBar from "./../../ui/scrollBar/scrollBar";
import LandingSection from "./../sectionLayouts/landingSection/landingSection";
import SlidePopup from "./../../ui/slidePopup/slidePopup";
import VerticalList from "./../../ui/verticalList/verticalList";
import Footer from "./../../ui/footer/footer";
import "./museus.css";

class Museus extends Component {
    constructor() {
        super();

        this.state = {
            title: "Museus.",
            text: ["Texto de experiência, mas, de forma sucinta, este é o lugar onde se lê sobre a imprensa globalizada"],
            images: ["/img/top_photos/ExpoPermanente.JPG"],
            listOptions: [["A", "B", "À", "Á", "Â", "Ã", "Ä", "Å"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"], ["K", "L"], ["M", "N"], ["O", "P"], ["Q", "R"], ["S", "T"], ["U", "V"], ["W", "X"], ["Y", "Z"]],
            chosenLetter: "",
            popupInfo: {
                visible: false,
            },
            museums: [
                {
                    country: "África do Sul",
                    name: "The Genadendal Printing Works",
                    location: "Genadendal, África do Sul",
                    img: "genadendal.jpeg",
                    links: ["https://www.facebook.com/GenadendalMissionMuseum/photos/our-printing-heritage-part-ithe-genadendal-printing-worksone-hundred-years-ago-i/748488195209585/", "https://www.youtube.com/watch?v=SXM3ccONAIc"],
                },
                {
                    country: "Canadá",
                    name: "Crystal City Community Printing Museum",
                    location: "Crystal City, Manitoba, Canadá",
                    img: null,
                    links: ["https://www.travelmanitoba.com/listings/crystal-city-community-printing-museum/3856/"],
                },
                {
                    country: "Estados Unidos da América",
                    name: "Museu dos Média / Newseum",
                    location: "Nova Iorque, Estados Unidos da América",
                    img: "museu_dos_media.jpeg",
                    links: ["http://www.newseum.org/about/overview/index.html"],
                },
                {
                    country: "Estados Unidos da América",
                    name: "Livraria Pública de Nova Iorque",
                    location: "Nova Iorque, Estados Unidos da América",
                    img: "livraria_nova_iorque.jpeg",
                    links: ["www.nypl.org"],
                },
            ],
        }

        this.togglePopup = this.togglePopup.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleLetterChange = this.handleLetterChange.bind(this);
        this.openLink = this.openLink.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0);
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
        var parentElement = document.querySelector("#museus-warp").getBoundingClientRect();
        
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

    openLink(link) {
        if(link[0] === "w") {
            link = "https://" + link;
        }
        
        window.open(link, "_blank");
    }

    render() {
        var img;
        var popup;

        if(this.state.popupInfo.visible) {
            popup = <SlidePopup title={this.state.popupInfo.title} text={this.state.popupInfo.description.split("\n")} closePopup={this.togglePopup} />
        }

        return(
            <div id="museus-container">
                {popup}
                <Header />
                <ScrollBar />
                <VerticalList changeLetter={this.handleLetterChange} visibilityClass={this.state.verticalListClass} listOptions={this.state.listOptions} />
                <LandingSection title={this.state.title} text={this.state.text[0]} image={this.state.images[0]} /> 
                <div id="museus-warp">
                    {
                        this.state.museums.map((museum, index) => {
                            if(museum.img) {
                                console.log()
                                img = (
                                    <img className="img" alt={museum.name} src={window.location.origin + "/img/museus/" + museum.img} />
                                );
                            }

                            else {
                                img = null;
                            }

                            if(this.state.chosenLetter.includes(museum.country[0])) {
                                return(
                                    <div className="person" key={index}>
                                        <div className="information">
                                            <p className="name text">
                                                <span className="first-letter">{museum.country}</span>
                                                <div className="full-name">
                                                    {museum.name}
                                                </div>
                                            </p>
                                            <p className="desc text">
                                                {
                                                    museum.links.map((link, index) => (
                                                        <a className="popup" onClick={() => this.openLink(link)}>{link}</a>
                                                    ))
                                                }
                                            </p>

                                            {museum.extendedDesc ? <a className="popup" onClick={()=> this.togglePopup(museum)}>Ver Mais</a> : null}
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
                <Footer next="Notícias." link="/noticias" />
            </div>
        );
    }
}

export default Museus;