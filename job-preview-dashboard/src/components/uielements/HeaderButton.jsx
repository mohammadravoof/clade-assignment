import React from 'react'

function HeaderButton({ name, onClick, isSelected}) {
  return (
    <button className={`flex items-center justify-center relative group font-sans text-xl ${isSelected ?  'font-semibold text-orange' : 'font-medium  text-[#888888]'}`}
    onClick={onClick}>
            {name}
    <div className={`absolute ${isSelected ? 'bg-orange' : ''} h-[2px] w-[65px] bottom-0`}></div>
    </button>
  )
}

export default HeaderButton