


import React from 'react'; 
import PropTypes from 'prop-types';
import Swiper from 'swiper';

require('./more.css');

require("../../../node_modules/swiper/dist/css/swiper.min.css")


class MoreComponent extends React.Component{
	// eslint-disable-next-line
	constructor(props){
		super(props);
	}

	componentDidMount() {
		console.log("-- updateImgs --")
		this.props.updateImgs()
		.then(() => {

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


MoreComponent.propTypes = {
	updateImgs: PropTypes.func.isRequired,
	moreImgs: PropTypes.object.isRequired,
};

export default MoreComponent;