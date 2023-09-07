import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#000000',
        flex: 1,
    },
    greetingContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    greetingTextContainer:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '800',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
    },
    artistGridContainer:{
        marginHorizontal: 13,
        flex: 3,
    },
    recentlyPlayedContainer:{
        flex: 3,
        marginHorizontal: 20,
    },
    recentlyPlayedTxtContainer:{
        color:'#FFFFFF',
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 10,
    },
    editorsPickContainer:{
        backgroundColor: 'blue',
        flex: 3
    },
    
    

})