import React, { Component } from "react";
import { FindAccordion } from "./styled";
import store from "../../../store"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "@pages/category/find/mapStore"
import {souMsapiAsyncAction} from "../../../actions/actionCreator"
import {Link} from "react-router-dom"
class AccordionExmple extends Component {

    render() {
        let {souMsapiList,findflag,findindex}=this.props
        // console.log(souMsapiList[0],1)
        return (
            <FindAccordion>
            <ul className="Accordionul">
            {
                souMsapiList.map((item,index) => (
                    <li className="Accordionli" key={index} onClick={this.props.handleFindshow.bind(this,index)}>
                        <div  className="Accordionlidiv">
                            <span className={findindex===index?"AccordionliSpanfirst":""}>{item.name}</span>
                            <span className={findindex===index?"Accordionlispan iconfont icon-shangsanjiao AccordionliSpanfirst":"Accordionlispan iconfont icon-xiasanjiao"}></span>
                        </div>
                        <ul className={findindex===index?"Accordionulchild":"Accordionulchildnone"} style={{display:findflag}}>
                          {
                              item.sub_categories.map((item1,index1)=>(
                                <Link to={{pathname:"/seach/"+item1.category_id}}  key={index1}>
                                  <li onClick={this.props.handleChildVal.bind(this,index1)}
                                  className="Accordionlichild">{item1.name}
                                  </li>
                                  </Link>
                              ))
                             
                          }
                       </ul>
                    </li>

                ))
                        
            }
        </ul>
            </FindAccordion>
        )
    }

    async componentDidMount() {
        store.dispatch(souMsapiAsyncAction())
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(AccordionExmple)

