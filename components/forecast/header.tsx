import React, { Component } from 'react'
import { Text, View, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Theme } from '../../theme';
import { Link } from 'expo-router';

const Header = () => {
    return (
      <View className='flex-row justify-between items-center mt-6 my-6'>
        <Pressable hitSlop={20}>
            <Link href={'/'} asChild>
                <Ionicons name="chevron-back" size={24} color="black" />
            </Link>
        </Pressable>
        <View className='flex-row items-center gap-2'> 
            <Ionicons name="calendar-clear" size={24} color={Theme.purpleDark} />
            <Text className='text-2xl font-bold'>7 days</Text>
        </View>
        <Pressable hitSlop={20}>
            <Link href={'/qrcode'} asChild>
                <Ionicons name="qr-code-outline" size={28} color="black" />
            </Link>
        </Pressable>
      </View>
    )
}

export default Header
