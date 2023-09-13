import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Header from '../../componentes/Header';
import Slider from '../../componentes/Slider';
import WeekTemp from '../../componentes/WeekTemp';
import Circles from '../../componentes/Circles';
import SunTime from '../../componentes/SunTime';
import AirQuality from '../../componentes/AirQuality';

export default function Home()
{
    return(
        <ScrollView contentContainerStyle={styles.scroll}>
            
            <View style={styles.container}>   
      
            <Header temperatura ="17º" clima="Parc. Nublado" maxTemp="20º" minTemp="12º" loc="Londres" sensacao="16º"/>
          
            <Slider/>
            <WeekTemp/>
            <Circles/>
            <AirQuality/>
            <SunTime/>

            <Text></Text>

            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create
({
    scroll: 
    {
        flexGrow: 1,
    },
    container: 
    {
        flex: 1,
    },
});