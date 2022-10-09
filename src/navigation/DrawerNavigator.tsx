import { memo } from 'react';

import { Icon, useTheme } from '@ui-kitten/components';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Categories, Favourites } from '~screens';
import { DrawerParamList } from '~nav-types';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  const theme = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        sceneContainerStyle: { backgroundColor: theme['color-primary-500'] },
        headerTintColor: theme['color-primary-100'],
        headerTitleStyle: { fontFamily: 'NunitoBold', fontSize: 19 },
        headerStyle: { backgroundColor: theme['color-primary-700'] },
        drawerStyle: { backgroundColor: theme['color-primary-200'] },
        drawerActiveBackgroundColor: theme['color-primary-800'],
        drawerActiveTintColor: theme['color-primary-100'],
        drawerInactiveTintColor: theme['color-primary-900'],
        headerShadowVisible: false,
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color }) => (
            <Icon name="list" fill={color} style={{ width: 24, height: 24 }} />
          ),
        }}
      />

      <Drawer.Screen
        name="Favourites"
        component={Favourites}
        options={{
          title: 'Favourite Meals',
          drawerIcon: ({ color }) => (
            <Icon name="star" fill={color} style={{ width: 24, height: 24 }} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default memo(DrawerNavigator);
