import React,{Component} from "react";
import { mapStateToProps, mapDispatchToProps } from "../../../pages/category/find/mapStore"
import {FindIdContentstyle} from "./style"
import{Link}from "react-router-dom"
import {connect} from "react-redux"
import {withRouter}from "react-router-dom"
import BScrollComponent from "@common/bscroll";
class FindIdContent extends Component{
    render(){
        let {original_image,findjumei_price,findmarket_price,finddata} =this.props
        // console.log(original_image,findjumei_price,findmarket_price,finddata,123)
        return( 
            <FindIdContentstyle>
                <div className="findidHeaderBox">
                <div className="findidHeader">
                    <div className="findidHeaderleft">聚美</div>
                    <div className="findidHeadercenter">聚美优品-我为自己代言</div>
                    <div className="findidHeaderright">前往聚美</div>
                </div>
                <div className="findidHeaderNav">
                    <div className="iconfont icon-fanhui" onClick={this.handlerGoback.bind(this)}></div>
                    <div className="findidHeaderNavceter">{finddata.short_name}</div>
                    <Link to="/home" className="iconfont icon-shouye"></Link>
                </div>
                <BScrollComponent ref="bscroll">
                <div className="findidHeaderCenterbox">
                    <div className="findidHeaderCenterimg">
                        <img src={original_image} alt=""/>
                    </div>
                    <div className="findidHeaderCenterPrice">
                        <div className="findidHeaderCenterPriceleft">
                            <span>￥{findjumei_price}</span>
                            <del>￥{findmarket_price}</del>
                            <i>价格详情</i>
                        </div>
                        <div className="findidHeaderCenterPriceright">{finddata.store_id}已购买</div>
                    </div>
                    <div className="findidHeaderCentername">
                        <span className="findidHeaderCenternamespan">聚美自营</span>
                        <span>{finddata.short_name}</span>
                    </div>
                    <div className="findidHeaderCenterfright">
                        <div className="findidHeaderCenterfright_type">运费</div>
                        <div className="findidHeaderCenterfright_p">{finddata.wuliu_text}（新疆部分区域除外）</div>
                        <div>></div>
                    </div>
                    <div className="findidHeaderCenterstate">
                        <div className="findidHeaderCenterfright_type">说明</div>
                        <div className="findidHeaderCenterstate_p">
                            <span>自营保税仓发货</span>
                            <span>24小时内发货</span>
                            <span>7天拆封无条件退货</span>
                            <span>支持分期</span>
                        </div>
                        <div className="iconfont icon-xiasanjiao"></div>
                    </div>
                    <div className="findidHeaderCenterEnterBox">
                        <div  className="findidHeaderCentertop">
                            <img src="http://mp5.jmstatic.com/pop_store/000/003/3147_std/57ac228b0e52a_320_320.jpg?1486088093&imageView2/2/w/320/q/90" alt=""/>
                            <div>
                                <p>AHC急速免税店</p>
                                <p className="findidHeaderCentertop_p">精华面膜专家</p>
                            </div>
                            <div className="findidHeaderCentertop_jimei">聚美自营</div>
                        </div>
                        <div className="findidHeaderCenterbottom">进入店铺></div>
                    </div>
                    <div className="findidHeaderCenterEntertu">
                        <img src={original_image} alt=""/>
                    </div>
                </div>
                </BScrollComponent>
                </div>
            </FindIdContentstyle>
        )
    }
    handlerGoback(){
        this.props.history.goBack()
    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FindIdContent))