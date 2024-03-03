import { ADD, MINUS, GETMINERS } from '../constants/counter'

const INITIAL_STATE = {
  num: 0,
  miners: []
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
     case GETMINERS:
        return {
          ...state,
          miners: state.miners
        }
     default:
       return state
  }
}
