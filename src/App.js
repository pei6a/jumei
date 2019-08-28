import React,{Component} from 'react';
import {Route,HashRouter,Redirect,Switch} from "react-router-dom"
import Home from "@pages/category/find"
import Seach from "./pages/category/findpage"
import FindId from "./pages/category/findid"
import Gloup from './pages/gloup';
import Items from './pages/items';
import Gwc from './pages/gwc';
import Store from './pages/store';
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Redirect from ="/" to="/home" exact/>
          <Route path="/home" component={Home}/>
          <Route path="/seach/:category_id" component={Seach}/>
          <Route path="/product/:item_id/:type" component={FindId}/>
          <Route path="/gloup" component={Gloup}/>
          <Route path="/items/:id/:type" component={Items}/>
          <Route path="/gwc/:name/:price/:img" component={Gwc}/>
          <Route path="/store" component={Store}/>
        </Switch>
      </HashRouter>
    )
  }
}

