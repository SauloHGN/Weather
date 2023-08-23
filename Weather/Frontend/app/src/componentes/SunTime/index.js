import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function Circles()
{

    return(
        <View style = {styles.container}>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create
({
    container: 
    {
        flex: 1,
        backgroundColor: '#46474a',
        flexDirection: 'row',
        paddingStart: 10,
        paddingEnd: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 10,
        marginBottom: 10,
        marginStart: 12,
        marginEnd: 12,
        borderRadius: 15,
    }
})