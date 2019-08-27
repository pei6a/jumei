import React, { Component } from 'react';

import HomeSearchVSNav from '@components/specific/homePage/index'
import BScrollWrap from '@common/betterScroll/index'
import { HomIndexwrapper } from './styled'
export default class HomePage extends Component {
  render() {
    return (
      <HomIndexwrapper>
        <BScrollWrap ref='bsScroll' >
            <HomeSearchVSNav />
        </BScrollWrap>
      </HomIndexwrapper>
    );
  }

}
