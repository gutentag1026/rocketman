import { GETMINERS, GETPLANETS } from '../constants/counter'
import { getMiners } from '../service/api'
// import '@tarojs/async-await'
const regeneratorRuntime = global.regeneratorRuntime
export const getMiner = () => {
   return dispatch => {
       getMiners('https://asteroids.dev.mediasia.cn/miners')
           .then((res) => {
               dispatch({
                   type:GETMINERS,
                   payload: res || []
               })
           })
   }
 }

  export const getPlanet = () => {
    return dispatch => {
        getMiners('https://asteroids.dev.mediasia.cn/planets')
            .then((res) => {
                dispatch({
                    type:GETPLANETS,
                    payload: res || []
                })
            })
    }
  }

  export const getMiner1 = (msg) => {
    //console.log('ff',msg)
    return dispatch => {
                dispatch({
                    type:GETMINERS,
                    payload: msg.miners || []
                })
  
    }
  }