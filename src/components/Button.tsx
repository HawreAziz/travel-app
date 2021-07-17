import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import COLORS from '../consts/colors';


interface ButtonProps {
  title: string;
  onPress: () => void;
}


const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={
        {
          backgroundColor: COLORS.light,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          width: 120,
          borderRadius: 10
        }
      } onPress={onPress}>
      <Text style={{ fontSize: 15, fontWeight: 'bold'}} >{title}</Text>
    </TouchableOpacity>
  );
}

export { Button };
