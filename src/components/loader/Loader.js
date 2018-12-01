import React, {Component} from 'react';

import './Loader.css';

export default class Loader extends Component {
	state = {
		accessGranted: false
	};
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				accessGranted: true
			});
		}, 2500);
	}
	render() {
		const {accessGranted} = this.state;
		const text = accessGranted ? 'Permision granted' : 'Checking permision';
		const displayClass = accessGranted ? 'loading-active' : 'loading';
		return (
			<div className="wrapper">
				<div className="base">
					<div className="base-bottom" />
					<div className="lock-inside-top" />
					<div className="lock-inside-bottom" />
					<div className="preloader-2">
						<div>
							<span className={displayClass}>{text}</span>
						</div>
						<div>
							<span className="line line-1" />
							<span className="line line-2" />
							<span className="line line-3" />
							<span className="line line-4" />
							<span className="line line-5" />
							<span className="line line-6" />
							<span className="line line-7" />
							<span className="line line-8" />
							<span className="line line-9" />
						</div>
					</div>
				</div>
				<div className="lock-cirlce">
					<div className="lock-circle-inside" />
				</div>
				<div className="lock-box" />
			</div>
		);
	}
}
