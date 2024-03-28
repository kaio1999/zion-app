import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: 615,
    height: 190,
    paddingHorizontal: 20,
    paddingBottom: 12,
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -307.5 }],
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 500,
    borderTopRightRadius: 500,
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  helperText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: '#04242F',
    borderRadius: 26,
    width: 220,
    height: 60,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  textButton: {
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',  
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Bold',
  }
})
