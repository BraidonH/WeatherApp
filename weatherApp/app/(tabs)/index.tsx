import {useState} from 'react';
import { Image, StyleSheet, Platform } from 'react-native';
import { Dimensions } from 'react-native'
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import { measure } from 'react-native-reanimated';

export default function HomeScreen() {
  let temp = 0;
  let measurement = '℉';
  let feels = 0;
  let high = 0;
  let low = 0;
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.fontHeaders}>Current Weather</Text>
        <Text>
          <Text style={styles.fontData}>{temp}{measurement}</Text>
        </Text>
        <Text style={styles.fontHeaders}>
          Feels like <Text style={styles.fontData}>{feels}{measurement}</Text>
        </Text>
        <View style={styles.horizontal}>
          <Text style={styles.fontHeaders}>
            High: <Text style={styles.fontData}>{high}{measurement}</Text>
          </Text>
          <Text style={styles.fontHeaders}>
            Low: <Text style={styles.fontData}>{low}{measurement}</Text>
          </Text>
        </View>
        <View style={{
          paddingTop: 30
        }}>
          <Text style={styles.fontHeaders}>It's Sunny</Text>
          <Text style={styles.fontData}>It's perfect t-shirt weather</Text>
        </View>
      </View>
    </SafeAreaView>  

  );
}

let screen =  {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
  }
const styles = StyleSheet.create({
  container: {
    height: screen.height,
    width: screen.width,
    backgroundColor: 'orange',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  fontHeaders: {
    fontSize: 48,
    textAlign: 'center'
  },
  fontData: {
    fontSize: 24
  },
  vertical: {
    flexDirection: 'column',
    backgroundColor: 'red'
  },
  horizontal: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 20,
    justifyContent: 'space-evenly', 
    width: screen.width
  }
})
