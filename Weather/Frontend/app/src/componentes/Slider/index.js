import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, PanResponder } from 'react-native';

export default function Slider()
{
    const [scrollEnabled, setScrollEnabled] = useState(true);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
            if (gestureState.dx > 10 || gestureState.dx < -10) {
                setScrollEnabled(false);
            } else {
                setScrollEnabled(true);
            }
        },
        onPanResponderRelease: () => {
            setScrollEnabled(true);
        },
    });


    return(
        <View style= {styles.container}>
            <ScrollView horizontal
                {...panResponder.panHandlers}
                scrollEnabled={scrollEnabled}
                style={styles.scrollView}>
                
                <View style= {styles.item}>
                <Text>10:00</Text>
                <Text>Icon</Text>
                <Text>13º</Text>
                <Text>0%</Text>
                </View>

                <View style= {styles.item}>
                <Text>11:00</Text>
                <Text>Icon</Text>
                <Text>13º</Text>
                <Text>2%</Text>
                </View>

                <View style= {styles.item}>
                <Text>12:00</Text>
                <Text>Icon</Text>
                <Text>14º</Text>
                <Text>2%</Text>
                </View>

                <View style= {styles.item}>
                <Text>13:00</Text>
                <Text>Icon</Text>
                <Text>15º</Text>
                <Text>2%</Text>
                </View>

                <View style= {styles.item}>
                <Text>14:00</Text>
                <Text>Icon</Text>
                <Text>18º</Text>
                <Text>1%</Text>
                </View>

                <View style= {styles.item}>
                <Text>15:00</Text>
                <Text>Icon</Text>
                <Text>18º</Text>
                <Text>0%</Text>
                </View>

                <View style= {styles.item}>
                <Text>16:00</Text>
                <Text>Icon</Text>
                <Text>18º</Text>
                <Text>0%</Text>
                </View>

                <View style= {styles.item}>
                <Text>17:00</Text>
                <Text>Icon</Text>
                <Text>17º</Text>
                <Text>0%</Text>
                </View>

                <View style= {styles.item}>
                <Text>18:00</Text>
                <Text>Icon</Text>
                <Text>16º</Text>
                <Text>0%</Text>
                </View>

                <View style= {styles.item}>
                <Text>19:00</Text>
                <Text>Icon</Text>
                <Text>15º</Text>
                <Text>0%</Text>
                </View>

                <View style= {styles.item}>
                <Text>20:00</Text>
                <Text>Icon</Text>
                <Text>15º</Text>
                <Text>0%</Text>
                </View>

                <View style= {styles.item}>
                <Text>21:00</Text>
                <Text>Icon</Text>
                <Text>14º</Text>
                <Text>0%</Text>
                </View>

                <View style= {styles.item}>
                <Text>22:00</Text>
                <Text>Icon</Text>
                <Text>13º</Text>
                <Text>10%</Text>
                </View>

                <View style= {styles.item}>
                <Text>23:00</Text>
                <Text>Icon</Text>
                <Text>13º</Text>
                <Text>10%</Text>
                </View>
         
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create
({
    container: 
    {
        flex: 1,
        backgroundColor: '#46474a',
        flexDirection: 'row',
        paddingStart: 10,
        paddingEnd: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 10,
        marginBottom: 10,
        marginStart: 12,
        marginEnd: 12,
        borderRadius: 15,

    },
    scrollView: {
        width: '100%',
      },
    item:
    {
        paddingLeft: 15,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center'
    }
});