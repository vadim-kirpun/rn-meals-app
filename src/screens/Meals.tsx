import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { RootStackScreenProps } from '~nav-types';

const Meals = ({ route }: RootStackScreenProps<'Meals'>) => {
  // const { categoryId } = route.params;

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default memo(Meals);
