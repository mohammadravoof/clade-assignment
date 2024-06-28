import React from 'react'

function Skills({icon,name}) {
  return (
    <div className='flex w-fit gap-[7px] px-1 py-[6px] border border-[#d0d5dd] rounded-md font-sans font-medium text-xs text-[#344054]'>
            <img src={icon} alt={name} />
            {name}
          </div>
  )
}

export default Skills