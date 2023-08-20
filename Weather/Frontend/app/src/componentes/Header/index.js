import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

export default function Header()
{
    return(
        <View styles= {styles.container}>
            <Text>Texto de Teste</Text>
        </View>
    )
}

const styles = StyleSheet.create
({
    container: 
    {
        backgroundColor: '8000ff',
    }
})