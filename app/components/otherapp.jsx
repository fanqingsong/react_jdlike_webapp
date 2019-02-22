
require('./otherapp.css');

import React from 'react'; 
import axios from 'axios';

class OtherappComponent extends React.Component {
	constructor(props){
		super(props);

		this.source = "http://localhost:3000/data/otherapp";
	}

	componentDidMount() {
		axios.get(this.source)
		.then((response) => {
			return response.data;
		})
		.then((data) => {
			console.log(data)
			if(data.status) {
				this.props.updateImgs(data.data);
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
					   this.props.otherappImgs.map((app) => {
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
