import { StyleSheet } from "react-native";

export const useStyles = () => {
    return StyleSheet.create({
       mainContainer:{
        //justifyContent: 'center',
        //marginHorizontal: 15,
        //marginVertical: 10,
        // padding: 5,
        //backgroundColor: '#282828',
        height: 70,
        width: 340,
       },
       textInputContainer:{
        flex: 1,
        marginTop: 20,
        marginRight: 150,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#282828',
        height: 50,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        width: 220,
       },
    })


}
