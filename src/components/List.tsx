import { memo } from 'react';
import { View, StyleSheet } from 'react-native';

import { Text, useStyleSheet } from '@ui-kitten/components';

interface IList {
  data: string[];
}

const List = ({ data }: IList) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <>
      {data.map((el) => (
        <View key={el} style={styles.row}>
          <Text style={styles.text}>{el}</Text>
        </View>
      ))}
    </>
  );
};

const themedStyles = StyleSheet.create({
  row: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: 'color-primary-200',
    marginBottom: 8,
  },
  text: {
    color: 'color-primary-900',
    textAlign: 'center',
  },
});

export default memo(List);
