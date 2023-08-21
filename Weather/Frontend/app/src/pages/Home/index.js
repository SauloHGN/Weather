import { StyleSheet, View, Text } from 'react-native';
import Header from '../../componentes/Header'

export default function Home()
{
    return(
        <View style= {styles.container}>
            <Header/>
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create
({
    container: 
    {
        flex: 1,
        backgroundColor: '#8000ff',
    },
});