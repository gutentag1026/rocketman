import { GETMINERS } from '../constants/counter'

const INITIAL_STATE = {
  miners: []
}

export default function miner (state = INITIAL_STATE, action) {
  switch (action.type) {
     case GETMINERS:
        const minerList = [...state.miners,...action.payload]
       // const uniqueMiners = Array.from(new Set(minerList))
        return {miners: minerList}
     default:
       return state
  }
}
