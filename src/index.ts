import { myContainer } from './inversify.config'
import { TYPES } from './types'
import { Star } from './star'

class App {
  createUniverse() {
    const star = myContainer.get<Star>(TYPES.Star)
    star.bark('alatfar')
  }
}

const app = new App()
app.createUniverse()
