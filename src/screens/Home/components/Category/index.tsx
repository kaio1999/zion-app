import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './Category.styles'

const Category = (props: { category: string, onPress: () => void, isSelected: boolean }) => {
    const { category, onPress, isSelected } = props

    const dynamicStyle = styles(isSelected)
    return (
        <TouchableOpacity style={dynamicStyle.container} onPress={onPress}>
            <Text style={dynamicStyle.textCategory}>{category}</Text>
        </TouchableOpacity>
    )
}

export default Category