import './App.css'
import backgroundImage from './assets/backgrounds/-red-sunset-wallpaper.jpg'
// import backgroundImage1 from './assets/backgrounds/0001-pixels.jpg';

export const App = () => {
  // const bgImgUrl = ['./assets/backgrounds/-red-sunset-wallpaper.jpg', './assets/backgrounds/0001-pixels.jpg']
  return (
    <div className='app'>
      Hello Dani
      <button type='button'>change background</button>
      <img
        src={backgroundImage}
        alt='background-image'
        className='background-image'
      />
    </div>
  )
}
