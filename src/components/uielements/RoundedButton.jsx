import React from 'react'

function RoundedButton({logo,name,onClick,isSelected}) {
  return (
    <button className={`group flex items-center justify-center h-[58px] rounded-[49px] gap-2 p-4 font-sans font-medium text-xl
      ${isSelected ? 'ring-[2px] ring-[#FCB4A5] bg-orange text-white' : 'text-[#b0b0b0] hover:text-orange hover:ring hover:ring-orange hover:bg-[#fef4f2]'}
     `}
      onClick={onClick}>
                {logo}
                {name}
            </button>
  )
}

export default RoundedButton