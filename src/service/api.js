import Taro from '@tarojs/taro'

export async function getMiners (minersUrl) {
    try {
        const res = await  Taro.request({url:minersUrl})
        if (res.statusCode === 200) {
            //console.log('data',res.data);
            return res.data
        } else {
           console.log('fetch unsuccessful')
        }
    } catch (error) {
        if (error instanceof TypeError) {
           console.error("fetch operation error: ", error.message);
        }
    }
}