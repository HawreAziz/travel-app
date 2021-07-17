import React from 'react';
import { SafeAreaView, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

interface StyleProps {
  header: ViewStyle;
  iconView: TextStyle;
}

interface HeaderProps {
  goBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ goBack }): React.ReactElement => {
  return (
    <SafeAreaView style={styles.header}>
      <Icon name='arrow-back-ios' size={30} style={styles.iconView} onPress={goBack} />
      <Icon name='more-vert' size={30} style={styles.iconView} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create<StyleProps>({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    paddingHorizontal: 15
  },
  iconView: {
    color: COLORS.secondary
  }
});

export { Header };
