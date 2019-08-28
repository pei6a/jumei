import React,{Component} from "react";
import {GloupStyle} from './styled';
import {gloupApi,gloupApim,gloupApimz,gloupApixb,gloupApisp,gloupApism,gloupApijju,gloupApinz,gloupApibj,gloupApiny,gloupApixl,gloupApihw,gloupApixq} from '@api/movie';
import BScrollComponent from "@common/bscroll";

import {mapStateToProps,mapDispatchToProps} from './connect';
import { connect } from "react-redux";
class Gloup extends Component{
    state={
        navs:["推荐",'母婴健康','美妆','礼盒箱包','饰品配饰','数码家电','家居','女装','食品保健','内衣','鞋类','运动户外','下期预告'],
        gloupList:[],
        gloupApim:[],
        gloupApimz:[],
        gloupApixb:[],
        gloupApisp:[],
        gloupApism:[],
        gloupApijju:[],
        gloupApinz:[],
        gloupApibj:[],
        gloupApiny:[],
        gloupApixl:[],
        gloupApihw:[],
        gloupApixq:[],
        page:1,
        indexStart:0
    }
    render(){
        let {navs,gloupList,indexStart,gloupApim,gloupApimz,gloupApixb,gloupApisp,gloupApism,gloupApijju,gloupApinz,gloupApibj,gloupApiny,gloupApixl,gloupApihw,gloupApixq}=this.state;
        return(
            <GloupStyle>
                <div className="title">
                    <img src="http://p0.jmstatic.com/mobile/touch/Image/app/guide_logo.png" alt=""/>
                    <div className="lays">
                        <p>聚美优品·我为自己代言</p>
                    </div>
                    <a href="">前往聚美</a>
                    <div className="error">
                        <img src="//f0.jmstatic.com/btstatic/h5/close2.png" alt=""/>
                    </div>
                </div>
                <div className="scoll">
                    <ul className="scoll_list">
                        {
                            navs.map((item,index)=>(
                                <li key={index} >
                                    <a href="#gloup" style={{color:indexStart==index?'red':''}}  onClick={this.handlerClick.bind(this,index)}>{item}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <BScrollComponent ref="bscroll">
                <div className="item">
                    <ul className="item_url">
                        {
                            gloupList.map((item,index)=>(
                            <li className="item_list_li" key={index} style={{display:indexStart==0?'block':'none'}} onClick={this.handleTo.bind(
                                this,
                                item.item_id,
                                item.type
                                )}>
                            <div className='a'>
                                <div className="toack">{item.buyer_number_text}</div>
                                <div className="link">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="twoGloup">
                                    <span>{item.group_name_tag}</span> {item.medium_name}
                                </div>
                                <div className="unity">
                                    <div className="unity_left">
                                        <span className="span1">{item.jumei_price}</span>
                                        <del>{item.market_price}</del>
                                        <span className="span2">{item.single_price}</span>
                                    </div>
                                    <div className="unity_right">
                                        <span>去开团</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            ))
                        }
                        {
                            gloupApim.map((item,index)=>(
                            <li className="item_list_li" key={index} style={{display:indexStart==1?'block':'none'}} onClick={this.handleTo.bind(
                                this,
                                item.item_id,
                                item.type
                                )}>
                            <div className="a">
                                <div className="toack">{item.buyer_number_text}</div>
                                <div className="link">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="twoGloup">
                                    <span>{item.group_name_tag}</span> {item.medium_name}
                                </div>
                                <div className="unity">
                                    <div className="unity_left">
                                        <span className="span1">{item.jumei_price}</span>
                                        <del>{item.market_price}</del>
                                        <span className="span2">{item.single_price}</span>
                                    </div>
                                    <div className="unity_right">
                                        <span>去开团</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            ))
                        }
                        {
                            gloupApimz.map((item,index)=>(
                            <li className="item_list_li" key={index} style={{display:indexStart==2?'block':'none'}} onClick={this.handleTo.bind(
                                this,
                                item.item_id,
                                item.type
                                )}>
                            <div className='a'>
                                <div className="toack">{item.buyer_number_text}</div>
                                <div className="link">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="twoGloup">
                                    <span>{item.group_name_tag}</span> {item.medium_name}
                                </div>
                                <div className="unity">
                                    <div className="unity_left">
                                        <span className="span1">{item.jumei_price}</span>
                                        <del>{item.market_price}</del>
                                        <span className="span2">{item.single_price}</span>
                                    </div>
                                    <div className="unity_right">
                                        <span>去开团</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            ))
                        }
                        {
                            gloupApixb.map((item,index)=>(
                            <li className="item_list_li" key={index} style={{display:indexStart==3?'block':'none'}} onClick={this.handleTo.bind(
                                this,
                                item.item_id,
                                item.type
                                )}>
                            <div className='a'>
                                <div className="toack">{item.buyer_number_text}</div>
                                <div className="link">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="twoGloup">
                                    <span>{item.group_name_tag}</span> {item.medium_name}
                                </div>
                                <div className="unity">
                                    <div className="unity_left">
                                        <span className="span1">{item.jumei_price}</span>
                                        <del>{item.market_price}</del>
                                        <span className="span2">{item.single_price}</span>
                                    </div>
                                    <div className="unity_right">
                                        <span>去开团</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            ))
                        }
                        {
                            gloupApisp.map((item,index)=>(
                            <li className="item_list_li" key={index} style={{display:indexStart==4?'block':'none'}} onClick={this.handleTo.bind(
                                this,
                                item.item_id,
                                item.type
                                )}>
                            <div className='a'>
                                <div className="toack">{item.buyer_number_text}</div>
                                <div className="link">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="twoGloup">
                                    <span>{item.group_name_tag}</span> {item.medium_name}
                                </div>
                                <div className="unity">
                                    <div className="unity_left">
                                        <span className="span1">{item.jumei_price}</span>
                                        <del>{item.market_price}</del>
                                        <span className="span2">{item.single_price}</span>
                                    </div>
                                    <div className="unity_right">
                                        <span>去开团</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            ))
                        }
                        {
                            gloupApism.map((item,index)=>(
                            <li className="item_list_li" key={index} style={{display:indexStart==5?'block':'none'}} onClick={this.handleTo.bind(
                                this,
                                item.item_id,
                                item.type
                                )}>
                            <div className='a'>
                                <div className="toack">{item.buyer_number_text}</div>
                                <div className="link">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="twoGloup">
                                    <span>{item.group_name_tag}</span> {item.medium_name}
                                </div>
                                <div className="unity">
                                    <div className="unity_left">
                                        <span className="span1">{item.jumei_price}</span>
                                        <del>{item.market_price}</del>
                                        <span className="span2">{item.single_price}</span>
                                    </div>
                                    <div className="unity_right">
                                        <span>去开团</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            ))
                        }
                        {
                            gloupApijju.map((item,index)=>(
                            <li className="item_list_li" key={index} style={{display:indexStart==6?'block':'none'}} onClick={this.handleTo.bind(
                                this,
                                item.item_id,
                                item.type
                                )}>
                            <div className='a'>
                                <div className="toack">{item.buyer_number_text}</div>
                                <div className="link">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="twoGloup">
                                    <span>{item.group_name_tag}</span> {item.medium_name}
                                </div>
                                <div className="unity">
                                    <div className="unity_left">
                                        <span className="span1">{item.jumei_price}</span>
                                        <del>{item.market_price}</del>
                                        <span className="span2">{item.single_price}</span>
                                    </div>
                                    <div className="unity_right">
                                        <span>去开团</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            ))
                        }
                        {
                            gloupApinz.map((item,index)=>(
                            <li className="item_list_li" key={index} style={{display:indexStart==7?'block':'none'}} onClick={this.handleTo.bind(
                                this,
                                item.item_id,
                                item.type
                                )}>
                            <div className='a'>
                                <div className="toack">{item.buyer_number_text}</div>
                                <div className="link">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="twoGloup">
                                    <span>{item.group_name_tag}</span> {item.medium_name}
                                </div>
                                <div className="unity">
                                    <div className="unity_left">
                                        <span className="span1">{item.jumei_price}</span>
                                        <del>{item.market_price}</del>
                                        <span className="span2">{item.single_price}</span>
                                    </div>
                                    <div className="unity_right">
                                        <span>去开团</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            ))
                        }
                        {
                            gloupApibj.map((item,index)=>(
                            <li className="item_list_li" key={index} style={{display:indexStart==8?'block':'none'}} onClick={this.handleTo.bind(
                                this,
                                item.item_id,
                                item.type
                                )}>
                            <div className='a'>
                                <div className="toack">{item.buyer_number_text}</div>
                                <div className="link">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="twoGloup">
                                    <span>{item.group_name_tag}</span> {item.medium_name}
                                </div>
                                <div className="unity">
                                    <div className="unity_left">
                                        <span className="span1">{item.jumei_price}</span>
                                        <del>{item.market_price}</del>
                                        <span className="span2">{item.single_price}</span>
                                    </div>
                                    <div className="unity_right">
                                        <span>去开团</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            ))
                        }
                        {
                            gloupApiny.map((item,index)=>(
                            <li className="item_list_li" key={index} style={{display:indexStart==9?'block':'none'}} onClick={this.handleTo.bind(
                                this,
                                item.item_id,
                                item.type
                                )}>
                            <div className='a'>
                                <div className="toack">{item.buyer_number_text}</div>
                                <div className="link">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="twoGloup">
                                    <span>{item.group_name_tag}</span> {item.medium_name}
                                </div>
                                <div className="unity">
                                    <div className="unity_left">
                                        <span className="span1">{item.jumei_price}</span>
                                        <del>{item.market_price}</del>
                                        <span className="span2">{item.single_price}</span>
                                    </div>
                                    <div className="unity_right">
                                        <span>去开团</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            ))
                        }
                        {
                            gloupApixl.map((item,index)=>(
                            <li className="item_list_li" key={index} style={{display:indexStart==10?'block':'none'}} onClick={this.handleTo.bind(
                                this,
                                item.item_id,
                                item.type
                                )}>
                            <div className='a'>
                                <div className="toack">{item.buyer_number_text}</div>
                                <div className="link">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="twoGloup">
                                    <span>{item.group_name_tag}</span> {item.medium_name}
                                </div>
                                <div className="unity">
                                    <div className="unity_left">
                                        <span className="span1">{item.jumei_price}</span>
                                        <del>{item.market_price}</del>
                                        <span className="span2">{item.single_price}</span>
                                    </div>
                                    <div className="unity_right">
                                        <span>去开团</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            ))
                        }
                        {
                            gloupApihw.map((item,index)=>(
                            <li className="item_list_li" key={index} style={{display:indexStart==11?'block':'none'}} onClick={this.handleTo.bind(
                                this,
                                item.item_id,
                                item.type
                                )}>
                            <div className='a'>
                                <div className="toack">{item.buyer_number_text}</div>
                                <div className="link">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="twoGloup">
                                    <span>{item.group_name_tag}</span> {item.medium_name}
                                </div>
                                <div className="unity">
                                    <div className="unity_left">
                                        <span className="span1">{item.jumei_price}</span>
                                        <del>{item.market_price}</del>
                                        <span className="span2">{item.single_price}</span>
                                    </div>
                                    <div className="unity_right">
                                        <span>去开团</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            ))
                        }
                        {
                            gloupApixq.map((item,index)=>(
                            <li className="item_list_li" key={index} style={{display:indexStart==12?'block':'none'}} onClick={this.handleTo.bind(
                                this,
                                item.item_id,
                                item.type
                                )}>
                            <div className='a'>
                                <div className="toack">{item.buyer_number_text}</div>
                                <div className="link">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="twoGloup">
                                    <span>{item.group_name_tag}</span> {item.medium_name}
                                </div>
                                <div className="unity">
                                    <div className="unity_left">
                                        <span className="span1">{item.jumei_price}</span>
                                        <del>{item.market_price}</del>
                                        <span className="span2">{item.single_price}</span>
                                    </div>
                                    <div className="unity_right">
                                        <span>去开团</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            ))
                        }
                    </ul>
                </div>
                </BScrollComponent>
            </GloupStyle>
        )
    }
    componentWillUpdate(newProps,newState){
        if(newState.gloupList !=this.state.gloupList){
            this.refs.bscroll.handleRestpullingUp();
            this.refs.bscroll.handlefinishPullDown();
        }
    }
    componentDidMount() {
       this.handleGloupGetData()
        if(sessionStorage.getItem("gloupList")){
            this.setState({
                gloupList:JSON.parse(sessionStorage.getItem("gloupList"))
            })
        }else{
            let {page} = this.state;
            this.handleGloupGetData(page);
        }
        this.refs.bscroll.handlepullingUp(()=>{
            let {page} = this.state;
            this.handleGloupGetData(page);
        })

        //下拉刷新
        this.refs.bscroll.handlepullingDown(()=>{
            var arr = [1,2,3,4,5,6];
            var index = parseInt(Math.random()*7);
            this.handleGloupGetData(arr[index],0,"update");
        })
    }
    async handleGloupGetData(page){
        var data = await gloupApi(page);
        let datamz=await gloupApimz();
        let datam=await gloupApim();
        let dataxb=await gloupApixb();
        let datasp=await gloupApisp();
        let datasm=await gloupApism();
        let datajju=await gloupApijju();
        let datanz=await gloupApinz();
        let databj=await gloupApibj();
        let datany=await gloupApiny();
        let dataxl=await gloupApixl();
        let datahw=await gloupApihw();
        let dataxq=await gloupApixq();
        if(data){
            this.setState({
                gloupList: [...data.data],
                gloupApimz:datamz.data,
                gloupApim:datam.data,
                gloupApixb:dataxb.data,
                gloupApisp:datasp.data,
                gloupApism:datasm.data,
                gloupApijju:datajju.data,
                gloupApinz:datanz.data,
                gloupApibj:databj.data,
                gloupApiny:datany.data,
                gloupApixl:dataxl.data,
                gloupApihw:datahw.data,
                gloupApixq:dataxq.data,
                page:++page
            })
        }else{
            this.setState({
                gloupList: [...this.state.gloupList,...data],
                page:++page
            })
        }
        sessionStorage.setItem("gloupList",JSON.stringify(this.state.gloupList))
    }
    handlerClick(index){
        this.setState({
            indexStart:index
        })
    }
    handleTo(id,type){
        this.props.history.push(
            {pathname:'/items/'+id+"/"+type}
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Gloup)