import styled from 'styled-components'
export const DetailTabbarWrapper=styled.div`
width:100%;
height:0.44rem;
position:absolute;
display:flex;
bottom:0;
.shop{
    border-right: 1px solid #eee;
}
.shop,.cart{
    width:18%;
    height:0.44rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color: #979797;
    border-top:1px solid #eee;
}
.addToCart,.buyNow{
    width:32%;
    height:0.44rem;
    text-align:center;
    line-height:0.44rem;
    font-size:0.14rem;
}
.addToCart{
    background: linear-gradient(210deg, #ffcfdf 0%, #fff1f6 98%);
    color: #fe4070;
}
.buyNow{
    background: linear-gradient(142deg, #ff5593 0%, #fe4070 100%);
    color: #fff;
}
`