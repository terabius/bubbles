import React from 'react'

import './App.css'
import SideBar from './components/SideBar'
import MainFrame from './components/MainFrame'

const App = () => {
  return (
    <div className='app'>
      <SideBar />
      <MainFrame />
    </div>
  );
}


export default App;