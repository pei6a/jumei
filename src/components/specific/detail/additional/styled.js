import styled from 'styled-components'
export const DetailWrapStyle = styled.div`
color: #333;
font: 12px PingFangSC-Regular;
background: #fff;
width:100%;
position:relative;
top:0.44rem;
.price_info{
    width: 100%;
    color: #F33873;
    height: 0.28rem;
    padding:0 0.2rem;
    .cur_price{
        float: left;
        font-size: 0.28rem;
        line-height: 0.28rem;
    }
    .cost_price{
        float: left;
        margin-left: 0.1rem;
        color: #666666;
        font-size: 0.13rem;
        padding-top: 0.06rem;
        text-decoration: line-through;
    }
    strong{
        float: right;
        text-align: right;
        font-weight: 400;
        color: #666;
        font-size: 0.13rem;
        line-height: 0.28rem;
        
    }
}
.count_down{
    width: 50%;
    text-align: left;
    color: #666666;
    font-size: 0.13rem;
    margin:0.12rem;
}
.normal_desc{
    font-size: 0.14rem;
    height:0.23rem;
    padding:0.1rem 0.12rem;
}
`