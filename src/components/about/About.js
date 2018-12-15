import React, {Component} from 'react';
import hitman from '../../images/hitman1.png';
import Typing from 'react-typing-animation';
import {personalData} from '../cv/data';

import './About.css';

export default class About extends Component {
	render() {
		return (
			<div className="aboutContainer">
				<div className="about">
					<h2>INFO</h2>
					<Typing className="info">
						{personalData.map((item, key) => (
							<div key={key}>
								<span>{item.label}:</span>
								<span>{item.content}</span>
							</div>
						))}
					</Typing>
				</div>
				<div className="imageContainer">
					<img src={hitman} />
				</div>
			</div>
		);
	}
}
