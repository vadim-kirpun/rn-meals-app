import { memo } from 'react';
import { FlatList, StyleProp, View, ViewStyle } from 'react-native';

import { Meal } from '~data';

import MealItem from './MealItem';

interface IMealsList {
  meals: Meal[];
  style?: StyleProp<ViewStyle>;
}

const MealsList = ({ meals, style }: IMealsList) => (
  <FlatList
    data={meals}
    contentContainerStyle={[{ padding: 16 }, style]}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <MealItem {...item} />}
    ItemSeparatorComponent={() => <View style={{ marginVertical: 8 }} />}
  />
);

export default memo(MealsList);
