import React, { useState } from 'react'
import { Button, InputAccessoryView, SafeAreaView, ScrollView, TextInput, View } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { SearchComponentEnum } from './Search.types';
import { styles } from './Search.style';
import { useFonts } from 'expo-font';

const Search = (props: {setText: (value: string) => void, text: string}) => {

    const { setText, text } = props

    const inputAccessoryViewID = 'uniqueID';

    useFonts({
        'Poppins-Regular': require('../../../../../assets/fonts/Poppins-Regular.ttf')
      });

    return (
        <View style={styles.container}>
            <ScrollView scrollEnabled={false} keyboardDismissMode="interactive">
                <View style={styles.contentInput}>
                    <Fontisto name="search" size={20} color="black" style={styles.iconStyle} />
                    <TextInput
                        style={styles.inputStyle}
                        inputAccessoryViewID={inputAccessoryViewID}
                        onChangeText={setText}
                        value={text}
                        placeholderTextColor="#0D2D3A"
                        placeholder={SearchComponentEnum.search_placeholder}
                    />
                </View>
            </ScrollView>
            <InputAccessoryView nativeID={inputAccessoryViewID}>
                <Button onPress={() => setText('')} title={SearchComponentEnum.title_button_ios} />
            </InputAccessoryView>
        </View>
    )
}

export default Search