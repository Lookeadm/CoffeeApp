import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import  globalStyles from '@/constants/globalStyle'

const RowComponent = (props) => {
    const { children, justify, onPress, styles } = props

    const localStyle = [
        globalStyles.row, {
            justifyContent: justify
        }, styles
    ]
    return onPress ? (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={localStyle}>
            {children}
        </TouchableOpacity>
    ) : (
        <View style={[localStyle]}>
            {children}
        </View>
    )
}

export default RowComponent