import styled from 'styled-components'
export const ShopStyleWrapper = styled.div`
width:100%;
.shop_head{
    width:100%;
    height:1.11rem;  
    background: url('http://mp5.jmstatic.com/pop_store/000/003/3741_std/5b602c3ca8a52_1024_304.jpg?imageView2/2/q/75/1533029501') center;
    background-size: cover;
}
.shop_sign{
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    height:1.11rem;
    padding:0.28rem 0.17rem 0;
    background: rgba(0,0,0,.6);
    color:#fff;
    img{
        width:0.5rem;
        height:0.5rem;
    }
    .collect{
        width:0.75rem;
        height:0.25rem;
        color: #fff;
        background: #fe4070;
        font-size: .14rem;
        line-height:0.25rem;
        border-radius:0.2rem;
        text-align: center;
    }
}
.navs{
    width:100%;
    height:0.52rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    background: #fff;
    border-bottom: .01rem solid #eee;
    li{
        width:25%;
        height:100%;
        line-height:0.52rem;
        text-align:center;
    }
    .active{
        color: #fe4070;
    }
    .selectbtn{
        background: #fafafa;
    }
}
.goodsItems,.goodsItem{

    background:#eee;
    overflow:hidden
}


.goodsItem>li{
    float:left;
    width:47.55%;
    height:3.42rem;
    background:#fff;
    margin:0.04rem;
    img{
        width:1.7rem;
        height:2.4rem;
    }
    .title{
        font-size: 0.14rem;
        line-height: 0.18rem;
        height: 0.36rem;
        margin-bottom:0.3rem;
    }
    .price{
        
        line-height: 0.2rem;
        span:nth-child(1){
            color: #fe4070;
            font-size: 0.18rem;
        }
        span:nth-child(2){
            color: #999;
            font-size: 0.14rem;
        }    
    }
    .comment{
        color:#999  
    }
}

`