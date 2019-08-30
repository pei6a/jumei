import React, { Component } from "react"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../find/mapStore"
import { souMsapixuan } from "../../../api/movie"
import { Findpagebox } from "./styled"
import {Link}from "react-router-dom";
import BScrollComponent from "@common/bscroll";
class FindPage extends Component {
    constructor() {
        super()
        this.state = {
            findpagecategory: [],
            findpagefilter: [],
            findpagelist_list: [],
            findpagefunction: [],
            handleFindindex: 0,
            handleFindcolor: 0,
            handleFindshow:false
        }
    }
    render() {
        let { findpagecategory, findpagefilter, findpagefunction, findpagelist_list, handleFindindex ,handleFindcolor} = this.state
        let { findpagelist} = this.props;
        this.state.findpagelist_list=this.props.category_data
        // console.log(this.state.findpagelist_list,98989, 9)
        
        return (
            <Findpagebox>
                <div>
                    <span className="iconfont icon-fanhui findpageheader" onClick={this.handlernamegoback.bind(this)}></span>
                    <span className="iconfont icon-shouye findpageheaderhome"></span>
                </div>

                <div className="Findpagebox">
                    <ul className="Findpageul">
                        {
                            findpagelist.map((item, index) => (
                                <li key={index} onClick={this.handleFindClick.bind(this, index)}
                                    className={handleFindcolor===index ?"Findpageli":""}
                                >
                                    <span>{item}</span>
                                    <span className="iconfont icon-xiasanjiao"></span>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="Findpageulshow">
                        {
                            findpagefilter.map((item2, index2) => (
                                <li className={handleFindindex === 5 ? "Findpagelishow" : "Findpagelinone"}
                                    key={index2}
                                >{item2.name}</li>
                            ))
                        }
                        {
                            findpagecategory.map((item2, index2) => (
                                <Link to={{pathname:"/seach/"+item2.id}} key={index2}>
                                    <li className={handleFindindex === 6 ? "Findpagelishow" : "Findpagelinone"}
                                        onClick={this.props.handleFindcatgory.bind(this,index2,item2.id)}
                                        >{item2.name}</li>
                                </Link>
                            ))
                        }
                        {
                            findpagefunction.map((item2, index2) => (
                                <li className={handleFindindex === 7 ? "Findpagelishow" : "Findpagelinone"}
                                    key={index2}>{item2.name}</li>
                            ))
                        }

                    </ul>
                    <BScrollComponent ref="bscroll">
                    <ul className="Findpagelistul">
                        {
                            findpagelist_list.map((item, index) => (
                                <Link to={{pathname:"/product/"+item.item_id+"/"+item.type}} key={index}>
                                    <li className="Findpagelistli"  
                                    onClick={this.props.handlerClickId.bind(this,index,item.item_id,item.original_image,item.type,item.jumei_price,item.market_price)}
                                    >
                                        <div className="Findpagelistimgbox">
                                            <img src={item.original_image} alt=""/>
                                        </div>
                                        <div className="Findpagelistrightbox">
                                            <div className="Findpagelisttop">{item.middle_name}</div>
                                            <div className="Findpagelistcenter">月销{item.buyer_number}</div>
                                            <div className="Findpagelistbottom">
                                                <span>￥{item.jumei_price}</span>
                                                <del>￥{item.market_price}</del>
                                            </div>

                                        </div>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                    </BScrollComponent>
                </div>
            </Findpagebox>
        )
    }
    handlernamegoback(){
        this.props.history.goBack()
    }
    handleFindClick(index) {

        let indx = 5;
        switch (index) {
            case 0:
                indx = 5;
                break;
            case 1:
                indx = 6;
                break;
            case 2:
                indx = 7;
                break;
            
        }
        this.setState({
            handleFindindex: indx,
            handleFindcolor:index,

         
        })
    }
    
    async componentDidMount() {
        this.category_id = this.props.match.params.category_id
        let data = await souMsapixuan(this.category_id, 1, "get")
        let { findpagecategory, findpagefilter, findpagefunction } = this.state
        let obj = [];
        let obj1 = [];
        let obj2 = [];
        let obj3 = [];
        obj.id = data.data.filter.category[0].id;
        obj.name = data.data.filter.category[0].name;
        obj1.id = data.data.filter.category[1].id;
        obj1.name = data.data.filter.category[1].name;
        obj2.id = data.data.filter.category[2].id;
        obj2.name = data.data.filter.category[2].name;
        obj3.id = data.data.filter.category[3].id;
        obj3.name = data.data.filter.category[3].name;
        findpagecategory.push(obj, obj1, obj2, obj3)

        let arr = [];
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        let arr4 = [];
        let arr5 = [];
        let arr6 = [];
        arr.id = data.data.filter.brand[0].id;
        arr.name = data.data.filter.brand[0].name;
        arr1.id = data.data.filter.brand[1].id;
        arr1.name = data.data.filter.brand[1].name;
        arr2.id = data.data.filter.brand[2].id;
        arr2.name = data.data.filter.brand[2].name;
        arr3.id = data.data.filter.brand[3].id;
        arr3.name = data.data.filter.brand[3].name;
        arr4.id = data.data.filter.brand[4].id;
        arr4.name = data.data.filter.brand[4].name;
        arr5.id = data.data.filter.brand[5].id;
        arr5.name = data.data.filter.brand[5].name;
        arr6.id = data.data.filter.brand[6].id;
        arr6.name = data.data.filter.brand[6].name;
        findpagefilter.push(arr, arr1, arr2, arr3, arr4, arr5, arr6)

        let font = [];
        let font1 = [];
        let font2 = [];
        let font3 = [];
        let font4 = [];
        let font5 = [];
        let font6 = [];
        let font7 = [];
        let font8 = [];
        let font9 = [];
        font.id = data.data.filter.function[0].id;
        font.name = data.data.filter.function[0].name;
        font1.id = data.data.filter.function[1].id;
        font1.name = data.data.filter.function[1].name;
        font2.id = data.data.filter.function[2].id;
        font2.name = data.data.filter.function[2].name;
        font3.id = data.data.filter.function[3].id;
        font3.name = data.data.filter.function[3].name;
        font4.id = data.data.filter.function[4].id;
        font4.name = data.data.filter.function[4].name;
        font5.id = data.data.filter.function[5].id;
        font5.name = data.data.filter.function[5].name;
        font6.id = data.data.filter.function[6].id;
        font6.name = data.data.filter.function[6].name;
        font7.id = data.data.filter.function[7].id;
        font7.name = data.data.filter.function[7].name;
        font8.id = data.data.filter.function[8].id;
        font8.name = data.data.filter.function[8].name;
        font9.id = data.data.filter.function[9].id;
        font9.name = data.data.filter.function[9].name;
        findpagefunction.push(font, font1, font2, font3, font4, font5, font6, font7, font8, font9)

        // console.log(data, 1231)
        this.setState({
            findpagefilter,
            findpagelist_list: data.data.item_list,
            findpagecategory,
            findpagefunction
        })
        // console.log(data.data.item_list,8888)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FindPage)