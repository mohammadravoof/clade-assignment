import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import SidePanel from './components/SidePanel.jsx'
import MainPanel from './components/MainPanel.jsx'



function App() {

  return (
    <>
        <Nav/>
        <Header/>
          <div className='flex flex-row'>
            <MainPanel/>
            <SidePanel/>
          </div>
    </>
  )
}

export default App
