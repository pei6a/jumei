import styled from "styled-components"
export const DianpuBox=styled.div`
    width:100%;
    height:100%;
    position: absolute;
    overflow-y: auto
    .dianpubackground{
        width:100%;
        height:1.11rem;
        background:url(http://mp5.jmstatic.com/pop_store/000/003/3147_std/57ac228575beb_1024_304.jpg?imageView2/2/q/75/1486088093) ;
        background-size:100% 1.11rem;
    }
    .dianpubackgroundcenter{
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.6);
        color:#fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size:0.16rem;
        font-weight: bold
    }
    .dianpubackgroundimg{
        width:0.58rem;
        height:0.58rem;
        border-radius: 0.58rem;
        overflow:hidden;
    }
    .dianpubackgroundimg>img{
        width:100%;
        height:100%;
    }
    .dianpubackgroundspan{
        font-size:0.14rem;
        font-weight: normal
    }
    .dianpubackgroundspan>div{
        width:0.75rem;
        height:0.25rem;
        background: #fe4070;
        border-radius: 0.25rem;
        text-align: center;
        line-height: 0.23rem;
        margin-bottom:0.1rem;
    }
    .dianpubackgroundspan>p{
        font-size:0.12rem;
    }
    .dianpuheader{
        width:100%;
        height:0.5rem;
        border-bottom: 0.02rem solid #eee;
        color: #fe4070;
        text-align: center;
        line-height: 0.5rem;

    }
   
`