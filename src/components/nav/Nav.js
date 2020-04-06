import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

import routes from '../routes';

import './Nav.scss';

const CLASS = 'hm-Nav';

class Nav extends Component {
	render() {
		const {location} = this.props;
		const {pathname} = location;
		return (
			<div className={CLASS}>
				{routes.map((item, key) => {
					const className = pathname === item.path ? `${CLASS}-item active` : `${CLASS}-item`;
					return (
						<Link className={className} key={key} to={item.path}>
							{item.name}
						</Link>
					);
				})}
			</div>
		);
	}
}

export default withRouter(Nav);
