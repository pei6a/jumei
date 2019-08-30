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
              src='http://mp6.jmstatic.com/product/004/985/4985836_std/4985836_1000_1000.jpg?v=1566205443&imageView2/2/w/264/q/90' alt='' />
            </div>
            <div className='item_right'>
              <p className='item_title'>
              Fenty Beauty 闪闪身体高光 毛毛球散粉 10.5g</p>
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
