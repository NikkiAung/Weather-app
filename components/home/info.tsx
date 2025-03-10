import React from 'react'
import { Text, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { Theme } from '../../theme';

const Info = () => {
  return (
    <View className='flex-row items-center justify-center my-2 gap-2 mx-auto'>
      <View className='flex-1 items-center shadow bg-white rounded-xl p-4'>
        <Feather name="sunrise" size={24} color="black" />
        <Text className='font-bold text-lg text-purpleDark'>6:00</Text>
        <Text className='text-lg text-secondaryDark font-bold'>Sunrise</Text>
      </View>
      <View className='flex-1 items-center shadow bg-white rounded-xl p-4'>
        <Entypo name="drop" size={24} color={Theme.skyBlue} />
        <Text className='font-bold text-lg text-purpleDark'>84%</Text>
        <Text className='text-lg text-secondaryDark font-bold'>Rain</Text>
      </View>
      <View className='flex-1 items-center shadow bg-white rounded-xl p-4'>
        <Feather name="sunset" size={24} color="black" />
        <Text className='font-bold text-lg text-purpleDark'>5:00</Text>
        <Text className='text-lg text-secondaryDark font-bold'>Sunset</Text>
      </View>
    </View>
  )
}

export default Info
