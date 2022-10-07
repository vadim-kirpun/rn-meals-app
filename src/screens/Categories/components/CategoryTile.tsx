import { memo } from 'react';
import { View, StyleSheet } from 'react-native';

import { Card, Text } from '@ui-kitten/components';

import { Category } from '~data';

interface ICategoryTile extends Category {
  onPress: () => void;
}

const CategoryTile = ({ title, color, onPress }: ICategoryTile) => (
  <View style={styles.cardWrapper}>
    <Card
      style={styles.card}
      status="info"
      appearance="filled"
      onPress={onPress}
      accent={() => (
        <View style={[styles.accent, { backgroundColor: color }]} />
      )}
    >
      <View style={styles.inner}>
        <Text category="h5" style={styles.text}>
          {title}
        </Text>
      </View>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    margin: 16,
    shadowColor: 'black',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 4, height: 4 },
    elevation: 4,
  },
  card: { height: 100, borderRadius: 12 },
  inner: { height: '100%', justifyContent: 'center' },
  accent: { width: '100%', height: 4 },
  text: { textAlign: 'center', top: -4 },
});

export default memo(CategoryTile);
