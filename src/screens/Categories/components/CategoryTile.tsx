import { memo } from 'react';
import { Pressable, View, StyleSheet, Platform } from 'react-native';

import { Text } from '@ui-kitten/components';

import { Category } from '~data';

const CategoryTile = ({ title, color }: Category) => (
  <View style={styles.item}>
    <Pressable
      style={({ pressed }) => [{ flex: 1 }, pressed && { opacity: 0.8 }]}
      android_ripple={{ color: 'grey' }}
    >
      <View style={[styles.inner, { backgroundColor: color }]}>
        <Text category="s1" appearance="alternative">
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
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default memo(CategoryTile);
