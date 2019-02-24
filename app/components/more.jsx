
require('./more.css');
require('../lib/swiper.min.css');
let Swiper = require('../lib/swiper.min.js');
import React from 'react'; 
import axios from 'axios';

class MoreComponent extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount() {
		this.props.updateImgs()
		.then(() => {
			new Swiper ('.more_bottom .swiper-container', {
				loop: true,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				autoplay : 2000,
				autoplayDisableOnInteraction : false,		    
			}) 
		})
	}

	render() {

		let countId = 0;
		return (
			<div id="more">
				<div className="more_top">
					{
						this.props.moreImgs.more1.map((item) => {
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
						this.props.moreImgs.more2.map((item) => {
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
								this.props.moreImgs.more3.map((item) => {
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