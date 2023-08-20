import React from 'react';

import{
    View,
    StyleSheet,
    Text,
} from 'react-native'

export default function Header()
{
    return(
        <View style={styles.container}>
            <Text>
                Texto Header
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor: '#8000ff',
    }

});