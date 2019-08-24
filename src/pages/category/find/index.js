import React,{Component} from "react"
import {FindBackground} from "./styled"
export default class Find extends Component{
    render(){
        return(
            <FindBackground>
                <div className="findBox">
                    <div className="SeekBox">
                        <div className="Seek">
                            <span className="iconfont icon-magnifier"></span>
                            <input type="text" value="搜索商品名称、品牌"/>
                        </div>
                        <div>返回</div>
                    </div>
                </div>
            </FindBackground>
        )
    }
}