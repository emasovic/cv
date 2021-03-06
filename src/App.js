import React, {Component} from 'react';
import Loader from './components/loader/Loader';
import Cv from './components/cv/Cv';

import './App.css';

class App extends Component {
	state = {
		accessGranted: false
	};
	displayRenderer = () => {
		const {accessGranted} = this.state;

		if (!accessGranted) {
			return <Loader />;
		}

		return <Cv />;
	};
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				accessGranted: true
			});
		}, 5000);
	}
	render() {
		return <div className="App">{this.displayRenderer()}</div>;
	}
}

export default App;
