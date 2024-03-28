import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    marginTop: 50,
  },
  textContainer: {
    width: '100%',
    display: 'flex',
    zIndex: 1,
    marginLeft: '20%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 40,
    width: '100%',
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    position: 'absolute',
    top: 8,
    display: 'flex',
    flexDirection: 'column',
  },
  shadowText: {
    textShadowColor: 'rgba(255, 255, 255, 0.2)', // Cor da sombra esbranquiçada
    textShadowOffset: { width: 5, height: 4 }, // Deslocamento da sombra
    textShadowRadius: 3,
  },
  alignText: {
    width: '100%',
  },
})
