import { Component } from 'react'
import { Provider } from 'react-redux'
import { getWindowHeight } from './utils/utils'
import configStore from './store'
import 'taro-ui/dist/style/index.scss'
import './app.scss'

const store = configStore()

class App extends  Component {
  componentDidMount () {
    const height = getWindowHeight()
    console.log(height)
  }

  componentDidShow () {}

  componentDidHide () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App