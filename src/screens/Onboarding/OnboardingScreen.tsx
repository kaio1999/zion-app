import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import ImageComponent from './components/Image'
import ButtonComponent from './components/Button'
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};


const OnboardingScreen: React.FC<Props> = ({ navigation }) => {

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageComponent />
      <ButtonComponent onPress={goToHome} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001118',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
})

export default OnboardingScreen
