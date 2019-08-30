import React, { Component } from "react"
import { FilterBox } from "./style"
import { List, Switch,Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import{mapStateToProps,mapDispatchToProps} from "../find/mapStore"
import Dianxiuan from "../../../components/catetorymod/dianxuan"
const data = [
    {
      value: '1',
      label: '分类',
      children: [
        {
          label: '全部',
          value: '2',
        }, {
          label: '护肤套装',
          value: '3',
        }, {
          label: '眼部护理',
          value: '4',
        }, {
          label: '化妆水/爽肤水',
          value: '5',
        }, {
          label: '面膜',
          value: '6',
        }, {
          label: '洁面',
          value: '7',
        }, {
          label: '底妆',
          value: '8',
        }, {
          label: '面霜',
          value: '9',
        }, {
          label: '乳液',
          value: '10',
        }],
    }, {
      value: '2',
      label: '功效',
      children: [
        {
          label: '保湿',
          value: '1',
        }, {
          label: '补水',
          value: '2',
        }, {
          label: '滋润',
          value: '3',
        }, {
          label: '修护肌肤',
          value: '4',
        }],
    },
    {
      value: '3',
      label: '品牌',
      children: [
        {
          label: 'AHC',
          value: '1',
        },
      ],
    },
    {
        value: '4',
        label: '价格',
        children: [
          {
            label: '1-49',
            value: '1',
          },
          {
            label: '50-99',
            value: '1',
          },
          {
            label: '100-199',
            value: '1',
          },
          {
            label: '200-299',
            value: '1',
          },
          {
            label: '300以上',
            value: '1',
          },
        ],
      }
  ];
  
class Filter extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            checked: false,
            checked1: true,
            initData: '',
            show: false,
        }
    }
    onChange = (value) => {
        console.log(value);
      }
      onOk = (value) => {
        console.log(value);
        this.onCancel();
      }
      onCancel = () => {
        this.setState({ show: false });
      }
      handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
          show: !this.state.show,
        });
        // mock for async data loading
        if (!this.state.initData) {
          setTimeout(() => {
            this.setState({
              initData: data,
            });
          }, 500);
        }
      }
    
      onMaskClick = () => {
        this.setState({
          show: false,
        });
      }
    render() {
        const { initData, show } = this.state;
        const menuEl = (
          <Menu
            className="multi-foo-menu"
            data={initData}
            value={['1', ['3', '4']]}
            onChange={this.onChange}
            onOk={this.onOk}
            onCancel={this.onCancel}
            height={document.documentElement.clientHeight * 0.6}
            multiSelect
          />
        );
        const loadingEl = (
          <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
          </div>
        );
        
        return (
            <FilterBox>
                <div className="FilterHeader">全部商品</div>
                <div className="FilterNav">
                    <div>综合</div>
                    <div>价格</div>
                    <div>销量</div>
                    <div className="FilterNav4">筛选</div>
                </div>
                <div>
                    <List>
                        <List.Item
                            extra={<Switch  color="#ed145b"
                                checked={this.state.checked}
                                onChange={() => {
                                    this.setState({
                                        checked: !this.state.checked,
                                    });
                                }}
                            />}
                        >只看有货</List.Item>
                    </List>
                </div>
                <div className={show ? 'multi-menu-active' : ''}>
                <div>
                  <NavBar  style={{backgroundColor:"#ed145b"}}   
                    leftContent="筛选"
                    mode="light"
                    onLeftClick={this.handleClick}
                    className="multi-top-nav-bar"
                  >
                    请认真往下看
                  </NavBar>
                </div>
                {show ? initData ? menuEl : loadingEl : null}
                {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
              </div>
              <Dianxiuan/>
              <div className="filterName">
                  <div>重置</div>
                  <div>
                    <Link to="/dianpu">确认</Link>
                  </div>
              </div>
            </FilterBox>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter)







