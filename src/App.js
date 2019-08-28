import React,{Component} from 'react';
import {souMsapi} from "./api/movie"
import {Route,HashRouter,Redirect,Switch} from "react-router-dom"
// import Home from "@pages/home"
import Home from "@pages/category/find";
import Gloup from './pages/gloup';
import Items from './pages/items';
import Gwc from './pages/gwc';
import Store from './pages/store';
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/gloup" component={Gloup}/>
          <Route path="/items/:id/:type" component={Items}/>
          <Route path="/gwc/:name/:price/:img" component={Gwc}/>
          <Route path="/store" component={Store}/>
        </Switch>
      </HashRouter>
    )
  }
   async componentDidMount(){
    let data=await souMsapi()

  }
}

