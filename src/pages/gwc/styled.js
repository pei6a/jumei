import styled from "styled-components";
export const GwcStyle=styled.div`
    height:100%;
    width:100%;
    background:#f5f5f5;
    color:#333;
    .tit{
        height:0.42rem;
        width:100%;
        padding-right:0.16rem;
        padding-left:0.16rem;
        display:flex;
        font-size:0.16rem;
        background:#fff;
        border-bottom: 1px solid #eee;
        justify-content:space-between;
        align-items:center;
        i{
            height:0.18rem;
            width:0.14rem;
            font-size:0.2rem;
        }
        img{
            height:0.18rem;
            width:0.18rem;
        }
    }
    .select{
        width:100%;
        overflow-y:auto;
        bottom:1rem;
        position:absolute;
        top:0.42rem;
        .goods{
            margin-top:0.05rem;
            height:1.04rem;
            width:100%;
            padding:0 0.12rem 0 0.08rem;
            display:flex;
            justify-content:space-between;
            background:#fff;
            input{
                margin-top:0.45rem;
            }
            .goods_item{
                height:100%;
                width:3.35rem;
                .goods_items{
                    margin-left:0.08rem;
                    padding-bottom:0.1rem;
                    img{
                        height:0.84rem;
                        width:0.84rem;
                        float:left;
                    }
                    .items{
                        height:0.86rem;
                        width:2.33rem;
                        margin-top:0.08rem;
                        margin-left:0.1rem;
                        float:right;
                        span{
                            font-size:0.12rem;
                            span{
                                color:#fe4070;
                            }
                        }
                        .ml{
                            height:0.12rem;
                            width:100%;
                            display:flex;
                            justify-content:space-between;
                            img{
                                height:0.12rem;
                                width:0.12rem;
                            }
                        }
                        .bianji{
                            height:0.22rem;
                            width:100%;
                            margin-top:0.1rem;
                            display:flex;
                            justify-content:space-between;
                            span:nth-child(1){
                                color:#fe4070;
                            }
                        }
                    }
                }
            }
        }
    }
    .jiesuan{
        height:0.5rem;
        width:100%;
        bottom:0.5rem;
        position:absolute;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background:#fff;
        .left{
            width:1.4rem;
            height:0.2rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            p{
                color: #999;
                font-size:0.12rem;
                span{
                    color:#fe4070;
                }
            }
        }
        .right{
            height:0.36rem;
            width:1.25rem;
            line-height:0.36rem;
            text-align:center;
            background:#fe4070;
            color: #fff;
            border-radius:0.6rem;
        }
    }
`