import React, {Component} from 'react';
import hitman from '../../images/hitman1.png';
import Typing from 'react-typing-animation';
import {fEndTech, bEndTech} from '../cv/data';

import './Skills.css';

export default class Skills extends Component {
	render() {
		return (
			<div className="skillsContainer">
				<Typing className="technologies">
					<h1>TECHNOLOGIES</h1>
					<div>
						<h2>FRONT-END</h2>
						<div>
							{fEndTech.map((item, key) => {
								return (
									<div key={key}>
										<span>{item}</span>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h2>BACK-END</h2>
						<div>
							{bEndTech.map((item, key) => {
								return (
									<div key={key}>
										<span>{item}</span>
									</div>
								);
							})}
						</div>
					</div>
				</Typing>
				<div className="imageContainer">
					<img src={hitman} />
				</div>
			</div>
		);
	}
}
