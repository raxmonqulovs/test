import React from 'react'
import '../style/hero.css'
import shoes from '../image/shoes.png'
import down from '../image/down.png'
function Hero() {
  return (
    <section className='hero'>
      <div className="container">
        <div className="hero__wrapper">
            <div className="hero__card">
                <h4>Зимняя распродажа</h4>
                <h2>СКИДКИ ДО 90%</h2>
                <button>СМОТРЕТЬ МОДЕЛИ</button>
            </div>
            <div className="hero__card2">
                <h4>9 900 ₽ </h4>
                <h4>1 900 ₽ </h4>
                <img src={shoes} alt="" />
            </div>

        </div>
        <img className='down' src={down} alt="" />
      </div>
    </section>
  )
}

export default Hero
