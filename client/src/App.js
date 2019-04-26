import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Landing from "./components/pages/landing/landing";
import About from "./components/pages/about/about";
import Main from "./components/pages/main/main";
import Alfabetos from "./components/pages/alfabetos/alfabetos";
import './App.css';

const App = () => (
	<HashRouter>
		<Route path="/landing" component={Landing} />
		<Route path="/about" component={About} />
		<Route path="/main" component={Main} />
		<Route path="/alfabetos" component={Alfabetos} />
	</HashRouter>
)

export default App;