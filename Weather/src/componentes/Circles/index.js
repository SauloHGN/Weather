import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Vento from '../../assets/iconsWeather/wind.svg';
import Lua from '../../assets/iconsWeather/moon.svg';

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

                <View style={styles.iconContainer}>
                     <Vento width={40} height={40}/>        
                </View>   
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
                <View style={styles.iconContainer}>
                     <Lua width={80} height={80}/>        
                </View>   
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
        marginTop: 20,
        paddingBottom: 5,
        paddingStart: 16,
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
        marginLeft: 10,
        borderRadius: 20,
        height: 82,
        width: 82,
    },
    iconContainer:
     {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
      },
});