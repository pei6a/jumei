import React, { Component } from 'react';
import { GwcStyle } from './styled';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';
import { NavLink } from 'react-router-dom';
class Gwc extends Component {
    state = {
    }
    render() {
        let {goods,selectedAll,list}=this.props;
        return (
            <GwcStyle>
                <div className="tit">
                    <NavLink to="/gloup"><i>&lt;</i></NavLink>
                    <div>购物车</div>
                    <img src="./img/6.png" alt="" />
                </div>
                <div className="select">
                    {
                        goods.map((item,index)=>(
                            <div className="goods" key={index}>
                                <input type="checkbox" checked={item.flag} onChange={this.props.handlerInput.bind(this,index)}/>
                                <div className="goods_item">
                                    <div className="goods_items">
                                        <img src="http://mp5.jmstatic.com/product/196/785/df4201174196785146_std/s_df4201174196785146_800_800.jpg?imageView2/2/w/320/q/90" alt="" />
                                        <div className="items">
                                                <span><i>极速免税</i>{item.name}</span>
                                            <div className="ml">
                                               <button onClick={this.props.handlerJ.bind(this,index)}>-</button>
                                               <input type="text" value={item.num} onChange={this.handlerAdd.bind(this)}/>
                                               <button onClick={this.props.handlerA.bind(this,index)}>+</button>
                                            </div>
                                            <div className="bianji">
                                                <span>{item.price}</span>
                                                <span onClick={this.props.handlerDel.bind(this,index)}>删除</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    goods.map((item,index)=>(
                        <div className="jiesuan" key={index}>
                            <div className="left">
                            <input type="checkbox" checked={selectedAll} onChange={this.props.handleSelectedChange.bind(this)}/>全选
                                <p>合计<span>{goods.goodsPrice}</span></p>
                            </div>
                            <div className="right">去结算({goods.num})</div>
                        </div>
                    ))
                }
            </GwcStyle>
        )
    }
    // handlerClick(){
    //     this.setState({
    //         selectedAll:!this.state.selectedAll
    //     })
    // }
    handlerAdd(e){
        let num=e.target.value;
    }
    // componentWillUnmount(){
    //     let {name,price,img}=this.props.match.params;
    //     this.props.handlerSave(name,price,img)
    // }
    componentDidMount(){
        let {name,price,img}=this.props.match.params;
        this.props.handlerSave(name,price,img)
        this.props.handlerUpdata();
        this.forceUpdate()
    }
    shouldComponentUpdate(){
        this.props.handlerUpdata();
        this.forceUpdate()
        return true;
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gwc)