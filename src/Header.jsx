import React from 'react'
import nobelprize from './nobelprize.jpg'
const Header = () => {
  return (
    <div>
         <h2>The Nobel Prize🏆</h2>
      <img className='Nobelprizeicon' src={nobelprize}></img>
    </div>
  )
}

export default Header