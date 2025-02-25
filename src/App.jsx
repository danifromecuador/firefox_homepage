// TODO: include a black background image
import { Store } from './store/store'
import { Config } from './config/Config'
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
  const store = Store()
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

  return (
    <div className='app'>
      <img src={imagesArray[4]} className='background-image' />
      <button
        type='button'
        className={`button--config ${store.show1 || 'hide'}`}
        onClick={() => store.toggleShow1()}
      ></button>
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
      <Config />
    </div>
  )
}
