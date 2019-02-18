
require("./header.css");
require('../lib/swiper.min.css');

let Swiper = require('../lib/swiper.min.js');

import React from 'react';     
import axios from 'axios';

class HeaderComponent extends React.Component {
		constructor(props){
				super(props);

				this.source = "http://localhost:3000/data/swiper";

				this.state = {
						imgUrls: [],
				};
		}

		componentDidMount() {
			console.log(this.source)
			
			axios.get(this.source)
			.then((response) => {
				return response.data;
			})
			.then((data) => {
				console.log(data)
				if(data.status) {
					this.setState({
							imgUrls: data.data,
						})

					new Swiper ('#header .swiper-container', {
						loop: true,
						pagination: '.swiper-pagination',
						paginationClickable: true,
						autoplay : 3000,
						autoplayDisableOnInteraction : false,		    
					}) 
				}else {
					console.log(data.msg);
				}
			})
			.catch(() => {
				console.log("fetch encounter error!");
			});
		}
	
		render() {
			let countId = 0;
				return (
					<div id="header">
					<div className="swiper-container">
						<div className="swiper-wrapper">
							{
								this.state.imgUrls.map((url) => {
									return <div className="swiper-slide" key={"header" + countId++} >
												<img className="img" src={url} />
											 </div>
								})
							}
						</div>
					<div className="swiper-pagination"></div>
				</div>
					</div>
				);
		}
}

module.exports = HeaderComponent;
