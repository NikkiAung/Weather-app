import React, { Component } from 'react'
import { Text, View, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Theme } from '../../theme';
import { Link } from 'expo-router';


type HeaderProps = {
    cityname: string;
};

const Header = ({ cityname }: HeaderProps) => {
    return (
      <View className='flex-row justify-between items-center mt-6 mb-4'>
        <Pressable hitSlop={20}>
            <Link href={'/qrcode'} asChild>
                <Ionicons name="qr-code-outline" size={28} color="black" />
            </Link>
        </Pressable>
        <View className='flex-row items-center'> 
            <Ionicons name="location-outline" size={28} color={Theme.orange} />
            <Text className='text-2xl font-bold'>{cityname || "Loading"}</Text>
        </View>
        <Pressable hitSlop={20}>
            <Link href={'/forecast'} asChild>
                <Ionicons name="ellipsis-vertical" size={28} color="black" />
            </Link>
        </Pressable>
      </View>
    )
}

export default Header
