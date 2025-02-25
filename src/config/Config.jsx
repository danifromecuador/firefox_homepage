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
      <div className='grid-layout'>
        <h2>Grid Layout</h2>
        <div>
          <p>Rows:</p>
          <p className='btn-set'>
            <button>-</button>
            {3}
            <button>+</button>
          </p>
        </div>
        <div>
          <p>Columns:</p>
          <p className='btn-set'>
            <button>-</button>
            {3}
            <button>+</button>
          </p>
        </div>
      </div>
    </div>
  )
}
