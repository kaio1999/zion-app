import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './Category.styles'
import { useFonts } from 'expo-font';

const Category = (props: { category: string, onPress: () => void, isSelected: boolean }) => {
    const { category, onPress, isSelected } = props

    const dynamicStyle = styles(isSelected)

    useFonts({
        'Poppins-SemiBold': require('../../../../../assets/fonts/Poppins-SemiBold.ttf')
    });

    return (
        <TouchableOpacity style={dynamicStyle.container} onPress={onPress}>
            <Text style={dynamicStyle.textCategory}>{category}</Text>
        </TouchableOpacity>
    )
}

export default Category