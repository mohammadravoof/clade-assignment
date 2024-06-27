import React from 'react'

function HeaderButton({name}) {
  return (
    <button className='flex items-center justify-center relative group font-sans text-[#888888] focus:font-semibold focus:text-orange'>
            {name}
    <div className='absolute group-focus:bg-orange h-[2px] w-[65px] bottom-0'></div>
    </button>
  )
}

export default HeaderButton