import React, {useState} from 'react'
import bell from '../assets/bell.svg'
import down from '../assets/chevron-down.svg'
import atlassian from '../assets/atlassian.svg'
import Briefcase from '../assets/Briefcase.jsx'
import CoinsHand from '../assets/CoinsHand.jsx'
import MessageSquare from '../assets/MessageSquare.jsx'
import reddot from '../assets/reddot.svg'
import logo from '../assets/logo.svg'
import RoundedButton from './uielements/RoundedButton.jsx'

function Nav() {

    const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };


  return (
    <div className='flex fixed items-center justify-between top-0 left-0 w-screen h-[109px] pl-10 pr-6 py-6 bg-white'>
        
        <button><img src={logo} alt="logo" /></button>
        

        <div className='flex items-center justify-between border-[0.5px] border-[#D1D1D1] rounded-[36px] p-2 h-[74px] w-[538px]'>
            <RoundedButton  name={"Jobs"}
                            isSelected={selectedButton === 1}
                            onClick={() => handleButtonClick(1)} 
                            logo={<Briefcase isSelected={selectedButton === 1}/>}/>

            <RoundedButton  name={"Messages"}
                            isSelected={selectedButton === 2}
                            onClick={() => handleButtonClick(2)} 
                            logo={<MessageSquare isSelected={selectedButton === 2}/>}/>

            <RoundedButton  name={"Payments"}
                            isSelected={selectedButton === 3}
                            onClick={() => handleButtonClick(3)}
                            logo={<CoinsHand isSelected={selectedButton === 3}/>} />
        </div>

        <div className='flex items-center p-[10px] gap-4'>
            <button className='relative'>
                <img className='relative z-10' src={bell} alt='bell'/>
                <img className='absolute top-0 right-1 z-20 ' src={reddot} alt="reddot" />
            </button>
            <div className='flex gap-[6px]'>
                <div>
                    <img src={atlassian} alt="atlassian-logo" />
                </div>
                <button>
                    <img src={down} alt="chevron-down" />
                </button>
            </div>
        </div>

    </div>
  )
}

export default Nav