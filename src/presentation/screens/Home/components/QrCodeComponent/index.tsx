import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './QrCodeComponent.styles'
import { Ionicons } from '@expo/vector-icons';

const QrComponent = (props: { setCamera: (value: boolean) => void }) => {

    const { setCamera } = props

    return (
        <TouchableOpacity style={styles.container} onPress={() => setCamera(true)}>
            <Ionicons name="scan" size={26} color="black" />
        </TouchableOpacity>
    )
}

export default QrComponent