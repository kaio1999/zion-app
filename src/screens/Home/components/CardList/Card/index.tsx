import React from 'react'
import { Image, Text, View } from 'react-native'
import { CardPropsItem } from './Card.type';
import { styles } from './Card.style';
import { FontAwesome6 } from '@expo/vector-icons';

const Card = (props: { item: CardPropsItem }) => {
    const { item } = props
    const formatedCurrency = (value: number) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    return (
        <View key={item.id} style={styles.container}>
            <Image source={{ uri: item.img }} height={235} width={360} style={styles.imageHouse} />
            <View style={styles.firstContentInfo}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{`${formatedCurrency(item.pricePerNight)} / Noite`}</Text>
            </View>
            <View style={styles.containerAddress}>
                <FontAwesome6 name="map-location-dot" size={15} color="#0983B5" />
                <Text style={styles.location}>{item.address}</Text>
            </View>
            <View style={styles.containerPackages}>
                <View style={styles.whatIsInclude}>
                    <FontAwesome6 name="bell-concierge" size={15} color="#0D2D3ACF" />
                    <Text style={[styles.packagesIncludes, {
                        marginRight: 20,
                    }]}>{item.package}</Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 200,
                    flexWrap: 'wrap',
                }}>
                    {item.have.map((haveItem, index) => {
                        return (
                            <Text style={[styles.packagesIncludes, {
                                marginHorizontal: 5
                            }]} key={index}>{haveItem}</Text>
                        )
                    })}
                </View>
            </View>
        </View>
    )
}

export default Card