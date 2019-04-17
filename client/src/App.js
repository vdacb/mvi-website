import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Landing from "./components/pages/landing/landing";
import Main from "./components/pages/main/main";
import './App.css';

const App = () => (
	<HashRouter>
		<Route path="/landing" component={Landing} />
		<Route path="/main" component={Main} />
	</HashRouter>
)

export default App;