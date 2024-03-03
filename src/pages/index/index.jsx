import Taro from '@tarojs/taro'
import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { getMiner } from '../../actions/miner'
import { Miner } from '../../components/Miner' 
import { realtimedata } from '../../socket/websocket'
import { NavBar } from '../../components/Navbar'
import './index.scss'


@connect(({ miner }) => ({
  miner
}), (dispatch) => ({
  getMiners () {
    dispatch(getMiner())
  }
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '',
    usingComponents: {
        'NavBar': '../../components/Navbar', // 书写第三方组件的相对路径
    },
}
  componentWillReceiveProps (nextProps) {
  }
  componentWillMount() {
    this.getMinerList()
  }

  componentDidMount() {
    //realtimedata()
    // Taro.setNavigationBarTitle({
    //   title: 'mmmmminers'
    // })
    // Taro.connectSocket({
    //       url: 'wss://asteroids.dev.mediasia.cn/miners',
    //       method: 'GET'
    //    })

    // Taro.onSocketOpen(function (res) {
    //     console.log('WebSocket连接已打开！',res)
    //   })
  }
  componentWillUnmount () { }

  componentDidShow () { 
    
  }

  componentDidHide () { }

  getMinerList(){
    this.props.getMiners()
  }
  render () {
    const { miners } = this.props.miner

    return (
      <View className='index'>
      <NavBar />
          <View className='label'>   
              <Text className='tag'>
                250 YEARS
              </Text>
          </View>
          <View className='plate'> 
            
            { miners && miners.map((miner=>{
                    return <Miner miner={miner} />
                }))} 
            </View>
         
        
        {/* <View className='tag'><Image src={test} /></View> */}
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button> */}
        {/* <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button> */}
        {/* <View><Text>{this.props.counter.num}</Text></View> */}
        {/* <View><Text className='text'>Hello, World</Text></View> */}
        </View>
  
    )
  }
}

export default Index

