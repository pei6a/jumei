import styled from "styled-components"
// export const TabBarWrapper = styled.div`
//     width:100%;
//     height:1rem;
//     position:fixed;
//     left:0;
//     bottom:0;
//     border-top:1px solid #ccc;
//     background:#fff;
//     ul{
//         width:100%;
//         height:100%;
//         display:flex;
//         justify-content:space-between;
//         li{
//             width:100%;
//             height:100%;
//         }
//         a{
//             width:100%;
//             height:100%;
//             display:flex;
//             flex-direction: column;
//             justify-content:center;
//             align-items:center;
//         }
//         i{
//             font-size:.4rem;
//         }
//         span{
//             font-size:.3rem;
//         }
//         .active{
//             color:#c33;
//         }
//     }
// `


export const TabBarWrapper = styled.div`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:0.48rem;
    background-color: rgb(255, 255, 255);
    border-top: 1px solid rgb(238, 238, 238);
    ul{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        li{
            width:100%;
            height:100%;
            text-align:center;
        }
        a{
            width:100%;
            height:100%;
            display:flex;
            flex-direction: column;
            justify-content:center; 
            color: rgb(153, 153, 153);
        }
        .active{
            color: #fe4070;
        }
    }
`


 