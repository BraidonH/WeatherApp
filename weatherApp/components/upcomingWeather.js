import {View, Text, TextInput, SafeAreaView, FlatList} from 'react-native';


const DATA = [
    {},
    {},
    {}
]

export default function upcomingWeather() {
    return (
       <SafeAreaView>
        <View>
            <Text>
                Upcoming Weather:
            </Text>
            <FlatList
                data={}
                renderItem={}
            />
        </View>
       </SafeAreaView>
    )
}