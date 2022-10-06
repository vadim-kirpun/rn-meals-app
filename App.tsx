import { View } from 'react-native';

import { Categories } from '~screens';
import { useLoadFonts } from '~hooks';

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Categories />
    </View>
  );
}
