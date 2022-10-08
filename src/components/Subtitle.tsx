import { memo, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { Text, useStyleSheet } from '@ui-kitten/components';

const Subtitle = ({ children }: PropsWithChildren<any>) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.subtitle}>
      <Text category="h4">{children}</Text>
    </View>
  );
};

const themedStyles = StyleSheet.create({
  subtitle: {
    alignItems: 'center',
    marginTop: 32,
    paddingBottom: 8,
  },
});

export default memo(Subtitle);
