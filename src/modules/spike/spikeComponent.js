

import React from 'react'; 
import PropTypes from 'prop-types';

require('./spike.css');


class SpikeComponent extends React.Component{
	// eslint-disable-next-line
	constructor(props){
		super(props);
	}

	componentDidMount() {	
		this.props.updateImgs()
		this.props.startTimeRefresh();
	}

	componentWillUnmount() {
		this.props.endTimeRefresh();
	}

	render() {
		let countId = 0;
		return (
			<div id="spike">
				<div className="spike_header">
					<i></i>
					<span className="spike_title">掌上时间</span>
					<div className="spike_time">
						{
							(() => {
								return  <div>
											<span>{this.props.spikeImgs.hour}</span>:<span>{this.props.spikeImgs.minutes}</span>:<span>{this.props.spikeImgs.second}</span>
										</div>
										
							})()
						}
					</div>
					<div className="spike_more fr">
						<i className="fr"></i>
						<a href={this.props.spikeImgs.more}>
							<span>更多秒杀</span>
						</a>
						
					</div>
					<div style={{clear:"both"}}></div>
				</div>
				<ul className="spike_content">
					{
						this.props.spikeImgs.stores.map((item) => {
							return <li key={"spike" + countId++}>
										<a href={item.url}>
											<div>
												<img src={item.icon} alt=""/>
											</div>
											<p>¥{item.sprice}</p>
											<p className="real-price">¥{item.price}</p>
										</a>
									</li>
						})
					}
				</ul>
			</div>
		);
	}
}


SpikeComponent.propTypes = {
	updateImgs: PropTypes.func.isRequired,
	startTimeRefresh: PropTypes.func.isRequired,
	endTimeRefresh: PropTypes.func.isRequired,
	spikeImgs: PropTypes.object.isRequired,
};

export default SpikeComponent;