import React, { Component } from 'react';
import { SearchWrapper } from './styled'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {mapStateToProps,mapDispatchToProps} from './connect'
class SearchHome extends Component {
    constructor(){
        super()
        this.state={
            inputVal:'',
            list:[]

        }
    }
    render() {
        let {data}=this.props.searchResult
        let {list}=this.state
        if(data) list=data
        return (
            <SearchWrapper>
                <div className='search_head'>
                    <img src='//f0.jmstatic.com/btstatic/h5/common/left_arrow.png'
                        onClick={this.props.searchBackHandler.bind(this)}
                        alt='' />
                    <div className='searchMiddle'>
                        <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt="" className="search_icon" />
                        <input type='text' 
                        placeholder='搜索商品名称、品牌、功效' 
                        value={this.state.inputVal}
                        onChange={this.searchInputHandler.bind(this)}
                        />
                    </div>
                    <Link className='search_go'
                    to={'/detail?keyword='+this.state.inputVal}
                    >搜索</Link>
                </div>
                
                <ul>
                    {list.map((item,index)=>(<li key={index}
                        >
                        <Link to={'/detail?keyword='+item}>
                        <img className='sBtn' src='//f0.jmstatic.com/btstatic/h5/common/search_btn.png' alt='' />
                        <span>{item}</span>
                        <img className='leftArrow' src='http://a1.jmstatic.com/5f4c886f1be723bf/arrow_down.png' alt=''/>
                        </Link>
                        </li>))}                   
                </ul>
            </SearchWrapper>
        );
    }
    searchInputHandler(e){
        this.setState({
            inputVal:e.target.value
        })
        clearTimeout(this.timer)
        this.timer=setTimeout( () => {
            this.props.getSearchResult(this.state.inputVal)
        }, 300);
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchHome)


