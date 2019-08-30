import styled from "styled-components"
export const Findpagebox=styled.div`
    width:100%;
    height:100%;
    position: relative;
    .findpageheader{
        position: absolute;
        height:0.44rem;
        width:100%;
        border-bottom: 1px solid #eee;
        line-height: 0.44rem;
        color:#333;
        padding-left:0.2rem
    }
    .findpageheaderhome{
        position: absolute;
        line-height: 0.44rem;
        height:0.44rem;
        right:0.2rem;
        color:#333;
    }
    .Findpagebox{
        width:100%;
        height:100%;
        position: absolute;
        top:0.44rem;
        overflow-y: auto
    }
    .Findpageul{
        height:0.44rem;
        width:100%;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-around;
        align-content: center;
        line-height:0.44rem;
        font-size:0.16rem;
        color: #666;
    }
    .Findpageli{
        color: #fe4070;
    }
    .Findpagelistul{
        width:100%;
        // height:100%;
    }
    .Findpagelistli{
        width:100%;
        height:1.25rem;
        border-bottom: 1px solid #eee;
        display: flex;
    }
    .Findpagelistimgbox{
        width: 1.2rem;
        height: 1rem;
        background: #fff;
        text-align: center;
        overflow: hidden;
        margin: 0.12rem;
    }
    .Findpagelistimgbox>img{
        width:100%;
        height:100%;
    }
    .Findpagelistrightbox{
        width: 2.4rem;
        height: 1.07rem;
        margin: 0.1rem;
        margin-left:0;
        font-size:0.16rem;
        color: #333

    }
    .Findpagelisttop{
        width: 2.4rem;
        height: 0.4rem;
        overflow:hidden;
    }
    .Findpagelistcenter{
        font-size:0.12rem;
        margin:0.1rem 0;
        color: #999;
    }
    .Findpagelistbottom>span{
        color:#fe4070;
    }
    .Findpagelistbottom>del{
        font-size:0.12rem;
        color: #999;
    }

//显示、隐藏
    .Findpageulshow{
        width:100%;
        // position: absolute;
        color: #666;
        background:#fff
    }
    .Findpagelishow{
        width:1.25rem;
        height:0.44rem;
        float: left;
        text-align: center;
        line-height: 0.44rem
        border-right: solid 1px #eee;
        border-bottom: 1px solid #eee;
        background:#fff;
    }
    .Findpagelinone{
        display:none
    }
`