import { memo, useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { RootStackScreenProps } from '~nav-types';
import { MEALS } from '~data';

import MealItem from './components/MealItem';

const Meals = ({ route }: RootStackScreenProps<'Meals'>) => {
  const { categoryId } = route.params;

  const meals = useMemo(
    () => MEALS.filter((meal) => meal.categoryIds.includes(categoryId)),
    [categoryId]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        contentContainerStyle={{ padding: 32 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem {...item} />}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 16 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(Meals);
