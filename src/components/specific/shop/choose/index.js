import React, { Component } from 'react';
import { List, Switch } from 'antd-mobile';
import { ChooseWrapper } from './styled'
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from './connect'
 class SelectedComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: true,
            chooseCatIndex: 0,
            term_left: [],
            term_right: []
        };
        for(var key in this.props.data){
            if(this.props.data[key]){
                this.state.term_left.push(key)
                let oneArr=['全部']
                for(var keyT in this.props.data[key]){
                    if(key=='pre_brand'){
                        oneArr.push(this.props.data[key][keyT].name)
                    }else{
                        oneArr.push( this.props.data[key][keyT])
                    }   
                }
                this.state.term_right.push(oneArr)
            }
        }
    }
    render() {
        let { term_left, term_right, chooseCatIndex } = this.state
        return (
            <ChooseWrapper>
                <List.Item
                    extra={<Switch
                        checked={this.state.checked}
                        onChange={() => {
                            this.setState({
                                checked: !this.state.checked,
                            });
                        }}
                        color='#ed145b'
                    />}

                >只看有货</List.Item>
                <div className='term_list'>
                    <ul className='term_left'>
                        {
                            term_left.map((item, index) => (
                                <li key={index}
                                    className={chooseCatIndex === index ? 'active' : ''}
                                    onClick={this.leftIndexHandler.bind(this, index)}
                                >{item}</li>
                            ))
                        }
                    </ul>
                    <div>
                        {
                            term_left.map((item, index) => (
                                <ul className='term_right'
                                key={index}
                                    style={{ display: chooseCatIndex === index ? 'block' : 'none' }}
                                >
                                    {
                                        term_right[index].map((item2, index2) => (
                                            <li key={index2}>{item2}</li>
                                        ))
                                    }
                                </ul>
                            ))
                        }

                    </div>
                </div>
                <div className='term_btn'>
                    <span>有<strong>83</strong>件商品</span>
                    <i>重置</i>
                    <b>确认</b>
                </div>
            </ChooseWrapper>
        );
    }
    leftIndexHandler(index) {
        this.setState({
            chooseCatIndex: index
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectedComponent)