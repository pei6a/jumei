import React, { Component } from 'react';
import {ShopStyleWrapper} from './styled'
export default class Shop extends Component {
    render() {
        return (
            <ShopStyleWrapper>
                <div class='shop_sign'>
                    <img src='' alt=''/>
                    <div>
                        <p>柏蝶旗舰店</p>
                        <p><span>官方授权</span><span>官方授权</span></p>
                    </div>
                    <div>
                        收藏
                    </div>
                </div>

            </ShopStyleWrapper>
        );
    }
}
