import { View, Text, TextInput } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Theme } from '../../theme';

const Inputbox = () => {
  return (
    <View className='relative mb-4'>
      <TextInput className='shadow bg-white rounded-3xl p-4 ps-14 placeholder:font-bold placeholder:text-secondaryDark' placeholder='City Name'> 
      </TextInput>
      <MaterialCommunityIcons className='abosolute top-[-33px] left-4' color={Theme.secondaryDark} name="cloud-search-outline" size={24} />
    </View>
  )
}

export default Inputbox