import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Search from './components/Search';
import QrComponent from './components/QrCodeComponent';
import Carousel from './components/Carousel';
import Category from './components/Category';
import CardList from './components/CardList';
import { StackNavigationProp } from '@react-navigation/stack';
import { ListPLacesInterface } from '../../types/filterData';
import { fetchPlaces } from '../../services/places';
import { filterData } from '../../utils/filter';

type RootStackParamList = {
    Camera: undefined;
};

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Camera'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState<ListPLacesInterface[]>([])

    const handleCategorySelect = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(cat => cat !== category));
        } else {
            if (selectedCategories.length < 3) {
                setSelectedCategories([...selectedCategories, category]);
            }
        }
    };

    useFocusEffect(() => {
        (async () => {
            const response = await fetchPlaces()
            setData(response)
        })()
    })

    const filteredData = filterData({data, searchText, selectedCategories})

    const handleOpenCamera = () => {
        navigation.navigate('Camera')
    }

    const categories = [...new Set(data.map(item => item.category))];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentHeaderPage}>
                <Search setText={setSearchText} text={searchText} />
                <QrComponent setCamera={handleOpenCamera} />
            </View>
            <View style={styles.content}>
                <Carousel horizontalDirection keyword='Categoria'>
                    {categories.map((item) => (
                        <Category
                            key={item}
                            category={item}
                            onPress={() => handleCategorySelect(item)}
                            isSelected={selectedCategories.includes(item)}
                        />
                    ))}
                </Carousel>
                <CardList data={filteredData} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        marginHorizontal: 8,
        marginBottom: 85
    },
    contentHeaderPage: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 25,
        width: '100%',
        overflow: 'hidden',
    },
    content: {
        width: '100%',
    },
});

export default HomeScreen;
