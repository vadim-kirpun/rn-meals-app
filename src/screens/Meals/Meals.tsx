import { memo, useMemo } from 'react';
import { FlatList, View } from 'react-native';

import { useHeaderHeight } from '@react-navigation/elements';

import { RootStackScreenProps } from '~nav-types';
import { MEALS } from '~data';

import MealItem from './components/MealItem';

const Meals = ({ route }: RootStackScreenProps<'Meals'>) => {
  const { categoryId } = route.params;

  const headerHeight = useHeaderHeight();

  const meals = useMemo(
    () => MEALS.filter((meal) => meal.categoryIds.includes(categoryId)),
    [categoryId]
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={meals}
        contentContainerStyle={{ padding: 16, paddingTop: headerHeight + 16 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem {...item} />}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 8 }} />}
      />
    </View>
  );
};

export default memo(Meals);
