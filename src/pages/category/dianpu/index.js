import React,{Component} from "react";
import {DianpuBox} from "./styled"
import Dianpucontent from "../../../components/catetorymod/findDianpu"
export default class Dinapu extends Component{
    render(){
        return(
            <DianpuBox>
                <div className="dianpubackground">
                    <div className="dianpubackgroundcenter">
                        <div className="dianpubackgroundimg">
                            <img src="http://mp5.jmstatic.com/pop_store/000/003/3147_std/57ac228b0e52a_320_320.jpg?imageView2/2/q/75/1486088093" alt=""/>
                        </div>
                        <div>AHC极速免税店</div>
                        <div  className="dianpubackgroundspan">
                            <div>收藏</div>
                            <p>26.7万人已收藏</p>
                        </div>
                    </div>
                    <div className="dianpuheader">全部商品</div>
                    <Dianpucontent/>
                </div>
            </DianpuBox>
        )
    }
    
}