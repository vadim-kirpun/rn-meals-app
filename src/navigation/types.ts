/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Categories: undefined;
  Meals: {
    categoryId: string;
    categoryTitle: string;
  };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
