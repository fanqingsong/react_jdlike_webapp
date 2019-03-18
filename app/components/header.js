
require("./header.css");
require('../static/swiper.min.css');

let Swiper = require('../static/swiper.min.js');

import React from 'react';     
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

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
					<LazyLoad height={200}>
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
					</LazyLoad>
				</div>
			);
		}
}

HeaderComponent.propTypes = {
	updateImgs: PropTypes.func.isRequired,
	headerImgs: PropTypes.array.isRequired,
};

module.exports = HeaderComponent;
