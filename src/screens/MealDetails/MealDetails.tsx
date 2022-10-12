import { memo, useCallback, useLayoutEffect } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, useStyleSheet } from '@ui-kitten/components';
import { useHeaderHeight } from '@react-navigation/elements';
import { useAtom } from 'jotai';

import { MEALS } from '~data';
import { RootStackScreenProps } from '~nav-types';
import { IconButton, List, MealInfo, Subtitle } from '~components';
import { favoritesAtom } from '~store';

const MealDetails = (props: RootStackScreenProps<'MealDetails'>) => {
  const { route, navigation } = props;
  const { mealId } = route.params;

  const meal = MEALS.find((el) => el.id === mealId);

  const { bottom } = useSafeAreaInsets();
  const styles = useStyleSheet(themedStyles);
  const headerHeight = useHeaderHeight();

  const [favorites, setFavourites] = useAtom(favoritesAtom);
  const isFavorite = favorites.includes(mealId);

  const onFavouritePress = useCallback(async () => {
    if (isFavorite) {
      void setFavourites((prev) => prev.filter((el) => el !== mealId));
    } else {
      void setFavourites((prev) => [...prev, mealId]);
    }
  }, [isFavorite, mealId, setFavourites]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name={isFavorite ? 'star' : 'star-outline'}
          color="color-warning-300"
          onPress={onFavouritePress}
        />
      ),
    });
  }, [isFavorite, navigation, onFavouritePress]);

  if (meal == null) return null;

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: bottom,
        paddingTop: headerHeight,
      }}
    >
      {/* @ts-expect-error */}
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />

      <View style={{ padding: 16 }}>
        <Text category="h2" style={{ marginBottom: 4 }}>
          {meal.title}
        </Text>

        <MealInfo {...meal} />

        <Subtitle>Ingredients</Subtitle>
        <List data={meal.ingredients} />

        <Subtitle>Steps</Subtitle>
        <List data={meal.steps} />
      </View>
    </ScrollView>
  );
};

const themedStyles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
});

export default memo(MealDetails);
