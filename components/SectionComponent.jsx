import { View, Text } from 'react-native'
import React from 'react'
import globalStyles from '@/constants/globalStyle'

const SectionComponent = (props) => {
  const { children, styles, login } = props
  return (
  <View style={[login ? globalStyles.sectionLogin : globalStyles.section, styles]}>
    {children}
  </View>)
}

export default SectionComponent