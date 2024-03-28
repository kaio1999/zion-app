import { StyleSheet } from "react-native";

export const styles = (isPressed: boolean) => StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        height: 40,
        borderWidth: 2,
        borderColor: '#283048',
        borderStyle: 'solid',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: isPressed ? '#283048' : 'transparent',
        gap: 15,
    },
    textCategory: {
        color: !isPressed ? '#000000' : '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
    }
})