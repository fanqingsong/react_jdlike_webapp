
require('./otherapp.css');

import React from 'react'; 
import PropTypes from 'prop-types';

class OtherappComponent extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		this.props.updateImgs()
		.then(() => {
			console.log("data update ok!");
		})
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


OtherappComponent.propTypes = {
	updateImgs: PropTypes.func.isRequired,
	otherappImgs: PropTypes.array.isRequired,
};

module.exports = OtherappComponent;
