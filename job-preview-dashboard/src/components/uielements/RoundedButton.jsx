import React from 'react'

function RoundedButton({logo,name}) {
  return (
    <button className='group flex items-center justify-center h-[58px] text-[#b0b0b0] hover:text-orange hover:ring hover:ring-orange hover:bg-[#fef4f2] focus:ring focus:ring-[#FCB4A5] focus:bg-orange font-sans focus:text-white rounded-[49px] gap-2 p-6'>
                {logo}
                {name}
            </button>
  )
}

export default RoundedButton