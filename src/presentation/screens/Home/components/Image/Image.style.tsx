import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    marginTop: '10vh',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 40,
    width: '100%',
    fontWeight: '700',
    position: 'absolute',
    top: 40,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  shadowText: {
    textShadowColor: 'rgba(255, 255, 255, 0.3)', // Cor da sombra esbranquiçada
    textShadowOffset: { width: 6, height: 6 }, // Deslocamento da sombra
    textShadowRadius: 4,
  },
  alignText: {
    width: '60%',
    display: 'flex',
    alignSelf: 'center',
  },
})
