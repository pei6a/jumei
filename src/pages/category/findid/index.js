import React,{Component} from "react";
import { mapStateToProps, mapDispatchToProps } from "../find/mapStore"
import FindIdContent from "../../../components/catetorymod/findid"
import {FindIdBox} from "./style"
import {connect} from "react-redux"
class FindId extends Component{
    render(){
        return(
            <FindIdBox>
                <FindIdContent/>
                <div className="FindIdBottom">
                    <div className="FindIdBottom_left">
                        <span className="iconfont icon-yingyuana"></span>
                        <span>店铺</span>
                    </div>
                    <div className="FindIdBottom_left">
                        <span className="iconfont icon-Bag"></span>
                        <span>购物车</span>
                    </div>
                    <div className="FindIdBottom_right">加入购物车</div>
                    <div className="FindIdBottom_right FindIdBottom_rightColor">立即购买</div>
                </div>
            </FindIdBox>
        )
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(FindId)
