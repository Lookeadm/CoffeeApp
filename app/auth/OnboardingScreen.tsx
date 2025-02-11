import { View, Text, Image } from 'react-native'
import React from 'react'
import globalStyle from '@/constants/globalStyle'

const OnboardingScreen = () => {
  return (
    <View style={globalStyle.container}>
      <Image 
        source={require('@/assets/images/Logo.png')} 
        style={{ width: 200, height: 200 }}
      />
    </View>
  )
}

export default OnboardingScreen