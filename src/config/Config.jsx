import PropTypes from 'prop-types'
import { Store } from '../store/store'
import './Config.css'

export const Config = () => {
  const store = Store()
  return (
    <div className={store.show1 && 'hide'}>
      <button onClick={() => store.toggleShow1()}>X</button>
      Config Component
    </div>
  )
}

Config.propTypes = {
  show: PropTypes.string,
}
