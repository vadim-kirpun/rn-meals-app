import { memo, useCallback, useLayoutEffect } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, useStyleSheet, useTheme } from '@ui-kitten/components';
import { useHeaderHeight } from '@react-navigation/elements';

import { RootStackScreenProps } from '~nav-types';
import { MEALS } from '~data';
import { IconButton, List, MealInfo, Subtitle } from '~components';

const MealDetails = (props: RootStackScreenProps<'MealDetails'>) => {
  const { route, navigation } = props;

  const { bottom } = useSafeAreaInsets();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const headerHeight = useHeaderHeight();

  const onFavouritePress = useCallback(() => {}, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name="star-outline"
          color="color-warning-300"
          onPress={onFavouritePress}
        />
      ),
    });
  }, [navigation, onFavouritePress, theme]);

  const meal = MEALS.find((el) => el.id === route.params.mealId);

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
