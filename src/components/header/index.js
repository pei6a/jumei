import React, { Component } from 'react';
import { HeadWrapper } from './styled'
import {withRouter} from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <HeadWrapper>
        <span className='iconfont' onClick={this.backHandler.bind(this)}>&#xe618;</span>
        <div>{this.props.title}</div>
        <span></span>
      </HeadWrapper>
    );
  }
  backHandler(){
    this.props.history.goBack()
  }
}
export default withRouter(Header)