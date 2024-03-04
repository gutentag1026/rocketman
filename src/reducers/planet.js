import { GETPLANETS } from '../constants/counter'

const INITIAL_STATE = {
  planets: []
}

export default function planet (state = INITIAL_STATE, action) {
  switch (action.type) {
     case GETPLANETS:
        const planetList = [...state.planets,...action.payload]
       // const uniqueMiners = Array.from(new Set(minerList))
        return {planets: planetList}
     default:
       return state
  }
}
