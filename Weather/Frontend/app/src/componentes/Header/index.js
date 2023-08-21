import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 44;

export default function Header()
{
    return(
        <View style= {styles.container}>
            
            <TouchableOpacity activeOpacity={0.7} style = {styles.buttonMenu}>
            <FiMenu name="menu" size={27} color="#FFF"/>
            </TouchableOpacity>
       
            <View style = {styles.content}>

            <Text style={styles.temperatura}> 20º</Text>
            <Text style={styles.clima}> Nublado</Text>
            
            <Text style={styles.localizacao}>
            {"\n"}
            <FaLocationDot name="localização" size={15} color="#FFF"/>
            Cruzeiro
            </Text>

            <Text style={styles.infos}>
            25º/18º  Sensação térmica de 22º
            </Text>
            
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create
({
    container:
    {
        backgroundColor: '#46474a',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 32,
    },
    content:
    {
        flex: 1,
        alignItems: 'center'
    },
    temperatura:
    {
        color: '#FFF',
        fontSize: 44,
        fontWeight: '500'       
    },
    clima:
    {
        color:'#FFF',
        fontSize: 18    
    },
    localizacao:
    {
        textAlign: 'left',
        color: '#FFF',
        fontSize: 16
    },
    infos:
    {
        color:'#FFF',
        fontSize: 14,
    }
})