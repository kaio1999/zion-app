import React from 'react'
import Card from './Card'
import { FlatList } from 'react-native'
import { ListPLacesInterface } from '../../../../types/filterData'

const CardList = (props: { data: ListPLacesInterface[] }) => {

    const { data } = props

    return <FlatList
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        style={{
            width: '100%',
            marginTop: 8,
            marginBottom: 100,
        }}
        contentContainerStyle={{
            display: 'flex',
            paddingHorizontal: 8,
            alignItems: 'center'
        }}
    />
}

export default CardList