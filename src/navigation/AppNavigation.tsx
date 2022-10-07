import { memo } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Categories, Meals } from '~screens';
import { RootStackParamList } from '~nav-types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => (
  <Stack.Navigator initialRouteName="Categories">
    <Stack.Screen name="Categories" component={Categories} />
    <Stack.Screen name="Meals" component={Meals} />
  </Stack.Navigator>
);

export default memo(AppNavigation);
