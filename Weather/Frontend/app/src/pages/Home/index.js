import { StyleSheet, View, Text } from 'react-native';
import Header from '../../componentes/Header'
import Slider from '../../componentes/Slider';
import WeekTemp from '../../componentes/WeekTemp';

export default function Home()
{
    return(
        <View style= {styles.container}>
            <Header temperatura ="17º" clima="Parc. Nublado" maxTemp="20º" minTemp="12º" loc="Londres" sensacao="16º"/>
            
            <Slider/>

            <WeekTemp/>
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create
({
    container: 
    {
        flex: 1,
        backgroundColor: '#fafafa',
    },
});