import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <View style={{flex: 1, flexDirection: 'row',
          marginBottom: 10}}>
            <TouchableOpacity style={{flex: 1}}>
              <Text style={styles.cancelBtn}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}}
              onPress={() => navigate('SearchResults')}>
              <Text style={styles.searchBtn}>Search</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 4}}>
            <View style={styles.searchBar}>
              <Image source={require('../assets/images/search.png')}
                style={styles.icon} resizeMode='contain' />
              <Text style={styles.searchBarText}>Burgers</Text>
            </View>
            <View style={styles.searchBar}>
              <Image source={require('../assets/images/location_icon.png')}
                style={styles.icon} resizeMode='contain' />
              <Text style={styles.searchBarText}>
              Financial District, Manhattan, NY</Text>
            </View>
            <View style={styles.searchBar}>
              <Image source={require('../assets/images/plant_based_icon.png')}
                style={styles.icon} resizeMode='contain' />
              <Text style={styles.searchBarText}>Vegetarian</Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.container, styles.pad}>
          <Text style={styles.title}>Veggie News</Text>
          <View style={styles.promotion}>
            <Image source={
              require('../assets/images/carls_jr.jpg')} style={styles.image}
              resizeMode='contain'
            />
          </View>
          <View style={styles.promotion}>
            <Image source={
              require('../assets/images/just_mayo.jpg')} style={styles.image}
              resizeMode='contain'
            />
          </View>
          <View style={styles.promotion}>
            <Image source={
              require('../assets/images/impossible_burger.png')}
              style={styles.image}
              resizeMode='contain'
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const GREEN = '#3e8914';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pad: {
    padding: 15,
    paddingTop: 0
  },
  search: {
    backgroundColor: GREEN,
    padding: 10,
    paddingTop: 30,
    flex: 3
  },
  cancelBtn: {
    color: '#fff',
    fontSize: 10,
  },
  searchBtn: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'right'
  },
  searchBar: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginTop: 2.5,
    marginBottom: 2.5,
    padding: 5,
    flexDirection: 'row'
  },
  icon: {
    flex: 1,
    height: undefined,
    width: undefined,
    padding: 5
  },
  searchBarText: {
    flex: 8,
    fontSize: 10,
  },
  title: {
    textAlign: 'center',
    color: GREEN,
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold'
  },
  promotion: {
    backgroundColor: GREEN,
    height: 100,
    marginTop: 5,
    marginBottom: 5
  },
  image: {
    flex:1,
    height: undefined,
    width: undefined,
  }
});
