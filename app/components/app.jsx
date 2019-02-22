

require('../lib/common.css');
import React from 'react';

import { Link } from 'react-router';

import Search from './search.jsx'; 

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
                        <li><Link   activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/Header">Header</Link></li>
                        <li><Link   activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/Otherapp">Otherapp</Link></li>
                        <li><Link   activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/Spike">Spike</Link></li>
                        <li><Link   activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/More">More</Link></li>
                        <li><Link   activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/Like">Like</Link></li>
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
