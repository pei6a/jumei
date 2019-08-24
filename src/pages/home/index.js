import React,{Component} from "react"
export default class Home extends Component{
    render(){
        return(
            <div>
                <div>
                    <input type="text"/>
                    <span className="iconfont icon-sousuochazhao" style={{fontSize:"30px"}} onClick={this.handlerClick.bind(this)}></span>
                </div>
            </div>
        )
    }
    handlerClick(){
        alert("1")
    }
} 