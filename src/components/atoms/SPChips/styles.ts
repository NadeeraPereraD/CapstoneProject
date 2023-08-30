import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        position: 'relative',
        flexDirection: 'row',
        //marginVertical: 75,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderBlockColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent:'space-evenly',
        width: 350,
        marginTop: 20,
        borderWidth: 1,
        borderLeftColor:'#FFFFFF',
        borderRightColor: '#FFFFFF'
    },
    labelContainer: {
        fontWeight: '600',
        fontFamily: 'Poppins',
        fontSize: 18,
        color: '#FFFFFF',
    }
})