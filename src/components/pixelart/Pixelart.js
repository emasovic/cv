import React from 'react';

import batman from '../../images/batman.png';
import joker from '../../images/joker.png';
import harley from '../../images/harley.png';

import './Pixelart.scss';

const CLASS = 'hm-Pixelart';

export default function Pixelart() {
	return (
		<div className={CLASS}>
			<a href="https://codepen.io/emasovic/pen/bGdmXpG" target="_blank" rel="noopener noreferrer">
				<div className={CLASS + '-frame'}>
					<img src={batman} alt="batman" />
				</div>
			</a>
			<a href="https://codepen.io/emasovic/pen/gOpvmVy" target="_blank" rel="noopener noreferrer">
				<div className={CLASS + '-frame'}>
					<img src={joker} alt="joker" />
				</div>
			</a>
			<a href="https://codepen.io/emasovic/pen/ExjMVdq" target="_blank" rel="noopener noreferrer">
				<div className={CLASS + '-frame'}>
					<img src={harley} alt="harley" />
				</div>
			</a>
		</div>
	);
}
