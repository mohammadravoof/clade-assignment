import React from 'react'
import HeaderButton from './uielements/HeaderButton'

function Header() {
  return (
    <div className='flex flex-row gap-[72px] pl-[100px] border-[1px] border-[#e7e7e7] w-full h-[67px]'>
        <HeaderButton name={"Job preview"}/>
        <HeaderButton name={"Applicants"}/>
        <HeaderButton name={"Match"}/>
        <HeaderButton name={"Messages"}/>
    </div>
  )
}

export default Header