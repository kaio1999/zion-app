import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './Button.styles'
import ButtonComponentEnum from './Button.enum'

const ButtonComponent = (props: { onPress: () => void }) => {
  
  const { onPress } = props

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
