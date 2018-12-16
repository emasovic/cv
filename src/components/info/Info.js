import React, {Component, Fragment} from 'react';
import Typing from 'react-typing-animation';

import './Info.css';

export default class Info extends Component {
	render() {
		const {renderData, img} = this.props;
		return (
			<div className="infoContainer">
				<div className="info">
					<Typing className="stats" speed={10}>
						{renderData.map((item, key) => (
							<Fragment key={key}>
								<h2>{item.title}</h2>
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
				<div className="imageContainer">
					<img src={img} alt={img} />
				</div>
			</div>
		);
	}
}
