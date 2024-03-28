import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    Map: { address: string };
  };
  
  type MapScreenRouteProp = RouteProp<RootStackParamList, 'Map'>;
  
  type Props = {
    route: MapScreenRouteProp;
  };

const Map = ({ route }: Props | any) => {

    const { address } = route.params 

    const isFocus = useIsFocused();

    const [latitude, setLatitude] = useState<number>(0)
    const [longitude, setlongitude] = useState<number>(0)

    useFocusEffect(() => {
        fetch(`http://api.positionstack.com/v1/forward?access_key=9a7a9ce973e794d37fb8018bdcefd450&query=${address}`)
            .then(response => response.json())
            .then(data => {
                setLatitude(data.data[0].latitude)
                setlongitude(data.data[0].longitude)
            });
    })

    const haveLocation = latitude !== 0 && longitude !== 0


    return isFocus ?  (
        <View style={{ flex: 1 }}>
            {haveLocation && (
                <MapView
                    style={{ flex: 1 }}
                    region={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: latitude, longitude: longitude }}
                        title="Localização do lugar"
                    />
                </MapView>
            )}
        </View>
    ) : (
        null
    );
};

export default Map;
