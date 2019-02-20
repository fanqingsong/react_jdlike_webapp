
require('./spike.css');
import React from 'react'; 
import axios from 'axios';

import { createStore } from 'redux';

let defaultState = {
	hour: "00",
	minutes: "00",
	second: "00",
	stores: [],
	more: ""
};

let reducer = (state = defaultState, action) => {
	switch (action.type) {
	  	case 'UPDATE_INFO_STORE':
		case 'UPDATE_INFO_TIME':
			return Object.assign({}, state, action.payload); 
	  default:
			return state;
	}
};

class SpikeComponent extends React.Component{
	constructor(props){
		super(props);

		this.source = "http://localhost:3000/data/spike";

		this.state = {
			hour: "00",
			minutes: "00",
			second: "00",
			stores: [],
			more: ""
		}

		this.store = createStore(reducer);
		this.store.subscribe(()=>{
			console.log("enter store subsrible");
			let storeState = this.store.getState();
			this.setState({
				hour: storeState.hour,
				minutes: storeState.minutes,
				second: storeState.second,
				stores: storeState.stores,
				more: storeState.more,
			});
		});
	}

	formatTime(times=0) {
		times = +times;
		let hour = 0,
			minutes = 0,
			second = 0,
			regTwo = /^\d{2}$/,
			regInteger = /^(\d{1,2})\.?\d*$/;
		if(times/3600 >= 1) {
			hour = times/3600;
			hour = +regInteger.exec(hour.toString())[1] 
			times -= hour*3600; 
			hour = regTwo.test(hour.toString()) ? hour.toString() : `0${hour}`;
		}
		if(times/60 >= 1) {
			minutes = times/60;
			minutes = +regInteger.exec(minutes.toString())[1] 
			times -= minutes*60; 
			minutes = regTwo.test(minutes.toString()) ? minutes.toString() : `0${minutes}`;
		}
		second = times;
		second = regTwo.test(second.toString()) ? second.toString() : `0${second}`;
		return {
			hour: hour,
			minutes: minutes,
			second: second,
		}
	}
	
	componentDidMount() {	
		axios.get(this.source)
		.then((response) => {
			return response.data;
		})
		.then((data) => {
			console.log(data)
			if(data.status) {
				this.store.dispatch({ type: 'UPDATE_INFO_STORE', payload: {
					stores:  data.data,
					more: data.more,
				} });

				return data.times;
			}else {
				console.log(data.msg);
			}
		})
		.then((times) => {
			times = +times;
			let timer = window.setInterval(() => {
				let {hour, minutes, second} = this.formatTime(times--);
				if(times == -1) {
					clearInterval(timer);
					timer = null;
				}

				this.store.dispatch({ type: 'UPDATE_INFO_TIME', payload: {
					hour: hour,
					minutes: minutes,
					second: second,
				} });
			}, 1000);
		})
		.catch(() => {
			console.log("fetch encounter error!");
		});		
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
											<span>{this.state.hour}</span>:<span>{this.state.minutes}</span>:<span>{this.state.second}</span>
										</div>
										
							})()
						}
					</div>
					<div className="spike_more fr">
						<i className="fr"></i>
						<a href={this.state.more}>
							<span>更多秒杀</span>
						</a>
						
					</div>
					<div style={{clear:"both"}}></div>
				</div>
				<ul className="spike_content">
					{
						this.state.stores.map((item) => {
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

module.exports = SpikeComponent;