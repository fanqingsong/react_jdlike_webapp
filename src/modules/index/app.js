
import React from 'react';

import { Link } from 'react-router';

import Search from '../search/search.js'; 

import { FormattedMessage } from 'react-intl';

require('../static/common.css');

require("./app.css")

require('../static/iconfont.css')



class AppComponent extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Search></Search>
                <br/>
                <br/>
                <br/>
                <div className="nav-bar-container">
                    <ul className="nav-bar">
                        <Link activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/Header">
                            <span className="icon iconfont">&#xe619;</span>
                            <div>
                            <FormattedMessage 
                            　　id="home"
                            />
                            </div>
                        </Link>

                        <Link activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/Otherapp">
                            <span className="icon iconfont">&#xe699;</span>
                            <div>
                                <FormattedMessage 
                                　　id="application"
                                />
                            </div>
                        </Link>

                        <Link activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/Spike">
                            <span className="icon iconfont">&#xe60e;</span>
                            <div>
                                <FormattedMessage 
                                    　　id="spike"
                                    />
                            </div>
                        </Link>
                        
                        <Link activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/More">
                            <span className="icon iconfont">&#xe738;</span>
                            <div>
                                <FormattedMessage 
                                        　　id="more"
                                        />

                            </div>
                        </Link>
                        
                        <Link activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/Like">
                            <span className="icon iconfont">&#xe687;</span>
                            <div>
                            <FormattedMessage 
                                        　　id="like"
                                        />
                            </div>
                        </Link>
                        
                    </ul>

                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AppComponent;
