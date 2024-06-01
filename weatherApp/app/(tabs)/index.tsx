import CurrentWeather from '../../components/currentWeather';
import {useState} from 'react';
import {View, Image, StyleSheet, Platform, Dimensions, Text} from 'react-native';
import {Button} from 'react-native'

export default function HomeSceen() {
  let screen =  {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
    }
  const [toggleFeature, useToggleFeature] = useState('');

  function sectionSelect(choice) {
    useToggleFeature(choice)
  }

  if(toggleFeature.length == 0) {
    return (
      <View style={{
        height: screen.height,
        width: screen.width,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
        <Text style={{
          color: 'white',
          fontSize: 65,
          
        }}>
          Weather IO
        </Text>
        <Button
        onPress={() => sectionSelect("current")}
        title="Get Currrent Weather"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
    </View>
    )
  } else if(toggleFeature == "current") {
    return (
      <CurrentWeather data={toggleFeature} sectionSelect={sectionSelect}/>
    )
  }
}