import React, {Component} from 'react';
import CvDesktop from './CvDesktop';
import CvResponsive from './CvResponsive';

export default class Cv extends Component {
	renderCv = () => {
		if (window.innerWidth < 1024) {
			return <CvResponsive />;
		}

		return <CvDesktop />;
	};
	render() {
		return this.renderCv();
	}
}
