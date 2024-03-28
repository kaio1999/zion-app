import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Search from './components/Search';
import QrComponent from './components/QrCodeComponent';
import Carousel from './components/Carousel';
import Category from './components/Category';
import CardList from './components/CardList';
import { StackNavigationProp } from '@react-navigation/stack';
import { ListPLacesInterface } from '../../../data/types';

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
        const fetchData = async () => {
            try {
                const response = await fetch('https://rent-zion-default-rtdb.firebaseio.com/places/.json')
                const dataObject = await response.json();
                const dataArray = Object.keys(dataObject).map(key => ({
                    id: key, // Use o ID do objeto como ID
                    ...dataObject[key], // Inclua os demais dados do objeto
                }));
    
                setData(dataArray);
            }
            catch(err) {
                console.error(err)
            }
        }

        fetchData()
    })
    

    const filteredData = data.filter(item => {
        const lowerCaseSearchText = searchText.toLowerCase();
        const isInSelectedCategories = selectedCategories.length === 0 || selectedCategories.includes(item.category);

        if (item.pricePerNight.toString().includes(lowerCaseSearchText)) {
            return isInSelectedCategories;
        }
        if (item.address.toLowerCase().includes(lowerCaseSearchText)) {
            return isInSelectedCategories;
        }
        const haveMatch = item.have.some(feature =>
            feature.toLowerCase().includes(lowerCaseSearchText)
        );
        if (haveMatch) {
            return isInSelectedCategories;
        }

        return false;
    });

    const handleOpenCamera = () => {
        navigation.navigate('Camera')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentHeaderPage}>
                <Search setText={setSearchText} text={searchText} />
                <QrComponent setCamera={handleOpenCamera} />
            </View>
            <View style={styles.content}>
                <Carousel horizontalDirection keyword='Categoria'>
                    {data.map((item) => (
                        <Category
                            key={item.id}
                            category={item.category}
                            onPress={() => handleCategorySelect(item.category)}
                            isSelected={selectedCategories.includes(item.category)}
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
        marginBottom: 45
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
