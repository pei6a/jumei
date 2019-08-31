import styled from 'styled-components';
export const StoreStyle=styled.div`
    height:100%;
    width:100%;
    background: #f7f7f7;
    .store{
        overflow-y:auto;
        width:100%;
        position:absolute;
        top:0;
        bottom:0;
        .title{
            width:100%;
            height:1.12rem;
            background:pink;
            transform-origin: 0px 0px;
            opacity: 1;
            color:#fff;
            background: url(http://mp5.jmstatic.com/pop_store/000/008/8394_std/5d43d87bcce7a_1024_304.jpg?imageView2/2/q/75/1564727442) left top / 100% no-repeat;
            .store_d{
                width:100%;
                height:100%;
                padding:0.28rem 0.18rem 0 0.18rem;
                background: rgba(0,0,0,.6);
                .left{
                    width:2.6rem;
                    height:0.6rem;
                    float:left;
                    display:flex;
                    img{
                        width:0.6rem;
                        height:0.6rem;
                        border-radius:50%;
                        margin-right:0.12rem;
                    }
                    span{
                        margin-top:0.12rem;
                        font-weight:800;
                        font-size:0.16rem;
                    }
                }
                .shou{
                    height:0.26rem;
                    width:0.75rem;
                    background: #fe4070;
                    text-align: center;
                    border-radius:0.25rem;
                    margin-top:0.12rem;
                    line-height:0.26rem;
                    float:left;
                    font-size:0.12rem;
                }
                .pop{
                    font-size:0.12rem;
                    opacity: 1;
                    height:0.16rem;
                    margin-top:0.5rem;
                }
            }
        }
        .nav{
            height:0.46rem;
            width:100%;
            background: #fff;
            border-bottom:1px solid #e0e0e0;
            border-top:1px solid #e0e0e0;
            padding-right:0.16rem;
            padding-left:0.16rem;
            color: #333;
            ul{
                height:100%;
                width:100%;
                display:flex;
                justify-content:space-between;
                align-items:center;
                li{
                    height:100%;
                    display:flex;
                    width:100%;
                    text-align:center;
                    line-height:0.46rem;
                    i:nth-child(1){
                        margin-top:0.16rem;
                        margin-left:0.1rem;
                        height:0;
                        width:0;
                        display:block;
                        font-size: 0;
                        border-bottom:5px solid #ccc;
                        border-right:5px solid transparent;
                        border-left:5px solid transparent;
                    }
                    i:nth-child(2){
                        margin-top:0.26rem;
                        margin-left:-0.1rem;
                        height:0;
                        width:0;
                        display:block;
                        font-size: 0;
                        border-top:5px solid #ccc;
                        border-right:5px solid transparent;
                        border-left:5px solid transparent;
                    }
                }
            }
        }
        .items{
            width:100%;
            padding-right:0.05rem;
            padding-left:0.05rem;
            ul{
                width:100%;
                display:flex;
                justify-content:space-between;
                flex-wrap:wrap;
                li{
                    height:2.66rem;
                    width:1.8rem;
                    background:#fff;
                    margin-bottom:0.05rem;
                    .imgage{
                        height:1.62rem;
                        width:1.66rem;
                        margin: 0 0.9rem 0.04rem 0.09rem;
                        padding-top:0.09rem;
                        img{
                            height:100%;
                            width:100%;
                        }
                    }
                    .jieshao{
                        height:0.36rem;
                        width:100%;
                        padding-right:0.1rem;
                        padding-left:0.1rem;
                    }
                    .text{
                        height:0.2rem;
                        width:100%;
                        padding:0.04rem 0.09rem;
                        color: #999;
                    }
                    .price{
                        height:0.2rem;
                        width:100%;
                        padding:0 0.09rem;
                        span:nth-child(1){
                            margin-right:0.05rem;
                            color: #fe4070;
                            font-size:0.18rem;
                        }
                        span:nth-child(2){
                            text-decoration: line-through;
                            color: #999;
                        }
                    }
                }
            }
        }
    }
`