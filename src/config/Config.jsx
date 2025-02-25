import { Store } from '../store/store'
import './Config.css'

export const Config = () => {
  const store = Store()
  // if config button is showing then hide this component, else show it
  const show = store.show1 ? 'hide' : 'show'

  return (
    <div className={`config ${show}`}>
      <button
        className='button--close'
        onClick={() => store.toggleShow1()}
      ></button>
      <button
        className='button--change-wallpaper'
        onClick={() => store.changeWallpaper()}
      >
        change wallpaper
      </button>
    </div>
  )
}
