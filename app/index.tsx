import { StatusBar } from 'expo-status-bar';
import { Alert, Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/home/header';
import Inputbox from '../components/home/input-box';
import Content from '../components/home/content';
import Info from '../components/home/info';
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useWeatherStore } from '../store/weather-store';
import { getLocationByCity, getWeatherInfo } from "../utils/weather-api";

type Location = {
    latitude: number;
    longitude: number;
}

export type Weather = {
    current_weather: {
      temperature: number;
      weathercode: 0;
      windspeed: number;
    };
    daily: {
      sunrise: string[];
      sunset: string[];
      temperature_2m_max: number[];
      time: string[];
      weathercode: number[];
    };
    latitude: number;
    longtitude: number;
  };

export default function App() {
    const setCurrentWeather = useWeatherStore((state) => state.setCurrentWeather);
    const setDailyForecast = useWeatherStore((state) => state.setDailyForecast);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState<Location>({longitude: 96.1735, latitude: 16.8409,})
    const [city, setCity] = useState<string>("Yangon");

    // make sure not to use async in useEffect, causing unexpected bahviour for clean up func
    useEffect(() => {
        const getPermission = async () => {
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            console.log("Please grant location access.");
            return;
          }
    
          const currentLocation = await Location.getCurrentPositionAsync({});
          setLocation({
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
          });
        };

        const getWeatherInfo = async () => {
            setLoading(true);
            const weather_api = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`;
            const response = await fetch(weather_api);
            const response_data: Weather = await response.json();
            setCurrentWeather({
              temperature: response_data.current_weather.temperature,
              weatherCode: response_data.current_weather.weathercode,
            });
            setDailyForecast({
              sunrise: response_data.daily.sunrise,
              sunset: response_data.daily.sunset,
              temperature_2m_max: response_data.daily.temperature_2m_max,
              time: response_data.daily.time,
              weathercode: response_data.daily.weathercode,
            });
            setLoading(false);
        };

        const getReverseGeocode = async () => {
            const reverseGeocodeResponse = await Location.reverseGeocodeAsync({
              latitude: location.latitude,
              longitude: location.longitude,
            });
            setCity(reverseGeocodeResponse[0].city!);
        };

        getPermission();
      }, []);

      const getWeather = async () => {
        const weather = await getWeatherInfo(location.latitude, location.longitude);
        setCurrentWeather({
          temperature: weather.current_weather.temperature,
          weatherCode: weather.current_weather.weathercode,
          windspeed: weather.current_weather.windspeed,
        });
        setDailyForecast({
          sunrise: weather.daily.sunrise,
          sunset: weather.daily.sunset,
          temperature_2m_max: weather.daily.temperature_2m_max,
          time: weather.daily.time,
          weathercode: weather.daily.weathercode,
        });
      };
    
      const getReverseGeocode = async () => {
        const reverseGeocodeResponse = await Location.reverseGeocodeAsync({
          latitude: location.latitude,
          longitude: location.longitude,
        });
    
        setCity(
          reverseGeocodeResponse[0].city! || reverseGeocodeResponse[0].country!
        );
      };

      const searchLocationByCity = async (city: string) => {
        try {
          const { latitude, longitude } = await getLocationByCity(city);
          setLocation({ latitude, longitude });
        } catch (error) {
          Alert.alert(error as string, "Please enter a valid city name.");
        }
      };


    useEffect(() => {
        setLoading(true);
        getWeather();
        getReverseGeocode();
        setLoading(false);
    }, [location]);

  return (
    <SafeAreaView style={{paddingTop: Platform.OS === "android" ? 24 : 0}} className='bg-white'>
        <ImageBackground source={require("../assets/bg.jpg")} className='w-full h-full' blurRadius={6}>
            <View className='px-8'>
                {!loading && (
                    <>
                        <Header cityname={city} />
                        <Inputbox serchLocationByCity={searchLocationByCity}/>
                        <Content />
                        <Info />
                        <Text className="text-center text-secondaryDark text-sm my-8">
                            Demo Weather App - CODE HUB{" "}
                        </Text>
                    </>
                )}
            </View>
            <StatusBar style="dark" />
        </ImageBackground>
    </SafeAreaView>
  );
}
