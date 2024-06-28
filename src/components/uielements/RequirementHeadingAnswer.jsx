import React from 'react'

function RequirementHeadingAnswer({heading,answer}) {
  return (
    <div className='flex flex-col w-[170px] h-min gap-2 '>
        <div className='font-sans font-medium text-[14px] text-[#6e6e6e]'>{heading}</div>
        <div className='font-sans font-semibold text-[#3d3d3d]'>{answer}</div>
      </div>
  )
}

export default RequirementHeadingAnswer