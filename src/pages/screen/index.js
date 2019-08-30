import React,{Component} from 'react';
import {ScreenStyle} from './styled';
export default class Screen extends Component{
    render(){
        let {val}=this.props;
        return(
            <ScreenStyle style={{display:val?'block':'none'}}>
                <p onClick={this.handlerZz.bind(this)}>Screen</p>
            </ScreenStyle>
        )
    }
    handlerZz(){
        this.props.handlerZ(!this.props.val)
    }

}