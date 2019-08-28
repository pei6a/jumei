import React, { Component } from 'react';
import { GwcStyle } from './styled';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';
import { NavLink } from 'react-router-dom';
class Gwc extends Component {
    state = {
        selectedAll: true,
        name: "",
        price: "",
        img: "",
        good:[],
        list:[]
    }
    render() {
        let { selectedAll ,good} = this.state;
        good.push(this.props.match.params)
        console.log(this.state.good,7777)
        return (
            <GwcStyle>
                <div className="tit">
                    <NavLink to="/gloup"><i>&lt;</i></NavLink>
                    <div>购物车</div>
                    <img src="./img/6.png" alt="" />
                </div>
                <div className="select">
                    {
                        good.map((item,index)=>(
                            <div className="goods" key={index}>
                                <input type="checkbox" />
                                <div className="goods_item">
                                    <div className="goods_items">
                                        <img src="http://mp5.jmstatic.com/product/002/032/2032762_spu_normal/2032762_800_800.jpg?imageView2/2/w/320/q/90" alt="" />
                                        <div className="items">
                                            <span>
                                                <span>极速免税</span>{item.name}
                                    </span>
                                            <div className="ml">
                                                <span>50ml</span>
                                                <span><img src="./img/close2.png" alt="" />1</span>
                                            </div>
                                            <div className="bianji">
                                                <span>{item.price}</span>
                                                <span>编辑</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="jiesuan">
                    <div className="left">
                        <input type="checkbox" checked={selectedAll} onChange={this.handlerClick.bind(this)} />全选
                        <p>合计<span>￥599</span></p>
                    </div>
                    <div className="right">去结算(1)</div>
                </div>
            </GwcStyle>
        )
    }
    handlerClick() {
        this.setState({
            selectedAll: !this.state.selectedAll
        })
    }
    // componentDidMount(){
    //     let{name,price,img}=this.props.match.params;
    //     this.props.gwcList(name,price,img)
    // }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gwc)