import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import Home from './components/Home'
import Story1 from './components/Story1'
import Story2 from './components/Story2'
import Story3 from './components/Story3'
import Story4 from './components/Story4'
import Story5 from './components/Story5'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const App = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lighthouse Story" component={Story1} />
        <Stack.Screen name="Mary's Monkey" component={Story2} />
        <Stack.Screen name="Born to Fish" component={Story3} />
        <Stack.Screen name="Away From the Hurley Burley" component={Story4} />
        <Stack.Screen name="Paperboy" component={Story5} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5'
  
  }
})

export default App;
