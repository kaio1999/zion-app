import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';

import Routes from './src/routes';

const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins-Medium': require('@assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('@assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('@assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('@assets/fonts/Poppins-Bold.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setDataLoaded(true));
  }, []);

  if (!dataLoaded) {
    return null;
  }

  return <Routes />;
}
