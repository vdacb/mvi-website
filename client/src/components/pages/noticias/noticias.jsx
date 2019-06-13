import React, {Component} from "react";
import LandingSection from "./../sectionLayouts/landingSection/landingSection"; 
import Header from "./../../ui/header/header";
import ScrollBar from "./../../ui/scrollBar/scrollBar";
import FullScreenPopup from "./../../ui/fullScreenPopup/fullScreenPopup";
import Footer from "./../../ui/footer/footer"; 
import "./noticias.css";

class Noticias extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            title: "Notícias",
            text: ["Aqui pode pesquisar e navegar pelo nosso arquivo de notícias, tudo relacionado com a imprensa."],
            images: ["/img/top_photos/CIMG0386.JPG"],
            chosenNews: 0,
            fsPopupActive: false,
            scrollDistanceShowImage: 600,
            newsArr: [
                {
                    from: "Museu Nacional da Imprensa",
                    title: "Museu da Imprensa assinala libertação de Auschwitz (71 anos) com livro de poemas e espetáculo teatral",
                    text: "O Museu Nacional da Imprensa assinala a comemoração do Aniversário da Libertação de Auschwitz a 27 de janeiro, iniciativa integrada na exposição de fotografia de David Araújo, “Auschwitz: Marca(s) de uma herança 71 anos depois. Há 70 anos, em 27 de janeiro de 1945, o Exército Vermelho libertou Auschwitz, o maior e mais terrível campo de extermínio nazi, em cujas câmaras de gás e crematórios foram mortas pelo menos um milhão de pessoas.\nO programa que comemora o 71.º da efeméride terá início às 16H00 com o lançamento do livro “Poemas de Shoá” da autora Ana Paula Eabrouk (Edições Esgotadas). Segue-se o espetáculo “Com as nossas mãos”, às 17H, encenado por Maíra Ribeiro e interpretado pelos alunos da Oficina de Teatro da Escola Secundária Carlos Amarante – OutrArte.",
                    image: "mni_auschwitz.jpg",
                }, 
                {
                    from: "Museu Nacional da Imprensa",
                    title: "Sinfonia Completa livro de conto de Manuela de Azevedo",
                    text: "A escritora e jornalista Manuela de Azevedo prepara-se para lançar um novo livro: Sinfonia Completa. São vários contos com que quer fechar – diz ela – a sua carreira literária, pela mão do Museu Nacional da Imprensa (MNI). A 31 de agosto fará 102 anos. Os nove contos que integram esta nova obra da autora deixam patentes os traços literários de uma escrita leve e direta de quem lidou com a urgência da palavra, na prática de setenta anos de jornalismo. A obra tem um posfácio assinado por Luís Humberto Marcos, diretor do MNI. Esta será a sua segunda obra depois de ter feito 100 anos, em Agosto de 2011. Para trás ficam mais de trinta obras literárias, entre poesia, teatro, ensaio e ficção, algumas delas premiadas.",
                    image: "capa_sinfonia_m_a.jpg",
                },
                {
                    from: "Museu Nacional da Imprensa",
                    title: "15º PortoCartoon - World Festival",
                    text: "Abre no dia 23 de junho a mostra do PortoCartoon 2013 -, que reúne cerca de 400 desenhos vindos de todo o mundo. Distribuídos por 800m2, entre a Galeria Internacional do Cartoon e a Galeria de Exposições Temporárias, poderão ser vistos os melhores trabalhos selecionados pelo Júri internacional. Em apreciação estiveram cerca 1700 obras, de mais de 500 artistas, oriundas de todos os continentes. O Irão é o país com maior participação: 121 trabalhos, de 41 cartunistas. Seguem-se a Roménia, a Sérvia, a Turquia, Portugal e Bélgica. A 15ª edição do PortoCartoon, subordinada ao tema “Liberdade, Igualdade e Fraternidade”, inclui ainda os Prémios Especiais Manoel de Oliveira e José Saramago. Estará patente até final de dezembro.",
                    image: "porto_cartoon15.jpg",
                },
                {
                    from: "Exposição Concurso Europeu Cartoon - Estação do Rossio, Lisboa",
                    title: "200 desenhos de humor contra a discriminação",
                    text: "Vários milhares de pessoas visitaram a exposição europeia de cartoon “Desigualdades, Discriminações e Preconceitos” na Estação do Rossio, em Lisboa. Composta por cerca de 200 desenhos, a mostra apresentou os premiados, as menções honrosas e os melhores trabalhos do Concurso Europeu de Cartoon com o mesmo nome, promovido pelo Instituto Nacional para a Reabilitação em parceria com o Museu Nacional da Imprensa, no âmbito do Ano Europeu da Igualdade de Oportunidades para Todos. O museu foi a entidade escolhida para parceira desta iniciativa inédita a nível europeu, tendo sido responsável pela organização do concurso, pela montagem da exposição dos trabalhos seleccionados e produção do livro. A exposição, comissariada por Luís Humberto Marcos, director do Museu, mostrou desenhos enviados por artistas de 29 países europeus, tão diversos entre si como Alemanha, Azerbeijão, Bulgária, Espanha, Eslováquia, Grécia, Itália, Inglaterra, Israel, Holanda, Macedónia, Polónia, ou Ucrânia, entre outros. ",
                    image: "desenhos_discriminacao.jpg",
                }
            ],
            stickyImageClass: "",
        }

        this.handleNewsHover = this.handleNewsHover.bind(this);
        this.handleStickyImageOnScroll = this.handleStickyImageOnScroll.bind(this);
        this.toggleFSPopup = this.toggleFSPopup.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
    } 

    componentDidMount() {
        window.addEventListener("scroll", this.handleStickyImageOnScroll);
        window.addEventListener("resize", this.handleWindowResize);
        window.scrollTo(0,0);
        this.handleWindowResize();
    }

    componentWillUnmount() {
       window.removeEventListener("scroll", this.handleStickyImageOnScroll);
       window.removeEventListener("resize", this.handleWindowResize);
    }

    handleWindowResize() {
        var parentElement = document.querySelector("#noticias-container #noticias-wrap").getBoundingClientRect();
        var body = document.body.getBoundingClientRect();
        console.log(parentElement);

        this.setState({
            scrollDistanceShowImage: parentElement.top - body.top,
        })
    }

    handleStickyImageOnScroll() {
        var parentElement = document.querySelector("#noticias-container #noticias-wrap").getBoundingClientRect();

        if((parentElement.top > window.innerHeight/2) || (parentElement.bottom > window.innerHeight/2)) {
            this.setState({
                stickyImageClass: "fixed",
            });
        }

        if((parentElement.top > window.innerHeight/2) || (parentElement.bottom < window.innerHeight/2)) {
            this.setState({
                stickyImageClass: "",
            })
        }
    }

    handleNewsHover(newsId) {
        this.setState({
            chosenNews: newsId,
        });
    }

    toggleFSPopup() {
        this.setState({
            fsPopupActive: !this.state.fsPopupActive,
        });
    }
    
    render() {
        var popup;

        if(this.state.fsPopupActive) {
            popup = <FullScreenPopup news={this.state.newsArr[this.state.chosenNews]} closePopup={this.toggleFSPopup} />
        }

        return(
            <div id="noticias-container">
                {popup}
                <Header />
                <ScrollBar />
                <LandingSection title={this.state.title} text={this.state.text.slice(0,1)} image={this.state.images[0]} />
                <div id="noticias-wrap">
                    {
                        this.state.newsArr.map((news, index) => (
                            <div key={index} className="news" onMouseEnter={this.handleNewsHover.bind(this, index)} onClick={this.toggleFSPopup}>
                                <p className="text">{news.from}</p>
                                <div className="title">{news.title}</div>
                                <div className="seperation-bar"></div>
                            </div>
                        ))
                    }
                    <div id="noticias-image-container" className={this.state.stickyImageClass} >
                        <img src={window.location.origin + "/img/noticias/" + this.state.newsArr[this.state.chosenNews].image} />
                    </div>
                </div>
                <Footer link="/alfabetos" next="Alfabetos" />
            </div>
        )
    }
}

export default Noticias;
