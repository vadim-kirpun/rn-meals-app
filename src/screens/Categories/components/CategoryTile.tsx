import { memo } from 'react';
import { View, StyleSheet } from 'react-native';

import { Card, Text } from '@ui-kitten/components';

import { Category } from '~data';

interface ICategoryTile extends Category {
  onPress: () => void;
}

const CategoryTile = ({ title, color, onPress }: ICategoryTile) => (
  <Card
    style={styles.card}
    status="info"
    onPress={onPress}
    accent={() => <View style={[styles.accent, { backgroundColor: color }]} />}
  >
    <View style={styles.inner}>
      <Text category="h5" style={{ textAlign: 'center' }}>
        {title}
      </Text>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  card: { flex: 1, margin: 16, height: 100 },
  inner: { height: '100%', justifyContent: 'center' },
  accent: { width: '100%', height: 3 },
});

export default memo(CategoryTile);
