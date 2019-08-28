import styled from "styled-components";
export const GloupStyle=styled.div`
    height:100%;
    width:100%;
    margin:0;
    padding-bottom:0.5rem;
    .title{
        height:0.7rem;
        width:100%;
        background: url(//images.jumei.com/mobile/icon/bg_01.png);
        position:relative;
        top:0;
        z-index:1;
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
    .scoll{
        height:0.44rem;
        width:100%;
        overflow-x:scroll;
        border-bottom:0.02rem solid #eee;
        left:0;
        position: relative;
        background:#fff;
        top:0;
        z-index:1;
        .scoll_list{
            height:100%;
            width:10.8rem;
            display:flexd;
            margin-left:0.2rem;
            justify-content:space-between;
            align-items:center;
            li{
                height:100%;
                display:flexd;
                align-items:center;
                a{
                    height:100%;
                    width:100%;
                    display:flexd;
                    align-items:center;
                }
            }
        }
    }
    .item{
        width:100%;
       margin-top:0.43rem;
        pidding:0;
        .item_url{
            height:100%;
            width:100%;
            .item_list_li{
                width:100%;
                height:2.43rem;
                margin-bottom:0.08rem;
                background: #fff;
                .a{
                    width: 100%;
                    height:100%;
                    display: block;
                    overflow: hidden;
                    position: relative;
                    .toack{
                        height::0.25rem;
                        width:0.85rem;
                        position: absolute;
                        border:1px solid #eee;
                        font-size:0.12rem;
                        background:rgba(251,251,251,8);
                        left: 0;
                        top:1.1rem;
                        border-top-right-radius:0.8rem;
                        border-bottom-right-radius:0.8rem;
                        color: #666;
                        padding:0.04rem 0.07rem;
                    }
                    .link{
                        height:1.55rem;
                        width:100%;
                        img{
                            height:1.5rem;
                            width:1.5rem;
                            margin:auto;
                        }
                    }
                    .twoGloup{
                        width:100%;
                        height:0.18rem;
                        padding:0 0.12rem;
                        color: #424242;
                        overflow: hidden;
                        margin-top:0.1rem;
                        font-size:0.14rem;
                        span{
                            color: #fe4070;
                            margin-left:0.02rem;
                        }
                    }
                    .unity{
                        height:0.6rem;
                        width:100%;
                        padding:0.12rem 0.12rem;
                        .unity_left{
                            height:100%;
                            width:0.76rem;
                            float:left;
                            .span1{
                                color:#fe4070;
                                font-size:0.18rem;
                                margin:auto;
                            }
                            del{
                                color: #999;
                                font-size:0.12rem;
                                padding-left:0.04rem;
                            }
                            .span2{
                                color: #999;
                                display: block;
                                font-size:0.11rem;
                                margin:0;
                                padding:0;
                            }
                        }
                        .unity_right{
                            float:right;
                            border:1px solid #fe4070;
                            border-radius:0.25rem;
                            margin-top:0.05rem;
                            background: #fe4070;
                            height:0.28rem;
                            width:0.9rem;
                            text-align:center;
                            line-height:0.28rem;
                            color:#fff;
                        }
                    }
                }
            }
        }
    }
`