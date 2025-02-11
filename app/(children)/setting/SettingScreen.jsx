import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  { SectionComponent, HeaderComponent, RowComponent, TextComponent, ButtonComponent} from '@/components/index'
import globalStyle from '@/constants/globalStyle'

const SettingScreen = () => {
  const itemSetting = [
    { id: '1', title: "Personal Details" },
    { id: '2', title: "Address" },
    { id: '3', title: "Payment Method" },
    { id: '4', title: "About" },
    { id: '5', title: "Help" },
    { id: '6', title: "Log out" },
  ]

  const imageSetting = {
    '1': require('@/assets/images/personal.png'),
    '2': require('@/assets/images/address.png'),
    '3': require('@/assets/images/payment.png'),
    '4': require('@/assets/images/about.png'),
    '5': require('@/assets/images/help.png'),
    '6': require('@/assets/images/logout.png'),
  }

  return (
    <View style={globalStyle.container}>
      <SectionComponent styles={{ marginBottom: 40 }}>
        <HeaderComponent title={"Setting"} />
      </SectionComponent>

      <SectionComponent>
        {itemSetting.map((item) => (
          <RowComponent key={item.id} justify="space-between" styles={{marginBottom: 20}}>
            <RowComponent>
              <View style={styles.icon}>
                <Image source={imageSetting[item.id]} style={{ width: 17, height: 17 }} />
              </View>
              <TextComponent text={item.title} fontWeight={'bold'} size={16} />
            </RowComponent>
            <Image source={require('@/assets/images/arowright.png')} style={{ width: 20, height: 27 }} />
          </RowComponent>
        ))}

      </SectionComponent>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    backgroundColor: 'rgb(52,36,29)',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25
  }
})