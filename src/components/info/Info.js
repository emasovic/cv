import React, {Component, Fragment} from 'react';
import Typing from 'react-typing-animation';

import './Info.scss';

const CLASS = 'hm-Info';

export default class Info extends Component {
	render() {
		const {renderData} = this.props;
		return (
			<div className={CLASS}>
				<Typing className={CLASS + '-desc'} speed={10}>
					{renderData.map((item, key) => (
						<Fragment key={key}>
							<span>{item.title}</span>
							{item.data && item.data.length
								? item.data.map((item, key) => (
										<div key={key}>
											<span>{item.label ? item.label + ': ' : null}</span>
											<span>{item.content}</span>
										</div>
								  ))
								: null}
						</Fragment>
					))}
				</Typing>
			</div>
		);
	}
}
