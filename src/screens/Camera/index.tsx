import React, { useRef, useState, useEffect } from 'react';
import { View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { styles } from './Camera.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import { postNewPlace } from '../../services/places';

type RootStackParamList = {
  Home: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const Camera = ({ navigation }: Props) => {
  
  const [facing, setFacing] = useState<any>('back');
  const [qrCodeScanned, setQrCodeScanned] = useState<boolean>(false);
  const cameraRef = useRef<any>(null);

  function toggleCameraFacing() {
    setFacing((current: any) => (current === 'back' ? 'front' : 'back'));
  }

  useCameraPermissions();
  useFocusEffect(
    React.useCallback(() => {
      setQrCodeScanned(false);
    }, [])
  );

  const handleAddPlace = async (place: any) => {
    const body = {
      category: place.category,
      img: place.img,
      address: place.address,
      package: place.package,
      have: place.have,
      title: place.title,
      pricePerNight: place.pricePerNight,
      id: place.id,
    };

    postNewPlace(body)
  };

  const handleQRCodeScanned = async (event: any) => {
    if (!qrCodeScanned) {
      const house = event.data;

      if (house) {
        setQrCodeScanned(true)
        await handleAddPlace(JSON.parse(house));
        handleGoHome();
      }
    }
  };

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentButtons}>
        <Ionicons name="close-outline" size={35} color="white" style={styles.closeCamera} onPress={handleGoHome} />
        <MaterialIcons name="flip-camera-ios" size={35} color="white" style={styles.flip} onPress={toggleCameraFacing} />
      </View>
      <CameraView
        style={styles.camera}
        ref={cameraRef}
        facing={facing}
        onBarcodeScanned={handleQRCodeScanned}
        barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
      />
    </SafeAreaView>
  );
};

export default Camera;
