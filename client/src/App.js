import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Landing from "./components/pages/landing/landing";
import Main from "./components/pages/main/main";
import About from "./components/pages/about/about";
import Datasheet from "./components/pages/datasheet/datasheet";
import Alfabetos from "./components/pages/alfabetos/alfabetos";
import './App.css';

const App = () => (
	<HashRouter>
		<Route path="/landing" component={Landing} />
		<Route path="/main" component={Main} />
		<Route path="/about" component={About} />
		<Route path="/ficha_tecnica" component={Datasheet} />
		<Route path="/alfabetos" component={Alfabetos} />
	</HashRouter>
)

export default App;