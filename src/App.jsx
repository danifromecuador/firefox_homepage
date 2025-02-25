// TODO: include a black background image
import { Store } from './store/store'
import { Config } from './config/Config'
import './App.css'

export const App = () => {
  const store = Store()
  const show1 = store.show1 ? 'show' : 'hide'
  const [rows, columns] = [store.rows, store.columns]

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
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className='row'>
            {Array.from({ length: columns }).map((_, index) => (
              <div key={index} className='link-container'></div>
            ))}
          </div>
        ))}
      </div>
      <Config />
    </div>
  )
}
