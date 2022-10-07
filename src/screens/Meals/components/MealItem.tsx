import { Fragment, memo } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { Text, useTheme } from '@ui-kitten/components';

import { Meal } from '~data';

const MealItem = (props: Meal) => {
  const { title, imageUrl, duration, complexity, affordability } = props;

  const theme = useTheme();

  const info = [
    { id: 'duration', value: `${duration}m` },
    { id: 'complexity', value: complexity.toUpperCase() },
    { id: 'affordability', value: affordability.toUpperCase() },
  ];

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.card} activeOpacity={0.8}>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View style={styles.info}>
          <Text category="h5" style={{ marginBottom: 4 }}>
            {title}
          </Text>

          <View style={{ flexDirection: 'row' }}>
            {info.map((el) => (
              <Fragment key={el.id}>
                <Text category="c1" appearance="hint">
                  {el.value}
                </Text>

                {el.id !== 'affordability' && (
                  <Entypo
                    name="dot-single"
                    size={16}
                    color={theme['color-basic-700']}
                  />
                )}
              </Fragment>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: { width: 4, height: 4 },
    backgroundColor: 'white',
    borderRadius: 30,
  },
  card: { borderRadius: 30, overflow: 'hidden' },
  image: { width: '100%', height: 150 },
  info: { paddingHorizontal: 24, paddingVertical: 16 },
});

export default memo(MealItem);
