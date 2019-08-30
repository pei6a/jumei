import React, { Component } from 'react';
import { HomeWrapperThree } from './styled'
import { Link } from 'react-router-dom'
import { mapStateToProps, mapDispatchProps } from './connect'
import { connect } from 'react-redux';
class HomeIndex extends Component {
  constructor() {
    super();
    this.state = {
      toggle_Ten: 1,
      styled_now: 2,
      item_list: [],
      img_list:[],
      list_item_pre:['http://mp5.jmstatic.com//jmstore/image/000/008/8199_std/5d5e08e742872_2048_710.jpg?1566890556&imageView2/2/w/320/q/90',
      'http://mp6.jmstatic.com//jmstore/image/000/006/6845_std/5d637801ce503_2048_710.jpg?1567044787&imageView2/2/w/800/q/90',
      'http://mp5.jmstatic.com//jmstore/image/000/008/8252_std/5d5f895847f72_2048_710.jpg?1566547399&imageView2/2/w/320/q/90',
      'http://mp5.jmstatic.com//jmstore/image/000/008/8072_std/5d5e688de24eb_2048_710.jpg?1566468576&imageView2/2/w/800/q/90',
      'http://mp5.jmstatic.com//jmstore/image/000/008/8252_std/5d5f895847f72_2048_710.jpg?1566547399&imageView2/2/w/320/q/90',
      'http://mp5.jmstatic.com//jmstore/image/000/008/8072_std/5d5e688de24eb_2048_710.jpg?1566468576&imageView2/2/w/800/q/90',
      'http://mp5.jmstatic.com//jmstore/image/000/008/8252_std/5d5f895847f72_2048_710.jpg?1566547399&imageView2/2/w/320/q/90']
    }
    this.toggleOClickHanlder = this.toggleOClickHanlder.bind(this)
    this.toggleTClickHanlder = this.toggleTClickHanlder.bind(this)
  }
  componentDidMount() {
    if(sessionStorage.getItem('item_list')){
      this.setState({
        item_list:JSON.parse(sessionStorage.getItem('item_list'))
      })
    }else{
      this.props.getList()
    }
    
  }
  componentWillUpdate(newProps,newState){
    if(newProps.homeNowGoods.item_list){
      sessionStorage.setItem('item_list',JSON.stringify(newProps.homeNowGoods.item_list))
      newState.item_list=newProps.homeNowGoods.item_list
    }
    
  }

  render() {
    let { toggle_Ten, styled_now,item_list} = this.state;
    // let { item_list } = this.props.homeNowGoods;
    // if(!item_list) item_list=[] 
  
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
            {
              this.state.list_item_pre.map((item,index)=>(
             <li key={index}>
              <img src={item} alt='' />
            </li>               
              ))
            }

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
    this.props.getList('1566978240')
    this.setState({
      toggle_Ten: 2
    })
  }
}
export default connect(mapStateToProps, mapDispatchProps)(HomeIndex)