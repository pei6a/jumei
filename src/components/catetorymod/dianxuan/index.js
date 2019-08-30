import React,{Component} from "react"
import{mapStateToProps,mapDispatchToProps} from "../../../pages/category/find/mapStore"
import {connect}from "react-redux"
import {DianFilterBox} from "./styled"
class Dianxiuan extends Component{
    render(){
        let {findpagelist,filterindex,xuanfilter,filterindex1}=this.props
        console.log(filterindex1,111)
        return(
            <DianFilterBox>
                <div className="DianFilterBoxLeft">
                    <ul>
                        {
                            findpagelist.map((item,index)=>(
                                <li key={index}
                                className={filterindex===index?"DianFilterLeft DianFilterLeftbg":"DianFilterLeft"}
                                onClick={this.props.handleDianfilter.bind(this,index)}
                                >{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="DianFilterBoxRight">
                   
                    {
                        xuanfilter.map((item,index)=>(
                            <ul key={index}
                            className={filterindex===index?"DianFilterRightulshow":"DianFilterRightul"}
                            >
                                {
                                    item.map((item1,index1)=>(
                                        <li key={index1}
                                        className="DianFilterLeftcon"
                                        onClick={this.props.handleCilchfiterindex.bind(this,index1)}
                                        >{item1}
                                            <span className={filterindex1===index1?"iconfont icon-xiasanjiao DianFilterRightulcolor":"iconfont icon-xiasanjiao DianFilterRightul"}
                                            
                                            ></span>
                                        </li>
                                    ))
                                }
                            </ul>
                        ))
                    }
                </div>
            </DianFilterBox>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dianxiuan)