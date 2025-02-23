import { useState } from 'react'
import './App.css'
import bgImg1 from './assets/backgrounds/-red-sunset-wallpaper.jpg'
import bgImg2 from './assets/backgrounds/0001-pixels.jpg'

// TODO: include a black background image

export const App = () => {
  const imagesArray = [bgImg1, bgImg2]
  const [index, setIndex] = useState(0)
  const changeBackground = () =>
    index >= imagesArray.length - 1 ? setIndex(0) : setIndex(index + 1)

  return (
    <div className='app'>
      <img
        src={imagesArray[index]}
        alt='background-image'
        className='background-image'
      />
      <button type='button' onClick={() => changeBackground()}>
        change background
      </button>
      <div className='main'>
        <div className='row'>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
        </div>
        <div className='row'>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
        </div>
        <div className='row'>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
        </div>
        <div className='row'>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
          <div className='link-container'></div>
        </div>
      </div>
    </div>
  )
}
