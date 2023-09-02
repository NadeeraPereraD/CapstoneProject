import { StyleSheet } from "react-native";

export const useStyles = () => {
    return StyleSheet.create({
       mainContainer:{
        justifyContent: 'center',
        marginHorizontal: 15,
        marginVertical: 10,
        padding: 5,
       },
       labelContainer:{
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 20, 
       },
       textInputContainer:{
        backgroundColor:'#515050', 
        width:'100%',
        marginTop: 15,
        borderRadius: 7,
        color: '#FFFFFF',
        fontSize: 18,
       },
       subContainer:{
        //alignItems: 'center'
       } 
    })


}
