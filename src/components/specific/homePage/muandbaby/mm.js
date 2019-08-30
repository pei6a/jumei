import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CountDown extends Component {
    static propTypes = {
        deadline: PropTypes.number.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            day: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
            // milliseconds: ‘00‘
        }
    }

    componentDidMount() {
        this._countDown();
    }

    componentWillUnmount() {
        clearTimeout(this.time);
    }

    _countDown(){
        const currTime = new Date().getTime();
        const deadline = this.props.deadline;
        const dTime = deadline - currTime;
        if (dTime <= 0) {
            // 这样做更精确
            clearTimeout(this.time);
            this.setState({
         day: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
            });
            return;
        }
        this.time = setTimeout(() => {
            this.setState(this._formatTime(dTime));
            this._countDown();
        }, 1000);
    }

    _formatTime(time){
        const day = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        const hours = Math.floor(( time / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
        const minutes = Math.floor(( time / (1000 * 60)) % 60).toString().padStart(2, '0');
        const seconds = Math.floor(( time / 1000) % 60).toString().padStart(2, '0');
        // const milliseconds = Math.floor(time % 1000);
        return ({day, hours, minutes, seconds });
    }
    render() {
        const { day, hours,  minutes,  seconds } = this.state;
        return (
            <span className="count-down">
                <span>{day}</span>天
                <span>{hours}</span>时
                <span>{minutes}</span>分
            </span>
        );
    }
}