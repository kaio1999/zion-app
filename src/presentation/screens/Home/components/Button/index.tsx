import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './Button.styles'
import ButtonComponentEnum from './Button.enum'

const ButtonComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.helperText}>{ButtonComponentEnum.book_now}</Text>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          {ButtonComponentEnum.schedule_now}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ButtonComponent
