
require('./more.css');
require('../lib/swiper.min.css');
let Swiper = require('../lib/swiper.min.js');
import React from 'react'; 
import axios from 'axios';

import { createStore } from 'redux';

let defaultState = {
	more1: [],
	more2: [],
	more3: [],
};

let reducer = (state = defaultState, action) => {
	switch (action.type) {
	  case 'UPDATE_IMAGE_URL':
		return {
			more1: action.payload.more1,
			more2: action.payload.more2,
			more3: action.payload.more3,
		};
	  default:
		return state;
	}
};

class MoreComponent extends React.Component{
	constructor(props){
		super(props);

		this.source = "http://localhost:3000/data/more";

		this.state = {
        	more1: [],
        	more2: [],
        	more3: [],
		};

		this.store = createStore(reducer);
		this.store.subscribe(()=>{
			console.log("enter store subsrible");
			let storeState = this.store.getState();
			this.setState({
				more1: storeState.more1,
				more2: storeState.more2,
				more3: storeState.more3,
			});
		});
	}

	componentDidMount() {
		axios.get(this.source)
		.then((response) => {
			return response.data;
		})
		.then((data) => {
			console.log(data)
			if(data.status) {
				this.store.dispatch({ type: 'UPDATE_IMAGE_URL', payload: {
					more1: data.data.slice(0,3),
					more2: data.data.slice(3,5),
					more3: data.data.slice(5,7),
				} });

				new Swiper ('.more_bottom .swiper-container', {
					loop: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					autoplay : 2000,
					autoplayDisableOnInteraction : false,		    
				}) 
			}else {
				alert(data.msg);
			}
		})
		.catch(() => {
			console.log("fetch encounter error!");
		});
	}

	render() {

		let countId = 0;
		return (
			<div id="more">
				<div className="more_top">
					{
						this.state.more1.map((item) => {
							return <div className="more_link" key={"more" + countId++}>
										<a href={item.url}>
											<img src={item.icon} alt=""/>
										</a>
									</div>
						})
					}
				</div>
				<div className="more_middle">
					{
						this.state.more2.map((item) => {
							return <div className="more_style" key={"more" + countId++}>
										<a href={item.url}>
											<img src={item.icon} alt=""/>
										</a>
									</div>
						})
					}
				</div>
				<div className="more_bottom">
					<div className="swiper-container">
						<div className="swiper-wrapper">
							{
								this.state.more3.map((item) => {
									return  <div className="swiper-slide" key={"more" + countId++}>
												<a href={item.url}>
													<img src={item.icon} alt=""/>
												</a>
											</div>
								})
							}
						</div>
						<div className="swiper-pagination"></div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = MoreComponent;