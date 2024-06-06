import {useState, useEffect} from 'react';
import { Image, StyleSheet, Platform, Button } from 'react-native';
import { Dimensions } from 'react-native'
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function CurrentWeather({data, sectionSelect}) {
const [location, setLocation] = useState(null);
const [weatherData, setWeatherData] = useState({});
const [error, setError] = useState(null); 


useEffect(() => {
  (async() => {
    let {} = await Location.requestForegroundPermissionsAsync
  })
}, [])

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.fontHeaders}>Current Weather</Text>
        <Text>
          <Text style={styles.fontData}>{}{}</Text>
        </Text>
        <Text style={styles.fontHeaders}>
          Feels like <Text style={styles.fontData}>{}{}</Text>
        </Text>
        <View style={styles.horizontal}>
          <Text style={styles.fontHeaders}>
            High: <Text style={styles.fontData}>{}{}</Text>
          </Text>
          <Text style={styles.fontHeaders}>
            Low: <Text style={styles.fontData}>{}{}</Text>
          </Text>
        </View>
        <View style={{
          paddingTop: 30,
          paddingBottom: 30
        }}>
          <Text style={styles.fontHeaders}>It's Sunny <Feather name="sun" size={24} color="black" /></Text>
          <Text style={styles.fontData}>It's perfect t-shirt weather</Text>
        </View>
        <Button
        onPress={() => sectionSelect("")}
        title="return"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
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
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 150
  },
  fontHeaders: {
    fontSize: 36,
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
    backgroundColor: '#94b3ac',
    padding: 30,
    marginTop: 30,
    justifyContent: 'space-evenly', 
    width: screen.width
  }
})
