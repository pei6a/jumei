import React, { Component } from 'react';
import { HeadWrapper } from './styled'
import {withRouter} from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <HeadWrapper>
        <span className='iconfont' onClick={this.backHandler.bind(this)}>&#xe618;</span>
        <div>{this.props.title}</div>
        <span onClick={this.goToHomeHandler.bind(this)}></span>
      </HeadWrapper>
    );
  }
  backHandler(){
    this.props.history.goBack()
  }
  goToHomeHandler(){
    this.props.history.push('/home/index')
  }
}
export default withRouter(Header)