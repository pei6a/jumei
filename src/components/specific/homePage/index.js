import React, { Component } from 'react';
import { HomeContentWrapper } from './styled'
import { NavLink, Link, Route, withRouter } from 'react-router-dom'
import Header from '@components/header/index.js'
import ComponentAd from './homeindex/ad/index'
import Global from './global'
import Luxury from './luxury'
import Muandbaby from './muandbaby'
import HomeIndex from './homeindex'
import Pop from './pop'

class HomeSearchVSNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: ['首页', '极速免税店', '母婴', '轻奢', '名品特卖'],
            links: ['/home/index', '/home/global', '/home/muandbaby', '/home/luxury', '/home/pop'],
            title: JSON.parse(sessionStorage.getItem('title')) || '',
            flag: false
        }
    }
    componentWillMount() {
        if (this.state.title !== '首页') {
            this.state.flag = true
        }
    }
    render() {
        let { navs, links, title, flag } = this.state;
        sessionStorage.setItem('title', JSON.stringify(this.state.title))
        return (
            
                <HomeContentWrapper>
                    {flag ? <Header title={title} /> : <ComponentAd />}
                    <div className='homeSearch'>
                        <div onClick={this.searchPagehandler.bind(this)}>
                            <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt='' />
                            <span>搜索商品 分类 功效</span>
                        </div>
                        <span>
                            <Link to="/find">
                                <img className="search" src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png" alt='' />
                            </Link>
                        </span>
                    </div>
                    <div className='navVsContent'>
                        <ul className='homeNav'>
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
                        <Route path='/home/index' component={HomeIndex} />
                        <Route path='/home/global' component={Global} />
                        <Route path='/home/luxury' component={Luxury} />
                        <Route path='/home/muandbaby' component={Muandbaby} />
                        <Route path='/home/pop' component={Pop} />
                    </div>

                </HomeContentWrapper>
        
        );
    }
    titleCHangeHandle(index) {
        if (index !== 0) {
            this.setState({
                flag: true
            })
        } else {
            this.setState({
                flag: false
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