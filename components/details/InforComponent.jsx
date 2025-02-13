import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import  { SectionComponent, HeaderComponent, RowComponent, TextComponent, ButtonComponent} from '@/components/index'
import globalStyle from '@/constants/globalStyle'
import appColor from '@/constants/appColor'

const InforComponent = ({
    image,
    name,
    rating,
    voting,

}) => {
    return (
        <View style={{
            backgroundColor: appColor.black,

        }}>
            <Image source={require('@/assets/images/detail.png')} style={{width: '100%'}}/>
            <View
                style={styles.container}
            >
                <RowComponent justify={'space-between'}>
                    <View>
                        <TextComponent text={name} fontWeight={'bold'} size={25} numberOfLines={1} styles={{width: 200}}/>
                        <TextComponent text={"With Steamed Milk"} color={appColor.gray1}/>
                    </View>
                    <RowComponent justify={'space-between'} styles={{width: 136, marginBottom: 15}}>
                        <View style={[globalStyle.itemDetail,{padding: 8}]}>
                            <Image source={require('@/assets/images/coffe.png')} style={{ width: 33, height: 28 }} />
                            <TextComponent text={'Coffee'} color={appColor.gray1} />
                        </View>
                        <View style={[globalStyle.itemDetail,{padding: 8}]}>
                            <Image source={require('@/assets/images/water.png')} style={{ width: 33, height: 28 }} />
                            <TextComponent text={'Milk'} color={appColor.gray1} />
                        </View>
                    </RowComponent>
                </RowComponent>
                <RowComponent justify={'space-between'}>
                    <View>
                        <RowComponent justify={'space-between'} styles={{width: 90}}>
                            <Image source={require('@/assets/images/star.png')} style={{ width: 22, height: 22 }} />
                            <TextComponent text={rating} color={appColor.white} size={15} fontWeight={'bold'} />
                            <TextComponent text={'(' + voting + ")"} color={appColor.gray1} size={10} fontWeight={'bold'} />
                        </RowComponent>
                    </View>
                    <View style={[globalStyle.itemDetail,{paddingVertical: 15}]}>
                        <TextComponent text={'Medium Roasted'} color={appColor.gray1} styles={{ marginHorizontal: 20 }} size={13}/>
                    </View>
                </RowComponent>
            </View>
        </View>
    )
}

export default InforComponent


const styles = StyleSheet.create({
    container: { 
        width: '100%',
        position: 'absolute', 
        bottom: 0, 
        width: '100%', 
        padding: 20,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    }
})