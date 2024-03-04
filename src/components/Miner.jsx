import { View, Image, Text } from '@tarojs/components'
import arrow from './arrow_forward_ios.svg'

const statusConverter = {
    0: 'Idle',
    1: 'Travelling',
    2: 'Mining',
    3 : 'Transfering'
}
 export const Miner = ({miner, planet}) => {
   // console.log('planet',planet)
    return  <View className='card'>
    <View className='leftframe'>
    <View className='planet'>
        <Text>{planet}</Text>
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