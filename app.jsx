

require('./app/lib/common.css');
import React from 'react';

import { Link } from 'react-router';

import Search from './app/components/search.jsx'; 

class AppComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Search />
                <br/>
                <br/>
                <br/>
                <div>
                    <ul role="nav" className="navigation_menu">
                        <li><Link to="/Header"><div>Header</div></Link></li>
                        <li><Link to="/Otherapp"><div>Otherapp</div></Link></li>
                        <li><Link to="/Spike"><div>Spike</div></Link></li>
                        <li><Link to="/More"><div>More</div></Link></li>
                        <li><Link to="/Like"><div>Like</div></Link></li>
                    </ul>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

module.exports = AppComponent;
