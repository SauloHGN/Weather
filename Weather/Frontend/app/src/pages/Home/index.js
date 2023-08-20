import { StyleSheet, Text, View } from 'react-native';

import Header from '../../componentes/Header'

export default function Home() {
    return ( 
        <View style={styles.container}>
            <Header/>
            <Text>Teste</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor: '#000',
    },

});