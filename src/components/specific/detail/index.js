import React, { Component } from 'react';
import DetailTabBar from './tabBar/index'
import Header from '@components/header/'
import DetailContent from './additional/index'
import { DetailWrapAllStyle } from './styled'
export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }
  }
  render() {
    return (
      <DetailWrapAllStyle >
        <Header title={this.state.title} />
        <DetailContent handleTitle={this.handleDetail.bind(this)} />
        <DetailTabBar></DetailTabBar>
      </DetailWrapAllStyle>
    );
  }
  handleDetail(val) {
    console.log(val)
    this.setState({
      title: val
    })
  }
}
