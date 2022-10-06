import { useCallback, useEffect } from 'react';

import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';

export const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    NunitoRegular: Nunito_400Regular,
    NunitoBold: Nunito_700Bold,
  });

  useEffect(() => {
    void SplashScreen.preventAutoHideAsync();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) void SplashScreen.hideAsync();
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
};
