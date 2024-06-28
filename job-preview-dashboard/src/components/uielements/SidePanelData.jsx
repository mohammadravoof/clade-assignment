import React from 'react'


function SidePanelData({imagesvg,name,number}) {
  return (
    <div className='flex flex-row w-[336px] h-min justify-between'>
                        <div className='flex items-center w-[135px] gap-[10px] p-[10px] font-sans font-medium text-[#4f4f4f] '>
                            <img src={imagesvg} alt="Applicants" />
                            {name}
                        </div>
                        <div className='flex w-[57px] items-center justify-center font-semibold font-sans text-xl text-[#3d3d3d]'>
                            {number}
                        </div>
                    </div>
  )
}

export default SidePanelData