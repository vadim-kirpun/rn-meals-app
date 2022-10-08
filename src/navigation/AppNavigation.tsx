import { memo } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@ui-kitten/components';

import { Categories, MealDetails, Meals } from '~screens';
import { RootStackParamList } from '~nav-types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerBackTitle: 'Back',
        headerBackTitleStyle: { fontFamily: 'NunitoRegular' },
        contentStyle: { backgroundColor: theme['color-primary-500'] },
        headerStyle: { backgroundColor: theme['color-primary-700'] },
        headerTintColor: theme['color-primary-100'],
        headerTitleStyle: { fontFamily: 'NunitoBold', fontSize: 19 },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ title: 'All Categories' }}
      />

      <Stack.Screen
        name="Meals"
        component={Meals}
        options={({ route }) => ({
          title: `${route.params.categoryTitle} Meals`,
        })}
      />

      <Stack.Screen
        name="MealDetails"
        component={MealDetails}
        options={({ route }) => ({ title: route.params.mealTitle })}
      />
    </Stack.Navigator>
  );
};

export default memo(AppNavigation);
