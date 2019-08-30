import React, { Component } from 'react';
import {ADWrapper} from './styled'
export default class ComponentAd extends Component {
    render() {
        return (
            <ADWrapper>
                <img src='//s1.jmstatic.com/templates/touch/css/v3/image/footer_bg.jpg' 
                height='45' style={{position:'absolute'}}
                alt='' />
                <img src='//s1.jmstatic.com/templates/touch/css/v3/image/footer_bg.jpg' 
                height='45' style={{position:'absolute', right:0}}
                alt='' />
            </ADWrapper>
        );
    }
}
