import styled from "styled-components"
export const FindIdBox=styled.div`
    width:100%;
    height:100%;
    position: relative;
    .FindIdBottom{
        position: absolute;
        bottom:0;
        height:0.5rem;
        width:100%;
        border-top: 1px solid #eee;
        display:flex;
        justify-content:space-around;
        align-items: center
    }
    .FindIdBottom_left{
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        color: #979797;
        width:0.57rem;
        height:0.5rem;
        border-right:1px solid #ddd;
    }
    .FindIdBottom_right{
        width:1.27rem;
        height:0.5rem;
        background:red;
        line-height: 0.5rem;
        text-align: center;
        font-size:0.16rem;
        font-weight: bold;
        background:#ffcfdf
        color:#ff5593;

    }
    .FindIdBottom_rightColor{
        background:#fe4070
        color:#FFF;
    }
    
`