import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 25,
    },
    firstContentInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4
    },
    imageHouse: {
        borderRadius: 20,
    },
    title: {
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        color: '#0D2D3A',
        fontSize: 15
    },
    price: {
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        color: '#1E1E1EBD',
        fontSize: 12
    },
    containerAddress: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 4,
        marginBottom: 4,
    },
    location: {
        fontWeight: '500',
        fontFamily: 'Poppins-Medium',
        color: '#0983B5',
        fontSize: 12,
        marginLeft: 5
    },
    containerPackages: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 4,
    },
    whatIsInclude: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    packagesIncludes: {
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        color: '#0D2D3AB0',
        fontSize: 10
    },
})