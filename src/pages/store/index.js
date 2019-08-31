import React,{Component} from 'react';
import {StoreStyle} from './styled';
import { mapStateToProps, mapDispatchToProps } from "./connect";
import { connect } from "react-redux";
import Screen from '../../pages/screen';
class Store extends Component{
    state={
        storeList:[],
        storedList:[],
        flag:true,
        storedzhList:[],
        flags:false,
        flage:false
    }
    render(){
        let {storeList,storedList,storedzhList}=this.props;
        let {flag,flags,flage,value}=this.state;
        return(
            <StoreStyle >
                <div className="store">
                <h2>{value}</h2>
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
                    <div className="nav">
                        <ul>
                            <li onClick={this.handledlerzh.bind(this)}>综合</li>
                            <li onClick={this.handledler.bind(this)}>价格
                                <i style={{borderBottom:!flag?'5px solid #777':'5px solid #ccc'}}></i>
                                <i style={{borderTop: flag?'5px solid #777':'5px solid #ccc'}}></i>
                            </li>
                            <li>销量</li>
                            <li onClick={this.handlerScreen.bind(this)}>
                            筛选
                            </li>
                        </ul>
                    </div>
                    <div className="items">
                        <ul>
                            {
                                storedzhList.map((item,index)=>(
                                    <li key={index} style={{display:flag?'block':'none'}}>
                                        <div className="imgage"><img src={item.image_url} alt=""/></div>
                                        <div className="jieshao">{item.short_name}</div>
                                        <div className="text">{item.tag_text}</div>
                                        <div className="price">
                                            <span>￥{item.jumei_price}</span>
                                            <span>￥{item.market_price}</span>
                                        </div>
                                    </li>
                                ))
                            }
                            {
                                storedList.map((item,index)=>(
                                    <li key={index} style={{display:!flag?'block':'none'}}>
                                        <div className="imgage"><img src={item.image_url} alt=""/></div>
                                        <div className="jieshao">{item.short_name}</div>
                                        <div className="text">{item.tag_text}</div>
                                        <div className="price">
                                            <span>￥{item.jumei_price}</span>
                                            <span>￥{item.market_price}</span>
                                        </div>
                                    </li>
                                ))
                            }
                            {
                                storeList.map((item,index)=>(
                                    <li key={index} style={{display:flags?'block':'none'}}>
                                        <div className="imgage"><img src={item.image_url} alt=""/></div>
                                        <div className="jieshao">{item.short_name}</div>
                                        <div className="text">{item.tag_text}</div>
                                        <div className="price">
                                            <span>￥{item.jumei_price}</span>
                                            <span>￥{item.market_price}</span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <Screen val={flage} handlerZ={this.handlerT.bind(this)}></Screen>
            </StoreStyle>
        )
    }
    handlerT(val){
        this.setState({
            flage:val
        })
    }
    handlerScreen(){
        let {flage}=this.state;
        this.setState({
            flage:!this.state.flage
        })
        console.log(flage)
    }
    componentDidMount() {
       let {ids}=this.props.match.params;
       this.props.handleStoreGetData(ids);
       this.props.handleStoreGetDatad(ids);
       this.props.handerZhDatad(ids)
    }
    handledler(){
        let {flag}=this.state;
        this.setState({
            flag:!this.state.flag
        })
    }
    handledlerzh(){
        let {flags,flag}=this.state;
        this.setState({
            flags:!this.state.flags,
            flag:''
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Store)