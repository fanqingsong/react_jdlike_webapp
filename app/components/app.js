
require('../static/common.css');

require("./app.css");

require('../static/iconfont.css');

import React from 'react';

import { Link } from 'react-router';

import Search from './search.js'; 

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
                    <ul className="nav-bar">
                        
                        <Link activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/Header">
                            <span className="icon iconfont">&#xe619;</span>
                            <div>首页</div>
                        </Link>

                        <Link activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/Otherapp">
                            <span className="icon iconfont">&#xe699;</span>
                            <div>应用</div>
                        </Link>

                        <Link activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/Spike">
                            <span className="icon iconfont">&#xe60e;</span>
                            <div>秒杀</div>
                        </Link>
                        
                        <Link activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/More">
                            <span className="icon iconfont">&#xe738;</span>
                            <div>更多</div>
                        </Link>
                        
                        <Link activeStyle={{     fontWeight: 'bold',     color: 'red'    }} to="/Like">
                            <span className="icon iconfont">&#xe687;</span>
                            <div>喜欢</div>
                        </Link>
                        
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
