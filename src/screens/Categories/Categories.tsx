import { memo } from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES, Category } from '~data';
import { RootStackScreenProps } from '~nav-types';

import CategoryTile from './components/CategoryTile';

const Categories = ({ navigation }: RootStackScreenProps<'Categories'>) => {
  const onCategoryPress = (categoryId: Category['id']) =>
    navigation.navigate('Meals', { categoryId });

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryTile {...item} onPress={() => onCategoryPress(item.id)} />
      )}
      numColumns={2}
    />
  );
};

export default memo(Categories);
