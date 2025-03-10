import React from 'react'
import { Text, View, Image } from 'react-native'


const Content = () => {
  return (
    <View className='justify-center items-center mb-6'>
     <Image source={require('../../assets/storm.png')} className='w-60 h-60'/>
     <View className='relative'>
        <Text className='font-extrabold text-[100px]'>26</Text>
        <Text className='absolute right-[-10px] top-[-2px] font-bold text-[50px]'>°</Text>
     </View>
     <Text className='text-4xl font-medium text-secondaryDark'>Thunderstorm</Text>
    </View>
  )
}

export default Content
