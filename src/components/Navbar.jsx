import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import '../ASSETS/webfont/uiw-font.scss'
import star from '../images/Star03.png'
import './Navbar.scss'

export const NavBar = () =>{
        return ( <View className='navbar'>
                            <View className='nav'>
                                <Image className='logo' src={star} />
                                {/* <Text className='uiw-font uiw-font-Planet'></Text> */}
                           </View>
                        </View>
        );
}