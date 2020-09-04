import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Orders from './pages/Orders';
import AboutUs from './pages/AboutUs';

const App = () => {
	return (
		<Router>
			<Route exact path={['/', '/home']} component={Home} />
			<Route exact path="/orders" component={Orders} />
			<Route exact path="/about-us" component={AboutUs} />
		</Router>
	);
};

export default App;
