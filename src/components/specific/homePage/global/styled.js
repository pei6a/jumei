import styled from 'styled-components'
export const HomeWrapperGlobal = styled.div`
width:100%;
height:100%;
position:relative;
// top:0.88rem;
.deals-content-header{
    width:100%;
    height:0.4rem;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:0.14rem;
    img{
        width:0.15rem;
        height:0.15rem;
        margin-right:0.1rem;
    }
    span{
        height:0.19rem;
        line-height:0.19rem;
    }
}
.items>li{
    width:100%;
    height:1.24rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:0.12rem;
    border-bottom: 1px solid #eee;
    .item_left{
        width:1rem;
        height:1rem;
        img{
            width:1rem;
            height:1rem; 
        }
    }
    .item_right{
        width:2.36rem;
        height:1rem;
        margin-left:0.12rem;
        .item_title{
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
    }
}


`