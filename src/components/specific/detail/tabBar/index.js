import React, { Component } from 'react';
import {DetailTabbarWrapper} from './styled'
export default class componentName extends Component {
    render() {
        return (
            <DetailTabbarWrapper>
                <div className='shop'>
                    <i className='iconfont'>&#xe61d;</i>
                    <span>店铺</span>
                </div>
                <div className='cart'>
                    <i className='iconfont'>&#xe615;</i>
                    <span>购物车</span>
                </div>
                <div className='addToCart'>加入购物车</div>
                <div className='buyNow'>立即购买</div>
            </DetailTabbarWrapper>
        );
    }
}
