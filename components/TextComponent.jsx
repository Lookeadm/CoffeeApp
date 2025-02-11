import { View, Text, Platform } from 'react-native'
import React from 'react'
import globalStyle from '@/constants/globalStyle';
import appColor from '@/constants/appColor';
import { fontFamilies } from '@/constants/fontStyle';

const TextComponent = (props) => {
    const {
        text,
        size,
        flex,
        font,
        fontWeight,
        color,
        styles,
        title,
        numberOfLines
    } = props;
  
    const fontSizeDefault = Platform.OS === 'ios' ? 16 : 14;
  
    const getFontSize = () => {
      if (size) return size;
      if (title) return 24;
      return fontSizeDefault;
    }
  
    const getFontFamily = () => {
      if (font) return font;
      if (title) return fontFamilies.PoppinBold;
      return fontFamilies.PoppinRegular;
    }
  
    return (
      <Text
          style={[
              globalStyle.text,
              {
                  color: color ?? appColor.text,
                  flex: flex ?? 0,
                  fontSize: getFontSize(),
                  fontFamily: getFontFamily(),
                  fontWeight: fontWeight
                  
              },
              styles,
          ]}
          numberOfLines={numberOfLines}
          ellipsizeMode="tail"
      >
          {text}
      </Text>
  )
  
}

export default TextComponent