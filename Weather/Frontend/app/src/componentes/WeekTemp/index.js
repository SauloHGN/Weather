import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function WeekTemp()
{
    return(
        <View style= {styles.container}>
            
            <View style= {styles.item}>
            <Text style= {styles.sub}>Ontem</Text>
            <Text style= {styles.sub}>0%</Text>
            <Text style= {styles.sub}> icon</Text>
            <Text style= {styles.sub}> Max Temp</Text>
            <Text style= {styles.sub}> Min Temp</Text>
            </View>

            <View style= {styles.item}>
            <Text style= {styles.sub}>Hoje</Text>
            <Text style= {styles.sub}>0%</Text>
            <Text style= {styles.sub}> icon</Text>
            <Text style= {styles.sub}> Max Temp</Text>
            <Text style= {styles.sub}> Min Temp</Text>
            </View>

            <View style= {styles.item}>
            <Text style= {styles.sub}>Quarta-feira</Text>
            <Text style= {styles.sub}>0%</Text>
            <Text style= {styles.sub}> icon</Text>
            <Text style= {styles.sub}> Max Temp</Text>
            <Text style= {styles.sub}> Min Temp</Text>
            </View>
            
            <View style= {styles.item}>
            <Text style= {styles.sub}>Quinta-feira</Text>
            <Text style= {styles.sub}>0%</Text>
            <Text style= {styles.sub}> icon</Text>
            <Text style= {styles.sub}> Max Temp</Text>
            <Text style= {styles.sub}> Min Temp</Text>
            </View>

            <View style= {styles.item}>
            <Text style= {styles.sub}>Sexta-feira</Text>
            <Text style= {styles.sub}>0%</Text>
            <Text style= {styles.sub}> icon</Text>
            <Text style= {styles.sub}> Max Temp</Text>
            <Text style= {styles.sub}> Min Temp</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create
({
    container:
    {
        backgroundColor: '#46474a',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
        marginStart: 14,
        marginEnd: 14,
        paddingRight: 14,
        paddingBottom: 32,
        borderRadius: 10
        
    },
    item:
    {
        flexDirection: 'row',
        alignItems: 'center',     
        paddingStart: 10,
        paddingEnd: 10,
    },
    sub:
    {
        paddingLeft: 20,
    },
  
})