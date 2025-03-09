import { useEffect, useRef } from 'react'
import { Store } from '../store/store'
import './Config.css'

export const Config = () => {
  const store = Store()
  // if config button is showing then hide this component, else show it
  const show = store.show1 ? 'hide' : 'show'
  // close Config component if a click is done outside this component
  const configRef = useRef(null)

  // save on local storage rows and columns
  useEffect(() => {
    localStorage.setItem('grid', JSON.stringify({ rows: store.rows, columns: store.columns }))
  }, [store.rows, store.columns])

  // save on local storage wallpaper
  useEffect(() => {
    localStorage.setItem('wallpaperIndex', store.wallpaperIndex)
  }, [store.wallpaperIndex])

  // Close Config component if a click is done outside this component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (configRef.current && !configRef.current.contains(event.target)) store.toggleShow1()
    }
    if (!store.show1) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [store])

  return (
    <div ref={configRef} className={`config ${show}`}>
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
