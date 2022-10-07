import { memo } from 'react';
import { Pressable, View, StyleSheet, Platform } from 'react-native';

import { Text } from '@ui-kitten/components';

import { Category } from '~data';

interface ICategoryTile extends Category {
  onPress: () => void;
}

const CategoryTile = ({ title, color, onPress }: ICategoryTile) => (
  <View style={styles.item}>
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ flex: 1 }, pressed && { opacity: 0.8 }]}
      android_ripple={{ color: 'grey' }}
    >
      <View style={[styles.inner, { backgroundColor: color }]}>
        <Text
          category="h5"
          appearance="alternative"
          style={{ textAlign: 'center' }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    margin: 16,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    overflow: Platform.select({ ios: 'visible', android: 'hidden' }),
  },
  inner: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default memo(CategoryTile);
