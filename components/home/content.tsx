import React, { useEffect, useState } from "react";
import { Text, View, Image } from 'react-native'
import { useWeatherStore } from "../../store/weather-store";
import { getWeratherInfoByCode } from "../../utils";

export type WeatherDetail = {
  codes: number[];
  label: string;
  image: any;
};

const Content = () => {
  const [weatherDetail, setWeatherDetail] = useState<WeatherDetail>();
  const current_weather = useWeatherStore((state) => state.current_weather);

  useEffect(() => {
    setWeatherDetail(getWeratherInfoByCode(current_weather.weathercode));
  }, [weatherDetail]);

  return (
    <View className='justify-center items-center mb-6'>
     <Image source={weatherDetail?.image} className="w-60 h-60" />
     <View className='relative'>
        <Text className='font-extrabold text-[100px]'>{current_weather.temperature.toFixed()}</Text>
        <Text className='absolute right-[-10px] top-[-2px] font-bold text-[50px]'>°</Text>
     </View>
     <Text className='text-4xl font-medium text-secondaryDark'>{weatherDetail?.label}</Text>
    </View>
  )
}

export default Content
