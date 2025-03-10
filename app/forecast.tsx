import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/forecast/header';
import Today from '../components/forecast/today';
import Info from '../components/home/info';
import WList from '../components/forecast/w-list';

export default function App() {
  return (
    <SafeAreaView style={{paddingTop: Platform.OS === "android" ? 24 : 0}} className='bg-white'>
        <ImageBackground source={require("../assets/bg.jpg")} className='w-full h-full' blurRadius={6}>
            <View className='px-8 flex-1'>
                <Header/>
                <Today/>
                <Info/>
                <View className='my-2'></View>
                <WList/>
                <Text className="text-center text-secondaryDark text-sm my-8">
                Demo Weather App - Aung Nanda Oo{" "}
                </Text>
                <StatusBar style="dark" />
            </View>
        </ImageBackground>
    </SafeAreaView>
  );
}

