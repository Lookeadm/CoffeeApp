import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import appColor from '@/constants/appColor'
import  { SectionComponent, HeaderComponent, RowComponent, TextComponent, ButtonComponent} from '@/components/index'
import globalStyle from '@/constants/globalStyle'

const DescriptionComponent = () => {

    const sizeData = [
        { id: '1', size: 'S' },
        { id: '2', size: 'M' },
        { id: '3', size: 'L' },
    ]
    const [size, setSize] = useState(sizeData);
    const [selectedIndex, setSelectedIndex] = useState(1);

    return (
        <View>
            <ScrollView>
                <TextComponent text={"Description"} color={appColor.gray1} fontWeight={'bold'} styles={{ marginVertical: 12 }} size={15} />
                <TextComponent text={"Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top."} styles={{ marginBottom: 15 }} />
                <View>
                    <TextComponent text={"Size"} color={appColor.gray1} fontWeight={'bold'} styles={{ marginVertical: 12 }} size={15} />
                    <RowComponent justify={'space-between'}>
                        {size.map((size) => {
                            return (
                                <TouchableOpacity style={[globalStyle.size, { borderColor: selectedIndex === size.id ? appColor.orange : appColor.gray4 }]} key={size.id} onPress={() => setSelectedIndex(size.id)}>
                                    <TextComponent text={size.size} fontWeight={'bold'} color={selectedIndex === size.id ? appColor.orange : appColor.gray1} />
                                </TouchableOpacity>
                            )
                        })}
                    </RowComponent>
                </View>
            </ScrollView>
            <View style={{ marginTop: 15 }}>
                <RowComponent justify="space-between">
                    <View style={styles.price}>
                        <TextComponent text={"Price"} color={appColor.gray1} />
                        <RowComponent>
                            <TextComponent text={"$ "} color={appColor.orange} fontWeight={'bold'} size={20} />
                            <TextComponent text={"4.20"} fontWeight={'bold'} size={20} />
                        </RowComponent>
                    </View>
                    <ButtonComponent text={"Add to Cart"} type="primary" color={appColor.orange} />
                </RowComponent>
            </View>
        </View>
    )
}

export default DescriptionComponent

const styles = StyleSheet.create({
    price: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})