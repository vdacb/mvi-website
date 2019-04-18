import React, {Component} from "react";
import Header from "../../ui/header/header";
import ScrollBar from "../../ui/scrollBar/scrollBar";
import ScrollUpBtn from "../../ui/scrollUpBtn/scrollUpBtn";
import LandingSection from "../sectionLayouts/landingSection/landingSection";
import VerticalBanner from "../sectionLayouts/verticalBanner/verticalBanner";
import "./alfabetos.css";

class Alfabetos extends Component {
    
    constructor() {
        super();

        this.state = {
            title: "Alfabetos",
            text: ["A Escrita, como um sistema de signos que serve para exprimir graficamente a linguagem, constitui uma das grandes conquistas da Humanidade. Desde os primeiros signos conhecidos até chegar aos sistemas alfabéticos actualmente em uso, a escrita passou por inúmeras mudanças e transformações.", "Nesta evolução distinguem-se claramente duas fases essenciais: a escrita ideográfica e a escrita fonética. No primeiro estádio, a escrita compunha-se por signos pictóricos que representavam objectos ou ideias, com um simples valor ideográfico. Por isso, eram necessários tantos signos quantos os objectos e ideias a exprimir.", "Numa segunda fase, os signos começaram a representar não já objectos ou ideias, mas os sons com que tais objectos ou ideias eram nomeados no respectivo idioma.", "Os signos além do valor ideográfico passaram a ter também um valor fonético, conforme o texto em que surgiam. Os mais antigos vestígios de escrita provêm de Sumer (baixa Mesopotâmia), cuja antiguidade atinge 5500 anos aproximadamente.", "Tanto a escrita suméria como a escrita egípcia (<a>hieroglífica</a>) são ao mesmo tempo escritas ideográficas e fonéticas, que repousam no uso muito elevado de signos. A escrita suméria, por exemplo, dispunha quase de 20 000 ideogramas simples e compostos.", "Para a nossa civilização, o facto de maior transcendência foi a adopção, cerca do séc. VIII a.C., do alfabeto fenício por parte dos Gregos, que o aperfeiçoaram, introduzindo-lhe a notação dos sons vocálicos.", "As primeiras inscrições alinhavam-se da direita para a esquerda, mas mudou-se depois de orientação, alinhando-se da esquerda para a direita, o que deve ter tido em conta a procura de semelhança com os signos fenícios.", "Deste alfabeto surgiram escritas de populações não helénicas, como o etrusco e o lícico. Na Idade Média, formar-se-iam ainda a partir do grego o alfabeto gótico e os alfabetos eslavos.", "A partir do <a>alfabeto etrusco</a> e outras escritas itálicas formou-se o <a>alfabeto latino</a>, cujos primeiros documentos datam de final do séc. VII a.C. e princípios de VI a.C.", "Por volta do séc. I a.C., o alfabeto latino encontra-se perfeitamnete constituído, constando de vinte e três letras. Com o Império Romano e o domínio do mundo ocidental, o alfabeto latino haveria de se impôr em todas as colónias.", "O que aqui se pretende dar a conhecer é apenas uma pequena parte da longa evolução de várias escritas, com a apresentação de alguns textos, acompanhados de uma curta explicação quanto ao seu aparecimento e desenvolvimento. Alguns destes alfabetos foram, ao longo dos séculos, fundidos em chumbo por fundidores famosos como Claude Garamond (séc. XVI), que pretendiam oferecer à Europa edições gregas e latinas.", "Os punções utilizados na realização destes alfabetos são hoje considerados 'monumentos históricos', pois constituem um testemunho marcante da evolução da escrita e da civilização."],
        }
    }

    render() {
        return(
            <div id="alfabetos-container">
                <Header />
                <ScrollBar />
                <ScrollUpBtn />
                <LandingSection title={this.state.title + "."} text={this.state.text[0]} />
                <VerticalBanner text={this.state.text.slice(1,3)} />
                <VerticalBanner text={this.state.text.slice(3,5)} />
            </div>
        );
    }
}

export default Alfabetos;