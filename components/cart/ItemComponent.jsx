import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import SectionComponent from '../SectionComponent';
import TextComponent from '../TextComponent';
import ButtonComponent from '../ButtonComponent';
import { AppContext } from '../../app-context';
import appColor from '../../constants/appColor'
import RowComponent from '../RowComponent';
import globalStyle from '../../constants/globalStyle'

const ItemComponent = ({
    id,
    name,
    image,
    sizes,
    price,
    quantity,
}) => {
    const { updateItem } = useContext(AppContext);

    const handleIncrease = (id, name, image, price, size) => {
        updateItem({
          id: id,
          name: name,
          image: image,
          price: price,
          size: size,
          quantity: 1
        })
      }
      const handleDecrease = (id, name, image, price, size, quantity) => {
        updateItem({
          id: id, 
          name: name,
          image: image,
          price: price,
          size: size, 
          quantity: quantity<1?0:-1
        })
      }

    return sizes.length > 1 ? (
        <View>
            <SectionComponent>
                <View style={styles.card}>
                    <RowComponent>
                        <Image source={{ uri: image }} style={styles.image}/>
                        <View style={styles.cardItem}>
                            <TextComponent text={name} size={19} numberOfLines={1}/>
                            <TextComponent
                                text={"With Steamed Milk"}
                                color={appColor.gray1}
                                size={11}
                            />
                            <View style={[globalStyle.itemDetail, { marginTop: 10 }]}>
                                <TextComponent
                                    text={"Medium Roasted"}
                                    color={appColor.gray1}
                                    styles={{ margin: 15 }}
                                    size={11}
                                />
                            </View>
                        </View>
                    </RowComponent>
                    {/* Quantity */}
                    {sizes.map((sizes, index) => {
                        return (
                            <View key={sizes.size}>
                                <RowComponent
                                    justify="space-between"
                                    styles={{ marginTop: 10, paddingLeft: 10 }}
                                >
                                    <View style={[globalStyle.size, { width: 72 }]}>
                                        <TextComponent
                                            text={sizes.size}
                                            fontWeight={"bold"}
                                            color={appColor.gray1}
                                        />
                                    </View>
                                    <RowComponent>
                                        <TextComponent
                                            text={"$ "}
                                            color={appColor.orange}
                                            fontWeight={"bold"}
                                            size={16}
                                        />
                                        <TextComponent
                                            text={sizes.price == null ? price : sizes.price}
                                            fontWeight={"bold"}
                                            size={16}
                                        />
                                    </RowComponent>
                                    <ButtonComponent
                                        text={"-"}
                                        onPress={() => handleDecrease(id, name, image, sizes.price, sizes.size, sizes.quantity)}
                                    />
                                    <View style={styles.quantityInput}>
                                        <TextComponent text={sizes.quantity} />
                                    </View>
                                    <ButtonComponent
                                        text={"+"}
                                        onPress={() => handleIncrease(id, name, image, price, sizes.size)}
                                    />
                                </RowComponent>
                            </View>
                        );
                    })}
                </View>
            </SectionComponent>
        </View>
    ) : (
        <View>
            <SectionComponent>
                <View style={styles.card}>
                    <RowComponent>
                        <Image
                            source={{ uri: image }}
                            style={styles.image2}
                        />
                        <View style={[styles.cardItem, { width: '52%' }]}>
                            <TextComponent text={name} size={19} />
                            <TextComponent
                                text={"With Steamed Milk"}
                                color={appColor.gray1}
                                size={11}
                            />
                            <RowComponent
                                justify="space-between"
                                styles={{ marginTop: 7 }}
                            >
                                <View style={[globalStyle.size, { width: 72 }]}>
                                    <TextComponent
                                        text={sizes[0].size}
                                        fontWeight={"bold"}
                                        color={appColor.gray1}
                                    />
                                </View>
                                <RowComponent>
                                    <TextComponent
                                        text={"$ "}
                                        color={appColor.orange}
                                        fontWeight={"bold"}
                                        size={20}
                                    />
                                    <TextComponent text={sizes[0].price} fontWeight={"bold"} size={20} />
                                </RowComponent>
                            </RowComponent>
                            <RowComponent justify="space-between" styles={{ marginTop: 3 }}>
                                <ButtonComponent
                                    text={"-"}
                                    onPress={() => handleDecrease(id, name, image, sizes[0].price, sizes[0].size)}
                                />
                                <View value={quantity} style={styles.quantityInput}>
                                    <TextComponent text={sizes[0].quantity} />
                                </View>
                                <ButtonComponent
                                    text={"+"}
                                    onPress={() => handleIncrease(id, name, image, price, sizes[0].size)}
                                />
                            </RowComponent>
                        </View>
                    </RowComponent>
                </View>
            </SectionComponent>
        </View>
    )
}

export default ItemComponent

const styles = StyleSheet.create({
    card: {
        width: "100%",
        borderRadius: 20,
        backgroundColor: appColor.gray5,
        padding: 10,
        paddingRight: 20
    },
    cardItem: {
        justifyContent: "space-between",
        marginLeft: 20,
        width: 200
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    image2: {
        width: 126,
        height: 126,
        borderRadius: 20,
    },
    quantityInput: {
        width: 50,
        height: 33,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: appColor.orange,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appColor.black,
        color: appColor.white,
        fontSize: 16,
    },
})