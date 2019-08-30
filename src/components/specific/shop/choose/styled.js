import styled from 'styled-components'
export const ChooseWrapper = styled.div`
.am-list-item{
    margin-bottom:5px;
    .am-list-line .am-list-content{
    font-size: .14rem;
    color: #333;
    }
}
.am-switch{
    width:0.5rem!important;
    height:0.28rem!important;
}
.am-switch .checkbox{
    width:0.5rem;
    height:100%;
}
.am-switch .checkbox:after{
    width:0.25rem;
    height:0.25rem;
}
.am-switch .checkbox:before{
    height:0.25rem;
}
.term_list{
    line-height:0.51rem;
}
.term_left{
    position:absolute;
    left:0;
    li{
        width:0.82rem;
        height:0.51rem;
        
        padding-left:0.17rem;
        border-left: .01rem solid #e0e0e0;
        border-bottom: .01rem solid #e0e0e0;
    }
    .active{
        border-left: .02rem solid #ed145b;
        background: #fff;
    }

}
.term_right{
    position:absolute;
    right:0;
    li{
        width:2.92rem;
        height:0.51rem;
        padding-left:0.17rem;
        border-bottom: 1px solid #e0e0e0;
        background: #fff;
    }
}
.term_btn{
    position: fixed;
    bottom: 0;
    z-index: 11;
    width: 100%
    padding: .08rem .14rem;
    height: 0.57rem;
    color: #999;
    line-height: 0.57rem;
    box-shadow: inset 0 0.02rem 0.02rem rgba(0,0,0,.1);
    background-color: #fff;
    display:flex;
    justify-content:space-around;
    align-items:center;
    span{
        margin-right:0.2rem;
     strong{
        color:#fe4070;
    }       
    }

    i,b{
        width:1.08rem;
        height:0.44rem;
        line-height: 0.44rem;
        font-style:normal;
        border-radius: 0.22rem;
        text-align: center;
        border: solid .01rem #fe4070;
        color: #fe4070;
    }
    b{
        background: #fe4070;
        color: #fff;
        font-weight:normal;
    }
}

`