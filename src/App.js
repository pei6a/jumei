import React,{Component} from 'react';
import {souMsapi} from "./api/movie"
import {Route,HashRouter,Redirect,Switch} from "react-router-dom"
import Home from "@pages/home"
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Redirect from="/"to="/home" exact/>
          <Route path="/home" component={Home}/>
        </Switch>
      </HashRouter>
    )
  }
   async componentDidMount(){
    let data=await souMsapi()
    console.log(data,1)
  }
}

