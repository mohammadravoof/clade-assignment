import React, { useState } from 'react'
import HeaderButton from './uielements/HeaderButton'

function Header() {

  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <div className='flex fixed top-[109px] flex-row gap-[72px] pl-[100px] border-[1px] border-[#e7e7e7] w-full h-[67px] bg-white'>
        <HeaderButton name={"Job preview"} 
                      isSelected={selectedButton === 1}
                      onClick={() => handleButtonClick(1)} />
        <HeaderButton name={"Applicants"} 
                      isSelected={selectedButton === 2}
                      onClick={() => handleButtonClick(2)}/>
        <HeaderButton name={"Match"} 
                      isSelected={selectedButton === 3}
                      onClick={() => handleButtonClick(3)}/>
        <HeaderButton name={"Messages"}
                      isSelected={selectedButton === 4}
                      onClick={() => handleButtonClick(4)}/>
    </div>
  )
}

export default Header