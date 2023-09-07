import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
  iconContainer: {
    padding: 15,
    backgroundColor: '#282828',
    height: 50,
    marginLeft: 20,
    marginTop: 20,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  loginButtonContainer: {
    color: '#FFFFFF',
    fontWeight: '800',
    marginTop: 20,
  },
});
