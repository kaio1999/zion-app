import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { PropsCarousel } from './Carousel.types'
import { styles } from './Carousel.style'

const Carousel = (props: PropsCarousel) => {
    const { children, horizontalDirection, keyword = null } = props
    return (
        <View style={styles.container}>
            {keyword && <Text style={styles.keywordStyle}>{keyword}</Text>}
            <ScrollView
                horizontal={horizontalDirection}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 10
                }}
            >
                {children}
            </ScrollView>
        </View>
    )
}

export default Carousel;