import styled from 'styled-components'
export const SearchWrapper=styled.div`
width:100%;
height:100%;
color:#999;
font-size:0.14rem;
.search_head{
    width:100%;
    height:0.44rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    &>img{
        width:0.075rem;
        height:0.14rem;
    }
    .searchMiddle{
        display:flex;
        align-items:center;
        height:0.3rem;
        width:2.5rem;
        padding:0 0.2rem;
        border-radius:0.2rem;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05) inset;
        background: #F5F5F5;
        &>img{
            width:0.15rem;
            height:0.15rem;   
            padding-right:0.02rem;
        }
        input{
            height:100%;
            border:none;
            background: #F5F5F5;
            outline:none;
        }
    }
}
li{
    width:100%;
    height:0.44rem;
    color:#333;
    padding:0 0.33rem;
    border-bottom:1px solid #eee;
    a{    
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        height:100%;
    }
    .sBtn{
        width:0.15rem;
        height:0.15rem;    
    }
    .leftArrow{
        width:0.08rem;
        height:0.08rem;
        transform:rotate(-90deg)
    }
    span{
        width:80%
        display:block;
    }
}
`