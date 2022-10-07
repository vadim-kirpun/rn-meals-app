import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';

import { useLoadFonts } from '~hooks';

import AppNavigation from './src/navigation/AppNavigation';
import mapping from './mapping';
import theme from './theme';

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <ApplicationProvider
      {...eva}
      theme={{ ...eva.dark, ...theme }}
      customMapping={mapping}
    >
      <NavigationContainer>
        <Layout style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <AppNavigation />
        </Layout>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
