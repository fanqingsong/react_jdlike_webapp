
require('./otherapp.css');
let jsonp = require('../util/jsonp.js');

import React from 'react'; 

class OtherappComponent extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			apps: [],
		}
	}

	componentDidMount() {
		jsonp(this.props.source, "", "callback", (data) => {
			if(data.status) {
				this.setState({
					apps: data.data,
				})
			}else {
				alert(data.msg);
			}
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
