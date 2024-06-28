import React from 'react'
import openbadge from '../assets/openbadge.svg'
import coin from '../assets/coin.svg'
import location from '../assets/location.svg'

function JobRole({role,postedOn,place,salary,available}) {
  return (
    <div className='flex flex-col h-min w-fit ml-[100px] my-9 gap-6'>

                  <div className='flex items-center gap-3'>
                    <div className='font-sans font-semibold text-[35px] text-[#3d3d3d]'>{role}</div>
                    <div className='rounded-full h-1 w-1 bg-[#d1d1d1]'></div>
                    <div className='font-sans text-[14px] text-[#888888]'>{postedOn}</div>
                    {available && <img src={openbadge} alt="open" />}
                  </div>

                  <div className='flex items-center gap-4'>
                    <div className='flex gap-2 font-sans font-medium text-[20px] text-[#5d5d5d]'>
                        <img src={location} alt="location" />
                        {place} 
                    </div>
                    <div className='rounded-full h-1 w-1 bg-[#d1d1d1]'></div>
                    <div className='flex gap-3 font-sans font-medium text-[20px] text-[#5d5d5d]'>
                        <img src={coin} alt="Pay range" />
                        {salary}
                    </div>
                  </div>

                </div>
  )
}

export default JobRole