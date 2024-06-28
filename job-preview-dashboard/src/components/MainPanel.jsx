import React from 'react'
import JobRole from './JobRole'
import Requirement from './Requirement'
import AboutTheJob from './AboutTheJob'
import CompanyProfile from './CompanyProfile'
import MainPanelLine from './uielements/MainPanelLine'



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