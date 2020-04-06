import React, {useState} from 'react';

import Nav from './Nav';

import hamburger from '../../images/hamburger.svg';

import './Hamburger.scss';

const CLASS = 'hm-Hamburger';

export default function Hamburger() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={CLASS}>
			<button onClick={() => setIsOpen(!isOpen)}>
				<img src={hamburger} alt="hamburger" />
			</button>
			{isOpen && (
				<div className={CLASS + '-nav'}>
					<Nav />
				</div>
			)}
		</div>
	);
}
