import React from 'react'
import atlassiancompanylogo from '../assets/atlassiancompanylogo.svg'
import CompanyProfileGrid from './uielements/CompanyProfileGrid'

function CompanyProfile() {
  return (
    <div className='flex flex-col ml-[100px] my-9 gap-4 w-fit h-fit'>

      <div className='flex items-center py-[10px] pr-[10px] gap-3 font-sans font-medium text-xl text-[#4f4f4f]'>
        <img src={atlassiancompanylogo} alt="Atlassian" />
        Atlassian
      </div>

      <div className='grid grid-cols-2 gap-x-12 gap-y-6 w-fit mb-9'>
        
        <CompanyProfileGrid heading={"Company size"} answer={"1k - 2k Employees"}/>
        <CompanyProfileGrid heading={"Type"} answer={"Private"}/>
        <CompanyProfileGrid heading={"Sector"} answer={"Information Technology, Infrastructure"}/>
        <CompanyProfileGrid heading={"Funding"} answer={"Bootstrapped"}/>
        <CompanyProfileGrid heading={"Founded In"} answer={"2019"}/>
        <CompanyProfileGrid heading={"Founded By"} answer={"Scott Farquhar, Mike Cannon-Brookes"}/>
        
      </div>

    </div>
  ) 
}

export default CompanyProfile