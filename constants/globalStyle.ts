import { StyleSheet } from 'react-native';
import appColor from './appColor';

const globalStyle = StyleSheet.create({
    container: {
        backgroundColor: appColor.black,
        flex: 1,
        flexDirection: "column", // y
        paddingVertical: 14,
    },
    containerLogin: {
        backgroundColor: appColor.black,
        flex: 1,
        flexDirection: "column", // y
        paddingHorizontal: 14,

    },
    eyeContainer: {
        position: "absolute",
        right: 17,
        top: 30,
    },
    eye: {
        width: 30, height: 18
    },
    login: {
        fontSize: 12,
        color: "#828282",
        fontWeight: 700,
        lineHeight: 26,
        marginTop: 16,
    },
    welcome: {
        fontSize: 16,
        color: "#ffffff",
        fontWeight: 700,
        lineHeight: 26,
        marginTop: 10,
    },
    logo: {
        marginTop: 80,
        width: 142,
        height: 142
    },
    button: {
        width: "100%",
        height: 57,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    miniButton: {
        width: 30,
        height: 30,
        backgroundColor: appColor.orange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    text: {
        fontSize: 14,
        color: appColor.black,
    },
    input: {
        backgroundColor: appColor.black,
        width: "100%",
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 17,
        paddingVertical: 11,
        marginTop: 15,
        fontSize: 14,
        lineHeight: 26,
        color: "#828282",
        borderWidth: 1,
        borderColor: appColor.gray2,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    section: {
        marginBottom: 15,
        marginHorizontal: 20
    },
    sectionLogin: {
        marginBottom: 25,
    },
    card: {
        backgroundColor: appColor.gray3,
        borderRadius: 23,
        width: 150,
        height: 245,
        flexDirection: 'column',
        padding: 12,
        marginLeft: 30,
        justifyContent: 'space-between',
        paddingBottom: 20,
        marginBottom: 20
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        width: 55,
        height: 25,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#00000099',
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 18
    },
    searchBar: {
        width: "100%",
        height: 45,
        backgroundColor: appColor.gray4,
        borderRadius: 15,
        justifyContent: 'center',

    },
    navigationBar: {
        width: '100%',
        height: 50,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignContent: 'center',
    },
    itemDetail: {
        minWidth: 56,
        maxWidth: 120,
        maxHeight: 56,
        borderRadius: 10,
        backgroundColor: appColor.gray4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    size: {
        width: 100,
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColor.gray4,
        borderColor: appColor.gray4,
    },
});
export default globalStyle;