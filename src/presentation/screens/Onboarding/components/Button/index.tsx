import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './Button.styles'
import ButtonComponentEnum from './Button.enum'
import { useFonts } from 'expo-font'

const ButtonComponent = (props: { onPress: () => void }) => {

  const { onPress } = props

  useFonts({
    'Poppins-Bold': require('../../../../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../../../../../assets/fonts/Poppins-Regular.ttf')
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.helperText}>{ButtonComponentEnum.book_now}</Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.textButton}>{ButtonComponentEnum.schedule_now}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ButtonComponent
