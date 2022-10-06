import { memo } from 'react';
import { Pressable, Text, View, StyleSheet, Platform } from 'react-native';

import { Category } from '~data';
import { borderRadius, spacings } from '~theme';

const CategoryTile = ({ title, color }: Category) => (
  <View style={styles.item}>
    <Pressable
      style={({ pressed }) => [{ flex: 1 }, pressed && styles.pressed]}
      android_ripple={{ color: 'grey' }}
    >
      <View style={[styles.inner, { backgroundColor: color }]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 150,
    borderRadius,
    margin: spacings.m,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    backgroundColor: 'white',
    overflow: Platform.select({ ios: 'visible', android: 'hidden' }),
  },
  pressed: { opacity: 0.5 },
  inner: {
    flex: 1,
    padding: spacings.m,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius,
  },
  text: {
    fontFamily: 'NunitoBold',
    fontSize: 19,
  },
});

export default memo(CategoryTile);
