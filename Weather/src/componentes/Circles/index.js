import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Vento from '../../assets/iconsWeather/wind.svg';
import UV from '../../assets/iconsWeather/uv3.svg';
import Umidade from '../../assets/iconsWeather/gota.svg';
import Lua from '../../assets/iconsWeather/moon.svg';
import Pressao from '../../assets/iconsWeather/pressure.svg';
import Visibilidade from '../../assets/iconsWeather/Vector.svg';

export default function Circles()
{
    return(

        <View style= {styles.container}>

        <View style= {styles.row}>

            <View style={styles.item}>
            <View style={styles.iconContainer}>
                     <Umidade width={40} height={40}/>        
                </View> 
            <Text>Umidade</Text>
            </View>

            <View style={styles.item}>

                <View style={styles.iconContainer}>
                     <Vento width={40} height={40}/>        
                </View>   
                <Text>Vento</Text>

                
            </View>

            <View style={styles.item}>
                <View style={styles.iconContainer}>
                    <Visibilidade width={40} height={40}/>        
                 </View> 
            <Text>Visibilidade</Text>
            </View>

            <View style={styles.item}>
                <View style={styles.iconContainer}>
                    <Pressao width={40} height={40}/>        
                 </View> 
            <Text>Pressão</Text>
            </View>

        </View>  

        <View style= {styles.row}>
        
            <View style={styles.item}>
                <View style={styles.iconContainer}>
                    <UV width={50} height={50}/>        
                 </View> 
            <Text>Raios UV</Text>
            </View>

            <View style={styles.item}>
            <Text>Icon</Text>
            <Text>Qualidade do Ar</Text>
            </View>

            <View style={styles.item}>
            <Text>Pólem</Text>
            </View>

            <View style={styles.item}>
                <View style={styles.iconContainer}>
                     <Lua width={40} height={40}/>        
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
        marginBottom: 7,
    },
    item:
    {
        backgroundColor: '#46474a',
        alignItems: 'center',
        marginLeft: 7,
        borderRadius: 20,
        height: 85,
        width: 85,
    },
    iconContainer:
     {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
      },
});