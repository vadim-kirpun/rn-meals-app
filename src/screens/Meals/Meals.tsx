import { memo, useMemo } from 'react';

import { useHeaderHeight } from '@react-navigation/elements';

import { RootStackScreenProps } from '~nav-types';
import { MealsList } from '~components';
import { MEALS } from '~data';

const Meals = ({ route }: RootStackScreenProps<'Meals'>) => {
  const { categoryId } = route.params;

  const headerHeight = useHeaderHeight();

  const meals = useMemo(
    () => MEALS.filter((meal) => meal.categoryIds.includes(categoryId)),
    [categoryId]
  );

  return <MealsList meals={meals} style={{ paddingTop: headerHeight + 16 }} />;
};

export default memo(Meals);
