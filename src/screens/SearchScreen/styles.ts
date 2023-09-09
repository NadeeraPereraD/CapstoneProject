import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //flexDirection: 'row', ///////// 09th Sept
    //justifyContent: 'center', ///////// 09th Sept
    backgroundColor: '#000000',
    //width: '100%',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 20,
    marginLeft: 40,
  },

  headerContainer:{
    flex: 0.1, 
    flexDirection: 'row',
  },
  
  iconContainer:{
    marginVertical: 10,
    marginLeft: 10,
    backgroundColor: '#282828',
    height: 50,
    width: 90,
    padding: 15,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,

  },
  loginButtonContainer: {
    color: '#FFFFFF',
    fontWeight: '800',
    marginTop: 20,
    justifyContent:'center',
    right: 115,
    alignItems: 'center',
    padding: 5,
  },
});
