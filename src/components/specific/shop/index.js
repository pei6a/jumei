import React, { Component } from 'react';
import { ShopStyleWrapper } from './styled'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchProps } from './connect'
import { Link } from 'react-router-dom'
import BscrollComponent from '@common/betterScroll/index'
import Choose from './choose/index'
class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shopNavs: ['综合', '价格', '销量', '筛选'],
            goods: [],
            page: 1,
            flag: true,
            selected:0,
            filterData:{}
        }
    }
    componentDidMount() {
        if (sessionStorage.getItem('goodsList')) {
            this.setState({
                goods: JSON.parse(sessionStorage.getItem('goodsList')),
                filterData:JSON.parse(sessionStorage.getItem('filterData'))
            })
        } else {
            this.props.getAllGoods()
        }
        this.refs.bscroll.handlePullingUp(() => {
            this.props.getAllGoods(this.state.goods, ++this.state.page)
            console.log(this.state.page, 'jiazai')
        })
        this.refs.bscroll.handlePullingDown(() => {
            this.props.getAllGoods([], (Math.floor(Math.random() * 4) + 1))
        })
    }
    componentWillUpdate(newProps, newState) {
        
        if (newProps.shopAllResult.data) {
            newState.filterData={...newProps.shopAllResult.data.filter}
            newState.goods = newProps.shopAllResult.data.data.rows
            sessionStorage.setItem('goodsList', JSON.stringify(newState.goods))
            sessionStorage.setItem('filterData', JSON.stringify(newState.filterData))
        }
        this.refs.bscroll.hanldeNextPullingUp()
        this.refs.bscroll.hanldeNextPullingDown()
    }
    togglehandler(index) {
        this.setState({
            flag: !this.state.flag,
            selected:index
        })
    }
    render() {
        let { shopNavs, goods, flag,selected } = this.state;
        return (
            <BscrollComponent ref='bscroll'>
                <ShopStyleWrapper>
                    <div className='shop_head' style={{ display: flag ? 'block' : 'none' }}>
                        <div className='shop_sign'>
                            <img src='http://a4.jmstatic.com/3917f15b23ae1ca0/logowxffh.png' alt='' />
                            <div>
                                <p>柏蝶旗舰店</p>
                                <p><span>官方授权</span><span>官方授权</span></p>
                            </div>
                            <div className='collect'>
                                收藏
                             </div>
                        </div>
                    </div>
                    <div>
                        <ul className='navs'>
                            {
                                shopNavs.map((item, index) => (
                                    <li key={index} 
                                    className={(3===index)? 'selectbtn':(selected===index)?'active':''}
                                    onClick={this.togglehandler.bind(this,index)}>{item}</li>
                                ))
                            }
                        </ul>
                        {flag?'':<Choose data={this.state.filterData}/>}
                        <div className='goodsItems' style={{ display: flag ? 'block' : 'none' }} >
                            <ul className='goodsItem'>
                                {goods.map((item, index) => (
                                    <li key={index}>
                                        <Link to={'/detail?item_id=' + item.item_id + '&type=' + item.type + '&name=' + item.short_name}>
                                            <img src={item.image_url} alt='' />
                                            <div className='title'>{item.short_name}</div>
                                            <div className='price'><span>￥{item.jumei_price}</span><del>￥{item.market_price}</del></div>
                                            <div className='comment'> {item.comments_number}</div>
                                        </Link>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    </div>
                </ShopStyleWrapper>
            </BscrollComponent>
        );
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Shop)