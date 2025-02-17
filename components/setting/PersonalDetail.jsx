import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import  { SectionComponent, HeaderComponent, RowComponent, TextComponent, ButtonComponent} from '@/components/index'
import globalStyle from '@/constants/globalStyle'
import appColor from '@/constants/appColor'

const PersonalDetail = () => {
    return (
        <View style={globalStyle.container}>
            <SectionComponent>
                <HeaderComponent title={"Setting"} />
            </SectionComponent>
            <SectionComponent styles={styles.avatar}>
                <Image source={require('@/assets/images/avatar.png')} style={{ width: 153, height: 153 }} />
            </SectionComponent>
            <SectionComponent>
                <SectionComponent login>
                    <TextInput placeholder="Name"
                        style={globalStyle.input} placeholderTextColor={appColor.gray} />
                    <TextInput placeholder="Email Address"
                        style={globalStyle.input} placeholderTextColor={appColor.gray} />
                    <View>
                        <TextInput placeholder="Password"
                            style={globalStyle.input} placeholderTextColor={appColor.gray} />
                        <TouchableOpacity style={globalStyle.eyeContainer}>
                            <Image
                                source={require("@/assets/images/Eye.png")}
                                style={globalStyle.eye}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TextInput placeholder="Re-type password"
                            style={globalStyle.input} placeholderTextColor={appColor.gray} />
                        <TouchableOpacity style={globalStyle.eyeContainer}>
                            <Image
                                source={require("@/assets/images/Eye.png")}
                                style={globalStyle.eye}
                            />
                        </TouchableOpacity>
                    </View>
                </SectionComponent>

                <SectionComponent login>
                    <ButtonComponent
                        type="primary"
                        text='Save'
                        color={appColor.orange}
                        textColor={appColor.white}
                    />
                </SectionComponent >
            </SectionComponent>
        </View>
    )
}

export default PersonalDetail

const styles = StyleSheet.create({
    avatar: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})