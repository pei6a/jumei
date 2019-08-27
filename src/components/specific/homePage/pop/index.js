import React, { Component } from 'react';
import { HomeWrapperPop } from './styled'
import {fetch as fetchPro} from 'whatwg-fetch'
export default class Pop extends Component {
// componentDidMount(){
//   fetchPro('/api/v1/deal/dealactlist?card_id=4057&page=5&page_key=1566904560&platform=wap&client_v=1.0&user_tag_id=0&source=touch&site=bj').then(res=>res.json()).then((data)=>{
//   console.log(data)
// })

// }
// http://m.jumei.com/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=pre&page_key=

  render() {
    return (
      <HomeWrapperPop>
        <a href="http://h5.jumei.com/s/act/20190823_12655_app.html?">
          <div className="pop_image">
            <img alt='' src="http://mp5.jmstatic.com//jmstore/image/000/003/3259_std/5d5cbb99d53e3_2048_1024.jpg?1566382029&amp;imageView2/2/w/640/q/90" />
            <div className="discount">
              满129减25元
              </div>
          </div>
          <div className="pop_information">
            <div className="left_info">
              <p className="pop_title">赛棉内衣袜子专场</p>
              <p className="timer" data-diff="53880">剩余<span>00天</span><span>14时</span></p>
            </div>
            <div className="right_logo">
              <img alt='' src="http://p0.jmstatic.com/brand/logo_180/12655.jpg" />
            </div>
          </div>
        </a>
      </HomeWrapperPop>
    );
  }
}
