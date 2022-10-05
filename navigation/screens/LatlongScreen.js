import * as React from 'react';
import { View, Text } from 'react-native';

export default function LatlongScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Lat-Long Screen" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Lat-Long Screen</Text>
        </View>
    );
}