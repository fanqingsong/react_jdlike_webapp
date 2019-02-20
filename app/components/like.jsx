
require('./like.css');
import React from 'react'; 
import axios from 'axios';


import { createStore } from 'redux';

let reducer = (state = [], action) => {
	switch (action.type) {
	  case 'UPDATE_IMAGE_URL':
		return action.payload;
	  default:
		return state;
	}
}

class LikeComponent extends React.Component {
	constructor(props){
		super(props);

		this.source = "http://localhost:3000/data/more";

		this.state = {
			stores: []
		}	

		this.store = createStore(reducer);
		this.store.subscribe(()=>{
			console.log("enter store subsrible")
			this.setState({stores: this.store.getState()});
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
				this.store.dispatch({ type: 'UPDATE_IMAGE_URL', payload: data.data });
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
			<div id="like">
				<p>猜你喜欢</p>
				{
					this.state.stores.map((item) => {
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

module.exports = LikeComponent;

