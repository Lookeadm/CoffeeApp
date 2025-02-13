import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderComponent, SectionComponent, TextComponent } from '../../components/index';
import globalStyle from '../../constants/globalStyle'
import InforComponent from '../../components/details/InforComponent';
import appColor from '../../constants/appColor';

const FavoriteScreen = () => {
  return (
    <View style={globalStyle.container}>
      <SectionComponent>
        <HeaderComponent home avatar title={"Favorites"}/>
      </SectionComponent>
      <SectionComponent>
        <View styles={styles.container}>
        <InforComponent/>
        <View style={{backgroundColor: appColor.gray5, paddingHorizontal: 20, paddingVertical: 10}}>
        <TextComponent text={"Description"} color={appColor.gray1} fontWeight={'bold'} styles={{ marginVertical: 12 }} size={15} />
        <TextComponent text={"Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top."} styles={{ marginBottom: 15 }} />
        </View>
        </View>
      </SectionComponent>
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container: {
    borderRadius: 20
  }
})