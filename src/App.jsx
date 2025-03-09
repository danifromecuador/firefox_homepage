import { Store } from './store/store'
import { Config } from './config/Config'
import './App.css'

export const App = () => {
  const store = Store()
  const show1 = store.show1 ? 'show' : 'hide'
  const [rows, columns] = [store.rows, store.columns]

  return (
    <div className='app'>
      <img src={store.wallpapersArray[store.wallpaperIndex]} className='background-image' />
      <div className='main'>
        {Array.from({ length: rows }).map((index) => (
          <div key={index} className='row'>
            {Array.from({ length: columns }).map((index) => (
              <div key={index} className='link-container'></div>
            ))}
          </div>
        ))}
      </div>
      <button type='button' className={`button--config ${show1}`} onClick={() => store.toggleShow1()}></button>
      <Config />
    </div>
  )
}
