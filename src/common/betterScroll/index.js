import React, { Component } from 'react';
import { BSwrapper } from './styled'
import BScroll from 'better-scroll'
export default class BScrollComponent extends Component {
    render() {
        return (
            <BSwrapper ref='wrapper'>
                {this.props.children}
            </BSwrapper>
        );
    }
    componentDidMount(){
        this.scroll=new BScroll(
            this.refs.wrapper,{
                click:true,
                tap:true,
                pullUpLoad:true,
                pullDownRefresh:true
            }
        )
    }
    handlePullingUp(cb){
        this.scroll.on('pullingUp',()=>{
            cb()
        })
    }
    hanldeNextPullingUp(){
        this.scroll.finishPullUp()
        this.scroll.refresh()
    }
    handlePullingDown(cb){
        this.scroll.on('pullingDown',()=>{
            cb()
        })
    }
    hanldeNextPullingDown(){
        this.scroll.finishPullDown()
        this.scroll.refresh()
    }
}














