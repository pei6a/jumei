import styled from "styled-components"
  export const FindAccordion=styled.div`
    width:100%;
    height:100%;
    position: absolute;
    overflow-y: auto;
    top:0.44rem;
    .Accordionul{
        width:100%;
    }
    .Accordionli{
        width:100%;
         border-bottom: solid 1px #eee;
         line-height: 0.44rem;
         padding-left:0.15rem;
         color: #666;
    }
    .Accordionlidiv{
        width:100%;
        height:0.44rem;
        line-height: 0.44rem;
        border-bottom: solid 1px #eee;
    }
    .AccordionliSpanfirst{
        color:#fe4070
    }
    .Accordionlispan{
        position: absolute;
        right:0.2rem;
    }
    .Accordionulchildnone{
        display:none
    }
    .Accordionulchild{
        display:block;
    }
    .Accordionlichild{
        width:100%;
         height:0.44rem;
        background: #f5f5f5;
        border-bottom: solid 1px #fff;
        line-height: 0.44rem;
        text-indent: 30px;
    }
  `