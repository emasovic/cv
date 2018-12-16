import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {About, Skills, Home} from './Pages';

import './NewCv.css';

export default class NewCv extends Component {
	render() {
		return (
			<Router>
				<div className="cvContainer">
					<div className="navContainer">
						<ul className="nav">
							<li className="nav-item">
								<Link to="/cv">home</Link>
							</li>
							<li className="nav-item">
								<Link to="/cv/about">about</Link>
							</li>
							<li className="nav-item">
								<Link to="/cv/skills">skills</Link>
							</li>
							<li className="nav-item">
								<Link to="/cv/contact">contact</Link>
							</li>
						</ul>
					</div>
					<Switch>
						<Route exact path="/cv" component={Home} />
						<Route path="/cv/about" component={About} />
						<Route path="/cv/skills" component={Skills} />
					</Switch>
				</div>
			</Router>
		);
	}
}
