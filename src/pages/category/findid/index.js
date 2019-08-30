import React,{Component} from "react";
import { mapStateToProps, mapDispatchToProps } from "../find/mapStore"
import FindIdContent from "../../../components/catetorymod/findid"
import {FindIdBox} from "./style"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
class FindId extends Component{
    render(){
        let {finddata}=this.props
        return(
            <FindIdBox>
                <FindIdContent/>
                <div className="FindIdBottom">
                    <div className="FindIdBottom_left">
                        <span className="iconfont icon-yingyuana"></span>
                        <span>
                            <Link to="/dianpu">店铺</Link>
                        </span>
                    </div>
                    <div className="FindIdBottom_left">
                        <span className="iconfont icon-Bag"></span>
                        <span>购物车</span>
                    </div>
                    <Link to="/goshopping" className="FindIdBottom_right"
                    onClick={this.props.handlershopping.bind(this,finddata.short_name)}
                    >加入购物车</Link>
                    <div className="FindIdBottom_right FindIdBottom_rightColor">立即购买</div>
                </div>
            </FindIdBox>
        )
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(FindId)
