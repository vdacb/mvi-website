import React, {Component} from "react";
import Header from "./../../ui/header/header";
import ScrollBar from "./../../ui/scrollBar/scrollBar";
import LandingSection from "./../sectionLayouts/landingSection/landingSection";
import VerticalList from "./../../ui/verticalList/verticalList";
import Footer from "./../../ui/footer/footer";
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
            entries: [
                {
                    term: "Acrografia",
                    definition: "Arte de gravar em relevo por meio água forte.",
                }, 
                {
                    term: "Alcear",
                    definition: "Colocar as folhas dobradas de uma obra sobre uma mesa em porções aproximadamente iguais, recolhê-las e compilá-las desde a primeira folha até à última.",
                },
                {
                    term: "Alinhar",
                    definition: "Acertar uma composição defeituosa, mal justificada ou parangonagens mal feitas, mostrando ondulação.",
                }, 
                {
                    term: "Balancé",
                    definition: "Aparelho em forma de prensa com dois planos em sentido horizontal, usado pelos encadernadores para, tendo aquecido as letras de metal, cunhar a ouro as capas dos livros.",
                }, 
                {
                    term: "Balas",
                    definition: "Instrumentos de que se serviam os antigos impressores para dar tinta às formas antes da invenção dos rolos. Depois de compostos e justos os caracteres, a tinta era destribuída com uma pequena almofada de lã, cobertas de pele de cordeiro, tendo um cabo para se lhes pegar. Os indivíduos que delas se serviam chamavam-se bate-balas ou batedor.",
                }, 
                {
                    term: "Caixa",
                    definition: "É um dos principais utensílios da tipografia. Espécie de caixão dividido em diferentes partes, a cujas divisões se dá o nome de caixotins e onde se deitam as correspondentes sortes (tipos em chumbos).",
                }, 
                {
                    term: "Calandra",
                    definition: "máquina onde se assetina o papel .",
                }, 
                {
                    term: "Distribuir",
                    definition: "Desmanchar as formas que saem da máquina depois de impressas, arrumando o material nos seus devidos lugares. Deitar tipo à caixa.",
                }, 
                {
                    term: "Ditografia",
                    definition: "Repetição nas cópias de um manuscrito antigo de uma letra, sílaba ou palavra.",
                },
                {
                    term: "Electrografia",
                    definition: "Arte de gravar da qual se emprega directamente a acção da electricidade.",
                }, 
                {
                    term: "Encadernação",
                    definition: "Arte de unir em volume as folhas de um livro para facilitar o seu uso. Na Idade Média , a encadernação, era de manufactura monástica e frades escolhidos exerciam o ofício de encadernador. As primeiras encadernações que se fizeram em Portugal, eram em tábuas cobertas de prata, com figuras trabalhadas, e em tábuas cobertas forradas em pele, com chapas da bronze. A encadernação portuguesa atingiu a máxima sumptuosidade no sec. XVIII.",
                }, 
                {
                    term: "Fac- símile",
                    definition: "Reprodução exacta de uma assinatura, desenho ou escrito.",
                }, 
                {
                    term: "Filetes",
                    definition: "Tiras largas de metal à altura da letra, fundidas desde um ponto em diante. estão incluídos na designação genérica de filetes, todos os traços usados na tipografia.",
                }, 
                {
                    term: "Galé",
                    definition: "Tábua ou prancha guarnecido com três travessas, nas quais pela parte interior há um rebaixo, a cujo conjunto se dá o nome de caixa. Modernamente, é uma placa de chapa de ferro ou zinco de forma rectangular, com rebordo em três dos seus lados.",
                }, 
                {
                    term: "Galeão",
                    definition: "Placa rectangular, de madeira, com rebordo em dois dos seus lados. Os mais usados, onde é colocada a composição continuada, tem aproxidamente 1 metro de comprimento.",
                }, 
                {
                    term: "Helioplastia",
                    definition: "Arte de produzir moldes para imprimir, de gelatina endurecida, na qual se obtem uma prova fotográfica.",
                },
                {
                    term: "Heliotipia",
                    definition: "Nome genérico de todo o procedimento aplicado à obtenção de matrizes para a imprensa.",
                }, 
                {
                    term: "Iluminar",
                    definition: "Dar cor às figuras, letras,etc. de um livro ou estampa.",
                }, 
                {
                    term: "Ilustração",
                    definition: "Estampa, arte de gravar um livro .",
                }, 
                {
                    term: "Justificar",
                    definition: "O acto de meter ou tirar espaços, procurando reparti-los com igualdade para se pôr a linha à medida que se deseja.",
                }, 
                {
                    term: "Letra",
                    definition: "Dá-se em geral este nome aos caracteres ou tipos que servem para executar a composição. É constituída por uma liga de chumbo, régulo de antimónio e estanho. A letra, propriamente dita, é o todo que vai desde a parte saliente que imprime e que se denomina olho, até ao fim da haste que o sustenta.",
                }, 
                {
                    term: "Litografia",
                    definition: "Desenho ou escrita em pedra, depois estampada em papel; oficina do tipógrafo. Palavra de origem grega formada por lithos (pedra) e grapho (escrever). Esta nova técnica utiliza uma pedra calcária de grão muito fino e de côr azulada/amarela e baseia-se na repulsão entre a água e as substâncias gordurosas. Método inventado por Senefelder, que contou a sua descoberta no 'Tratado da Litografia' escrito em 1818, e que, em resumo, consistia no seguinte: as pedras eram desenhadas ou escritas com uma tinta pastosa composta pos cera, sabão e negro de fumo, após o que as gravava com uma soluçção nítica. O ácido não atacava as partes escritas, que estavam protegidas pelas tinta, mas somente as zonas a descoberto. Deste modo obtinha um ligeiro alto relevo, que entintava com uma bala, procurando não sujar as zonas não impressoras, após o que procedia à impressão. Actualmente, embora o princípio seja o mesmo, em vez de pedra utiliza-se chapas metálicas, matérias plásticas ou outras devidamente preparadas.",
                }, 
                {
                    term: "Marginar",
                    definition: "Fazer e deixar margens no papel.",
                },
                {
                    term: "Material Branco",
                    definition: "É constituído por espaços, quadrados, quadratins, entrelinhas de metal-tipo, lingotes e quadratins.",
                }, 
                {
                    term: "Numerador",
                    definition: "Pequena máquina que, automaticamente, muda os números de impresso para impresso.",
                }, 
                {
                    term: "Offset",
                    definition: "Processo de impressão no qual o transporte da tinta desde a gravura até ao suporte final é feito por um depósito intermédio, normalmente uma manta de cauchu. Permite melhorar o colorido e a suavidade de matrizes. Começou por isso a ser usado exclusivamente em litografia, e só posteriormente a técnica de offset foi aplicado à tipografia.",
                }, 
                {
                    term: "Oleografia",
                    definition: "Arte da gravura que imita a pintura a óleo.",
                }, 
                {
                    term: "Pagela",
                    definition: "Página de formato muito pequeno.",
                }, 
                {
                    term: "Paginação",
                    definition: "Acção de paginar.",
                }, 
                {
                    term: "Quadratim",
                    definition: "Peça de chumbo mais baixo que a letra, tendo o mesmo corpo nas suas quatro faces. É o espaço mais largo do respecxtivo corpo e tem igualmenet a mesm altura dos espaços mais baixos.",
                },
                {
                    term: "Quadrilongos",
                    definition: "Peças fundidas em metal-tipo, ferro, alumínio e madeira de diversas espessuras e comprimentos sistemáticos.",
                }, 
                {
                    term: "Radiolineotipia",
                    definition: "Composição tipográfica à distância por meio de ondas hertezianas.",
                }, 
                {
                    term: "Rama",
                    definition: "É um caixilho de ferro de rigorosa esquadria, dentro do qual são postas quaisquer formas para serem impressas.",
                }, 
                {
                    term: "Siderografia",
                    definition: "Arte de gravar em aço.",
                }, 
                {
                    term: "Similigravura",
                    definition: "Gravura sobre zinco ou cobre obtida por processos fotográficos e quimicos cuja principal característica é a interposição de uma retícula ou granido entre a objectiva e o écran, para se obter o modelado dos tons.",
                }, 
                {
                    term: "Tamborete",
                    definition: "Pedaço de madeira quadricular e plana, destinada a baixar nas formas as letras que estão altas.",
                }, 
                {
                    term: "Tímpano",
                    definition: "Parte da prensa manual, em cujo caixilho, coberto de estofo de algodão, se colocam as folhas de imprimir.",
                }, 
                {
                    term: "Vinheta",
                    definition: "Colecção de adornos de vários corpos, com os quais se fazem infinitas combinações decorativas .",
                }, 
                {
                    term: "Volante",
                    definition: "Roda que regulariza o movimento das máquinas.",
                }, 
                {
                    term: "Xilografia",
                    definition: "Impressão sobre uma tábua gravada, anterior à descoberta da imprensa e de que esta evidentemente descende. Aplica-se ainda o vocábulo à gravura em madeira.",
                }, 
                {
                    term: "Zincografia",
                    definition: "Gravura sobre zinco cujo transporte é feito por meio da litografia.",
                }, 
            ]
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
        console.log("A");
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
                            console.log("B");
                            if(this.state.chosenLetter.includes(entry.term[0])) {
                                return(
                                    <div className="definition" key={index}>
                                        <div className="information">
                                            <p className="name text">
                                                <span className="first-letter">{entry.term[0]}</span>
                                                <span className="full-name">
                                                    {entry.term.slice(1, entry.term.length)}
                                                </span>
                                            </p>

                                            <p className="text desc">
                                                {entry.definition}
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