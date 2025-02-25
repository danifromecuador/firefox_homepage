import PropTypes from 'prop-types'
import { Store } from '../store/store'
import './Config.css'

export const Config = () => {
  const store = Store()
  const show = store.show1 ? 'hide' : 'show'

  return (
    <div className={`config ${show}`}>
      <button
        className='button--close'
        onClick={() => store.toggleShow1()}
      ></button>
      <button className='button--change-wallpaper'>change wallpaper</button>
    </div>
  )
}

Config.propTypes = {
  show: PropTypes.string,
}
