import React,{Component} from "react"
import {FindBackground} from "./styled"
import AccordionExmple from "@components/catetorymod/findmod"
export default class Find extends Component{
    render(){
        return(
            <FindBackground>
                <div className="findBox">
                    <div className="SeekBox">
                        <div className="Seek">
                            <span className="iconfont icon-magnifier"></span>
                            <input type="text"/>
                        </div>
                        <div onClick={this.handleFindback.bind(this)}>返回</div>
                    </div>
                    <AccordionExmple/>
                </div>
            </FindBackground>
        )
    }
    handleFindback(){
        this.props.history.goBack()
    }
}