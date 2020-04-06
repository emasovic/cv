import React, {useState, useEffect} from 'react';

import Loader from './components/loader/Loader';
import Main from './components/Main';

import './App.scss';

const CLASS = 'hm-App';

export default function App() {
	const [accessGranted, setAccessGranted] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setAccessGranted(true);
		}, 4000);
	}, [accessGranted]);

	return (
		<div className={CLASS}>
			{accessGranted ? (
				<div className={CLASS + '-main'}>
					<Main />
				</div>
			) : (
				<Loader />
			)}
		</div>
	);
}
