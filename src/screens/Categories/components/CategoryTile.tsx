import { memo } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, useStyleSheet } from '@ui-kitten/components';

import { Category } from '~data';

interface ICategoryTile extends Category {
  onPress: () => void;
}

const CategoryTile = ({ title, color, onPress }: ICategoryTile) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.inner}>
        <View style={[styles.accent, { backgroundColor: color }]} />

        <View style={styles.textWrapper}>
          <Text category="h5" appearance="alternative" style={styles.text}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const themedStyles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 16,
    borderRadius: 12,
    backgroundColor: 'color-primary-200',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 4, height: 4 },
    elevation: 4,
  },
  inner: {
    borderRadius: 12,
    overflow: 'hidden',
    height: 100,
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  accent: { height: 6 },
  text: { textAlign: 'center', top: -4 },
});

export default memo(CategoryTile);
