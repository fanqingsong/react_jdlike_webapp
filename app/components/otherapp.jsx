
require('./otherapp.css');

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

class OtherappComponent extends React.Component {
	constructor(props){
		super(props);

		this.source = "http://localhost:3000/data/otherapp";

		this.state = {
			apps: [],
		}

		this.store = createStore(reducer);
		this.store.subscribe(()=>{
			console.log("enter store subsrible")
			this.setState({apps: this.store.getState()});
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
		   <div className="oapp">
			   <ul>
				   {
					   this.state.apps.map((app) => {
						   return <li key={ "otherapp" + countId++ }>
									   <a href={ app.url }>
										   <div className="app_icon">
											   <img src={ app.icon } alt=""/>
										   </div>
										   <span>{ app.title }</span>
									   </a>
								   </li>
					   })
				   }
			   </ul>
		   </div>
	   );
   }
}

module.exports = OtherappComponent;
