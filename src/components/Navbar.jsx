import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import '../ASSETS/webfont/uiw-font.scss'
import './Navbar.scss'

export const NavBar = () =>{
        return ( <View className='navbar'>
                            <View className='nav'>
                                <Text className='uiw-font uiw-font-Planet'></Text>
                           </View>
                        </View>
        );
}