// TODO: include a black background image
import { useState } from 'react'
import './App.css'
import bgImg1 from './assets/backgrounds/-red-sunset-wallpaper.jpg'
import bgImg2 from './assets/backgrounds/0001-lake-sunset.jpg'
import bgImg3 from './assets/backgrounds/0001-pixels.jpg'
import bgImg4 from './assets/backgrounds/1aw46silum8e1.jpeg'
import bgImg5 from './assets/backgrounds/00007-minimal-forest.jpg'
import bgImg6 from './assets/backgrounds/00013-island.jpg'
import bgImg7 from './assets/backgrounds/divka-se-sluchatky-cachyos.jpg'
import bgImg8 from './assets/backgrounds/rejection-journey-wallpaper.jpg'

export const App = () => {
  const imagesArray = [
    bgImg1,
    bgImg2,
    bgImg3,
    bgImg4,
    bgImg5,
    bgImg6,
    bgImg7,
    bgImg8,
  ]
  const [index, setIndex] = useState(0)
  const changeBackground = () =>
    index >= imagesArray.length - 1 ? setIndex(0) : setIndex(index + 1)

  return (
    <div className='app'>
      <img src={imagesArray[index]} className='background-image' />
      <button type='button' onClick={changeBackground}></button>
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
