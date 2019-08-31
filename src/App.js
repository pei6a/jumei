import React,{Component} from 'react';
import {Redirect,Switch} from "react-router-dom"
import { routeConfig } from '@router'
import BaseRoute from '@common/baseRoute'
export default class App extends Component {
  render() {
    return (
        <Switch>
          <Redirect from='/' to='/home' exact />
        {routeConfig.map((item,index)=>(
          <BaseRoute key={index} {...item}/>
        ))}
        </Switch>
    )

        }
}
