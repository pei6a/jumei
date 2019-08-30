import React, { Component } from 'react';
import { HomeWrapperPop } from './styled'
import {MuandbabyApi} from '@api/home_api/home_api'
export default class Pop extends Component {
  constructor(){
    super();
    this.state={
      listM:[],
    }
  }
  render() {  
    let {listM}=this.state
    let list=[]
    for(var i=0;i<listM.length;i++){
      let a=Math.floor(Math.random()*30)
      list.push(listM[a])
    }
    return (
      <HomeWrapperPop>      
      {
        list.map((item,index)=>(
          <a href="http://h5.jumei.com/s/act/20190823_12655_app.html?" key={index}>
          <div className="pop_image">
            <img alt='' src={item.image_url_set.main['320']} />
            <div className="discount">
              {item.discount_string}
              </div>
          </div>
          <div className="pop_information">
            <div className="left_info">
              <p className="pop_title">{item.title}</p>
              <p className="timer" data-diff="53880">剩余
              01天18时07分
              </p>
            </div>
            <div className="right_logo">
              <img alt='' src={item.image_url_set.brand['320']} />
            </div>
          </div>
        </a>
        ))
      }
        
      </HomeWrapperPop>
    );
  }
  async componentDidMount(){
    let data=await MuandbabyApi()
    this.setState({
      listM:data.item_list,

    })

  }
}



