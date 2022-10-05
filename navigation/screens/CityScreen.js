import * as React from 'react';
import { View, Text } from 'react-native';

export default function CityScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "City Name Screen" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>City Name Screen</Text>
        </View>
    );
}
