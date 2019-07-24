import React, {Component} from "react";
import Header from "../../ui/header/header";
import ScrollBar from "../../ui/scrollBar/scrollBar";
import ScrollUpBtn from "../../ui/scrollUpBtn/scrollUpBtn";
import LandingSection from "../sectionLayouts/landingSection/landingSection";
import VerticalBanner from "../sectionLayouts/verticalBanner/verticalBanner";
import HeadlineImage from "./../sectionLayouts/headlineImage/headlineImage";
import ImageOnCenter from "./../sectionLayouts/imageOnCenter/imageOnCenter";
import PlainText from "./../sectionLayouts/plainText/plainText";
import DropdownList from "./../sectionLayouts/dropdownList/dropdownList";
import Footer from "./../../ui/footer/footer";
import SlidePopup from "./../../ui/slidePopup/slidePopup";
import content from "./content.json";
import "./alfabetos.css";

class Alfabetos extends Component {
    
    constructor() {
        super();

        this.state = {
            title: "Alfabetos",
            text: ["A Escrita, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações.", "Nesta evolução distinguem-se claramente duas fases essenciais: a escrita ideográfica e a escrita fonética. No primeiro estádio, a escrita compunha-se por signos pictóricos que representavam objectos ou ideias, com um simples valor ideográfico. Por isso, eram necessários tantos signos quantos os objectos e ideias a exprimir.", "Numa segunda fase, os signos começaram a representar não já objectos ou ideias, mas os sons com que tais objectos ou ideias eram nomeados no respectivo idioma.", "Os signos além do valor ideográfico passaram a ter também um valor fonético, conforme o texto em que surgiam. Os mais antigos vestígios de escrita provêm de Sumer (baixa Mesopotâmia), cuja antiguidade atinge 5500 anos aproximadamente.", "Tanto a escrita suméria como a escrita egípcia (<a class='popup'>hieroglífica</a>) são ao mesmo tempo escritas ideográficas e fonéticas, que repousam no uso muito elevado de signos. A escrita suméria, por exemplo, dispunha quase de 20 000 ideogramas simples e compostos.", "Mas a grande conquista da escrita foi a criação do Alfabeto.", "A palavra alfabeto é de origem latina (alfabetum), sendo constituída pelas duas primeiras letras do alfabeto grego, alfha e beta. O <a class='popup'>alfabeto fenício</a>, que parece baseado na escrita do proto-Sinai (anterior ao séc. XV a.C.), foi o mais perfeito e mais difundido alfabeto antigo, com uma antiguidade de 3 000 anos. Constituído por cerca e vinte e dois signos, que permitiam escrever qualquer palavra a sua simplicidade foi a chave da sua rápida expansão.", "Foi adoptado, a partir do séc. X a.C., pelos Arameus, que o transmitiram aos Nabateus, Sírios, Persas e Hebreus. O alfabeto árabe parece derivar também dele, embora seja difícil determinar como e quando se deu essa transformação", "Para a nossa civilização, o facto de maior transcendência foi a adopção, cerca do séc. VIII a.C., do alfabeto fenício por parte dos Gregos, que o aperfeiçoaram, introduzindo-lhe a notação dos sons vocálicos.", "As primeiras inscrições alinhavam-se da direita para a esquerda, mas mudou-se depois de orientação, alinhando-se da esquerda para a direita, o que deve ter tido em conta a procura de semelhança com os signos fenícios.", "O alfabeto grego clássico do séc. VI a.C., compõe-se de vinte e quatro letras, vogais e consoantes.", "Deste alfabeto surgiram escritas de populações não helénicas, como o etrusco e o lícico. Na Idade Média, formar-se-iam ainda a partir do grego o alfabeto gótico e os alfabetos eslavos.", "A partir do <a class='popup'>alfabeto etrusco</a> e outras escritas itálicas formou-se o <a class='popup'>alfabeto latino</a>, cujos primeiros documentos datam de final do séc. VII a.C. e princípios de VI a.C.", "Por volta do séc. I a.C., o alfabeto latino encontra-se perfeitamnete constituído, constando de vinte e três letras. Com o Império Romano e o domínio do mundo ocidental, o alfabeto latino haveria de se impôr em todas as colónias.", "O que aqui se pretende dar a conhecer é apenas uma pequena parte da longa evolução de várias escritas, com a apresentação de alguns textos, acompanhados de uma curta explicação quanto ao seu aparecimento e desenvolvimento. Alguns destes alfabetos foram, ao longo dos séculos, fundidos em chumbo por fundidores famosos como Claude Garamond (séc. XVI), que pretendiam oferecer à Europa edições gregas e latinas.", "Os punções utilizados na realização destes alfabetos são hoje considerados 'monumentos históricos', pois constituem um testemunho marcante da evolução da escrita e da civilização."],
            images: ["/img/typography/alfabetos.jpg", "/img/alfabetos.jpg", "/img/top_photos/prelopormenorA.jpg", "/img/top_photos/DSC_7399.jpg", "/img/top_photos/DSC_7456.jpg", "/img//top_photos/DSC_7402.jpg"],
            dropList: [
                ["Alfabetos", ["Alfabeto Arménio", "Alfabeto Etrusco", "Alfabeto Fenício", "Alfabeto Latino", "Alfabeto Russo", "Alfabeto Samaritano", "Alfabeto Sérvio", "Alfabeto Tibetano",]],
                ["Escritas", ["Escrita Anglo-Saxónica", "Escrita Árabe", "Escrita Brâmanesa", "Escrita Chinesa", "Escrita Cuneiforme", "Escrita Etíope", "Escrita Gótica", "Escrita Grega", "Escrita Hieroglífica", "Escrita Ibérica", "Escrita Javanesa", "Escrita Kharostri", "Escrita Khmére ou Cambodjana", "Escrita Mandjou", "Escrita Nagari", "Escrita Nesta´liq", "Escrita Palmíria", "Escrita Persopolitana", "Escrita Siamesa", "Escrita Sul-Arábica", "Escrita Tifinag"]],
                ["Vários", ["Aramaicos", "Bugis", "Caracteres Birmaneses", "Caractere Gujrati", "Cipriota","Fenícios", "Gótico", "Hebreus", "Hieroglifos Hititas", "Inscrições Líbias", "Laociano", "Língua Avesta", "Língua Copta", "Maia", "Runas", "Siríaco", "Tamil", "Turcos Europeus"]]
            ],
            content: content,
            slidePopupActive: false,
            popupContent: {},
        }

        this.openPopup = this.openPopup.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    openPopup(popupContent) {
        this.setState({
            slidePopupActive: !this.state.slidePopupActive,
            popupContent: popupContent,
        });
        console.log("OPEN POPUP");
    }

    render() {
        var popup;

        if(this.state.slidePopupActive) {
            console.log("LOCATION", window.location.origin + "/img/alfabetos/" + this.state.popupContent.img_url);
            popup = <SlidePopup title={this.state.popupContent.title} text={this.state.popupContent.text} image={window.location.origin + "/img/alfabetos/" + this.state.popupContent.img_fname} closePopup={this.openPopup} />
        }

        else {
            popup = null;
        }

        return(
            <div id="alfabetos-container">
                {popup}
                <Header />
                <ScrollBar />
                <ScrollUpBtn />
                <LandingSection title={this.state.title + "."} text={this.state.text[0]} image={this.state.images[0]} />
                <VerticalBanner text={this.state.text.slice(1,3)} image={this.state.images[1]} openPopup={this.openPopup} />
                <VerticalBanner text={this.state.text.slice(3,5)} image={this.state.images[2]} openPopup={this.openPopup} />
                <HeadlineImage text={this.state.text.slice(5,8)} image={this.state.images[3]} openPopup={this.openPopup} />
                <ImageOnCenter text={this.state.text.slice(8,11)} image={this.state.images[4]} openPopup={this.openPopup} />
                <HeadlineImage text={this.state.text.slice(11,14)} image={this.state.images[5]} openPopup={this.openPopup} />
                <PlainText text={this.state.text.slice(14,17)} openPopup={this.openPopup} />
                <DropdownList list={this.state.dropList} content={this.state.content} openPopup={this.openPopup} />
                <Footer link="equipamentos/" next="Equipamentos." />
            </div>
        );
    }
}

export default Alfabetos;
