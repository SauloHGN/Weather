import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function Circles()
{
    return(

        <View style= {styles.container}>

        <View style= {styles.row}>

            <View style={styles.item}>
            <Text>Icon</Text>
            <Text>Umidade</Text>
            </View>

            <View style={styles.item}>
            <Text>Icon</Text>
            <Text>Vento</Text>
            </View>

            <View style={styles.item}>
            <Text>Icon</Text>
            <Text>Visibilidade</Text>
            </View>

            <View style={styles.item}>
            <Text>Icon</Text>
            <Text>Pressão</Text>
            </View>

        </View>  

        <View style= {styles.row}>
        
            <View style={styles.item}>
            <Text>Icon</Text>
            <Text>Raios UV</Text>
            </View>

            <View style={styles.item}>
            <Text>Icon</Text>
            <Text>Qualidade do Ar</Text>
            </View>

            <View style={styles.item}>
            <Text>Icon</Text>
            <Text>Pólem</Text>
            </View>

            <View style={styles.item}>
            <Text>Icon</Text>
            <Text>fase da Lua</Text>
            </View>

         </View>

        </View>
    )
}

const styles = StyleSheet.create
({
    container:
    {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 15,
        paddingBottom: 10,
        paddingStart: 10,
        paddingEnd: 25,
      
    },
    row: 
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    item:
    {
        backgroundColor: '#46474a',
        alignItems: 'center',
        marginLeft: 15,
        borderRadius: 20,
        height: 75,
        width: 75,
    },
});