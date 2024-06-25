import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex'>
        <Nav/>
        <main className='flex'>
          <div className='flex flex-row'></div>
          <div className='flex flex-row'>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div></div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
