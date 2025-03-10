import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/home/header';
import Inputbox from '../components/home/input-box';

export default function App() {
  return (
    <SafeAreaView style={{paddingTop: Platform.OS === "android" ? 24 : 0}}>
        <ImageBackground source={require("../assets/bg.jpg")} className='w-full h-full' blurRadius={6}>
            <View className='px-8'>
                <Header/>
                <Inputbox/>
            </View>
        </ImageBackground>
    </SafeAreaView>
  );
}
