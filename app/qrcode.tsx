import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View, ImageBackground,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function QrCode() {
  return (
    <SafeAreaView style={{paddingTop: Platform.OS === "android" ? 24 : 0}} className='bg-white'>
        <ImageBackground source={require("../assets/bg.jpg")} className='w-full h-full' blurRadius={6}>
            <View className='px-8 items-center justify-center flex-1'>
                <Image source={require('../assets/scan-me.png')} className='w-60 h-60'/>
                <Text className="text-center text-secondaryDark text-sm my-8">
                Demo Weather App - Aung Nanda Oo{" "}
                </Text>
                <StatusBar style="dark" />
            </View>
        </ImageBackground>
    </SafeAreaView>
  );
}

