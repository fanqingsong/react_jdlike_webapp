
require('./otherapp.css');

import React from 'react'; 
import axios from 'axios';

class OtherappComponent extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			apps: [],
		}
	}

	componentDidMount() {
		axios.get(this.props.source)
		.then((response) => {
			return response.data;
		})
		.then((data) => {
			console.log(data)
			if(data.status) {
				this.setState({
					apps: data.data,
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
