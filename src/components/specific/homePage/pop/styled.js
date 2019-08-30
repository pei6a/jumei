import styled from 'styled-components'
export const HomeWrapperPop = styled.div`
width:100%;
height:100%;
position:relative;
// top:0.88rem;
a{
    width:100%;
    height:2.45rem;
    position:relative;
    .pop_image{
        width:100%;
        height:1.87rem;
        img{
            height:1.87rem;    
        }
        .discount{
            position:absolute;
            bottom:0.74rem;
            color: #fff;
            background:#000;
            width:1.2rem;
        }      
    }
    .pop_information{
        width:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        margin-bottom:0.1rem;
        .left_info{
            height:0.31rem;
            padding-top:0.02rem;
            .pop_title{
                font-size:0.14rem;
                color:#333;
            }
        }
        .right_logo{
            padding-top:0.05rem;
            img{
                
                width:0.73rem;
                height:0.36rem;  
            }
        }
    }
}

`