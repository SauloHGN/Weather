import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Gota from '../../assets/iconsWeather/rain-drops.svg';

export default function WeekTemp()
{
    return(
        <View style= {styles.container}>
            
            <View style= {styles.item}>
            <Text style= {styles.dia}>Ontem</Text>
            <Text style= {styles.sub}>0%</Text>    
            <Text style= {styles.sub}> Max: 25º</Text>
            <Text style= {styles.sub}> Min: 15º</Text>
            </View>

            <View style= {styles.item}>
            <Text style= {styles.dia}>Hoje</Text>
            <Text style= {styles.sub}>0%</Text>
            <Text style= {styles.sub}> Max: 25º</Text>
            <Text style= {styles.sub}> Min: 15º</Text>
            </View>

            <View style= {styles.item}>
            <Text style= {styles.dia}>quarta-feira</Text>
            <Text style= {styles.sub}>0%</Text>
            <Text style= {styles.sub}> Max: 25º</Text>
            <Text style= {styles.sub}> Min: 15º</Text>
            </View>
            
            <View style= {styles.item}>
            <Text style= {styles.dia}>quinta-feira</Text>
            <Text style= {styles.sub}>0%</Text>
            <Text style= {styles.sub}> Max: 25º</Text>
            <Text style= {styles.sub}> Min: 15º</Text>
            </View>

            <View style= {styles.item}>
            <Text style= {styles.dia}>sexta-feira</Text>
            <Text style= {styles.sub}>0%</Text>
            <Text style= {styles.sub}> Max: 25º</Text>
            <Text style= {styles.sub}> Min: 15º</Text>
            </View>

            <View style= {styles.item}>
            <Text style= {styles.dia}>sabado</Text>
            <Text style= {styles.sub}>0%</Text>
            <Text style= {styles.sub}> Max: 25º</Text>
            <Text style= {styles.sub}> Min: 15º</Text>
            </View>

            <View style= {styles.item}>
            <Text style= {styles.dia}>domingo</Text>
            <Text style= {styles.sub}>0%</Text>
            <Text style= {styles.sub}> Max: 25º</Text>
            <Text style= {styles.sub}> Min: 15º</Text>
            </View>

            <View style= {styles.item}>
            <Text style= {styles.dia} >segunda-feira</Text>
            <Text style= {styles.sub}>0%</Text>
            <Text style= {styles.sub}> Max: 25º</Text>
            <Text style= {styles.sub}> Min: 15º</Text>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create
({
    container:
    {
        flex: 1,
        backgroundColor: '#46474a',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
        marginStart: 14,
        marginEnd: 14,
        paddingTop: 5,
        paddingBottom: 15,
        borderRadius: 15
        
    },
    item:
    {
        flexDirection: 'row',
        alignItems: 'center', 
        marginTop: 10,
        paddingStart: 2,
        paddingEnd: 2,
        
    },
    dia:
    {
        flex:1,
        alignItems:'center',
        paddingStart: 5,
        paddingEnd: 0,
        
    },
    sub:
    {

        alignItems:'center',
        paddingStart: 20,
        paddingEnd: 10,
    },

  
})