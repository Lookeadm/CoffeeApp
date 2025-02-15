import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RowComponent from './RowComponent'
import TextComponent from './TextComponent'
import { Link } from 'expo-router'

const HeaderComponent = (props) => {
    const {home, avatar, title, onPress, detail} = props;
    return (
        <View>
            <RowComponent
                justify={"space-between"}
            >
                <TouchableOpacity onPress={onPress}>
                    <Image
                        source={home ? require("../assets/images/nav.png") : require("../assets/images/arrow-left.png")}
                        style={{ height: 30, width: 30 }}
                    />
                </TouchableOpacity>
                <TextComponent text={title} fontWeight={"bold"} size={20} />
                <Link href={'/(children)/SettingScreen'} asChild>
                <TouchableOpacity>
                <Image
                    source={avatar ? require('../assets/images/avatar.png') : ""}
                    style={{ height: 30, width: 30 }}
                />
                </TouchableOpacity>
                </Link>
                {detail && (
                    <Image
                        source={require('../assets/images/heart2.png')}
                        style={{ height: 30, width: 30 }}
                    />
                )}
            </RowComponent>

        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({})