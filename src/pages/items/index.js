import React, { Component } from 'react';
import { ItemsStyle } from './styled';
import { mapStateToProps, mapDispatchToProps } from "./connect";
import { connect } from "react-redux";
class Items extends Component {
    render() {
        let { itemsList,list,imgs,info,buy} = this.props;
        console.log(imgs.img,777)
        return (
            <ItemsStyle>
                <div className="items">
                    <div className="title">
                        <img src="http://p0.jmstatic.com/mobile/touch/Image/app/guide_logo.png" alt="" />
                        <div className="lays">
                            <p>聚美优品·我为自己代言</p>
                        </div>
                        <a href="">前往聚美</a>
                        <div className="error">
                            <img src="//f0.jmstatic.com/btstatic/h5/close2.png" alt="" />
                        </div>
                    </div>

                    <div className="section">
                        <div className="section_img">
                            <a>
                                <img src={imgs.img} alt="" />
                            </a>
                        </div>
                        <div className="section_price">
                            <p className="price">
                                <b>{itemsList.group_jumei_price}</b>
                                <strong>包邮</strong>
                            </p>
                            <p className="buys">
                                <span>{itemsList.group_single_price}</span>
                            </p>
                            <p className="join">{itemsList.buyer_number_text}</p>
                            <div className="oldPrice">
                                <p>
                                    <del>￥{list.market_price}</del>
                                </p>
                            </div>
                            <div className="last">
                                <span>还剩21:02:41</span>
                                <span>视频红包可抵10%</span>
                            </div>
                        </div>
                    </div>
                    <div className="goods">
                        <div className="good">
                            <span>[2人团]</span>
                            {list.name}
                        </div>
                    </div>
                    <div className="address">
                        <strong>配送</strong>
                        <p className="to">至
                        <i></i>
                            <span>北京市-市辖区-大兴区 亦庄经济开发区经海七路100号院北京京东方宿舍</span>
                        </p>
                        <p className="from">></p>
                    </div>
                    <div className="play">
                        <div className='top'>
                            <p>拼团玩法</p>
                            <p>查看规则></p>
                        </div>
                        <div className='bottom'>
                            <div>支付<br />开团/参团</div>
                            <span>></span>
                            <div>邀请<br />好友参团</div>
                            <span>></span>
                            <div>拼团成功立即发货<br />逾期未成团自动退款</div>
                        </div>
                    </div>
                    <div className="fuwu">
                        <div className="jm_fuwu">
                            <div className="image"><img src="./img/logowxffh.png" alt="" /></div>
                            <div className="gzh">
                                <div className="ju_gzh">聚美官方服务号</div>
                                <div className="ju_tj">更多靠谱优惠推荐，尽在聚美微信服务号</div>
                            </div>
                        </div>
                        <div className="guanzhu">
                            <div>点击关注</div>
                            <div>或 微信搜索“聚美优品jumei”关注</div>
                        </div>
                    </div>
                    <div className="freeIcon">
                        <ul>
                            <li>
                                <i><img src="./img/1.png" alt="" /></i>
                                <span>海外直采</span>
                            </li>
                            <li>
                                <i><img src="./img/2.png" alt="" /></i>
                                <span>原装正品</span>
                            </li>
                            <li>
                                <i><img src="./img/3.png" alt="" /></i>
                                <span>最快次日达</span>
                            </li>
                            <li>
                                <i><img src="./img/4.png" alt="" /></i>
                                <span>7天退货</span>
                            </li>
                        </ul>
                    </div>
                        <div className="dianpu">
                        <a href="">
                            <div className="imgs">
                               <img src="http://mp4.jmstatic.com/pop_store/000/008/8150_std/5ce789133eadf_320_320.jpg@base@tag=imgScale&w=640&q=90?1564727442" alt=""/>
                            </div>
                            <div className="qijiandian">
                                <div className="xiao">
                                    <span>{info.store_title}</span>
                                    <span>聚美自营</span>
                                    <span>官方授权</span>
                                </div>
                                <div>{info.store_content}</div>
                            </div>
                            <div className="pic">
                                <img src="./img/arrow_right.png" alt="" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="foot">
                    <div className="footer">
                        <div className="home">
                            <h3><a href='#gloup'>首页</a></h3>
                        </div>
                        <div className="only">
                            <span>{buy.buy_alone_text}</span>
                        </div>
                        <div className="every">
                            <a onClick={this.props.handlerToGwc.bind(
                                this,
                                list.name,
                                imgs.jumei_price,
                                imgs.img
                                )}>
                                <span>{buy.action_text}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </ItemsStyle>
        )
    }
    componentDidMount(){
        let { id, type } = this.props.match.params;
        this.props.handleGetItems(id,type)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Items)