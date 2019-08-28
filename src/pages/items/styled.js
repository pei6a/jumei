import styled from "styled-components";
export const ItemsStyle=styled.div`
    height:100%;
    width:100%;
    background:#f5f5f5
    .items{
        width:100%;
        top:0;
        bottom:0.56rem;
        position:absolute;
        overflow-y:auto;
        .title{
            height:0.7rem;
            width:100%;
            
            position: relative;
            top:0;
            
            img{
                height:0.5rem;
                width:0.5rem;
                margin:0.1rem 0.12rem 0 0.12rem;
                float:left;
            }
            .lays{
                height:0.3rem;
                width:1.74rem;
                color: #333;
                white-space: nowrap;
                float:left;
                p{
                    margin-top:0.15rem;
                    font-size:0.16rem;
                }
            }
            a{
                height:0.4rem;
                width:0.98rem;
                background: #fe4070;
                border-radius:0.9rem;
                font-size:0.14rem;
                display:block;
                float:left;
                text-align:center;
                line-height:0.4rem;
                color: #fff;
                border: none;
                margin-top:0.15rem;
            }
            .error{
                height:0.16rem;
                width:0.16rem;
                margin-top:0.05rem;
                position: absolute;
                right:0.3rem;
                img{
                    width:0.16rem;
                    height:0.16rem;
                    margin-top:0.05rem;
                }
            }
        }
        .section{
            width:100%;
            height:4.84rem;
            background:#fff;
            .section_img{
                width:100%;
                height:3.75rem;
                position: relative;
                a{
                    height:100%;
                    width:100%;
                    img{
                        height:100%;
                        width:100%;
                        display:block;
                    }
                }
            }
            .section_price{
                height:1.1rem;
                width:100%;
                padding:0.1rem 0.12rem 0.12rem;
                .price{
                    height:0.45rem;
                    
                    margin-left:0.02rem;
                    float:left;
                    color: #f33873;
                    b{
                        font-size:0.24rem;
                        font-weight: 400;
                    }
                    strong{
                        width:0.28rem;
                        height:0.15rem;
                        font-size:0.12rem;
                        background: #fe4070;
                        color: #fff;
                        margin-top:-0.05rem;
                        margin-left:0.02rem;
                        padding:0.02rem;
                        border-radius:0.02rem;
                    }
                }
                .buys{
                    height:0.4rem;
                    
                    float:left;
                    margin-left:0.06rem;
                    color: #666;
                    font-size:0.14rem;
                    text-align:center;
                    line-height:0.44rem;
                }
                .join{
                    height:0.4rem;
                    width:1.2rem;
                    margin-top:0.04rem;
                    line-height:0.4rem;
                    float:right;
                    color: #666;
                    font-size:0.14rem;
                }
                .oldPrice{
                    height:0.14rem;
                    width:100%;
                    margin-top:0.45rem;
                }
                .last{
                    height:0.18rem;
                    width:100%;
                    margin-top:0.1rem;
                    span:nth-child(1){
                        height:100%;
                        width:0.83rem;
                        float:left;
                        color: #666;
                        background: #fff;
                        text-align: center;
                    }
                    span:nth-child(2){
                        height:100%;
                        width:1.2rem;
                        float:right;
                        background: #fe4070;
                        color: #fff;
                        font-size:0.12rem;
                        padding:0 0.05rem 0 0.08rem;
                        border-radius:9px 0 0 9px;
                        line-height:0.18rem;
                        font-family: PingFangSC-Regular;
                    }
                }
            }
        }
        .goods{
                height:0.44rem;
                width:100%;
                padding:0.12rem;
                margin:0.1rem 0;
                background:#fff;
                .good{
                    height:100%;
                    width:100%;
                    text-align:center;
                    overflow: hidden;
                    span{
                        color:#fe4070;
                        margin-left:0.01rem;
                        display: inline-block;
                    }
                }
            }
        .address{
            height:0.42rem;
            width:100%;
            overflow: hidden;
            background: #fff;
            color: #333;
            position: relative;
            padding:0.1rem;
            margin:0.1rem 0;
            display:flex;
            justify-content:space-between;
            strong{
                height:100%;
                width:0.58rem;
                font-weight:400;
            }
            .to{
                height:100%;
                width:2.7rem;
                overflow: hidden;
            }
            .from{
                height:100%;
                width:0.1rem;
                font-size:0.2rem;
                color:#999;
                line-height:0.26rem;
            }
        }
        .play{
            height:1rem;
            width:100%;
            background:#fff;
            margin:0.1rem 0;
            .top{
                height:0.4rem;
                width:100%;
                padding:0.13rem 0.12rem;
                display:flex;
                justify-content:space-between;
                font-size:0.12rem;
            }
            .bottom{
                height:0.62rem;
                width:100%;
                padding:0.13rem 0.12rem;
                display:flex;
                justify-content:space-between;
                text-align:center;
                div:nth-child(1){
                    color:#fe4070;
                }
                span{
                    height:0.36rem;
                    line-height:0.36rem;
                    font-size:0.3rem;
                    color:#999;
                }
            }
        }
        .fuwu{
            height:1.12rem;
            width:100%;
            background:#fff;
            margin:0.1rem 0;
            .jm_fuwu{
                width:3.28rem;
                height:0.76rem;
                padding:0.13rem 0.12rem;
                .image{
                    height:0.5rem;
                    width:0.5rem;
                    float:left;
                    img{
                        height:100%;
                        width:100%;
                    }
                }
                .gzh{
                    height:0.36rem;
                    width:2.44rem;
                    float:left;
                    margin-top:0.1rem;
                    margin-left:0.1rem;
                    font-size:0.12rem;
                    color:#333;
                    .ju_gzh{
                        height:0.2rem;
                        width:2.34rem;
                        margin-bottom:0.05rem;
                    }
                    .ju_tj{
                        color:#999;
                    }
                }

            }
            .guanzhu{
                height:0.35rem;
                width:2.82rem;
                padding:0.08rem 0.1rem;
                display:flex;
                justify-content:space-between;
                color:#999;
                div:nth-child(1){
                    background:#fe4070;
                    text-align: center;
                    color: #fff;
                    border-radius:0.2rem;
                    font-size:0.12rem;
                }
            }
        }
        .freeIcon{
            height:1.06rem;
            width:100%;
            padding:0.15rem 0;
            background:#fff;
            margin:0.1rem 0;
            ul{
                height:100%;
                width:100%;
                display:flex;
                justify-content:space-between;
                li{
                    height:0.64rem;
                    width:0.9rem;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }
            }
        }
        .dianpu{
            height:0.82rem;
            width:100%;
            margin:0.1rem 0;
            background:#fff;
            .imgs{
                height:0.6rem;
                width:0.6rem;
                margin:0.12rem;
                line-height:0.6rem;
                float: left;
                img{
                    height:100%;
                    width:100%;
                    border:1px solid #efefef;
                    border-radius: 50%;
                }
            }
            .qijiandian{
                height:0.6rem;
                width:2.46rem;
                float:left;
                margin-top:0.2rem;
                .xiao{
                    height:0.36rem;
                    width:100%;
                    display:flex;
                    justify-content:space-between;
                    span:nth-child(1){
                        color: #333;
                    }
                    span:nth-child(2){
                        color:#fff;
                        width:0.6rem;
                        background:#fe4070;
                        border-radius:0.04rem;
                        height:0.14rem;
                        font-size:0.12rem;
                        text-align:center;
                        line-height:0.15rem;
                    }
                    span:nth-child(3){
                        width:0.6rem;
                        color:#fff;
                        background:#fe4070;
                        border-radius:0.04rem;
                        height:0.14rem;
                        font-size:0.12rem;
                        text-align:center;
                        line-height:0.15rem;
                    }
                }
            }
            .pic{
                float:right;
                margin-top:0.24rem;
                margin-right:0.1rem;
            }
        }
    }
    .foot{
            height:0.56rem;
            bottom:0;
            width:100%;
            background:#fff;
            position:absolute;
            padding:0.1rem 0;
            .footer{
                height:100%;
                width:100%;
                padding:0 0.08rem;
                display:flex;
                color: #666;
                justify-content:space-between;
                .home{
                    height:100%;
                    width:0.38rem;
                    font-size:0.1rem;
                    border:1px solid #e0e0e0;
                    border-radius:50%;
                    h3{
                        height:0.36rem;
                        width:100%;
                        line-height:0.36rem;
                        padding-left:0.05rem;
                        a{
                            color: #999;
                        }
                    }
                }
                .only{
                    height:100%;
                    display:flex;
                    align-items:center;
                    flex-direction:column;
                    color: #666;
                    line-height:0.36rem;
                }
                .every{
                    height:100%;
                    width:1.52rem;
                    background:#fe4070;
                    display:flex;
                    align-items:center;
                    flex-direction:column;
                    border:1px solid #fe4070;
                    color: #fff;
                    border-radius:0.8rem;
                    font-size:0.12rem;
                    line-height:0.36rem
                    a{
                        height:100%;
                        width:100%;
                        display:flex;
                        align-items:center;
                        flex-direction:column;
                        color: #fff;
                    }
                }
            }
        }
`