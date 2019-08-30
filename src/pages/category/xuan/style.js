import styled from "styled-components"
export const FilterBox=styled.div`
    
    width:100%;
    height:100%
    .FilterHeader{
        width:100%;
        height:0.5rem;
        border-bottom: 0.02rem solid #eee;
        color: #fe4070;
        font-size:0.16rem;
        text-align: center;
        line-height:0.5rem; 
    }
    .FilterNav{
        width:100%;
        height:0.46rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 0.05rem solid #eee;
    }
    .FilterNav4{
        color: #fe4070;
    }
   

    .multi-foo-menu {
        position: absolute;
        z-index: 80 !important;
        width: 100%;
      }
      
      .multi-menu-active .multi-top-nav-bar{
        z-index: 80;
      }
      
      .multi-top-nav-bar {
        position: relative;
        background-color: #008AE6;
        color: #FFF;
      }
      .am-navbar-title {
        color: #FFF!important;
      }
      .menu-mask {
        content: ' ';
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.4;
        z-index: 79;
      }
      .am-button-primary{
        background:#ed145b;
        border-color:#ed145b
      }
      .filterName{
        height:0.5rem;
        width:100%;
        position: absolute;
        bottom: 0;
        border-top:1px solid #eee;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size:0.16rem;
      }
      .filterName>div{
        width:1.07rem;
        height:0.4rem;
        border:1px solid #fe4070;
        border-radius: 0.5rem;
        text-align: center;
        line-height: 0.4rem;
        color:#fe4070;
      }
      .filterName>div:nth-child(2){
        background:  #fe4070;
        color:#fff;
      }
      .filterName>div:nth-child(2)>a{
        color:#fff;
      }
`