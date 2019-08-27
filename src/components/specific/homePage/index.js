import React, { Component } from 'react';
import { HomeContentWrapper } from './styled'
import { NavLink, Route,withRouter } from 'react-router-dom'
import Header from '@components/header/index.js'
// import ComponentAd from './homeindex/ad/index'
import Global from './global'
import Luxury from './luxury'
import Muandbaby from './muandbaby'
import HomeIndex from './homeindex'
import Pop from './pop'
class HomeSearchVSNav extends Component {
    constructor() {
        super();
        this.state = {
            navs: ['首页', '极速免税店', '母婴', '轻奢', '名品特卖'],
            links: ['/home/index', '/home/global', '/home/muandbaby', '/home/luxury', '/home/pop'],
            title: JSON.parse(sessionStorage.getItem('title')) || '',
            flag:false
        }
    }
    render() {
        let { navs, links, title,flag} = this.state;
        sessionStorage.setItem('title', JSON.stringify(this.state.title))
        return (
            <HomeContentWrapper>
                {flag ? <Header title={title} /> :''}
                <div className='homeSearch'>
                    <div onClick={this.searchPagehandler.bind(this)}>
                        <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt='' />
                        <span>搜索商品 分类 功效</span>
                    </div>
                    <span>
                        <img className="search" src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png" alt='' />
                    </span>
                </div>
                <div className='homeNav'>
                    <ul>
                        {
                            navs.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={links[index]} onClick={this.titleCHangeHandle.bind(this, index)}>
                                        {item}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <Route path='/home/index' component={HomeIndex} />
                <Route path='/home/global' component={Global} />
                <Route path='/home/luxury' component={Luxury} />
                <Route path='/home/muandbaby' component={Muandbaby} />
                <Route path='/home/pop' component={Pop} />
            </HomeContentWrapper>
        );
    }
    titleCHangeHandle(index) {
        if(index!==0){
            this.setState({
                flag:true
            })
        }else{
            this.setState({
                flag:false
            })
        }
        this.setState({
            title: this.state.navs[index]
        })
    }
    searchPagehandler() {
        this.props.history.push('/search')
    }
}

export default withRouter(HomeSearchVSNav)