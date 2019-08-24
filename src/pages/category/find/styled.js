import styled from "styled-components"
export const FindBackground=styled.div`
    position: relative;
    background:rgba(0,0,0,0.5);
    width:100%;
    height:100%;
    .findBox{
        width:84%;
        height:100%;
        background:#fff;
        position: absolute;
        // right:-1000rem
        right:0  
    }
    .SeekBox{
        width:100%;
        height:0.44rem;
        border-bottom:1px solid #ddd;
        display: flex;
        justify-content:space-around;
        align-items: center
    }
    .Seek{
        width:2.58rem;
        height:0.3rem;
        background:#ddd
    }
    .Seek>span{
        
    }
`