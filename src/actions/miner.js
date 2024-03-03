import { GETMINERS } from '../constants/counter'
import { getMiners } from '../service/api'
  
  export const getMiner = () => {
    return dispatch => {
        getMiners('https://asteroids.dev.mediasia.cn/miners')
            .then((res) => {
                dispatch({
                    type:'GETMINERS',
                    payload: res || []
                })
            })
    }
  }
