import { View, Image, Text } from '@tarojs/components'
import arrow from '../ASSETS/SVG/arrow_forward_ios.svg'
const planetIdConverter = {
    "65e2ffaa6d93e553445b1677":"Planet 1",
    "65e2ffaa6d93e553445b1678":"Planet 2",
    "65e2ffaa6d93e553445b1679":"Planet 3",
}
const statusConverter = {
    0: 'Idle',
    1: 'Travelling',
    2: 'Mining',
    3 : 'Transfering'
}
 export const Miner = ({miner}) => {
    return  <View className='card'>
    <View className='leftframe'>
    <View className='planet'>
        <Text>123{planetIdConverter[miner.planet]}</Text>
    </View>
    <View className='miner'>
        <Text>{miner.name}</Text>
    </View>
    <View className='status'>
      <Text className='statustext'>{statusConverter[miner.status]}</Text>
    </View> 
    </View>
    <View className='rightframe'>
    <View className='metrics'>
        <View className='key'>
        Carry Capacity
        </View>
        <View className={miner.minerals == miner.carryCapacity ? 'val full' : 'val'}>
        {`${miner.minerals}/${miner.carryCapacity}`}
        </View>
    </View>
    <View className='metrics'>
        <View className='key'>
        Travel Speed
        </View>
        <View className='val'>
        {miner.travelSpeed}
        </View>
    </View>
    <View className='metrics'>
        <View className='key'>
        Position
        </View>
        <View className='val'>
        { parseInt(miner.x) + ',' + parseInt(miner.y) }
        </View>
    </View>
    </View>
    <View className='arrow'>
    <Image className='forward' src={arrow} />
    </View>
    </View>
    }