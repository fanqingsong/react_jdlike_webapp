

import React from 'react';     
import PropTypes from 'prop-types';
import Swiper from 'swiper';

require("./header.css");

require("../../../node_modules/swiper/dist/css/swiper.min.css")

class HeaderComponent extends React.Component {
		// eslint-disable-next-line
		constructor(props){
			super(props);
		}

		componentDidMount() {
			this.props.updateImgs()
			.then(() => {
				console.log("-------------------")
				console.log(this.props.headerImgs);

				new Swiper ('.swiper-container', {
					pagination: {
					  el: '.swiper-pagination',
					  clickable: true,
					},
					autoplay: {
						delay: 1000,
					},
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
												<img alt="" className="img" src={url} />
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

HeaderComponent.propTypes = {
	updateImgs: PropTypes.func.isRequired,
	headerImgs: PropTypes.array.isRequired,
};

export default HeaderComponent;
