import React from 'react'
import { StyleSheet, View } from 'react-native'
import ImageComponent from './components/Image'
import ButtonComponent from './components/Button'

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageComponent />
      <ButtonComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001118',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
})

export default HomeScreen
