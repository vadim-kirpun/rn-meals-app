import { memo } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, useTheme } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import { Meal } from '~data';

import MealInfo from './MealInfo';

const MealItem = (props: Meal) => {
  const { id, title, imageUrl } = props;

  const navigation = useNavigation();
  const theme = useTheme();

  const onPress = () =>
    navigation.navigate('MealDetails', { mealId: id, mealTitle: title });

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View
          style={[styles.info, { backgroundColor: theme['color-primary-200'] }]}
        >
          <Text
            category="h5"
            appearance="alternative"
            style={{ marginBottom: 4 }}
          >
            {title}
          </Text>

          <MealInfo {...props} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    shadowOffset: { width: 4, height: 4 },
    borderRadius: 30,
  },
  card: { borderRadius: 30, overflow: 'hidden' },
  image: { width: '100%', height: 150 },
  info: { paddingHorizontal: 24, paddingTop: 12, paddingBottom: 16 },
});

export default memo(MealItem);
