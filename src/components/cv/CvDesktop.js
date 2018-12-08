import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import {personalData, experience, fEndTech, bEndTech} from './data';
import me from '../../images/me.png';
import danger from '../../images/danger.png';

import './Cv.css';

export default class CvDesktop extends Component {
	render() {
		return (
			<div className="editor">
				<div className="container">
					<div className="image">
						<img src={me} alt={me} width={300} height={300} />
						<h1 className="agent-stamp-text">TOP SECRET</h1>
						{personalData.map((item, key) => {
							return (
								<div key={key} className="itemHolder">
									<span className="itemLabel">{item.label}:</span>
									<span className="itemContent">{item.content}</span>
								</div>
							);
						})}
					</div>
					<div className="cover">
						<div className="back">
							<Typing className="codeHolder">
								<div className="dangerHolder">
									<img src={danger} alt={me} width={100} height={100} />
								</div>
								<div className="experienceWrapper">
									<h1 className="title">EXPERIENCE</h1>
									{experience.map((item, key) => {
										return (
											<div key={key} className="itemHolder">
												<span className="itemLabel">{item.label}:</span>
												<span className="itemContent">
													{item.periodStart} - {item.periodEnd}
												</span>
											</div>
										);
									})}
								</div>
								<div className="technogloiesWrapper">
									<h1 className="title">TECHNOLOGIES</h1>
									<div className="technologies">
										<h2 className="title">FRONT-END</h2>
										<div className="technologiesList">
											{fEndTech.map((item, key) => {
												return (
													<div key={key} className="itemHolder">
														<span className="itemContent">{item}</span>
													</div>
												);
											})}
										</div>
									</div>
									<div className="technologies">
										<h2 className="title">BACK-END</h2>
										<div className="technologiesList">
											{bEndTech.map((item, key) => {
												return (
													<div key={key} className="itemHolder">
														<span className="itemContent">{item}</span>
													</div>
												);
											})}
										</div>
									</div>
								</div>
								<div className="experienceWrapper">
									<h1 className="title">EDUCATION</h1>
									<div className="itemHolder">
										<span className="itemLabel">
											University Union - Faculty of Computer Science:
										</span>
										<span className="itemContent">
											Professional engineer of electrical engineering and computing
										</span>
									</div>
								</div>
							</Typing>
						</div>
						<div className="front">
							<h1 className="stamp-text">CLASSIFIED</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
