import { combineReducers } from 'redux'
import { addStars } from './star'

const todo = combineReducers({
  addStars,
})

export default todo
