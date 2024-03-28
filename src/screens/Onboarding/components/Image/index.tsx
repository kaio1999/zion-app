import React from 'react'
import { styles } from './Image.style'
import { Image, Text, View } from 'react-native'
import ImageComponentEnum from './Image.enum'

const ImageResort = require('@assets/resort_image.png')

const ImageComponent: React.FC = () => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          <Text style={[styles.shadowText, styles.alignText]}>
            {ImageComponentEnum.rent_house}
          </Text>
          <Text style={styles.alignText}>{ImageComponentEnum.for_you}</Text>
        </Text>
      </View>
      <Image source={ImageResort} style={styles.backgroundImage} />
    </View>
  )
}

export default ImageComponent
