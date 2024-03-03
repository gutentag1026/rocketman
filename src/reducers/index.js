import { combineReducers } from 'redux'
import counter from './counter'
import miner from './miner'
export default combineReducers({
  counter, miner
})
