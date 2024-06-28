import React from 'react'

function CompanyProfileGrid({heading,answer}) {
  return (
    <div className='flex flex-col w-[344px] gap-x-2'>
          <div className='font-sans font-medium text-sm text-[#6e6d6d]'>{heading}</div>
          <div className='font-sans font-medium text-[#3d3d3d]'>{answer}</div>
        </div>
  )
}

export default CompanyProfileGrid