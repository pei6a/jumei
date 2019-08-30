import styled from "styled-components"
export const GoshopingBox=styled.div`
    width:100%;
    height:100%;
    .GoshopingHeader{
        width:100%;
        height:0.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #eee
    }
    .GoshopingHeadercenter{
        width:3rem;
        height:0.5rem;
        text-align: center;
        line-height: 0.5rem
    }
    .GoshopingCheckedBox{
        width:100%;
        height:0.4rem;
        border-bottom: 1px solid #eee
        display: flex;
        align-items: center;
    }
    .GoshopingChecked{
        width:0.2rem;
        height:0.2rem;
        border:1px solid #ddd;
        border-radius: 0.2rem;
        margin:0 0.1rem;
        color:#fff;
      
    }
    .GoshopingCheckednum{
        width:0.2rem;
        height:0.2rem;
        border:1px solid #ddd;
        border-radius: 0.2rem;
        margin:0 0.1rem;
        text-align: center;
        line-height: 0.2rem
    }
    .GoshopingContentBox{
        width:100%;
        height:1.04rem;
        border-bottom: 1px solid #eee
        display: flex;
        align-items: center;
    }
    .GoshopingImgBox{
        width:0.84rem;
        height:0.84rem;
        padding:0.05rem;
    }
    .GoshopingfilterBox{
        width:100%;
        height:0.2rem;
        display: flex;
        align-items: center;
        margin:0.1rem 0;
    }
    .GoshopingImgBox>img{
        width:100%;
        height:100%;
    }
    .GoshopingfilterBox>div:nth-child(2){
        width:0.3rem;
        height:0.2rem;
        text-align: center;
        line-height: 0.2rem

    }
    .GoshopingCheckedPrice{
        font-size:0.16rem;
        color: #fe4070;
    }
    .GoshopingFooter{
        width:100%;
        height:0.5rem;
        border-top:1px solid #ddd;
        position: absolute ;
        bottom:0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .GoshopingFootercheck{
        display: flex;
        align-items: center;
    }
    .GoshopingFootercolor{
        color: #fe4070;
        font-size:0.16rem;
    }
    .GoshopingFootersubmit{
        width:1.25rem;
        height:0.36rem;
        color:#fff;
        background:#fe4070;
        text-align: center;
        line-height: 0.36rem;
        border-radius: 0.2rem;
    }
`