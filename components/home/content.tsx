import React from 'react'
import { Text, View, Image } from 'react-native'
import { Weather } from '../../App';

type ContentProps = {
  weatherInfo: Weather;
};

const Content = ({ weatherInfo }: ContentProps) => {
  return (
    <View className='justify-center items-center mb-6'>
     <Image source={require('../../assets/storm.png')} className='w-60 h-60'/>
     <View className='relative'>
        <Text className='font-extrabold text-[100px]'>{weatherInfo.current_weather.temperature.toFixed()}</Text>
        <Text className='absolute right-[-10px] top-[-2px] font-bold text-[50px]'>°</Text>
     </View>
     <Text className='text-4xl font-medium text-secondaryDark'>Thunderstorm</Text>
    </View>
  )
}

export default Content
