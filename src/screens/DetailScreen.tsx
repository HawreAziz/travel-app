import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  ViewStyle,
  ImageBackground,
} from 'react-native';
import { ScreenProps } from '../types';
import { Button, Header } from '../components';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';



interface StyleProps {
  bodyView: ViewStyle;
  imgDetail: ViewStyle;
  favoriteView: ViewStyle;
  footer: ViewStyle;
}


const DetailScreen: React.FC<ScreenProps<'Detail'>> = ({ navigation, route }): React.ReactElement | null => {
  const place  =  route.params?.place;
  if(!place){
    return null;
  }

  const Price: React.FC = (): React.ReactElement => {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: COLORS.secondary, fontWeight: 'bold'}} >$100</Text>
          <Text style={{ color: COLORS.grey, fontSize: 12}} >/PER DAY</Text>
        </View>
      );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} >
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
      <ImageBackground source={place.image} style={{ flex: .7 }} >
        <Header goBack={navigation.goBack}/>
        <View style={styles.imgDetail}>
          <Text style={
            { 
              fontSize: 28, 
              fontWeight: 'bold', 
              color: COLORS.secondary,
              width: '70%',
              }
          }>
            {place.name}
          </Text>
          <View style={{ flexDirection: 'row'}}>
            <Icon name='star' size={28} color={COLORS.orange} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.secondary }}>5.0</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.bodyView}>
        <View style={styles.favoriteView}>
          <Icon name='favorite' size={35} color={COLORS.red} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Icon name='location-pin' size={28} />
          <Text style={{ fontSize: 16, fontWeight: 'bold' }} >{place.name}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About the trip</Text>
          <Text style={{ marginTop: 20, lineHeight: 20 }}>{place.details}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Price />
        <Button title='Book Now' onPress={() => {console.log('TODO')}} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create<StyleProps>({
  bodyView: {
    flex: .3,
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: -30,
    backgroundColor: COLORS.light,
  },
  imgDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    position: 'absolute',
    bottom: 30,
  },
  favoriteView: { 
    backgroundColor: 'white',
    borderRadius: 30, 
    width: 60, 
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 30,
    position: 'absolute',
    right: 15,
    top: -30
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: COLORS.primary,
  }
})

export { DetailScreen };
