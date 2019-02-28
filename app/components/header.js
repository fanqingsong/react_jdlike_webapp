
require("./header.css");
require('../static/swiper.min.css');

let Swiper = require('../static/swiper.min.js');

import React from 'react';     

class HeaderComponent extends React.Component {
		constructor(props){
			super(props);
		}

		componentDidMount() {
			this.props.updateImgs()
			.then(() => {
				new Swiper ('#header .swiper-container', {
					loop: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					autoplay : 3000,
					autoplayDisableOnInteraction : false,		    
				}) 
			})
		}
	
		render() {
			let countId = 0;
				return (
					<div id="header">
					<div className="swiper-container">
						<div className="swiper-wrapper">
							{
								this.props.headerImgs.map((url) => {
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
