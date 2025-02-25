import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { changeWallpaper, wallpapersArray } from './wallpapers.js'

export const Store = create(
  devtools((set) => ({
    show1: true,
    wallpapersArray: wallpapersArray,
    wallpaperIndex: 0,
    toggleShow1: () => set((state) => ({ show1: !state.show1 })),
    changeWallpaper: () => changeWallpaper(set),
  })),
)
