import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SectionComponent, HeaderComponent, RowComponent, TextComponent } from '@/components/index'
import globalStyle from '@/constants/globalStyle'
import appColor from '@/constants/appColor'
import CreditCardComponent from '@/components/payment/CreditCardComponent'
import { Link } from 'expo-router'

const PaymentScreen = () => {

    const payment = [
        { id: '1', name: "Wallet", price: '$ 100.50' },
        { id: '2', name: "Google Pay", price: '' },
        { id: '3', name: "Apple Pay", price: '' },
        { id: '4', name: "Amazon Pay", price: '' },
    ]
    const paymentImages = {
        '1': require('@/assets/images/wallet.png'),
        '2': require('@/assets/images/googlepay.png'),
        '3': require('@/assets/images/apple.png'),
        '4': require('@/assets/images/amazon.png'),
        // Add more mappings if you have more payment methods
    };

    return (
        <View style={globalStyle.container}>

            <SectionComponent >
                <HeaderComponent back title={"Payment"} />
            </SectionComponent>
            <ScrollView>
                <SectionComponent>
                    <View style={styles.isChoose}>
                        <TextComponent text="Credit Card" size={14} fontWeight={'bold'} styles={{ marginBottom: 10 }} />
                        <View>
                            <CreditCardComponent />
                        </View>
                    </View>
                </SectionComponent>

                <SectionComponent>
                    {
                        payment.map((method) => (
                            <View key={method.id} style={styles.method}>
                                <RowComponent justify={'space-between'}>
                                    <RowComponent>
                                        <Image source={paymentImages[method.id]} style={{ width: 25, height: 20, marginRight: 10 }} />
                                        <TextComponent text={method.name} size={14} fontWeight={'bold'} />
                                    </RowComponent>
                                    <TextComponent text={method.price} size={14} />
                                </RowComponent>
                            </View>
                        ))
                    }
                </SectionComponent>
            </ScrollView>

            <SectionComponent>
                <View style={{ marginTop: 15 }}>
                    <RowComponent justify="space-between">
                        <View style={styles.price}>
                            <TextComponent text={"Price"} color={appColor.gray1} />
                            <RowComponent>
                                <TextComponent text={"$ "} color={appColor.orange} fontWeight={'bold'} size={20} />
                                <TextComponent text={"40"} fontWeight={'bold'} size={20} />
                            </RowComponent>
                        </View>

                        <Link href="/(children)/PaymentScreen">
                            <View style={[globalStyle.button, { backgroundColor: appColor.orange, width: 200 }]}>
                                <TextComponent text="Pay from Credit Card" fontWeight="bold" />
                            </View>
                        </Link>

                    </RowComponent>
                </View>
            </SectionComponent>
        </View>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    isChoose: {
        borderWidth: 2,
        borderColor: appColor.orange,
        borderRadius: 25,
        padding: 10
    },
    method: {
        width: '100%',
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        backgroundColor: appColor.gray5,
        justifyContent: 'center',
        marginBottom: 10
    }
})