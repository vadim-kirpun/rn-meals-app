import { memo } from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES } from '~data';

import CategoryTile from './components/CategoryTile';

const Categories = () => (
  <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <CategoryTile {...item} />}
    numColumns={2}
  />
);

export default memo(Categories);
