import { Component } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'

import './index.scss'

export default class Index extends Component {
  state = {
    selected: 0,
    color: '#000000',
    selectedColor: '#000000',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: '../images/miners-on.png',
        iconPath: '../images/miners-off.png',
        // text: 'Miners'
      },
      {
        pagePath: 'pages/planet/index',
        selectedIconPath: '../images/asteroids-on.png',
        iconPath: '../images/asteroids-off.png',
        // text: 'Asteroids'
      }
    ]
  }

   switchTab(index, url) {
     this.setSelected(index)

     Taro.switchTab({ url })
   }

  setSelected (idx ) {
    this.setState({
      selected: idx
    })
  }

  render() {
    const { list, selected, color, selectedColor } = this.state

    return (
      <CoverView className='tab-bar'>
        {list.map((item, index) => {
          return (
          <CoverView key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
            {/* <CoverView key={index} className='tab-bar-item'> */}
              <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
              <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView> 
            </CoverView>
          )
        })}
      </CoverView>
    )
  }
}