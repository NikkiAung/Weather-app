import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/home/header';
import Inputbox from '../components/home/input-box';
import Content from '../components/home/content';
import Info from '../components/home/info';
import { useEffect, useState } from "react";
import * as Location from "expo-location";

type Location = {
    latitude: number;
    longitude: number;
}

export default function App() {
    const [location, setLocation] = useState<Location>({longitude: 96.1735, latitude: 16.8409,})
    // make sure not to use async in useEffect, causing unexpected bahviour for clean up func
    useEffect(() => {
        const getPermission = async () => {
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            console.log("Please grant location access.");
            return;
          }
    
          const currentLocation = await Location.getCurrentPositionAsync({});
          console.log(currentLocation);
          setLocation({
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
          });
        };
    
        getPermission();
      }, []);

  return (
    <SafeAreaView style={{paddingTop: Platform.OS === "android" ? 24 : 0}} className='bg-white'>
        <ImageBackground source={require("../assets/bg.jpg")} className='w-full h-full' blurRadius={6}>
            <View className='px-8'>
                <Header/>
                <Inputbox/>
                <Content/>
                <Info/>
                <Text className="text-center text-secondaryDark text-sm my-8">
                Demo Weather App - Aung Nanda Oo{" "}
                </Text>
                <StatusBar style="dark" />
            </View>
        </ImageBackground>
    </SafeAreaView>
  );
}
