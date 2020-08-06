import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'; 
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';


function App() {
	return (
		<Layout>
			<Switch>
				<Route
					exact
					path="/"
					component={Home}
				/>
				<Route
					exact
					path="/about"
					component={About}
				/>
			</Switch>
		</Layout>
	);
}


export default App;
