import React from 'react'
import '../style/header.css'
import logo1 from '../image/logo1.png'
import logo2 from '../image/logo2.png'
import logo3 from '../image/logo3.png'
function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__wrapper">
        <ul>
            <li>Для мужчин</li>
            <li>Для женщин</li>
            <li>Для детей</li>
        </ul>
        <img src={logo1} alt="" />
        <ul>
            <li>Оплата</li>
            <li>Доставка</li>
        </ul>
        <div className="logo__wrapper">
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
        </div>
        </div>
        
        
      </div>
    </header>
  )
}

export default Header
