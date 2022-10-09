import { memo } from 'react';
import { FlatList } from 'react-native';

import { useHeaderHeight } from '@react-navigation/elements';

import { CATEGORIES, Category } from '~data';
import { RootStackScreenProps } from '~nav-types';

import CategoryTile from './components/CategoryTile';

const Categories = ({ navigation }: RootStackScreenProps<'Categories'>) => {
  const headerHeight = useHeaderHeight();

  const onCategoryPress = ({ id, title }: Category) =>
    navigation.navigate('Meals', { categoryId: id, categoryTitle: title });

  return (
    <FlatList
      data={CATEGORIES}
      contentContainerStyle={{ paddingTop: headerHeight }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryTile {...item} onPress={() => onCategoryPress(item)} />
      )}
      numColumns={2}
    />
  );
};

export default memo(Categories);
