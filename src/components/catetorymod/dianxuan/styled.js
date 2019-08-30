import styled from "styled-components"
export const DianFilterBox=styled.div`
    width:100%;
    position: absolute;
    top:1.87rem;
    display: flex;
    bottom:0.5rem;
    .DianFilterBoxLeft{
        width:0.82rem;
        // height:0.5rem;
        height:100%
        background:#f5f5f9;
        border-right:1px solid #ddd
    }
    .DianFilterLeft,.DianFilterRight{
        width:100%;
        height:0.5rem;
        line-height:0.5rem ;
        text-align: center;
        border-bottom:1px solid #ddd
    }
    .DianFilterLeftbg{
        background:#fff
    }
    .DianFilterBoxRight{
        width:2.92rem;
        height:100%;
        position: absolute;
        right:0;
    }
    .DianFilterLeftcon{
        width:100%;
        height:0.5rem;
        line-height:0.5rem ;
        border-bottom:1px solid #ddd;
        padding-left:0.1rem;
    }
    .DianFilterRightulshow{
        width: 100%;
        height:4.3rem;
        overflow-y: auto    
    }    
    .DianFilterRightul{
        display:none
    }
    .DianFilterRightulcolor{
        margin-left:0.5rem;
        color:#fe4070
    }
`