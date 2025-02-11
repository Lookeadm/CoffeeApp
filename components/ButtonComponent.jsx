import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import globalStyle from '@/constants/globalStyle'
import TextComponent from './TextComponent'
import appColor from '@/constants/appColor'

const ButtonComponent = (props) => {
  const { text, icon, styles, color, textColor, type, onPress } = props
  return type === "primary" ? (
    <View>
      <TouchableOpacity
        style={[
          globalStyle.button,
          {
            backgroundColor: color,
            
          },
          styles,
        ]}
        onPress={onPress}>
        {icon && <Image source={icon} style={{width: 15, height: 15, marginRight: 8}}/>}
        <TextComponent
          text={text}
          color={textColor}
          fontWeight='bold'
        />
        <View></View>
      </TouchableOpacity>
    </View>
  ) : (
    <View>
      <TouchableOpacity style={globalStyle.miniButton} onPress={onPress}>
        <TextComponent text={text} size={15} />
      </TouchableOpacity>
    </View>
  )
}

export default ButtonComponent
