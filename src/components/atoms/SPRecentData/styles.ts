import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;


export const styles = StyleSheet.create({
    tagsContainer:{
       alignItems:'center',
       justifyContent: 'center',
       width: windowWidth/3,
    },
    imageContainer:{
        width: 105,
        height: 105,
        marginBottom: 5,
    },
    txtContainer:{
        fontWeight: '400',
        color: '#FFFFFF',
        fontSize: 15,
        alignItems:'center',
        justifyContent: 'center',
    }
})