import { useState } from 'react'
import './App.css'
import bgImg1 from './assets/backgrounds/-red-sunset-wallpaper.jpg'
import bgImg2 from './assets/backgrounds/0001-pixels.jpg'

export const App = () => {
  const imagesArray = [bgImg1, bgImg2]
  const [index, setIndex] = useState(0)
  const changeBackground = () => {
    setIndex((index) => index + 1)
  }

  return (
    <div className='app'>
      Hello Dani
      <button type='button' onClick={() => changeBackground()}>
        change background
      </button>
      <img
        src={imagesArray[index]}
        alt='background-image'
        className='background-image'
      />
    </div>
  )
}
