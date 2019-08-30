import React,{Component} from 'react';
import {Route,Redirect,Switch} from "react-router-dom"
// import Home from "@pages/category/find"
import Gloup from './pages/gloup';
import Items from './pages/items';
import Gwc from './pages/gwc';
import Store from './pages/store';
import { routeConfig } from '@router'
import BaseRoute from '@common/baseRoute'
export default class App extends Component {
  render() {
    return (
        <Switch>
          <Redirect from='/' to='/home/index' exact />
          <Route path="/gloup" component={Gloup}/>
          <Route path="/items/:id/:type" component={Items}/>
          <Route path="/gwc/:name/:price/:img" component={Gwc}/>
          <Route path="/store" component={Store}/>
        {routeConfig.map((item,index)=>(
          <BaseRoute key={index} {...item}/>
        ))}
        </Switch>
    )

        }
}
