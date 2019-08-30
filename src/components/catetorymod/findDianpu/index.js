import React, { Component } from "react";
import { Dianpucon } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "../../../pages/category/find/mapStore"
import { connect } from "react-redux"
import {Link} from "react-router-dom"
import BScrollComponent from "@common/bscroll";
class Dianpucontent extends Component {
    render() {
        let { dianpunav, dianpunavnum, dianpudate,dianpusort } = this.props
        return (
            <Dianpucon>
                <div className="dianpunavBox">
                    {
                        dianpunav.map((item, index) => (
                            <div key={index}
                                onClick={this.props.handleDianpuNav.bind(this, index,dianpusort)}
                                style={{ color: dianpunavnum === index ? "#fe4070" : "" }}
                            >{item}</div>
                        ))
                    }
                    <li>
                    <Link to="dianpufilter">筛选</Link>
                    </li>
                </div>
                <BScrollComponent ref="bscroll">
                <div className="dianpunContentBox">
                    {
                        dianpudate.map((item,index) => (
                            <Link to={{pathname:"/product/"+item.item_id+"/"+item.type}}  key={index}>
                            <div className="dianpunContent" onClick={this.props.handledianpuData.bind(
                                this,index,item.short_name,item.image_url,item.jumei_price,item.market_price
                                )}>
                                <div className="dianpunContentimg">
                                    <img src={item.image_url} alt=""/>
                                </div>
                                <div className="dianpunContentname">
                                    <span>{item.auth_o_retail_o_yqt}</span>
                                   {item.short_name}
                                </div>
                                <div className="dianpunContenttext">
                                    <span>{item.tag_text[0]}</span>
                                    <span>{item.tag_text[1]}</span>
                                </div>
                                <div className="dianpunContentprice">
                                    <span>￥{item.jumei_price}</span>
                                    <del>￥{item.market_price}</del>
                                </div>
                                <div>{item.comments_number}</div>
                            </div>
                            </Link>
                        ))
                    }
                </div>
                </BScrollComponent>
            </Dianpucon>
        )
    }
    componentDidMount() {
        let {dianpusort}=this.props
        this.props.dianpusHandledata(dianpusort)
    }
  
}
export default connect(mapStateToProps, mapDispatchToProps)(Dianpucontent)
