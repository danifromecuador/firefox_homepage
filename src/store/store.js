import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { changeWallpaperIndex, wallpapersArray } from './wallpapers.js'
import { setRows, setColumns } from './grid.js'

export const Store = create(
  devtools((set) => ({
    show1: true,
    toggleShow1: () => set((state) => ({ show1: !state.show1 })),

    wallpapersArray: wallpapersArray,
    wallpaperIndex: 0,
    changeWallpaperIndex: () => changeWallpaperIndex(set),

    rows: 3,
    columns: 6,
    setRows: (rows) => setRows(set, rows),
    setColumns: (columns) => setColumns(set, columns),
  })),
)
