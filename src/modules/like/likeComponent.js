
import React from 'react'; 
import PropTypes from 'prop-types';

require('./like.css');


class LikeComponent extends React.Component {
	// eslint-disable-next-line
	constructor(props){
		super(props);
	}

	componentDidMount() {
		this.props.updateImgs()
	}

	render() {
		let countId = 0;
		return (
			<div id="like">
				<p>猜你喜欢</p>
				{
					this.props.likeImgs.map((item) => {
						return <div className="like_content" key={"like" + countId++}>
									<div className="like_link">
										<a href={ item.url }>
											<img src={ item.icon } alt=""/>
										</a>
									</div>
									<div className="like_desc">
										<span>
											{ item.desc }		
										</span>
									</div>
									<div className="like_price">
										<span>¥{ item.price }</span>
										<div><a href={ item.more }>看相似</a></div>
									</div>
								</div>
					})
				}
			</div>
		);
	}
}


LikeComponent.propTypes = {
	updateImgs: PropTypes.func.isRequired,
	likeImgs: PropTypes.array.isRequired,
};

export default LikeComponent;

