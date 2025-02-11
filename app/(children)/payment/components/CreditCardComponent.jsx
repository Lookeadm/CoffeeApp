import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  {RowComponent, TextComponent} from '@/components/index'
import appColor from '@/constants/appColor'

const CreditCardComponent = () => {
  return (
    <View style={[styles.card,{justifyContent: 'space-between'}]} >
      <RowComponent justify="space-between">
        <Image source={require('@/assets/images/chip.png')} style={{width: 31, height: 24}}/>
        <Image source={require('@/assets/images/visa.png')} style={{width: 50, height: 16}}/>
      </RowComponent>
      <TextComponent text="3897 8923 6745 4638" size={14} styles={{letterSpacing: 6}}/>
      <RowComponent justify="space-between">
        <View>
          <TextComponent text={"Card Holder Name"} size={10} color={appColor.gray}/>
          <TextComponent text={"Robert Evans"} size={16} fontWeight={'bold'}/>
        </View>
        <View>
          <TextComponent text={"Expiry Date"} size={10} color={appColor.gray}/>
          <TextComponent text={"02/30"} size={16} fontWeight={'bold'}/>
        </View>
      </RowComponent>
    </View>
  )
}

export default CreditCardComponent

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 186,
    backgroundColor: appColor.gray5,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
  }
})