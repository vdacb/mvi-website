import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Landing from "./components/pages/landing/landing";
import Main from "./components/pages/main/main";
import About from "./components/pages/about/about";
import Datasheet from "./components/pages/datasheet/datasheet";
import Alfabetos from "./components/pages/alfabetos/alfabetos";
import Equipamentos from "./components/pages/equipamentos/equipamentos";
import Noticias from "./components/pages/noticias/noticias";
import Personalidades from "./components/pages/personalidades/personalidades";
import HistoriaUniversal from "./components/pages/historiaUniversal/historiaUniversal";
import Museus from "./components/pages/museus/museus";
import Glossario from "./components/pages/glossario/glossario";
import Visitas from "./components/pages/visitas/visitas";
import './App.css';

const App = () => (
	<HashRouter>
		<Route path="/landing" component={Landing} />
		<Route path="/main" component={Main} />
		<Route path="/about" component={About} />
		<Route path="/ficha_tecnica" component={Datasheet} />
		<Route path="/alfabetos" component={Alfabetos} />
		<Route path="/equipamentos" component={Equipamentos} />
        <Route path="/noticias" component={Noticias} />
        <Route path="/personalidades" component={Personalidades} />
		<Route path="/historia_universal" component={HistoriaUniversal} />
		<Route path="/museus" component={Museus} />
		<Route path="/glossario" component={Glossario} />
		<Route path="/visitas" component={Visitas} />
	</HashRouter>
)

export default App;
