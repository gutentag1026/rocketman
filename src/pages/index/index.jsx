import { Component, useState } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { getMiner, getPlanet } from '../../actions/miner'
import { Miner } from '../../components/Miner' 
import { NavBar } from '../../components/Navbar'
import io from 'socket.io-client'
import './index.scss'
const env = process.env.TARO_ENV 

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

  constructor(props){
    super(props)
    this.state = {
      minerList: [],
      planetList: []
    }
  }
 
  componentWillReceiveProps (nextProps) {
   // console.log('props',this.props, 'nextProps',nextProps)
  }
  componentWillMount() {
    this.getMinerList()
    this.getPlanetList()
  }

  componentDidMount() {
    let socket
    if (env === 'h5'){
      socket = io('http://localhost:3001/') 
    }
    if (env === 'h5'){
    socket.on('connection',()=>{
      console.log('someone connected');
  })
    socket.on('tick', (message) => {
     // console.log(message)
      this.setState({ minerList: message.miners })
      this.setState({ planetList: message.planets })
   
    })
    }
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
    const minerInfo = env === 'h5' ? this.state.minerList : miners
    const planetInfo = env === 'h5' ? this.state.planetList : planets

    const planetIdConverter = {}
    planetInfo.forEach(planet=>{
      planetIdConverter[planet._id] = planet.name

    })
  //  console.log(planetIdConverter)
    return (
      <View className='index'>
      <NavBar />
          <View className='label'>   
              <Text className='tag'>
              250 YEARS
              </Text>
          </View>
          <View className='plate'> 
           
            { planetInfo && minerInfo && minerInfo.map((miner=>{
                    return <Miner key={miner._id} miner={miner} planet={planetIdConverter[miner.planet._id]} />
                }))} 
            </View>
        </View>

    )
  }
}

export default Index

