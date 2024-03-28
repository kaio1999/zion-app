import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        maxWidth: 311,
    },
    contentInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        position: 'absolute',
        left: 10,
        zIndex: 1,
        display: 'flex',
    },
    inputStyle: {
        backgroundColor: '#e3e8e8',
        paddingLeft: 55,
        height: 50,
        borderRadius: 10,
        fontSize: 16,
        width: '100%',
        fontWeight: '400',
        fontFamily: "Poppins-Regular",
    }
})
