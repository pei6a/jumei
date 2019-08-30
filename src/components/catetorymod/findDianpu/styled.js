import styled from "styled-components"
export const Dianpucon=styled.div`
    width:100%;
    height:100%;
    position: absolute;
    .dianpunavBox{
        width:100%;
        height:0.46rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 0.02rem solid #eee
    }
    .dianpunContentBox{
        width:100%;
        height:10rem;
        border-left:0.05rem solid #eee
    }
    .dianpunContentBox>a{
        display:block;
        width:1.85rem;
        height:2.62rem;
        float: left;
    }
    .dianpunContent{
        width:1.85rem;
        height:2.62rem;
        padding:0 0.08rem;
        color: #999;
        font-size: 0.12rem;
        border-right:0.05rem solid #eee
        border-bottom:0.05rem solid #eee
        float: left;
    }
    .dianpunContentimg{
        width:1.62rem;
        height:1.57rem;
    }
    .dianpunContentimg>img{
        width:100%;
        height:100%;
    }
    .dianpunContentname{
        width:100%;
        height:0.36rem;
        color: #333;
        overflow:hidden;
        font-size: 0.14rem;
    }
    .dianpunContentname>span{
        font-size: 0.12rem;
        padding: 0 0.02rem;
        line-height: 0.14rem;
        width:0.28rem;
        height: 0.14rem;
        border-radius: 0.02rem;
        color: #fff;
        background: #fe4070;
        margin-right: .125rem;
    }
    .dianpunContenttext{
        width:100%;
        height:0.2rem;
        color: #999;
        font-size: 0.12rem;
        padding: 0.04rem 0.09rem;
        overflow: hidden;
    }
    .dianpunContenttext>span{
        margin-right:0.1rem;
    }
    .dianpunContentprice{
        width:100%;
        height:0.2rem;
        color: #999;
        font-size: 0.14rem;
        overflow: hidden;
        margin-bottom:0.05rem;
    }
    .dianpunContentprice>span{
        font-size: 18px;
        color: #fe4070;
    }

`