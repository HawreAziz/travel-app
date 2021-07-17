import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';


export interface PlaceProps {
  id: string;
  name: string;
  image: ImageSourcePropType;
  location: string;
  details: string;
}

export type ScreenParams = {
  Home: undefined;
  OnBoard: undefined;
  Detail: { place: PlaceProps };
}

export type ScreenProps<T extends keyof ScreenParams> = {
  navigation: StackNavigationProp<ScreenParams, T>,
  route: RouteProp<ScreenParams, T>
}
