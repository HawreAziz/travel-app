import React from 'react'
import { View, ViewStyle,  StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

interface StyleProps {
  categoryView: ViewStyle;
  iconView: ViewStyle;

}

const Categories: React.FC = () => {
  return (
    <View style={ styles.categoryView }>
      <Icon name="flight" size={30} style= {styles.iconView }/>
      <Icon name="beach-access" size={30} style= {styles.iconView }/>
      <Icon name="near-me" size={30} style= {styles.iconView }/>
      <Icon name="location-pin" size={30} style= {styles.iconView }/>
    </View>
  );
}

const styles = StyleSheet.create<StyleProps>({
  categoryView: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconView: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: COLORS.grey,
  }
})

export { Categories };
