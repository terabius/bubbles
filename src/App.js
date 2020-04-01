import React, { Component } from 'react'

import './App.css'
import SideBar from './components/SideBar'
import MainFrame from './components/MainFrame'


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      num:50,
      ratio:50
    }

    this.sendData = this.sendData.bind(this);

  }


  sendData(data) {
    this.setState({num: data.num, ratio:data.ratio })
  }

  render() {
    return (
      <div className='app'>
        
        <SideBar sendData={this.sendData}/>
        <MainFrame />
      </div>
    )
  }
}
