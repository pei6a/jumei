import React, { Component } from 'react';
import { HomeWrapperThree } from './styled'
import { Link } from 'react-router-dom'
// import { HomePageListApi } from '../../../../api/home_api/home_api'
import { mapStateToProps, mapDispatchProps } from './connect'
import { connect } from 'react-redux';
class HomeIndex extends Component {
  constructor() {
    super();
    this.state = {
      toggle_Ten: 1,
      styled_now: 2,
      item_list: []
    }
    this.toggleOClickHanlder = this.toggleOClickHanlder.bind(this)
    this.toggleTClickHanlder = this.toggleTClickHanlder.bind(this)
  }
  componentDidMount() {
    this.props.getList()

  }
  render() {
    let { toggle_Ten, styled_now } = this.state;
    let { item_list } = this.props.homeNowGoods;
    if(!item_list) item_list=[] 
    return (
      <HomeWrapperThree>
        <div className='home_title'>
          <span onClick={this.toggleOClickHanlder}
            className={toggle_Ten === 1 ? 'active' : ''}
          >今日十点上新</span>
          <span onClick={this.toggleTClickHanlder}
            className={toggle_Ten === 2 ? 'active' : ''}
          >明日十点预告</span>
        </div>
        <div className='homeItems'>
          {(styled_now === 1) ?
            <ul className='item_nowTwo'
              style={{ display: toggle_Ten === 1 ? 'block' : 'none' }}>
              <li >
                <img src='http://mp5.jmstatic.com//jmstore/image/000/008/8072_std/5d5e688de24eb_2048_710.jpg?1566468576&imageView2/2/w/800/q/90' alt='' />
              </li>
            </ul>
            :
            <ul className='item_nowOne' style={{ display: toggle_Ten === 1 ? 'block' : 'none' }}>
              {
                item_list.map((item, index) => (
                  <li key={index}>
                    <Link to={'/detail?item_id=' + item.item_id + '&type=' + item.type+'&name='+item.name}>
                      <div className='item_left'>
                        <img className='item_img'
                          src='http://mp6.jmstatic.com/product/003/714/3714976_std/3714976_dx_1154_400.jpg?_t=1564732930&imageView2/2/w/800/q/90' alt='' />
                      </div>
                      <div className='item_right'>
                        <p className='item_title'>{item.name}</p>
                        <p className='item_price'>￥<b>{item.jumei_price}</b><span>￥{item.market_price}</span></p>
                        <p className='item_comment'>{item.product_desc}</p>
                      </div>
                    </Link>
                  </li>))
              }
            </ul>
          }
          {/**{item.image_url_set.dx_image['url']['320']} */}

          <ul className='item_pre'
            style={{ display: toggle_Ten === 2 ? 'block' : 'none' }}>
            <li>
              <img src='http://mp5.jmstatic.com//jmstore/image/000/008/8072_std/5d5e688de24eb_2048_710.jpg?1566468576&imageView2/2/w/800/q/90' alt='' />
            </li>
          </ul>

        </div>
      </HomeWrapperThree>
    );
  }

  toggleOClickHanlder() {
    this.setState({
      toggle_Ten: 1
    })
  }
  toggleTClickHanlder() {
    this.props.getList('1566904560')
    this.setState({
      toggle_Ten: 2
    })
  }
}
export default connect(mapStateToProps, mapDispatchProps)(HomeIndex)