import React, {Component} from "react";
import VerticalText from "./../../ui/verticalText/verticalText";
import "./about.css";

class About extends Component {

    constructor() {
        super();

        this.state = {
            title: "Museu Virtual da Imprensa",
            mainText: ["O Museu Virtual da Imprensa é um projecto da AMI - Associação Museu da Imprensa, Porto, Portugal. Através dele, pretende-se divulgar a história do sector, mostrar património, sugerir itinerários, recolher informação sobre a museologia da imprensa e artes gráficas e dar/receber notícias.", "Desde as escritas milenares até à edição electrónica dos nossos dias, passando pela tipografia de Gutenberg, pela litografia, pela fotogravura, pelas rotativas, pelos jornais livres e amordaçados ao longo dos tempos, etc., etc., há um mundo a descobrir através da nova realidade virtual.", "Esse mundo começa neste  projecto virtual e poderá acabar  em cada um dos vários museus  reais de imprensa e artes gráficas espalhados pelos cinco continentes. No tempo de Gutenberg navegava-se pelos oceanos - por 'mares nunca dantes navegados', como escrevera o poeta português Luís de Camões; agora navega-se virtualmente por todo o mundo.", "Este museu pretende ser um ciberespaço de participação global de instituições e pessoas envolvidas, ou simplesmente interessadas, nas coisas da imprensa e das artes gráficas. Por isso mesmo, toda a colaboração será bem vinda."],
            textAuthor: "Luíz Humberto Marcos",
        }

        this.goToLastPage = this.goToLastPage.bind(this);
    }

    goToLastPage() {
        this.props.history.goBack();
    }

    render() {
        return(
            <div id="about-container">
            <img id="close-cross" src={process.env.PUBLIC_URL + "/img/black_cross.png"} alt="close popup" onClick={this.goToLastPage}/>
                <div className="title">{this.state.title}</div>
                <div id="about-content">
                    {
                        this.state.mainText.map(text => (
                            <p className="text">{text}</p>
                        ))
                    }
                </div>
                <div id="text-author" className="text">{this.state.textAuthor}</div>

                <VerticalText text="Museu Virtual" />
            </div>
        )
    }
}

export default About;
