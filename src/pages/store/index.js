import React,{Component} from 'react';
import {StoreStyle} from './styled';
export default class Store extends Component{
    render(){
        return(
            <StoreStyle>
                <div className="store">
                    <div className="title">
                        <div className="store_d">
                            <div className="left">
                                <img src="http://mp5.jmstatic.com/pop_store/000/008/8150_std/5ce789133eadf_320_320.jpg?imageView2/2/q/75/1564727442" alt=""/>
                                <span>万代国际美妆专营店</span>
                            </div>
                            <div className="shou">
                                <span>收藏</span>
                            </div>
                            <div className="pop">
                                802人已收藏
                            </div>
                        </div>
                    </div>
                </div>
            </StoreStyle>
        )
    }
}