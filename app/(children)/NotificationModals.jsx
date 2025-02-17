import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { ButtonComponent, RowComponent, TextComponent } from '../../components/index'
import appColor from '../../constants/appColor'
import { AppContext } from '../../app-context'

const NotificationModals = ({
    visible,
    onClose,
    login
}) => {
    const {setIsAuth} = useContext(AppContext);
    return (
        <View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={visible}
                onRequestClose={onClose}
            >
                <View style={styles.modalContainer}>
                    {login ? (
                        <View style={styles.modalView}>
                            <TextComponent text={"Loading..."} fontWeight={"bold"} size={16} />
                        </View> 
                    ) : (
                    <View style={styles.modalView}>
                        <TextComponent text={"Are you sure want to logout!"} fontWeight={"bold"} size={16} />
                        <RowComponent styles={{ marginTop: 10, padding: 60 }}>
                            <ButtonComponent text={"No"} size={16} type="primary" onPress={onClose} />
                            <ButtonComponent 
                                text={"Yes"} 
                                size={16} 
                                type="primary" 
                                color={appColor.orange} 
                                onPress={()=>setIsAuth(false)}
                                />
                        </RowComponent>
                    </View>
                
                    )
                    }
                    
                    </View>
            </Modal>
        </View>
    )
}

export default NotificationModals;

const styles = StyleSheet.create({
    modalView: {
        width: 328,
        height: 172,
        margin: 20,
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
});