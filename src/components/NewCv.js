import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './Nav';
import {About, Skills, Home, NotFound} from './Pages';

import './NewCv.css';

export default class NewCv extends Component {
	render() {
		return (
			<Router>
				<div className="cvContainer">
					<Nav />
					<Switch>
						<Route exact path="/cv" component={Home} />
						<Route path="/cv/about" component={About} />
						<Route path="/cv/skills" component={Skills} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}
