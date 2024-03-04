import io from 'socket.io-client'

 export const realtimedata = () => {
   const socket = io('http://localhost:3001/') 
   
   socket.on('tick', message => {
       console.log('tick',message)
   })
 }


// import Taro from '@tarojs/taro'

// export const realtimedata = () => {
//   Taro.connectSocket({
//   url: 'ws://localhost:3001/',
//   success: function () {
//     console.log('connect success')
//   }
//  }).then(task => {
//   //  task.onOpen(function () {
//   //    console.log('onOpen')
//   //    // task.send({ data: 'xxx' })
//   //  })
//    task.onMessage(function (msg) {
//      console.log('onMessage: ', msg)
//      task.close()
//    })
//    task.onError(function () {
//      console.log('onError')
//    })
//    task.onClose(function (e) {
//      console.log('onClose: ', e)
//    })
//  })
// }