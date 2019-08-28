import React, { Component } from 'react';
import {HomeWrapperGlobal} from './styled'

export default class Global extends Component {
  render() {
    return (
      <HomeWrapperGlobal>
        <div className="deals-content-header">
          <span>
            <img alt='' src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" />
          </span>
          <span>今日团购，每天10点上新</span>
        </div>
        <ul className='items'>
          <li onClick={this.goToDetailHanlder.bind(this)}>
            <div className='item_left'>
              <img className='item_img' 
              src='http://p0.jmstatic.com/banner/area/000/000/020.jpg' alt='' />
            </div>
            <div className='item_right'>
              <p className='item_title'>对对对对对la啦啦啦啦啦啦啦啦绿对多多多</p>
              <p className='item_price'>￥<b>59</b><span>￥99</span></p>
            </div>
          </li>
        </ul>
      </HomeWrapperGlobal>
    );
  }
  goToDetailHanlder(){
    
  }
}
