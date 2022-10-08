import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'expo-status-bar';

import { useLoadFonts } from '~hooks';

import AppNavigation from './src/navigation/AppNavigation';
import mapping from './mapping';
import theme from './theme';

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.dark, ...theme }}
        customMapping={mapping}
      >
        <StatusBar style="light" />
        <IconRegistry icons={EvaIconsPack} />

        <NavigationContainer>
          <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <AppNavigation />
          </View>
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
