import React from 'react'
import figma from '../assets/figma.svg'
import adobeillustrator from '../assets/adobeillustrator.svg'
import adobexd from '../assets/adobexd.svg'
import Skills from './uielements/Skills'
import RequirementHeadingAnswer from './uielements/RequirementHeadingAnswer'

function Requirement() {
  return (
    <div className='flex h-min w-fit ml-[100px] my-9 gap-16'>

      <div className='flex flex-col w-[170px] gap-2 font-sans font-medium text-[14px] text-[#6e6e6e]'>
        Skills Required
        <div className='flex flex-col gap-2'>
          <Skills icon={figma} name={"Figma"}/>
          <Skills icon={adobeillustrator} name={"Adobe Illustrator"}/>
          <Skills icon={adobexd} name={"Adobe XD"}/>
        </div>
      </div>

      <RequirementHeadingAnswer heading={"Preferred Language"} answer={"English"}/>
      <RequirementHeadingAnswer heading={"Type"} answer={"Full time"}/>

      <div className='flex flex-col w-fit h-min gap-2 '>
        <div className='font-sans font-medium text-[14px] text-[#6e6e6e]'>Years of Experience</div>
        <div className='font-sans font-semibold text-[#3d3d3d]'>3+ Years of Experience</div>
      </div>

    </div>
  )
}

export default Requirement