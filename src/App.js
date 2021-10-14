import React from 'react';
import 'assets/scss/styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage';
import Example from 'pages/Example';
import Checkout from 'pages/Checkout';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={LandingPage}></Route>
					<Route
						exact
						path="/properties/:id"
						component={DetailsPage}
					></Route>
					<Route exact path="/example" component={Example}></Route>
					<Route exact path="/checkout" component={Checkout}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
