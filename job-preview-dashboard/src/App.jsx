import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav/>
        <Header/>
          <div className='flex flex-row h-screen'>
            <div className=''>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='border-t border-l border-[#e7e7e7] bg-[#fcfcfc] w-[409px] fixed right-0 h-screen'>Delete job Edit job</div>
          </div>
    </>
  )
}

export default App
