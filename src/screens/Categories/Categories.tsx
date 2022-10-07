import { memo } from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { CATEGORIES } from '~data';

import CategoryTile from './components/CategoryTile';

const Categories = () => (
  <SafeAreaView>
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CategoryTile {...item} />}
      numColumns={2}
    />
  </SafeAreaView>
);

export default memo(Categories);
