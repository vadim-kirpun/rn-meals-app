/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';

export type DrawerParamList = {
  Categories: undefined;
  Favourites: undefined;
};

export type RootStackParamList = {
  DrawerNavigator: NavigatorScreenParams<DrawerParamList>;
  Meals: {
    categoryId: string;
    categoryTitle: string;
  };
  MealDetails: {
    mealId: string;
    mealTitle: string;
  };
};

export type DrawerStackScreenProps<T extends keyof DrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<DrawerParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
