import styled from 'styled-components'
export const HomeContentWrapper = styled.div`
    position:absolute;
    width:100%;
    // height:100%;
    .homeSearch{
        position:relative;
        top:0.44rem;
        width:100%;
        height:0.45rem;
        display:flex;
        justify-content:center;
        align-items:center;
        div{
            width:80%;
            height:0.3rem;
            display:flex;
            justify-content:center;
            align-items:center;
            color: #999;
            background: #F5F5F5;
            border-radius: 0.8rem;
            margin:0.08rem 0.14rem 0.06rem 0.2rem;
            font-size:0.14rem;
            box-shadow: 0 0.0625rem 0.125rem rgba(0,0,0,.05) inset;
            img{
                width:0.16rem;
                height:0.16rem;
                margin-right:0.1rem;
            }
        }
        span{
            img{
                width:0.24rem;
                height:0.17rem;
                margin-right:0.12rem;
            }
        }
    }
    .homeNav{
        position:relative;
        top:0.44rem;
        width:100%;
        height:0.44rem;
        border-bottom:1px solid #ccc;
        ul{
            width:100%;
            height:0.44rem;
            display:flex;
            justify-content:space-around;
            align-items:center;
            li{
                height:0.44rem;
                line-height:0.44rem;
                a{
                    height:100%;
                    font-size:0.14rem;
                    padding-bottom:0.1rem;
                }
                .active{
                    color: #fe4070;
                    border-radius: .125rem .125rem 0 0;
                    border-bottom:2px solid #fe4070;
                }
            }
        }

        }

    .Nav_Fix{
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        overflow:auto;
        p{
            flex-shrink:1;
            flex-wrap:no-wrap;
        }

}
`