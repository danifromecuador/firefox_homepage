import bgImg1 from '../assets/backgrounds/black.png'
import bgImg2 from '../assets/backgrounds/0001-lake-sunset.jpg'
import bgImg3 from '../assets/backgrounds/0001-pixels.jpg'
import bgImg4 from '../assets/backgrounds/1aw46silum8e1.jpeg'
import bgImg5 from '../assets/backgrounds/00007-minimal-forest.jpg'
import bgImg6 from '../assets/backgrounds/00013-island.jpg'
import bgImg7 from '../assets/backgrounds/divka-se-sluchatky-cachyos.jpg'
import bgImg8 from '../assets/backgrounds/rejection-journey-wallpaper.jpg'
import bgImg9 from '../assets/backgrounds/-red-sunset-wallpaper.jpg'

export const wallpapersArray = [bgImg1, bgImg2, bgImg3, bgImg4, bgImg5, bgImg6, bgImg7, bgImg8, bgImg9]

let index = localStorage.getItem('wallpaperIndex') || 0
export const changeWallpaper = (set) => {
  if (index >= wallpapersArray.length - 1) index = 0
  else index++

  return set(() => ({
    wallpaperIndex: index,
  }))
}
