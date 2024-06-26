import React from 'react'
import reddot from './reddot.svg'

function MessageSquare() {
  return (
        <div className='relative'>
        <svg className="relative z-10 group-focus:z-20 stroke-[#b0b0b0] group-hover:stroke-orange group-focus:stroke-white" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8.3C3 6.61984 3 5.77976 3.32698 5.13803C3.6146 4.57354 4.07354 4.1146 4.63803 3.82698C5.27976 3.5 6.11984 3.5 7.8 3.5H16.2C17.8802 3.5 18.7202 3.5 19.362 3.82698C19.9265 4.1146 20.3854 4.57354 20.673 5.13803C21 5.77976 21 6.61984 21 8.3V13.7C21 15.3802 21 16.2202 20.673 16.862C20.3854 17.4265 19.9265 17.8854 19.362 18.173C18.7202 18.5 17.8802 18.5 16.2 18.5H9.68375C9.0597 18.5 8.74767 18.5 8.44921 18.5613C8.18443 18.6156 7.9282 18.7055 7.68749 18.8285C7.41617 18.9671 7.17252 19.162 6.68521 19.5518L4.29976 21.4602C3.88367 21.7931 3.67563 21.9595 3.50054 21.9597C3.34827 21.9599 3.20422 21.8906 3.10923 21.7716C3 21.6348 3 21.3684 3 20.8355V8.3Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <img className='absolute top-0 right-0 z-20 group-focus:z-10' src={reddot} alt="reddot" />
        </div>
        
      )
}

export default MessageSquare
