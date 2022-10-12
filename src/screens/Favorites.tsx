import { memo, useMemo } from 'react';

import { useAtom } from 'jotai';
import { Text } from '@ui-kitten/components';

import { MealsList } from '~components';
import { favoritesAtom } from '~store';
import { MEALS } from '~data';

const Favorites = () => {
  const [favorites] = useAtom(favoritesAtom);

  const meals = useMemo(
    () => MEALS.filter((meal) => favorites.includes(meal.id)),
    [favorites]
  );

  if (meals.length === 0) {
    return (
      <Text category="h4" style={{ textAlign: 'center', margin: 16 }}>
        You have no favorite meals yet.
      </Text>
    );
  }

  return <MealsList meals={meals} />;
};

export default memo(Favorites);
