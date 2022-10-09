import { memo, useRef } from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon, useTheme } from '@ui-kitten/components';

interface IIconButton {
  name: string;
  onPress: () => void;
}

const IconButton = ({ onPress, name }: IIconButton) => {
  const theme = useTheme();
  const iconRef = useRef<Icon<any>>(null);

  const handlePress = () => {
    onPress();
    iconRef.current?.startAnimation();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Icon
        name={name}
        ref={iconRef}
        animation="pulse"
        fill={theme['color-warning-300']}
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export default memo(IconButton);
