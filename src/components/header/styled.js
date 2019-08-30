import styled from 'styled-components'
export const HeadWrapper = styled.div`
    width:100%;
    height:0.44rem;
    // position:absolute;
    // top:0;
    line-height:0.44rem;
    font-size:0.14rem;
    display:flex;
    color:#333;
    
    align-items:center;
    justify-content:space-between;
    padding:0 0.15rem;
    border-bottom:1px solid #F5F5F5;
    span:first-child{
        color:#ccc;
        font-size:0.14rem;
    }
    span:last-child{
        display:block;
        width: 0.2rem;
        height: 0.2rem;
        background: url(http://a5.jmstatic.com/cf4cd6f2fe742a74/home.png) center center no-repeat;
        background-size: contain;
    }
    div{
        overflow:hidden;
        height:100%;
        padding:0 0.25rem;
        
    }
` 