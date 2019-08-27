import styled from 'styled-components'
export const HomeWrapperThree = styled.div`
width:100%;
height:100%;
position:relative;
top:0.44rem;
.home_title{
    width：100%；
    height:0.44rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    color:#666;
    font-size:0.14rem;
    span{
        display:block;
        height:0.44rem;
        line-height:0.44rem;
    }
    .active{
        color: #fe4070;
    }
}
.homeItems{
    width:100%;
    height:90%;
    .item_nowOne>li{
        position:relative;
        width:100%;
        height:1.3rem;
        a{
            display:block;
            width:100%;
            height:1.3rem;            
        }
        .item_left{
            width:100%;
            height:1.3rem;
            img{
                width:100%
                height:1.3rem;
            }
        }
        .item_right{
            position:absolute;
            top:0rem;
            right:0.2rem;
            width:2.03rem;
            .item_title{
                margin-top:0.12rem;
                color: #333;
                font-size: 0.14rem;
                line-height: 0.17rem;
            }
            .item_price{
                margin-top:0.3rem;
                width:0.74rem;
                height:0.24rem;
                color:#fe4070;
                b{
                    font-size: 0.2rem;
                    font-weight:normal;
                }
                span{
                    padding-left:0.05rem;
                    color:#999;
                    text-decoration:line-through
                }
            }
            .item_comment{
                color:#999;
            }
        }
        }
    }
    .item_nowTwo>li{
        width:100%
        height:1.3rem;
        img{
            width:100%
            height:1.3rem; 
        }
    }
    .item_pre>li{
        width:100%
        height:1.3rem;
        img{
            width:100%
            height:1.3rem; 
        }
    }
}
`