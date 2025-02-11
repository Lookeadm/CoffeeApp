import { View, Text } from 'react-native'
import React from 'react'
import InforComponent from './components/InforComponent'
import DescriptionComponent from './components/DescriptionComponent'
import appColor from '@/constants/appColor'
import { SectionComponent } from '@/components'

const DetailScreen = () => {
  return (
    <View style={{backgroundColor: appColor.black, flex: 1}}>
      <InforComponent/> 
      <SectionComponent>
        <DescriptionComponent/>
      </SectionComponent>
    </View>
  )
}

export default DetailScreen