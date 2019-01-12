import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

import routes from './routes';

import './NewCv.css';

class Nav extends Component {
	render() {
		const {location} = this.props;
		const {pathname} = location;
		return (
			<div className="navContainer">
				<ul className="nav">
					{routes.map((item, key) => {
						const className = pathname === item.path ? 'nav-item-active' : 'nav-item';
						return (
							<li className={className} key={key}>
								<Link to={item.path}>{item.name}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default withRouter(Nav);
