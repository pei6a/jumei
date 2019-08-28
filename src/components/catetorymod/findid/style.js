import styled from "styled-components"
export const FindIdContentstyle=styled.div`
    width:100%;
    height:100%;
    position: absolute;
    bottom:0.5rem;
    overflow-y: auto;
    .findidHeader{
        width:100%;
        height:1rem;
        background:url(//images.jumei.com/mobile/icon/bg_01.png) ;
        background-size:100%,0.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top:0.5rem
    }
    .findidHeaderleft{
        width:0.4rem;
        height:0.4rem;
        background: #FE4478;
        border-radius: 0.06rem;
        color:#fff;
        text-align:center;
        line-height:0.4rem;
        font-size:0.16rem;
    }
    .findidHeadercenter{
        font-weight: bold
    }
    .findidHeaderright{
        width: 0.84rem;
        height: 0.30rem;
        line-height: 0.30rem;
        text-align: center;
        color: #fff;
        border-radius: 0.20rem;
        background: #FE4478;
        font-size:0.12rem;
    }
    .findidHeaderNav{
        width:100%;
        height:0.4rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #eee;
        color: #333
    }
    .findidHeaderNavceter{
        width:80%;
        height:0.4rem;
        line-height: 0.4rem;
        text-align: center;
    }

    //内容
    .findidHeaderCenterimg,.findidHeaderCenterimg>img{
        width:100%;
        height:3.75rem;
    }
    .findidHeaderCenterPrice{
        width:100%;
        height:0.58rem;
        line-height: 0.58rem;
        padding:0 0.1rem;
        color: #666666;
    }
    .findidHeaderCenterPriceleft{
        float: left;
    }
    .findidHeaderCenterPriceleft>span{
        color: #F33873;
        font-size:0.2rem;
        padding-right:0.1rem;
    }
    .findidHeaderCenterPriceleft>i{
        padding-left:0.1rem;
        font-style: normal;
        font-size:0.14rem;

    }
    .findidHeaderCenterPriceright{
        float: right;
    }

    .findidHeaderCentername{
        width:100%;
        height:0.47rem;
        padding:0.1rem;
    }
    .findidHeaderCenternamespan{
        margin-right: 0.04rem;
        font-size: 0.10rem;
        padding: 0.01rem 0.04rem;
        background: #fe4070;
        color: #fff;
        border-radius: 0.04rem;
    }
    .findidHeaderCenterfright,.findidHeaderCenterstate{
        width:100%;
        height:0.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #eee;
        color:#333;
        padding:0.1rem;
    }
    .findidHeaderCenterfright_type{
        width:0.5rem;
        color: #999;
    }
    .findidHeaderCenterfright_p{
        width:2.6rem;
    }
    .findidHeaderCenterstate{
        height:0.65rem;
    }
    .findidHeaderCenterstate_p{
        width:2.4rem;
    }
    .findidHeaderCenterstate_p>span{
        padding:0.1rem;
    }
    // 进入店铺
    .findidHeaderCenterEnterBox{
        width:100%;
        height:1.2rem;
        padding:0.1rem;
        border-top:0.1rem solid #ddd;
        border-bottom:0.1rem solid #ddd;

    }
    .findidHeaderCentertop{
        width:100%;
        height:0.44rem;
        display: flex;
    }
    .findidHeaderCentertop>img{
        width:0.42rem;
        height:0.42rem;
    }
    .findidHeaderCentertop_p{
        color: #999;
        font-size: 12px;
    }
    .findidHeaderCentertop_jimei{
        font-size: 10px;
        color: #fff;
        padding: 0.01rem 0.04rem;
        background: #FE4070;
        color: #FFF;
        border-radius: 0.04rem;
        margin-left: 0.1rem;
        width:0.56rem;
        height:0.18rem;
        line-height: 0.18rem;
    }
    .findidHeaderCenterbottom{
        width:1.5rem;
        height:0.4rem;
        border-radius: 0.2rem;
        line-height: 0.4rem;
        border: 1px solid #ddd;
        text-align: center;
        color: #666;
        font-size:0.16rem;
        margin-left:1rem;
    }
    .findidHeaderCenterEntertu,.findidHeaderCenterEntertu>img{
        width:100%;
        height:1rem;
    }
`