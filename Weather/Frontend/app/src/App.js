import React from 'react';
import Home from '../src/pages/Home'
import {} from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();


export default function App() 
{
  return (

      <Home/>
  
  );
}
/*  return (
    
<NavigationContainer>
<Stack.Navigator screenOptions={{ headerShown: false }}>
  
        <Stack.Screen name="Home" component={Home}/>
  
</Stack.Navigator>
</NavigationContainer>

*/



//export default App;
