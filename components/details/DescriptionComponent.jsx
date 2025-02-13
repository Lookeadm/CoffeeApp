import { TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import appColor from '@/constants/appColor'
import { RowComponent, TextComponent } from '@/components/index'
import globalStyle from '@/constants/globalStyle'

const DescriptionComponent = ({
    description,
    selectedSizeIndex, // Receive selected size index
    setSelectedSizeIndex,
    setSelectedSize,
}) => {
    const sizeData = [
        { id: '1', size: 'S' },
        { id: '2', size: 'M' },
        { id: '3', size: 'L' },
    ]
    return (
        <View>
            <TextComponent text={"Description"} color={appColor.gray1} fontWeight={'bold'} styles={{ marginVertical: 12 }} size={15} />
            <TextComponent text={description} styles={{ marginBottom: 15 }} />
            <View>
                <TextComponent text={"Size"} color={appColor.gray1} fontWeight={'bold'} styles={{ marginVertical: 12 }} size={15} />
                <RowComponent justify={'space-between'}>
                    {sizeData.map((size) => {
                        return (
                            <TouchableOpacity 
                                style={[globalStyle.size, { borderColor: selectedSizeIndex === size.id ? appColor.orange : appColor.gray4 }]} 
                                key={size.id} 
                                onPress={() => {setSelectedSizeIndex(size.id), setSelectedSize(size.size)}}
                            >
                                <TextComponent text={size.size} fontWeight={'bold'} color={selectedSizeIndex === size.id ? appColor.orange : appColor.gray1} />
                            </TouchableOpacity>
                        )
                    })}
                </RowComponent>
            </View>
        </View>
    )
}

export default DescriptionComponent
