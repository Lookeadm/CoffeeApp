import { View, Image, TextInput } from 'react-native'
import React from 'react'
import  { RowComponent} from '@/components/index'
import globalStyle from '@/constants/globalStyle'
import appColor from '@/constants/appColor'

const SearchComponent = () => {
  return (
    <View style={globalStyle.searchBar}>
        <RowComponent>
            <Image source={require('@/assets/images/search-normal.png')} style={{width: 20, height: 20, marginHorizontal: 15}}/>
            <TextInput placeholder='Find Your Coffee...' placeholderTextColor={appColor.gray2}/>
        </RowComponent>
    </View>
  )
}

export default SearchComponent