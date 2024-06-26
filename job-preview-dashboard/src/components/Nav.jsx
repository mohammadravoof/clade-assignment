import React from 'react'
import bell from '../assets/bell.svg'
import down from '../assets/chevron-down.svg'
import atlassian from '../assets/atlassian.svg'
import Briefcase from '../assets/Briefcase.jsx'
import CoinsHand from '../assets/CoinsHand.jsx'
import MessageSquare from '../assets/MessageSquare.jsx'
import reddot from '../assets/reddot.svg'
import RoundedButton from './uielements/RoundedButton.jsx'

function Nav() {
  return (
    <div className='flex items-center justify-between fixed top-0 left-0 w-screen pl-10 pr-6 py-6'>
        
        <button className='flex justify-center items-center w-[100px] h-[61px] text-orange bg-[#E7E7E7] font-satoshi'>Logo</button>
        

        <div className='flex items-center border-[0.5px] border-[#D1D1D1] rounded-[49px] p-2 gap-[60px] h-[74px]'>
            <RoundedButton logo={<Briefcase />} name={"Jobs"} />
            <RoundedButton logo={<MessageSquare />} name={"Messages"} />
            <RoundedButton logo={<CoinsHand />} name={"Payments"} />
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