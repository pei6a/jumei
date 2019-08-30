import React, { Component } from 'react';
import HomeSearchVSNav from '@components/specific/homePage/index'
import BScrollWrap from '@common/betterScroll/index'
export default class HomePage extends Component {
  render() {
    return (
      <BScrollWrap ref='bsScroll' >
        <div>
          <HomeSearchVSNav />
        </div>
      </BScrollWrap>
    );
  }

}
