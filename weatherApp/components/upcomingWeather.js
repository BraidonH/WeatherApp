import {View, Text, TextInput, SafeAreaView, FlatList} from 'react-native';


const DATA = [
    {},
    {},
    {}
]

const Item = (props) => {
    const {dt_text, min, max, condition} = props
    return (

    )
}
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