import React from 'react';
import { View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Button } from '../components';
import COLORS from '../consts/colors';
import { ScreenProps } from '../types';


interface StyleProps {
  textView: ViewStyle;
}


const OnBoradScreen: React.FC<ScreenProps<'OnBoard'>> = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
      <ImageBackground style={{ flex: 1 }} source={require('../assets/onboardImage.jpg')}>
        <View style={styles.textView} >
          <Text style={
            {
              fontSize: 35,
              color: COLORS.light,
              fontWeight: 'bold',
            }
          }>Discover</Text>
          <Text style={
            {
              fontSize: 35,
              color: COLORS.light,
              fontWeight: 'bold',
            }
          }>world with us</Text>
          <Text style={{ color: COLORS.grey, marginVertical: 20, lineHeight: 25 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
            sem non erat vehicula dignissim. Morbi eget congue ante, feugiat.
          </Text>
          <Button title="Get Started" onPress={() => navigation.navigate('Home')} />
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create<StyleProps>({
  textView: {
    position: 'absolute',
    height: '50%',
    borderColor: 'white',
    bottom: 0,
    paddingHorizontal: 30,
  }
})

export { OnBoradScreen };
