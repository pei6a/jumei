import { Carousel } from 'antd-mobile';
import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {DetailWrapStyle} from './styled'
import { mapStateToProps, mapDispatchProps } from './connect'
import url from 'url'
class DetailContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 2,
      detailDesc:{}
    }
  }

  componentDidMount() {
    let { item_id, type,name } = url.parse(this.props.location.search, true).query
    this.props.getDetail(item_id, type)
    this.props.handleTitle(name)
    // setTimeout(() => {
    //   this.setState({
    //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //   });
    // }, 100);
  }
  componentWillUpdate(newProps, newState) {
    if (newProps.detailResult.data) {
      var arrPic = newProps.detailResult.data.image_url_set.single_many;
      var arrLatest = [];
      for (var i = 0; i < arrPic.length; i++) {
        arrLatest.push(arrPic[i]['320'])
      }
      newState.data = arrLatest
      newState.detailDesc = newProps.detailResult.data
      
    }
  }
  // componentDidUpdate() {
  //   if (this.state.slideIndex !== this.state.data.length - 1) {
  //     /* eslint react/no-did-update-set-state: 0 */
  //     this.setState({ slideIndex: this.state.data.length - 1 });
  //   }
  // }
  render() {
    let {name}=this.state.detailDesc
    
    return (
      <DetailWrapStyle >  
          <Carousel
            autoplay={false}
            infinite
          >
            {this.state.data.map((val, index) => (
                <img key={index}
                  src={val}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
            ))}
          </Carousel>
     
        <div className="price_info">
          <span className="cur_price">￥39</span>
          <del className="cost_price">￥299</del>
          <strong>2871人已购买</strong>
        </div>
        <div className="count_down"><span>还剩1天17:15:52</span></div>
        <div className="normal_desc" >{name}</div>
      </DetailWrapStyle>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchProps)(DetailContent))