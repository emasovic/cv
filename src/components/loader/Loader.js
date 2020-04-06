import React, {Component} from 'react';

import './Loader.scss';

const CLASS = 'hm-Loader';

export default class Loader extends Component {
	render() {
		return (
			<div className={CLASS}>
				<div className={CLASS + '-header'}>
					<div className={CLASS + '-header-title'}>Agent em</div>
					<div className={CLASS + '-header-sub'}>Portfolio</div>
				</div>
				<div className={CLASS + '-barcode'}>
					<span className={CLASS + '-barcode-h'} />
					<span className={CLASS + '-barcode-h'} />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span className={CLASS + '-barcode-h'} />
					<span className={CLASS + '-barcode-h'} />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
					<span className={CLASS + '-barcode-h'} />
					<span className={CLASS + '-barcode-h'} />
				</div>
			</div>
		);
	}
}
