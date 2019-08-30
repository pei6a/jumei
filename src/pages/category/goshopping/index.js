import React, { Component } from "react"
import { GoshopingBox } from "./styled"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps} from "../find/mapStore"
class Goshopping extends Component {
    render() {
        let { arr1,num,price} = this.props
        // console.log(original_image,findjumei_price,finddata,888)
        return (
            <GoshopingBox>
                <div className="GoshopingHeader">
                    <div className="iconfont icon-fanhui" onClick={this.handlershopping.bind(this)}></div>
                    <div className="GoshopingHeadercenter">购物车</div>
                    <div className="iconfont icon-shouye"></div>
                </div>
                <div>
                    <div className="GoshopingCheckedBox">
                        <div className="iconfont icon-xiasanjiao GoshopingChecked"></div>
                        <div>全选</div>
                    </div>
                    {
                        arr1.map((item, index) => (
                            <div className="GoshopingContentBox" key={index}>
                                <div className="iconfont icon-xiasanjiao GoshopingChecked"></div>
                                <div className="GoshopingImgBox">
                                    <img src={item.original_image} alt="" />
                                </div>
                                <div>
                                    <div>{item.short_name}</div>
                                    <div className="GoshopingfilterBox">
                                        <div className="GoshopingCheckednum"
                                        onClick={this.props.clickshoppingDel.bind(this,index)}
                                        >-</div>
                                        <div>{item.shoppingNum}</div>
                                        <div className="GoshopingCheckednum"
                                        onClick={this.props.clickshoppingAdd.bind(this,index)}
                                        >+</div>
                                    </div>
                                    <div className="GoshopingCheckedPrice">￥{item.findjumei_price}</div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="GoshopingFooter">
                        <div className="GoshopingFootercheck">
                            <div className="iconfont icon-xiasanjiao GoshopingChecked"></div>
                            <div>全选</div>
                        </div>
                        <div>合计<span className="GoshopingFootercolor">￥{price}</span></div>
                        <div className="GoshopingFootersubmit">去结算<span>({num})</span></div>
                    </div>
                </div>
            </GoshopingBox>
        )
    }
    handlershopping(){
        this.props.history.goBack()
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Goshopping) 