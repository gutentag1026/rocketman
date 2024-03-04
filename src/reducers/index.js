import { combineReducers } from 'redux'
import miner from './miner'
import planet from './planet'
export default combineReducers({
  miner, planet
})
