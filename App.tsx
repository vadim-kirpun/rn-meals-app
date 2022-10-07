import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';

import { Categories } from '~screens';
import { useLoadFonts } from '~hooks';

import theme from './theme';
import mapping from './mapping';

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <ApplicationProvider
      {...eva}
      theme={{ ...eva.dark, ...theme }}
      customMapping={mapping}
    >
      <Layout style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Categories />
      </Layout>
    </ApplicationProvider>
  );
}
