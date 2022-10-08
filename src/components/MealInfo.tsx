import { Fragment, memo } from 'react';
import { View } from 'react-native';

import { Text, useTheme } from '@ui-kitten/components';
import { Entypo } from '@expo/vector-icons';

import { Meal } from '~data';

const MealInfo = ({ duration, complexity, affordability }: Meal) => {
  const theme = useTheme();

  const info = [
    { id: 'duration', value: `${duration}m` },
    { id: 'complexity', value: complexity.toUpperCase() },
    { id: 'affordability', value: affordability.toUpperCase() },
  ];

  return (
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
  );
};

export default memo(MealInfo);
