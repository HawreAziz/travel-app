import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  ImageBackground,
  ImageStyle,
  TextStyle,
  Dimensions
} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PlaceProps } from '../types';

interface CardProps {
  place: PlaceProps; 
  onPress: () => void;
  cardWidth?: number;
}

interface StyleProps {
  cardContainer: ViewStyle;
  imageView: ImageStyle;
  descriptionStyle: TextStyle;
}

const CardView: React.FC<CardProps> = ({ place, onPress, cardWidth }) => {

  const showDescription = (description: string | null): React.ReactElement | null => {
    return (
      description ? <Text style={styles.descriptionStyle}>{description}</Text> : null
    );
  }

  const width = cardWidth ? cardWidth : Dimensions.get('screen').width / 2;
  const description = cardWidth ? place.details : null;
  return (
    <TouchableOpacity activeOpacity={1.9} onPress={onPress}>
      <ImageBackground source={place.image} style={{ width, ...styles.imageView}}>
        <View style={{ flex: 1, justifyContent: 'space-between'}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.light }}>{place.name}</Text>
          { showDescription(description)}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name='location-pin' color={COLORS.secondary} size={20}/>
              <Text style={{ fontSize: 18, color: COLORS.light}}>{place.location}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: "center" }}>
              <Icon name="star-rate" style={{ fontSize: 18, color: COLORS.light }} />
              <Text style={{ fontSize: 18, color: COLORS.light }}>5.0</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create<StyleProps>({
  cardContainer: {
    height: 200,
    marginRight: 20,
  },
  imageView: {
    height: 220,
    borderRadius: 20,
    padding: 10,
    overflow: 'hidden',
    marginRight: 20
  },
  descriptionStyle: {
    color: COLORS.grey,
    fontSize: 15
  }
});

export { CardView };
