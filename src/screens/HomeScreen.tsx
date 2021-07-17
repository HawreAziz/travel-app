import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StatusBar,
  ScrollView,
  TextInput,
  TextStyle,
  FlatList,
  Dimensions,
 } from 'react-native';
import { Categories, CardView } from '../components';
import COLORS from '../consts/colors';
import places from '../consts/places';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScreenProps } from '../types';

interface StyleProps {
  header: ViewStyle;
  searchView: ViewStyle;
  categoryView: ViewStyle;
  categoryText: TextStyle;
}

const HomeScreen: React.FC<ScreenProps<'Home'>> = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
      <View style={styles.header}>
        <Icon name='sort' size={28} color={COLORS.secondary} />
        <Icon name='notifications-none' size={28} color={COLORS.secondary} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={
          {
            height: 130,
            paddingTop: 10,
            paddingHorizontal: 20,
            backgroundColor: COLORS.primary
          }
        } >
          <Text style={{ fontSize: 20, color: COLORS.secondary, fontWeight: 'bold' }}>Explore the</Text>
          <Text style={{ fontSize: 20, color: COLORS.secondary, fontWeight: 'bold' }}>beautiful places</Text>
        </View>

        <View style={ styles.searchView } >
          <Icon name="search" size={28} />
          <TextInput placeholder="Search places" style={{ marginLeft: 5 }}/>
        </View>
        <Categories />
        <View style={styles.categoryView}>
          <Text style={styles.categoryText}>Places</Text>
          <FlatList
            style={{ marginVertical: 10 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({item}) => {
              return <CardView place={item} onPress={() => navigation.navigate('Detail', {place: item})}/>
            }}
          />
          <Text style={{ marginBottom: 10, ...styles.categoryText}}>Recommended</Text>
          <CardView
            cardWidth={Dimensions.get('screen').width - 40 }
            place={places[0]}
            onPress={() => navigation.navigate('Detail', {place: places[0]})}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create<StyleProps>({
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 40
  },
  searchView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 15,
    top: -30,
    backgroundColor: COLORS.light,
    elevation: 15
  },
  categoryView: {
    marginVertical: 20,
    marginLeft: 20
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export { HomeScreen };
