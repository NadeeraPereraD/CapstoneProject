import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;


export const styles = StyleSheet.create({
    tagsContainer:{
       flexDirection: 'row', 
       alignItems:'center',
       justifyContent: 'space-evenly',
       width: windowWidth/2.3,
       height: 55,
       backgroundColor: '#3E3E3E',
       marginVertical: 5,
       marginHorizontal: 5,
       borderRadius: 5,

    },
    imageContainer:{
        width: 44,
        height: 44,
    },
    txtContainer:{
        fontWeight: '400',
        color: '#FFFFFF',
        fontSize: 15,
        alignItems:'center',
        justifyContent: 'center',
        

    }
})