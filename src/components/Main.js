import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './nav/Nav';
import Hamburger from './nav/Hamburger';
import Pixelart from './pixelart/Pixelart';
import {About, Skills, Home, NotFound} from './Pages';

import './Main.scss';

const CLASS = 'hm-Main';

export default class Main extends Component {
	render() {
		return (
			<Router>
				<div className={CLASS}>
					<Nav />
					<Hamburger />
					<Switch>
						<Route exact path="/cv" component={Home} />
						<Route path="/cv/about" component={About} />
						<Route path="/cv/skills" component={Skills} />
						<Route path="/cv/pixelart" component={Pixelart} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}
