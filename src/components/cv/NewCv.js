import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from '../about/About';
import Skills from '../skills/Skills';

import './NewCv.css';

export default class NewCv extends Component {
	render() {
		return (
			<Router>
				<div className="cvContainer">
					<div className="navContainer">
						<ul className="nav">
							<li className="nav-item">
								<Link to="/">home</Link>
							</li>
							<li className="nav-item">
								<Link to="/about">about</Link>
							</li>
							<li className="nav-item">
								<Link to="/skills">skills</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact">contact</Link>
							</li>
						</ul>
					</div>
					<Route exact path="/" component={About} />
					<Route path="/about" component={About} />
					<Route path="/skills" component={Skills} />
				</div>
			</Router>
		);
	}
}
