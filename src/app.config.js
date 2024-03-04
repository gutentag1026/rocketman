export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/planet/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#251B2D',
    navigationBarTitleText: 'Miner',
    navigationBarTextStyle: 'white',
    backgroundColor:'#0D0216',
    backgroundColorBottom:'#0D0216',
    navigationStyle: 'custom'
    
  },
  tabBar: {
    custom: true,
    color:'#FFFFFF',
    selectedColor: '#FFFFFF',
    backgroundColor: '#0D0216',
    list: [
        {
          pagePath: 'pages/index/index',
          iconPath:'./images/miners-off.png',
          text:'Miners',
          selectedIconPath:'./images/miners-on.png',
          
        },
        {
          pagePath:'pages/planet/index',
          iconPath:'./images/asteroids-off.png',
          text:'Asteroids',
          selectedIconPath:'./images/asteroids-on.png',
        }
    ]
  }
})
