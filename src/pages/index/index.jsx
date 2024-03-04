import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { getMiner, getPlanet } from '../../actions/miner'
import { Miner } from '../../components/Miner' 
import { realtimedata } from '../../socket/websocket'
import { NavBar } from '../../components/Navbar'
import './index.scss'


@connect(({ miner, planet }) => ({
  miner,
  planet
}), (dispatch) => ({
  getMiners () {
    dispatch(getMiner())
  },
  getPlanet () {
    dispatch(getPlanet())
  }
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '',
    usingComponents: {
        'NavBar': '../../components/Navbar', 
    },
}
  componentWillReceiveProps (nextProps) {
  }
  componentWillMount() {
    this.getMinerList()
    this.getPlanetList()
  }

  componentDidMount() {
    realtimedata()
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
  getPlanetList(){
    this.props.getPlanet()
  }
  render () {
    const { miners } = this.props.miner
    const { planets } = this.props.planet
  
    const planetIdConverter = {}
    planets.forEach(planet=>{
      planetIdConverter[planet._id] = planet.name

    })
    return (
      <View className='index'>
      <NavBar />
          <View className='label'>   
              <Text className='tag'>
                250 YEARS
              </Text>
          </View>
          <View className='plate'> 
            
            { planetIdConverter && miners && miners.map((miner=>{
                    return <Miner miner={miner} planet={planetIdConverter[miner.planet]}/>
                }))} 
            </View>
        </View>
  
    )
  }
}

export default Index

