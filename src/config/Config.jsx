import { useEffect } from 'react'
import { Store } from '../store/store'
import './Config.css'

export const Config = () => {
  const store = Store()
  // if config button is showing then hide this component, else show it
  const show = store.show1 ? 'hide' : 'show'

  useEffect(() => {
    localStorage.setItem('grid', JSON.stringify({ rows: store.rows, columns: store.columns }))
  }, [store.rows, store.columns])

  useEffect(() => {
    localStorage.setItem('wallpaperIndex', store.wallpaperIndex)
  }, [store.wallpaperIndex])

  return (
    <div className={`config ${show}`}>
      <button className='button--close' onClick={() => store.toggleShow1()}></button>
      <button className='button--change-wallpaper' onClick={() => store.changeWallpaper()}>
        change wallpaper
      </button>
      <div className='grid-layout'>
        <h2>Grid Layout</h2>
        <div>
          <p>Rows:</p>
          <p className='btn-set'>
            <button
              onClick={() => {
                store.setRows(store.rows - 1)
              }}
            >
              -
            </button>
            {store.rows}
            <button
              onClick={() => {
                store.setRows(store.rows + 1)
              }}
            >
              +
            </button>
          </p>
        </div>
        <div>
          <p>Columns:</p>
          <p className='btn-set'>
            <button
              onClick={() => {
                store.setColumns(store.columns - 1)
              }}
            >
              -
            </button>
            {store.columns}
            <button
              onClick={() => {
                store.setColumns(store.columns + 1)
              }}
            >
              +
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
