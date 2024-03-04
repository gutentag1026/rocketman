import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import './index.scss'

class Index extends Component {
  componentWillReceiveProps (nextProps) {
    //console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='labelbox'>
        <View className='labe'><Text>planet</Text></View>        
      </View>
    )
  }
}

export default Index

