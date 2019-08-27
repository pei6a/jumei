import React, { Component } from 'react';
import {AdWrapper} from './styled'
export default class ComponentAd extends Component {
    render() {
        return (
            <AdWrapper>
                <img src='http://a1.jmstatic.com/07c1f8519c836ade/footer_dy.jpg' 
                height='45' width='375'
                alt='' />
            </AdWrapper>
        );
    }
}
