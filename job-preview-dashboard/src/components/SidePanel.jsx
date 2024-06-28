import React from 'react'
import trash from '../assets/trash.svg'
import editsvg from '../assets/edit.svg'
import applicants from '../assets/applicants.svg'
import matches from '../assets/matches.svg'
import messages from '../assets/messages.svg'
import views from '../assets/views.svg'
import SidePanelData from './uielements/SidePanelData'
import SidePanelLine from './uielements/SidePanelLine'

function SidePanel() {
  return (
    <div className='flex justify-center border-t border-l border-[#e7e7e7] bg-[#fcfcfc] w-[409px] h-screen ml-auto'>
              <div className='flex flex-col w-[360px] h-min mt-9 gap-6'>

                <div className='flex flex-row w-[360px] gap-4 h-min'>
                  <button className='flex items-center justify-center w-[172px] rounded-lg gap-[10px] px-6 py-3 border-[0.8px] border-orange bg-[#fef4f2] font-sans font-medium text-orange'>
                    <img src={trash} alt="trash" />
                    Delete job
                  </button>
                  <button className='flex items-center justify-center w-[172px] rounded-lg gap-[10px] px-6 py-3 border-[2px] border-[#fed3ca] bg-orange font-sans font-medium text-white'>
                    <img src={editsvg} alt="" />
                    Edit job
                  </button>
                </div>

                <div className='flex flex-col w-[360px] h-min rounded-[5px] gap-4 p-3'>

                    <SidePanelData imagesvg={applicants} name={"Applicants"} number={"400"}/>
                    <SidePanelLine/>
                    <SidePanelData imagesvg={matches} name={"Matches"} number={"100"}/>
                    <SidePanelLine/>
                    <SidePanelData imagesvg={messages} name={"Messages"} number={"147"}/>
                    <SidePanelLine/>
                    <SidePanelData imagesvg={views} name={"Views"} number={"800"}/>
                    

                </div>

              </div>
              </div>
  )
}

export default SidePanel