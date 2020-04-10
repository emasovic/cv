import React from 'react';

import {art} from './art';

import './Pixelart.scss';

const CLASS = 'hm-Pixelart';

export default function Pixelart() {
	return (
		<div className={CLASS}>
			{art.map((item, key) => {
				return (
					<a key={key} href={item.url} target="_blank" rel="noopener noreferrer">
						<div className={CLASS + '-frame'}>
							<img src={item.src} alt={item.name} />
						</div>
					</a>
				);
			})}
		</div>
	);
}
