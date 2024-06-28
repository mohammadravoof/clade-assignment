import React from 'react'
import JobRole from './JobRole.jsx'
import Requirement from './Requirement.jsx'
import AboutTheJob from './AboutTheJob.jsx'
import CompanyProfile from './CompanyProfile.jsx'
import MainPanelLine from './uielements/MainPanelLine.jsx'



function MainPanel() {
  return (
    <div className='flex flex-1 flex-col'>
        <JobRole 
            role={"Senior Product Designer"} 
            postedOn={"posted 2 days ago"} 
            place={"Delaware,Usa"} 
            salary={"$300k-$400k"} 
            available/>
          <MainPanelLine/>
        <Requirement/>
            <MainPanelLine/>
        <AboutTheJob/>
            <MainPanelLine/>
        <CompanyProfile/>
    </div>
  )
}

export default MainPanel