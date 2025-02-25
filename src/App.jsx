// TODO: include a black background image
import { Store } from './store/store'
import { Config } from './config/Config'
import './App.css'

export const App = () => {
  const store = Store()
  const show1 = store.show1 ? 'show' : 'hide'

  return (
    <div className='app'>
      <img
        src={store.wallpapersArray[store.wallpaperIndex]}
        className='background-image'
      />
      <button
        type='button'
        className={`button--config ${show1}`}
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
