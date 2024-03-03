import Taro from '@tarojs/taro'

export function getWindowHeight(showTabBar = true) {
    const NAVIGATOR_HEIGHT = 44
    const TAB_BAR_HEIGHT = 50
    const info = Taro.getSystemInfoSync()
    const { windowHeight, statusBarHeight, titleBarHeight } = info
    const tabBarHeight = showTabBar ? TAB_BAR_HEIGHT : 0
  
    if (process.env.TARO_ENV === 'rn') {
      return windowHeight - statusBarHeight - NAVIGATOR_HEIGHT - tabBarHeight
    }
  
    if (process.env.TARO_ENV === 'h5') {
      return `${windowHeight - tabBarHeight}px`
    }
  
    if (process.env.TARO_ENV === 'alipay') {
      return `${windowHeight - statusBarHeight - titleBarHeight + (showTabBar ? 0 : TAB_BAR_HEIGHT)}px`
    }
  
    return `${windowHeight}px`
}