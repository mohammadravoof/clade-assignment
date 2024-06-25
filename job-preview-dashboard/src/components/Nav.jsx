import React from 'react'
import bell from '../assets/bell.svg'
import down from '../assets/chevron-down.svg'
import atlassian from '../assets/atlassian.svg'
import briefcase from '../assets/briefcase.svg'
import reddot from '../assets/reddot.svg'

function Nav() {
  return (
    <div className='flex items-center justify-between fixed top-0 left-0 w-screen pl-10 pr-6 py-6'>
        
        <button className='flex justify-center items-center w-[100px] h-[61px] text-orange bg-[#E7E7E7] font-satoshi'>Logo</button>
        

        <div className='flex items-center border-[0.5px] border-[#D1D1D1] rounded-[49px] p-2 gap-[109px]'>
            <button className='flex items-center justify-center hover:ring-orange focus:ring focus:ring-[#FCB4A5] focus:bg-orange font-sans focus:text-white rounded-[49px] gap-2 p-6'>
                <svg className="stroke-black hover:stroke-orange focus:stroke-white" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 21.5V7.5C8 6.57003 8 6.10504 8.10222 5.72354C8.37962 4.68827 9.18827 3.87962 10.2235 3.60222C10.605 3.5 11.07 3.5 12 3.5C12.93 3.5 13.395 3.5 13.7765 3.60222C14.8117 3.87962 15.6204 4.68827 15.8978 5.72354C16 6.10504 16 6.57003 16 7.5V21.5M5.2 21.5H18.8C19.9201 21.5 20.4802 21.5 20.908 21.282C21.2843 21.0903 21.5903 20.7843 21.782 20.408C22 19.9802 22 19.4201 22 18.3V10.7C22 9.57989 22 9.01984 21.782 8.59202C21.5903 8.21569 21.2843 7.90973 20.908 7.71799C20.4802 7.5 19.9201 7.5 18.8 7.5H5.2C4.07989 7.5 3.51984 7.5 3.09202 7.71799C2.71569 7.90973 2.40973 8.21569 2.21799 8.59202C2 9.01984 2 9.57989 2 10.7V18.3C2 19.4201 2 19.9802 2.21799 20.408C2.40973 20.7843 2.71569 21.0903 3.09202 21.282C3.51984 21.5 4.0799 21.5 5.2 21.5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Jobs
            </button>
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