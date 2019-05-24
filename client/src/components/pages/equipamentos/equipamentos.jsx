import React, {Component} from "react";
import Header from "./../../ui/header/header";
import ScrollBar from "./../../ui/scrollBar/scrollBar";
import SlidePopup from "./../../ui/slidePopup/slidePopup";
import LandingSection from "./../sectionLayouts/landingSection/landingSection";
import HeadlineImage from "./../sectionLayouts/headlineImage/headlineImage";
import BannerOnBottom from "./../sectionLayouts/bannerOnBottom/bannerOnBottom";
import DropdownList from "./../sectionLayouts/dropdownList/dropdownList";
import Footer from "./../../ui/footer/footer";
import "./equipamentos.css";

class Equipamentos extends Component {

    constructor() {
        super();

        this.state = {
            text: ["A Escrita, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações.", "O prelo de <a class='popup'>Gutenberg</a> (séc. XV), onde pela primeira vez foram utilizados os caracteres móveis, é o início duma longa história da tecnologia gráfica.", "Contudo, só passados cerca de quatro séculos (final do séc. XIX), com a construção do prelo de <a class='popup'>Stanhope</a>, totalmente em ferro, é que a tipografia evoluiu acentuadamente. <a class='popup'>Senefelder</a> tinha já inventado um novo processo de impressão, sem semelhança com nenhum anterior - a <a class='popup'>Litografia</a>.", "Logo em 1811, <a class='popup'>Frederick Koenig</a> contrói a primeira máquina cilíndrica, e introduz definitivamente o mecanismo na imprensa, facilitando desta forma a reprodução. É desta máquina que partem todos os outros progressos na velocidade da impressão, até às actuais rotativas. O secular trabalho do compositor manual é, entretanto, ameaçado pelo aparecimento da composição mecânica com os sistemas <a class='popup'>Linotype</a>, <a class='popup'>Typograph</a> e <a class='popup'>Monotype</a>. O sistema offset, inventado no princípio do séc. XX, só viria a impôr-se no pós-II Grande Guerra, substituíndo irreversivelmente a impressão tipográfica tradicional.", "Entretanto, os sistemas computorizados e de telecomunicações conquistam rapidamente a imprensa, nomeadamente os jornais, permitindo impressões simultâneas à distância.O Museu Virtual da Imprensa permite-lhe conhecer alguns destes marcos da tecnologia da imprensa, sistematizados em quatro grupos"],
            images: ["/img/top_photos/Sala_Rodrigo_Alvares.jpg"],
            popupText: {
                "Gutenberg": {
                    title: "Johann Gensfleish Gutenberg",
                    text: ["Nascido na cidade de Móguncia (Alemanha), no seio de uma família bastante próspera, é a ele que se deve a criação do processo de impressão com caracteres móveis - 'a tipografia'. Tanto o seu pai como o tio eram funcionários da Casa da Moeda do arcebispo de Móguncia, sendo provavelmente ali que Joahann aprendeu a arte da precisão em trabalhos de metal. Em 1428, Gutenberg parte para Estrasburgo onde procedeu às primeiras tentativas de imprimir com caracteres móveis e onde deu a conhecer a sua ideia. Nesta cidade terá, provavelmente, em 1442, impresso o primeiro exemplar na sua prensa original - um pedaço de papel, com onze linhas.", "Em 1448 voltou a Mogúncia. Aqui, em 1450, conhece Johann Fust, homem de dinheiro, que lhe terá emprestado 800 ducados, exigindo-lhe a participação nos lucros da empresa que então formaram e a que deram o nome de 'Das Werk der Buchei' (Fábrica de Livros). A sociedade ganhou pouco tempo depois um novo sócio, Pedro Schoffer. Terá sido este que descobriu o modo de fundir e fabricar caracteres, aliando o chumbo ao antimónio, devendo-se a ele também uma tinta composta de negro de fumo.", "Mas é a Gutenberg que a história atribui o mérito principal da invenção da imprensa, não só pela ideia dos tipos móveis mas também pelo aperfeiçoamento da prensa (a prensa já era conhecida e utilizava-se para cunhar moedas, espremer uvas, fazer impressões em tecido e acetinar o papel). Nos primeiros impressos então produzidos contam-se várias edições do 'Donato' e bulas de indulgências concedidas pelo Papa Nicolau V.", "No início da década de 1450, Gutenberg iniciou a impressão da célebre Bíblia de quarenta e duas linhas (em duas colunas). Com cada letra composta à mão, e com cada página laboriosamente colocada na impressora, tirada, seca e depois impressa no verso, parece quase impossível que alguém tivesse coragem para começar.", "Ao que parece Gutenberg estaria a imprimir trezentas folhas por dia, utilizando seis impressoras. A Bíblia têm 641 páginas, e pensa-se que foram produzidas cerca de trezentas cópias, das quais existem cerca de quarenta. Nem todas as cópias são iguais, tendo algumas no início de novos capítulos, letras pintadas à mão, em caixa alta. Os peritos reconhecem que a Bíblia foi impressa em dez secções, o que significa que Gutenberg deve ter possuído tipos suficientes para imprimir cerca de 130 páginas de cada vez.", "Mais tarde, em 1455, depois de realizada esta impressão, a sociedade desfez-se por diferenças de interesses e direitos, suscitando-se entre Fust e Gutenberg tal dissidência que a justiça teve que intervir. Como consequência do julgamento e como compensação pela dívida, Fust ficou com a impressora, os tipos e as bíblias já completas, ou seja, todo o negócio de Gutenberg. Terá sido também em 1455 o ano de publicação da 'Bíblia de quarenta e duas linhas'."],
                    image: "/img/personalidades/gutenberg.gif",
                },
            },
            dropList: [
                ["Pré-impressão", ["Mquina1", "Mquina1", "Mquina1", "Mquina1", "Mquina1"]],
                ["Impressão", ["Maquica2", "Maquica2", "Maquica2", "Maquica2", "Maquica2",]],
                ["Acabamentos", ["Maquina3", "Maquina3", "Maquina3", "Maquina3", "Maquina3"]],
                ["Diversos", ["Magiona4", "Magiona4", "Magiona4", "Magiona4", "Magiona4", "Magiona4"]],
            ],
            selectedPopupTitle: "",
            slidePopupActive: false,
        }

        this.openPopup = this.openPopup.bind(this);
    }

    openPopup(ev) {
        this.setState({
            slidePopupActive: !this.state.slidePopupActive,
            selectedPopupTitle: ev.target.innerText,
        });
    }

    render() {
        var popup;

        if(this.state.slidePopupActive) {
            popup = <SlidePopup title={this.state.popupText[this.state.selectedPopupTitle].title} text={this.state.popupText[this.state.selectedPopupTitle].text} image={this.state.popupText[this.state.selectedPopupTitle].image} closePopup={this.openPopup} />
        }

        else {
            popup = null;
        }

        return(
            <div id="equipamentos-container">
                {popup}
                <Header />
                <ScrollBar />
                <LandingSection text={this.state.text.slice(0,1)} title="Equipamentos." image={this.state.images[0]} openPopup={this.openPopup} />
                <HeadlineImage text={this.state.text.slice(1,3)} image={this.state.images[0]} openPopup={this.openPopup} />
		        <BannerOnBottom text={this.state.text.slice(3,5)} openPopup={this.openPopup} />
                <DropdownList list={this.state.dropList}/>
                <Footer link="visitas/" next="Visitas" />
            </div>
        );
    }
}

export default Equipamentos;
